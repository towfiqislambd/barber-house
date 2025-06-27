// // ChatWindow.jsx
// import { useSingleChatConversion } from "@/hooks/useChatConversion";
// import usePostMessage from "@/hooks/usePostMessage";
// import { useEffect, useState } from "react";
// import { useQueryClient } from "@tanstack/react-query";
// import { useAuth } from "@/hooks/useAuth"; // your auth context/hook
// import { useEcho } from "@/hooks/useEcho"; // hook that returns Echo instance

import usePostMessage from "@/hooks/chat.mutation";
import {
  useChatConversion,
  useSingleChatConversion,
} from "@/hooks/chat.queries";
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

  useEffect(() => {
    if (containerRef.current) {
      containerRef.current.scrollTop = containerRef.current.scrollHeight;
    }
  }, [singleConversion?.data?.messages?.data?.length]);

  const queryClient = useQueryClient();

  useEffect(() => {
    if (!echo || !user?.id) return;

    echo
      .private(`chat-channel.${+user?.id}`)
      .listen("MessageSentEvent", (e) => {
        console.log("NotifyParticipant event:", e);
      });

    echo
      .private(`latest-message-channel.${+user?.id}`)
      .listen("LatestMassageEvent", (e) => {
        console.log("LatestMassageEvent", e);
        if (e.message.conversation_id === +user?.id) {
          console.log("New message received:", e);
          console.log("shahed");

          queryClient.invalidateQueries(["chat-lists"]);
          refetch();
        }
      });
  }, [echo, user?.id]);

  const handleSend = () => {
    if (!message.trim()) return;

    sendMessage({
      id: id,
      formData: {
        message: message,
      },
    });

    setMessage("");
  };

  return (
    <div className="flex-1 flex flex-col">
      <div className="p-4 border-b bg-white font-semibold">
        Chat with {singleConversion?.data?.receiver?.name}
      </div>

      <div
        ref={containerRef}
        className="flex-1 p-4 space-y-2 overflow-y-auto bg-gray-50 "
      >
        {singleConversion?.data.map((msg) => {
          return (
            <div
              className={`flex ${
                msg.sender_id === user?.id ? "justify-end" : "justify-start"
              } mb-4`}
            >
              {msg?.sender?.avatar && msg.sender_id !== user?.id && (
                <img
                  src={`${import.meta.env.VITE_SERVER_URL}/${
                    msg?.sender?.avatar
                  }`}
                  className="w-8 h-8 rounded-full mr-2 self-end"
                />
              )}
              {!msg?.sender?.avatar && (
                <img
                  // src={defaultUser}
                  className="w-8 h-8 rounded-full mr-2 self-end"
                />
              )}

              <div
                className={`max-w-[80%] md:max-w-[60%] lg:max-w-[50%] break-words rounded-xl px-4 py-2 text-sm
   ${
     +msg.sender_id === +user?.id
       ? "bg-primary text-white self-end"
       : "bg-gray-100 text-gray-800 self-start"
   }`}
              >
                <p>{msg.message}</p>
                <span className="block text-[10px] text-right mt-1 opacity-60">
                  {moment(msg?.created_at).format("LT")}
                </span>
              </div>

              {+msg.sender_id === user?.id && (
                <img
                  src={`${import.meta.env.VITE_SITE_URL}/${
                    msg?.sender?.avatar
                  }`}
                  alt="avatar"
                  className="w-8 h-8 rounded-full ml-2"
                />
              )}
            </div>
          );
        })}
      </div>

      <div className="p-4 border-t bg-white flex gap-2">
        <input
          type="text"
          placeholder="Type your message..."
          className="flex-1 border px-4 py-2 rounded-full"
          value={message}
          onChange={(e) => setMessage(e.target.value)}
        />
        <button
          onClick={handleSend}
          className="bg-blue-500 text-white px-6 py-2 rounded-full"
        >
          Send
        </button>
      </div>
    </div>
  );
}
