import UpcomingAppointmentsChart from "../Charts/UpcomingAppointmentsChart";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const UpcomingAppointments = ({ data }) => {
  return (
    <div className="3xl:w-[750px] border p-6 border-[#B3BAC5] md:rounded-xl bg-white">
      <div className="flex flex-col lg:flex-row lg:gap-20 mb-10 justify-between 3xl:justify-start">
        <div className="">
          <h3 className="font-semibold text-xl lg:text-2xl mb-1 text-[#2C2C2C]">
            Upcoming appointments
          </h3>
          <p className="text-[#545454] mb-3">Last 7 Days</p>
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
          <Select>
            <SelectTrigger className="w-full text-base border !py-5 border-[#B3BAC5]">
              <SelectValue placeholder="Next 7 Days" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="next 7 days">Next 7 Days</SelectItem>
              <SelectItem value="next 30 days">Next 30 Days</SelectItem>
            </SelectContent>
          </Select>
          <div className="flex mt-5 gap-3 items-center">
            <button className="px-5 border py-2 rounded-lg font-medium">
              Close
            </button>
            <button className="px-5 py-2 bg-primary text-white rounded-lg font-medium">
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
