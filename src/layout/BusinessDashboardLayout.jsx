import { Link, NavLink, Outlet, useLocation } from "react-router-dom";
import { useState } from "react";
import logo from "../assets/images/logo.jpg";
import {
  BusinessDashboardOne,
  BusinessDashboardThree,
  BusinessDashboardFive,
  BusinessDashboardSix,
  BusinessDashboardSeven,
  BusinessDashboardEight,
  BusinessDashboardNine,
  BusinessNotificationSvg,
} from "@/components/svgContainer/SvgContainer";
import { FaBars } from "react-icons/fa6";
import { Tooltip } from "antd";
import useAuth from "@/hooks/useAuth";
import { IoLogOutOutline } from "react-icons/io5";
import { useLogOut } from "@/hooks/auth.hook.";

const excludedPaths = [
  "/businessDashboard/addpaymentmethod",
  "/businessDashboard/edittimeandcalander",
  "/businessDashboard/appointmentremainder",
  "/businessDashboard/smartpricingstepcontainer",
  "/businessDashboard/businessdashboardeditpage",
  "/businessDashboard/membership-creation",
  "/businessDashboard/editService",
  "/businessDashboard/addService",
  "/businessDashboard/add-membership",
  "/businessDashboard/addnew-product",
];

const routingList = [
  {
    id: "one",
    to: "/businessDashboard",
    Icon: BusinessDashboardOne,
    label: "Home",
  },
  {
    id: "three",
    to: "/businessDashboard/sales",
    Icon: BusinessDashboardThree,
    label: "Sales",
  },
  {
    id: "five",
    to: "/businessDashboard/catalogue",
    Icon: BusinessDashboardFive,
    label: "Catalogue",
  },
  {
    id: "six",
    to: "/businessDashboard/online-profile",
    Icon: BusinessDashboardSix,
    label: "Online Store",
  },
  {
    id: "seven",
    to: "/businessDashboard/marketing",
    Icon: BusinessDashboardSeven,
    label: "Reviews",
  },
  {
    id: "eight",
    to: "/chat",
    Icon: BusinessDashboardEight,
    label: "Messaging",
  },
  {
    id: "nine",
    to: "/businessDashboard/members-list",
    Icon: BusinessDashboardNine,
    label: "Teams",
  },
];

const BusinessDashboardLayout = () => {
  const { user } = useAuth();
  const [isOpen, setOpen] = useState(false);
  const [active, setActive] = useState("one");
  const location = useLocation();
  const { mutateAsync: logOutMutate } = useLogOut();
  const isExcluded = excludedPaths.includes(location.pathname);

  const handleActive = id => {
    setActive(id);
    setOpen(false);
  };

  const handleLogout = () => {
    logOutMutate();
  };

  return (
    <section className="min-h-screen max-h-screen flex flex-col">
      {/* Dashboard Header */}
      {!isExcluded && (
        <header className="flex justify-between sticky top-0 z-[999] md:h-[90px] bg-white items-center border-b border-[#c5cad3] py-2 px-5 md:px-10">
          <Link to="/">
            <img className="w-[50px] h-[50px] " src={logo} alt="Logo" />
          </Link>
          <div className="flex gap-3 md:gap-5 items-center">
            {/* <button>
              <BusinessNotificationSvg />
            </button> */}
            <img
              src={`${import.meta.env.VITE_SITE_URL}/${user?.avatar}`}
              className="w-10 h-10 md:w-12 md:h-12 rounded-full object-cover border-2 border-primary"
              alt="Profile"
            />
            {/* Hamburger btn */}
            <button
              onClick={() => setOpen(!isOpen)}
              className="bg-primary xl:hidden text-white w-10 h-9 rounded grid place-items-center"
            >
              <FaBars className="text-2xl" />
            </button>
          </div>
        </header>
      )}

      {/* Dashboard Content */}
      <div className="flex h-screen md:h-[calc(100vh-90px)]">
        {/* Fixed Sidebar */}
        {!isExcluded && (
          <aside
            id="sidebar"
            className="w-[100px] hidden xl:block overflow-y-auto p-6 bg-white border-r h-full"
          >
            <ul className="space-y-[70px]">
              {routingList.map(({ id, to, Icon, label }) => (
                <li key={id}>
                  <Tooltip placement="right" title={label}>
                    <NavLink
                      to={to}
                      end
                      className={({ isActive }) =>
                        `flex justify-center ${
                          isActive ? "text-[#EE6C9C]" : "text-[#2C2C2C]"
                        }`
                      }
                      onClick={() => setActive(id)}
                    >
                      <Icon color={active === id ? "#EE6C9C" : "#2C2C2C"} />
                    </NavLink>
                  </Tooltip>
                </li>
              ))}
              <li>
                <Tooltip placement="right" title="Logout">
                  <button onClick={handleLogout} className="pl-3">
                    <IoLogOutOutline className="text-3xl text-red-500" />
                  </button>
                </Tooltip>
              </li>
            </ul>
          </aside>
        )}

        {/* Scrollable Content */}
        <main
          className={`flex-1 bg-[#F9F9F9] md:p-5 overflow-y-auto ${
            isExcluded ? "h-screen" : "h-full"
          }`}
        >
          <Outlet />
        </main>
      </div>

      {/* Responsive code here */}

      {/* Blur Overlay */}
      <div
        onClick={() => setOpen(false)}
        className={`fixed inset-0 bg-black/30 backdrop-blur-sm transition-opacity duration-300 xl:hidden z-[999] ${
          isOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
      ></div>

      {/* Sidebar */}
      <div
        className={`${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } duration-500 transition-transform fixed top-0 z-[999] left-0 bg-white px-5 py-8 shadow-lg overflow-y-auto  border-r max-h-screen min-h-screen w-[100px] xl:hidden`}
      >
        {!isExcluded && (
          <aside id="sidebar" className=" bg-white">
            <ul className="space-y-[70px]">
              {routingList.map(({ id, to, Icon }) => (
                <li key={id}>
                  <NavLink
                    to={to}
                    end
                    className={({ isActive }) =>
                      `flex justify-center ${
                        isActive ? "text-[#EE6C9C]" : "text-[#2C2C2C]"
                      }`
                    }
                    onClick={() => handleActive(id)}
                  >
                    <Icon color={active === id ? "#EE6C9C" : "#2C2C2C"} />
                  </NavLink>
                </li>
              ))}
              <li>
                <Tooltip placement="right" title="Logout">
                  <button onClick={handleLogout} className="pl-3">
                    <IoLogOutOutline className="text-3xl text-red-500" />
                  </button>
                </Tooltip>
              </li>
            </ul>
          </aside>
        )}
      </div>
    </section>
  );
};

export default BusinessDashboardLayout;
