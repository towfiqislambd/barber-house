import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Legend,
} from "recharts";
import { curveCardinal } from "d3-shape";
import dayjs from "dayjs";

const RecentSalesChart = ({ data }) => {
  const cardinal = curveCardinal.tension(0.2);

  const chartData = data?.recent_sales_last_7_days
    ? Object.entries(data.recent_sales_last_7_days).map(([date, value]) => ({
        date: dayjs(date).format("ddd D"),
        Sales: value,
      }))
    : [];

  return (
    <ResponsiveContainer width="100%" height={500}>
      <AreaChart
        data={chartData}
        margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
      >
        <CartesianGrid strokeDasharray="0.3 1" />
        <XAxis dataKey="date" />
        <YAxis />
        <Tooltip />
        <Legend verticalAlign="bottom" height={36} />
        <Area
          type={cardinal}
          dataKey="Sales"
          stroke="#357AF6"
          fill="#ecf8f7"
          fillOpacity={0.9}
        />
      </AreaChart>
    </ResponsiveContainer>
  );
};

export default RecentSalesChart;
