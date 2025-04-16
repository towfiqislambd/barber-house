import {
  CompletedSvg,
  GreenCircleSvg,
  ThreeDotSvg,
  WalkInSvg,
} from "@/components/svgContainer/SvgContainer";
import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";

const Details = () => {
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
      <div className="flex items-center sm:gap-[58px] gap-7">
        {/* This is the button */}
        <button className="bg-[#008C4F] flex gap-2 py-[5px] px-3 rounded-3xl">
          <CompletedSvg />
          <p className="text-[#FFF] font-manrope text-base font-medium leading-6">
            Completed
          </p>
        </button>
        {/* This is the another div */}
        <div className="flex gap-4">
          <button className="bg-[#008A90] px-[18px] py-[9px] rounded-lg">
            <p className="text-[#FFF] font-manrope text-base font-medium leading-6">
              Rebook
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
              <div className="absolute top-full right-0 mt-2 w-[256px] bg-white shadow-md rounded-md p-8">
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
                          ? "bg-[#008A90] text-white font-manrope text-base font-semibold leading-6"
                          : "text-textColor font-manrope text-base font-semibold leading-6 hover:bg-[#008A90] hover:text-white"
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
        {/*  */}
      </div>
      {/* Sale Section */}
      <div className="mt-6">
        <p className="text-textColor font-outfit font-medium leading-6 text-2xl xl:text-[32px]">
          Sale
        </p>
        <p className="mt-3 text-textColor font-manrope text-base font-medium leading-6">
          Tue, 11 Feb 2025 | Ghalib’s Barber Salon
        </p>
      </div>
      {/* Walk in Section */}
      <div className="xl:mt-10 mt-5 flex items-center justify-between bg-[#F8F8F8] xl:py-4 py-2 xl:px-5 px-3 rounded-lg">
        <p className="text-textColor font-manrope text-lg font-semibold leading-[27px]">
          Walk in
        </p>
        <button className="bg-[#00659029] p-3 rounded-full">
          <WalkInSvg />
        </button>
      </div>
      {/* Sale #6 */}
      <div className="xl:mt-8 mt-4">
        <p className="text-textColor font-manrope text-lg font-semibold leading-[27px]">
          Sale #6
        </p>
        <p className="text-textLight font-manrope text-base font-medium leading-6 mt-1">
          Tue, 11 Feb 2025
        </p>
      </div>
      <div>
        {/* Hair Cut */}
        <div className="xl:mt-8 mt-4 flex justify-between">
          <p className="text-textColor font-manrope text-lg font-semibold leading-[27px]">
            Haircut
          </p>
          <p className="text-textLight font-manrope text-base font-medium leading-6 mt-1">
            SAR 10:00
          </p>
        </div>
        {/*  */}
        <div className="flex items-center gap-2">
          <p className="text-[#757575] font-manrope text-base font-medium leading-6">
            15:34, 11 Feb 2025
          </p>
          <GreenCircleSvg />
          <p className="text-[#757575] font-manrope text-base font-medium leading-6">
            40 min
          </p>
          <GreenCircleSvg />
          <p className="text-[#757575] font-manrope text-base font-medium leading-6">
            M. R. Shihab
          </p>
        </div>
      </div>
      {/*  */}
      <div>
        {/* Hair Cut */}
        <div className="xl:mt-8 mt-4 flex justify-between">
          <p className="text-textColor font-manrope text-lg font-semibold leading-[27px]">
            Haircut
          </p>
          <p className="text-textLight font-manrope text-base font-medium leading-6 mt-1">
            SAR 10:00
          </p>
        </div>
        {/*  */}
        <div className="flex items-center gap-2">
          <p className="text-[#757575] font-manrope text-base font-medium leading-6">
            15:34, 11 Feb 2025
          </p>
          <GreenCircleSvg />
          <p className="text-[#757575] font-manrope text-base font-medium leading-6">
            40 min
          </p>
          <GreenCircleSvg />
          <p className="text-[#757575] font-manrope text-base font-medium leading-6">
            M. R. Shihab
          </p>
        </div>
      </div>
      {/* Subtotal */}
      <div className="xl:mt-8 mt-4 flex justify-between">
        <p className="text-textColor font-manrope text-base xl:text-lg font-semibold leading-[27px]">
          Subtotal
        </p>
        <p className="text-textColor font-manrope text-sm xl:text-base font-medium leading-6 mt-1">
          SAR 20:00
        </p>
      </div>
      {/* Total */}
      <div className="mt-2 flex justify-between">
        <p className="text-textColor font-manrope text-base xl:text-lg font-semibold leading-[27px]">
          Total
        </p>
        <p className="text-textColor font-manrope text-sm xl:text-base font-medium leading-6 mt-1">
          SAR 20:00
        </p>
      </div>
      {/*  */}
      <div className="border border-textColor my-5"></div>
      {/*  */}
      <div>
        <p className="text-textColor font-manrope text-sm xl:text-base font-medium leading-6">
          Paid with cash
        </p>
        <p className="mt-2 text-[#757575] font-manrope text-sm xl:text-base font-medium leading-6">
          Tue, 11 Feb 2025 at 16:14
        </p>
      </div>
    </section>
  );
};

export default Details;
