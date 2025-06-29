import {
  GoogleIcon,
  GoogleSvg,
  LeftSideArrowSvg,
} from "@/components/svgContainer/SvgContainer";
import loginImg from "../../../assets/images/loginImage.png";
import { Link, useNavigate } from "react-router-dom";
import { FaRegEye } from "react-icons/fa";
import { FaRegEyeSlash } from "react-icons/fa";
import { useState } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { useLogin, useSocialLogin } from "@/hooks/auth.hook.";
import { useGoogleLogin } from "@react-oauth/google";
import axios from "axios";
import { CgSpinnerTwoAlt } from "react-icons/cg";

const UserLogin = () => {
  const navigate = useNavigate();
  const [isShowPass, setisShowPass] = useState(false);
  const { mutateAsync: loginMutation, isPending } = useLogin();
  const { mutateAsync: socialLoginMutation } = useSocialLogin();

  const handlePrev = () => {
    navigate(-1);
  };

  const {
    reset,
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = async data => {
    await loginMutation(data);
  };

  // login with google:
  const handleLoginWithGoogle = useGoogleLogin({
    onSuccess: async tokenResponse => {
      const token = tokenResponse.access_token;
      try {
        const { data } = await axios(
          `${import.meta.env.VITE_GOOGLE_URL}/oauth2/v2/userinfo`,
          {
            headers: {
              Authorization: `Bearer ${token}`,
            },
          }
        );

        const updatedData = {
          token,
          provider: "google",
          username: data?.name,
          email: data?.email,
          avatar: data?.picture,
          // avatar: null,
        };
        await socialLoginMutation(updatedData);
      } catch (error) {
        console.error("Error fetching user info:", error);
      }
    },
    onError: error => {
      console.error("Google Login Failed:", error);
    },
  });

  return (
    <section className="container  h-[100vh] flex gap-[174px] justify-center items-center">
      {/* This is the left side div */}
      <div className="mt-3 2xl:block hidden ">
        <button onClick={handlePrev}>
          <LeftSideArrowSvg />
        </button>
        <img
          className="mt-3 w-[750px] h-[840px] rounded-[32px] object-cover"
          src={loginImg}
          alt=""
        />
      </div>
      {/* This is the right side div */}
      <div className=" h-auto p-6 2xl:p-8 bg-[#FCFCFC] shadow-lg  w-[524px] flex flex-col items-center gap-y-6 2xl:gap-y-12 ">
        <form
          onSubmit={handleSubmit(onSubmit)}
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
                  <div className="my-2">
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
            <button className="w-full 2xl:px-6 px-3 py-2 2xl:py-4 h-auto bg-primary font-manrope text-base 2xl:text-2xl font-semibold text-white rounded-[16px] flex justify-center items-center">
              {isPending ? (
                <CgSpinnerTwoAlt className="!text-3xl animate-spin cursor-not-allowed" />
              ) : (
                "Log in"
              )}
            </button>
            <span className="font-manrope text-base 2xl:text-2xl font-semibold text-[#2C2C2C] rounded-[16px]">
              Or
            </span>
            <div
              onClick={() => handleLoginWithGoogle()}
              className="flex gap-3 cursor-pointer justify-center border w-full border-[#1E1E1E] py-[14px] px-[16px] rounded-[10px] items-center"
            >
              <GoogleSvg />
              <p className="text-textSecondary font-outfit text-lg font-medium leading-[29.52px]">
                Continue with Google
              </p>
            </div>
          </div>
        </form>
        <span className="flex flex-col items-center md:flex-row  gap-x-1 ">
          Don’t have an account?{" "}
          <Link to="/bs" className="underline font-bold cursor-pointer ">
            Create an account
          </Link>{" "}
        </span>
      </div>
    </section>
  );
};

export default UserLogin;
