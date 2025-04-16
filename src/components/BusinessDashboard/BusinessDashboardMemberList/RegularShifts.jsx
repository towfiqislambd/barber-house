import { Checkbox } from "@/components/ui/checkbox";
import { DeleteArrowSvg } from "../../svgContainer/SvgContainer";
import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectLabel,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";
const RegularShifts = ({
    isChecked,
    isVisible,
    handleDelete,
    handleCheckboxChange,
    days,
}) => {
    return (
        <div className="flex gap-[100px] items-center mb-5">
            {/* Checkbox Section */}
            <div className="flex gap-[7px] items-center w-[100px]">
                <Checkbox
                    id="terms"
                    checked={isChecked}
                    onCheckedChange={handleCheckboxChange}
                />
                <p className="text-[#000] font-manrope text-xl font-medium leading-[30px]">
                    {days}
                </p>
            </div>

            {/* Conditional Rendering */}
            {isChecked && isVisible ? (
                <div className="flex gap-16 items-center max-w-[100px]">
                    {/* Smart Pricing Rules */}
                    <div className="flex items-center gap-4">
                        <Select>
                            <SelectTrigger className="w-[250px] h-[56px]">
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
                        <p className="text-textColor font-outfit text-[32px] font-semibold leading-[38.4px]">
                            -
                        </p>
                        <Select>
                            <SelectTrigger className="w-[250px] h-[56px]">
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
                    </div>

                    {/* Percentage Tabs and Delete Icon */}
                    <div className="flex items-center gap-5">
                        <div className="cursor-pointer" onClick={handleDelete}>
                            <DeleteArrowSvg />
                        </div>
                    </div>
                </div>
            ) : (
                <p className="text-[#757575] font-manrope text-sm font-semibold leading-6">
                    Nothing to show
                </p>
            )}
        </div>
    );
};

export default RegularShifts;
