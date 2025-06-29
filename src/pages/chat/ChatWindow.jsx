import usePostMessage from "@/hooks/chat.mutation";
import { useSingleChatConversion } from "@/hooks/chat.queries";
import echo from "@/hooks/echo";
import useAuth from "@/hooks/useAuth";
import { useQueryClient } from "@tanstack/react-query";
import moment from "moment";
import { useEffect, useRef, useState } from "react";
import { useParams } from "react-router-dom";
import defaultUser from "../../assets/images/chat/default-user-avatar.jpg";

export default function ChatWindow() {
  const { id } = useParams();
  const { singleConversion, refetch } = useSingleChatConversion(id);
  const { mutate: sendMessage } = usePostMessage();
  const [message, setMessage] = useState("");
  const [imageFile, setImageFile] = useState(null);
  const [previewUrl, setPreviewUrl] = useState(null);
  const { user } = useAuth();
  const containerRef = useRef(null);
  const queryClient = useQueryClient();

  useEffect(() => {
    if (containerRef.current) {
      containerRef.current.scrollTop = containerRef.current.scrollHeight;
    }
  }, [singleConversion?.data?.messages?.length]);

  useEffect(() => {
    if (!echo || !user?.id) return;

    echo.private(`chat-channel.${user?.id}`).listen("MessageSentEvent", (e) => {
      if (e.data.conversation_id === +id) {
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

  const handleSend = (e) => {
    e.preventDefault();
    if (!message.trim() && !imageFile) return;

    const formData = new FormData();
    if (message.trim()) formData.append("message", message);
    if (imageFile) formData.append("file", imageFile);

    sendMessage({ id, formData });
    setMessage("");
    setImageFile(null);
  };

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file && file.type.startsWith("image/") && file.size > 0) {
      setImageFile(file);
    }
  };

  const removeSelectedImage = () => {
    setImageFile(null);
  };

  return (
    <div className="flex flex-col h-full w-full">
      {/* Header */}
      <div className="border-b px-6 py-3 bg-white flex items-center justify-between">
        <div className="font-semibold text-sm">
          {singleConversion?.data?.user?.first_name}
        </div>
      </div>

      {/* Messages */}
      <div
        className="flex-1 overflow-y-auto p-6 bg-[#FAFAFC]"
        ref={containerRef}
      >
        <div className="space-y-4">
          {singleConversion?.data?.messages?.map((msg, index) => {
            return (
              <div
                key={index}
                className={`flex ${
                  +msg.sender_id === +user?.id ? "justify-end" : "justify-start"
                }`}
              >
                {msg.sender_id !== user?.id && (
                  <img
                    src={
                      msg?.sender?.avatar
                        ? `${import.meta.env.VITE_SITE_URL}/${
                            msg?.sender?.avatar
                          }`
                        : defaultUser
                    }
                    className="w-8 h-8 rounded-full mr-2 self-end"
                    alt="avatar"
                  />
                )}

                <div
                  className={`rounded-xl px-4 py-2 text-sm max-w-[70%] break-words ${
                    +msg.sender_id === +user?.id
                      ? "bg-[#1C1F4A] text-white"
                      : "bg-gray-200 text-black"
                  }`}
                >
                  {msg.type === "text" && <p>{msg?.message}</p>}
                  {msg.type === "file" && (
                    <img
                      src={`${import.meta.env.VITE_SITE_URL}/storage/${
                        msg?.file_path
                      }`}
                      alt="sent"
                      className="mt-2 max-w-[220px] rounded-lg"
                    />
                  )}
                  <span className="text-[10px] block mt-1 opacity-60 text-right">
                    {moment(msg.created_at).format("LT")}
                  </span>
                </div>

                {msg.sender_id === user?.id && (
                  <img
                    src={
                      msg?.sender?.avatar
                        ? `${import.meta.env.VITE_SITE_URL}/${
                            msg?.sender?.avatar
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

      {/* Input Area */}
      <form
        onSubmit={handleSend}
        className="px-4 py-3 bg-white border-t flex flex-col gap-2"
        encType="multipart/form-data"
      >
        {/* Image Preview (if selected) */}
        {imageFile && previewUrl && (
          <div className="flex items-center gap-2">
            <img src={previewUrl} alt="preview" className="h-20 rounded-md" />
            <button
              type="button"
              onClick={removeSelectedImage}
              className="text-sm text-red-500 underline"
            >
              Remove
            </button>
          </div>
        )}

        <div className="flex items-center gap-3">
          <label
            htmlFor="image"
            className="cursor-pointer px-3 py-2 bg-gray-200 rounded-full text-sm"
          >
            📷
          </label>
          <input
            id="image"
            type="file"
            accept="image/*"
            onChange={handleImageChange}
            className="hidden"
          />

          <input
            type="text"
            placeholder="Type your message"
            className="flex-1 px-4 py-2 rounded-full border"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
          />

          <button
            type="submit"
            className="bg-blue-600 text-white px-5 py-2 rounded-full"
          >
            Send
          </button>
        </div>
      </form>
    </div>
  );
}
