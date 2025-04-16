import { Link } from "react-router-dom";
import {
  ContinueButtonArrowSvg,
  LeftSideArrowSvg,
  SelectServicesSvg,
} from "../svgContainer/SvgContainer";
import AllServicesModal from "../BusinessDashboard/Modals/AllServicesModal";

const SmartPricingStepFormTwo = ({ step, setStep }) => {
  return (
    <section>
      <div className="flex justify-between container mt-9">
        <Link
          onClick={() => {
            setStep(step - 1);
          }}
        >
          <LeftSideArrowSvg />
        </Link>
        <div className="flex gap-4">
          <button className="border border-[#0D1619] lg:px-[18px] px-3 lg:py-[10px] py-2 rounded-[10px] text-[#0D1619] font-manrope text-base font-bold leading-6">
            Close
          </button>
          <Link
            onClick={() => {
              setStep(step + 1);
            }}
            className="bg-[#0D1619] rounded-[10px] text-[#FFF] lg:w-[135px] px-2 lg:px-0 flex items-center justify-center lg:gap-[6px]"
          >
            Next step
            <ContinueButtonArrowSvg />
          </Link>
        </div>
      </div>
      {/*  */}
      <div className="md:max-w-[608px] mx-auto px-6 md:px-0">
        {/* This is the Setup Automation */}
        <div>
          <p className="text-textLight font-manrope text-base font-medium leading-6">
            Set up smart pricing
          </p>
          <p className="mt-[11px] text-[#000] font-outfit text-[36px] font-semibold leading-[43.2px ]">
            Select services
          </p>
          <p className="text-textLight font-manrope text-base font-medium leading-6">
            Choose which services can be booked with smart pricing.
          </p>
        </div>
        {/*  */}
        <div className="lg:mt-12 mt-6">
          <p className="text-[#000] font-manrope text-base font-semibold leading-6">
            Apply to
          </p>
          <div className="border border-[#DFE1E6] mt-6 rounded-lg">
            <div className="flex justify-between md:py-[18px] py-3 md:px-6 px-3 relative items-center">
              <p className="text-textColor font-manrope text-sm font-semibold">
                All services
              </p>
              <button className="absolute md:top-2 -top-[2px] right-2">
                <AllServicesModal />
              </button>
            </div>
          </div>
          {/*  */}
          <div className="mt-8 py-6 bg-[#F0F0FF] px-4 rounded-[10px]">
            <div className="flex items-center gap-[9px]">
              <SelectServicesSvg />
              <p className="lg:max-w-[547px] text-textColor font-manrope text-sm font-semibold">
                Prices for selected services adjust automatically for online
                appointments, while team members can manually apply smart
                pricing when booking from the calendar.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SmartPricingStepFormTwo;
