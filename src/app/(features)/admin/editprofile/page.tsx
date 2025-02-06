"use client";
import React, { useEffect, useState } from "react";
import { Col, Row, Image, Input, Avatar, Spin } from "antd";
import {
  deleteImage,
  editProfile,
} from "../../../../assets/images";
import "../../../globals.css";
import { useForm, Controller } from "react-hook-form";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import type { RootState, AppDispatch } from "../../../store/index";
import DashboardLayout from "../../../../components/Layout/dashboardLayout";
import { mediaImageNull, uploadMedia, userProfileUpdate } from "../../../store/authSlice";
import { toast } from "react-toastify";
export default function EditProfile() {
  const { handleSubmit, control, reset, formState } = useForm({
    mode: "onChange",
  });
  const dispatch: AppDispatch = useDispatch();
  const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;
  const { user, userList, loader, loaderMedia, imageID } = useAppSelector((state) => state.login);
  const [imageURL, setImageURL] = useState<string | null>(user?.media[0]?.url);
  const [file, setFile] = useState<File | null>(null);

  useEffect(() => {
    if (file) {
      const formData = new FormData();
      formData.append('media', file);
      const payload = formData
      dispatch(uploadMedia({payload}))
    }
  },[file])

  const handleImageChange = (e: React.ChangeEvent<HTMLInputElement>): void => {
    const file = e.target.files?.[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        if (reader.result) {
          setImageURL(reader.result as string);
        }
      };
      reader.readAsDataURL(file);
      setFile(file);
    }
  };
  const deleteImgae = () => {
    dispatch(mediaImageNull())
    setImageURL(null);
    setFile(null);
  };
  

  const editProfileForm = async (data: any) => {
    const firstName = data?.firstName ? data?.firstName : user?.firstName;
    const lastName = data?.lastName ? data?.lastName : user?.lastName;
    const mediaId = imageID
    const payload = {firstName, lastName, ...(mediaId !== null && mediaId !== undefined ? { mediaId } : null)}
    dispatch(userProfileUpdate({payload, cb: (data) => {
      setImageURL(data?.data?.media[0]?.url);
      toast.success("Edit Profile Successfully", {position: "top-center",});
    }}))
    dispatch(mediaImageNull())
    setImageURL(null);
    setFile(null);
  }


  if (loader) {
    return(
      <div className="fixed inset-0 flex items-center justify-center bg-white">
        <Spin size="large" />
      </div>
    )
  }

  return (
    <>
      <DashboardLayout>
        <div className="h-screen p-8">
          <div className="bg-[#f5f5f5] z-50 mb-6">
            <div>
              <p className="mb-2 text-[#afb2bd]">Pages / Profile Settings</p>
              <p className="font-extrabold text-3xl text-[#141340]">Profile Settings</p>
            </div>
            <div></div>
          </div>
          <div className="w-full bg-white p-6 rounded-2xl">
            <p className="font-semibold text-2xl mb-8 text-[#4a4a4a]">Edit Profile</p>
            <form className="" onSubmit={handleSubmit(editProfileForm)}>
              <div className="upload-photo-container flex justify-center">
                <label htmlFor="file">
                  <input
                    id="file"
                    type="file"
                    accept="image/*"
                    onChange={handleImageChange}
                    className="hidden"
                    required={false}
                  />
                  {imageURL ? (
                    <div className="relative">
                      <Image preview={false}
                        src={imageURL}
                        alt="Uploaded"
                        className="circle-image relative"
                        width={110}
                        height={110}
                      />
                      <Avatar
                        src={deleteImage.src}
                        className="left-24 bottom-2 z-10 cursor-pointer absolute"
                        onClick={deleteImgae}
                      />
                    </div>
                  ) : (
                    <div className="cursor-pointer">
                      <Image preview={false} alt="Profile" src={editProfile.src} width={110} height={110} />
                    </div>
                  )}
                </label>
              </div>
              <Row gutter={4} className="flex justify-center mt-4">
                <Col xxl={8} xl={10} lg={12} md={16} sm={24} xs={24}>
                  <label className="text-[#0c1926] font-medium text-base">First Name</label>
                  <Controller
                    name="firstName"
                    control={control}
                    render={({ field, fieldState }) => (
                        <Input
                          required
                          type={"text"}
                          defaultValue={user?.firstName}
                          onInput={(e) => {
                            (e.target as HTMLInputElement).value = (e.target as HTMLInputElement).value.replace(/[0-9]/g, ""); // Removes numeric characters
                          }}
                          className="mt-2 w-full px-2 py-3 rounded-lg outline-0 bg-[#fafafa] border border-[#c9c9c9]"
                          {...field}
                        />
                    )}
                  />
                </Col>
              </Row>
              <Row gutter={4} className="flex justify-center mt-4">
                <Col xxl={8} xl={10} lg={12} md={16} sm={24} xs={24}>
                  <label className="text-[#0c1926] font-medium text-base">Last Name</label>
                  <Controller
                    name="lastName"
                    control={control}
                    render={({ field, fieldState }) => (
                      <Input
                          required
                          type={"text"}
                          defaultValue={user?.lastName}
                          onInput={(e) => {
                            (e.target as HTMLInputElement).value = (e.target as HTMLInputElement).value.replace(/[0-9]/g, ""); // Removes numeric characters
                          }}
                          className="mt-2 w-full px-2 py-3 rounded-lg outline-0 bg-[#fafafa] border border-[#c9c9c9]"
                          {...field}
                        />
                    )}
                  />
                </Col>
              </Row>
              <Row gutter={4} className="flex justify-center mt-4">
                <Col xxl={8} xl={10} lg={12} md={16} sm={24} xs={24}>
                  <label className="text-[#0c1926] font-medium text-base">Email</label>
                  <Controller
                    name="email"
                    control={control}
                    render={({ field, fieldState }) => (
                        <input
                          required
                          type={"email"}
                          value={user?.email}
                          disabled
                          className="mt-2 w-full px-2 py-3 rounded-lg outline-0 bg-[#fafafa] border border-[#c9c9c9] text-[#c9c9c9]"
                          // {...field}
                        />
                    )}
                  />
                </Col>
              </Row>
              <Row gutter={4} className="flex justify-center mt-4">
                <Col xxl={8} xl={10} lg={12} md={16} sm={24} xs={24}>
                {!loaderMedia &&
                <button className="bg-gradient-to-r from-[#8052A0] to-[#55A0D7] w-full py-3 mt-4 rounded-lg text-white font-semibold"> Confirm </button>}
                </Col>
              </Row>
            </form>
          </div>
        </div>
      </DashboardLayout>
    </>
  );
}
