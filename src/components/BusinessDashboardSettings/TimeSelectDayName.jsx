import { Checkbox } from "@/components/ui/checkbox";
import EditOpeningTimeSelect from "./EditOpeningTimeSelect";
const TimeSelectDayName = ({ isChecked, setIsChecked, dayName }) => {
  return (
    <section>
      {/* Checkbox for Monday */}
      <div className="flex gap-[7px] items-center mt-6">
        <Checkbox id="terms" onCheckedChange={setIsChecked} />
        <p className="text-[#000] font-manrope text-xl font-medium leading-[30px]">
          {dayName}
        </p>
      </div>
      {/* Conditionally Rendered Time Selection */}
      {isChecked && (
        <div className="flex gap-4 items-center mt-[17px]">
          <EditOpeningTimeSelect />
          <p className="text-textColor font-outfit text-[32px] font-semibold leading-[38.4px]">
            -
          </p>
          <EditOpeningTimeSelect />
        </div>
      )}
      <div className="border border-[#B3BAC5] mb-4 mt-8"></div>
    </section>
  );
};

export default TimeSelectDayName;
