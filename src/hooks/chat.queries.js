import { useQuery } from "@tanstack/react-query";
import useAxiosSecure from "./useAxiosSecure";

export const useChatConversion = ({ search = "", per_page }) => {
  const axiosSecure = useAxiosSecure();

  const { data: chats, isLoading: chatLoading } = useQuery({
    queryKey: ["chat-lists", search, per_page],
    queryFn: async () => {
      let url = `/chats?`;

      if (search) url += `search=${search}&`;
      if (per_page) url += `per_page=${per_page}&`;

      url = url.endsWith("&") ? url.slice(0, -1) : url;
      url = url.endsWith("?") ? url.slice(0, -1) : url;

      const response = await axiosSecure.get(url);

      return response.data;
    },
  });

  return { chats, chatLoading };
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
      const params = new URLSearchParams();
      if (userId) params.append("user_id", userId);

      const response = await axiosSecure.get(`/chat?${params.toString()}`);
      return response.data;
    },
    enabled: !!userId,
  });

  return { singleConversion, isLoading, refetch };
};
