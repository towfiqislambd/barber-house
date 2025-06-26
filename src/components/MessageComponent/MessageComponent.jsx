import MsgProfile from "@/components/cards/MsgProfile";
import { MsgDummyProfileData } from "@/components/dummyData/messageDummyData";
import {
  ActiveIocnSvg,
  Airplane,
  FansySearchIcon,
  GalleryIcon,
  RedDot,
} from "@/components/svgContainer/SvgContainer";
import React, { useEffect, useState } from "react";
import profilePic from "../../assets/images/cards/pinkShritboy.png";
import ScrollToBottom from "react-scroll-to-bottom";
import moment from "moment";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogDescription,
} from "@/components/ui/dialog";
import toast from "react-hot-toast";
import { useDispatch, useSelector } from "react-redux";
import { addMessage } from "@/redux/features/msgSlice";
import {
  useChatConversion,
  useSingleChatConversion,
} from "@/hooks/chat.queries";
import usePostMessage from "@/hooks/chat.mutation";
import { useSearchParams } from "react-router-dom";

const MessageComponent = ({ isMe }) => {
  const [activeId, setActiveId] = useState(null);
  const [ImgUrl, setImgUrl] = useState();
  const [ImgFile, setImgFile] = useState();
  const [open, setOpen] = useState(false);
  const [msg, setmsg] = useState();
  const messages = useSelector((state) => state.msgReducer.messages);
  const users = useSelector((state) => state.msgReducer.users);
  const [activeUser, setActiveUser] = useState();
  const [userMsg, setUserMsg] = useState([]);
  const dispatch = useDispatch();
  const [searchUser, setsearchUser] = useState();

  const handleKeyPress = (e) => {
    if (e.key === "Enter" && (msg || ImgUrl)) {
      handleMessageSend();
    } else if (e.key === "Enter" && !msg && !ImgUrl) {
      toast.error("Please Enter a message or input a file ");
    }
  };

  const handleImgUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      const url = URL.createObjectURL(file);
      setImgFile(file);
      setImgUrl(url);
      setOpen(true);
      toast.success(`${file?.name} added`);
    }
  };

  const sanitizedSearchUser = searchUser?.trim().toLowerCase();

  const filteredSearchData = users.filter((user) => {
    if (!sanitizedSearchUser) {
      return true;
    }

    return user?.name?.toLowerCase().includes(sanitizedSearchUser);
  });

  // lastest code
  const [searchParams] = useSearchParams();
  const [search, setSearch] = useState("");
  const [message, setMessage] = useState("");
  const postMessage = usePostMessage();

  const { chats, chatLoading } = useChatConversion({
    search,
    per_page: 1000,
  });

  const { singleConversion, isLoading, refetch } =
    useSingleChatConversion(userId);

  const handleSend = () => {
    if (!message.trim()) return;

    const formData = new FormData();
    formData.append("message", message);

    singleConversion?.data?.conversation?.type === "private" &&
      formData.append(
        "user_id",
        singleConversion?.data?.conversation?.participants[0]?.participantable
          ?.id
      );

    postMessage.mutate(formData);
    setMessage("");
  };

  useEffect(() => {
    if (
      !echo ||
      !loggedInUser?.data?.id ||
      !singleConversion?.data?.conversation?.id
    )
      return;

    const participantChannel = echo
      .private(`chat-channel.${loggedInUser.data.id}`)
      .listen("MessageSentEvent", (e) => {
        console.log("NotifyParticipant event:", e);
      });

    const conversationId = singleConversion.data.conversation.id;

    const chatChannel = echo
      .private(`latest-message-channel.${conversationId}`)
      .listen("LatestMassageEvent", (e) => {
        if (e.message.conversation_id === conversationId) {
          console.log("New message received:", e);
          queryClient.invalidateQueries(["chat-lists"]);
          refetch();
        }
      });

    return () => {
      participantChannel.stopListening(
        ".Namu\\WireChat\\Events\\NotifyParticipant"
      );
      chatChannel.stopListening(".message.created");
    };
  }, [echo, singleConversion, loggedInUser]);

  return (
    <>
      <div
        className={`container flex flex-row w-full 2xl:gap-x-[28px] xl:min-w-[360px]  relative ${
          isMe && "2xl:mt-[116px] 2xl:py-[36px] "
        } `}
      >
        <div
          className={`flex flex-col w-full xl:w-auto bg-white gap-y-6 pl-4 xl:pl-8 py-6 ${
            activeUser && " hidden xl:block"
          } `}
        >
          <div className="flex flex-col gap-y-3">
            <div className="flex flex-row gap-x-1">
              <h2 className="text-[#000929] text-2xl font-semibold leading-[150%] tracking-[-0.72px]">
                Messaging
              </h2>
              <div className="flex bg-[#FF3E46] h-[27px] justify-center p-1 rounded-[4px] w-[27px] items-center">
                <span className="text-[#9C171D] text-xs font-normal">137</span>
              </div>
            </div>
            <div
              className={`bg-[#F7F7FD] h-[46px] max-w-[92%] md:max-w-[360px] xl:min-w-[360px] pl-[16px] relative  `}
            >
              <div className="flex h-full justify-center absolute items-center">
                <FansySearchIcon />
              </div>
              <input
                onChange={(e) => {
                  setsearchUser(e.target.value);
                }}
                value={searchUser}
                type="text"
                className="bg-[#F7F7FD] h-full w-full outline-none pl-[26px] pr-4"
                placeholder="Search in dashboard..."
              />
            </div>
          </div>
          <div
            className={`flex flex-col h-[726px]  gap-y-4 overflow-y-scroll ${
              activeUser && "hidden xl:block"
            } `}
          >
            {filteredSearchData.map((item, index) => {
              const isLastItem = index === MsgDummyProfileData.length - 1;
              const isActive = activeId === item.id;

              return (
                <MsgProfile
                  key={item.id}
                  profilePic={item.profilePic}
                  ProfileName={item.name}
                  isme={item.isMe}
                  isSeen={item.isUnread}
                  lastActive={item.lastSeen}
                  role={item.role}
                  message={item.message}
                  isHrLine={isLastItem ? false : true}
                  isActive={isActive} // Send active status
                  isUnread={item.isUnread}
                  onClick={() => setActiveId(item.id)}
                />
              );
            })}
          </div>
        </div>
        {activeUser ? (
          <div className="bg-white h-full w-full relative">
            <div
              onClick={() => {
                setActiveUser();
              }}
              className="flex h-[100px] relative p-6  felx-row gap-x-3 after:absolute after:h-[1px] after:w-[100%] shadow-md  after:bg-[#76767c70] 
      after:bottom-0 after:left-1/2 after:-translate-x-1/2  "
            >
              <div
                className="h-[44px] rounded-full w-[44px]"
                style={{
                  backgroundImage: `url(${activeUser?.profilePic})`,
                  backgroundSize: "cover",
                  backgroundRepeat: "no-repeat",
                  backgroundPosition: "center",
                }}
              ></div>
              <div className="flex flex-col gap-y-2">
                <h4 className="text-[#000929] text-base font-semibold leading-[150%] tracking-[-0.32px]">
                  {activeUser.name}
                </h4>
                <div className="flex flex-row gap-x-2 items-center">
                  {activeUser.isOnline ? <ActiveIocnSvg /> : <RedDot />}
                  <span className="text-[#BABABA] text-xs font-semibold leading-[150%] tracking-[-0.32px]">
                    {activeUser.isOnline ? "Online" : "Offline"}
                  </span>
                </div>
              </div>
            </div>
            <div className="w-full relative">
              <div className="flex justify-center w-full absolute items-center top-0">
                <div className="flex bg-[#FFF] h-[37px] justify-center rounded-[10px] shadow-offGrayShadow w-[68px] items-center mt-2 px-3 py-2">
                  <span className="text-[#000929] text-xs xl:text-[14px] capitalize font-semibold leading-[150%] tracking-[-0.32px]">
                    today
                  </span>
                </div>
              </div>
              <ScrollToBottom>
                <div className="flex flex-col h-[620px] xl:h-[700px] xl:p-5 p-2 gap-2 xl:gap-5 py-16 overflow-y-auto">
                  {userMsg.map((msg) => (
                    <div
                      key={msg.id}
                      className={`flex flex-col gap-2 ${
                        msg.sender === "Receiver" ? "items-end" : "items-start"
                      }`}
                    >
                      <div
                        className={`flex gap-2 items-center ${
                          msg.sender === "Sender"
                            ? "flex-row"
                            : "flex-row-reverse"
                        } `}
                      >
                        {/* Profile Picture */}
                        {msg.sender === "Sender" ? (
                          <img
                            src={msg.profilePic}
                            alt={msg.sender}
                            className="h-8 rounded-full w-8 ml-2"
                          />
                        ) : (
                          <img
                            src={msg.profilePic}
                            alt={msg.sender}
                            className="h-8 rounded-full w-8 mr-2"
                          />
                        )}

                        {/* Message or Image */}
                        <div
                          className={`flex flex-col gap-y-2 ${
                            msg.sender === "Sender"
                              ? "items-start"
                              : "items-end"
                          } `}
                        >
                          <div
                            className={`${
                              msg.imgurl
                                ? ""
                                : msg.sender === "Sender"
                                ? "bg-[#000929]"
                                : "bg-[#2E3B5B]"
                            } rounded-lg text-white max-w-[303px] px-3 py-2`}
                          >
                            {msg.imgurl ? (
                              <img
                                src={msg.imgurl}
                                alt="Sent image"
                                className="rounded-lg max-w-[200px]"
                              />
                            ) : (
                              <span className=" text-sm xl:text-base">
                                {msg.message}
                              </span>
                            )}
                          </div>
                          <span
                            className={`text-xs text-[#757575] font-normal text-[-0.12px] ${
                              msg.sender === "Sender" ? "mr-0" : "ml-0"
                            }`}
                          >
                            {msg.time}
                          </span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </ScrollToBottom>
            </div>
            <div
              className="flex h-[80px] bg-white relative p-6 shadow-md flex-row gap-x-3 py-[10px] px-4 after:absolute after:h-[1px] after:w-[100%] shadow-  after:bg-[#76767c70] 
      after:top-0 after:left-1/2 after:-translate-x-1/2 "
            >
              <div
                className={`bg-[#F7F7FD] min-h-[50px]  p-3 rounded-[20px] w-full relative transition-all duration-300 `}
              >
                {/* Input Field */}
                <input
                  placeholder="Type your message"
                  className=" rounded-[20px] bg-[#F7F7FD] w-full absolute top-0 left-0 h-full   outline-none pl-[27.5px] "
                  type="text"
                  onChange={(e) => {
                    setmsg(e.target.value);
                  }}
                  onKeyDown={(e) => {
                    handleKeyPress(e);
                  }}
                  value={msg}
                />

                {/* Icons and Send Button */}
                <div className="flex flex-row -translate-y-1/2 absolute gap-x-3 items-center pr-2 right-0 top-1/2 transform">
                  {/* Gallery Icon */}
                  <div className="h-[24px] w-[24px] cursor-pointer relative">
                    <GalleryIcon />
                  </div>

                  {/* Hidden File Input */}
                  <input
                    onChange={handleImgUpload}
                    accept="image/png, image/jpeg, image/jpg"
                    type="file"
                    className="h-[24px] w-[24px] absolute cursor-pointer left-0 mt-[10px] opacity-0 top-0"
                  />

                  {/* Send Button */}
                  <button
                    onClick={() => {
                      handleMessageSend();
                    }}
                    disabled={msg || ImgUrl ? false : true}
                    className={`flex ${
                      msg || ImgUrl
                        ? "bg-[#2E3B5B]"
                        : "bg-[#2e3b5b29] cursor-not-allowed"
                    }  h-[44px] justify-center rounded-[10px] w-[64px] cursor-pointer items-center ease-in duration-300`}
                  >
                    <Airplane />
                  </button>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <div className="bg-white  h-full hidden lg:block w-full relative">
            <div
              className="flex h-[100vh] relative p-6  flex-row gap-x-3 after:absolute after:h-[1px] after:w-[100%] shadow-md  after:bg-[#76767c70]  items-center justify-center
      after:bottom-0 after:left-1/2 after:-translate-x-1/2  "
            >
              <h2 className=" text-base 2xl:text-4xl font-semibold flex items-center ">
                <span className="text-red-500">*</span> Kindly select a user to
                continue chatting.{" "}
              </h2>
            </div>
          </div>
        )}
      </div>
      <Dialog open={open} onOpenChange={setOpen}>
        <DialogContent onClick={(e) => e.stopPropagation()}>
          <DialogHeader>
            <DialogDescription onClick={(e) => e.stopPropagation()}>
              <div className="flex flex-col bg-white h-auto p-5 rounded-[12px] w-full gap-y-5 items-center z-[999]">
                {/* Image Preview */}
                {ImgUrl && (
                  <div className="flex border justify-center rounded-lg shadow-md items-center max-h-[400px] max-w-[400px] overflow-hidden relative">
                    <img
                      src={ImgUrl}
                      alt="Preview"
                      className="h-full w-full object-cover"
                    />
                    {/* Remove Button */}
                    <button
                      onClick={() => {
                        setImgUrl(null);
                        toast.error(`${ImgFile?.name}  removed`);
                        setOpen(false);
                      }}
                      className="flex bg-red-500 h-6 justify-center rounded-full text-white text-xs w-6 absolute items-center right-2 top-2"
                    >
                      ✕
                    </button>
                  </div>
                )}
              </div>
            </DialogDescription>
          </DialogHeader>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default MessageComponent;
