import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { DecreaseArrowSvg } from "../svgContainer/SvgContainer";

const PriceChangesSelect = () => {
  return (
    <Select>
      <SelectTrigger className="2xl:w-[254px] h-[56px]">
        <div className="flex gap-2">
          <DecreaseArrowSvg />
          <SelectValue placeholder="Decrease" />
        </div>
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectLabel>Select Time</SelectLabel>
          <SelectItem value="Increase">Increase</SelectItem>
          <SelectItem value="Decrease">Decrease</SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  );
};

export default PriceChangesSelect;
