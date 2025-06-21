import React, { useState } from "react";
import CommonTitle from "./CommonTitle";
import { Link } from "react-router-dom";
import { IoArrowDownSharp } from "react-icons/io5";

export default function KnowledgeBase({ data, data2 }) {
  const [visibleCards, setVisibleCards] = useState(6);
  const handleViewAll = () => {
    setVisibleCards(data2.length);
  };
  return (
    <section className="py-[40px] xl:py-[67px]">
      <div className="container ">
        <div className="text-center mb-[67px] px-[15px]">
          <CommonTitle title={data?.title} text={data?.sub_title}></CommonTitle>
        </div>
        <div className="flex flex-wrap gap-x-[30px] gap-y-[30px] px-[15px] ">
          {data2.slice(0, visibleCards).map(knowledge => (
            <Link
              to={`/business/businessdetails/${knowledge?.id}`}
              className="xl:w-[31.5%]"
              key={knowledge.id}
            >
              <div className="flex h-[100%] flex-col gap-[18px] w-full rounded-[16px] shadow-[0px_2px_16px_0px_rgba(0,0,0,0.08)] border border-[#dfe1e6] py-[18px] px-[24px]">
                <div className="w-[60px] h-[60px] m-auto xl:m-0">
                  <img
                    className="w-full h-full object-cover"
                    src={`${import.meta.env.VITE_SITE_URL}/${knowledge?.icon}`}
                    alt=""
                  />
                </div>
                <div className="text-center xl:text-start">
                  <h4 className="mb-[14px] text-[#1E1E1E] font-outfit text-[24px] font-semibold leading-[28px]">
                    {knowledge?.title}
                  </h4>
                  <p className="text-[#545454] font-manrope leading-[24px]">
                    {knowledge?.sub_title}
                  </p>
                  
                </div>
              </div>
            </Link>
          ))}
        </div>
        <div className="mt-[48px] flex justify-center">
          {visibleCards < data2.length && (
            <button
              onClick={handleViewAll}
              className="flex justify-center items-center gap-2 text-[#2C2C2C] text-nowrap font-medium py-[12px] px-[24px] rounded-[16px] border border-[#DFE1E6]"
            >
              See More
              <span>
                <IoArrowDownSharp />
              </span>
            </button>
          )}
        </div>
      </div>
    </section>
  );
}
