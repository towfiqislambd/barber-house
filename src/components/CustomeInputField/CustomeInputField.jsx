import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { format } from "date-fns";
import { CalendarIcon } from "lucide-react";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectGroup,
  SelectItem,
} from "@/components/ui/select";

import { useState } from "react";

const CustomeInputField = () => {
  const [openDate, setOpenDate] = useState(false);
  const [openDateOne, setOpenDateOne] = useState(false);
  const [openDateTwo, setOpenDateTwo] = useState(false);
  const [date, setDate] = useState(null);
  const [value, setValue] = useState("");
  return (
    <>
      <div className="grid w-full items-center gap-[10px] mt-6">
        <Label className="text-textColor font-manrope text-base font-semibold leading-6">
          Title
        </Label>
        <Input
          className="h-14"
          type="text"
          id="email"
          placeholder="e,g lunch meeting (optional)"
        />
      </div>
      {/* This is the date picker */}
      <div className="grid w-full items-center gap-[10px] mt-6">
        <Label className="text-textColor font-manrope text-base font-semibold leading-6">
          Date
        </Label>
        <Popover open={openDate} onOpenChange={setOpenDate}>
          <PopoverTrigger asChild>
            <label className="flex w-full p-2 rounded-md cursor-pointer gap-2 items-center border">
              <CalendarIcon className="h-5 text-gray-500 w-5" />
              <input
                readOnly
                className="border-none cursor-pointer focus:outline-none focus:ring-0 placeholder:text-gray-400 w-full h-10"
                type="text"
                placeholder="Choose date"
                value={date ? format(date, "PPP") : ""}
              />
            </label>
          </PopoverTrigger>
          <PopoverContent
            className="w-auto p-0"
            align="start"
            side="bottom"
            style={{
              zIndex: 9999,
              position: "fixed",
            }}
            avoidCollisions={false}
            portalled={true}
          >
            <Calendar
              mode="single"
              selected={date}
              onSelect={selectedDate => {
                setDate(selectedDate);
                setOpenDate(false);
              }}
              initialFocus
            />
          </PopoverContent>
        </Popover>
      </div>
      {/* From To */}
      <div className="flex gap-5">
        {/* This is the From Date picker */}
        <div className="grid w-full items-center gap-[10px] mt-6">
          <Label className="text-textColor font-manrope text-base font-semibold leading-6">
            From
          </Label>
          <Popover open={openDateOne} onOpenChange={setOpenDateOne}>
            <PopoverTrigger asChild>
              <label className="flex w-full p-2 rounded-md cursor-pointer gap-2 items-center border">
                <CalendarIcon className="h-5 text-gray-500 w-5" />
                <input
                  readOnly
                  className="border-none cursor-pointer focus:outline-none focus:ring-0 placeholder:text-gray-400 w-full h-10"
                  type="text"
                  placeholder="Choose date"
                  value={date ? format(date, "PPP") : ""}
                />
              </label>
            </PopoverTrigger>
            <PopoverContent
              className="w-auto p-0"
              align="start"
              side="bottom"
              style={{
                zIndex: 99999,
                position: "fixed",
              }}
              avoidCollisions={false}
              portalled={true}
            >
              <Calendar
                mode="single"
                selected={date}
                onSelect={selectedDate => {
                  setDate(selectedDate);
                  setOpenDate(false);
                }}
                initialFocus
              />
            </PopoverContent>
          </Popover>
        </div>
        {/* This is the To Date picker */}
        <div className="grid w-full items-center gap-[10px] mt-6">
          <Label className="text-textColor font-manrope text-base font-semibold leading-6">
            To
          </Label>
          <Popover open={openDateTwo} onOpenChange={setOpenDateTwo}>
            <PopoverTrigger asChild>
              <label className="flex w-full p-2 rounded-md cursor-pointer gap-2 items-center border">
                <CalendarIcon className="h-5 text-gray-500 w-5" />
                <input
                  readOnly
                  className="border-none cursor-pointer focus:outline-none focus:ring-0 placeholder:text-gray-400 w-full h-10"
                  type="text"
                  placeholder="Choose date"
                  value={date ? format(date, "PPP") : ""}
                />
              </label>
            </PopoverTrigger>
            <PopoverContent
              className="w-auto p-0"
              align="start"
              side="bottom"
              style={{
                zIndex: 9999,
                position: "fixed",
              }}
              avoidCollisions={false}
              portalled={true}
            >
              <Calendar
                mode="single"
                selected={date}
                onSelect={selectedDate => {
                  setDate(selectedDate);
                  setOpenDate(false);
                }}
                initialFocus
              />
            </PopoverContent>
          </Popover>
        </div>
      </div>
      {/* Team Member */}
      <div className="grid w-full items-center gap-[10px] mt-6">
        <Label className="text-textColor font-manrope text-base font-semibold leading-6">
          Team Member
        </Label>
        <Input
          className="h-14"
          type="text"
          id="text"
          placeholder="Mamunur rahman shihab"
        />
      </div>
      {/* Frequency */}
      <div className="grid w-full items-center gap-[10px] mt-6 z-[1200]">
        <label className="text-[#000] font-manrope text-base font-semibold leading-6">
          Frequency
        </label>
        <div className="z-[15000]">
          <Select>
            <SelectTrigger className="w-full h-[56px] text-textColor font-manrope text-sm font-semibold">
              <SelectValue placeholder="Doesn't repeat" />
            </SelectTrigger>
            <SelectContent className="z-[16000]">
              <SelectGroup>
                <SelectItem value="none">Does not repeat</SelectItem>
                <SelectItem value="daily">Every day</SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
        </div>
      </div>
      {/* Description */}
      <div className="grid w-full gap-1.5 mt-4 ">
        <Label className="text-textColor font-manrope text-base font-semibold leading-6">
          Description (Optional)
        </Label>
        <Textarea
          className="h-[89px]"
          placeholder="Add description or note"
          id="message"
        />
      </div>
      {/* This is the checkbox */}
      <div className="flex items-center space-x-2 mt-4">
        <Checkbox id="terms" />
        <label
          htmlFor="terms"
          className="text-base text-textColor font-manrope font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
        >
          Online booking allowed during blocked time
        </label>
      </div>
      {/* Delete Modal */}
      <div className="flex items-center gap-[15px] border px-[35px] py-[42px] mt-3 mb-14">
        <button className="px-[18px] py-4 bg-[#008A90] text-white rounded-[10px] font-bold w-full font-manrope text-base leading-6">
          Save
        </button>
      </div>
    </>
  );
};

export default CustomeInputField;
