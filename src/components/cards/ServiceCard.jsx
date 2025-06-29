import React from "react";
import { useDispatch, useSelector } from "react-redux";

import {
  CheckIconSvg,
  ServicesGhalibSalonSvg,
} from "../svgContainer/SvgContainer";
import { currencyFormatter } from "@/lib/currencyFormatter";
import { toggleService } from "@/redux/features/serviceSlice";

const ServiceCard = ({ service, bookingType, detailsPage }) => {
  const dispatch = useDispatch();
  const selectedServices = useSelector(
    (state) => state.services.selectedServices
  );

  const isActive = selectedServices.some((item) => item.id === service.id);

  return (
    <div
      onClick={() => dispatch(toggleService({ service }))}
      className={`border-borderColorLight bg-white border-[0.4px] ease-in-out duration-500 w-full  h-auto max-h-[146px] p-5 lg:py-6 lg:px-7 rounded-2xl flex cursor-pointer items-center justify-between ${
        isActive ? "border-primary" : ""
      }`}
    >
      <div>
        <h1 className="text-[#2C2C2C] font-manrope text-xl font-semibold">
          {service?.catalog_service?.name}
        </h1>
        <p className="text-textLight font-manrope text-base font-semibold">
          Duration: {service?.catalog_service?.duration} min
        </p>
        <div className="flex gap-1 mt-3 items-center">
          <h1 className="text-primary font-manrope text-xl font-medium">
            {currencyFormatter(+service?.catalog_service?.price)}
          </h1>
        </div>
      </div>

      {!detailsPage && (
        <div className="cursor-pointer">
          {isActive ? <CheckIconSvg /> : <ServicesGhalibSalonSvg />}
        </div>
      )}
    </div>
  );
};

export default ServiceCard;
