import {
  AppleLogoSvg,
  FacebookLogoSvg,
  GoogleSvg,
  LeftSideArrowSvg,
} from "@/components/svgContainer/SvgContainer";
import loginImg from "../../../assets/images/loginImage.png";
import orImg from "../../../assets/images/login/or.png";
import { Link, useNavigate } from "react-router-dom";
import { useLogin, useSocialLogin } from "@/hooks/auth.hook.";
import { CgSpinnerTwoAlt } from "react-icons/cg";
import { useForm } from "react-hook-form";
import { useState } from "react";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { Eye, EyeOff } from "lucide-react";
import { useGoogleLogin } from "@react-oauth/google";
import axios from "axios";

const Login = () => {
  const navigate = useNavigate();
  const [showPassword, setShowPassword] = useState(false);
  const { mutateAsync: loginMutation, isPending } = useLogin();
  const { mutateAsync: socialLoginMutation } = useSocialLogin();

  const handlePrev = () => {
    navigate(-1);
  };
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      email: "",
      password: "",
    },
  });

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
        console.log(updatedData);
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
    <section className="container flex flex-col xl:flex-row gap-[30px] xl:gap-[174px] items-center">
      {/* Left side */}
      <div className="mt-3 w-full xl:w-auto">
        <button onClick={handlePrev}>
          <LeftSideArrowSvg />
        </button>
        <img
          className="mt-3 w-[100%] xl:w-[750px] h-[200px] xl:h-[850px] rounded-[32px] object-cover"
          src={loginImg}
          alt=""
        />
      </div>

      {/* Right side */}
      <div className="">
        <h1 className="text-textSecondary font-outfit text-[24px] xl:text-[40px] mb-[20px] font-semibold xl:leading-[52.8px] text-center">
          BS Business for professionals
        </h1>
        <p className="text-[#8993A4] font-outfit text-lg leading-[29.52px] text-center">
          Create an account or login to manage your business
        </p>

        <form
          onSubmit={handleSubmit(onSubmit)}
          className="relative flex flex-col justify-center text-center mt-[34px]"
        >
          {/* Email */}
          <div className="text-left mb-4">
            <label className="font-medium block mb-1">Email</label>
            <Input
              type="email"
              placeholder="Enter email here"
              {...register("email", { required: "Email is required" })}
            />
            {errors.email && (
              <p className="text-red-500 text-sm mt-1">
                {errors.email.message}
              </p>
            )}
          </div>

          {/* Password */}
          <div className="text-left mb-6 relative">
            <label className="font-medium block mb-1">Password</label>
            <Input
              type={showPassword ? "text" : "password"}
              placeholder="Enter password"
              {...register("password", { required: "Password is required" })}
            />
            <div
              className="absolute right-3 top-[38px] cursor-pointer"
              onClick={() => setShowPassword(prev => !prev)}
            >
              {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
            </div>
            {errors.password && (
              <p className="text-red-500 text-sm mt-1">
                {errors.password.message}
              </p>
            )}
          </div>

          {/* Submit */}
          <Button
            type="submit"
            className="h-[58px] flex items-center justify-center text-white font-manrope text-xl font-semibold w-full rounded-2xl"
            variant="secondary"
          >
            {isPending ? (
              <CgSpinnerTwoAlt className="!text-3xl animate-spin cursor-not-allowed" />
            ) : (
              "Log in"
            )}
          </Button>
        </form>

        <img className="mt-[18px] mx-auto" src={orImg} alt="or separator" />

        {/* Social Logins */}
        <div className="flex flex-col gap-y-[18px] mt-[18px]">
          <button
            onClick={() => handleLoginWithGoogle()}
            className="flex gap-3 justify-center border border-[#1E1E1E] py-[14px] px-[16px] rounded-[10px] items-center"
          >
            <GoogleSvg />
            <h1 className="text-textSecondary font-outfit text-lg font-medium leading-[29.52px]">
              Continue with Google
            </h1>
          </button>
          <Link className="flex gap-3 justify-center border border-[#1E1E1E] py-[14px] px-[16px] rounded-[10px] items-center">
            <FacebookLogoSvg />
            <h1 className="text-textSecondary font-outfit text-lg font-medium leading-[29.52px]">
              Continue with Facebook
            </h1>
          </Link>
          <Link className="flex gap-3 justify-center border border-[#1E1E1E] py-[14px] px-[16px] rounded-[10px] items-center">
            <AppleLogoSvg />
            <h1 className="text-textSecondary font-outfit text-lg font-medium leading-[29.52px]">
              Continue with Apple
            </h1>
          </Link>
        </div>

        {/* Footer Links */}
        <div className="max-w-[439px] mx-auto mt-[28px]">
          <h1 className="text-textSecondary font-outfit font-medium leading-[29.52px] text-lg">
            Are you a customer looking to booking an appointment{" "}
            <span className="text-primary font-outfit text-lg leading-[29.52px]">
              Go to BS Business for customer
            </span>
          </h1>
        </div>
        <div className="max-w-[442px] mx-auto mt-[30px] xl:mt-24 mb-[30px]">
          <h1 className="text-textSecondary font-outfit text-lg leading-[29.52px]">
            This site is protected by reCAPTCHA Google Privacy Policy and Terms
            of Service apply
          </h1>
        </div>
      </div>
    </section>
  );
};

export default Login;
