/* eslint-disable react/prop-types */
import ProductCard from "@/components/cards/ProductCard";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper/modules"; // ✅ Fixed Import

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import {
  NextSliderSvg,
  PrevSliderSvg,
} from "@/components/svgContainer/SvgContainer";
import { useState } from "react";
import VenuesNearbyCard from "@/components/VenuesNearbyCard/VenuesNearbyCard";

const HomepageSliderContainer = ({ data, isLastItem }) => {
  const [swiperRef, setSwiperRef] = useState(null);
  console.log(data);

  return (
    <section
      className={`${
        !isLastItem ? "2xl:pb-24 pb-12" : ""
      } container px-8 xl:px-10 2xl:px-14 4xl:px-0`}
    >
      {/* title */}
      <div>
        <h3 className="text-3xl font-medium text-black font-outfit">
          {data?.title}
        </h3>
      </div>

      {/* cards */}
      <div className="relative">
        {/* prev-button */}
        <div
          onClick={() => swiperRef?.slidePrev()}
          className="absolute top-1/2 -left-8 z-10 group cursor-pointer"
        >
          <PrevSliderSvg />
        </div>

        <Swiper
          onSwiper={setSwiperRef}
          spaceBetween={30}
          slidesPerView={1}
          loop={true}
          modules={[Pagination, Navigation]}
          className="mySwiper mt-8"
          breakpoints={{
            375: { slidesPerView: 1 },
            480: { slidesPerView: 1 },
            576: { slidesPerView: 2 },
            768: { slidesPerView: 3, spaceBetween: 20 },
            1024: { slidesPerView: 3 },
            1200: { slidesPerView: 4 },
          }}
        >
          {data?.data?.data?.map((venue, index) => (
            <SwiperSlide key={venue.id || index}>
              {" "}
              <VenuesNearbyCard homepage={true} key={venue.id} venue={venue} />
            </SwiperSlide>
          ))}
        </Swiper>

        {/* next-button */}
        <div
          onClick={() => swiperRef?.slideNext()}
          className="absolute top-1/2 -right-8 z-10 group cursor-pointer"
        >
          <NextSliderSvg />
        </div>
      </div>
    </section>
  );
};

export default HomepageSliderContainer;
