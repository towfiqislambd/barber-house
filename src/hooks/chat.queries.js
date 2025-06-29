import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";

export const useChatConversion = ({ search = "" }) => {
  const axiosSecure = useAxiosSecure();

  const {
    data: chats,
    isLoading: chatLoading,
    refetch,
  } = useQuery({
    queryKey: ["chat-lists", search],
    retry: false,
    queryFn: async () => {
      let url = `/api/conversations?`;

      if (search) url += `search=${search}&`;

      url = url.endsWith("&") ? url.slice(0, -1) : url;
      url = url.endsWith("?") ? url.slice(0, -1) : url;

      const response = await axiosSecure.get(url);

      return response.data;
    },
  });

  return { chats, chatLoading, refetch };
};

export const useSingleChatConversion = (userId) => {
  const axiosSecure = useAxiosSecure();

  const {
    data: singleConversion,
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["single-chat", userId],
    queryFn: async () => {
      const response = await axiosSecure.get(`/api/chat/${userId}`);
      return response.data;
    },
    retry: false,
    enabled: !!userId,
  });

  return { singleConversion, isLoading, refetch };
};
