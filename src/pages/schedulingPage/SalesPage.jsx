import { useState } from "react";
import { LiaAngleRightSolid } from "react-icons/lia";
import { FaArrowLeftLong } from "react-icons/fa6";
import { Link } from "react-router-dom";
import PaymentMethod from "@/components/SchedulingComponents/PaymentMethod";
import Taxrates from "@/components/SchedulingComponents/Taxrates";
import Receipts from "@/components/SchedulingComponents/Receipts";
import Tipping from "@/components/SchedulingComponents/Tipping";
import GiftCardSale from "@/components/SchedulingComponents/GiftCardSale";
import { FaBarsStaggered } from "react-icons/fa6";

export default function SalesPage() {
  const [activeTab, setActiveTab] = useState("paymentmethod");
  const [salesetting, setSalesetting] = useState(false);

  const saleMobileMenuActive = () => {
    setSalesetting(!salesetting);
  };
  return (
    <>
      <div className="">
        <button
          onClick={saleMobileMenuActive}
          className="visible 3xl:invisible absolute right-[0px] bg-[#008A90] text-white p-[10px] border rounded-tl-[8px] rounded-bl-[8px]"
        >
          <FaBarsStaggered />
        </button>
      </div>
      {salesetting && (
        <div
          className="fixed inset-0 bg-black bg-opacity-50 z-5"
          onClick={() => setSalesetting(false)}
        ></div>
      )}

      <div className="3xl:mb-[45px] mb-5 3xl:mt-[65px] mt-6 pl-6 xl:pl-10 3xl:pl-[300px]">
        <div className="flex items-center">
          <Link to="/businessDashboard/settingsales">
            <button className="text-[#2C2C2C] font-manrope font-medium border border-[#757575] rounded-[24px] mr-[16px]   xl:w-[100px] flex-shrink-0 flex items-center gap-[6px] py-[5px] xl:py-[8px] px-[12px]">
              <span>
                <FaArrowLeftLong />
              </span>{" "}
              Back
            </button>
          </Link>
          <ul className="flex gap-[5px] xl:gap-[10px] items-center">
            <li className="text-[#757575] font-manrope font-medium flex-shrink-0">
              Workspace settings
            </li>
            <li className="text-[#757575] font-manrope font-medium flex-shrink-0">
              <LiaAngleRightSolid />
            </li>
            <li className="text-[#2C2C2C] font-manrope font-medium flex-shrink-0">
              Sales
            </li>
          </ul>
        </div>
      </div>
      <section className="flex flex-col 3xl:flex-row items-start gap-10 4xl:pl-[300px] px-6 md:px-0">
        {/* Sidebar */}
        <div
          className={`h-auto bg-white rounded-xl p-6 flex-shrink-0 transition-all duration-300 ${
            salesetting
              ? "fixed top-0 right-0 z-10 visible"
              : "hidden 3xl:block"
          }`}
        >
          <h3 className="my-[15px] ml-5 text-[20px] font-bold">Sales</h3>
          <div className="border-t pb-5"></div>
          <ul className="text-lg font-medium">
            <button
              onClick={() => {
                setActiveTab("paymentmethod");
                setSalesetting(false);
              }}
              className={`mb-[4px] px-5 py-2 3xl:w-full block text-left duration-300 transition-all hover:bg-[#E7E8FF] hover:text-[#2C2C2C] rounded-lg ${
                activeTab === "paymentmethod"
                  ? "text-[#2C2C2C] bg-[#E7E8FF]"
                  : "text-[#2C2C2C]"
              }`}
            >
              Payment method
            </button>
            <button
              onClick={() => {
                setActiveTab("taxrates");
                setSalesetting(false);
              }}
              className={`mb-[4px] px-5 py-2 3xl:w-full block text-left duration-300 transition-all hover:bg-[#E7E8FF] hover:text-[#2C2C2C] rounded-lg ${
                activeTab === "taxrates"
                  ? "text-[#2C2C2C] bg-[#E7E8FF]"
                  : "text-[#2C2C2C]"
              }`}
            >
              Tax rates
            </button>
            <button
              onClick={() => {
                setActiveTab("receipts");
                setSalesetting(false);
              }}
              className={`mb-[4px] px-5 py-2 3xl:w-full block text-left duration-300 transition-all hover:bg-[#E7E8FF] hover:text-[#2C2C2C] rounded-lg ${
                activeTab === "receipts"
                  ? "text-[#2C2C2C] bg-[#E7E8FF]"
                  : "text-[#2C2C2C]"
              }`}
            >
              Receipts
            </button>
            <button
              onClick={() => {
                setActiveTab("tepping");
                setSalesetting(false);
              }}
              className={`mb-[4px] px-5 py-2 3xl:w-full block text-left duration-300 transition-all hover:bg-[#E7E8FF] hover:text-[#2C2C2C] rounded-lg ${
                activeTab === "tepping"
                  ? "text-[#2C2C2C] bg-[#E7E8FF]"
                  : "text-[#2C2C2C]"
              }`}
            >
              Tipping
            </button>
            <button
              onClick={() => {
                setActiveTab("giftcardsale");
                setSalesetting(false);
              }}
              className={`mb-[4px] px-5 py-2 3xl:w-full block text-left duration-300 transition-all hover:bg-[#E7E8FF] hover:text-[#2C2C2C] rounded-lg ${
                activeTab === "giftcardsale"
                  ? "text-[#2C2C2C] bg-[#E7E8FF]"
                  : "text-[#2C2C2C]"
              }`}
            >
              Gift cards
            </button>
          </ul>
        </div>

        {/* Content Area */}
        <div className="flex-grow">
          {activeTab === "paymentmethod" && <PaymentMethod />}
          {activeTab === "taxrates" && <Taxrates />}
          {activeTab === "receipts" && <Receipts />}
          {activeTab === "tepping" && <Tipping />}
          {activeTab === "giftcardsale" && <GiftCardSale />}
        </div>
      </section>
    </>
  );
}
