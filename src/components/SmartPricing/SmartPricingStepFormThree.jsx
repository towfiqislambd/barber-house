import { Link } from "react-router-dom";
import {
  ContinueButtonArrowSvg,
  LeftSideArrowSvg,
} from "../svgContainer/SvgContainer";

import { useState } from "react";
import SmartPricingRulesTable from "./SmartPricingRulesTable";

const SmartPricingStepFormThree = ({ step, setStep }) => {
  const initialDaysState = [
    { day: "Monday", isChecked: false, isVisible: true },
    { day: "Tuesday", isChecked: false, isVisible: true },
    { day: "Wednesday", isChecked: false, isVisible: true },
    { day: "Thursday", isChecked: false, isVisible: true },
    { day: "Friday", isChecked: false, isVisible: true },
    { day: "Saturday", isChecked: false, isVisible: true },
    { day: "Sunday", isChecked: false, isVisible: true },
  ];

  // State that holds the days' data
  const [daysState, setDaysState] = useState(initialDaysState);

  // Handle the delete function for each day
  const handleDelete = (day) => {
    setDaysState((prevState) =>
      prevState.map((item) =>
        item.day === day
          ? { ...item, isVisible: false, isChecked: false }
          : item
      )
    );
  };

  // Handle the checkbox change for each day
  const handleCheckboxChange = (day) => {
    setDaysState((prevState) =>
      prevState.map((item) =>
        item.day === day
          ? { ...item, isChecked: !item.isChecked, isVisible: true }
          : item
      )
    );
  };
  return (
    <section>
      <div className="flex justify-between container mt-9">
        <Link
          onClick={() => {
            setStep(step - 1);
          }}
        >
          <LeftSideArrowSvg />
        </Link>
        <div className="flex gap-4">
          <button className="border border-[#0D1619] px-[18px] py-[10px] rounded-[10px] text-[#0D1619] font-manrope text-base font-bold leading-6">
            Close
          </button>
          <Link
            to={"/businessDashboard/marketing"}
            className="bg-[#0D1619] rounded-[10px] text-[#FFF] w-[135px] flex items-center justify-center gap-[6px]"
          >
            Next step
            <ContinueButtonArrowSvg />
          </Link>
        </div>
      </div>
      {/*  */}
      <div className="xl:max-w-[1214px] w-full xl:mx-auto px-6 md:px-0">
        {/* This is the Setup Automation */}
        <div>
          <p className="text-textLight font-manrope text-base font-medium leading-6">
            Set up smart pricing
          </p>
          <p className="mt-[11px] text-[#000] font-outfit text-2xl sm:text-3xl md:text-[36px] font-semibold leading-[43.2px]">
            Set up smart pricing rules
          </p>
          <p className="text-textLight font-manrope text-sm sm:text-base font-medium leading-6">
            Choose how and when to apply smart pricing.
          </p>
        </div>
        {/*  */}
        <div className="lg:mt-12 mt-6">
          {/*  */}
          <div className="hidden xl:flex xl:gap-[160px]">
            <p className="text-[#000] font-manrope text-base font-semibold leading-6">
              Day
            </p>
            <div className="flex gap-[200px]">
              <p className="text-[#000] font-manrope text-base font-semibold leading-6">
                Time interval
              </p>
              <p className="text-[#000] font-manrope text-base font-semibold leading-6">
                Price change
              </p>
              <p className="text-[#000] font-manrope text-base font-semibold leading-6">
                Change by
              </p>
            </div>
          </div>
          {/*  */}
          <div className="hidden xl:block border my-6"></div>
          {/*  */}
          {/* Checkbox for Monday */}
          {daysState.map((dayObj, index) => (
            <SmartPricingRulesTable
              key={index}
              isChecked={dayObj.isChecked}
              isVisible={dayObj.isVisible}
              handleDelete={() => handleDelete(dayObj.day)}
              handleCheckboxChange={() => handleCheckboxChange(dayObj.day)}
              days={dayObj.day}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default SmartPricingStepFormThree;
