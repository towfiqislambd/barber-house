import ChatSidebar from "@/pages/chat/ChatSidebar";
import { Outlet } from "react-router-dom";

export default function ChatLayout() {
  return (
    <div className="flex h-screen overflow-hidden bg-gray-50">
      <ChatSidebar />
      <div className="flex flex-col flex-1">
        <Outlet />
      </div>
    </div>
  );
}
