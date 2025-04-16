import { useState } from "react";
import UserProfileNavbar from "./../../shared/UserProfile/UserProfileNavbar";
import BrowseByCities from "@/components/HomePageComponents/BrowseByCities";
import HomepageReview from "../Homepage/sections/HomepageReview";
import LeftSideCard from "../Home/SearchResultPage/Section/LeftSideCard";
import currencyImg from "../../assets/images/searchResultPage/currentcy.png";
import salonImg from "../../assets/images/salon.jpg";
import { SearchIconBlackWhite } from "@/components/svgContainer/SvgContainer";

const availableTabsArr = [
  "Hair Salon",
  "Hair Coloring",
  "Hair Treatment",
  "Blow Dry",
  "Children’s Haircut",
  "Keratin Treatment",
  "Hair Consultation",
  "Hair Extensions",
];

const Allsalons = () => {
  const [activeTab, setactiveTab] = useState("Hair Salon");
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
  return (
    <>
      <UserProfileNavbar />
      <div className="flex flex-col 4xl:gap-y-[120px] lg:gap-y-10 gap-8 lg:pb-20 pb-10 4xl:pt-[120px] 2xl:pt-10 w-full items-center 4xl:px-[200px] 2xl:px-10 px-5 justify-center">
        <div className="flex flex-col 4xl:gap-y-[70px] gap-y-8 items-start w-full">
          <h3 className="text-[#2C2C2C] text-2xl md:text-3xl lg:text-4xl xl:text-[48px] mt-5 2xl:mt-0">
            Hair Salons near in Medina
          </h3>
          <div className="flex flex-col gap-y-5 ">
            <div className="flex flex-col gap-y-8 ">
              <div className="flex flex-row flex-wrap xl:gap-5 gap-3">
                {availableTabsArr.map((item, index) => {
                  return (
                    <div
                      key={index}
                      onClick={() => {
                        setactiveTab(item);
                      }}
                      className={`px-6 rounded-[36px] cursor-pointer xl:py-[10px] py-2 border-[1px]   ${
                        item === activeTab
                          ? "border-transparent bg-[#008A90] text-white"
                          : "border-solid border-[#B3BAC5] text-[#545454]"
                      } `}
                    >
                      {item}
                    </div>
                  );
                })}
              </div>
              <span className="text-[#2C2C2C] text-[18px] font-semibold leading-[150%] ">
                See 250 hair salon results near in Medina
              </span>
            </div>
            <div className="w-full flex items-end justify-end">
              <div className="lg:w-[564px] h-[56px] pl-[24px] md:py-2 pr-2 focus:outline-none outline-none border-none bg-white relative shadow-inputShadow rounded-[40px]">
                <input
                  placeholder="Search for your area "
                  type="text"
                  className="h-full w-full pr-[70px] "
                />
                <div className="absolute top-1/2 right-0 transform -translate-y-1/2 mr-[20px] bg-[#1E1E1E] w-10 h-10 rounded-full flex items-center justify-center">
                  <SearchIconBlackWhite />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 2xl:grid-cols-2 3xl:grid-cols-2 4xl:grid-cols-2 lg:gap-x-5 gap-x-2 3xl:gap-y-20 lg:gap-y-10 gap-y-5">
          {[...Array(12)].map((_, index) => (
            <LeftSideCard
              key={index}
              isRow={true}
              cardImg={salonImg}
              title="Ghalib's Barber Salon"
              rating="4.8"
              reviews="1800"
              address="Khalidiyah, Sultanah Qiblatain Road, Medina, Saudi Arabia."
              services={servicesData}
            />
          ))}
        </div>
      </div>
      <HomepageReview review={"Top Reviews of Hair Salons Near in Medina"} />
      <BrowseByCities />
    </>
  );
};

export default Allsalons;
