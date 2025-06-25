import BreadCrumb from "@/components/BusinessHelpCenter/BreadCrumb/BreadCrumb";
import salonBannerImg from "../../../../assets/images/saloncarddetails/salonBanner.png";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import {
  AddressSvg,
  LeftSideArrowSvg,
  LeftSideArrowSwiperSvg,
  LoveSvg,
  MessageSvg,
  OpeningTimeSvg,
  RightSideArrowSwiperSvg,
} from "@/components/svgContainer/SvgContainer";
import { useEffect, useState } from "react";
import { Pagination } from "swiper/modules";
import { Link, useNavigate } from "react-router-dom";
import moment from "moment";
import useAuth from "@/hooks/useAuth";
import toast from "react-hot-toast";
import { useBookmarkAdd } from "@/hooks/user.mutation";
import { useBookmarkGet } from "@/hooks/user.queries";
import { useBookmarkRemove } from "@/hooks/user.mutation";

const SalonCardDetailsBanner = ({ setActiveCart, data }) => {
  const { user } = useAuth();
  const mutateAync = useBookmarkAdd();
  const { data: bookmark } = useBookmarkGet();
  const removeBookmark = useBookmarkRemove();

  const [swiperRef, setSwiperRef] = useState(null);
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  const baseURL = import.meta.env.VITE_SITE_URL;
  const salonImages = data?.data?.store_images || [];

  const [selectedBanner, setSelectedBanner] = useState("");

  useEffect(() => {
    if (salonImages.length > 0 && salonImages[0]?.images) {
      const fullUrl = `${baseURL}/${salonImages[0].images}`;
      setSelectedBanner(fullUrl);
    }
  }, [salonImages]);

  const openingHours = data?.data?.opening_hours || [];

  const currentDay = moment().format("dddd").toLowerCase();
  const todayHours = openingHours.find(
    (entry) => entry.day_name.toLowerCase() === currentDay
  );

  const storeId = data?.data?.id;
  const isBookmarked = bookmark?.some((item) => item.id === storeId);
  const handleBookmark = async () => {
    if (!user) {
      toast.error("Please Login First");
      navigate("/login");
      return;
    }

    try {
      if (isBookmarked) {
        await removeBookmark.mutateAsync({ online_store_id: data?.data?.id });
      } else {
        await mutateAync.mutateAsync({ online_store_id: data?.data?.id });
      }
    } catch (error) {
      console.error(error);
    }
  };
  return (
    <div className="container mb-10 lg:mb-20 4xl:mb-[120px] lg:px-5 xl:px-7 2xl:px-10 3xl:px-12 4xl:px-0">
      {/* Back and Breadcrumb */}
      <div className="flex gap-4 items-center">
        <button
          onClick={() => navigate(-1)}
          className="flex items-center gap-[6px] border border-[#757575] px-2.5 lg:px-3 py-1 lg:py-2 rounded-[100px] text-[#2C2C2C] font-manrope text-base font-medium leading-6"
        >
          <LeftSideArrowSvg />
          Back
        </button>
        <BreadCrumb
          items={[
            { label: "Home", href: "/" },
            { label: "Shop Details" },
            { label: data?.data?.name || "Salon Details" },
          ]}
        />
      </div>

      {/* Banner Section */}
      <div className="flex flex-col xl:flex-row gap-16 4xl:gap-[105px] mt-8 items-center">
        {/* Left Side */}
        <div className="w-full">
          <img
            className="w-full xl:max-w-[500px] 2xl:max-w-[650px] 3xl:max-w-[745px] rounded-xl h-[250px] lg:h-[350px] 2xl:h-[400px]  object-cover"
            src={selectedBanner}
            alt="Salon Preview"
          />

          <div className="relative w-11/12 mx-auto xl:max-w-[500px] 2xl:max-w-[650px] 3xl:max-w-[745px]">
            {/* Prev Button */}
            <div
              onClick={() => swiperRef?.slidePrev()}
              className="absolute top-[42%] -left-8 z-10 group cursor-pointer"
            >
              <LeftSideArrowSwiperSvg />
            </div>

            <Swiper
              onSwiper={setSwiperRef}
              slidesPerView={3}
              spaceBetween={20}
              loop={true}
              modules={[Pagination]}
              className="mySwiper mt-5 lg:mt-8"
            >
              {salonImages.map((image, index) => {
                const fullImageUrl = `${baseURL}/${image.images}`;
                return (
                  <SwiperSlide key={index} className="flex justify-center">
                    <img
                      onClick={() => setSelectedBanner(fullImageUrl)}
                      className="cursor-pointer w-[235px] h-[100px] lg:h-[120px] 2xl:h-[192px] object-cover rounded-lg hover:scale-105 transition-transform"
                      src={fullImageUrl}
                      alt={`Salon ${index + 1}`}
                    />
                  </SwiperSlide>
                );
              })}
            </Swiper>

            {/* Next Button */}
            <div
              onClick={() => swiperRef?.slideNext()}
              className="absolute top-[42%] -right-8 z-10 group cursor-pointer"
            >
              <RightSideArrowSwiperSvg />
            </div>
          </div>
        </div>

        {/* Right Side */}
        <div className="w-full">
          <div
            onClick={() => setActiveCart(false)}
            className="flex justify-between gap-3 2xl:gap-5 flex-col 3xl:flex-row 3xl:gap-[37px] 3xl:items-center"
          >
            <h1 className="text-textLight font-outfit text-2xl 2xl:text-3xl 3xl:text-4xl 4xl:text-5xl font-semibold">
              {data?.data?.name}
            </h1>
            <div className="flex gap-3">
              <Link
                to={"/message"}
                className="bg-[#B3BAC5] cursor-pointer hover:bg-primary ease-in-out duration-300 border border-[#B3BAC5] w-9 h-9 lg:w-12 lg:h-12 rounded-full flex items-center justify-center"
              >
                <MessageSvg />
              </Link>
              <div
                onClick={handleBookmark}
                className={`cursor-pointer border w-9 h-9 lg:w-12 lg:h-12 rounded-full flex items-center justify-center 
    transition-colors duration-300
    ${
      isBookmarked
        ? "bg-primary border-primary"
        : "bg-[#B3BAC5] border-[#B3BAC5] hover:bg-primary"
    }
  `}
              >
                <LoveSvg color={isBookmarked ? "#fff" : "#232342"} />
              </div>
            </div>
          </div>

          {/* Rating */}
          {/* <div onClick={() => setActiveCart(false)} className="flex gap-3 mt-3">
            <div className="flex gap-1 items-center">
              <h1 className="text-[#2C2C2C] font-manrope text-lg 2xl:text-2xl font-semibold">
                4.8
              </h1>
              <StarSvg />
            </div>
            <h1 className="text-textLight font-manrope text-lg 2xl:text-2xl font-semibold">
              (1800)
            </h1>
          </div> */}

          {/* Opening Times */}
          <div className="mt-5 2xl:mt-8 4xl:mt-[53px] flex flex-col 3xl:flex-row gap-2 3xl:gap-5">
            <div className="flex items-center gap-2">
              <span
                className={`text-sm font-semibold px-3 py-1 rounded-full ${
                  todayHours
                    ? "bg-green-100 text-green-600"
                    : "bg-red-100 text-red-600"
                }`}
              >
                {todayHours ? "Open" : "Closed"}
              </span>

              <div
                className="relative group cursor-pointer"
                onMouseEnter={() => setIsOpen(true)}
                onMouseLeave={() => setIsOpen(false)}
              >
                <OpeningTimeSvg />
                {isOpen && (
                  <div className="absolute left-0 top-full mt-2 w-[302px] p-4 bg-white border border-gray-300 rounded-lg shadow-lg z-50">
                    <p className="text-[#1E1E1E] font-outfit text-xl font-semibold mb-2">
                      Opening Times
                    </p>
                    {openingHours.map((day) => {
                      const isToday = day.day_name.toLowerCase() === currentDay;
                      const isClosed =
                        !day.morning_start_time && !day.evening_start_time;

                      return (
                        <p
                          key={day.day_name}
                          className={`font-manrope text-lg leading-[27px] mt-2 ${
                            isToday
                              ? "text-primary font-semibold"
                              : "text-[#000]"
                          }`}
                        >
                          {day.day_name} —{" "}
                          {isClosed
                            ? "Closed"
                            : `${day.morning_start_time} - ${
                                day.morning_end_time
                              }${
                                day.evening_start_time && day.evening_end_time
                                  ? `, ${day.evening_start_time} - ${day.evening_end_time}`
                                  : ""
                              }`}
                        </p>
                      );
                    })}
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Address */}
          <div
            onClick={() => setActiveCart(false)}
            className="mt-5 2xl:mt-8 flex flex-col 3xl:flex-row gap-2 3xl:gap-[85px]"
          >
            <div className="flex items-center gap-2">
              <AddressSvg />
              <h1 className="text-[#2C2C2C] font-manrope text-lg lg:text-xl font-medium">
                Address
              </h1>
            </div>
            <div className="flex items-center gap-2">
              <h1 className="max-w-[510px] text-textLight font-manrope text-lg lg:text-xl font-semibold leading-[30px] ">
                {data?.data?.address}
                {data?.data?.latitude && data?.data?.longitude && (
                  <a
                    href={`https://www.google.com/maps/search/?api=1&query=${data.data.latitude},${data.data.longitude}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-primary font-manrope lg:text-xl font-semibold leading-[30px] ml-1 underline"
                  >
                    Get direction
                  </a>
                )}
              </h1>
            </div>
          </div>

          {/* Book Now Button */}
          <Link to="/booknow">
            <button className="text-white font-manrope text-lg 2xl:text-xl font-semibold bg-primary-gradient justify-center py-2 lg:py-3 2xl:py-4 mt-8 3xl:mt-[72px] rounded-[40px] w-full block">
              Book Now
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SalonCardDetailsBanner;
