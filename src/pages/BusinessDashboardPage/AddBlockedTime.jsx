import {
  EmojiSvg,
  LeftSideArrowSvg,
} from "@/components/svgContainer/SvgContainer";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import EmojiPicker from "emoji-picker-react";
import { useState } from "react";

const AddBlockedTime = ({ step, setStep }) => {
  const [showPicker, setShowPicker] = useState(false);
  return (
    <section>
      <div className="flex justify-between container mt-9">
        <button
          onClick={() => {
            setStep(step - 1);
          }}
        >
          <LeftSideArrowSvg />
        </button>
        <div className="flex gap-4">
          <button className="border border-[#DFE1E6] px-[18px] py-[10px] rounded-[10px] text-[#0D1619] font-manrope text-base font-bold leading-6 w-[135px]">
            Close
          </button>
          <button
            onClick={() => {
              setStep(step + 1);
            }}
            to={"/businessDashboard/businessContainer"}
            className="bg-[#008A90] rounded-[10px] text-[#FFF] w-[135px] flex items-center justify-center gap-[6px]"
          >
            Save
          </button>
        </div>
      </div>
      {/*  */}
      <div className="max-w-[608px] mx-auto mt-14 lg:mt-[84px] font-semibold leading-[43.2px]">
        <h1 className="text-textColor font-outfit text-3xl lg:text-4xl">
          Add a blocked time type
        </h1>
        <p className="text-[#545454] text-base font-medium leading-6 mt-3">
          Create a new blocked time type
        </p>
        {/* This is the emoji section */}
        <div>
          <label className="text-textColor font-manrope text-base font-semibold leading-6">
            Type
          </label>
          <div className="flex gap-5 items-center">
            <div className="relative">
              <button
                onClick={() => setShowPicker((prev) => !prev)}
                className="lg:py-4 py-[12px] lg:px-5 px-3 bg-gray-200 rounded"
              >
                <EmojiSvg />
              </button>

              {showPicker && (
                <div className="absolute top-full mt-2 left-0 z-10">
                  <EmojiPicker />
                </div>
              )}
            </div>
            <Input
              className="h-12 lg:h-[56px] w-full lg:w-[525px]"
              type="text"
              placeholder="e.g. Training break, Coffee break"
            />
          </div>
        </div>
        {/* Duration */}
        <div className="grid w-full items-center gap-[10px] mt-6 z-[1200]">
          <label className="text-[#000] font-manrope text-sm lg:text-base font-semibold leading-6">
            Duration
          </label>
          <Select>
            <SelectTrigger className="w-full h-12 lg:h-[56px] text-textColor font-manrope text-sm font-semibold">
              <SelectValue placeholder="15 minutes" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectItem
                  className="text-textColor font-manrope text-sm font-semibold"
                  value="1 hour"
                >
                  1 hour
                </SelectItem>
                <SelectItem
                  className="text-textColor font-manrope text-sm font-semibold"
                  value="2 hour"
                >
                  2 hour
                </SelectItem>
                <SelectItem
                  className="text-textColor font-manrope text-sm font-semibold"
                  value="5 minutes"
                >
                  5 minutes
                </SelectItem>
                <SelectItem
                  className="text-textColor font-manrope text-sm font-semibold"
                  value="10 minutes"
                >
                  10 minutes
                </SelectItem>
                <SelectItem
                  className="text-textColor font-manrope text-sm font-semibold"
                  value="15 minutes"
                >
                  15 minutes
                </SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
        </div>
        {/* Compensation */}
        <div className="grid w-full items-center gap-[10px] mt-6 z-[1200]">
          <label className="text-[#000] font-manrope text-sm lg:text-base font-semibold leading-6">
            Compensation
          </label>
          <Select>
            <SelectTrigger className="w-full h-12 lg:h-[56px] text-textColor font-manrope text-sm font-semibold">
              <SelectValue placeholder="Paid" />
            </SelectTrigger>
            <SelectContent>
              <SelectGroup>
                <SelectItem
                  className="text-textColor font-manrope text-sm font-semibold"
                  value="Paid"
                >
                  Paid
                </SelectItem>
                <SelectItem
                  className="text-textColor font-manrope text-sm font-semibold"
                  value="Unpaid"
                >
                  Unpaid
                </SelectItem>
              </SelectGroup>
            </SelectContent>
          </Select>
        </div>
      </div>
    </section>
  );
};

export default AddBlockedTime;
