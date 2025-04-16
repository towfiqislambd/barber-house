import {
  ChannelEmailSvg,
  ContinueButtonArrowSvg,
  EditContentSvg,
  LeftSideArrowSvg,
} from "@/components/svgContainer/SvgContainer";
import { Link } from "react-router-dom";
import { Switch } from "antd";

const BusinessDashboardStepFormTwo = ({ step, setStep }) => {
  const onChange = (checked) => {
    console.log(`switch to ${checked}`);
  };
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
          <p className="mt-[12px] text-[#0D1619] font-manrope text-base font-bold leading-6">
            preview
          </p>
          <button className="border border-[#0D1619] px-[18px] py-[10px] rounded-[10px] text-[#0D1619] font-manrope text-base font-bold leading-6">
            Close
          </button>
          <Link
            to={"/businessDashboard/appointmentremainder"}
            className="bg-[#0D1619] rounded-[10px] text-[#FFF] lg:w-[135px] px-3 lg:px-0 flex items-center justify-center gap-[6px]"
          >
            Next step
            <ContinueButtonArrowSvg />
          </Link>
        </div>
      </div>
      <div className="lg:max-w-[608px] mx-auto px-6 md:px-0 mt-5 md:mt-0">
        {/* This is the Setup Automation */}
        <div>
          <p className="text-textLight font-manrope text-base font-medium leading-6">
            Appointment reminder
          </p>
          <p className="mt-[11px] text-[#000] font-outfit text-3xl md:text-[36px] font-semibold leading-[43.2px ]">
            Channel overview
          </p>
        </div>
        {/*  */}
        <div className="border border-[#DFE1E6] lg:mt-8 mt-4 lg:p-12 p-6 rounded-2xl">
          {/* This is the email section */}
          <div className="flex justify-between items-center">
            <div className="flex items-center gap-[9px]">
              <ChannelEmailSvg />
              <p className="text-textColor font-manrope text-xl md:text-2xl font-semibold leading-9">
                Email
              </p>
            </div>
            <Switch defaultChecked onChange={onChange} />
          </div>
          {/*  */}
          <p className="text-textLight font-manrope text-base font-medium leading-6 lg:mt-6 mt-3">
            Send this automated message via email.
          </p>
          {/*  */}
          <div className="flex justify-between items-center mt-6">
            <button className="flex gap-[6px] border border-[#757575] md:py-2 py-1 md:px-3 px-2 rounded-[100px]">
              <EditContentSvg />
              <p className="text-textColor font-manrope text-base font-medium leading-6">
                Edit content
              </p>
            </button>
            <p className="text-textColor font-manrope text-base font-medium leading-6">
              Free
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BusinessDashboardStepFormTwo;
