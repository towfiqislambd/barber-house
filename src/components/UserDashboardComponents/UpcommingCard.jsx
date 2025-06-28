import React, { useEffect, useState, useRef } from "react";
import { IoTimeOutline } from "react-icons/io5";
import Currency from "../../assets/images/currency.png";
import { BsThreeDotsVertical } from "react-icons/bs";
import { Link } from "react-router-dom";
import { MdOutlineWatchLater, MdOutlineCancel } from "react-icons/md";
import { IoLocationOutline } from "react-icons/io5";
import { FiHome } from "react-icons/fi";
import { currencyFormatter } from "@/lib/currencyFormatter";

import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { useRescheduleAppointment } from "@/hooks/user.mutation";

export default function UpcommingCard({ upcomingData, onSelect, selected }) {
  const { store_services, date, time, status } = upcomingData;
  const [open, setOpen] = useState(false);
  const [showRescheduleModal, setShowRescheduleModal] = useState(false);
  const dropdownRef = useRef(null);

  const openFunc = () => setOpen(!open);

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setOpen(false);
      }
    };
    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  const handleRescheduleClick = () => {
    setShowRescheduleModal(true);
    setOpen(false);
  };

  return (
    <div className="mb-[20px]">
      <div
        className={`p-[20px] flex gap-[10px] mb-[20px] items-center rounded-[16px] relative bg-[#FFF] border ${
          selected ? "border-primary shadow-md" : "border-[#DFE1E6]"
        } w-[100%] cursor-pointer hover:shadow transition`}
        onClick={() => onSelect(upcomingData)}
      >
        <span
          className={`absolute top-1 right-3 ${
            status === "confirmed" ? "bg-primary" : "bg-red-500"
          }  px-2 font-semibold rounded-md text-white`}
        >
          {status}
        </span>
        <div className="flex flex-col gap-[8px] w-[20%] border-r border-[#DFE1E6] pr-[30px] flex-shrink-0">
          <h3 className="text-primary font-outfit text-[28px] font-medium text-center">
            {date}
          </h3>
        </div>
        <div className="w-[70%] flex flex-col justify-between  pl-[30px]">
          <div>
            <p className="text-primary font-manrope text-[18px] font-medium mb-[15px] flex items-center gap-[5px]">
              <span>
                <IoTimeOutline />
              </span>
              {time}
            </p>
          </div>
          <div className="flex flex-col">
            {store_services?.map((store, index) => (
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
          {status === "confirmed" && (
            <>
              <button className="px-[10px] py-[10px]" onClick={openFunc}>
                <BsThreeDotsVertical />
              </button>
              {open && (
                <div className="absolute w-[250px] shadow-md bg-white p-[32px] z-10">
                  <ul className="text-start flex flex-col gap-[32px]">
                    <li>
                      <button
                        onClick={handleRescheduleClick}
                        className="text-[#2C2C2C] font-manrope text-[16px] font-medium flex items-center gap-[5px]"
                      >
                        <span className="text-primary text-[20px]">
                          <MdOutlineWatchLater />
                        </span>{" "}
                        Reschedule Booking
                      </button>
                    </li>

                    <li>
                      <Link className="text-[#2C2C2C] font-manrope text-[16px] font-medium flex items-center gap-[5px]">
                        <span className="text-primary text-[20px]">
                          <MdOutlineCancel />
                        </span>{" "}
                        Cancel Booking
                      </Link>
                    </li>
                  </ul>
                </div>
              )}
            </>
          )}
        </div>
      </div>
      {/* Modal */}
      {showRescheduleModal && (
        <RescheduleModal
          onClose={() => setShowRescheduleModal(false)}
          appointment={upcomingData}
        />
      )}
    </div>
  );
}

function RescheduleModal({ onClose, appointment }) {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [selectedTime, setSelectedTime] = useState("");
  const [loading, setLoading] = useState(false);
  const { mutateAsync } = useRescheduleAppointment(setLoading);

  const handleReschedule = async () => {
    const payload = {
      date: selectedDate.toISOString().split("T")[0],
      time: selectedTime,
    };
    await mutateAsync({ id: appointment?.id, payload });
    onClose();
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg shadow-xl p-6 w-[400px] relative">
        <button
          className="absolute top-2 right-3 text-gray-400 text-xl"
          onClick={onClose}
        >
          ✕
        </button>
        <h2 className="text-lg font-bold mb-4">Reschedule Appointment</h2>

        <div className="mb-4">
          <label className="block text-sm font-medium mb-1">Select Date</label>
          <DatePicker
            selected={selectedDate}
            onChange={(date) => setSelectedDate(date)}
            dateFormat="yyyy-MM-dd"
            minDate={new Date()}
            className="border p-2 w-full rounded"
          />
        </div>

        <div className="mb-4">
          <label className="block text-sm font-medium mb-1">Select Time</label>
          <input
            type="time"
            value={selectedTime}
            onChange={(e) => setSelectedTime(e.target.value)}
            className="border p-2 w-full rounded"
          />
        </div>

        <button
          className="bg-primary text-white px-4 py-2 rounded w-full"
          onClick={handleReschedule}
          disabled={loading}
        >
          {loading ? "Rescheduling..." : "Confirm Reschedule"}
        </button>
      </div>
    </div>
  );
}
