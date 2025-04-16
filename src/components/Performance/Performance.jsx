import YearToDateModal from "../BusinessDashboard/Modals/YearToDateModal";
import PerformanceCard from "../PerformanceCard/PerformanceCard";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { OptionDropDownSvg } from "../svgContainer/SvgContainer";
import { Link } from "react-router-dom";

const Performance = () => {
  const data = [
    { name: "Jan", uv: 4000, pv: 2400, amt: 2400 },
    { name: "Feb", uv: 3000, pv: 1398, amt: 2210 },
    { name: "Mar", uv: 2000, pv: 9800, amt: 2290 },
    { name: "Apr", uv: 2780, pv: 3908, amt: 2000 },
    { name: "May", uv: 1890, pv: 4800, amt: 2181 },
    { name: "Jun", uv: 2390, pv: 3800, amt: 2500 },
    { name: "Jul", uv: 3490, pv: 4300, amt: 2100 },
  ];

  return (
    <section className="max-w-[1072px] mx-auto">
      <div className="mt-6">
        <YearToDateModal />
      </div>
      {/* This is the chart section */}
      <div className="bg-[#FFF] mt-6 p-6 rounded-2xl">
        {/*  */}
        <div className="flex flex-col md:flex-row md:items-center justify-between mb-[13px] gap-5 md:gap-0">
          <p className="text-[#000] font-manrope text-lg font-semibold leading-[27px]">
            Sent messages over time
          </p>
          <div>
            <Popover>
              <PopoverTrigger>
                <button className="border border-[#75757] rounded-[100px] md:py-2 py-1 ms:px-6 px-2 flex">
                  <p className="text-[#000] font-manrope text-sm md:text-base font-medium leading-6">
                    Sent messages
                  </p>
                  <OptionDropDownSvg />
                </button>
              </PopoverTrigger>
              <PopoverContent className="w-[200px] p-4 space-y-[14px]">
                <Link to={"/"} className="text-[#545454] font-medium">
                  Sent messages
                </Link>
                <Link to={"/"} className="text-[#545454] font-medium block">
                  Delivered messages
                </Link>
                <Link to={"/"} className="text-[#545454] font-medium block">
                  Opened messages
                </Link>
                <Link to={"/"} className="text-[#545454] font-medium block">
                  Clicked messages
                </Link>
              </PopoverContent>
            </Popover>
          </div>
        </div>
        <ResponsiveContainer width="100%" height={250}>
          <AreaChart
            data={data}
            margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
          >
            <defs>
              <linearGradient id="colorUv" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8} />
                <stop offset="95%" stopColor="#8884d8" stopOpacity={0} />
              </linearGradient>
              <linearGradient id="colorPv" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#82ca9d" stopOpacity={0.8} />
                <stop offset="95%" stopColor="#82ca9d" stopOpacity={0} />
              </linearGradient>
            </defs>

            {/* X-Axis with Month Names */}
            <XAxis dataKey="name" />

            {/* Y-Axis for Numeric Values */}
            <YAxis />

            <CartesianGrid strokeDasharray="3 3" />
            <Tooltip />

            <Area
              type="monotone"
              dataKey="uv"
              stroke="#8884d8"
              fillOpacity={1}
              fill="url(#colorUv)"
            />
            <Area
              type="monotone"
              dataKey="pv"
              stroke="#82ca9d"
              fillOpacity={1}
              fill="url(#colorPv)"
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
      {/* This is the card section */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 md:gap-5 gap-2 max-w-[1072px] mx-auto mt-6">
        <PerformanceCard
          title="Received"
          total={20}
          emailCount={12}
          textCount={8}
        />
        <PerformanceCard
          title="Received"
          total={20}
          emailCount={12}
          textCount={8}
        />
        <PerformanceCard
          title="Received"
          total={20}
          emailCount={12}
          textCount={8}
        />
        <PerformanceCard
          title="Received"
          total={20}
          emailCount={12}
          textCount={8}
        />
      </div>
    </section>
  );
};

export default Performance;
