import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import {
  NextSliderSvg,
  PrevSliderSvg,
} from "@/components/svgContainer/SvgContainer";
import { useState } from "react";
import ReviewCard from "@/components/cards/ReviewCard";

const HomepageReview = ({ data }) => {
  console.log(data);
  const [swiperRef, setSwiperRef] = useState(null);

  return (
    <>
      {data?.length > 0 && (
        <section className="container px-8 xl:px-10 2xl:px-14 4xl:px-0">
          <div>
            <h3 className="text-3xl font-medium text-black font-outfit">
              Reviews
            </h3>
          </div>
          {/* Cards */}
          <div className="relative">
            {/* Prev Button */}
            <div
              onClick={() => swiperRef && swiperRef.slidePrev()}
              className="absolute top-1/2 -left-8 z-10 group cursor-pointer"
            >
              <PrevSliderSvg />
            </div>
            <Swiper
              onSwiper={setSwiperRef}
              spaceBetween={20}
              slidesPerView={1}
              loop={true}
              modules={[Pagination, Navigation]}
              className="mySwiper mt-8 flex"
              breakpoints={{
                375: { slidesPerView: 1 },
                480: { slidesPerView: 2 },
                576: { slidesPerView: 2 },
                768: { slidesPerView: 2 },
                1024: { slidesPerView: 4 },
                1200: { slidesPerView: 4 },
                1460: { slidesPerView: 4 },
                1650: { slidesPerView: 4 },
              }}
            >
              {data?.map((item, index) => (
                <SwiperSlide key={index} className="flex justify-center">
                  <ReviewCard item={item} />
                </SwiperSlide>
              ))}
            </Swiper>
            {/* Next Button */}
            <div
              onClick={() => swiperRef && swiperRef.slideNext()}
              className="absolute top-1/2 -right-8 z-10 group cursor-pointer"
            >
              <NextSliderSvg />
            </div>
          </div>
        </section>
      )}
    </>
  );
};

export default HomepageReview;
