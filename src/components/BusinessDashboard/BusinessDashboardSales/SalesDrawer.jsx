import {
  CartSvg,
  ServicesSearch,
} from "@/components/svgContainer/SvgContainer";
import { useState } from "react";
import { FiPlusCircle } from "react-icons/fi";
import { BsThreeDotsVertical } from "react-icons/bs";
import { useDispatch, useSelector } from "react-redux";
import { addSelectedServices } from "@/redux/features/cartSlice";
import Appoinment from "@/components/SalesDrawer/Appoinment";
import Service from "@/components/SalesDrawer/Service";
import Product from "@/components/SalesDrawer/Product";
import Membership from "@/components/SalesDrawer/Membership";
import GiftCard from "@/components/SalesDrawer/GiftCard";

export default function SalesDrawer() {
  const [activeList, setActiveList] = useState("Quick Sale");
  const avaibleServiceData = useSelector((state) => state.cartReducer.Services);
  const selectedService = useSelector(
    (state) => state.cartReducer.selectedServices
  );
  const dispatch = useDispatch();

  const handleAddCart = (item) => {
    dispatch(addSelectedServices(item));
  };

  const tabArr = [
    "Quick Sale",
    "Appointments",
    "Services",
    "Product",
    "Memberships",
    "Gift card",
  ];

  return (
    <div className="flex flex-col 3xl:flex-row gap-[20px]">
      <div className="w-full relative">
        <h3 className="text-[#2C2C2C] font-outfit text-2xl font-medium mb-2">
          Add to cart
        </h3>
        <div className="flex justify-between items-center">
          {/* Search */}
          <div className="relative w-full">
            <input
              type="text"
              className="rounded-lg bg-white py-3 ps-10 pe-5 shadow outline-none border border-gray-100 w-full"
              placeholder="Search"
            />
            <button className="absolute left-4 top-[18px]">
              <ServicesSearch />
            </button>
          </div>
        </div>
        <div className="flex gap-3 items-center flex-wrap mt-8 mb-8">
          {tabArr.map((item, index) => {
            return (
              <button
                key={index}
                onClick={() => setActiveList(item)}
                className={`px-5 py-2 text-primary font-medium rounded-full border ${
                  activeList === item
                    ? "border-primary bg-primary text-white"
                    : "border-gray-300"
                }`}
              >
                {item}
              </button>
            );
          })}
        </div>
        <div>
          {activeList === "Quick Sale" && (
            <div className="flex flex-row gap-x-[26px] 3xl:w-[731px] gap-y-4 flex-wrap ">
              {avaibleServiceData
                .slice()
                .reverse()
                .map((item) => {
                  return (
                    <div
                      onClick={() => {
                        handleAddCart(item);
                      }}
                      key={item.id}
                      className="h-[60] lg:w-[266px] w-full cursor-pointer border-[1px] border-solid border-[#dcdcdc] rounded-[8px] flex flex-col justify-center pl-6 py-3  "
                    >
                      <h2 className="text-[#1E1E1E] font-manrope font-semibold leading-[150%] md:text-xl text-base">
                        {item.tittle}
                      </h2>
                      <span className="text-[#757575] font-manrope font-semibold leading-[150%] text-sm md:text-base">
                        {item.subTittle}
                      </span>
                    </div>
                  );
                })}
            </div>
          )}

          {activeList === "Appointments" && <Appoinment />}
          {activeList === "Services" && <Service />}
          {activeList === "Product" && <Product />}
          {activeList === "Memberships" && <Membership />}
          {activeList === "Gift card" && <GiftCard />}
        </div>
      </div>

      <div className="flex-shrink-0 3xl:w-[40%] border-[#DFE1E6] 3xl:border-l">
        <div className="flex gap-[35px] px-[36px] pb-[20px] 3xl:border-b-[1px] border-[#DFE1E6]">
          <div className="w-[64px] h-[64px] flex-shrink-0 rounded-full bg-[#D9D9D9]"></div>
          <div>
            <h3 className="font-manrope text-[#1E1E1E] text-[20px] font-semibold">
              Add client
            </h3>
            <p className="font-manrope text-[#757575]">
              Or Leave empty for walk-ins
            </p>
          </div>
        </div>

        {selectedService.length > 0 ? (
          <div className="relative pt-[20px] h-[82vh] flex flex-col justify-between lg:px-[36px]">
            <div className="flex flex-col gap-y-8 items-start ">
              <div className="flex flex-col gap-y-6 ">
                <h3 className="text-[#000] font-manrope text-2xl font-medium leading-[150%]">
                  Services
                </h3>
                <div className="flex flex-col gap-y-4 h-[320px] overflow-y-scroll">
                  {avaibleServiceData.map((item, index) => {
                    return (
                      <div
                        key={index}
                        className="h-auto p-4 border border-solid border-[#DFE1E6] rounded-[8px] flex flex-row justify-between md:w-[454px]"
                      >
                        <div className="flex flex-col gap-y-[6px]">
                          <h4 className="text-[#000] font-manrope text-base lg:text-xl font-medium leading-[150%]">
                            Blow Dry
                          </h4>
                          <span className="text-[#7c7c7c] font-manrope text-sm lg:text-base font-medium leading-[150%]">
                            {" "}
                            19:30 . 45 min . Mosharaf Hossain{" "}
                          </span>
                        </div>
                        <h4 className="text-[#000] font-manrope text-base lg:text-xl font-medium leading-[150%]">
                          SAR 55
                        </h4>
                      </div>
                    );
                  })}
                </div>
              </div>
              <div className="mb-[15px]">
                <button className="flex items-center gap-2 px-[16px] py-[8px] border-primary border rounded-full text-primary font-manrope font-semibold text-[16px]">
                  <span>
                    <FiPlusCircle />
                  </span>{" "}
                  <p>Add service</p>
                </button>
              </div>
            </div>
            <div>
              <div className="  bottom-0">
                <div className="flex flex-col gap-[12px]">
                  <div className="flex justify-between">
                    <p className="text-[#757575] font-manrope font-semibold">
                      Subtotal
                    </p>
                    <p className="text-[#757575] font-manrope font-semibold">
                      SAR 55
                    </p>
                  </div>
                  <div className="flex justify-between">
                    <p className="text-[#757575] font-manrope font-semibold">
                      Tax
                    </p>
                    <p className="text-[#757575] font-manrope font-semibold">
                      SAR 0
                    </p>
                  </div>
                  <div className="flex justify-between">
                    <p className="text-[#000] font-manrope font-semibold">
                      Total
                    </p>
                    <p className="text-[#000] font-manrope font-semibold">
                      SAR 55
                    </p>
                  </div>
                </div>
                <div className="py-[10px]">
                  <hr />
                </div>
                <div className="flex flex-col gap-[12px]">
                  <div className="flex justify-between mb-[15px]">
                    <p className="text-[#000] font-manrope font-semibold">
                      To pay
                    </p>
                    <p className="text-[#000] font-manrope font-semibold">
                      SAR 55
                    </p>
                  </div>
                  <div className="flex gap-[15px] mb-5 md:mb-0">
                    <div className="px-[14px] py-4 flex-shrink-0 text-[20px] border border-[#DFE1E6] rounded-[8px]">
                      <BsThreeDotsVertical />
                    </div>
                    <div className="flex-shrink-0">
                      <button className="rounded-[8px] bg-primary-gradient p-3 text-[20px] text-[#fff] sm:w-[362px] w-full">
                        Pay now
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ) : (
          <div className="flex pt-[197px] flex-col gap-y-[17px] w-full items-center ">
            <CartSvg />
            <div className="flex flex-col gap-y-[7px] items-center h-[82vh] overflow-y-hidden ">
              <h3 className="text-[#2C2C2C] font-manrope text-2xl font-medium leading-[150%]  ">
                Your cart is empty
              </h3>
              <span className="text-[#757575] font-manrope text-[14px] font-medium leading-[150%] max-w-[462px] text-center  ">
                Tap an item to add to cart or add an existing client for smart
                recommendations
              </span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
