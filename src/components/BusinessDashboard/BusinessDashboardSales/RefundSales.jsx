import { GreenCircleSvg } from "@/components/svgContainer/SvgContainer";
import { useState } from "react";
import RefundItem from "./RefundItem";

const RefundSales = () => {
  const tabs = [
    {
      id: "tab1",
      label: "Refund item",
      content: <RefundItem />,
    },
    {
      id: "tab2",
      label: "Refund amount",
      content: <RefundItem />,
    },
  ];
  const [activeTab, setActiveTab] = useState(tabs[0].id);
  return (
    <section className="py-4 xl:py-8 2xl:py-[56px] px-6 xl:px-10 2xl:px-[60px] 3xl:px-[200px]">
      <div className="flex justify-between">
        {/*  */}
        <div>
          <p className="text-textColor font-manrope text-lg lg:text-2xl font-semibold leading-9">
            Refund sale
          </p>
          <div className="flex flex-col md:flex-row md:items-center items-start lg:gap-2 xl:gap-3 mt-3">
            <p className="text-textColor font-manrope text-sm lg:text-base xl:text-lg font-semibold leading-[27px]">
              Sale #5
            </p>
            <div className="hidden lg:block">
              <GreenCircleSvg />
            </div>
            <p className="text-textColor font-manrope text-sm lg:text-base xl:text-lg font-semibold leading-[27px]">
              Tuesday, 11 Feb 2025
            </p>
            <div className="hidden lg:block">
              <GreenCircleSvg />
            </div>
            <p className="text-textColor font-manrope text-sm lg:text-base xl:text-lg font-semibold leading-[27px]">
              Ghalib’s Hair Salon
            </p>
          </div>
          <p className="md:mt-2 mt-4 text-[#008A90] font-manrope text-sm lg:text-base xl:text-lg font-semibold leading-[27px]">
            Learn more
          </p>
        </div>
        {/*  */}
        <div>
          <div className="flex lg:gap-5 gap-2">
            <button className="border border-[#008A90] px-2 py-2 2xl:py-3 lg:px-2 xl:px-5 rounded-lg text-sm lg:text-base xl:text-lg">
              Close
            </button>
            <button className="bg-[#008A90] py-2 xl:py-3 px-2 lg:px-2 xl:px-5 rounded-lg text-[#FFF] text-sm lg:text-base xl:text-lg">
              Continue
            </button>
          </div>
        </div>
      </div>
      {/*  */}
      <div className=" max-w-[750px] mt-4 lg:mt-8 xl:mt-12">
        {/* Tab Buttons */}
        <div className="flex bg-[#F2F2F2] p-2 rounded-xl justify-between">
          {tabs.map((tab) => (
            <button
              key={tab.id}
              className={` rounded-lg py-1 lg:py-2 px-4 xl:py-3  focus:outline-none w-[360px] ${
                activeTab === tab.id
                  ? " text-textColor font-manrope bg-[#FFF] shadow-tabShadow lg:text-base xl:text-lg font-medium leading-[27px] border border-[#008A90]"
                  : "text-textColor font-manrope lg:text-base xl:text-lg font-medium leading-[27px]"
              }`}
              onClick={() => setActiveTab(tab.id)}
            >
              {tab.label}
            </button>
          ))}
        </div>
        {/* Tab Content */}
        <div className="lg:p-4 mt-2">
          {tabs.find((tab) => tab.id === activeTab)?.content}
        </div>
      </div>
    </section>
  );
};

export default RefundSales;
