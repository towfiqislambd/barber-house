import { useState } from "react";
import TimeAndCalander from "@/components/SchedulingComponents/TimeAndCalander";
import BlockedTimeTypes from "@/components/SchedulingComponents/BlockedTimeTypes";
import Appointments from "@/components/SchedulingComponents/Appointments";
import { LiaAngleRightSolid } from "react-icons/lia";
import { FaArrowLeftLong } from "react-icons/fa6";
import { Link } from "react-router-dom";

export default function Scheduling() {
  const [activeTab, setActiveTab] = useState("scheduling");

  return (
    <>
      <div className="3xl:mb-[45px] 3xl:mt-[65px] lg:pl-[300px] pl-6 mt-5 md:mt-0">
        <div className="hidden sm:flex sm:flex-row sm:items-center">
          <Link to="/businessDashboard/settings">
            <button className="text-[#2C2C2C] font-manrope font-medium border border-[#757575] rounded-[24px] mr-[16px] w-[100px] flex-shrink-0 flex items-center gap-[6px] sm:py-[8px] py-[6px] px-[12px]">
              <span>
                <FaArrowLeftLong />
              </span>{" "}
              Back
            </button>
          </Link>
          <ul className="flex gap-[10px] items-center">
            <li className="text-[#757575] font-manrope font-medium">
              Workspace settings
            </li>
            <li className="text-[#757575] font-manrope font-medium">
              <LiaAngleRightSolid />
            </li>
            <li className="text-[#2C2C2C] font-manrope font-medium">
              Scheduling
            </li>
          </ul>
        </div>
      </div>

      <section className="flex flex-col 3xl:flex-row gap-10 4xl:pl-[200px] mx-6 xl:mx-0">
        <div className="bg-white rounded-xl xl:p-6 p-3 h-full flex-shrink-0 mt-6 2xl:mt-0">
          <h3 className="my-[15px] ml-5 text-[20px] font-bold">Scheduling</h3>
          <div className="border-t pb-5"></div>
          <ul className="text-lg font-medium">
            <button
              onClick={() => setActiveTab("scheduling")}
              className={`mb-[2px] px-5 py-2 3xl:w-full sm:w-[400px] block text-left duration-300 transition-all hover:bg-[#E7E8FF] hover:text-[#2C2C2C] rounded-lg ${
                activeTab === "scheduling"
                  ? "text-[#2C2C2C] bg-[#E7E8FF]"
                  : "text-[#2C2C2C]"
              }`}
            >
              Time and calender
            </button>
            <button
              onClick={() => setActiveTab("blockedtimetypes")}
              className={`mb-[10px] px-5 py-2 3xl:w-full sm:w-[400px] block text-left duration-300 transition-all hover:bg-[#E7E8FF] hover:text-[#2C2C2C] rounded-lg ${
                activeTab === "blockedtimetypes"
                  ? "text-[#2C2C2C] bg-[#E7E8FF]"
                  : "text-[#2C2C2C]"
              }`}
            >
              Blocked time types
            </button>
            <hr />
            <h3 className="my-[15px] ml-5 text-[20px] font-bold">
              Online booking
            </h3>
            <button
              onClick={() => setActiveTab("appointments")}
              className={`mb-[10px] px-5 py-2 3xl:w-full sm:w-[400px] block text-left duration-300 transition-all hover:bg-[#E7E8FF] hover:text-[#2C2C2C] rounded-lg ${
                activeTab === "appointments"
                  ? "text-[#2C2C2C] bg-[#E7E8FF]"
                  : "text-[#2C2C2C]"
              }`}
            >
              Appointments
            </button>
            <hr />
            <h3 className="my-[15px] ml-5 text-[20px] font-bold">Shortcuts</h3>
            <button
              onClick={() => setActiveTab("payments")}
              className={`mb-[2px] px-5 py-2 3xl:w-full sm:w-[400px] block text-left duration-300 transition-all hover:bg-[#E7E8FF] hover:text-[#2C2C2C] rounded-lg ${
                activeTab === "payments"
                  ? "text-[#2C2C2C] bg-[#E7E8FF]"
                  : "text-[#2C2C2C]"
              }`}
            >
              Marketplace profile
            </button>
            <Link to="/businessDashboard/catalogue">
              <button
                onClick={() => setActiveTab("gift-cards")}
                className={`mb-[2px] px-5 py-2 3xl:w-full sm:w-[400px] block text-left duration-300 transition-all hover:bg-[#E7E8FF] hover:text-[#2C2C2C] rounded-lg ${
                  activeTab === "gift-cards"
                    ? "text-[#2C2C2C] bg-[#E7E8FF]"
                    : "text-[#2C2C2C]"
                }`}
              >
                Service menu
              </button>
            </Link>
            <button
              onClick={() => setActiveTab("membership")}
              className={`mb-[2px] px-5 py-2 3xl:w-full sm:w-[400px] block text-left duration-300 transition-all hover:bg-[#E7E8FF] hover:text-[#2C2C2C] rounded-lg ${
                activeTab === "membership"
                  ? "text-[#2C2C2C] bg-[#E7E8FF]"
                  : "text-[#2C2C2C]"
              }`}
            >
              Scheduled shift
            </button>
          </ul>
        </div>
        <div className="flex-grow">
          {activeTab === "scheduling" && <TimeAndCalander />}
          {activeTab === "blockedtimetypes" && <BlockedTimeTypes />}
          {activeTab === "appointments" && <Appointments />}
        </div>
      </section>
    </>
  );
}
