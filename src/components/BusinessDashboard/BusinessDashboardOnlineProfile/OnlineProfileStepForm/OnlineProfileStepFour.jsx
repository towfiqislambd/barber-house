import {
  ContinueButtonArrowSvg,
  LeftSideArrowSvg,
  OnlineProfilePlusSvg,
} from "@/components/svgContainer/SvgContainer";
import { Link } from "react-router-dom";
import OnlineSelect from "../OnlineSelect";
import { useState } from "react";

const OnlineProfileStepFour = ({ step, setStep }) => {
  const [date, setDate] = useState("Monday");
  const [openingHours, setOpeningHours] = useState([
    { id: 1, from: "", to: "" },
  ]);

  // Function to add a new time slot
  const addTimeSlot = () => {
    setOpeningHours([...openingHours, { id: Date.now(), from: "", to: "" }]);
  };

  return (
    <section>
      <div className="flex justify-between container mt-9">
        <button onClick={() => setStep(step - 1)}>
          <LeftSideArrowSvg />
        </button>
        <div className="flex gap-4">
          <button className="border border-[#0D1619] px-[18px] py-[10px] rounded-[10px] text-[#0D1619] font-manrope text-base font-bold leading-6">
            Close
          </button>
          <Link
            onClick={() => setStep(step + 1)}
            to={"/businessDashboard/businessContainer"}
            className="bg-[#0D1619] rounded-[10px] text-[#FFF] w-[135px] flex items-center justify-center gap-[6px]"
          >
            Continue
            <ContinueButtonArrowSvg />
          </Link>
        </div>
      </div>
      <div className="max-w-[608px] mx-auto mt-6 lg:mt-0 px-5 md:px-0 pb-10 sm:pb-0">
        <h1 className="text-textColor font-outfit lg:text-4xl text-3xl font-semibold leading-[43.2px]">
          Add your opening hours
        </h1>
        <p className="text-textLight mt-3 font-manrope text-base font-medium leading-6">
          Let clients know your standard opening hours. These will be displayed
          on your profile but do not affect your appointments calendar.
        </p>

        <div className="md:mt-10 mt-5 flex flex-wrap sm:flex-wrap md:gap-4 sm:gap-[6px] gap-3">
          {[
            "Monday",
            "Tuesday",
            "Wednesday",
            "Thursday",
            "Friday",
            "Saturday",
            "Sunday",
          ].map((day) => (
            <button
              key={day}
              onClick={() => setDate(day)}
              className={`${
                date === day ? "bg-gray-200 text-black border" : "bg-[#6950F3]"
              } lg:px-[16px] md:px-2 px-[6px] py-[18px] rounded-[100px] text-[#FFF] font-manrope text-base font-medium leading-6 w-[66px]`}
            >
              {day.slice(0, 3)}
            </button>
          ))}
        </div>

        {openingHours.map((slot) => (
          <div
            key={slot.id}
            className="border border-[#DFE1E6] p-4 mt-5 rounded-2xl flex md:flex-row flex-col lg:gap-[120px] gap-4 sm:justify-between"
          >
            <div>
              <h1 className="text-textColor font-manrope text-lg font-semibold leading-[27px]">
                {date}
              </h1>
              <p className="text-textLight font-manrope text-base font-normal leading-6">
                Open
              </p>
            </div>
            <div className="flex items-center">
              <OnlineSelect />
              <h1 className="px-4">To</h1>
              <OnlineSelect />
              <div className="pl-4">
                <button onClick={addTimeSlot}>
                  <OnlineProfilePlusSvg />
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default OnlineProfileStepFour;
