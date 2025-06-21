import { useMutation } from "@tanstack/react-query";
import {
  addAddress,
  deleteAddress,
  updateAddress,
  updateProfile,
} from "./user.api";
import toast from "react-hot-toast";

export const useUpdateProfileData = () => {
  return useMutation({
    mutationKey: ["update-profile"],
    mutationFn: (payload) => updateProfile(payload),
    onSuccess: (data) => {
      toast.success(data?.message);
    },
    onError: (err) => {
      toast.error(err?.response?.data?.message);
    },
  });
};

export const useAddAddress = () => {
  return useMutation({
    mutationKey: ["add-address"],
    mutationFn: (payload) => addAddress(payload),
    onSuccess: (data) => {
      toast.success(data?.message);
    },
    onError: (err) => {
      toast.error(err?.response?.data?.message);
    },
  });
};

export const useUpdateAddress = () => {
  return useMutation({
    mutationKey: ["update-address"],
    mutationFn: (payload) => updateAddress(payload),
    onSuccess: (data) => {
      console.log(data);

      toast.success(data?.message);
    },
    onError: (err) => {
      toast.error(err?.data?.response?.message);
    },
  });
};

export const useDeleteAddress = () => {
  return useMutation({
    mutationKey: ["delete-address"],
    mutationFn: (payload) => deleteAddress(payload),

    onSuccess: (data) => {
      toast.success(data?.message);
    },

    onError: (err) => {
      console.log(err);

      toast.error(err?.data?.response?.message);
    },
  });
};
