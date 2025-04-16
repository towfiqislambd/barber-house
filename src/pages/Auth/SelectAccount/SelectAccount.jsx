import {
  LeftSideArrowSvg,
  SelectAccountSvg,
  SupportSvg,
} from "@/components/svgContainer/SvgContainer";
import loginImg from "../../../assets/images/loginImage.png";
import { Link } from "react-router-dom";

const SelectAccount = () => {
  return (
    <section className="container flex flex-col xl:flex-row gap-[20px] xl:gap-[196px]">
      {/* This is the left side div */}
      <div className="mt-3">
        <Link to={"/business"}>
          <LeftSideArrowSvg />
        </Link>
        <img
          className="mt-3 w-full xl:w-[750px] xl:h-[850px] h-[200px] rounded-[32px] object-cover"
          src={loginImg}
          alt=""
        />
      </div>
      {/* This is the right side div */}
      <div className="xl:mt-[167px] w-full xl:w-[40%]">
        <h1 className="text-textSecondary font-outfit text-[32px] xl:text-[40px] font-semibold leading-[52.8px] text-center max-w-[570px] ml-[13px]">
          Log in
        </h1>
        <p className="text-[#8993A4] font-outfit text-lg leading-[29.52px] mt-2 text-center">
          How you want to join BS
        </p>
        {/*  */}
        <div className="mt-[60px] space-y-6 ">
          {/*  */}
          <div className="border border-[#797979] px-[20px]  xl:px-8 py-[20px] xl:py-7 flex items-center justify-between rounded-[10px] group hover:bg-[#E0E0E0] ease-out duration-300 cursor-pointer">
            <Link to={"/business/login"} className="">
              <h1 className="text-textSecondary font-outfit text-lg font-medium leading-[29.52px]">
                Log in BS for customers
              </h1>
              <p className="text-textLight font-outfit text-base leading-[26.24px]">
                Book salons and spa near your address
              </p>
            </Link>
            <SelectAccountSvg />
          </div>
          {/*  */}
          <div className="border border-[#797979] px-[20px]  xl:px-8 py-[20px] xl:py-7 flex items-center justify-between rounded-[10px] group hover:bg-[#E0E0E0] ease-out duration-300 cursor-pointer">
            <Link to={"/business/login"} className="">
              <h1 className="text-textSecondary font-outfit text-lg font-medium leading-[29.52px]">
                Log in BS for salon or spamanagemnets
              </h1>
              <p className="text-textLight font-outfit text-base leading-[26.24px]">
                Manage and grow your business
              </p>
            </Link>
            <SelectAccountSvg />
          </div>
        </div>

        {/*  */}
        <div className="pt-[300px] flex justify-center gap-1 items-center">
          <SupportSvg />
          <h1 className="text-[#008A90] font-outfit text-lg font-medium">
            Support
          </h1>
        </div>
      </div>
    </section>
  );
};

export default SelectAccount;
