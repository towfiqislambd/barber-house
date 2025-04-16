import LeftSideCard from "./Section/LeftSideCard";
import cardImg1 from "../../../assets/images/searchResultPage/cardImg1.png";
import cardImg2 from "../../../assets/images/searchResultPage/cardImg2.png";
import currencyImg from "../../../assets/images/searchResultPage/currentcy.png";
import { CloseSvg, FilterSvg } from "@/components/svgContainer/SvgContainer";
import { Link } from "react-router-dom";
import { useState } from "react";

const SearchResultPage = () => {
  const [isOpen, setIsOpen] = useState(false);
  const servicesData = [
    { name: "Wax Services", duration: "5 min", price: "10", currencyImg },
    {
      name: "Beard Styling",
      duration: "10 min",
      price: "10",
      priceLabel: "from",
      currencyImg,
    },
    {
      name: "Hair Wash",
      duration: "15 min",
      price: "10",
      priceLabel: "from",
      currencyImg,
    },
  ];

  // Toggle dropdown visibility
  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <section className="pb-14 pt-24 2xl:py-20 3xl:py-32 lg:px-5 xl:px-7 2xl:px-10 3xl:px-12 4xl:px-0 container">
      <div className="flex flex-col md:flex-row items-center justify-between max-w-[1185px]">
        <div
          onClick={toggleDropdown}
          className="flex gap-2 border border-[#008A90] rounded-[36px] py-[10px] px-5 cursor-pointer"
        >
          <FilterSvg />
          <button className="">filter</button>
        </div>

        {/* Dropdown Menu */}
        {isOpen && (
          <div className="absolute right-5 top-20 lg:left-[210px] lg:top-[280px] mt-2  bg-white border border-gray-300 shadow-lg rounded-2xl py-7 lg:py-10 px-6 lg:px-8 z-50 lg:w-[476px]">
            {/* Header */}
            <div className="flex justify-between items-center">
              <h2 className="text-2xl font-medium text-[#2C2C2C] font-outfit leading-[28.8px]">
                Filters
              </h2>
              <button onClick={toggleDropdown}>
                <CloseSvg />
              </button>
            </div>

            {/* Filter Options */}
            <div className=" mt-4 lg:mt-6">
              <p className="font-medium text-[#2C2C2C] font-manrope text-lg leading-[27px]">
                Sort by
              </p>
              <div className="flex flex-col mt-2 space-y-2">
                <label className="flex items-center space-x-3">
                  <input
                    className="filterInput"
                    type="radio"
                    name="sort"
                    value="recommended"
                    defaultChecked
                  />
                  <span className="text-[#2C2C2C] font-manrope text-lg font-medium leading-[27px]">
                    Recommended
                  </span>
                </label>
                <label className="flex items-center space-x-2">
                  <input
                    className="filterInput"
                    type="radio"
                    name="sort"
                    value="nearest"
                  />
                  <span className="text-[#2C2C2C] font-manrope text-lg font-medium leading-[27px]">
                    Nearest
                  </span>
                </label>
                <label className="flex items-center space-x-2">
                  <input
                    className="filterInput"
                    type="radio"
                    name="sort"
                    value="top-rated"
                  />
                  <span className="text-[#2C2C2C] font-manrope text-lg font-medium leading-[27px]">
                    Top-rated
                  </span>
                </label>
              </div>
            </div>

            {/* Dropdown Footer */}
            <div className="flex justify-end gap-2 mt-4">
              <button
                className="border border-[#008A90] px-4 lg:px-6 py-2 lg:py-3 rounded-lg text-[#2C2C2C] font-manrope text-lg font-medium leading-[27px]"
                onClick={() => setIsOpen(false)}
              >
                Clear all
              </button>
              <button
                className="bg-[#008A90] text-white px-4 lg:px-8 py-2 lg:py-3 rounded-lg font-manrope text-lg font-semibold leading-[27px]"
                onClick={() => setIsOpen(false)}
              >
                Apply
              </button>
            </div>
          </div>
        )}
        {/*  */}
        <div className="pt-5 md:pt-20 pb-5 md:pb-10 3xl:py-[67px] space-y-3">
          <h1 className="text-[#2C2C2C] font-outfit text-xl md:text-2xl lg:text-3xl xl:text-4xl 3xl:text-5xl font-semibold text-center">
            35 results found within this map area
          </h1>
          <p className="text-textLight font-manrope text-lg md:text-xl font-semibold leading-[30px] text-center">
            Medina, Saudi Arabia.
          </p>
        </div>
      </div>
      {/*  */}
      <div className="flex xl:flex-row flex-col-reverse gap-8 3xl:gap-[55px] xl:h-[100vh] overflow-hidden">
        {/* This is the left side div */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-1 gap-5 xl:gap-8 overflow-y-auto xl:h-[100vh] hide-scrollbar">
          <Link to={"/saloncarddetails"}>
            <LeftSideCard
              cardImg={cardImg1}
              title="Ghalib's Barber Salon"
              rating="4.8"
              reviews="1800"
              address="Khalidiyah, Sultanah Qiblatain Road, Medina, Saudi Arabia."
              services={servicesData}
            />
          </Link>
          <LeftSideCard
            cardImg={cardImg2}
            title="Modern Hair Studio"
            rating="4.5"
            reviews="1200"
            address="Downtown Street, Dubai, UAE."
            services={servicesData}
          />
          <LeftSideCard
            cardImg={cardImg2}
            title="Modern Hair Studio"
            rating="4.5"
            reviews="1200"
            address="Downtown Street, Dubai, UAE."
            services={servicesData}
          />
          <LeftSideCard
            cardImg={cardImg2}
            title="Modern Hair Studio"
            rating="4.5"
            reviews="1200"
            address="Downtown Street, Dubai, UAE."
            services={servicesData}
          />
          <LeftSideCard
            cardImg={cardImg2}
            title="Modern Hair Studio"
            rating="4.5"
            reviews="1200"
            address="Downtown Street, Dubai, UAE."
            services={servicesData}
          />
        </div>
        {/* This is the right side div */}
        <div className="map-container xl:h-[100vh] sticky top-0">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3631.5679023456278!2d39.604322175913005!3d24.465772460936282!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x15bdbf0658aa2a25%3A0x897ac0ecd5962a56!2sMosque%20of%20Al-Ghamama!5e0!3m2!1sen!2sbd!4v1741855506813!5m2!1sen!2sbd"
            allowfullscreen
            loading="lazy"
          ></iframe>
        </div>
      </div>
    </section>
  );
};

export default SearchResultPage;
