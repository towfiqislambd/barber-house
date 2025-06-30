import { useMutation, useQueryClient } from "@tanstack/react-query";
import {
  addAddress,
  AddReview,
  AppointmentAdd,
  AppointmentCancel,
  AppointmentReschedule,
  BookMarkAdd,
  BookMarkRemove,
  Checkout,
  deleteAddress,
  updateAddress,
  updateProfile,
} from "./user.api";
import toast from "react-hot-toast";

export const useUpdateProfileData = () => {
  return useMutation({
    mutationKey: ["update-profile"],
    mutationFn: payload => updateProfile(payload),
    onSuccess: data => {
      toast.success(data?.message);
    },
    onError: err => {
      toast.error(err?.response?.data?.message);
    },
  });
};

export const useAddAddress = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationKey: ["add-address"],
    mutationFn: payload => addAddress(payload),
    onSuccess: data => {
      toast.success(data?.message);
      queryClient.invalidateQueries(["user"]);
    },
    onError: err => {
      toast.error(err?.response?.data?.message);
    },
  });
};

export const useUpdateAddress = () => {
  return useMutation({
    mutationKey: ["update-address"],
    mutationFn: payload => updateAddress(payload),
    onSuccess: data => {
      console.log(data);

      toast.success(data?.message);
    },
    onError: err => {
      toast.error(err?.response?.data?.message);
    },
  });
};

export const useDeleteAddress = () => {
  return useMutation({
    mutationKey: ["delete-address"],
    mutationFn: payload => deleteAddress(payload),

    onSuccess: data => {
      toast.success(data?.message);
    },

    onError: err => {
      toast.error(err?.response?.data?.message);
    },
  });
};

export const useBookmarkAdd = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationKey: ["bookmark add"],
    mutationFn: payload => BookMarkAdd(payload),

    onSuccess: data => {
      toast.success(data?.message);
      queryClient.invalidateQueries(["bookmarks"]);
    },
    onError: err => {
      toast.error(err?.response?.data?.message);
    },
  });
};

export const useBookmarkRemove = () => {
  const queryClient = useQueryClient();

  return useMutation({
    mutationKey: ["bookmark remove"],
    mutationFn: storeId => BookMarkRemove(storeId),
    onSuccess: data => {
      toast.success(data?.message || "Bookmark removed!");
      queryClient.invalidateQueries(["bookmarks"]);
    },
    onError: err => {
      toast.error(err?.response?.data?.message || "Failed to remove bookmark");
    },
  });
};

export const useAppointmentBooking = setLoading => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationKey: ["appointment-add"],
    mutationFn: payload => AppointmentAdd(payload),
    onMutate: () => {
      setLoading(true);
    },
    onSuccess: data => {
      toast.success(data?.message);
      if (data?.data?.redirect_url) {
        window.location.href = data?.data?.redirect_url;
      }
      queryClient.invalidateQueries(["appointment-lists"]);
      setLoading(false);
    },
    onError: err => {
      setLoading(false);
      toast.error(err?.response?.data?.message || "Booking Failed");
    },
  });
};

export const useRescheduleAppointment = setLoading => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationKey: ["appointment-reschedule"],
    mutationFn: ({ id, payload }) => AppointmentReschedule(id, payload),
    onMutate: () => {
      setLoading(true);
    },
    onSuccess: data => {
      toast.success(data?.message);

      queryClient.invalidateQueries(["appointment-lists"]);
      setLoading(false);
    },
    onError: err => {
      setLoading(false);
      toast.error(err?.response?.data?.message || "Res Booking Failed");
    },
  });
};

export const useCancleAppointment = setLoading => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationKey: ["appointment-cencle"],
    mutationFn: id => AppointmentCancel(id),
    onMutate: () => {
      setLoading(true);
    },
    onSuccess: data => {
      toast.success(data?.message);
      queryClient.invalidateQueries(["appointment-lists"]);
      setLoading(false);
    },
    onError: err => {
      setLoading(false);
      toast.error(err?.response?.data?.message || "Booking Cancel Failed");
    },
  });
};

export const useCheckout = setLoading => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationKey: ["checkout"],
    mutationFn: payload => Checkout(payload),
    onMutate: () => {
      setLoading?.(true);
    },
    onSuccess: data => {
      toast.success(data?.message);
      queryClient.invalidateQueries(["product-order"]);
      queryClient.invalidateQueries(["daily-sales"]);
      queryClient.invalidateQueries(["all-sales"]);
    },
    onError: err => {
      setLoading?.(false);
      toast.error(err?.response?.data?.message);
    },
  });
};

// Add Review:
export const useAddReview = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationKey: ["add-review"],
    mutationFn: payload => AddReview(payload),
    onSuccess: () => {
      toast.success("Review has been added");
      queryClient.invalidateQueries(["get-reviews"]);
    },
    onError: err => {
      toast.error(err?.response?.data?.message || "Failed to add review");
    },
  });
};
