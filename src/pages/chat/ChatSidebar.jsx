import { useEffect, useState } from "react";
import { useChatConversion } from "@/hooks/chat.queries";
import useAuth from "@/hooks/useAuth";
import echo from "@/hooks/echo";
import { useQueryClient } from "@tanstack/react-query";
import moment from "moment";
import { FiMenu } from "react-icons/fi";
import defaultUser from "../../assets/images/chat/default-user-avatar.jpg";
import { IoHome } from "react-icons/io5";
import { Link } from "react-router-dom";

export default function ChatSidebar({
  onSelectChat,
  selectedChatId,
  isMobile,
}) {
  const { chats } = useChatConversion({});
  const { user } = useAuth();
  const queryClient = useQueryClient();
  const [unread, setUnread] = useState(null);
  const [showSidebar, setShowSidebar] = useState(false);

  useEffect(() => {
    if (!echo || !user?.id) return;
    echo
      .private(`latest-message-channel.${user?.id}`)
      .listen("LatestMassageEvent", (e) => {
        if (+e.receiverId === +user?.id) {
          queryClient.invalidateQueries(["chat-lists"]);
          setUnread(e.unreadMessageCount);
        }
      });
  }, [echo, user?.id]);

  return (
    <>
      {isMobile && (
        <button
          className="md:hidden absolute top-4 left-4 z-50 text-2xl"
          onClick={() => setShowSidebar(!showSidebar)}
        >
          <FiMenu />
        </button>
      )}
      <div
        className={`fixed md:relative top-0 left-0 h-full w-[80%] max-w-[340px] bg-white z-40 transform transition-transform duration-300 ease-in-out
        ${
          showSidebar ? "translate-x-0" : "-translate-x-full"
        } md:translate-x-0 md:flex`}
      >
        <div className="w-full h-full flex flex-col border-r">
          <div className="border-b flex items-center justify-between px-4 py-3">
            <div className="font-bold text-lg text-center flex-1">
              Messaging
              <span className="bg-red-500 text-white ml-2 text-xs px-2 py-1 rounded-full">
                {unread || 0}
              </span>
            </div>
            <Link to={"/"} className="text-2xl cursor-pointer">
              <IoHome />
            </Link>
          </div>

          <input
            className="m-3 px-4 py-2 text-sm border rounded-full"
            placeholder="Search..."
          />

          <div className="overflow-y-auto flex-1">
            {chats?.data?.map((chat) => {
              const participant = chat?.participants?.find(
                (p) => p?.user?.id !== user?.id
              );
              const userInfo = participant?.user;

              if (!userInfo) return null;

              console.log(chat.participants[0].user_id);

              return (
                <div
                  key={chat.id}
                  onClick={() => {
                    onSelectChat(chat.id);
                    if (isMobile) setShowSidebar(false);
                  }}
                  className={`flex items-center px-4 py-3 cursor-pointer hover:bg-gray-100 ${
                    +selectedChatId === +chat.participants[0].user_id
                      ? "bg-gray-100"
                      : ""
                  }`}
                >
                  <img
                    src={
                      userInfo?.avatar
                        ? `${import.meta.env.VITE_SITE_URL}/${userInfo.avatar}`
                        : defaultUser
                    }
                    className="w-10 h-10 rounded-full mr-3"
                    alt="avatar"
                  />
                  <div className="flex-1">
                    <div className="font-medium text-sm">
                      {userInfo?.first_name} {userInfo?.last_name}
                    </div>
                    <div className="text-xs text-gray-500 truncate">
                      {chat?.last_message?.message}
                    </div>
                  </div>
                  <div className="text-xs text-gray-400 ml-2 whitespace-nowrap">
                    {moment(chat?.last_message?.created_at).fromNow()}
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </>
  );
}
