// ChatSidebar.jsx

import { useChatConversion } from "@/hooks/chat.queries";
import { useNavigate } from "react-router-dom";

export default function ChatSidebar() {
  const navigate = useNavigate();
  const { chats, chatLoading } = useChatConversion({});
  if (chatLoading) return <div>Loading...</div>;

  return (
    <div className="w-[300px] border-r bg-white overflow-y-auto">
      <div className="p-4 border-b font-bold text-xl">Chats</div>
      <ul>
        {chats?.data?.map((chat) => (
          <li
            key={chat?.id}
            onClick={() => navigate(`/chat/${chat?.receiver.id}`)}
            className="p-4 border-b hover:bg-gray-100 cursor-pointer"
          >
            {chat.receiver.first_name} {chat.receiver.last_name}
          </li>
        ))}
      </ul>
    </div>
  );
}
