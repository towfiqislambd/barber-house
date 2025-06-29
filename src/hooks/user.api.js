import { axiosPublic } from "./useAxiosPublic";
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

export const UserSearchStores = async (queryParams = {}) => {
  const { data } = await axiosPublic("/api/online-store/show-all", {
    params: queryParams,
  });
  return data?.data;
};

export const StoreDetails = async (id) => {
  const { data } = await axiosPublic(`/api/online-store/show-details/${id}`);
  return data;
};
export const BookMarkAdd = async (payload) => {
  const { data } = await axiosSecure.post(
    "/api/online-store/bookmark/add",
    payload
  );
  return data;
};

export const BookmarkGet = async () => {
  const { data } = await axiosSecure.get(
    "/api/customer-dashboard/my-favorites"
  );

  return data?.data;
};

export const BookMarkRemove = async (payload) => {
  const { data } = await axiosSecure.post(
    `/api/online-store/bookmark/remove`,
    payload
  );
  return data;
};

export const stores = async () => {
  const { data } = await axiosPublic.get("/api/online-store/show-all");
  return data?.data;
};

export const AppointmentAdd = async (payload) => {
  const { data } = await axiosSecure.post(
    `/api/online-store/appointment/book`,
    payload
  );
  return data;
};

export const AppointmentList = async () => {
  const { data } = await axiosSecure("/api/online-store/appointments");
  return data?.data;
};

export const AppointmentReschedule = async (id, payload) => {
  const { data } = await axiosSecure.post(
    `/api/online-store/appointment/reschedule/${id}`,
    payload
  );
  return data;
};

export const AppointmentCancel = async (id) => {
  const { data } = await axiosSecure.post(
    `/api/online-store/appointment/cancel/${id}`
  );

  return data;
};

export const Checkout = async (payload) => {
  const { data } = await axiosSecure.post("/api/product/purchase", payload);
  return data;
};

export const ShowProducts = async () => {
  const { data } = await axiosSecure.get("/api/customer-dashboard/my-products");
  return data?.data;
};