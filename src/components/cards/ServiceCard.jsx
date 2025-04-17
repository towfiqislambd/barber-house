import React from "react";
import {
  CheckIconSvg,
  ServicesGhalibSalonSvg,
} from "../svgContainer/SvgContainer";
import currencyImg from "../../assets/images/searchResultPage/currentcy.png";

const ServiceCard = ({ service, activeCard, setActiveCard }) => {
  const isActive = service.id === activeCard;

  return (
    <div
      onClick={() => setActiveCard(isActive ? null : service.id)}
      className={`${
        isActive
          ? " border-borderColorLight bg-primaryLight"
          : " border-borderColorLight bg-white"
      } border-[0.4px] ease-in-out duration-500 max-w-[750px] h-auto max-h-[146px] p-5 lg:py-6 lg:px-7 rounded-2xl flex cursor-pointer items-center justify-between`}
    >
      {/* Card Content */}
      <div>
        <h1 className="text-[#2C2C2C] font-manrope text-xl font-semibold leading-[30px]">
          {service.name}
        </h1>
        <p className="text-textLight font-manrope text-base font-semibold">
          {service.duration}
        </p>
        <div className="flex gap-1 mt-3 items-center">
          <img
            className="w-[19px] h-6 object-cover"
            src={currencyImg}
            alt="Currency"
          />
          <h1 className="text-primary font-manrope text-xl font-medium leading-[30px]">
            {service.price}
          </h1>
        </div>
      </div>

      {/* Selection Icon */}
      <div className="cursor-pointer">
        {isActive ? <CheckIconSvg /> : <ServicesGhalibSalonSvg />}
      </div>
    </div>
  );
};

export default ServiceCard;
