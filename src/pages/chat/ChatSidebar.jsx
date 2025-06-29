import {
  useChatConversion,
  useSingleChatConversion,
} from "@/hooks/chat.queries";
import echo from "@/hooks/echo";
import useAuth from "@/hooks/useAuth";
import { useQueryClient } from "@tanstack/react-query";
import moment from "moment";
import { useEffect, useState } from "react";

import { useNavigate, useParams } from "react-router-dom";
import defaultUser from "../../assets/images/chat/default-user-avatar.jpg";
export default function ChatSidebar() {
  const navigate = useNavigate();
  const { chats } = useChatConversion({});
  const { id } = useParams();
  const { user } = useAuth();
  const queryClient = useQueryClient();
  const [unread, setUnread] = useState(null);
  const { singleConversion } = useSingleChatConversion(id);

  console.log(singleConversion);

  useEffect(() => {
    if (!echo || !user?.id) return;

    echo
      .private(`latest-message-channel.${user?.id}`)
      .listen("LatestMassageEvent", (e) => {
        console.log("side", e);
        if (+e.receiverId === +user?.id) {
          queryClient.invalidateQueries(["chat-lists"]);
          setUnread(e.unreadMessageCount);
          console.log("side inside", e);
        }
      });
  }, [echo, user?.id]);
  return (
    <div className="w-[340px] border-r bg-white h-full flex flex-col">
      <div className="p-4 font-bold text-lg border-b">
        Messaging
        <span className="bg-red-500 text-white ml-2 text-xs px-2 py-1 rounded-full">
          0
        </span>
      </div>
      <input
        className="m-3 px-4 py-2 text-sm border rounded-full"
        placeholder="Search in dashboard..."
      />
      <div className="overflow-y-auto flex-1">
        {singleConversion?.data?.messages?.length <= 0 && (
          <div
            onClick={() =>
              navigate(`/chat/${singleConversion?.data?.user?.id}`)
            }
            className={`flex items-center px-4 py-3 cursor-pointer hover:bg-gray-100 ${
              +id === +singleConversion?.data?.user?.id ? "bg-gray-100" : ""
            }`}
          >
            <img
              src={`${import.meta.env.VITE_SITE_URL}/${
                singleConversion?.data?.user?.avatar
              }`}
              className="w-10 h-10 rounded-full mr-3"
              alt="avatar"
            />
            <div className="flex-1">
              <div className="font-medium text-sm">
                {singleConversion?.data?.user?.first_name}
              </div>
            </div>
          </div>
        )}
        {chats?.data?.map((chat) => {
          return chat?.participants?.map((conversation) => (
            <div
              key={chat?.id}
              onClick={() => navigate(`/chat/${conversation?.user?.id}`)}
              className={`flex items-center px-4 py-3 cursor-pointer hover:bg-gray-100 ${
                +id === +conversation?.user?.id ? "bg-gray-100" : ""
              }`}
            >
              {conversation?.user?.avatar && (
                <img
                  src={`${import.meta.env.VITE_SITE_URL}/${
                    conversation?.user?.avatar
                  }`}
                  className="w-10 h-10 rounded-full mr-3"
                  alt="avatar"
                />
              )}

              {!conversation?.user?.avatar && (
                <img
                  src={defaultUser}
                  className="w-10 h-10 rounded-full mr-2 self-end"
                />
              )}
              <div className="flex-1">
                <div className="font-medium text-sm">
                  {conversation?.user?.first_name}
                  {conversation?.user?.last_name}
                </div>
                <div className="text-xs text-gray-500 truncate">
                  {chat?.last_message?.message}

                  {unread}
                </div>
              </div>
              <div className="text-xs text-gray-400 ml-2 whitespace-nowrap">
                {moment(chat?.last_message?.created_at).fromNow()}
              </div>
            </div>
          ));
        })}
      </div>
    </div>
  );
}
