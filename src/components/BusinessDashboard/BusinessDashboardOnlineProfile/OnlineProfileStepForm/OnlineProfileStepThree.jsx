import {
  ContinueButtonArrowSvg,
  LeftSideArrowSvg,
} from "@/components/svgContainer/SvgContainer";
import { Input } from "@/components/ui/input";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
// import { Input } from "@/components/ui/input";

const OnlineProfileStepThree = ({ step, setStep }) => {
  return (
    <section>
      <div className="flex justify-between container mt-9">
        <button
          onClick={() => {
            setStep(step - 1);
          }}
        >
          <LeftSideArrowSvg />
        </button>
        <div className="flex sm:flex-row flex-col gap-4">
          <h1 className="mt-[10px] text-[#0D1619] font-manrope text-base font-bold leading-6">
            Preview
          </h1>
          <button className="border border-[#0D1619] sm:px-[18px] px-3 sm:py-[10px] py-2 rounded-[10px] text-[#0D1619] font-manrope text-sm sm:text-base font-bold leading-6">
            Save and exit
          </button>
          <button
            onClick={() => {
              setStep(step + 1);
            }}
            to={"/businessDashboard/businessContainer"}
            className="bg-[#0D1619] rounded-[10px] text-[#FFF] sm:w-[135px] py-2 sm:py-0 flex items-center justify-center gap-[6px]"
          >
            Continue
            <ContinueButtonArrowSvg />
          </button>
        </div>
      </div>
      {/*  */}
      <div className="xl:max-w-[608px] md:w-[500px] w-full mx-auto xl:mt-[84px] mt-12 font-semibold leading-[43.2px] container px-5 xl:px-0 pb-10 sm:pb-0">
        <h1 className="text-textColor font-outfit text-4xl">
          How can clients get in touch?
        </h1>
        <h1 className="sm:mt-10 mt-5 font-manrope text-lg font-semibold leading-[27px]">
          Business phone number
        </h1>
        <p className="text-[#545454] text-base font-medium leading-6 md:max-w-[465px] max-w-[400px]">
          The contact number is provided for clients to call if there is a
          problem or they need to cancel
        </p>
        {/*  */}
        <div className="mt-4 ">
          <PhoneInput country="de" regions={"europe"} />
        </div>
        {/*  */}
        <div className="md:w-[465px] sm:w-[420px] w-full border border-t mt-8"></div>
        <div>
          <h1 className="mt-6 font-manrope text-lg font-semibold leading-[27px]">
            Business email
          </h1>
          <p className="text-[#545454] text-base font-medium leading-6 md:max-w-[465px] w-full">
            Choose where clerita replies are sent when they respond to
            appointmerit eias
          </p>
          {/*  */}
          <div className="mt-4">
            <Input
              className="md:w-[465px] sm:w-[420px] w-full h-[51px] text-[#EBECF0] border rounded-[8px]"
              type="email"
              placeholder="mamunur.servey@gmail.com"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default OnlineProfileStepThree;
