import {
  ContinueButtonArrowSvg,
  LeftSideArrowSvg,
} from "@/components/svgContainer/SvgContainer";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

const OnlineProfileStepTwo = ({ step, setStep }) => {
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
        <div className="flex gap-4">
          <h1 className="mt-[10px] text-[#0D1619] font-manrope text-base font-bold leading-6">
            Preview
          </h1>
          <button className="border border-[#0D1619] px-[18px] py-[10px] rounded-[10px] text-[#0D1619] font-manrope text-base font-bold leading-6">
            Close
          </button>
          <button
            onClick={() => {
              setStep(step + 1);
            }}
            to={"/businessDashboard/businessContainer"}
            className="bg-[#0D1619] rounded-[10px] text-[#FFF] w-[135px] flex items-center justify-center gap-[6px]"
          >
            Continue
            <ContinueButtonArrowSvg />
          </button>
        </div>
      </div>
      {/*  */}
      <div className="max-w-[608px] mx-auto xl:mt-[84px] mt-10 font-semibold leading-[43.2px] px-5 md:px-0 mb-5 md:mb-0">
        <h1 className="text-textColor font-outfit text-3xl lg:text-4xl">
          Tell us a bit about this venue
        </h1>
        <p className="text-[#545454] text-sm lg:text-base font-medium leading-6 mt-3">
          Add the display name you had like to be known by, along with a short
          description of your business and the services you offer
        </p>
        {/*  */}
        <div className="grid w-full  items-center gap-1.5 lg:mt-8 mt-4">
          <Label
            className="text-[#000] font-manrope text-base font-semibold leading-6"
            htmlFor="email"
          >
            Display Name
          </Label>
          <Input
            className="lg:w-[608px] w-full lg:h-[55px] h-12 px-4 rounded-lg"
            type="text"
            placeholder="Shihab"
          />
        </div>
        {/*  */}
        <div className="grid w-full gap-1.5 mt-4">
          <Label
            className="text-[#000] font-manrope text-base font-semibold leading-6"
            htmlFor="message"
          >
            About
          </Label>
          <Textarea
            className="h-[130px]"
            placeholder="Type your message here."
            id="message"
          />
          <p className="text-[#000] font-manrope text-sm leading-[21px]">
            A minimum of 200 characters is required
          </p>
        </div>
      </div>
    </section>
  );
};

export default OnlineProfileStepTwo;
