import React from "react";
import { useNavigate } from "react-router-dom";

const VerifyOtp = () => {
  const navigate = useNavigate();
  return (
    <div className="flex flex-col items-center justify-center w-full min-h-screen  ">
      <div className=" h-auto p-6 xl:p-8 bg-[#FCFCFC] shadow-lg w-[300px] md:w-[400px] xl:w-[524px] flex flex-col items-center gap-y-6 xl:gap-y-12 ">
        <div className="flex flex-col gap-y-8 items-center w-full relative ">
          <div className="flex flex-col gap-y-8  items-center w-full relative ">
            <div className="flex flex-col gap-y-2 items-center ">
              <h2 className="text-[36px] font-semibold leading-[230.961%]   ">
                Verify otp
              </h2>
              <span className="text-[#5A5C5F] text-[16px]  font-medium leading-[175%] tracking-[-0.064%] text-center ">
                Sign up to continue
              </span>
            </div>
            <div className="flex flex-col gap-y-6 w-full relative ">
              <div className="flex flex-col gap-y-2 w-full relative ">
                <div className="w-full flex items-center gap-y-6 justify-center  ">
                  <span className="text-[16px] text-[#333] font-medium leading-[175%]  tracking-[0.04%]   ">
                    Enter 4 digit code
                  </span>
                </div>
                <div className="flex flex-row  justify-center gap-x-3 xl:gap-x-5  w-full ">
                  <input
                    type="text"
                    className=" px-5 rounded-[16px] py-2 bg-[#ECF1EE] border-[1px] w-[50px] md:w-[60px] xl:w-[96px] border-solid  h-[50px] xl:h-[64px]  "
                  />
                  <input
                    type="text"
                    className=" px-5 rounded-[16px] py-2 bg-[#ECF1EE] border-[1px] w-[50px] md:w-[60px] xl:w-[96px] border-solid  h-[50px] xl:h-[64px]  "
                  />
                  <input
                    type="text"
                    className=" px-5 rounded-[16px] py-2 bg-[#ECF1EE] border-[1px] w-[50px] md:w-[60px] xl:w-[96px] border-solid  h-[50px] xl:h-[64px] "
                  />
                  <input
                    type="text"
                    className=" px-5 rounded-[16px] py-2 bg-[#ECF1EE] border-[1px] w-[50px] md:w-[60px] xl:w-[96px] border-solid  h-[50px] xl:h-[64px]  "
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-y-4 w-full relative  items-center ">
            <button
              onClick={() => {
                navigate("/create-pass");
              }}
              className="w-full xl:px-6 px-3 xl:py-4 py-2 h-auto bg-[#008A90] font-manrope text-base xl:text-xl font-semibold text-white rounded-[16px] "
            >
              Verify
            </button>
          </div>
        </div>
        <span className="flex gap-x-1 ">
          {" "}
          <p className="underline font-bold cursor-pointer ">
            Back to login
          </p>{" "}
        </span>
      </div>
    </div>
  );
};

export default VerifyOtp;
