import {
  AppleLogoSvg,
  FacebookLogoSvg,
  GoogleSvg,
  LeftSideArrowSvg,
} from "@/components/svgContainer/SvgContainer";
import loginImg from "../../../assets/images/loginImage.png";
import orImg from "../../../assets/images/login/or.png";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <section className="container flex flex-col xl:flex-row gap-[30px] xl:gap-[174px] items-center">
      {/* This is the left side div */}
      <div className="mt-3 w-full xl:w-auto">
        <Link to={"/business/selectaccount"}>
          <LeftSideArrowSvg />
        </Link>
        <img
          className="mt-3 w-[100%] xl:w-[750px] h-[200px] xl:h-[850px] rounded-[32px] object-cover"
          src={loginImg}
          alt=""
        />
      </div>
      {/* This is the right side div */}
      <div className="">
        <h1 className="text-textSecondary font-outfit text-[24px] xl:text-[40px] mb-[20px] font-semibold xl:leading-[52.8px] text-center">
          BS Business for professionals
        </h1>
        <p className="text-[#8993A4] font-outfit text-lg leading-[29.52px] text-center">
          Create an account or login to manage your business
        </p>
        {/*  */}
        <div className="relative flex flex-col justify-center text-center mt-[34px]">
          <div className="absolute top-[-16px] left-2 bg-white z-40 p-1">
            <h1>Email</h1>
          </div>
          <input
            className="border border-[#545454] p-4 rounded-[10px]"
            type="email"
            placeholder="Enter email here"
          />
          {/*  */}
          <button className="bg-primary py-4 px-6 rounded-2xl text-[#FFF] font-manrope text-xl font-semibold mt-6 hover:bg-primaryLight hover:text-black hover:border-primary border">
            Log in
          </button>
          {/*  */}
          <img className="mt-[18px]" src={orImg} alt="" />
          {/*  */}
          <div className="flex flex-col gap-y-[18px] mt-[18px]">
            {/* Google Button */}
            <Link className="flex gap-3 justify-center border border-[#1E1E1E] py-[14px] px-[16px] rounded-[10px] items-center">
              <GoogleSvg />
              <h1 className="text-textSecondary font-outfit text-lg font-medium leading-[29.52px]">
                Continue with Google
              </h1>
            </Link>
            {/* Facebook Button */}
            <Link className="flex gap-3 justify-center border border-[#1E1E1E] py-[14px] px-[16px] rounded-[10px] items-center">
              <FacebookLogoSvg />
              <h1 className="text-textSecondary font-outfit text-lg font-medium leading-[29.52px]">
                Continue with Facebook
              </h1>
            </Link>
            {/* Apple Button */}
            <Link className="flex gap-3 justify-center border border-[#1E1E1E] py-[14px] px-[16px] rounded-[10px] items-center">
              <AppleLogoSvg />
              <h1 className="text-textSecondary font-outfit text-lg font-medium leading-[29.52px]">
                Continue with Apple
              </h1>
            </Link>
          </div>
          {/*  */}
          <div className="max-w-[439px] mx-auto mt-[28px]">
            <h1 className="text-textSecondary font-outfit font-medium leading-[29.52px] text-lg">
              Are you a customer looking to booking an appointment{" "}
              <span className="text-primary font-outfit text-lg leading-[29.52px]">
                Go to BS Business for customer
              </span>
            </h1>
          </div>
          {/*  */}
          <div className="max-w-[442px] mx-auto  mt-[30px] xl:mt-24 mb-[30px]">
            <h1 className="text-textSecondary font-outfit text-lg leading-[29.52px]">
              This site is protected by reCAPTCHA Google Privacy Policy and
              Terms of Service apply
            </h1>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Login;
