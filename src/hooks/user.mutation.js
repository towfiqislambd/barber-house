import { useMutation, useQueryClient } from "@tanstack/react-query";
import {
  addAddress,
  BookMarkAdd,
  BookMarkRemove,
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
      toast.error(err?.response?.data?.message);
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
      toast.error(err?.response?.data?.message);
    },
  });
};

export const useBookmarkAdd = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationKey: ["bookmark add"],
    mutationFn: (payload) => BookMarkAdd(payload),

    onSuccess: (data) => {
      toast.success(data?.message);
      queryClient.invalidateQueries(["bookmarks"]);
    },
    onError: (err) => {
      toast.error(err?.response?.data?.message);
    },
  });
};

export const useBookmarkRemove = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationKey: ["bookmark remove"],
    mutationFn: (storeId) => BookMarkRemove(storeId),
    onSuccess: (data) => {
      toast.success(data?.message || "Bookmark removed!");
      queryClient.invalidateQueries(["bookmarks"]);
    },
    onError: (err) => {
      toast.error(err?.response?.data?.message || "Failed to remove bookmark");
    },
  });
};

export const useAppointmentBooking = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationKey: ["appointment-add"],
    mutationFn: (payload) => AppointmentAdd(payload),

    onSuccess: (data) => {
      toast.success(data?.message);
      queryClient.invalidateQueries(["all-appointment"]);
    },
    onError: (err) => {
      toast.error(err?.response?.data?.message);
    },
  });
};
