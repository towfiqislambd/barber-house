import { DropdownSvg } from "@/components/svgContainer/SvgContainer";
import OverviewChart from "../Charts/OverviewChart";

const Overview = () => {
  return (
    <div>
      <h3 className="font-outfit text-2xl sm:text-3xl font-medium mb-7">
        Add blocked time
      </h3>
      <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-16 gap-4 md:gap-0">
        <div className="">
          <h4 className="text-[#2C2C2C] font-semibold text-base lg:text-xl">
            Performance dashboard
          </h4>
          <p className="text-base text-[#2C2C2C]">View full dashboard</p>
        </div>
        <button className="lg:px-3 px-2 lg:py-[10px] py-2 text-base font-medium flex gap-2 justify-between md:items-center outline-none rounded-lg border border-[#00C2CB]">
          <p className="text-sm lg:text-base">Week to date</p>
          <DropdownSvg />
        </button>
      </div>
      <div className="my-5">
        <OverviewChart />
      </div>
      <div className="grid lg:grid-cols-2 gap-5">
        <div className="border cursor-pointer bg-white p-5 rounded-xl border-[#8AE3E7]">
          <p className="text-[#757575] text-base font-medium">Appointment</p>
          <h3 className="text-[#2C2C2C] text-2xl font-semibold">2</h3>
        </div>
        <div className="border cursor-pointer bg-white p-5 rounded-xl border-[#8AE3E7]">
          <p className="text-[#757575] text-base font-medium">Client</p>
          <h3 className="text-[#2C2C2C] text-2xl font-semibold">5</h3>
        </div>
        <div className="border cursor-pointer bg-white p-5 rounded-xl border-[#8AE3E7]">
          <p className="text-[#757575] text-base font-medium">Occupancy</p>
          <h3 className="text-[#2C2C2C] text-2xl font-semibold">2%</h3>
        </div>
        <div className="border cursor-pointer bg-white p-5 rounded-xl border-[#8AE3E7]">
          <p className="text-[#757575] text-base font-medium">Retention</p>
          <h3 className="text-[#2C2C2C] text-2xl font-semibold">5%</h3>
        </div>
      </div>
    </div>
  );
};

export default Overview;
