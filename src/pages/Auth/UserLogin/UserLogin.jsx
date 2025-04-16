import { GoogleIcon } from "@/components/svgContainer/SvgContainer";
import loginImg from "../../../assets/images/loginImage.png";
import orImg from "../../../assets/images/login/or.png";
import { Link } from "react-router-dom";
import { FaRegEye } from "react-icons/fa";
import { FaRegEyeSlash } from "react-icons/fa";
import { useState } from "react";
import { useForm } from "react-hook-form";
import { message } from "antd";
import toast from "react-hot-toast";

const UserLogin = () => {
  const [isShowPass, setisShowPass] = useState(false);
  const {
    reset,
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onsubmit = data => {
    if (data.email && data.password) {
      toast.success("ok ")
      reset()
    }
  };

  return (
    <section className="container  h-[100vh] flex gap-[174px] justify-center items-center">
      {/* This is the left side div */}
      <div className="mt-3 2xl:block hidden ">
        <img
          className="mt-3 w-[750px] h-[840px] rounded-[32px] object-cover"
          src={loginImg}
          alt=""
        />
      </div>
      {/* This is the right side div */}
      <div className=" h-auto p-6 2xl:p-8 bg-[#FCFCFC] shadow-lg  w-[524px] flex flex-col items-center gap-y-6 2xl:gap-y-12 ">
        <form
          onSubmit={handleSubmit(onsubmit)}
          className="flex flex-col gap-y-6 2xl:gap-y-8 items-center w-full relative "
        >
          <div className="flex flex-col gap-y-6 2xl:gap-y-8  items-center w-full relative ">
            <h2 className="text-[36px] font-semibold leading-[230.961%]   ">
              Login
            </h2>
            <div className="flex flex-col gap-y-6 w-full relative ">
              <div className="flex flex-col gap-y-1 w-full relative ">
                <span className="text-[16px] font-medium leading-[175%]  tracking-[0.04%]   ">
                  Email
                </span>
                <input
                  name="email"
                  type="email"
                  className="w-full px-5 py-2 bg-transparent border-[1px] border-solid rounded-[8px]  "
                  placeholder="Enter your email"
                  {...register("email", {
                    required: "Email is required",
                    pattern: {
                      value:
                        /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/,
                      message: "Invalid email format",
                    },
                  })}
                />
                {errors.email && (
                  <span className="text-red-500 text-sm my-2 font-semibold ">
                    {errors.email.message}
                  </span>
                )}
              </div>
              <div>
                <span className="text-[16px] font-medium leading-[175%]  tracking-[0.04%]   ">
                  Password
                </span>
                <div>
                  <div className=" relative ">
                    <input
                      name="password"
                      {...register("password", {
                        required: "Password is required",
                        minLength: {
                          value: 8,
                          message: "Password must be greater than 8 characters",
                        },
                        maxLength: {
                          value: 32,
                          message: "password must be less than 32 characters",
                        },
                        pattern: {
                          value:
                            /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&]).{8,32}$/,
                          message:
                            "Password must contain at least one uppercase, one lowercase, one number, and one special character (@$!%*?&)",
                        },
                      })}
                      type={isShowPass ? "text" : "password"}
                      className="w-full px-5 py-2  bg-transparent border-[1px] border-solid rounded-[8px]  "
                      placeholder="Enter password"
                    />

                    <div className="absolute top-1/2 right-0 -translate-y-1/2 mr-5">
                      {isShowPass ? (
                        <FaRegEye
                          onClick={() => {
                            setisShowPass(!isShowPass);
                          }}
                          className="text-2xl cursor-pointer "
                        />
                      ) : (
                        <FaRegEyeSlash
                          className="text-2xl cursor-pointer "
                          onClick={() => {
                            setisShowPass(!isShowPass);
                          }}
                        />
                      )}
                    </div>
                  </div>
                  <div className="my-2" >
                    {errors.password && (
                      <span className="text-red-500 text-sm py-4 font-semibold ">
                        {errors.password.message}
                      </span>
                    )}
                  </div>
                </div>
              </div>
              <div className=" w-full flex items-end justify-end ">
                <Link to={"/verify-account"} className="underline ">
                  Forgot password?
                </Link>
              </div>
            </div>
          </div>
          <div className="flex flex-col gap-y-2 2xl:gap-y-4 w-full relative  items-center ">
            <button className="w-full 2xl:px-6 px-3 py-2 2xl:py-4 h-auto bg-[#008A90] font-manrope text-base 2xl:text-2xl font-semibold text-white rounded-[16px] ">
              Log in{" "}
            </button>
            <span className="font-manrope text-base 2xl:text-2xl font-semibold text-[#2C2C2C] rounded-[16px]">
              Or
            </span>
            <div className="w-full cursor-pointer border text-base 2xl:text-2xl border-solid py-[8px] 2xl:py-[14px] px-2 2xl:px-4 rounded-[10px] border-[#1E1E1E] flex items-center justify-center gap-x-3  ">
              <GoogleIcon />
              <span>Continue with Google</span>
            </div>
          </div>
        </form>
        <span className="flex flex-col items-center md:flex-row  gap-x-1 ">
          Don’t have an account?{" "}
          <p className="underline font-bold cursor-pointer ">
            Create an account
          </p>{" "}
        </span>
      </div>
    </section>
  );
};

export default UserLogin;
