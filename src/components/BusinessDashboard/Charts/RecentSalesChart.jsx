import { AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from 'recharts';
import { curveCardinal } from 'd3-shape';

const RecentSalesChart = () => {
    const data = [
        {
            year: "Thu 30",
            Sales: 40000,
            Appointments: 5000,
        },
        {
            year: "Fri 31",
            Sales: 10000,
            Appointments: 40400,
        },
        {
            year: "Sat 1",
            Sales: 12000,
            Appointments: 9900,
        },
        {
            year: "Sun 2",
            Sales: 9000,
            Appointments: 5000,
        },
        {
            year: "Mon 3",
            Sales: 4000,
            Appointments: 34500,
        },
        {
            year: "Thu 4",
            Sales: 30000,
            Appointments: 3600,
        },
        {
            year: "Wed 5",
            Sales: 20000,
            Appointments: 56500,
        },
        {
            year: "Thu 6",
            Sales: 37000,
            Appointments: 26600,
        }
    ];

    const cardinal = curveCardinal.tension(0.2);
    return (
        <ResponsiveContainer width="100%" height={400}>
            <AreaChart data={data} margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
                <CartesianGrid strokeDasharray="0.3 1" />
                <XAxis dataKey="year" />
                <YAxis />
                <Tooltip />
                <Legend verticalAlign="bottom" height={36} />
                <Area type={cardinal} dataKey="Sales" stroke="#5CC8BE" fill="#ecf8f7" fillOpacity={0.9} />
                <Area type={cardinal} dataKey="Appointments" stroke="#357AF6" fill="#e7f2f9" fillOpacity={0.9} />
            </AreaChart>
        </ResponsiveContainer>
    );
};

export default RecentSalesChart;