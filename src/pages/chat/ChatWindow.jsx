import usePostMessage from "@/hooks/chat.mutation";
import { useSingleChatConversion } from "@/hooks/chat.queries";
import echo from "@/hooks/echo";
import useAuth from "@/hooks/useAuth";
import { useQueryClient } from "@tanstack/react-query";
import moment from "moment";
import { useEffect, useRef, useState } from "react";
import { useParams } from "react-router-dom";

export default function ChatWindow() {
  const { id } = useParams();
  const { singleConversion, refetch } = useSingleChatConversion(id);
  const { mutate: sendMessage } = usePostMessage();
  const [message, setMessage] = useState("");
  const { user } = useAuth();
  const containerRef = useRef(null);
  const queryClient = useQueryClient();

  useEffect(() => {
    if (containerRef.current) {
      containerRef.current.scrollTop = containerRef.current.scrollHeight;
    }
  }, [singleConversion?.data?.messages?.data?.length]);

  useEffect(() => {
    if (!echo || !user?.id) return;

    echo.private(`chat-channel.${user?.id}`).listen("MessageSentEvent", (e) => {
      console.log("chat:", e);
      if (e.data.sender_id === +id) {
        queryClient.invalidateQueries(["chat-lists"]);
        refetch();
      }
    });
    echo
      .private(`latest-message-channel.${user?.id}`)
      .listen("LatestMassageEvent", (e) => {
        console.log("side", e);
        if (e.senderId === +id) {
          queryClient.invalidateQueries(["chat-lists"]);
          refetch();
        }
      });
  }, [echo, user?.id]);

  const handleSend = () => {
    if (!message.trim()) return;
    sendMessage({ id, formData: { message } });
    setMessage("");
  };

  return (
    <div className="flex flex-col h-full w-full">
      {/* Header */}
      <div className="border-b px-6 py-3 bg-white flex items-center justify-between">
        <div className="font-semibold text-sm">
          {singleConversion?.data?.user?.first_name}
          <span className="text-xs text-red-500 ml-2">• Offline</span>
        </div>
      </div>

      {/* Messages */}
      <div
        className="flex-1 overflow-y-auto p-6 bg-[#FAFAFC]"
        ref={containerRef}
      >
        <div className="space-y-4">
          {singleConversion?.data?.messages?.map((msg, index) => (
            <div
              key={index}
              className={`flex ${
                msg.sender_id === user?.id ? "justify-end" : "justify-start"
              }`}
            >
              {msg.sender_id !== user?.id && (
                <img
                  src={`${import.meta.env.VITE_SERVER_URL}/${
                    msg?.sender?.avatar
                  }`}
                  className="w-8 h-8 rounded-full mr-2 self-end"
                  alt="sender avatar"
                />
              )}
              <div
                className={`rounded-xl px-4 py-2 text-sm max-w-[70%] break-words ${
                  msg.sender_id === user?.id
                    ? "bg-[#1C1F4A] text-white"
                    : "bg-gray-200 text-black"
                }`}
              >
                <p>{msg.message}</p>
                <span className="text-[10px] block mt-1 opacity-60 text-right">
                  {moment(msg.created_at).format("LT")}
                </span>
              </div>
              {msg.sender_id === user?.id && (
                <img
                  src={`${import.meta.env.VITE_SITE_URL}/${
                    msg?.sender?.avatar
                  }`}
                  className="w-8 h-8 rounded-full ml-2 self-end"
                  alt="user avatar"
                />
              )}
            </div>
          ))}
        </div>
      </div>

      {/* Message Input */}
      <div className="px-6 py-4 bg-white border-t flex items-center">
        <input
          type="text"
          placeholder="Type your message"
          className="flex-1 px-4 py-2 rounded-full border"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
        <button
          onClick={handleSend}
          className="ml-3 bg-blue-600 text-white px-5 py-2 rounded-full"
        >
          Send
        </button>
      </div>
    </div>
  );
}
