import { GoogleIcon } from "@/components/svgContainer/SvgContainer";
import React from "react";
import { Link, useNavigate } from "react-router-dom";

const VerifyAccount = () => {
  const navigate = useNavigate();
  return (
    <div className="flex flex-col items-center justify-center w-full min-h-screen  ">
      <div className=" h-auto p-6 xl:p-8 bg-[#FCFCFC] shadow-lg w-[300px] md:w-[400px] xl:w-[524px] flex flex-col items-center gap-y-6 xl:gap-y-12 ">
        <div className="flex flex-col gap-y-8 items-center w-full relative ">
          <div className="flex flex-col gap-y-8  items-center w-full relative ">
            <div className="flex flex-col gap-y-6 items-center ">
              <h2 className="text-[36px] font-semibold leading-[230.961%]   ">
                Verify account
              </h2>
              <span className="text-[#5A5C5F] text-sm xl:text-[16px]  font-medium leading-[175%] tracking-[-0.064%] text-center ">
                Lost your password? Please enter your email address. You will
                receive mail with link to set new password.
              </span>
            </div>
            <div className="flex flex-col gap-y-6 w-full relative ">
              <div className="flex flex-col gap-y-1 w-full relative ">
                <span className="text-[16px] font-medium leading-[175%]  tracking-[0.04%]   ">
                  Email
                </span>
                <input
                  type="email"
                  className="w-full px-5 py-2 bg-transparent border-[1px] border-solid rounded-[8px]  "
                  placeholder="Enter your email"
                />
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-y-4 w-full relative  items-center ">
            <button
              onClick={() => {
                navigate("/verify-otp");
              }}
              className="w-full xl:px-6 px-3 xl:py-4 py-2 h-auto bg-[#008A90] font-manrope text-base xl:text-xl font-semibold text-white rounded-[16px] "
            >
              Reset password
            </button>
          </div>
        </div>
        <Link to={"/login"} className="flex gap-x-1 ">
          {" "}
          <p className="underline font-bold cursor-pointer ">
            Back to login
          </p>{" "}
        </Link>
      </div>
    </div>
  );
};

export default VerifyAccount;
