import { useState } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import { Link } from "react-router-dom";
import Icon1 from "../../assets/images/icon/search.svg";
import Icon2 from "../../assets/images/icon/location.svg";
import Icon3 from "../../assets/images/icon/calendar.svg";
import Icon4 from "../../assets/images/icon/clock.svg";
import ToggleDemo from "../../assets/images/usertoggle.png";
import userDashboardLogo from "../../assets/images/logo.jpg";

export default function UserProfileNavbar() {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const toggleSidebar = () => setIsSidebarOpen(!isSidebarOpen);

  return (
    <>
      <header className="py-[12px] 3xl:px-[100px] px-5">
        <div className="flex justify-between items-center">
          {/* Logo */}
          <Link to="/">
            <img className="h-[60px] w-[60px] object-cover rounded-4 "  src={userDashboardLogo} alt="User Logo" />
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
            <div className="p-4">
              <ul className="space-y-4">
                <li className="flex items-center">
                  <img src={Icon1} alt="" className="w-5 h-5" />
                  <p className="ps-3">All treatments & venues</p>
                </li>
                <li className="flex items-center">
                  <img src={Icon2} alt="" className="w-5 h-5" />
                  <p className="ps-3">Current location</p>
                </li>
                <li className="flex items-center">
                  <img src={Icon3} alt="" className="w-5 h-5" />
                  <p className="ps-3">Any date</p>
                </li>
                <li className="flex items-center">
                  <img src={Icon4} alt="" className="w-5 h-5" />
                  <p className="ps-3">Any time</p>
                </li>
              </ul>
              {/* Toggle Icon (like profile or other icon) */}
              <div className="mt-5">
                <img src={ToggleDemo} alt="Toggle" />
              </div>
              <button
                className="mt-6 w-full py-3 rounded-[32px] text-white bg-[#2C2C2C]"
                type="submit"
              >
                Search
              </button>
            </div>
          </div>
          {/* Toggle Icon (like profile or other icon) */}
          <div className="hidden 2xl:block">
            <img src={ToggleDemo} alt="Toggle" />
          </div>
        </div>
      </header>
    </>
  );
}
