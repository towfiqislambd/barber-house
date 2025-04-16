import { CostSvg } from "@/components/svgContainer/SvgContainer";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { useState } from "react";

const Settings = () => {
  const [isServiceUpsellingEnabled, setIsServiceUpsellingEnabled] =
    useState(false);
  const [isMembershipUpsellingEnabled, setIsMembershipUpsellingEnabled] =
    useState(false);
  const [activeCost, setActiveCost] = useState("two");
  return (
    <div>
      <h3 className="font-outfit text-2xl mb-4 font-medium">Settings</h3>
      <p className="font-outfit text-xl mb-5 text-[#2C2C2C] font-medium">
        Notifications
      </p>
      <div className="mt-5 space-y-7 mb-7">
        <div>
          <p className="flex gap-3 items-center">
            <Checkbox
              id="Service"
              className="scale-150"
              checked={isServiceUpsellingEnabled}
              onCheckedChange={setIsServiceUpsellingEnabled}
            />
            <label
              htmlFor="Service"
              className="font-medium text-[#2C2C2C] text-lg"
            >
              Aftercare instructions
            </label>
          </p>
          <p className="text-[#545454] ps-7 mt-1 font-medium">
            Provide aftercare instructions to clients in thank you notifications
          </p>

          {isServiceUpsellingEnabled && (
            <div className="ps-7 mt-5">
              <Textarea rows={6} placeholder="Write here..." />
            </div>
          )}
        </div>
        <div>
          <p className="flex gap-3 items-center">
            <Checkbox
              id="membership"
              className="scale-150"
              checked={isMembershipUpsellingEnabled}
              onCheckedChange={setIsMembershipUpsellingEnabled}
            />
            <label
              htmlFor="membership"
              className="font-medium text-[#2C2C2C] text-lg"
            >
              Reminder to rebook notifications
            </label>
          </p>
          <p className="text-[#545454] ps-7 mt-1 font-medium">
            Choose when you would like to notify your clients to rebook this
            service
          </p>

          {isMembershipUpsellingEnabled && (
            <div className="flex flex-col lg:flex-row items-center ps-7 gap-5 mt-5">
              <div className="lg:flex-1 w-full">
                <Input
                  id="services"
                  placeholder="4"
                  className="placeholder:text-[#545454] h-12 text-base"
                />
              </div>
              <div className="lg:flex-1 w-full">
                <Select>
                  <SelectTrigger className="w-full text-base border !py-6">
                    <SelectValue placeholder="Weeks after" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="All statuses">40 min</SelectItem>
                    <SelectItem value="Active">45 min</SelectItem>
                    <SelectItem value="Archived">50 min</SelectItem>
                    <SelectItem value="Archived">55 min</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
          )}
        </div>
      </div>
      <div className="border-t border-[#0089909d]"></div>
      <p className="font-outfit text-xl mb-5 mt-7 text-[#2C2C2C] font-medium">
        Advanced settings
      </p>
      <div className="space-y-8">
        <div className="max-w-[482px]">
          <label
            htmlFor="services"
            className="text-[#2C2C2C] mb-2 block font-semibold"
          >
            Sales tax{" "}
            <span className="text-[#545454]">(Included in price)</span>
          </label>
          <div className="relative">
            <Input
              id="services"
              placeholder="Custom setting"
              className="placeholder:text-[#545454] h-12 text-base"
            />
            <button className="font-medium text-[#008A90] absolute right-3 top-3">
              Edit
            </button>
          </div>
          <p className="mt-2 text-[15px] text-[#757575] font-medium">
            Configure sales tax settings for each of your locations
          </p>
        </div>
        <div className="max-w-[482px]">
          <label
            htmlFor="cost"
            className="text-[#2C2C2C] mb-2 block font-semibold"
          >
            Cost of service
          </label>
          <div className="flex gap-3">
            <Input
              id="cost"
              type="number"
              placeholder="0.00"
              className="placeholder:text-[#545454] h-12 text-base"
            />
            <div className="rounded-lg border h-12 bg-[#E6F9FA] flex gap-3 items-center px-5">
              <button
                onClick={() => setActiveCost("one")}
                className={`w-10 h-9 rounded  border-[#00C2CB] grid place-items-center ${
                  activeCost === "one" && "bg-white border"
                }`}
              >
                <CostSvg />
              </button>
              <button
                onClick={() => setActiveCost("two")}
                className={`w-10 h-9 rounded  border-[#00C2CB] grid place-items-center ${
                  activeCost === "two" && "bg-white border"
                }`}
              >
                %
              </button>
            </div>
          </div>
          <p className="mt-2 text-[15px] text-[#757575] font-medium">
            Configure sales tax settings for each of your locations
          </p>
        </div>
        <div className="max-w-[482px]">
          <label
            htmlFor="services"
            className="text-[#2C2C2C] mb-2 block font-semibold"
          >
            SKU
          </label>
          <Input
            id="services"
            placeholder="ABC-12345-H-SH"
            className="placeholder:text-[#545454] h-12 text-base"
          />
          <p className="mt-2 text-[15px] text-[#757575] font-medium">
            Assign a SKU to help identify this service in reports and exports
          </p>
        </div>
      </div>
    </div>
  );
};

export default Settings;
