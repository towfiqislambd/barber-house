import { useEffect, useState, useRef } from "react";
import { IoTimeOutline } from "react-icons/io5";
import { FaStar } from "react-icons/fa";
import AddReviewModal from "../BusinessDashboard/Modals/AddReviewModal";
import { currencyFormatter } from "@/lib/currencyFormatter";

export default function PreviousCard({ previousData, onSelect, selected }) {
  const { id, store_services, date, time } = previousData;
  const [open, setOpen] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef(null);

  useEffect(() => {
    const onClick = e => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", onClick);
    return () => document.removeEventListener("mousedown", onClick);
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
          <h3 className="text-[#008A90] font-outfit text-xl font-medium text-center">
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
                  {store?.catalog_service?.name}
                </h4>
              </>
            ))}
          </div>
        </div>
        <div className="w-[30%] relative" ref={dropdownRef}>
          <button
            onClick={() => {
              setIsOpen(true);
            }}
            className="flex items-center gap-2 border rounded-full px-2 py-1"
          >
            <FaStar className="text-yellow-400" />
            Add Review
          </button>
        </div>
      </div>

      {/* Review Modal */}
      <AddReviewModal id={id} isOpen={isOpen} setIsOpen={setIsOpen} />
    </div>
  );
}
