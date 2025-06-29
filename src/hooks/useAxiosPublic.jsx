import axios from "axios";

export const axiosPublic = axios.create({
  baseURL: import.meta.env.VITE_SITE_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

export const axiosPublicReg = axios.create({
  baseURL: import.meta.env.VITE_SITE_URL,
  headers: {
    "Content-Type": "multipart/form-data",
  },
});
const useAxiosPublic = () => {
  return axiosPublic;
};

export default useAxiosPublic;
