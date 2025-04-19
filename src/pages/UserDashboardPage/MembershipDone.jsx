import React from "react";
import { IoMdCheckmarkCircleOutline } from "react-icons/io";
import Currency from "../../assets/images/currency.png";

export default function MembershipDone() {
  return (
    <div className="w-[800px] mx-auto border border-primary rounded-[16px] px-[80px] py-[48px]">
      <div className="">
        <div className="mb-[32px]">
          <button className="flex items-center gap-[10px] text-[#FFF] font-manrope font-medium py-[6px] px-[16px] bg-[#008C4F] rounded-[24px]">
            <span>
              <IoMdCheckmarkCircleOutline />
            </span>{" "}
            Membership Done
          </button>
        </div>

        <div className="mb-[40px]">
          <h3 className="font-outfit text-[32px] text-[#2C2C2C] font-medium">
            Membership
          </h3>
          <ul className="flex gap-[15px] list-disc list-inside">
            <li className="text-[#545454] font-manrope text-[16px] font-medium list-none">
              Joined on the membership Feb 3, 2025{" "}
            </li>
            <li className="text-[#545454] font-manrope text-[16px] font-medium">
              Trendy Trim
            </li>
          </ul>
        </div>
        <div className="mb-[32px]">
          <h3 className="text-[#2C2C2C] font-manrope text-[24px] font-semibold">
            Membership Form
          </h3>
        </div>
        <div className="flex flex-col gap-[32px]">
          <div>
            <h4 className="text-[#2C2C2C] font-manrope font-semibold text-[18px]">
              Full name
            </h4>
            <p className="text-[#545454] font-manrope text-[18px] font-medium">
              Tariqul Islam Fahim
            </p>
          </div>
          <div className="flex justify-between gap-[15px]">
            <div>
              <h4 className="text-[#2C2C2C] font-manrope font-semibold text-[18px]">
                Full name
              </h4>
              <p className="text-[#545454] font-manrope text-[18px] font-medium">
                Tariqul Islam Fahim
              </p>
            </div>
            <div>
              <h4 className="text-[#2C2C2C] font-manrope font-semibold text-[18px]">
                Date of birth
              </h4>
              <p className="text-[#545454] font-manrope text-[18px] font-medium">
                7 Nov, 2005
              </p>
            </div>
          </div>
          <div className="flex justify-between gap-[15px]">
            <div>
              <h4 className="text-[#2C2C2C] font-manrope font-semibold text-[18px]">
                Mobile number
              </h4>
              <p className="text-[#545454] font-manrope text-[18px] font-medium">
                +966 14 123 4567
              </p>
            </div>
            <div>
              <h4 className="text-[#2C2C2C] font-manrope font-semibold text-[18px]">
                Gender
              </h4>
              <p className="text-[#545454] font-manrope text-[18px] font-medium">
                Male
              </p>
            </div>
          </div>
          <div className="">
            <h4 className="text-[#2C2C2C] font-manrope font-semibold text-[18px]">
              Address
            </h4>
            <p className="text-[#545454] font-manrope text-[18px] font-medium">
              Al Qiblatayn, Medina 42312, Saudi Arabia
            </p>
          </div>
          <div className="">
            <h4 className="text-[#2C2C2C] font-manrope font-semibold text-[18px]">
              Service Value{" "}
            </h4>
            <p className="text-[#545454] font-manrope text-[18px] font-medium flex items-center gap-[10px]">
              <span>
                <img src={Currency} alt="" />
              </span>{" "}
              130 (Save 25%)
            </p>
          </div>
          <div className="">
            <h4 className="text-[#2C2C2C] font-manrope font-semibold text-[18px]">
              Membership duration
            </h4>
            <p className="text-[#545454] font-manrope text-[18px] font-medium">
              4 months (11 Feb 2025 - 12 June 2025)
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
