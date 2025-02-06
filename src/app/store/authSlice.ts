import { createSlice, createAsyncThunk, PayloadAction } from "@reduxjs/toolkit";
import { ApiCaller, Utils } from "../../config";
import { toast } from "react-toastify";
import { log } from "util";

// Define the shape of the state
interface AuthState {
  user: any | null;
  loader: boolean;
  feedbackLoader: boolean;
  loaderMedia: boolean;
  error: string | null;
  email: string;
  otpcode: any;
  userList: UserListing | null;
  userDetails: any;
  feedbackList: FeedbackResponse | null;
  feedbackReplies: feedbackReplyResponse | null;
  value: number;
  offsetValue: number | null;
  imageID: number | null;
  dashboardData: UserStatsResponse | null;
}

type Role = {
  id: number;
  name: string;
  createdAt: string; // ISO date string
  updatedAt: string; // ISO date string
};

type LoginUser = {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  roleId: number;
  createdAt: string; // ISO date string
  media: { url: string }[]; // Empty array or an array of media objects
  role: Role;
  authToken: string;
};

type LoginResponse = {
  status: number;
  message: string;
  data: LoginUser;
  success: boolean;
};


// Define the User type
interface User {
  id: number;
  name: string;
  email: string;
  auth_token: string;
  [key: string]: any; // Add this if the user object can have additional properties
}

// Define the payload for sign-in
interface GetUsersPayload {
  offset: number;
  limit: number;
  search: string;
}

interface GetUsersFeedbackPayload {
  offset: number;
  limit: number;
  filterBy:string;
}

interface StatusUpdateUsersPayload {
  id: number | undefined;
  isActive: boolean;
}

interface UserFeedbackReplyPayload {
  id: number | undefined;
  reply: string;
}

type Media = {
  id: number;
  url: string;
  type: string; // e.g., "profile"
  format: string; // e.g., "jpeg"
  createdAt: string; // ISO date string
  updatedAt: string; // ISO date string
  modelHasMedia: {
    mediaId: number;
    modelType: string; // e.g., "user"
    modelId: number;
    createdAt: string; // ISO date string
    updatedAt: string; // ISO date string
  };
};

type FeedbackUser = {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  createdAt: string; // ISO date string
  media: Media[];
};

type Feedback = {
  id: number;
  content: string;
  isReplied: boolean;
  createdAt: string; // ISO date string
  user: FeedbackUser;
};

type FeedbackData = {
  feedbacksCount: number;
  feedbacks: Feedback[];
};

type FeedbackResponse = {
  status: number;
  message: string;
  data: FeedbackData;
  success: boolean;
};

type UserListing = {
  status: number;
  message: string;
  data: {
      usersCount: number;
      users: UserList[];
  };
};

type UserList = {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  roleId: number;
  familyId: number;
  createdAt: string;
  profilesCreated: number;
  family: Family;
  media: UserMedia[];
};

type Family = {
  isActive: boolean;
};

type UserMedia = {
  url: string;
  id: number;
  type: string;
  format: string;
  createdAt: string;
  updatedAt: string;
  modelHasMedia: ModelHasMedia;
};

type ModelHasMedia = {
  mediaId: number;
  modelType: string;
  modelId: number;
  createdAt: string;
  updatedAt: string;
};

type UserStatsResponse = {
  status: number;
  message: string;
  data: {
    totalUsers: number;
    usersByAge: {
      "1 - 4": number;
      "5 - 7": number;
      "8+": number;
    };
    usersDeviceType: {
      android: {
        count: number;
        percentage: number;
      };
      IOS: {
        count: number;
        percentage: number;
      };
    };
  };
  success: boolean;
};

// feedback reply
interface feedbackReplyMedia {
  url: string;
  id: number;
  type: string;
  format: string;
  createdAt: string;
  updatedAt: string;
  modelHasMedia: {
    mediaId: number;
    modelType: string;
    modelId: number;
    createdAt: string;
    updatedAt: string;
  };
}

interface feedbackReplyUser {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  createdAt: string;
  media: feedbackReplyMedia[];
}

interface FeedbackReply {
  id: number;
  content: string;
  createdAt: string;
}

interface feedbackReplyData {
  id: number;
  content: string;
  isReplied: boolean;
  createdAt: string;
  repliesCount: number;
  user: feedbackReplyUser;
  feedbackReplies: FeedbackReply[];
}

interface feedbackReplyResponse {
  status: number;
  message: string;
  data: feedbackReplyData;
  success: boolean;
}




// Async thunk for Auth APIs
export const signIn = createAsyncThunk<any, { payload: any; cb?: (data: LoginResponse) => void }, { rejectValue: string }>(
  "auth/signIn",
  async ({ payload, cb }, { rejectWithValue }) => {
    try {
      const res = await ApiCaller.Post("/auth/login", payload);
      if (res.status === 200) {
        if (typeof window !== "undefined") {
        // Save tokens in localStorage
        localStorage.setItem("user", JSON.stringify(res.data.data));
        localStorage.setItem("auth_token", JSON.stringify(res.data.data.authToken));
        }
        // Show success message
        // Callback if provided
        cb?.(res.data);
        
        return res.data.data;
      } else {
        return rejectWithValue(res.data?.message || "Invalid credentials");
      }
    } catch (error: any) {
      
      toast.error("Incorrect email or password", {
        position: "top-center",});
      // message.error("Something went wrong");
      return rejectWithValue(error.message || "Something went wrong");
    }
  }
);

export const sendOtp = createAsyncThunk<any, { payload: any; cb?: (data: any) => void }, { rejectValue: string }>(
  "auth/sendOtp",
  async ({ payload, cb }, { rejectWithValue }) => {
    try {
      const res = await ApiCaller.Post("/auth/send-otp", payload);
      if (res.status === 200) {
        // Show success message
        // Callback if provided
        cb?.(res.data);
        return res.data.data.email;
      } else {
        return rejectWithValue(res.data?.message || "Invalid credentials");
      }
    } catch (error: any) {
      toast.error("Incorrect email", {
        position: "top-center",});
      // message.error("Something went wrong");
      return rejectWithValue(error.message || "Something went wrong");
    }
  }
);

export const verifyOtp = createAsyncThunk<any, { payload: any; cb?: (data: any) => void }, { rejectValue: string }>(
  "auth/verifyOtp",
  async ({ payload, cb }, { rejectWithValue }) => {
    
    try {
      const res = await ApiCaller.Post("/auth/verify-otp", payload);
      if (res.status === 200) {
        if (typeof window !== "undefined") {
          // Save tokens in localStorage
          localStorage.setItem("auth_token", JSON.stringify(res.data.data.authToken));
          }
        cb?.(res.data);
        return res.data;
      } else {
        return rejectWithValue(res.data?.message || "Invalid credentials");
      }
    } catch (error: any) {
      toast.error("Invalid code.", {
        position: "top-center",});
      // message.error("Something went wrong");
      return rejectWithValue(error.message || "Something went wrong");
    }
  }
);

export const updatePassword = createAsyncThunk<any, { payload: any; cb?: (data: any) => void }, { rejectValue: string }>(
  "auth/updatePassword",
  async ({ payload, cb }, { rejectWithValue }) => {
    try {
      const res = await ApiCaller.Patch("/auth/reset-password", payload);
      if (res?.status === 200) {
        cb?.(res.data);
        return res.data;
      } else {
        return 
      }
    } catch (error: any) {
      toast.error("Password Not Updated", {
        position: "top-center",});
      return rejectWithValue(error.message || "Something went wrong");
    }
  }
);

// Async thunk for User Management APIs
export const getUsers = createAsyncThunk<any, { payload: GetUsersPayload; cb?: (data: UserListing) => void }, { rejectValue: string }>(
  "admin/getUsers",
  async ({ payload, cb }, { rejectWithValue }) => {
    
    try {
      const res = await ApiCaller.Get(`/admin/users?offset=${payload?.offset}&limit=${payload?.limit}&search=${payload?.search}`);
      if (res?.status === 200) {
        cb?.(res?.data);
        return res.data;
        
      }
      else {
        return
      }
    } catch (error: any) {
      toast.error("Something went wrong", {
        position: "top-center",});
      return rejectWithValue(error.message || "Something went wrong");
    }
  }
);

export const userDetails = createAsyncThunk<any, { payload: number | undefined; cb?: (data: any) => void }, { rejectValue: string }>(
  "admin/userDetails",
  async ({ payload, cb }, { rejectWithValue }) => {
    
    try {
      const res = await ApiCaller.Get(`/admin/user/${payload}`);
      if (res?.status === 200) {
        cb?.(res.data);
        return res.data; 
      }
      else {
        return
      }
    } catch (error: any) {
      toast.error("Something went wrong", {
        position: "top-center",});
      return rejectWithValue(error.message || "Something went wrong");
    }
  }
);

export const userStatus = createAsyncThunk<any, { payloads: StatusUpdateUsersPayload; cb?: () => void }, { rejectValue: string }>(
  "admin/userStatus",
  async ({ payloads, cb }, { rejectWithValue }) => {
    try {
      const res = await ApiCaller.Patch(`/admin/user/${payloads?.id}`, {isActive: payloads?.isActive});
      if (res?.status === 200) {
        cb?.();
        return res.data; 
      }
      else {
        return
      }
    } catch (error: any) {
      toast.error("Something went wrong", {
        position: "top-center",});
      return rejectWithValue(error.message || "Something went wrong");
    }
  }
);

export const userDelete = createAsyncThunk<any, { payloads: number | undefined; cb?: (data: any) => void }, { rejectValue: string }>(
  "admin/userDelete",
  async ({ payloads, cb }, { rejectWithValue }) => {
    try {
      const res = await ApiCaller.Delete(`/admin/user/${payloads}`);
      if (res?.status === 200) {
        cb?.(res.data);
        return res.data; 
      }
      else {
        return
      }
    } catch (error: any) {
      toast.error("Something went wrong", {
        position: "top-center",});
      return rejectWithValue(error.message || "Something went wrong");
    }
  }
);

// Async thunk for Admin Profile APIs
export const userProfileUpdate = createAsyncThunk<any, { payload: any; cb?: (data: any) => void }, { rejectValue: string }>(
  "admin/userStatus",
  async ({ payload, cb }, { rejectWithValue }) => {
    try {
      const res = await ApiCaller.Patch(`/user`, payload);
      if (res?.status === 200) {

        
        if (typeof window !== "undefined") {
          localStorage.setItem("user", JSON.stringify(res.data.data));
          }
        cb?.(res.data);
        return res.data.data; 
      }
      else {
        return
      }
    } catch (error: any) {
      toast.error("Profile Not Updated", {
        position: "top-center",});
      return rejectWithValue(error.message || "Something went wrong");
    }
  }
);

export const updateNewPassword = createAsyncThunk<any, { payload: any; cb?: () => void }, { rejectValue: string }>(
  "admin/updateNewPassword",
  async ({ payload, cb }, { rejectWithValue }) => {
    try {
      const res = await ApiCaller.Patch("/user/change-password", payload);
      if (res?.status === 200) {
        cb?.();
        return res.data;
      } else {
        return 
      }
    } catch (error: any) {
      toast.error("Password Not Updated", {
        position: "top-center",});
      return rejectWithValue(error.message || "Something went wrong");
    }
  }
);

export const uploadMedia = createAsyncThunk<any, { payload: any; cb?: (data : any) => void }, { rejectValue: string }>(
  "admin/uploadMedia",
  async ({ payload, cb }, { rejectWithValue }) => {
    try {
      const res = await ApiCaller.Post("/auth/upload-media", payload);
      if (res.status === 200) {
        cb?.(res.data);
        return res.data.data.id;
      } else {
        return rejectWithValue(res.data?.message || "Invalid credentials");
      }
    } catch (error: any) {
      toast.error("Incorrect email or password", {
        position: "top-center",});
      // message.error("Something went wrong");
      return rejectWithValue(error.message || "Something went wrong");
    }
  }
);

// Async thunk for Feedback Management APIs
export const getUsersFeedback = createAsyncThunk<any, { payload: GetUsersFeedbackPayload; cb?: () => void }, { rejectValue: string }>(
  "admin/getUsersFeedback",
  async ({ payload, cb }, { rejectWithValue }) => {
    
    try {
      const res = await ApiCaller.Get(`/admin/feedbacks?offset=${payload?.offset}&limit=${payload?.limit}&filterBy=${payload?.filterBy}`);
      if (res?.status === 200) {
        cb?.();
        return res.data;
        
      }
      else {
        return
      }
    } catch (error: any) {
      toast.error("Something went wrong", {
        position: "top-center",});
      return rejectWithValue(error.message || "Something went wrong");
    }
  }
);

export const getFeedbackReplies = createAsyncThunk<any, { payload: number; cb?: () => void }, { rejectValue: string }>(
  "admin/getFeedbackReplies",
  async ({ payload, cb }, { rejectWithValue }) => {
    
    try {
      const res = await ApiCaller.Get(`/admin/feedback/${payload}`);
      if (res?.status === 200) {
        cb?.();
        return res.data;
        
      }
      else {
        return
      }
    } catch (error: any) {
      toast.error("Something went wrong", {
        position: "top-center",});
      return rejectWithValue(error.message || "Something went wrong");
    }
  }
);

export const userFeedbackDelete = createAsyncThunk<any, { payloads: number | null; cb?: () => void }, { rejectValue: string }>(
  "admin/userFeedbackDelete",
  async ({ payloads, cb }, { rejectWithValue }) => {
    try {
      const res = await ApiCaller.Delete(`/admin/feedback/${payloads}`);
      if (res?.status === 200) {
        cb?.();
        return res.data; 
      }
      else {
        return
      }
    } catch (error: any) {
      toast.error("Something went wrong", {
        position: "top-center",});
      return rejectWithValue(error.message || "Something went wrong");
    }
  }
);

export const userFeedbackHardDelete = createAsyncThunk<any, { payloads: number | null; cb?: () => void }, { rejectValue: string }>(
  "admin/userFeedbackHardDelete",
  async ({ payloads, cb }, { rejectWithValue }) => {
    try {
      const res = await ApiCaller.Delete(`/admin/feedback/${payloads}/delete`);
      if (res?.status === 200) {
        cb?.();
        return res.data; 
      }
      else {
        return
      }
    } catch (error: any) {
      toast.error("Something went wrong", {
        position: "top-center",});
      return rejectWithValue(error.message || "Something went wrong");
    }
  }
);

export const userFeedbackReply = createAsyncThunk<any, { payloads: UserFeedbackReplyPayload; cb?: () => void }, { rejectValue: string }>(
  "admin/userFeedbackReply",
  async ({ payloads, cb }, { rejectWithValue }) => {
    try {
      const res = await ApiCaller.Post(`/admin/feedback/${payloads?.id}`, {reply: payloads?.reply});
      if (res?.status === 200) {
        cb?.();
        return res.data; 
      }
      else {
        return
      }
    } catch (error: any) {
      toast.error("Something went wrong", {
        position: "top-center",});
      return rejectWithValue(error.message || "Something went wrong");
    }
  }
);

// Async thunk for Feedback Management APIs
export const getDashboard = createAsyncThunk<any, void, { rejectValue: string }>(
  "admin/getDashboard",
  async (_, { rejectWithValue }) => {
    console.log("kkkkkkkkkkkkkkkk");
    
    try {
      const res = await ApiCaller.Get(`/admin/dashboard`);
      if (res?.status === 200) {
        return res.data;
      }
      else {
        return
      }
    } catch (error: any) {
      toast.error("Something went wrong", {
        position: "top-center",});
      return rejectWithValue(error.message || "Something went wrong");
    }
  }
);



// Initial state
const initialState: AuthState = {
  user: typeof window !== 'undefined' && localStorage.getItem("user") ? JSON.parse(localStorage.getItem("user")!) : null,
  loader: false,
  loaderMedia: false,
  feedbackLoader: false,
  error: null,
  email : "",
  otpcode: null,
  userList: null,
  userDetails: null,
  feedbackList: null,
  feedbackReplies: null,
  value: 1,
  offsetValue: null,
  imageID: null,
  dashboardData: null,
};


// Auth slice
const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {
    logout: (state) => {
      localStorage.removeItem("user");
      localStorage.removeItem("auth_token");
      state.user = null;
      state.loader = false;
      state.error = null;
    },
    decrement: (state) => {
      state.value -= 1
    },

    mediaImageNull: (state) => {
      state.imageID = null;
    },

    offsetSave: (state, action) => {
      state.offsetValue = action.payload 
    },

    resetValue: (state) => {
      state.value = 1
    },
    increment: (state) => {
      state.value += 1
    },
  },
  extraReducers: (builder) => {
    builder
      .addCase(signIn.pending, (state) => {
        state.loader = true;
        state.error = null;
      })
      .addCase(signIn.fulfilled, (state, action: PayloadAction<User>) => {
        state.user = action.payload;
        state.loader = false;
        state.error = null;
      })
      .addCase(signIn.rejected, (state, action: PayloadAction<string | undefined>) => {
        state.loader = false;
        state.error = action.payload || "Login failed";
      })
      .addCase(sendOtp.pending, (state) => {
        state.loader = true;
      })
      .addCase(sendOtp.fulfilled, (state, action: PayloadAction<any>) => {
        state.loader = false;
        state.email = action.payload
      })
      .addCase(sendOtp.rejected, (state, action: PayloadAction<string | undefined>) => {
        state.loader = false;
        state.error = action.payload || "Otp failed";
      })
      .addCase(getUsers.pending, (state) => {
        state.loader = true;
      })
      .addCase(getUsers.fulfilled, (state, action: PayloadAction<any>) => {
        state.loader = false;
        state.userList = action.payload
      })
      .addCase(getUsers.rejected, (state, action: PayloadAction<string | undefined>) => {
        state.loader = false;
        state.error = action.payload || "User failed";
      })
      .addCase(userDetails.pending, (state) => {
        state.loader = true;
      })
      .addCase(userDetails.fulfilled, (state, action: PayloadAction<any>) => {
        state.loader = false;
        state.userDetails = action.payload
      })
      .addCase(userDetails.rejected, (state, action: PayloadAction<string | undefined>) => {
        state.loader = false;
        state.error = action.payload || "User failed";
      })
      .addCase(userProfileUpdate.pending, (state) => {
        state.loader = true;
      })
      .addCase(userProfileUpdate.fulfilled, (state, action: PayloadAction) => {
        state.user = action.payload;
        state.loader = false;
      })
      .addCase(userProfileUpdate.rejected, (state) => {
        state.loader = false;
      })
      .addCase(uploadMedia.pending, (state) => {
        state.loaderMedia = true;
      })
      .addCase(uploadMedia.fulfilled, (state, action : PayloadAction<number | null>) => {
        state.imageID = action.payload;
        state.loaderMedia = false;
      })
      .addCase(uploadMedia.rejected, (state) => {
        state.loaderMedia = false;
      })
      .addCase(updateNewPassword.pending, (state) => {
        state.loader = true;
      })
      .addCase(updateNewPassword.fulfilled, (state) => {
        state.loader = false;
      })
      .addCase(updateNewPassword.rejected, (state) => {
        state.loader = false;
      })
      .addCase(getUsersFeedback.pending, (state) => {
        state.loader = true;
      })
      .addCase(getUsersFeedback.fulfilled, (state, action: PayloadAction<any>) => {
        state.loader = false;
        state.feedbackList = action.payload
      })
      .addCase(getUsersFeedback.rejected, (state, action: PayloadAction<string | undefined>) => {
        state.loader = false;
        state.error = action.payload || "User failed";
      })
      .addCase(getFeedbackReplies.pending, (state) => {
        state.feedbackLoader = true;
      })
      .addCase(getFeedbackReplies.fulfilled, (state, action: PayloadAction<any>) => {
        state.feedbackLoader = false;
        state.feedbackReplies = action.payload
      })
      .addCase(getFeedbackReplies.rejected, (state, action: PayloadAction<string | undefined>) => {
        state.feedbackLoader = false;
        state.error = action.payload || "User failed";
      })
      .addCase(getDashboard.pending, (state) => {
        state.loader = true;
      })
      .addCase(getDashboard.fulfilled, (state, action: PayloadAction<UserStatsResponse>) => {
        state.loader = false;
        state.dashboardData = action.payload
      })
      .addCase(getDashboard.rejected, (state, action: PayloadAction<string | undefined>) => {
        state.loader = false;
        state.error = action.payload || "User failed";
      })
      

  },
});

// Export actions
export const { logout, decrement, increment, resetValue, offsetSave, mediaImageNull } = authSlice.actions;

// Export reducer
export default authSlice.reducer;
