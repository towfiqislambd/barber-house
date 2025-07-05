import UserProfileNavbar from "@/shared/UserProfile/UserProfileNavbar";
import UserProfileSidebar from "@/shared/UserProfile/UserProfileSidebar";
import { useState } from "react";
import { Outlet } from "react-router-dom";

export default function UserDashboardLayout() {
  const [salesetting, setSalesetting] = useState(false);

  const saleMobileMenuActive = () => {
    setSalesetting(!salesetting);
  };

  return (
    <>
      <div className="bg-[#FCFCFC] min-h-[100vh]">
        <div className="sticky top-0 w-full bg-[#FCFCFC] z-[999]">
          <UserProfileNavbar />
        </div>

        <div>
          <div className="relative ">
            <div
              className={`fixed overflow-y-auto h-full left-0 top-[88px] w-[300px] bg-[#F4F9FA] border-r border-primary p-[30px] rounded-tr-[12px] z-10 transition-all duration-300 ${
                salesetting
                  ? "translate-x-[0%]"
                  : "translate-x-[-100%] 2xl:translate-x-[0%]"
              } `}
            >
              <UserProfileSidebar />
            </div>
          </div>

          <div className="2xl:ml-[300px] pt-5 lg:pt-[60px] pr-5 pl-[30px] 4xl:pl-[60px] pb-[100px]">
            <Outlet />
          </div>
        </div>
      </div>
    </>
  );
}
