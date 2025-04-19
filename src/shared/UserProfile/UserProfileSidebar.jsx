
import React, { useState, useEffect } from 'react';
import { NavLink } from 'react-router-dom';

export default function UserProfileSidebar() {
  // Get the active item from localStorage or set it to "profile" by default
  const [activeItem, setActiveItem] = useState(localStorage.getItem('activeTab') || 'profile');

  const linkStyle = "py-[16px] px-[32px] rounded-[8px] text-[#2C2C2C] font-manrope font-medium leading-[27px] text-[18px] block";
  const activeStyle = "bg-primary text-white";

  // Save the active tab to localStorage whenever it changes
  useEffect(() => {
    localStorage.setItem('activeTab', activeItem);
  }, [activeItem]);

  const handleClick = (item) => {
    setActiveItem(item);
  };

  return (
    <div className='relative'>
      <ul className='flex flex-col'>
        <li>
          <NavLink
            to="/userdashboard"
            className={`${linkStyle} ${activeItem === 'profile' ? activeStyle : ''}`}
            onClick={() => handleClick('profile')}
          >
            Profile
          </NavLink>
        </li>
        <li>
          <NavLink
            to="appointments"
            className={`${linkStyle} ${activeItem === 'appointments' ? activeStyle : ''}`}
            onClick={() => handleClick('appointments')}
          >
            Appointments
          </NavLink>
        </li>
        <li>
          <NavLink
            to="wallet"
            className={`${linkStyle} ${activeItem === 'wallet' ? activeStyle : ''}`}
            onClick={() => handleClick('wallet')}
          >
            Wallet
          </NavLink>
        </li>
        <li>
          <NavLink
            to="favourites"
            className={`${linkStyle} ${activeItem === 'favourites' ? activeStyle : ''}`}
            onClick={() => handleClick('favourites')}
          >
            Favourites
          </NavLink>
        </li>
        <li>
          <NavLink
            to="forms"
            className={`${linkStyle} ${activeItem === 'forms' ? activeStyle : ''}`}
            onClick={() => handleClick('forms')}
          >
            Forms
          </NavLink>
        </li>
        <li>
          <NavLink
            to="productorder"
            className={`${linkStyle} ${activeItem === 'productorder' ? activeStyle : ''}`}
            onClick={() => handleClick('productorder')}
          >
            Product Orders
          </NavLink>
        </li>
        <li>
          <NavLink
            to="settings"
            className={`${linkStyle} ${activeItem === 'settings' ? activeStyle : ''}`}
            onClick={() => handleClick('settings')}
          >
            Settings
          </NavLink>
        </li>
      </ul>
    </div>
  );
}
