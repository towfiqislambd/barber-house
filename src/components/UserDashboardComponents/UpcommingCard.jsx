import React, { useEffect, useState, useRef } from "react";
import { IoTimeOutline } from "react-icons/io5";
import { BsThreeDotsVertical } from "react-icons/bs";
import { FaStar } from "react-icons/fa";
import { MdOutlineWatchLater, MdOutlineCancel } from "react-icons/md";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { currencyFormatter } from "@/lib/currencyFormatter";
import {
  useRescheduleAppointment,
  useCancleAppointment,
} from "@/hooks/user.mutation";

export default function UpcommingCard({ upcomingData, onSelect, selected }) {
  const { id, store_services, date, time, status } = upcomingData;
  const [open, setOpen] = useState(false);
  const [showRescheduleModal, setShowRescheduleModal] = useState(false);
  const [showCancelModal, setShowCancelModal] = useState(false);
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
        className={`p-5 flex items-center rounded-lg bg-white border ${
          selected ? "border-primary shadow-md" : "border-gray-300"
        } relative cursor-pointer hover:shadow`}
        onClick={() => onSelect(upcomingData)}
      >
        {/* Status badge */}
        <span
          className={`absolute bottom-2 right-3 px-2 py-1 text-xs font-semibold rounded ${
            status === "confirmed"
              ? "bg-primary text-white"
              : "bg-red-500 text-white"
          }`}
        >
          {status}
        </span>

        {/* Date */}
        <div className="w-1/5 border-r pr-4">
          <h3 className="text-primary text-2xl text-center">{date}</h3>
        </div>

        {/* Time & services */}
        <div className="w-4/5 pl-6 flex flex-col">
          <p className="text-primary flex items-center mb-3">
            <IoTimeOutline className="mr-2" /> {time}
          </p>
          {store_services.map(s => (
            <h4 key={s.catalog_service?.id} className="font-medium">
              {s.catalog_service?.name} —{" "}
              {currencyFormatter(+s.catalog_service?.price)}
            </h4>
          ))}
        </div>

        {/* 3‑dots menu */}
        {status === "confirmed" && (
          <div className="absolute top-3 right-3" ref={dropdownRef}>
            <button onClick={() => setOpen(o => !o)}>
              <BsThreeDotsVertical />
            </button>
            {open && (
              <div className="absolute right-0 mt-2 w-56 bg-white shadow-lg rounded p-4 z-10">
                <ul className="space-y-4">
                  <li>
                    <button
                      onClick={() => {
                        setShowRescheduleModal(true);
                        setOpen(false);
                      }}
                      className="flex items-center gap-2"
                    >
                      <MdOutlineWatchLater className="text-primary" />{" "}
                      Reschedule
                    </button>
                  </li>
                  <li>
                    <button
                      onClick={() => {
                        setShowCancelModal(true);
                        setOpen(false);
                      }}
                      className="flex items-center gap-2"
                    >
                      <MdOutlineCancel className="text-red-500" /> Cancel
                      Booking
                    </button>
                  </li>
                  <li>
                    <button
                      onClick={() => {
                        setShowCancelModal(true);
                        setOpen(false);
                      }}
                      className="flex items-center gap-2"
                    >
                      <FaStar className="text-yellow-400" />
                      Add Review
                    </button>
                  </li>
                </ul>
              </div>
            )}
          </div>
        )}
      </div>

      {showRescheduleModal && (
        <RescheduleModal
          appointment={upcomingData}
          onClose={() => setShowRescheduleModal(false)}
        />
      )}

      {showCancelModal && (
        <CancelModal
          appointmentId={id}
          onClose={() => setShowCancelModal(false)}
        />
      )}
    </div>
  );
}

// ——————— Reschedule Modal (unchanged) ———————
function RescheduleModal({ appointment, onClose }) {
  const [selectedDate, setSelectedDate] = useState(new Date());
  const [selectedTime, setSelectedTime] = useState("");
  const [loading, setLoading] = useState(false);
  const { mutateAsync } = useRescheduleAppointment(setLoading);

  const handleReschedule = async () => {
    const payload = {
      date: selectedDate.toISOString().split("T")[0],
      time: selectedTime,
    };
    try {
      await mutateAsync({ id: appointment.id, payload });
      onClose();
    } catch {}
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg p-6 w-96 relative">
        <button
          className="absolute top-2 right-3 text-gray-500"
          onClick={onClose}
        >
          ✕
        </button>
        <h2 className="text-xl font-bold mb-4">Reschedule Appointment</h2>
        <label className="block mb-2">Select Date</label>
        <DatePicker
          selected={selectedDate}
          onChange={setSelectedDate}
          dateFormat="yyyy-MM-dd"
          minDate={new Date()}
          className="border p-2 w-full rounded mb-4"
        />
        <label className="block mb-2">Select Time</label>
        <input
          type="time"
          value={selectedTime}
          onChange={e => setSelectedTime(e.target.value)}
          className="border p-2 w-full rounded mb-6"
        />
        <button
          onClick={handleReschedule}
          disabled={loading || !selectedTime}
          className="bg-primary text-white w-full py-2 rounded"
        >
          {loading ? "Rescheduling…" : "Confirm"}
        </button>
      </div>
    </div>
  );
}

// ——————— Cancel Modal ———————
function CancelModal({ appointmentId, onClose }) {
  const [loading, setLoading] = useState(false);
  const { mutateAsync } = useCancleAppointment(setLoading);

  const handleCancel = async () => {
    try {
      await mutateAsync(appointmentId);
      onClose();
    } catch {}
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50">
      <div className="bg-white rounded-lg p-6 w-80 relative">
        <button
          className="absolute top-2 right-3 text-gray-500"
          onClick={onClose}
        >
          ✕
        </button>
        <h2 className="text-xl font-bold mb-4">Cancel Booking?</h2>
        <p className="mb-6">
          Are you sure you want to cancel this appointment?
        </p>
        <div className="flex space-x-4">
          <button
            onClick={onClose}
            className="border px-4 py-2 rounded flex-1"
            disabled={loading}
          >
            No, keep it
          </button>
          <button
            onClick={handleCancel}
            className="bg-red-500 text-white px-4 py-2 rounded flex-1"
            disabled={loading}
          >
            {loading ? "Cancelling…" : "Yes, cancel"}
          </button>
        </div>
      </div>
    </div>
  );
}
