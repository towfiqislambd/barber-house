import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css";
import "swiper/css/pagination";
import {
  UsePrevSliderSvg,
  UserNextSliderSvg,
} from "@/components/svgContainer/SvgContainer";
import { useState } from "react";
import BusinessReviewCard from "@/components/BusinessHomePageCommon/BusinessReviewCard/BusinessReviewCard";

const WhatOurUserSay = ({ data }) => {
  const [swiperRef, setSwiperRef] = useState(null);
  return (
    <section className="max-w-[1320px] mx-auto py-[61px] px-[20px]">
      <div className="flex flex-col xl:flex-row gap-[20px] xl:gap-[88px] items-center">
        <div>
          <h1 className="text-[#1E1E1E] font-outfit text-[26px] text-center xl:text-start xl:text-[40px] font-semibold leading-[57px]">
            {data?.title}
          </h1>
          <div className="relative">
            <div className=" max-w-[300px] xl:max-w-[689px]">
              <Swiper
                slidesPerView={1}
                loop={true}
                spaceBetween={20}
                onSwiper={setSwiperRef}
                className="mySwiper"
              >
                {data?.client_reviews?.map((item, index) => {
                  return (
                    <SwiperSlide key={index}>
                      <BusinessReviewCard item={item} />
                    </SwiperSlide>
                  );
                })}
              </Swiper>
            </div>
            <div className="relative">
              {/* prev-button */}
              <div
                onClick={() => swiperRef.slidePrev()}
                className="absolute xl:top-1/2 top-[-40px]  right-[30px] xl:right-1 z-10 cursor-pointer bg-white border border-primary py-2 px-[7px] rounded-[100px]"
              >
                <UsePrevSliderSvg />
              </div>
              {/* Next-button */}
              <div
                onClick={() => swiperRef.slideNext()}
                className="absolute xl:top-1/2 top-[-40px] bg-white -right-[10px] xl:-right-8 z-10 cursor-pointer border border-primary py-2 px-[7px] rounded-[100px]"
              >
                <UserNextSliderSvg />
              </div>
            </div>
          </div>
        </div>
        {/*  */}
        <div>
          <img
            className="xl:w-[381px] xl:h-[548px] object-cover"
            src={`${import.meta.env.VITE_SITE_URL}/${data?.background_image}`}
            alt="not found"
          />
        </div>
      </div>
    </section>
  );
};

export default WhatOurUserSay;
