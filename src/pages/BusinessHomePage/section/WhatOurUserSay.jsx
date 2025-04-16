import whatOurSayImage from "../../../assets/images/whatOurClientSayImage.png";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import {
  UsePrevSliderSvg,
  UserNextSliderSvg,
} from "@/components/svgContainer/SvgContainer";
import { useState } from "react";
import BusinessReviewCard from "@/components/BusinessHomePageCommon/BusinessReviewCard/BusinessReviewCard";

const WhatOurUserSay = () => {
  const [swiperRef, setSwiperRef] = useState(null);
  return (
    <section className="max-w-[1320px] mx-auto py-[61px] px-[20px]">
      <div className="flex flex-col xl:flex-row gap-[20px] xl:gap-[88px] items-center">
        <div>
          <h1 className="text-[#1E1E1E] font-outfit text-[26px] text-center xl:text-start xl:text-[40px] font-semibold leading-[57px]">
            What our user say
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
                {[1, 2, 3, 4, 5].map((item, index) => {
                  return (
                    <SwiperSlide key={index}>
                      <BusinessReviewCard />
                    </SwiperSlide>
                  );
                })}
              </Swiper>
            </div>
            {/* This is the button Section */}
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
            src={whatOurSayImage}
            alt="not found"
          />
        </div>
      </div>
    </section>
  );
};

export default WhatOurUserSay;
