import { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import { Link } from "react-router-dom";

import userDashboardLogo from "../../assets/images/logo.jpg";
import UserProfileSidebar from "./UserProfileSidebar";
import useAuth from "@/hooks/useAuth";

export default function UserProfileNavbar() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);
  const { user } = useAuth();
  return (
    <>
      <header className="py-[12px] 3xl:px-[100px] px-5">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link to="/">
            <img
              className="h-[60px] w-[60px] object-cover rounded-4 "
              src={userDashboardLogo}
              alt="User Logo"
            />
          </Link>

          {/* Hamburger Icon (below 2xl) */}
          <div className="block 2xl:hidden">
            <button onClick={toggleSidebar} className="text-3xl">
              <FiMenu />
            </button>
          </div>

          {/* Sidebar */}
          <div
            className={`fixed top-0 left-0 h-full w-[300px] bg-white shadow-lg z-50 transform transition-transform duration-300 ease-in-out ${
              isSidebarOpen ? "translate-x-0" : "-translate-x-full"
            }`}
          >
            <div className="justify-between items-center p-4 border-b">
              <button onClick={toggleSidebar} className="text-2xl">
                <FiX />
              </button>
            </div>
            <div className="mt-2">
              <UserProfileSidebar />
            </div>
          </div>
          {isSidebarOpen && (
            <div
              className="fixed inset-0 bg-black bg-opacity-50 z-5"
              onClick={() => setIsSidebarOpen(false)}
            ></div>
          )}
          <div className="hidden 2xl:block">
            <Link to={"/userDashboard"} className="flex items-center gap-2  ">
              <div className=" w-[40px] h-[40px] border-2 border-primary  overflow-hidden rounded-full">
                <img
                  src={`${import.meta.env.VITE_SITE_URL}/${user?.avatar} `}
                  className="w-full h-full object-cover"
                  alt=""
                />
              </div>

              <h3 className="text-xl font-semibold capitalize">
                {user?.first_name}
              </h3>
            </Link>
          </div>
        </div>
      </header>
    </>
  );
}
