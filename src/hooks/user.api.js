import { axiosSecure } from "./useAxiosSecure";

export const UserDataGet = async () => {
  const { data } = await axiosSecure("/api/customer-dashboard/profile");
  return data?.data;
};

export const updateProfile = async (payload) => {
  const { data } = await axiosSecure.post(
    `/api/customer-dashboard/update-profile`,
    payload
  );

  return data;
};

export const addAddress = async (payload) => {
  const { data } = await axiosSecure.post(
    `/api/customer-dashboard/add-address`,
    payload
  );
  return data;
};

export const updateAddress = async (payload) => {
  const { data } = await axiosSecure.post(
    `/api/customer-dashboard/edit-address`,
    payload
  );

  return data;
};

export const deleteAddress = async (payload) => {
  const { data } = await axiosSecure.post(
    "/api/customer-dashboard/delete-address",
    payload
  );
  return data;
};
