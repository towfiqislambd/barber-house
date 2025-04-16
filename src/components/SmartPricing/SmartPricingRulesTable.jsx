import PriceChangesSelect from "../BusinessDashboardSettings/PriceChangesSelect";
import SmartPricingRulesCard from "../BusinessDashboardSettings/SmartPricingRulesCard";
import { Checkbox } from "@/components/ui/checkbox";
import { DeleteArrowSvg, PercentageSvg } from "../svgContainer/SvgContainer";
import PercentageTabs from "./PercentageTabs";
import { Input } from "@/components/ui/input";

const SmartPricingRulesTable = ({
  isChecked,
  isVisible,
  handleDelete,
  handleCheckboxChange,
  days,
}) => {
  return (
    <div className="flex flex-col xl:flex-row lg:gap-6 xl:gap-12 items-start xl:items-center mb-5 w-full">
      {/* Checkbox Section */}
      <div className="flex gap-2 items-center w-full sm:w-auto">
        <Checkbox
          id="terms"
          checked={isChecked}
          onCheckedChange={handleCheckboxChange}
        />
        <p className="text-[#000] font-manrope text-lg sm:text-xl font-medium leading-6">
          {days}
        </p>
      </div>

      {/* Conditional Rendering */}
      {isChecked && isVisible ? (
        <div className="flex flex-col lg:flex-row flex-wrap md:flex-nowrap lg:items-center gap-6 w-full">
          {/* Smart Pricing Rules */}
          <div className="flex items-center gap-4">
            <SmartPricingRulesCard />
            <p className="text-textColor font-outfit text-2xl font-semibold">
              -
            </p>
            <SmartPricingRulesCard />
          </div>
          {/* Price Changes Select */}
          <div className="w-full sm:w-auto">
            <PriceChangesSelect />
          </div>
          {/* Percentage section */}
          <div className="relative sm:w-full md:w-full lg:w-[187px]">
            <Input
              className="w-full h-[50px] md:h-[56px]"
              type="number"
              placeholder="10"
            />
            <button className="absolute top-3 left-2 md:top-4">
              <PercentageSvg />
            </button>
          </div>
          {/* Percentage Tabs and Delete Icon */}
          <div className="flex items-center justify-between sm:justify-start gap-4 w-full sm:w-auto">
            <PercentageTabs />
            <div className="cursor-pointer" onClick={handleDelete}>
              <DeleteArrowSvg />
            </div>
          </div>
        </div>
      ) : (
        <p className="text-[#757575] font-manrope text-sm font-semibold leading-6 mt-2">
          Nothing to show
        </p>
      )}
    </div>
  );
};

export default SmartPricingRulesTable;
