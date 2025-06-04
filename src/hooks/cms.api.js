import { axiosPublic } from "./useAxiosPublic";
import { axiosSecure } from "./useAxiosSecure";

// Services Type
export const ServicesType = async () => {
  const { data } = await axiosPublic("/api/service_types");
  return data?.data;
};

// Onboard:
export const OnBoarding = async payload => {
  const { data } = await axiosSecure.post(
    "/api/create/business/profile",
    payload
  );
  return data?.data;
};
