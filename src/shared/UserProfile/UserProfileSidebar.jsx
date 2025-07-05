import { NavLink } from "react-router-dom";

export default function UserProfileSidebar({ setIsSidebarOpen }) {
  const baseClass =
    "py-[16px] px-[32px] rounded-[8px] font-manrope font-medium leading-[27px] text-[18px] block";
  const activeClass = "bg-primary text-white";
  const inactiveClass = "text-[#2C2C2C]";

  return (
    <div className="relative">
      <ul className="flex flex-col">
        <li>
          <NavLink
            to="/userdashboard"
            end
            className={({ isActive }) =>
              `${baseClass} ${isActive ? activeClass : inactiveClass}`
            }
          >
            Profile
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/userdashboard/appointments"
            className={({ isActive }) =>
              `${baseClass} ${isActive ? activeClass : inactiveClass}`
            }
          >
            Appointments
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/userdashboard/favourites"
            className={({ isActive }) =>
              `${baseClass} ${isActive ? activeClass : inactiveClass}`
            }
          >
            Favourites
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/userdashboard/productorder"
            className={({ isActive }) =>
              `${baseClass} ${isActive ? activeClass : inactiveClass}`
            }
          >
            Product Orders
          </NavLink>
        </li>
      </ul>
    </div>
  );
}
