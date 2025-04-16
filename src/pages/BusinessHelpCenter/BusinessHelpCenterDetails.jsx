import BreadCrumb from "@/components/BusinessHelpCenter/BreadCrumb/BreadCrumb";
import calenderImg from "../../assets/images/detailsPageCalenderImg.png";
import overviewImg from "../../assets/images/overviewImage.png";
import CallToAction from "@/components/BusinessHomePageCommon/CallToAction/CallToAction";
import { Link } from "react-router-dom";
import { useState } from "react";
import { HiMiniBars3 } from "react-icons/hi2";
import { FaRegCircleXmark } from "react-icons/fa6";

export default function BusinessHelpCenterDetails() {


  const [salesetting, setSalesetting] = useState(false);
  const saleMobileMenuActive = () => {
    setSalesetting(!salesetting)
  }

  return (
    <section className="">
      <div className="fixed z-[30] top-[90px] block xl:hidden">
        <button onClick={saleMobileMenuActive} className="bg-teal-600 text-white py-[1px] pl-[2px] pr-[5px] rounded-tr-[5px] rounded-br-[5px] text-[24px]" ><HiMiniBars3 /></button>
      </div>
      <div className="xl:py-[68px] container mb-[20px]">
        <BreadCrumb
          items={[
            { label: "Help center", href: "/" },
            { label: "Knowledge base", href: "/docs/components" },
            { label: "Calendar and schedule" },
          ]}
        />
        <div className="flex flex-col xl:flex-row items-start xl:items-center gap-3 mt-6">
          <img src={calenderImg} alt="Not Found" />
          <h1 className="text-textSecondary font-outfit text-[28px] xl:text-5xl font-semibold xl:leading-[57.6px]">
            Calendar and schedule
          </h1>
        </div>
        <p className="max-w-[1053px] mt-2 text-textLight font-manrope text-[16px] xl:text-lg leading-[27px]">
          The Fresha calendar is a powerful scheduling tool that allows your
          businesses to manage appointments, team availability, and resources in
          one central place. Designed for flexibility and ease, it helps you
          stay on top of your bookings while reducing admin time.
        </p>
      </div>
      {/* This is the right side section */}
      <div className="container flex gap-[39px] pb-[40px] xl:pb-[129px] h-[100vh] overflow-hidden">
        {/*  */}

        {salesetting && (
          <div
            className="fixed inset-0 bg-black bg-opacity-50 z-5"
            onClick={() => setSalesetting(false)}
          ></div>
        )}


        <div className={`fixed z-[99] transition-all duration-300 xl:z-[10] w-[280px] xl:w-[343px] border bg-[#fff] border-[#DFE1E6] rounded-2xl px-[15px] xl:p-6 space-y-[20px] xl:space-y-[30px] h-[812px] xl:sticky top-0 ${salesetting ? "translate-x-[-6%]" : "translate-x-[-110%]  xl:translate-x-[0%]"} `}>
          {/* Calendar and appointments */}

          <div className="block xl:hidden">
            <div className="mt-[20px] flex justify-end">
              <button onClick={() => setSalesetting(false)} className="text-teal-600 text-[24px]"><FaRegCircleXmark /></button>
            </div>
          </div>
          <div className="flex flex-col mt-[0px] ">
            <h1 className="text-textSecondary font-outfit text-[18px] xl:text-[22px] font-medium leading-normal">
              Calendar and appointments
            </h1>
            <Link
              to={"#overview"}
              className="text-textLight font-manrope text-[16px] xl:text-lg font-medium leading-[27px] mt-[0px] xl:mt-[10px]"
            >
              Overview
            </Link>
          </div>
          {/* Scheduling */}
          <div className="flex flex-col gap-[10px] xl:gap-[26px]">
            <h1 className="text-textSecondary font-outfit text-[18px] xl:text-[22px] font-medium leading-normal">
              Scheduling
            </h1>
            <Link
              to={"/"}
              className="text-textLight font-manrope xl:text-lg font-medium leading-[27px]"
            >
              Overview
            </Link>
            <Link
              to={"#appointments"}
              className="text-textLight font-manrope xl:text-lg font-medium leading-[27px]"
            >
              Appointments
            </Link>
            <Link
              to={"#groupAppointments"}
              className="text-textLight font-manrope xl:text-lg font-medium leading-[27px]"
            >
              Group appointments
            </Link>
            <Link
              to={"#blockedTime"}
              className="text-textLight font-manrope xl:text-lg font-medium leading-[27px]"
            >
              Blocked time
            </Link>
            <Link
              to={"/"}
              className="text-textLight font-manrope xl:text-lg font-medium leading-[27px]"
            >
              Waitlist
            </Link>
          </div>
          {/* Calendar availability */}
          <div className="flex flex-col gap-[10px] xl:gap-[26px]">
            <h1 className="text-textSecondary font-outfit text-[18px] xl:text-[22px] font-medium leading-normal">
              Calendar availability
            </h1>
            <Link
              to={"/"}
              className="text-textLight font-manrope xl:text-lg font-medium leading-[27px]"
            >
              Managing the schedule
            </Link>
            <Link
              to={"/"}
              className="text-textLight font-manrope xl:text-lg font-medium leading-[27px]"
            >
              Availability settings
            </Link>
          </div>
          {/* Calendar settings */}
          <div className="flex flex-col gap-[10px] xl:gap-[26px]">
            <h1 className="text-textSecondary font-outfit text-[18px] xl:text-[22px] font-medium leading-normal">
              Calendar and appointments
            </h1>
            <Link
              to={"/"}
              className="text-textLight font-manrope xl:text-lg font-medium leading-[27px]"
            >
              Calendar view
            </Link>
          </div>
        </div>


        {/*  */}
        <div className="flex flex-col gap-y-[46px] overflow-y-auto h-full hide-scrollbar">
          {/* Overview */}
          <Link to={"/business/businesssingleview"}>
            <h1
              id="overview"
              className="text-textSecondary font-outfit text-[24px] xl:text-[28px] font-semibold leading-[33.6px]"
            >
              Overview
            </h1>
            {/* This is the image section */}
            <div className="flex flex-col xl:flex-row gap-[17px] mt-7 bg-[#f7f7f7] xl:bg-transparent rounded-[10px] p-[15px]">
              <img src={overviewImg} alt="Not Found" />
              <div className="space-y-2">
                <h1 className="text-textSecondary font-outfit text-[20px] xl:text-2xl font-medium leading-[28.8px]">
                  About the calendar
                </h1>
                <p className="text-textLight font-manrope text-base leading-[24px]">
                  An introduction to your calendar, an all in one scheduling
                  tool.
                </p>
              </div>
            </div>
          </Link>
          {/* Appointments */}
          <Link to={"/business/businesssingleview"}>
            <h1
              id="appointments"
              className="text-textSecondary font-outfit text-[24px] xl:text-[28px] font-semibold leading-[33.6px]"
            >
              Appointments
            </h1>
            {/* This is the image section */}
            <div className="flex xl:flex-row flex-col gap-[17px] mt-7 bg-[#f7f7f7] xl:bg-transparent rounded-[10px] p-[15px]">
              <img src={overviewImg} alt="Not Found" />
              <div className="space-y-2">
                <h1 className="text-textSecondary font-outfit text-[20px] xl:text-2xl font-medium leading-[28.8px]">
                  Create appointments
                </h1>
                <p className="text-textLight font-manrope text-base leading-[24px]">
                  Start scheduling appointments with detailed client and service
                  information.
                </p>
              </div>
            </div>
            {/* This is the image section */}
            <div className="flex xl:flex-row flex-col gap-[17px] mt-7 bg-[#f7f7f7] xl:bg-transparent rounded-[10px] p-[15px]">
              <img src={overviewImg} alt="Not Found" />
              <div className="space-y-2">
                <h1 className="text-textSecondary font-outfit text-[20px] xl:text-2xl font-medium leading-[28.8px]">
                  Create appointments
                </h1>
                <p className="text-textLight font-manrope text-base leading-[24px]">
                  Start scheduling appointments with detailed client and service
                  information.
                </p>
              </div>
            </div>
            {/* This is the image section */}
            <div className="flex flex-col xl:flex-row gap-[17px] mt-7 bg-[#f7f7f7] xl:bg-transparent rounded-[10px] p-[15px]">
              <img src={overviewImg} alt="Not Found" />
              <div className="space-y-2">
                <h1 className="text-textSecondary font-outfit text-[20px] xl:text-2xl font-medium leading-[28.8px]">
                  Create appointments
                </h1>
                <p className="text-textLight font-manrope text-base leading-[24px]">
                  Start scheduling appointments with detailed client and service
                  information.
                </p>
              </div>
            </div>
          </Link>
          {/* Group appointments */}
          <Link to={"/business/businesssingleview"}>
            <h1
              id="groupAppointments"
              className="text-textSecondary font-outfit text-[24px] xl:text-[28px] font-semibold leading-[33.6px]"
            >
              Group appointments
            </h1>
            {/* This is the image section */}
            <div className="flex flex-col xl:flex-row gap-[17px] mt-7 bg-[#f7f7f7] xl:bg-transparent rounded-[10px] p-[15px]">
              <img src={overviewImg} alt="Not Found" />
              <div className="space-y-2">
                <h1 className="text-textSecondary font-outfit text-[20px] xl:text-2xl font-medium leading-[28.8px]">
                  Create appointments
                </h1>
                <p className="text-textLight font-manrope text-base leading-[24px]">
                  Start scheduling appointments with detailed client and service
                  information.
                </p>
              </div>
            </div>
            {/* This is the image section */}
            <div className="flex flex-col xl:flex-row gap-[17px] mt-7  bg-[#f7f7f7] xl:bg-transparent rounded-[10px] p-[15px]">
              <img src={overviewImg} alt="Not Found" />
              <div className="space-y-2">
                <h1 className="text-textSecondary font-outfit text-[20px] xl:text-2xl font-medium leading-[28.8px]">
                  Create appointments
                </h1>
                <p className="text-textLight font-manrope text-base leading-[24px]">
                  Start scheduling appointments with detailed client and service
                  information.
                </p>
              </div>
            </div>
            {/* This is the image section */}
            <div className="flex flex-col xl:flex-row gap-[17px] mt-7  bg-[#f7f7f7] xl:bg-transparent rounded-[10px] p-[15px]">
              <img src={overviewImg} alt="Not Found" />
              <div className="space-y-2">
                <h1 className="text-textSecondary font-outfit text-[20px] xl:text-2xl font-medium leading-[28.8px]">
                  About the calendar
                </h1>
                <p className="text-textLight font-manrope text-base leading-[24px]">
                  An introduction to your calendar, an all in one scheduling
                  tool.
                </p>
              </div>
            </div>
            {/* This is the image section */}
            <div className="flex flex-col xl:flex-row gap-[17px] mt-7 bg-[#f7f7f7] xl:bg-transparent rounded-[10px] p-[15px]">
              <img src={overviewImg} alt="Not Found" />
              <div className="space-y-2">
                <h1 className="text-textSecondary font-outfit text-[20px] xl:text-2xl font-medium leading-[28.8px]">
                  About the calendar
                </h1>
                <p className="text-textLight font-manrope text-base leading-[24px]">
                  An introduction to your calendar, an all in one scheduling
                  tool.
                </p>
              </div>
            </div>
            {/* This is the image section */}
            <div className="flex flex-col xl:flex-row gap-[17px] mt-7 bg-[#f7f7f7] xl:bg-transparent rounded-[10px] p-[15px]">
              <img src={overviewImg} alt="Not Found" />
              <div className="space-y-2">
                <h1 className="text-textSecondary font-outfit text-[20px] xl:text-2xl font-medium leading-[28.8px]">
                  About the calendar
                </h1>
                <p className="text-textLight font-manrope text-base leading-[24px]">
                  An introduction to your calendar, an all in one scheduling
                  tool.
                </p>
              </div>
            </div>
          </Link>
          {/* Blocked time */}
          <Link to={"/business/businesssingleview"}>
            <h1
              id="blockedTime"
              className="text-textSecondary font-outfit text-[24px] xl:text-[28px] font-semibold leading-[33.6px]"
            >
              Blocked time
            </h1>
            {/* This is the image section */}
            <div className=" flex flex-col xl:flex-row gap-[17px] mt-7 bg-[#f7f7f7] xl:bg-transparent rounded-[10px] p-[15px]">
              <img src={overviewImg} alt="Not Found" />
              <div className="space-y-2">
                <h1 className="text-textSecondary font-outfit text-[20px] xl:text-2xl font-medium leading-[28.8px]">
                  Create appointments
                </h1>
                <p className="text-textLight font-manrope text-base leading-[24px]">
                  Start scheduling appointments with detailed client and service
                  information.
                </p>
              </div>
            </div>
            {/* This is the image section */}
            <div className="flex flex-col xl:flex-row gap-[17px] mt-7 bg-[#f7f7f7] xl:bg-transparent rounded-[10px] p-[15px]">
              <img src={overviewImg} alt="Not Found" />
              <div className="space-y-2">
                <h1 className="text-textSecondary font-outfit text-[20px] xl:text-2xl font-medium leading-[28.8px]">
                  Create appointments
                </h1>
                <p className="text-textLight font-manrope text-base leading-[24px]">
                  Start scheduling appointments with detailed client and service
                  information.
                </p>
              </div>
            </div>
            {/* This is the image section */}
            <div className="flex flex-col xl:flex-row gap-[17px] mt-7 bg-[#f7f7f7] xl:bg-transparent rounded-[10px] p-[15px]">
              <img src={overviewImg} alt="Not Found" />
              <div className="space-y-2">
                <h1 className="text-textSecondary font-outfit text-[20px] xl:text-2xl font-medium leading-[28.8px]">
                  About the calendar
                </h1>
                <p className="text-textLight font-manrope text-base leading-[24px]">
                  An introduction to your calendar, an all in one scheduling
                  tool.
                </p>
              </div>
            </div>
            {/* This is the image section */}
            <div className="flex flex-col xl:flex-row gap-[17px] mt-7 bg-[#f7f7f7] xl:bg-transparent rounded-[10px] p-[15px]">
              <img src={overviewImg} alt="Not Found" />
              <div className="space-y-2">
                <h1 className="text-textSecondary font-outfit text-[20px] xl:text-2xl font-medium leading-[28.8px]">
                  About the calendar
                </h1>
                <p className="text-textLight font-manrope text-base leading-[24px]">
                  An introduction to your calendar, an all in one scheduling
                  tool.
                </p>
              </div>
            </div>
          </Link>
        </div>
      </div>
      {/* Here to help */}
      <CallToAction
        title={"Here to help"}
        subtitle={
          "Can't find an answer? We've got the solution. Find more support and connect with our team."
        }
        btnText={"Contact Us"}
      />
    </section>
  );
}
