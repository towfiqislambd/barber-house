import { Link } from "react-router-dom";
import {
  ContinueButtonArrowSvg,
  LeftSideArrowSvg,
} from "../svgContainer/SvgContainer";

import selectHumPic from "../../assets/images/smart-pricing/selectTeamHum.png";
import ProfileCard from "../ProfileCard/ProfileCard";
import { useState } from "react";

const SmartPricingStepFormOne = ({ step, setStep }) => {
  // State to manage checkboxes
  const [checkboxes, setCheckboxes] = useState([false, false, false]);

  // Handler for when a checkbox changes
  const handleCheckboxChange = (index) => {
    const updatedCheckboxes = [...checkboxes];
    updatedCheckboxes[index] = !updatedCheckboxes[index];
    setCheckboxes(updatedCheckboxes);
  };

  const profileData = [
    {
      id: "checkbox1",
      name: "Shawal Rahman",
      image: selectHumPic,
    },
    {
      id: "checkbox2",
      name: "John Doe",
      image: selectHumPic,
    },
    {
      id: "checkbox3",
      name: "Jane Smith",
      image: selectHumPic,
    },
  ];
  return (
    <section>
      <div className="flex justify-between container mt-9">
        <Link to={"/businessDashboard/marketing"}>
          <LeftSideArrowSvg />
        </Link>
        <div className="flex gap-4">
          <button className="border border-[#0D1619] lg:px-[18px] px-3 lg:py-[10px] py-2 rounded-[10px] text-[#0D1619] font-manrope text-base font-bold leading-6">
            Close
          </button>
          <Link
            onClick={() => {
              setStep(step + 1);
            }}
            className="bg-[#0D1619] rounded-[10px] text-[#FFF] lg:w-[135px] px-2 lg:px-0 flex items-center justify-center lg:gap-[6px]"
          >
            Next step
            <ContinueButtonArrowSvg />
          </Link>
        </div>
      </div>
      {/*  */}
      <div className="lg:max-w-[608px] mx-auto mt-5 lg:mt-0 px-6 md:px-0">
        {/* This is the Setup Automation */}
        <div>
          <p className="text-textLight font-manrope text-base font-medium leading-6">
            Set up smart pricing
          </p>
          <p className="sm:mt-[11px] text-[#000] font-outfit text-3xl sm:text-[36px] font-semibold leading-[43.2px]">
            Select team members
          </p>
          <p className="text-textLight font-manrope text-base font-medium leading-6">
            Choose which team members can be booked with smart pricing.
          </p>
        </div>
        {/*  */}
        <div className="sm:mt-12 mt-6">
          <div className="flex gap-[7px] items-center">
            <input type="checkbox" name="" id="" />
            <p className="text-textColor font-manrope text-xl font-bold leading-[30px]">
              Select One
            </p>
            <p className="bg-[#EBECF0] rounded-[100px] px-[10px] py-1">2</p>
          </div>
          <div className="border border-t-[#B3BAC5] lg:w-[608px] mt-4"></div>
          {/*  */}
          <div>
            {profileData.map((profile, index) => (
              <ProfileCard
                key={profile.id}
                checkboxId={profile.id}
                name={profile.name}
                image={profile.image}
                isChecked={checkboxes[index]}
                onCheckboxChange={() => handleCheckboxChange(index)}
              />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default SmartPricingStepFormOne;
