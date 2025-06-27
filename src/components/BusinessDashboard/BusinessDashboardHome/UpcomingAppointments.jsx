import UpcomingAppointmentsChart from "../Charts/UpcomingAppointmentsChart";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useState } from "react";

const UpcomingAppointments = ({ data, filter, setFilter }) => {
  const [selectedValue, setSelectedValue] = useState("");

  const handleApply = () => {
    if (selectedValue) {
      setFilter(selectedValue);
    }
  };

  return (
    <div className="3xl:w-[750px] border p-6 border-[#B3BAC5] md:rounded-xl bg-white">
      <div className="flex flex-col lg:flex-row lg:gap-20 mb-10 justify-between 3xl:justify-start">
        <div>
          <h3 className="font-semibold text-xl lg:text-2xl mb-1 text-[#2C2C2C]">
            Upcoming appointments
          </h3>
          <p className="text-[#545454] mb-3">
            {filter === "next_7_days" || !filter
              ? "Next 7 Days"
              : "Next 30 Days"}
          </p>
          <p className="mb-1 text-[#2C2C2C] font-medium">
            Confirmed appointments : {data?.total_confirmed}
          </p>
          <p className="mb-7 text-[#2C2C2C] font-medium">
            Cancelled appointments : {data?.total_canceled}
          </p>
        </div>
        <div className="border self-start flex-shrink-0 max-w-[300px] p-5 border-[#B3BAC5] rounded-xl bg-white">
          <h3 className="text-[#1E1E1E] font-semibold text-lg lg:text-xl mb-2">
            Time Period
          </h3>
          <Select
            onValueChange={val => setSelectedValue(val)}
            value={selectedValue}
          >
            <SelectTrigger className="w-full text-base border !py-5 border-[#B3BAC5]">
              <SelectValue
                placeholder={
                  !filter || filter === "next_7_days"
                    ? "Next 7 Days"
                    : "Next 30 Days"
                }
              />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="next_7_days">Next 7 Days</SelectItem>
              <SelectItem value="next_30_days">Next 30 Days</SelectItem>
            </SelectContent>
          </Select>
          <div className="flex mt-5 gap-3 items-center">
            <button
              className="px-5 border py-2 rounded-lg font-medium"
              onClick={() => setSelectedValue("")}
            >
              Close
            </button>
            <button
              className="px-5 py-2 bg-primary text-white rounded-lg font-medium"
              onClick={handleApply}
              disabled={!selectedValue}
            >
              Apply Changes
            </button>
          </div>
        </div>
      </div>
      <UpcomingAppointmentsChart data={data} />
    </div>
  );
};

export default UpcomingAppointments;
