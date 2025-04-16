import {
  ContinueButtonArrowSvg,
  LeftSideArrowSvg,
} from "@/components/svgContainer/SvgContainer";
import { Link } from "react-router-dom";
import step1Image from "../../../../assets/images/online-profile/step3Img.png";

const OnlineProfileStepEleven = ({ step, setStep }) => {
  return (
    <section className="px-[14px] md:px-0">
      <div className="flex justify-between container mt-9">
        <button
          onClick={() => {
            setStep(step - 1);
          }}
        >
          <LeftSideArrowSvg />
        </button>
        <div className="flex gap-4">
          <button className="border border-[#0D1619] px-[18px] py-[10px] rounded-[10px] text-[#0D1619] font-manrope text-base font-bold leading-6">
            Close
          </button>
          <Link
            onClick={() => {
              setStep(step + 1);
            }}
            to={"/businessDashboard/businessContainer"}
            className="bg-[#0D1619] rounded-[10px] text-[#FFF] w-[135px] flex items-center justify-center gap-[6px]"
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
            Step 3
          </h1>
          <p className="mt-[6px] text-textColor font-outfit text-3xl sm:text-[36px] font-semibold sm:leading-[43.2px]">
            Accept online bookings on Fresha Marketplace
          </p>
          <p className="max-w-[608px] sm:mt-6 mt-2 text-textLight font-manrope text-sm sm:text-base font-medium leading-6">
            With a complete profile you are ready to start taking online
            bookings directly and on the Fresha marketplace
          </p>
        </div>
      </div>
    </section>
  );
};

export default OnlineProfileStepEleven;
