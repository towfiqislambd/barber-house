import { FaRegEye } from "react-icons/fa";
import { FaRegEyeSlash } from "react-icons/fa";
import { useState } from "react";
import { useLocation } from "react-router-dom";
import { useResetPassword } from "@/hooks/auth.hook.";
import { useForm } from "react-hook-form";
import { CgSpinnerTwoAlt } from "react-icons/cg";
const inputClass =
  "rounded-lg border-[0.5px]  shadow-[0px_0px_4px_0px_rgba(0,9,54,0.06)] focus:outline-none px-3 lg:px-5 py-2 lg:py-3";

const CreatePass = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [confirmPassword, setConfirmPassword] = useState(false);
  const location = useLocation();
  const email = location?.state?.email;
  const key = location?.state?.key;

  const { mutateAsync: resetPasswordMutation, isPending } = useResetPassword();

  const {
    register,
    handleSubmit,
    reset,
    getValues,
    formState: { errors },
  } = useForm();

  // Form Data
  const onSubmit = async data => {
    const updatedData = {
      email,
      key,
      password: data.password,
      password_confirmation: data.password_confirmation,
    };
    await resetPasswordMutation(updatedData);
    reset();
  };

  return (
    <div className="flex flex-col w-full min-h-screen items-center justify-center ">
      <div className=" h-auto p-6 xl:p-8 bg-[#FCFCFC] shadow-lg w-[300px] md:w-[400px] xl:w-[524px] flex flex-col items-center   gap-y-6 xl:gap-y-12 ">
        <div className="flex flex-col gap-y-8 items-center w-full relative ">
          <div className="flex flex-col gap-y-8  items-center w-full relative ">
            <div className="flex flex-col gap-y-2  justify-center items-center ">
              <h2 className=" text-[30px] text-center xl:text-[36px] font-semibold xl:leading-[230.961%]   ">
                Create new password
              </h2>
              <span className="text-[#5A5C5F] text-sm xl:text-[16px]  font-medium leading-[175%] tracking-[-0.064%] text-center ">
                Please enter and confirm your new password. You will need to
                login after you reset.
              </span>
            </div>
            <form
              onSubmit={handleSubmit(onSubmit)}
              className="flex flex-col gap-y-6 w-full relative "
            >
              {/* Password */}
              <div className="flex flex-col gap-1">
                <div className="w-full flex justify-between">
                  <label
                    htmlFor="password"
                    className="text-black leading-[175%] tracking-[-0.064px]"
                  >
                    New Password
                  </label>
                  {errors.password && (
                    <span className="text-red-500">Password is required</span>
                  )}
                </div>
                <div
                  className={`w-full ${inputClass} relative ${
                    errors.password ? "border-red-500" : "border-[#9D9D9D]"
                  }`}
                >
                  <input
                    {...register("password", { required: true })}
                    placeholder="Enter password"
                    className="focus:outline-none w-full bg-transparent"
                    type={!showPassword ? "password" : "text"}
                    id="password"
                  />
                  <div
                    onClick={() => setShowPassword(prev => !prev)}
                    className="absolute right-2 top-1/2 -translate-y-1/2 cursor-pointer"
                  >
                    {showPassword ? <FaRegEye /> : <FaRegEyeSlash />}
                  </div>
                </div>
              </div>

              {/* Confirm Password */}
              <div className="flex flex-col gap-1">
                <div className="w-full flex justify-between">
                  <label
                    htmlFor="password_confirmation"
                    className="text-black leading-[175%] tracking-[-0.064px]"
                  >
                    Confirm New Password
                  </label>
                  {errors.password_confirmation && (
                    <span className="text-red-500">
                      {errors.password_confirmation.message}
                    </span>
                  )}
                </div>
                <div
                  className={`w-full ${inputClass} relative ${
                    errors.password_confirmation
                      ? "border-red-500"
                      : "border-[#9D9D9D]"
                  }`}
                >
                  <input
                    {...register("password_confirmation", {
                      required: "Confirm Password is required",
                      validate: value =>
                        value === getValues("password") ||
                        "Passwords do not match",
                    })}
                    placeholder="Enter password again"
                    className="focus:outline-none w-full bg-transparent"
                    type={!confirmPassword ? "password" : "text"}
                    id="confirmPassword"
                  />
                  <div
                    onClick={() => setConfirmPassword(prev => !prev)}
                    className="absolute right-2 top-1/2 -translate-y-1/2 cursor-pointer"
                  >
                    {confirmPassword ? <FaRegEye /> : <FaRegEyeSlash />}
                  </div>
                </div>
              </div>
              <div className="flex flex-col gap-y-4 w-full relative  items-center ">
                <button className="w-full px-3 xl:px-6 py-2 xl:py-4 h-auto bg-primary font-manrope text-base xl:text-xl font-semibold text-white rounded-[16px] flex justify-center items-center">
                  {isPending ? (
                    <CgSpinnerTwoAlt className="!text-3xl animate-spin cursor-not-allowed" />
                  ) : (
                    "Reset password"
                  )}
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CreatePass;
