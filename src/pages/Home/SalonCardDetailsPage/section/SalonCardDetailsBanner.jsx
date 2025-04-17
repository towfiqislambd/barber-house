import BreadCrumb from "@/components/BusinessHelpCenter/BreadCrumb/BreadCrumb";
import salonBannerImg from "../../../../assets/images/saloncarddetails/salonBanner.png";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css";
import "swiper/css/pagination";
import {
  AddressSvg,
  ClockSvg,
  DownloadSvg,
  LeftSideArrowSvg,
  LeftSideArrowSwiperSvg,
  LoveSvg,
  MessageSvg,
  OpeningTimeSvg,
  RightSideArrowSwiperSvg,
  StarSvg,
} from "@/components/svgContainer/SvgContainer";
import { useState } from "react";
import { Pagination } from "swiper/modules";
import salonCardImg from "../../../../assets/images/saloncarddetails/salonCard.png";
import { Link, useNavigate } from "react-router-dom";

const SalonCardDetailsBanner = ({ setActiveCart }) => {
  const [swiperRef, setSwiperRef] = useState(null);
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  const salonImages = [
    salonCardImg,
    salonCardImg,
    salonCardImg,
    salonCardImg,
    salonCardImg,
  ];

  const navOptionArr = [
    {
      icon: MessageSvg,
      redirectLink: "/message",
    },
    {
      icon: LoveSvg,
      redirectLink: "/",
    },
    {
      icon: DownloadSvg,
      redirectLink: "/",
    },
  ];

  return (
    <div className="container mb-10 lg:mb-20 4xl:mb-[120px] lg:px-5 xl:px-7 2xl:px-10 3xl:px-12 4xl:px-0">
      {/* This is the Back and Breadcrumb section */}
      <div className="flex gap-4 items-center">
        <button className="flex items-center gap-[6px] border border-[#757575] px-2.5 lg:px-3 py-1 lg:py-2 rounded-[100px] text-[#2C2C2C] font-manrope text-base font-medium leading-6">
          <LeftSideArrowSvg />
          Back
        </button>
        <BreadCrumb
          items={[
            { label: "Home", href: "/" },
            { label: "Search Salon", href: "/docs/components" },
            { label: "Ghalib’s Barber Salon" },
          ]}
        />
      </div>
      {/* Banner */}
      <div className="flex flex-col xl:flex-row gap-16 4xl:gap-[105px] mt-8 items-center">
        {/* This is the left side */}
        <div className="w-full">
          <img
            className="w-full xl:max-w-[500px] 2xl:max-w-[650px] 3xl:max-w-[745px] rounded-xl h-[250px] lg:h-[350px] 2xl:h-[400px] 3xl:h-[517px] object-cover"
            src={salonBannerImg}
            alt=""
          />
          <div className="relative w-11/12 mx-auto xl:max-w-[500px] 2xl:max-w-[650px] 3xl:max-w-[745px]">
            {/* prev-button */}
            <div
              onClick={() => swiperRef.slidePrev()}
              className="absolute top-[42%] -left-8 z-10 group cursor-pointer"
            >
              <LeftSideArrowSwiperSvg />
            </div>

            <Swiper
              onSwiper={setSwiperRef}
              slidesPerView="3"
              spaceBetween={30}
              loop={true}
              modules={[Pagination]}
              className="mySwiper mt-5 lg:mt-8 flex"
            >
              {salonImages?.map((image, index) => (
                <SwiperSlide key={index} className="flex justify-center">
                  <img
                    className="w-[235px] h-[100px] lg:h-[120px] rounded-lg 2xl:h-[192px] object-cover"
                    src={image}
                    alt={`Salon ${index + 1}`}
                  />
                </SwiperSlide>
              ))}
            </Swiper>

            {/* next-button */}
            <div
              onClick={() => swiperRef.slideNext()}
              className="absolute top-[42%] -right-8 z-10 group cursor-pointer"
            >
              <RightSideArrowSwiperSvg />
            </div>
          </div>
        </div>
        {/* This is the right side */}
        <div className="w-full">
          <div
            onClick={() => setActiveCart(false)}
            className="flex justify-between gap-3 2xl:gap-5 flex-col 3xl:flex-row 3xl:gap-[37px] 3xl:items-center"
          >
            <h1 className="text-textLight font-outfit text-2xl 2xl:text-3xl 3xl:text-4xl 4xl:text-5xl font-semibold">
              Ghalibs Barber Salon
            </h1>
            {/* This is the Social Svg */}
            <div className="flex gap-3">
              {navOptionArr.map((item, index) => {
                return (
                  <div
                    key={index}
                    onClick={() => {
                      navigate(item?.redirectLink);
                    }}
                    className=" bg-[#B3BAC5] cursor-pointer hover:bg-primary ease-in-out duration-300 border-[1px] border-solid border-[#B3BAC5] bg-transparent w-9 h-9 lg:w-12 lg:h-12 rounded-full flex items-center justify-center"
                  >
                    <item.icon />
                  </div>
                );
              })}
            </div>
          </div>
          {/* This is the Star Section */}
          <div onClick={() => setActiveCart(false)} className="flex gap-3 mt-3">
            <div className="flex gap-1 items-center">
              <h1 className="text-[#2C2C2C] font-manrope text-lg 2xl:text-2xl font-semibold">
                4.8
              </h1>
              <StarSvg />
            </div>
            <h1 className="text-textLight font-manrope text-lg 2xl:text-2xl font-semibold">
              (1800)
            </h1>
          </div>
          {/* Time Section */}
          <div className="mt-5 2xl:mt-8 4xl:mt-[53px] flex flex-col 3xl:flex-row gap-2 3xl:gap-5">
            {/* Opening Times */}
            <div className="flex items-center gap-2">
              <ClockSvg />
              <h1 className="text-[#2C2C2C] font-manrope text-lg lg:text-xl font-medium">
                Opening Times
              </h1>
            </div>
            {/* Daily 9:00 AM - 8:00 PM */}
            <div className="flex items-center gap-2">
              <h1 className="text-[#2C2C2C] font-manrope text-lg lg:text-xl font-medium">
                Daily 9:00 AM - 8:00 PM
              </h1>
              {/* SVG with hover logic */}
              <div
                className="relative group cursor-pointer"
                onMouseEnter={() => setIsOpen(true)}
                onMouseLeave={() => setIsOpen(false)}
              >
                <OpeningTimeSvg />

                {/* Dropdown */}
                {isOpen && (
                  <div className="absolute left-0 top-full mt-2 w-[302px] p-4 bg-white border border-gray-300 rounded-lg shadow-lg">
                    <p className="text-[#1E1E1E] font-outfit text-xl font-semibold leading-[30px]">
                      Opening Times
                    </p>
                    <p className="text-[#000] font-manrope text-lg font-normal leading-[27px] mt-3">
                      Monday (9:00AM - 8:00PM)
                    </p>
                    <p className="text-[#000] font-manrope text-lg font-normal leading-[27px] mt-3">
                      Tuesday (9:00AM - 8:00PM)
                    </p>
                    <p className="text-[#000] font-manrope text-lg font-normal leading-[27px] mt-3">
                      Wednesday (9:00AM - 8:00PM)
                    </p>
                    <p className="text-[#000] font-manrope text-lg font-normal leading-[27px] mt-3">
                      Thursday (9:00AM - 8:00PM)
                    </p>
                    <p className="text-[#000] font-manrope text-lg font-normal leading-[27px] mt-3">
                      Friday (10:00AM - 6:00PM)
                    </p>
                    <p className="text-[#000] font-manrope text-lg font-normal leading-[27px] mt-3">
                      Saturday (9:00AM - 8:00PM)
                    </p>
                    <p className="text-[#000] font-manrope text-lg font-normal leading-[27px] mt-3">
                      Sunday (9:00AM - 8:00PM)
                    </p>
                  </div>
                )}
              </div>
            </div>
          </div>
          {/* Address Section  */}
          <div
            onClick={() => setActiveCart(false)}
            className="mt-5 2xl:mt-8 flex flex-col 3xl:flex-row gap-2 3xl:gap-[85px]"
          >
            {/* Address */}
            <div className="flex items-center gap-2">
              <AddressSvg />
              <h1 className="text-[#2C2C2C] font-manrope text-lg lg:text-xl font-medium">
                Address
              </h1>
            </div>
            {/* Daily 9:00 AM - 8:00 PM */}
            <div className="flex items-center gap-2">
              <h1 className="max-w-[410px] text-textLight font-manrope text-lg lg:text-xl font-semibold leading-[30px]">
                Khalidiyah, Sultanah Qiblatain Road, Medina, Saudi Arabia.{" "}
                <span className="text-primary font-manrope lg:text-xl font-semibold leading-[30px]">
                  Get direction
                </span>
              </h1>
            </div>
          </div>
          {/* This is the button section */}
          <Link to="/booknow">
            <button className="text-[#FFF] font-manrope text-lg 2xl:text-xl font-semibold bg-primary-gradient justify-center py-2 lg:py-3 2xl:py-4 mt-8 3xl:mt-[72px] rounded-[40px] w-full block">
              Book Now
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SalonCardDetailsBanner;
