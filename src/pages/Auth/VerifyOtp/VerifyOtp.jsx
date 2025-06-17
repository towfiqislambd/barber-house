import { useVerifyOtp } from "@/hooks/auth.hook.";
import React from "react";
import { Controller, useForm } from "react-hook-form";
import { useLocation } from "react-router-dom";
import OTPInput from "react-otp-input";
import { CgSpinnerTwoAlt } from "react-icons/cg";

const VerifyOtp = () => {
  const location = useLocation();
  const email = location.state?.email;
  console.log(email);
  const { mutateAsync: verifyOtpMutation, isPending } = useVerifyOtp();

  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async data => {
    const updatedData = { email, otp: data.otp };
    await verifyOtpMutation(updatedData);
  };

  return (
    <div className="flex flex-col items-center justify-center w-full min-h-screen  ">
      <div className=" h-auto p-6 xl:p-8 bg-[#FCFCFC] shadow-lg w-[300px] md:w-[400px] xl:w-[524px] flex flex-col items-center gap-y-6 xl:gap-y-12 ">
        <div className="flex flex-col gap-y-8 items-center w-full relative ">
          <div className="flex flex-col gap-y-8  items-center w-full relative ">
            <div className="flex flex-col gap-y-2 items-center ">
              <h2 className="text-[36px] font-semibold leading-[230.961%]   ">
                Verify otp
              </h2>
            </div>
            <div className="flex flex-col gap-y-6 w-full relative ">
              <div className="flex flex-col gap-y-2 w-full relative ">
                <div className="w-full flex items-center gap-y-6 justify-center  ">
                  <span className="text-[16px] text-[#333] font-medium leading-[175%]  tracking-[0.04%]   ">
                    Enter 4 digit code
                  </span>
                </div>
                {/* form */}
                <form
                  onSubmit={handleSubmit(onSubmit)}
                  className="lg:mt-8 space-y-6"
                >
                  {/* Otp */}
                  <div id="otp_container" className="sm:mt-10 mt-6 mb-7">
                    <Controller
                      name="otp"
                      control={control}
                      rules={{
                        required: "OTP is required",
                        minLength: {
                          value: 4,
                          message: "OTP must be 4 digits",
                        },
                      }}
                      render={({ field }) => (
                        <OTPInput
                          {...field}
                          value={field.value || ""}
                          onChange={field.onChange}
                          numInputs={4}
                          renderSeparator={false}
                          renderInput={props => <input {...props} />}
                        />
                      )}
                    />
                    {errors.otp && (
                      <p className="text-red-500 text-center mt-3">
                        {errors.otp.message}
                      </p>
                    )}
                  </div>
                  <div className="flex flex-col gap-y-4 w-full relative  items-center ">
                    <button className="w-full xl:px-6 px-3 xl:py-4 py-2 h-auto bg-primary font-manrope text-base xl:text-xl font-semibold text-white rounded-[16px] flex justify-center items-center">
                      {isPending ? (
                        <CgSpinnerTwoAlt className="!text-3xl animate-spin cursor-not-allowed" />
                      ) : (
                        "Verify OTP"
                      )}
                    </button>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
        <span className="flex gap-x-1 ">
          <p className="underline font-bold cursor-pointer ">Back to login</p>
        </span>
      </div>
    </div>
  );
};

export default VerifyOtp;
