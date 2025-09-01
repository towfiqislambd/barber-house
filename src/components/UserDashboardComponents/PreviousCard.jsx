import { useEffect, useState, useRef } from "react";
import { IoTimeOutline } from "react-icons/io5";
import { FaStar } from "react-icons/fa";
import AddReviewModal from "../BusinessDashboard/Modals/AddReviewModal";
import AddComplainModal from "../BusinessDashboard/Modals/AddComplainModal";
import { MdOutlineFeedback } from "react-icons/md";

export default function PreviousCard({ previousData, onSelect, selected }) {
  const { id, store_services, date, time, online_store_id } = previousData;
  const [open, setOpen] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [openComplain, setOpenComplain] = useState(false);
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
    <div className="mb-5">
      <div
        onClick={() => onSelect(previousData)}
        className={`group flex flex-col sm:flex-row gap-4 p-5 rounded-2xl border ${
          selected ? "border-[#008A90] shadow-md" : "border-[#DFE1E6]"
        } bg-white hover:shadow transition cursor-pointer`}
      >
        {/* DATE BLOCK */}
        <div className="sm:flex-shrink-0 sm:w-1/4 md:w-1/5 flex justify-center items-center border-b sm:border-b-0 sm:border-r border-[#DFE1E6] pb-2 sm:pb-0 sm:pr-7">
          <h3 className="font-outfit text-lg font-medium text-[#008A90]">
            {date}
          </h3>
        </div>

        {/* TIME & SERVICES */}
        <div className="flex flex-col flex-1 sm:px-7 gap-2">
          <p className="flex items-center gap-2 text-[#008A90] font-manrope text-[17px]">
            <IoTimeOutline />
            {time}
          </p>

          <div className="space-y-1">
            {store_services?.map(store => (
              <h4
                key={store.id ?? store.catalog_service?.id}
                className="text-[#2C2C2C] font-manrope text-[17px] leading-6"
              >
                {store?.catalog_service?.name}
              </h4>
            ))}
          </div>
        </div>

        {/* REVIEW BUTTON */}
        <div ref={dropdownRef} className="flex flex-col gap-2 ">
          <button
            onClick={e => {
              e.stopPropagation(); // prevent card selection
              setIsOpen(true);
            }}
            className="inline-flex items-center gap-2 border rounded-full px-3 py-1 text-sm font-medium hover:bg-gray-50"
          >
            <FaStar className="text-yellow-400" />
            Add Review
          </button>

          {/* Add complain btn */}
          <button
            onClick={e => {
              e.stopPropagation();
              setOpenComplain(true);
            }}
            className="inline-flex items-center gap-2 border rounded-full px-3 py-1 text-sm font-medium hover:bg-gray-50"
          >
            <MdOutlineFeedback className="text-primary" />
            Add Complain
          </button>
        </div>
      </div>

      {/* Review Modal */}
      <AddReviewModal id={id} isOpen={isOpen} setIsOpen={setIsOpen} />
      <AddComplainModal
        id={online_store_id}
        isOpen={openComplain}
        setIsOpen={setOpenComplain}
      />
    </div>
  );
}
