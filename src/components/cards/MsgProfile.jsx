import { DoneIconSvg, RedDot } from "../svgContainer/SvgContainer";

const MsgProfile = ({
  profilePic,
  ProfileName,
  isme,
  lastActive,
  role,
  message,
  isHrLine,
  isActive, 
  isUnread,
  onClick,
}) => {
  console.log(isUnread);

  return (
    <div
      className={`flex w-[360px] cursor-pointer h-[72px] flex-row gap-x-3 rounded-[10px] xl:px-5 py-10 items-center relative 
      ${
        isHrLine &&
        `after:absolute after:h-[1px] after:w-[90%] xl:after:w-[80%] after:bg-[#76767CCC] 
      after:bottom-0 after:left-1/2 after:-translate-x-1/2 after:mb-[-10px]`
      }
      ${isActive ? "bg-[#F7F7FD] text-white" : "bg-transparent"}`} // Highlight active item
      onClick={onClick} // Click event to set active ID
    >
      <div
        className="!h-[52px] !w-[52px] rounded-full"
        style={{
          backgroundImage: `url(${profilePic})`,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
        }}
      ></div>
      <div className="flex flex-col gap-y-2 w-[252px] relative">
        <div className="flex flex-row justify-between">
          <h2 className="text-[#000929] text-[14px] font-semibold">
            {ProfileName}
          </h2>
          {isUnread ? (
            <span className="text-[#000929] text-xs font-normal truncate">
              {lastActive ? `${lastActive} m ago` : `${role}`}
            </span>
          ) : (
            <span className="text-[#76767CCC] text-xs font-normal truncate">
              {lastActive ? `${lastActive} m ago` : `${role}`}
            </span>
          )}
        </div>
        <div className="flex flex-row justify-between">
          <span className="text-[#76767CCC] text-xs font-normal truncate">
            {message}
          </span>
          {isme && <DoneIconSvg />}
          {isUnread && <RedDot />}
        </div>
      </div>
    </div>
  );
};

export default MsgProfile;
