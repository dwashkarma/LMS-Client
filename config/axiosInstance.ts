import axios, { AxiosRequestHeaders } from "axios";
import { error } from "console";
import { getSession } from "next-auth/react";

const baseURL = process.env.NEXT_PUBLIC_BASEURL;

const axiosInstance = axios.create({
  baseURL: baseURL,
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
  },
});

const axiosHeaders = async () => {
  const session = await getSession();
  if (session && session.accessToken) {
    return {
      Authorization: `Bearer ${session.accessToken}`,
    };
  } else {
    return {};
  }
};

axiosInstance.interceptors.request.use(
  async (config) => {
    const headers = await axiosHeaders();
    if (headers.Authorization) {
      config.headers = {
        ...config.headers,
        ...headers,
      } as AxiosRequestHeaders;
    } else {
      console.log("Authorization headers is not set");
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

axiosInstance.interceptors.response.use(
  (response) => {
    return response;
  },
  async (error) => {
    if (error.response && error.response?.status === 400) {
      if (typeof window !== undefined) {
        window.location.href = "/dashboard";
      }
    }
    return Promise.reject(error);
  }
);
export { axiosInstance };
