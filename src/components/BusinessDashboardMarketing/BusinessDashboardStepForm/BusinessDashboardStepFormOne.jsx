import {
  ContinueButtonArrowSvg,
  LeftSideArrowSvg,
} from "@/components/svgContainer/SvgContainer";
import { Link } from "react-router-dom";
import alertImg from "../../../assets/images/business-dashboard-stepform/appointmentRemainderImg.png";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const BusinessDashboardStepFormOne = ({ step, setStep }) => {
  return (
    <section>
      <div className="flex justify-between container mt-9">
        <Link to={"/businessDashboard/marketing"}>
          <LeftSideArrowSvg />
        </Link>
        <div className="flex gap-4">
          <button className="border border-[#0D1619] px-[18px] py-[10px] rounded-[10px] text-[#0D1619] font-manrope text-base font-bold leading-6">
            Close
          </button>
          <Link
            onClick={() => {
              setStep(step + 1);
            }}
            className="bg-[#0D1619] rounded-[10px] text-[#FFF] w-[135px] flex items-center justify-center gap-[6px]"
          >
            Next step
            <ContinueButtonArrowSvg />
          </Link>
        </div>
      </div>
      <div className="md:max-w-[608px] mx-auto px-6 md:px-0">
        {/* This is the Setup Automation */}
        <div>
          <p className="text-textLight font-manrope text-base font-medium leading-6">
            Appointment reminder
          </p>
          <p className="mt-[11px] text-[#000] font-outfit text-3xl lg:text-[36px] font-semibold leading-[43.2px ]">
            Setup automation
          </p>
        </div>
        {/*  */}
        <div className="border border-[#DFE1E6] lg:mt-8 mt-4 lg:p-12 p-6 rounded-2xl">
          <p className="text-[#000] font-outfit text-2xl lg:text-[28px] font-semibold leading-[33.6px]">
            Trigger
          </p>
          <p className="text-textLight mt-[11px] font-manrope text-base font-medium leading-6">
            Review settings related to the triggering of a campaign
          </p>
          {/*  */}
          <div className="mt-6 flex flex-col md:flex-row gap-[11px] items-center">
            <figure className="bg-[#FFF4CC80] lg:w-[72px] lg:h-[72px] flex items-center justify-center rounded-2xl">
              <img className="w-8 h-8 object-cover" src={alertImg} alt="" />
            </figure>
            <div>
              <p className="text-[#000] font-manrope text-base font-bold leading-6">
                Appointment reminder
              </p>
              <p className="text-textLight font-manrope text-base font-medium leading-6">
                Sent to clients before an upcoming appointment
              </p>
            </div>
          </div>
          {/*  */}
          <div className="mt-6">
            <label className="text-[#000] font-manrope text-base font-semibold leading-6">
              Reminder advance notice
            </label>
            <Select>
              <SelectTrigger className="lg:w-[512px] lg:h-[57px] h-12 mt-2 text-textColor font-manrope text-sm font-semibold">
                <SelectValue placeholder="2 days" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectItem
                    className="text-textColor font-manrope text-sm font-semibold"
                    value="apple"
                  >
                    3 days
                  </SelectItem>
                  <SelectItem
                    className="text-textColor font-manrope text-sm font-semibold"
                    value="banana"
                  >
                    2 days
                  </SelectItem>
                  <SelectItem
                    className="text-textColor font-manrope text-sm font-semibold"
                    value="blueberry"
                  >
                    1 days
                  </SelectItem>
                  <SelectItem
                    className="text-textColor font-manrope text-sm font-semibold"
                    value="grapes"
                  >
                    2 days
                  </SelectItem>
                  <SelectItem
                    className="text-textColor font-manrope text-sm font-semibold"
                    value="pineapple"
                  >
                    3 days
                  </SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BusinessDashboardStepFormOne;
