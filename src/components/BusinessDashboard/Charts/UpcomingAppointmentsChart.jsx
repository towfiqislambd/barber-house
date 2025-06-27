import {
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  Legend,
  Bar,
  BarChart,
} from "recharts";
import { useMemo } from "react";
import dayjs from "dayjs";

const UpcomingAppointmentsChart = ({ data }) => {
  const transformedData = useMemo(() => {
    const grouped = {};

    data?.next_days_appointments?.appointments?.forEach(appointment => {
      const dateKey = dayjs(appointment.date).format("ddd D"); // e.g., "Mon 30"

      if (!grouped[dateKey]) {
        grouped[dateKey] = { date: dateKey, Confirmed: 0, Cancelled: 0 };
      }

      if (appointment.status === "confirmed") {
        grouped[dateKey].Confirmed += 1;
      } else if (appointment.status === "cancelled") {
        grouped[dateKey].Cancelled += 1;
      }
    });

    // Convert grouped object into array
    return Object.values(grouped);
  }, [data]);

  return (
    <ResponsiveContainer width="100%" height={400}>
      <BarChart
        data={transformedData}
        margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
      >
        <XAxis dataKey="date" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Bar dataKey="Confirmed" stackId="a" fill="#01CC92" />
        <Bar dataKey="Cancelled" stackId="a" fill="#00328580" />
      </BarChart>
    </ResponsiveContainer>
  );
};

export default UpcomingAppointmentsChart;
