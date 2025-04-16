import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const OnlineSelect = () => {
  return (
    <Select>
      <SelectTrigger className="w-[140px] h-[52px]">
        <SelectValue placeholder="10:00" />
      </SelectTrigger>
      <SelectContent>
        <SelectGroup>
          <SelectLabel>Time</SelectLabel>
          <SelectItem value="10:00">10:00</SelectItem>
          <SelectItem value="12:00">12:00</SelectItem>
          <SelectItem value="2:00">2:00</SelectItem>
        </SelectGroup>
      </SelectContent>
    </Select>
  );
};

export default OnlineSelect;
