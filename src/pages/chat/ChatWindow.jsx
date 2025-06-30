import { useEffect, useRef, useState } from "react";
import { useSingleChatConversion } from "@/hooks/chat.queries";
import usePostMessage from "@/hooks/chat.mutation";
import useAuth from "@/hooks/useAuth";
import { useQueryClient } from "@tanstack/react-query";
import moment from "moment";
import echo from "@/hooks/echo";
import defaultUser from "../../assets/images/chat/default-user-avatar.jpg";
import { Loader } from "@/components/Loader/Loader";
import { PiCameraBold } from "react-icons/pi";

export default function ChatWindow({ chatId, onBack, isMobile }) {
  const { singleConversion, refetch } = useSingleChatConversion(chatId);
  const { mutate: sendMessage } = usePostMessage();
  const [message, setMessage] = useState("");
  const [imageFile, setImageFile] = useState(null);
  const [previewUrl, setPreviewUrl] = useState(null);
  const { user } = useAuth();
  const containerRef = useRef(null);
  const queryClient = useQueryClient();

  const [messages, setMessages] = useState([]);

  useEffect(() => {
    if (singleConversion?.data?.messages) {
      setMessages(singleConversion.data.messages);
    }
  }, [singleConversion?.data?.messages]);

  useEffect(() => {
    if (containerRef.current) {
      containerRef.current.scrollTop = containerRef.current.scrollHeight;
    }
  }, [messages.length]);

  useEffect(() => {
    if (!echo || !user?.id) return;
    echo.private(`chat-channel.${user?.id}`).listen("MessageSentEvent", (e) => {
      if (e.data.conversation_id === +chatId) {
        queryClient.invalidateQueries(["chat-lists"]);
        refetch();
      }
    });
  }, [echo, user?.id]);

  useEffect(() => {
    if (imageFile) {
      const objectUrl = URL.createObjectURL(imageFile);
      setPreviewUrl(objectUrl);
      return () => URL.revokeObjectURL(objectUrl);
    } else {
      setPreviewUrl(null);
    }
  }, [imageFile]);

  const isCurrentUser = (senderId) => String(senderId) === String(user?.id);

  const handleSend = (e) => {
    e.preventDefault();
    if (!message.trim() && !imageFile) return;

    const tempId = `temp-${Date.now()}`;

    const tempMessage = {
      id: tempId,
      sender_id: user.id,
      sender: {
        avatar: user.avatar || null,
        first_name: user.first_name || "You",
      },
      type: imageFile ? "file" : "text",
      message: message.trim(),
      file_path: previewUrl || null,
      created_at: new Date().toISOString(),
      status: "sending",
    };

    setMessages((prev) => [...prev, tempMessage]);

    const formData = new FormData();
    if (message.trim()) formData.append("message", message);
    if (imageFile) formData.append("file", imageFile);

    setMessage("");
    setImageFile(null);

    sendMessage(
      { id: chatId, formData },
      {
        onSuccess: (data) => {
          setMessages((prev) =>
            prev.map((msg) =>
              msg.id === tempId
                ? { ...msg, ...data.message, status: "sent" }
                : msg
            )
          );
        },
        onError: () => {
          setMessages((prev) =>
            prev.map((msg) =>
              msg.id === tempId ? { ...msg, status: "failed" } : msg
            )
          );
        },
      }
    );
  };
  console.log(singleConversion?.data?.user?.first_name);

  return (
    <div className="flex flex-col h-full w-full">
      {/* Header */}
      <div className="border-b px-4 py-2 sm:px-6 sm:py-3 bg-white text-sm sm:text-base flex items-center gap-2">
        {isMobile && (
          <button onClick={onBack} className="text-gray-600 text-xl font-bold">
            ←
          </button>
        )}
        <div className="font-semibold">
          {singleConversion?.data?.user?.first_name}
        </div>
      </div>

      {/* Messages */}
      <div
        className="flex-1 overflow-y-auto p-3 sm:p-6 bg-[#FAFAFC]"
        ref={containerRef}
      >
        <div className="space-y-4">
          {messages.map((msg, i) => {
            return (
              <div
                key={msg.id || i}
                className={`flex ${
                  isCurrentUser(msg.sender_id) ? "justify-end" : "justify-start"
                }`}
              >
                {!isCurrentUser(msg.sender_id) && (
                  <img
                    src={
                      msg.sender?.avatar
                        ? `${import.meta.env.VITE_SITE_URL}/${
                            msg.sender.avatar
                          }`
                        : defaultUser
                    }
                    className="w-8 h-8 rounded-full mr-2 self-end"
                    alt="avatar"
                  />
                )}
                <div
                  className={`rounded-xl px-4 py-2 text-sm max-w-[85%] sm:max-w-[70%] break-words ${
                    isCurrentUser(msg.sender_id)
                      ? "bg-[#1C1F4A] text-white"
                      : "bg-gray-200 text-black"
                  } ${
                    msg.status === "sending"
                      ? "opacity-60 italic"
                      : msg.status === "failed"
                      ? "border border-red-500"
                      : ""
                  }`}
                >
                  {msg.type === "text" && <p>{msg.message}</p>}
                  {msg.type === "file" &&
                    (msg.status === "sending" ? (
                      <Loader />
                    ) : (
                      <img
                        src={`${import.meta.env.VITE_SITE_URL}/storage/${
                          msg.file_path
                        }`}
                        alt="sent"
                        className="mt-2 max-w-[200px] sm:max-w-[220px] rounded-lg"
                      />
                    ))}
                  <span className="text-[10px] block mt-1 opacity-60 text-right">
                    {moment(msg.created_at).format("LT")}
                    {msg.status === "sending" && " ⏳"}
                    {msg.status === "failed" && " ❌"}
                  </span>
                </div>
                {isCurrentUser(msg.sender_id) && (
                  <img
                    src={
                      msg.sender?.avatar
                        ? `${import.meta.env.VITE_SITE_URL}/${
                            msg.sender.avatar
                          }`
                        : defaultUser
                    }
                    className="w-8 h-8 rounded-full ml-2 self-end"
                    alt="avatar"
                  />
                )}
              </div>
            );
          })}
        </div>
      </div>

      {/* Input */}
      <form
        onSubmit={handleSend}
        className="px-2 py-2 sm:px-4 sm:py-3 bg-white border-t flex flex-col gap-2"
      >
        {imageFile && previewUrl && (
          <div className="flex items-center gap-2">
            <img
              src={previewUrl}
              alt="preview"
              className="h-16 sm:h-20 rounded-md"
            />
            <button
              type="button"
              onClick={() => setImageFile(null)}
              className="text-sm text-red-500 underline"
            >
              Remove
            </button>
          </div>
        )}

        <div className="flex items-center gap-2 sm:gap-3">
          <label
            htmlFor="image"
            className="cursor-pointer px-3 py-2 bg-gray-200 rounded-full text-sm sm:text-base"
          >
            <PiCameraBold />
          </label>
          <input
            id="image"
            type="file"
            accept="image/*"
            onChange={(e) => setImageFile(e.target.files[0])}
            className="hidden"
          />
          <input
            type="text"
            placeholder="Type your message"
            className="flex-1 px-3 py-2 rounded-full border text-sm sm:text-base"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />
          <button
            type="submit"
            className="bg-blue-600 text-white px-4 sm:px-5 py-2 rounded-full text-sm sm:text-base"
          >
            Send
          </button>
        </div>
      </form>
    </div>
  );
}
