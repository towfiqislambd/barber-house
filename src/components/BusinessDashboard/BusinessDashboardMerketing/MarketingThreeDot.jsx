import { ThreeDotSvg } from "@/components/svgContainer/SvgContainer";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import DisabledAutomation from "../Modals/DisabledAutomation";
import DeleteAutomation from "../Modals/DeleteAutomation";
import ResetAutomation from "../Modals/ResetAutomation";
import { Link } from "react-router-dom";

const MarketingThreeDot = () => {
  return (
    <Popover>
      <PopoverTrigger>
        <button>
          <ThreeDotSvg />
        </button>
      </PopoverTrigger>
      <PopoverContent className="w-[150px] p-4 space-y-[14px]">
        <Link
          to={"/businessDashboard/automationdetailspage"}
          className="text-[#545454] font-medium"
        >
          Overview
        </Link>
        <Link
          to={"/businessDashboard/businessdashboardeditpage"}
          className="text-[#545454] font-medium block"
        >
          Edit
        </Link>
        <p className="text-[#545454] font-medium">
          <DisabledAutomation />
        </p>
        <p className="">
          <DeleteAutomation />{" "}
        </p>
        <p className="text-[#D21837] font-medium">
          <ResetAutomation />
        </p>
      </PopoverContent>
    </Popover>
  );
};

export default MarketingThreeDot;
