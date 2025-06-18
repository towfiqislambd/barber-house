import {
  CheckOne,
  CheckTwo,
  ContinueButtonArrowSvg,
  CrossSignSvg,
  LeftSideArrowSvg,
  RightSignSvg,
} from "@/components/svgContainer/SvgContainer";
import acceptableImg from "../../../../assets/images/online-profile/acceptableImg.png";
import salon2Img from "../../../../assets/images/online-profile/salon2.png";

const OnlineProfileStepSeven = ({ step, setStep, setFormData }) => {
  return (
    <section className="md:px-[14px] sm:px-6 lg:px-0">
      <div className="flex justify-between container mt-9">
        <button
          onClick={() => {
            setStep(step - 1);
          }}
        >
          <LeftSideArrowSvg />
        </button>
        <div className="flex flex-col sm:flex-row gap-4">
          <button className="border border-[#0D1619] px-[18px] py-[10px] rounded-[10px] text-[#0D1619] font-manrope text-base font-bold leading-6">
            Close
          </button>
          <button
            onClick={() => {
              setStep(step + 1);
            }}
            to={"/businessDashboard/businessContainer"}
            className="bg-[#0D1619] rounded-[10px] text-[#FFF] w-[135px] py-3 sm:py-0 flex items-center justify-center gap-[6px]"
          >
            Continue
            <ContinueButtonArrowSvg />
          </button>
        </div>
      </div>
      {/*  */}
      <div className="flex flex-col items-center mt-8 lg:mt-[84px] font-semibold leading-[43.2px]">
        <h1 className="text-textColor font-outfit text-3xl lg:text-4xl">
          Venue image guidelines
        </h1>
        <p className="text-[#545454] text-sm lg:text-base font-medium leading-6 mt-3 max-w-[608px] mx-auto px-4 sm:px-0">
          Quality images that highlight the beauty, comfort and professionalism
          of your space are the best way to immediately capture the attention of
          potential clients.{" "}
          <span className="text-primary font-bold leading-6">Learn more</span>
        </p>
        {/*  */}
        <div className="flex flex-col lg:flex-row md:gap-8 gap-4 items-center lg:mt-10 mt-5">
          <div className="">
            <h1>Acceptable</h1>
            <div className="relative">
              <figure className="w-[340px] sm:w-[420px] md:w-[500px] lg:w-[308px] lg:h-[205px]">
                <img
                  className="object-cover w-full h-full"
                  src={acceptableImg}
                  alt=""
                />
              </figure>
              <p className="absolute top-2 left-2">
                <CheckOne />
              </p>
            </div>
            {/*  */}
            <div className="space-y-1 mt-5">
              <div className="flex sm:gap-2 gap-1 items-center">
                <RightSignSvg />
                <p>Clear interior images of your space</p>
              </div>
              <div className="flex sm:gap-2 gap-1 items-center">
                <RightSignSvg />
                <p>At least 3 images</p>
              </div>
              <div className="flex sm:gap-2 gap-1 items-center">
                <RightSignSvg />
                <p>High resolution images (2727 x 1545)</p>
              </div>
            </div>
          </div>
          <div className="mb-10 sm:mb-0">
            <h1>Unsuitable</h1>
            <div className="relative">
              <figure className="w-[340px] sm:w-[420px] md:w-[500px] lg:w-[308px] lg:h-[205px]">
                <img
                  className="w-full h-full object-cover"
                  src={salon2Img}
                  alt=""
                />
              </figure>

              <p className="absolute top-2 left-2">
                <CheckTwo />
              </p>
            </div>
            {/*  */}
            <div className="space-y-1 mt-5">
              <div className="flex sm:gap-2 gap-1 items-center">
                <CrossSignSvg />
                <p>Stock images</p>
              </div>
              <div className="flex sm:gap-2 gap-1 items-center">
                <CrossSignSvg />
                <p>Logos and brand images</p>
              </div>
              <div className="flex sm:gap-2 gap-1 items-center">
                <CrossSignSvg />
                <p>Close ups of your work (E.g. Nails, Eyes</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OnlineProfileStepSeven;
