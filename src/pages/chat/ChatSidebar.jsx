import { useChatConversion } from "@/hooks/chat.queries";
import echo from "@/hooks/echo";
import useAuth from "@/hooks/useAuth";
import moment from "moment";
import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";

export default function ChatSidebar() {
  const navigate = useNavigate();
  const { chats, chatLoading, refetch } = useChatConversion({});
  const { id } = useParams();
  const { user } = useAuth();
  if (chatLoading) return <div>Loading...</div>;

  return (
    <div className="w-[340px] border-r bg-white h-full flex flex-col">
      <div className="p-4 font-bold text-lg border-b">
        Messaging
        <span className="bg-red-500 text-white ml-2 text-xs px-2 py-1 rounded-full">
          137
        </span>
      </div>
      <input
        className="m-3 px-4 py-2 text-sm border rounded-full"
        placeholder="Search in dashboard..."
      />
      <div className="overflow-y-auto flex-1">
        {chats?.data?.map((chat) => {
          console.log(chat);

          return chat?.participants?.map((conversation) => (
            <div
              key={chat?.id}
              onClick={() => navigate(`/chat/${conversation?.user?.id}`)}
              className={`flex items-center px-4 py-3 cursor-pointer hover:bg-gray-100 ${
                +id === +conversation?.user?.id ? "bg-gray-100" : ""
              }`}
            >
              <img
                src={`${import.meta.env.VITE_SITE_URL}/${
                  conversation?.user?.avatar
                }`}
                className="w-10 h-10 rounded-full mr-3"
                alt="avatar"
              />
              <div className="flex-1">
                <div className="font-medium text-sm">
                  {conversation?.user?.first_name}{" "}
                  {conversation?.user?.last_name}
                </div>
                <div className="text-xs text-gray-500 truncate">
                  {chat?.last_message?.message}
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
