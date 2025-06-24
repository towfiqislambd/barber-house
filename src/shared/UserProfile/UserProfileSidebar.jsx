import { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";

export default function UserProfileSidebar() {
  const [activeItem, setActiveItem] = useState(
    localStorage.getItem("activeTab") || "profile"
  );

  const linkStyle =
    "py-[16px] px-[32px] rounded-[8px] text-[#2C2C2C] font-manrope font-medium leading-[27px] text-[18px] block";
  const activeStyle = "bg-primary text-white";

  useEffect(() => {
    localStorage.setItem("activeTab", activeItem);
  }, [activeItem]);

  const handleClick = item => {
    setActiveItem(item);
  };

  return (
    <div className="relative">
      <ul className="flex flex-col">
        <li>
          <NavLink
            to="/userdashboard"
            className={`${linkStyle} ${
              activeItem === "profile" ? activeStyle : ""
            }`}
            onClick={() => handleClick("profile")}
          >
            Profile
          </NavLink>
        </li>
        <li>
          <NavLink
            to="appointments"
            className={`${linkStyle} ${
              activeItem === "appointments" ? activeStyle : ""
            }`}
            onClick={() => handleClick("appointments")}
          >
            Appointments
          </NavLink>
        </li>
        <li>
          <NavLink
            to="favourites"
            className={`${linkStyle} ${
              activeItem === "favourites" ? activeStyle : ""
            }`}
            onClick={() => handleClick("favourites")}
          >
            Favourites
          </NavLink>
        </li>
        <li>
          <NavLink
            to="productorder"
            className={`${linkStyle} ${
              activeItem === "productorder" ? activeStyle : ""
            }`}
            onClick={() => handleClick("productorder")}
          >
            Product Orders
          </NavLink>
        </li>
      </ul>
    </div>
  );
}
