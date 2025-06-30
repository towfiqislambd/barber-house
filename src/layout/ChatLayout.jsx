import ChatSidebar from "@/pages/chat/ChatSidebar";
import ChatWindow from "@/pages/chat/ChatWindow";
import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";

export default function ChatApp() {
  const location = useLocation();
  const [selectedChatId, setSelectedChatId] = useState(null);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
  const userId = location.state?.userId ?? null;

  useEffect(() => {
    // Set initial selected chat from location state
    if (+userId) {
      setSelectedChatId(+userId);
    }
  }, [userId]);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div className="flex h-screen overflow-hidden bg-gray-50 relative">
      {(isMobile && !selectedChatId) || !isMobile ? (
        <ChatSidebar
          onSelectChat={setSelectedChatId}
          selectedChatId={selectedChatId}
          isMobile={isMobile}
        />
      ) : null}

      {/* Chat window or fallback message */}
      <div className="flex flex-col flex-1 w-full h-full">
        {!selectedChatId && !isMobile && (
          <div className="h-full flex items-center justify-center text-gray-400 text-sm">
            Select a chat to start messaging
          </div>
        )}

        {selectedChatId && (
          <ChatWindow
            chatId={selectedChatId}
            onBack={() => isMobile && setSelectedChatId(null)}
            isMobile={isMobile}
          />
        )}
      </div>
    </div>
  );
}
