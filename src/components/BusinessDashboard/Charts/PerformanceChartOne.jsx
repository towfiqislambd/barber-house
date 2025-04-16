const data = [
    {
        date: 'Fri 7',
        "Confirmed": 4000,
        "Cancelled": 2400,
    },
    {
        date: 'Sat 16',
        "Confirmed": 3000,
        "Cancelled": 1398,
    },
    {
        date: 'Sun 17',
        "Confirmed": 2000,
        "Cancelled": 9800,
    },
    {
        date: 'Mon 18',
        "Confirmed": 2780,
        "Cancelled": 3908,
    },
    {
        date: 'Thu 19',
        "Confirmed": 1890,
        "Cancelled": 4800,
    },
    {
        date: 'Wed 0',
        "Confirmed": 2390,
        "Cancelled": 3800,
    },
    {
        date: 'Thu 21',
        "Confirmed": 3490,
        "Cancelled": 4300,
    },
    {
        date: 'Fri 2',
        "Confirmed": 2490,
        "Cancelled": 4300,
    },
    {
        date: 'Sat 3',
        "Confirmed": 1890,
        "Cancelled": 4800,
    },
    {
        date: 'Sun 2',
        "Confirmed": 2000,
        "Cancelled": 9800,
    },
    {
        date: 'Sat 6',
        "Confirmed": 2890,
        "Cancelled": 4800,
    },
    {
        date: 'Sun 9',
        "Confirmed": 2000,
        "Cancelled": 11800,
    },
];

import { XAxis, YAxis, Tooltip, ResponsiveContainer, Legend, Bar, BarChart } from 'recharts';
const PerformanceChartOne = () => {
    return (
        <ResponsiveContainer width="100%" height={400}>
            <BarChart data={data} margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
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

export default PerformanceChartOne;