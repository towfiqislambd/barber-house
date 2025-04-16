import PerformanceModal from "@/components/BusinessDashboard/Modals/PerformanceModal";
import BreadCrumb from "@/components/BusinessHelpCenter/BreadCrumb/BreadCrumb";
import { AppointmentCalendarSvg, LeftSideArrowSvg, SalesByCannelSvg, SalesByCannelSvg2, TeamMemberSvg } from "@/components/svgContainer/SvgContainer";
import { Calendar } from "@/components/ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { useState } from "react";
import { Link } from "react-router-dom";
import { format } from "date-fns";
import PerformanceChartOne from "@/components/BusinessDashboard/Charts/PerformanceChartOne";
import PerformanceChartTwo from "@/components/BusinessDashboard/Charts/PerformanceChartTwo";
import PerformanceChartThree from "@/components/BusinessDashboard/Charts/PerformanceChartThree";
import PerformanceChartFour from "@/components/BusinessDashboard/Charts/PerformanceChartFour";
import PerformanceChartFive from "@/components/BusinessDashboard/Charts/PerformanceChartFive";
import CompareModal from "@/components/BusinessDashboard/Modals/CompareModal";
const tableData = [
    {
        id: 1,
        membership: {
            name: 'Mamunur Rahman Shihab',
            image: <TeamMemberSvg />
        },
        sales: 'SAR 1, 120.00',
        occupancy: '46.2%',
        clients: '0%',
        rating: 5,
    },
    {
        id: 2,
        membership: {
            name: 'Mamunur Rahman Shihab',
            image: <TeamMemberSvg />
        },
        sales: 'SAR 1, 120.00',
        occupancy: '46.2%',
        clients: '0%',
        rating: 5,
    },
    {
        id: 3,
        membership: {
            name: 'Mamunur Rahman Shihab',
            image: <TeamMemberSvg />
        },
        sales: 'SAR 1, 120.00',
        occupancy: '46.2%',
        clients: '0%',
        rating: 5,
    },
    {
        id: 4,
        membership: {
            name: 'Mamunur Rahman Shihab',
            image: <TeamMemberSvg />
        },
        sales: 'SAR 1, 120.00',
        occupancy: '46.2%',
        clients: '0%',
        rating: 5,
    },
    {
        id: 5,
        membership: {
            name: 'Mamunur Rahman Shihab',
            image: <TeamMemberSvg />
        },
        sales: 'SAR 1, 120.00',
        occupancy: '46.2%',
        clients: '0%',
        rating: 5,
    },
]
const PerformanceDashboard = () => {
    const [date, setDate] = useState(null);
    return (
        <div>
            <div className="flex gap-4 items-center mb-5">
                <Link to={"/businessDashboard/reporting"}>
                    <button className="flex items-center gap-[6px] border border-[#757575] px-3 py-2 rounded-[100px] text-[#2C2C2C] font-manrope text-base font-medium leading-6">
                        <LeftSideArrowSvg />
                        Back
                    </button>
                </Link>
                <BreadCrumb
                    items={[
                        { label: "All reports", href: "/businessDashboard/reporting" },
                        { label: "Performance dashboard", href: "" },
                    ]}
                />
            </div>

            <h3 className="font-outfit text-2xl mb-1 font-medium text-[#2C2C2C]">Performance dashboard</h3>
            <p className="text-[#2C2C2C] mb-5 font-medium">Dashboard of your business performance.</p>

            <div className="flex justify-between mb-10">
                <div className="flex gap-5 items-center">

                    {/* Date */}
                    <Popover>
                        <PopoverTrigger asChild>
                            <button className="flex gap-2 focus:border-none border-gray-100 bg-white items-center py-3 focus:outline-none px-4 font-medium text-[#2C2C2C] rounded-full border shadow">
                                <AppointmentCalendarSvg />
                                <p>{date ? format(date, "PPP") : "Last 30 days"}</p>
                            </button>
                        </PopoverTrigger>
                        <PopoverContent
                            side="bottom"
                            align="start"
                            className="bg-white p-3 rounded-md shadow-md w-auto"
                        >
                            <Calendar mode="single" selected={date} onSelect={setDate} />
                        </PopoverContent>
                    </Popover>

                    <CompareModal />
                    {/* Filter */}
                    <PerformanceModal />
                </div>
                <p className="text-[#2C2C2C] font-medium">Data from 21 mins ago</p>
            </div>

            <div className="grid grid-cols-12 gap-5 mb-10">
                <div className="col-span-3">
                    <div className="border p-7 rounded-lg space-y-7">
                        <div className="flex justify-between items-center">
                            <h3 className="text-lg font-semibold text-[#2F2F2F]">Total sales</h3>
                            <Link to='/businessDashboard/sales-summary'>
                                <p className="text-[#5E22DD] font-medium text-sm">View report</p>
                            </Link>

                        </div>
                        <div className="flex justify-between items-center">
                            <h3 className="text-lg font-medium text-[#2F2F2F]">Services</h3>
                            <p className="font-medium text-[#1E1E1E]">BDT 0.00</p>
                        </div>
                        <div className="flex justify-between items-center">
                            <h3 className="text-lg font-medium text-[#2F2F2F]">Products</h3>
                            <p className="font-medium text-[#1E1E1E]">BDT 0.00</p>
                        </div>
                        <div className="flex justify-between items-center">
                            <h3 className="text-lg font-medium text-[#2F2F2F]">No shows </h3>
                            <p className="font-medium text-[#1E1E1E]">BDT 0.00</p>
                        </div>
                        <div className="flex justify-between items-center">
                            <h3 className="text-lg font-medium text-[#2F2F2F]">Cancellations</h3>
                            <p className="font-medium text-[#1E1E1E]">BDT 0.00</p>
                        </div>
                        <div className="flex justify-between items-center">
                            <h3 className="text-lg font-medium text-[#2F2F2F]">Memberships</h3>
                            <p className="font-medium text-[#1E1E1E]">BDT 0.00</p>
                        </div>
                        <div className="flex justify-between items-center">
                            <h3 className="text-lg font-medium text-[#2F2F2F]">Shipping</h3>
                            <p className="font-medium text-[#1E1E1E]">BDT 0.00</p>
                        </div>
                    </div>
                </div>
                <div className="col-span-9">
                    <div className="border p-7 rounded-lg">
                        <h3 className="font-semibold text-xl mb-5">Total sales over time</h3>
                        <PerformanceChartOne />
                    </div>
                </div>
            </div>

            <div className="flex gap-5 items-center mb-10">
                <div className="p-5 border rounded-lg flex-1 shadow">
                    <h3 className="text-lg mb-1 font-semibold">Average sale value</h3>
                    <p className="text-2xl font-semibold text-[#1E1E1E]">SAR 0.00</p>
                </div>
                <div className="p-5 border rounded-lg flex-1 shadow">
                    <h3 className="text-lg mb-1 font-semibold">Online sales</h3>
                    <p className="text-2xl font-semibold text-[#1E1E1E]">SAR 0.00</p>
                </div>
                <div className="p-5 border rounded-lg flex-1 shadow">
                    <h3 className="text-lg mb-1 font-semibold">Appointments</h3>
                    <p className="text-2xl font-semibold text-[#1E1E1E]">SAR 0.00</p>
                </div>
                <div className="p-5 border rounded-lg flex-1 shadow">
                    <h3 className="text-lg mb-1 font-semibold">Occupancy rate </h3>
                    <p className="text-2xl font-semibold text-[#1E1E1E]">SAR 0.00</p>
                </div>
                <div className="p-5 border rounded-lg flex-1 shadow">
                    <h3 className="text-lg mb-1 font-semibold">Returning client rate</h3>
                    <p className="text-2xl font-semibold text-[#1E1E1E]">SAR 0.00</p>
                </div>
            </div>

            <div className="p-5 border rounded-lg grid grid-cols-12 gap-5 items-center mb-10">
                <div className="col-span-3 border-r pr-10">
                    <h3 className="text-xl mb-1 font-semibold">Sales by channel</h3>
                    <p className="text-2xl font-semibold text-[#1E1E1E] mb-5">BDT 0.00</p>
                    <div className="flex justify-between items-center">
                        <div className="flex gap-2 items-center">
                            <SalesByCannelSvg />
                            <p className="text-[#757575] font-medium">Book now link</p>
                        </div>
                        <p className="text-[#1E1E1E] font-semibold">BDT 0.00</p>
                    </div>
                    <div className="flex justify-between items-center mt-2">
                        <div className="flex gap-2 items-center">
                            <SalesByCannelSvg2 />
                            <p className="text-[#757575] font-medium">Offline</p>
                        </div>
                        <p className="text-[#1E1E1E] font-semibold">BDT 0.00</p>
                    </div>
                </div>
                <div className="col-span-9">
                    <PerformanceChartTwo />
                </div>
            </div>

            <div className="p-5 border rounded-lg grid grid-cols-12 gap-5 items-center mb-10">
                <div className="col-span-3 border-r pr-10">
                    <h3 className="text-xl mb-1 font-semibold">Appointments</h3>
                    <p className="text-2xl font-semibold text-[#1E1E1E] mb-5">0%</p>
                    <div className="flex justify-between items-center">
                        <div className="flex gap-2 items-center">
                            <SalesByCannelSvg />
                            <p className="text-[#757575] font-medium">Book now link</p>
                        </div>
                        <p className="text-[#1E1E1E] font-semibold">BDT 0.00</p>
                    </div>
                    <div className="flex justify-between items-center mt-2">
                        <div className="flex gap-2 items-center">
                            <SalesByCannelSvg2 />
                            <p className="text-[#757575] font-medium">Offline</p>
                        </div>
                        <p className="text-[#1E1E1E] font-semibold">BDT 0.00</p>
                    </div>
                </div>
                <div className="col-span-9">
                    <PerformanceChartThree />
                </div>
            </div>

            <div className="grid grid-cols-2 gap-10 mb-10">
                <div className="p-7 border rounded-lg">
                    <div className="flex justify-between items-center mb-4">
                        <h3 className="text-lg font-semibold text-[#2F2F2F]">Occupancy rate</h3>
                        <Link to='/businessDashboard/working-hours-summery'>
                            <p className="text-[#5E22DD] font-medium text-sm">View report</p>
                        </Link>
                    </div>
                    <p className="text-2xl font-semibold text-[#1E1E1E] mb-7">0%</p>
                    <PerformanceChartFour />
                    <div className="space-y-3">
                        <div className="flex justify-between items-center">
                            <h3 className="font-medium text-[#545454]">Working hours</h3>
                            <p className="font-medium text-[#1E1E1E]">18h 0m</p>
                        </div>
                        <div className="flex justify-between items-center">
                            <h3 className="font-medium text-[#545454]">Unbooked hours</h3>
                            <p className="font-medium text-[#1E1E1E]">12h 20m</p>
                        </div>
                        <div className="flex justify-between items-center">
                            <h3 className="font-medium text-[#545454]">Booked hours</h3>
                            <p className="font-medium text-[#1E1E1E]">18h 0m</p>
                        </div>
                    </div>
                </div>
                <div className="p-7 border rounded-lg">
                    <div className="flex justify-between items-center mb-4">
                        <h3 className="text-lg font-semibold text-[#2F2F2F]">Occupancy rate</h3>
                        <Link to='/businessDashboard/working-hours-summery'>
                            <p className="text-[#5E22DD] font-medium text-sm">View report</p>
                        </Link>
                    </div>
                    <p className="text-2xl font-semibold text-[#1E1E1E] mb-7">0%</p>
                    <PerformanceChartFive />
                    <div className="space-y-3">
                        <div className="flex justify-between items-center">
                            <h3 className="font-medium text-[#545454]">New customers</h3>
                            <p className="font-medium text-[#1E1E1E]">0</p>
                        </div>
                        <div className="flex justify-between items-center">
                            <h3 className="font-medium text-[#545454]">Returning customers</h3>
                            <p className="font-medium text-[#1E1E1E]">0</p>
                        </div>
                        <div className="flex justify-between items-center">
                            <h3 className="font-medium text-[#545454]">Walk ins </h3>
                            <p className="font-medium text-[#1E1E1E]">0</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="p-7 border rounded-lg">
                <h3 className="text-lg font-semibold text-[#2F2F2F] mb-5">Top team members</h3>
                {/* Table */}
                <table className="w-full border-collapse">
                    <tr className="text-lg text-gray-700">
                        <th className="px-4 py-2 text-left">Team member</th>
                        <th className="px-4 py-2 text-left">Sales</th>
                        <th className="px-4 py-2 text-left">Occupancy</th>
                        <th className="px-4 py-2 text-left">% returning clients</th>
                        <th className="px-4 py-2 text-left">Rating</th>
                    </tr>
                    <tbody>
                        {
                            tableData.map(data => <tr key={data.id} className="hover:bg-gray-200 border-t 
                    first:border-none border-dashed text-[#545454]">
                                <td className="px-4 text-[#545454] font-medium py-3 flex gap-2 items-center">
                                    <div>{data?.membership?.image}</div>
                                    <h3 className="text-[17px] font-medium text-[#2C2C2C]">{data.membership.name}</h3>
                                </td>
                                <td className="px-4 text-[#545454] font-medium py-3">{data.sales}</td>
                                <td className="px-4 text-[#545454] font-medium py-3">{data.occupancy}</td>
                                <td className="px-4 text-[#545454] font-medium py-3">{data.clients}</td>
                                <td className="px-4 text-[#545454] font-medium py-3">{data.rating}</td>
                            </tr>)
                        }
                    </tbody>
                </table>
            </div>

        </div>
    );
};

export default PerformanceDashboard;