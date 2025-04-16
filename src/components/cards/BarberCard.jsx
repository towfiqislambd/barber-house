import React from "react";
import chooseImg from "../../../assets/images/chooseProfessionalImg/chooseProfessionalImg.png";
import currencyImg from "../../../assets/images/searchResultPage/currentcy.png";

const BarberCard = () => {
  return (
    <div className="max-w-[493px] border-[0.4px] border-solid border-[#B0ECEF] py-12 px-12 rounded-2xl">
      <img
        className="w-[400px] h-[237px] object-cover"
        src={chooseImg}
        alt="not found"
      />
      {/*  */}
      <div className="py-5">
        <h1 className="text-[#545454] font-outfit text-[28px] font-medium">
          Ghalib's Barber Salon
        </h1>
        <p className="text-[#545454] font-manrope text-lg font-medium leading-[27px]">
          Khalidiyah, Sultanah Qiblatain Road, Medina, Saudi Arabia.
        </p>
      </div>
      {/*  */}
      <div className="border-t border-[#54D6DC] border-b py-12">
        {/* This is the Wax Services 01 */}
        <div className="flex justify-between">
          <div>
            <h1 className="text-[#2C2C2C] font-manrope text-lg font-semibold leading-[27px]">
              Wax Services 01
            </h1>
            <p className="text-textLight font-manrope font-medium leading-[21px]">
              5 - 10 mins
            </p>
          </div>
          <div className="flex items-center gap-1">
            <img
              className="w-[13px] h-4 object-cover"
              src={currencyImg}
              alt=""
            />
            <h1 className="text-[#3E3E3E] font-manrope text-lg font-medium leading-[27px]">
              10
            </h1>
          </div>
        </div>
        {/* This is the Boys cuts */}
        <div className="flex justify-between mt-4">
          <div>
            <h1 className="text-[#2C2C2C] font-manrope text-lg font-semibold leading-[27px]">
              Boys cuts
            </h1>
            <p className="text-textLight font-manrope font-medium leading-[21px]">
              5 - 10 mins
            </p>
          </div>
          <div className="flex items-center gap-1">
            <img
              className="w-[13px] h-4 object-cover"
              src={currencyImg}
              alt=""
            />
            <h1 className="text-[#3E3E3E] font-manrope text-lg font-medium leading-[27px]">
              10
            </h1>
          </div>
        </div>
      </div>
      {/*  */}
      {/* This is the Total */}
      <div className="flex justify-between mt-4">
        <h1 className="text-[#2C2C2C] font-manrope text-xl font-semibold leading-[30px]">
          Total
        </h1>
        <div className="flex items-center gap-1">
          <img className="w-[19px] h-6 object-cover" src={currencyImg} alt="" />
          <h1 className="text-[#3E3E3E] font-manrope text-2xl font-medium leading-[27px]">
            10
          </h1>
        </div>
      </div>
      {/* This is the button section */}
      <div className="flex justify-center mt-20 bg-gradient-to-r from-[#008A90] to-[#00C2CB] py-[14px] px-6 rounded-[40px]">
        <Link
          to={"/booking-confirmation"}
          className="text-[#FFF] font-manrope text-lg font-semibold "
        >
          Continue
        </Link>
      </div>
    </div>
  );
};

export default BarberCard;
