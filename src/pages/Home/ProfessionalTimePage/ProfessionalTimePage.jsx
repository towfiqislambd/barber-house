import { useState, useEffect } from "react";
import { Link, useLocation } from "react-router-dom";
import {
  AppointmentCalendarSvg,
  LeftSideArrowSvg,
  LeftSvg,
  RightSvg,
} from "@/components/svgContainer/SvgContainer";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { format } from "date-fns";
import { Calendar } from "@/components/ui/calendar";
import FeatherTwo from "../ChooseProfessionalTimePage/FeatherTwo";

const appointmentTime = [
  "12:00 PM",
  "12:10 PM",
  "12:20 PM",
  "12:30 PM",
  "12:40 PM",
  "12:50 PM",
  "01:00 PM",
  "01:10 PM",
  "01:20 PM",
  "01:30 PM",
  "01:40 PM",
  "01:50 PM",
  "02:00 PM",
  "02:10 PM",
  "02:20 PM",
  "02:30 PM",
  "02:40 PM",
  "02:50 PM",
  "03:00 PM",
  "03:10 PM",
  "03:20 PM",
  "03:30 PM",
  "03:40 PM",
  "03:50 PM",
  "04:00 PM",
  "04:10 PM",
  "04:20 PM",
  "04:30 PM",
  "04:40 PM",
  "04:50 PM",
  "05:00 PM",
  "05:10 PM",
  "05:20 PM",
];

const ProfessionalTimePage = () => {
  const defaultDate = new Date(); // current date as Date object
  const [selectedDate, setSelectedDate] = useState(defaultDate);
  const [date, setDate] = useState(defaultDate);

  const [selectedAppointment, setSelectedAppointment] = useState(null);
  const [visibleRange, setVisibleRange] = useState([0, 10]);
  const location = useLocation();
  const formattedDate = format(selectedDate, "yyyy-MM-dd");
  const storeData = location.state?.storeData;
  const selectedServices = location.state?.selectedServices;
  const bookingType = location.state?.bookingType;
  const totalPrice = location.state?.totalPrice;

  const handleNext = () => {
    if (visibleRange[1] < getDaysInMonth(selectedDate).length) {
      setVisibleRange([visibleRange[0] + 10, visibleRange[1] + 10]);
    }
  };

  const handlePrev = () => {
    if (visibleRange[0] > 0) {
      setVisibleRange([visibleRange[0] - 10, visibleRange[1] - 10]);
    }
  };

  const getDaysInMonth = date => {
    const year = date.getFullYear();
    const month = date.getMonth();
    const daysInMonth = new Date(year, month + 1, 0).getDate();

    return Array.from({ length: daysInMonth }, (_, idx) => {
      const day = idx + 1;
      const dayOfWeek = new Date(year, month, day).getDay();
      const daysOfWeek = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
      return { date: day, day: daysOfWeek[dayOfWeek] };
    });
  };

  useEffect(() => {
    setVisibleRange([0, 10]);
  }, [selectedDate]);

  const today = new Date();
  today.setHours(0, 0, 0, 0); // for exact date comparison

  return (
    <section className="bg-[#FCFCFC] pb-10 xl:pb-20 pt-28 2xl:py-36 lg:px-5 xl:px-7 2xl:px-10 3xl:px-12 4xl:px-0">
      <div className="container">
        {/* Breadcrumb */}
        <div className="flex gap-4 items-center">
          <Link>
            <button className="flex border border-[#757575] rounded-[100px] text-[#2C2C2C] lg:text-base font-manrope font-medium gap-1 text-sm lg:gap-[6px] items-center leading-6 px-2 lg:px-3 py-1 lg:py-2">
              <LeftSideArrowSvg />
              Back
            </button>
          </Link>
        </div>

        <h1 className="text-2xl xl:text-3xl mt-5 text-textColor font-medium font-outfit">
          Select Time for Services
        </h1>

        <div className="grid xl:grid-cols-12 gap-5 2xl:gap-10">
          <div className="xl:col-span-8">
            {/* Date Picker */}
            <Popover>
              <PopoverTrigger asChild>
                <div className="flex justify-end mt-3 md:mt-0 xl:mt-5 mb-5 xl:mb-10">
                  <button className="flex gap-2 focus:border-none border-gray-100 bg-white items-center md:py-3 py-2 text-sm md:text-base focus:outline-none px-3 md:px-4 font-medium text-[#2C2C2C] rounded-full border shadow">
                    <AppointmentCalendarSvg />
                    <p>{date ? format(date, "PPP") : "Choose Date"}</p>
                  </button>
                </div>
              </PopoverTrigger>
              <PopoverContent
                side="bottom"
                align="start"
                className="bg-white p-3 rounded-md shadow-md w-auto"
              >
                <Calendar
                  mode="single"
                  selected={date}
                  onSelect={selected => {
                    if (selected >= today) {
                      setDate(selected);
                      setSelectedDate(selected);
                    }
                  }}
                  disabled={date => date < today}
                />
              </PopoverContent>
            </Popover>

            {/* Month and Navigation */}
            <div className="flex mb-5 items-center justify-between">
              <h3 className=" text-[#2C2C2C] font-outfit text-lg md:text-xl font-medium">
                {format(selectedDate, "MMMM yyyy")}
              </h3>
              <div className="flex gap-3 items-center">
                <button
                  onClick={handlePrev}
                  disabled={visibleRange[0] === 0}
                  className="mr-2"
                >
                  <LeftSvg />
                </button>
                <button
                  onClick={handleNext}
                  disabled={
                    visibleRange[1] >= getDaysInMonth(selectedDate).length
                  }
                >
                  <RightSvg />
                </button>
              </div>
            </div>

            {/* Day Selection */}
            <div className="flex flex-wrap gap-y-2 gap-x-1 md:justify-between items-center">
              {getDaysInMonth(selectedDate)
                .slice(visibleRange[0], visibleRange[1])
                .map(item => {
                  const itemDate = new Date(
                    selectedDate.getFullYear(),
                    selectedDate.getMonth(),
                    item.date
                  );

                  const isSelected =
                    selectedDate &&
                    itemDate.toDateString() === selectedDate.toDateString();

                  const isPast = itemDate < today;

                  return (
                    <div className="text-center" key={item.date}>
                      <button
                        onClick={() => !isPast && setSelectedDate(itemDate)}
                        disabled={isPast}
                        className={`w-12 h-[44px] 2xl:w-[60px] 2xl:h-[52px] font-bold text-lg md:text-xl rounded-xl border transition-all ${
                          isSelected
                            ? "bg-primary text-white"
                            : "bg-white text-black"
                        } ${isPast ? "opacity-50 cursor-not-allowed" : ""}`}
                      >
                        <p>{item.date}</p>
                      </button>
                      <p className="mt-2">{item.day}</p>
                    </div>
                  );
                })}
            </div>

            {/* Appointment Time Selection */}
            <div className="grid grid-cols-2 md:grid-cols-3 gap-3 2xl:gap-5 mt-10">
              {appointmentTime.map((item, idx) => (
                <button
                  key={idx}
                  className={`md:text-lg py-2 md:py-3 rounded-lg border transition-all ${
                    selectedAppointment === item.split(" ")[0]
                      ? " bg-primaryLight text-primary font-bold border border-borderColor"
                      : "bg-white text-[#545454] font-semibold"
                  }`}
                  onClick={() => setSelectedAppointment(item.split(" ")[0])}
                >
                  {item}
                </button>
              ))}
            </div>
          </div>

          {/* Right Sidebar */}
          <div className="xl:col-span-4">
            <FeatherTwo
              formattedDate={formattedDate}
              storeData={storeData}
              selectedServices={selectedServices}
              bookingType={bookingType}
              selectedAppointment={selectedAppointment}
              totalPrice={totalPrice}
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProfessionalTimePage;
