import { PrevSliderSvg } from "@/components/svgContainer/SvgContainer";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import { NextSliderSvg } from "@/components/svgContainer/SvgContainer";
import { useState } from "react";
import ProductOfGalibCard from "@/components/ProductOfGalibCard/ProductOfGalibCard";

import currencyImg from "../../../../assets/images/searchResultPage/currentcy.png";

const ProductOfGalib = ({ data }) => {
  const [swiperRef, setSwiperRef] = useState(null);

  return (
    <section className="bg-[#FCFCFC] py-10 2xl:py-24 px-5 xl:px-7 2xl:px-10 3xl:px-12 4xl:px-0">
      <div className="container">
        <h1 className="text-[#2C2C2C] font-outfit text-2xl 2xl:text-[32px]">
          Products of {data?.data?.name}
        </h1>
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
            modules={[Pagination]}
            className="mySwiper mt-8 flex"
            breakpoints={{
              375: { slidesPerView: 1 },
              576: { slidesPerView: 2 },
              768: { slidesPerView: 2, spaceBetween: 20 },
              1024: { slidesPerView: 3 },
              1200: { slidesPerView: 4 },
            }}
          >
            {data?.data?.products?.map((product) => (
              <SwiperSlide key={product.id} className="flex justify-center">
                <ProductOfGalibCard
                  currencyImgSrc={currencyImg}
                  product={product}
                />
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
      </div>
    </section>
  );
};

export default ProductOfGalib;
