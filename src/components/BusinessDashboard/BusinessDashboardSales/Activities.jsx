import {
  LeftSideSvg,
  RefundedCashSvg,
  RefundedSvg,
  SalesCreatedSvg,
  ThreeDotSvg,
  WalkInSvg,
} from "@/components/svgContainer/SvgContainer";
import ActionDropDown from "../BusinessDashboardOnlineProfile/ActionDropDown";
import { useNavigate } from "react-router-dom";
import { useEffect, useRef, useState } from "react";

const Activities = () => {
  const [open, setOpen] = useState(false);
  const [selectedItem, setSelectedItem] = useState(null);
  const menuRef = useRef(null);
  const navigate = useNavigate();
  const menuItems = [
    { name: "Refund sale", path: "/businessDashboard/refundsales" },
    { name: "Edit sale details", path: "/edit-sale" },
    { name: "Add a note", path: "/add-note" },
    { name: "Email", path: "/email" },
    { name: "Print", path: "/print" },
    { name: "Download PDF", path: "/download-pdf" },
  ];

  // Close popover when clicking outside
  useEffect(() => {
    function handleClickOutside(event) {
      if (menuRef.current && !menuRef.current.contains(event.target)) {
        setOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);
  return (
    <section>
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 sm:gap-0">
        {/* This is the button */}
        <button className="bg-[#8993A4] flex gap-2 py-[5px] px-3 rounded-3xl w-[150px] sm:w-[125px]">
          <RefundedSvg />
          <p className="text-[#FFF] font-manrope text-base font-medium leading-6">
            Refunded
          </p>
        </button>
        {/* This is the another div */}
        <div className="flex gap-2 sm:gap-4">
          <button className="border-[#008A90] border px-[18px] py-[9px] rounded-lg hover:bg-[#008A90] hover:text-[#FFF] text-textLight transition-all ease-in-out duration-200">
            <p className="t font-manrope text-base font-medium leading-6 ">
              Share invoice
            </p>
          </button>
          <div className="relative" ref={menuRef}>
            {/* Button to open Popover */}
            <button
              onClick={() => setOpen(!open)}
              className="bg-[#008A901F] rounded-full p-2"
            >
              <ThreeDotSvg />
            </button>
            {/* Popover Content */}
            {open && (
              <div className="absolute top-full right-0 mt-2 sm:w-[256px] w-[200px] bg-white shadow-md rounded-md sm:p-8 px-3 z-50">
                <ul className="space-y-2 text-black">
                  {menuItems.map((item) => (
                    <li
                      key={item}
                      onClick={() => {
                        navigate(item.path);
                        setOpen(false);
                        setSelectedItem(item);
                      }}
                      className={`cursor-pointer p-2 rounded-md transition-all ${
                        selectedItem === item.name
                          ? "bg-[#008A90] text-white font-manrope text-sm sm:text-base font-semibold leading-6"
                          : "text-textColor font-manrope text-sm sm:text-base font-semibold leading-6 hover:bg-[#008A90] hover:text-white"
                      }`}
                    >
                      {item.name}
                    </li>
                  ))}
                </ul>
              </div>
            )}
          </div>
        </div>
      </div>
      {/* Sale Section */}
      <div className="mt-6">
        <p className="text-textColor font-outfit font-medium leading-6 text-2xl xl:text-[32px]">
          Sale
        </p>
        <p className="mt-3 text-textColor font-manrope text-sm xl:text-base font-medium leading-6">
          Original sale date: Tue 11 Feb 2025 | Ghalib’s Barber Salon
        </p>
      </div>
      {/*  */}
      <div className="xl:mt-10 mt-5">
        <p className="text-textColor font-manrope text-lg font-semibold leading-[27px]">
          February
        </p>
        {/*  */}
        <div className="bg-[#F2F2F2] rounded-lg py-4 px-5 flex justify-between mt-3">
          <div>
            <p className="text-textColor font-manrope text-base xl:text-lg font-semibold leading-[27px]">
              SAR 10 refunded by cash
            </p>
            <p className="text-[#757575] font-manrope text-sm font-semibold leading-6">
              Today at 16:20
            </p>
            <p className="text-textLight font-manrope text-sm xl:text-base font-medium leading-6 mt-4">
              Refunded by M. R. Shihab
            </p>
          </div>
          <div className="relative">
            <button className="bg-[#EEE] p-3 rounded-lg h-14">
              <RefundedCashSvg />
            </button>
            <button className="absolute bottom-[30px] left-[50px]">
              <LeftSideSvg />
            </button>
          </div>
        </div>
        {/*  */}
        <div className="bg-[#F2F2F2] rounded-lg py-4 px-5 flex justify-between mt-3">
          <div>
            <p className="text-textColor font-manrope text-base xl:text-lg font-semibold leading-[27px]">
              Sale 7 created
            </p>
            <p className="text-[#757575] font-manrope text-sm font-semibold leading-6">
              Today at 16:20
            </p>
            <p className="text-textLight font-manrope text-sm xl:text-base font-medium leading-6 mt-4">
              Refunded by M. R. Shihab
            </p>
          </div>
          <div className="relative">
            <button className="bg-[#00659029] p-3 rounded-full h-14 ">
              <WalkInSvg />
            </button>
            <button className="absolute bottom-[38px] left-[36px]">
              <SalesCreatedSvg />
            </button>
          </div>
        </div>
        {/*  */}
        <div className="bg-[#F2F2F2] rounded-lg py-4 px-5 flex justify-between mt-3">
          <div>
            <p className="text-textColor font-manrope text-base xl:text-lg font-semibold leading-[27px]">
              SAR 10 refunded by cash
            </p>
            <p className="text-[#757575] font-manrope text-sm font-semibold leading-6">
              Today at 16:20
            </p>
            <p className="text-textLight font-manrope text-start xl:text-base font-medium leading-6 mt-4">
              Refunded by M. R. Shihab
            </p>
            <button className="mt-4">
              <ActionDropDown />
            </button>
          </div>
          <div className="relative">
            <button className="bg-[#EEE] p-3 rounded-lg h-14">
              <RefundedCashSvg />
            </button>
            <button className="absolute bottom-[84px] left-[50px]">
              <LeftSideSvg />
            </button>
          </div>
        </div>
        {/*  */}
        <div className="bg-[#F2F2F2] rounded-lg py-4 px-5 flex justify-between mt-3 ">
          <div>
            <p className="text-textColor font-manrope text-base xl:text-lg font-semibold leading-[27px]">
              Sale 7 created
            </p>
            <p className="text-[#757575] font-manrope text-sm font-semibold leading-6">
              Today at 16:20
            </p>
            <p className="text-textLight font-manrope text-sm xl:text-base font-medium leading-6 mt-4">
              Refunded by M. R. Shihab
            </p>
          </div>
          <div className="relative">
            <button className="bg-[#00659029] p-3 rounded-full h-14">
              <WalkInSvg />
            </button>
            <button className="absolute bottom-[38px] left-[36px]">
              <SalesCreatedSvg />
            </button>
          </div>
        </div>
      </div>
      <p className="mt-14 text-textLight font-manrope text-base font-medium leading-6">
        Activity for this sale in the last 90 days
      </p>
    </section>
  );
};

export default Activities;
