import {
  ContinueButtonArrowSvg,
  LeftSideArrowSvg,
} from "@/components/svgContainer/SvgContainer";
import step12Img from "../../../../assets/images/online-profile/step12.png";
import { Link } from "react-router-dom";
const OnlineProfileStepTwelve = ({ step, setStep }) => {
  return (
    <section className="px-[18px] xl:px-0 pb-10 lg:pb-0">
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
            to={"/businessDashboard/freshaMarketplace"}
            className="bg-[#0D1619] rounded-[10px] text-[#FFF] w-[135px] flex items-center justify-center gap-[6px]"
          >
            Continue
            <ContinueButtonArrowSvg />
          </Link>
        </div>
      </div>
      {/*  */}
      <div className="max-w-[752px] mx-auto mt-5 2xl:mt-0">
        <h1 className="text-textColor font-outfit text-2xl lg:text-3xl xl:text-4xl font-semibold lg:leading-[43.2px]">
          Enable online bookings on Fresha Marketplace
        </h1>
        <figure className="xl:w-[752px] w-full lg:h-[425px] h-[250px] mt-8">
          <img className="w-full h-full object-cover" src={step12Img} alt="" />
        </figure>
        <p className="text-textColor font-manrope text-sm sm:text-base lg:text-lg font-medium leading-[27px] mt-[13px]">
          By enabling online bookings on Fresha, your venue will be uploaded and
          made discoverable to clients through the Fresha marketplace, allowing
          them to book your services directly.{" "}
          <span className="text-[#055AD9]">Learn more</span>
        </p>
      </div>
    </section>
  );
};

export default OnlineProfileStepTwelve;
