import axios from 'axios';
import { Utils } from '..';

// Base URL from the environment variables
const BASE_URL = process.env.NEXT_PUBLIC_BASE_URL;

// Configure axios defaults
axios.defaults.baseURL = BASE_URL;

// Attach interceptors for request and response
axios.interceptors.request.use(
  (config) => {
    const authToken = localStorage.getItem('auth_token');
    if (authToken) {
      config.headers["x-auth-token"] = JSON.parse(authToken);
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

axios.interceptors.response.use(
  (response) => {
    return response;
  },
  (error) => {
    if (error.response?.status === 401) {
      // Handle unauthorized errors
      // localStorage.removeItem('user');
      // localStorage.removeItem('auth_token');
      window.location.replace('/'); // Redirect to login

      return Promise.reject(new Error('Unauthorized'));
    }

    // Handle other errors
    return Promise.reject(error);
  }
);

// API Caller class for managing HTTP requests
export default class ApiCaller {
  static async Get(endpoint: string) {
    try {
      const response = await axios.get(endpoint);
      return response;
    } catch (error) {
      // if (axios.isAxiosError(error)) {
      //   Utils.showMessage('error', error.message || 'An error occurred');
      // } else {
      //   Utils.showMessage('error', 'An unknown error occurred');
      // }

    }
  }

  static async Post(endpoint: string, body: any) {
    try {
      const response = await axios.post(endpoint, body);
      return response;
    } catch (error: any) {
      // Utils.showMessage(
      //   'error',
      //   error?.response?.data?.error?.message ||
      //     error?.response?.error?.message ||
      //     'Internet not connected'
      // );
      throw error;
    }
  }

  static async Patch(endpoint: string, body: any) {
    try {
      const response = await axios.patch(endpoint, body);
      return response;
    } catch (error) {
      // if (axios.isAxiosError(error)) {
      //   Utils.showMessage('error', error.message || 'An error occurred');
      // } else {
      //   Utils.showMessage('error', 'An unknown error occurred');
      // }

    }
  }

  static async Delete(endpoint: string) {
    try {
      const response = await axios.delete(endpoint);
      return response;
    } catch (error) {
      // if (axios.isAxiosError(error)) {
      //   Utils.showMessage('error', error.message || 'An error occurred');
      // } else {
      //   Utils.showMessage('error', 'An unknown error occurred');
      // }

    }
  }
}
