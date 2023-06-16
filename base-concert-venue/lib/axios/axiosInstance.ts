import axios, { AxiosRequestConfig } from "axios";

const config: AxiosRequestConfig = {};
export const baseURL =
  process.env.APP_ENV === "test"
    ? "http://localhost:3001/"
    : process.env.NEXT_PUBLIC_BASE_URL;

config.baseURL = "http://localhost:3000";

export const axiosInstance = axios.create(config);
