import { useState } from "react";
import TimeSelectDayName from "./TimeSelectDayName";
import { Switch } from "antd";

const EditOpeningHours = () => {
  const onChange = (checked) => {
    console.log(`switch to ${checked}`);
  };
  const days = [
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
    "Sunday",
  ];

  // State to track checked status for each day
  const [checkedDays, setCheckedDays] = useState(
    days.reduce((acc, day) => ({ ...acc, [day]: false }), {})
  );

  // Function to toggle checkbox state
  const handleCheckboxChange = (day) => {
    setCheckedDays((prev) => ({ ...prev, [day]: !prev[day] }));
  };
  return (
    <section>
      {/* This is the button section */}
      <div className="flex justify-end gap-2 container mt-10">
        <button className="border border-[#0D1619] py-[10px] px-[18px] rounded-[10px] text-[#0D1619] font-manrope text-base font-bold leading-6">
          Close
        </button>
        <button className="border border-[#0D1619] py-[10px] px-[18px] rounded-[10px] font-manrope text-base font-bold leading-6 bg-[#0D1619] text-white">
          Save
        </button>
      </div>
      {/* This is the Edit Opening Hours Section */}
      <div className="max-w-[778px] mx-auto">
        <p className="text-[#000] font-outfit text-[36px] font-semibold leading-[43.2px]">
          Edit opening hours
        </p>
        {/* Map through days array */}
        {days.map((day) => (
          <TimeSelectDayName
            key={day}
            isChecked={checkedDays[day]}
            setIsChecked={() => handleCheckboxChange(day)}
            dayName={day}
          />
        ))}
        {/*  */}
        <div className="flex items-center gap-[60px] mb-32">
          <div>
            <p className="text-textSecondary font-outfit text-2xl font-semibold leading-[28.8px]">
              Update team member shifts
            </p>
            <p className="mt-2 max-w-[670px]">
              Override this location's shifts (starting from tomorrow) with the
              new opening hours you set here.
            </p>
          </div>
          <Switch defaultChecked onChange={onChange} />
        </div>
      </div>
    </section>
  );
};

export default EditOpeningHours;
