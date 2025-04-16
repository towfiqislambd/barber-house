import React from "react";

const BusinessTypeCard = ({ service }) => {
  return (
    <div
      key={service.id}
      className="border border-[#8993A4] rounded-2xl w-[381px] py-5 px-6"
    >
      <div className="flex justify-between">
        <div>
          {service.icon}
          <p className="mt-2 text-[#000] font-manrope text-xl font-medium leading-[30px]">
            {service.title}
          </p>
        </div>
        <p>{service.count}</p>
      </div>
    </div>
  );
};

export default BusinessTypeCard;
