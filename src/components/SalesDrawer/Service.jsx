import React from "react";
import { NextIconSvg } from "../svgContainer/SvgContainer";

const Service = () => {
  const serviceArr = ["Hair & Styling (3)", "Nails (1)", "Body messaging (1)"];

  return (
    <div className="flex flex-col gap-y-[26px]  ">
      {serviceArr.map(item => {
        return (
          <div className="w-full cursor-pointer border-[1px] border-solid border-[#DFE1E6] px-6 py-5 rounded-[8px] border-l-[3px] flex justify-between ">
            <span className="text-[#2C2C2C] font-manrope text-lg font-medium leading-[150%]  ">
              {" "}
              {item}{" "}
            </span>
            <NextIconSvg />
          </div>
        );
      })}
    </div>
  );
};

export default Service;
