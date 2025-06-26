import { useQueryClient } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";
import { postMessage } from "./chat.api";

const usePostMessage = () => {
  const queryClient = useQueryClient();
  const axiosSecure = useAxiosSecure();

  return useMutation({
    mutationFn: (formData) => postMessage(formData, axiosSecure),
    onSuccess: (data) => {
      if (data) {
        // queryClient.invalidateQueries(["messages"]);
      }
    },
    onError: (error) => {
      toast.error(error?.response?.data?.message || "Message sending failed");
    },
  });
};

export default usePostMessage;
