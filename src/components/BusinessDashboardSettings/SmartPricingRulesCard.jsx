import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const SmartPricingRulesCard = () => {
  return (
    <Select>
      <SelectTrigger className="2xl:w-[97px] h-[56px]">
        <SelectValue placeholder="10:00" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectLabel>Select Time</SelectLabel>
          <SelectItem value="12:00 PM">12:00 PM</SelectItem>
          <SelectItem value="1:00 PM">1:00 PM</SelectItem>
          <SelectItem value="2:00 PM">2:00 PM</SelectItem>
          <SelectItem value="3:00 PM">3:00 PM</SelectItem>
          <SelectItem value="4:00 PM">4:00 PM</SelectItem>
          <SelectItem value="5:00 PM">5:00 PM</SelectItem>
          <SelectItem value="6:00 PM">6:00 PM</SelectItem>
          <SelectItem value="7:00 PM">7:00 PM</SelectItem>
          <SelectItem value="8:00 PM">8:00 PM</SelectItem>
          <SelectItem value="9:00 PM">9:00 PM</SelectItem>
          <SelectItem value="10:00 PM">10:00 PM</SelectItem>
          <SelectItem value="11:00 PM">11:00 PM</SelectItem>
          <SelectItem value="12:00 AM">12:00 AM</SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  );
};

export default SmartPricingRulesCard;
