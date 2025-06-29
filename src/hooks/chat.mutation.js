import { useMutation, useQueryClient } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";
import { postMessage } from "./chat.api";
import { toast } from "react-toastify"; // If you're using toast

const usePostMessage = () => {
  const queryClient = useQueryClient();
  const axiosSecure = useAxiosSecure();

  return useMutation({
    mutationFn: ({ id, formData }) => postMessage(id, formData, axiosSecure),
    onSuccess: (data) => {
      if (data) {
        queryClient.invalidateQueries(["single-chat"]);
      }
    },
    onError: (error) => {
      toast.error(error?.response?.data?.message || "Message sending failed");
    },
  });
};

export default usePostMessage;
