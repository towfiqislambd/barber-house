import { PrevSliderSvg } from "@/components/svgContainer/SvgContainer";
import { Swiper, SwiperSlide } from "swiper/react";
import { Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/pagination";
import { NextSliderSvg } from "@/components/svgContainer/SvgContainer";
import { useState } from "react";
import VenuesNearbyCard from "@/components/VenuesNearbyCard/VenuesNearbyCard";
import img1 from "../../../../assets/images/venuesCard/venuesNearbyCard.jpg";

const VenuesNearby = ({ data }) => {
  const [swiperRef, setSwiperRef] = useState(null);
  const venues = [
    {
      id: 1,
      name: "Luxury Cuts",
      rating: 4.9,
      reviews: 1200,
      location: "Dhanmondi, Dhaka",
      category: "Salon",
      image: img1,
    },
    {
      id: 2,
      name: "Elite Barbers",
      rating: 4.7,
      reviews: 950,
      location: "Uttara, Dhaka",
      category: "Barbershop",
      image: img1,
    },
    {
      id: 2,
      name: "Elite Barbers",
      rating: 4.7,
      reviews: 950,
      location: "Uttara, Dhaka",
      category: "Barbershop",
      image: img1,
    },
    {
      id: 2,
      name: "Elite Barbers",
      rating: 4.7,
      reviews: 950,
      location: "Uttara, Dhaka",
      category: "Barbershop",
      image: img1,
    },
    {
      id: 2,
      name: "Elite Barbers",
      rating: 4.7,
      reviews: 950,
      location: "Uttara, Dhaka",
      category: "Barbershop",
      image: img1,
    },
  ];
  return (
    <section className="bg-[#FCFCFC] py-10 2xl:py-24 px-5 xl:px-7 2xl:px-10 3xl:px-12 4xl:px-0">
      <div className="container">
        <h1 className="text-[#2C2C2C] font-outfit text-[32px]">
          Venues Nearby
        </h1>
        <div className="relative">
          {/* prev-button */}
          <div
            onClick={() => swiperRef.slidePrev()}
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
              480: { slidesPerView: 1 },
              576: { slidesPerView: 2 },
              768: { slidesPerView: 3 },
              1024: { slidesPerView: 3 },
              1200: { slidesPerView: 4 },
            }}
          >
            {data?.data?.nearby_stores?.map((venue) => (
              <SwiperSlide key={venue.id} className="flex justify-center">
                <VenuesNearbyCard key={venue.id} venue={venue} />
              </SwiperSlide>
            ))}
          </Swiper>
          {/* prev-button */}
          <div
            onClick={() => swiperRef.slideNext()}
            className="absolute top-1/2 -right-8 z-10 group cursor-pointer"
          >
            <NextSliderSvg />
          </div>
        </div>
      </div>
    </section>
  );
};

export default VenuesNearby;
