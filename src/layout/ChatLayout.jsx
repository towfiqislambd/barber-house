import { useChatConversion } from "@/hooks/chat.queries";
import ChatSidebar from "@/pages/chat/ChatSidebar";
import ChatWindow from "@/pages/chat/ChatWindow";
import { Outlet, useParams } from "react-router-dom";

export default function ChatLayout() {
  const { chats, chatLoading, refetch } = useChatConversion({});
  return (
    <div className="flex h-screen">
      <ChatSidebar />
      <Outlet />
    </div>
  );
}
