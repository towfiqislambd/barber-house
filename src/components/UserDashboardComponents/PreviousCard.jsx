import { useEffect, useState, useRef } from "react";
import { IoTimeOutline } from "react-icons/io5";
import { BsThreeDotsVertical } from "react-icons/bs";
import { Link } from "react-router-dom";
import { MdOutlineWatchLater } from "react-icons/md";
import { MdOutlineCancel } from "react-icons/md";

export default function PreviousCard({ previousData, onSelect, selected }) {
  console.log(previousData);
  const { store_services, date, time } = previousData;

  const [open, setOpen] = useState(false);
  const dropdownRef = useRef(null);

  const openFunc = () => {
    setOpen(!open);
  };
  useEffect(() => {
    const handleClickOutside = event => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <div className="mb-[20px]">
      <div
        className={`p-[20px] flex gap-[10px] mb-[20px] items-center rounded-[16px] bg-[#FFF] border ${
          selected ? "border-[#008A90] shadow-md" : "border-[#DFE1E6]"
        } w-[100%] cursor-pointer hover:shadow transition`}
        onClick={() => onSelect(previousData)}
      >
        <div className="flex flex-col gap-[8px] w-[20%] border-r border-[#DFE1E6] pr-[30px] flex-shrink-0">
          <h3 className="text-[#008A90] font-outfit text-[28px] font-medium text-center">
            {date}
          </h3>
        </div>
        <div className="w-[70%] flex justify-between items-center pl-[30px]">
          <div>
            <p className="text-[#008A90] font-manrope text-[18px] font-medium mb-[15px] flex items-center gap-[5px]">
              <span>
                <IoTimeOutline />
              </span>
              {time}
            </p>
          </div>
          <div className="flex flex-col ">
            {store_services?.map(store => (
              <>
                <h4 className="text-[#2C2C2C] font-manrope text-lg font-medium leading-[30px] ]">
                  {store?.catalog_service?.name} -{" "}
                  {currencyFormatter(+store?.catalog_service?.price)}
                </h4>
              </>
            ))}
          </div>
        </div>
        <div className="w-[10%] text-right relative" ref={dropdownRef}>
          <button className="px-[10px] py-[10px]" onClick={openFunc}>
            <BsThreeDotsVertical />
          </button>
          {open && (
            <div className="absolute w-[250px] shadow-md bg-white p-[32px] z-10">
              <ul className="text-start flex flex-col gap-[32px]">
                <li>
                  <Link className="text-[#2C2C2C] font-manrope text-[16px] font-medium flex items-center gap-[5px]">
                    <span className="text-[#008A90]text-[20px]">
                      <MdOutlineWatchLater />
                    </span>{" "}
                    Reschedule Booking
                  </Link>
                </li>
                <li>
                  <Link className="text-[#2C2C2C] font-manrope text-[16px] font-medium flex items-center gap-[5px]">
                    <span className="text-[#008A90] text-[20px]">
                      <MdOutlineCancel />
                    </span>{" "}
                    Cancel Booking
                  </Link>
                </li>
              </ul>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
