import {
  ContinueButtonArrowSvg,
  LeftSideArrowSvg,
} from "@/components/svgContainer/SvgContainer";
import { Link } from "react-router-dom";
import step1Image from "../../../../assets/images/online-profile/step1.png";

const OnlineProfileStepOne = ({ step, setStep }) => {
  return (
    <section className="px-[14px] md:px-0">
      <div className="flex justify-between container mt-9 ">
        <Link to={"/businessDashboard/tellusaboutyourbusiness"}>
          <LeftSideArrowSvg />
        </Link>
        <div className="flex gap-4">
          <Link
            onClick={() => {
              setStep(step + 1);
            }}
            to={"/businessDashboard/businessContainer"}
            className="bg-[#0D1619] px-[18px] py-[10px] rounded-[10px] text-[#FFF] flex items-center justify-center gap-[6px]"
          >
            Continue
            <ContinueButtonArrowSvg />
          </Link>
        </div>
      </div>
      {/*  */}
      <div className="container flex flex-col lg:flex-row justify-center items-center mt-6 md:mt-12 lg:mt-36 4xl:mt-[170px] gap-6">
        <img
          className="w-[148px] h-[148px] object-cover"
          src={step1Image}
          alt="Not Found"
        />
        <div>
          <h1 className="text-textColor font-manrope text-base font-medium leading-6">
            Step 1
          </h1>
          <p className="mt-[6px] text-textColor font-outfit text-3xl sm:text-[36px] font-semibold sm:leading-[43.2px]">
            Tell us about your business
          </p>
          <p className="max-w-[608px] sm:mt-6 mt-2 text-textLight font-manrope text-sm sm:text-base font-medium leading-6">
            Provide the basic detalls of your venue, including its name, a brief
            description, contact number, and email address and location. These
            details help clients get to know you and get in touch if they need
            help.
          </p>
        </div>
      </div>
    </section>
  );
};

export default OnlineProfileStepOne;
