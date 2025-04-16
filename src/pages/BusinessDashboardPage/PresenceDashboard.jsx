import PerformanceModal from "@/components/BusinessDashboard/Modals/PerformanceModal";
import BreadCrumb from "@/components/BusinessHelpCenter/BreadCrumb/BreadCrumb";
import { AppointmentCalendarSvg, LeftSideArrowSvg, SalesByCannelSvg, SalesByCannelSvg2 } from "@/components/svgContainer/SvgContainer";
import { Link } from "react-router-dom";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { useState } from "react";
import { Calendar } from "@/components/ui/calendar";
import { format } from "date-fns";
import PresenceChartOne from "@/components/BusinessDashboard/Charts/PresenceChartOne";
import PresenceChartTwo from "@/components/BusinessDashboard/Charts/PresenceChartTwo";
import PresenceChartThree from "@/components/BusinessDashboard/Charts/PresenceChartThree";
import PresenceChartFour from "@/components/BusinessDashboard/Charts/PresenceChartFour";
import PresenceChartFive from "@/components/BusinessDashboard/Charts/PresenceChartFive";
import PresenceChartSix from "@/components/BusinessDashboard/Charts/PresenceChartSix";
import PresenceChartSeven from "@/components/BusinessDashboard/Charts/PresenceChartSeven";

const PresenceDashboard = () => {
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
                        { label: "All reports", href: "/businessDashboard/presence" },
                        { label: "Performance dashboard", href: "" },
                    ]}
                />
            </div>

            <h3 className="font-outfit text-2xl mb-1 font-medium text-[#2C2C2C]">Online presence dashboard</h3>
            <p className="text-[#2C2C2C] mb-5 font-medium">Online sales and online client performance</p>

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
                    <button className="flex gap-2 focus:border-none border-gray-100 bg-white items-center py-3 focus:outline-none px-4 font-medium text-[#2C2C2C] rounded-full border shadow">
                        <p>Compare to: 20 dec 2024 - 18 Jan 2025</p>
                    </button>
                    {/* Filter */}
                    <PerformanceModal />
                </div>
                <p className="text-[#2C2C2C] font-medium">Data from 21 mins ago</p>
            </div>

            <div className="grid grid-cols-12 gap-5 mb-5">
                <div className="col-span-2 space-y-3">
                    <div className="p-5 border rounded-lg flex-1 shadow">
                        <h3 className="text-lg mb-1 font-semibold">Lifetime marketplace sales</h3>
                        <p className="text-2xl font-semibold text-[#1E1E1E]">SAR 0.00</p>
                    </div>
                    <div className="p-5 border rounded-lg flex-1 shadow">
                        <h3 className="text-lg mb-1 font-semibold">Online new clients</h3>
                        <p className="text-2xl font-semibold text-[#1E1E1E]">SAR 0.00</p>
                    </div>
                    <div className="p-5 border rounded-lg flex-1 shadow">
                        <h3 className="text-lg mb-1 font-semibold">Online appointments</h3>
                        <p className="text-2xl font-semibold text-[#1E1E1E]">SAR 0.00</p>
                    </div>
                    <div className="p-5 border rounded-lg flex-1 shadow">
                        <h3 className="text-lg mb-1 font-semibold">Online appointments</h3>
                        <p className="text-2xl font-semibold text-[#1E1E1E]">SAR 0.00</p>
                    </div>
                </div>
                <div className="col-span-10">
                    <div className="p-5 border rounded-lg grid grid-cols-12 gap-10 items-center">
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
                            <PresenceChartOne />
                        </div>
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

            <div className="p-5 border rounded-lg mb-10">
                <h3 className="text-xl mb-1 font-semibold">Lifetime sales from marketplace clients over time</h3>
                <div className="flex justify-between items-center">
                    <p className="text-2xl font-semibold text-[#1E1E1E] mb-5">SAR 0.00</p>
                    <p className="text-[#5E22DD] font-medium text-sm">View report</p>
                </div>
                <PresenceChartTwo />
            </div>

            <div className="grid grid-cols-2 gap-5 mb-5">
                <div className="p-7 border rounded-lg">
                    <div className="flex justify-between items-center mb-4">
                        <h3 className="text-lg font-semibold text-[#2F2F2F]">Clients by channel</h3>
                        <p className="text-[#5E22DD] font-medium text-sm">View report</p>
                    </div>
                    <p className="text-2xl font-semibold text-[#1E1E1E] mb-7">0%</p>
                    <PresenceChartThree />
                    <div className="space-y-3">
                        <div className="flex justify-between items-center">
                            <div className="flex gap-2 items-center">
                                <SalesByCannelSvg />
                                <h3 className="font-medium text-[#545454]">Fresha marketplace</h3>
                            </div>
                            <p className="font-medium text-[#1E1E1E]">0</p>
                        </div>
                        <div className="flex justify-between items-center">
                            <div className="flex gap-2 items-center">
                                <SalesByCannelSvg />
                                <h3 className="font-medium text-[#545454]">Book now link</h3>
                            </div>
                            <p className="font-medium text-[#1E1E1E]">0</p>
                        </div>
                        <div className="flex justify-between items-center">
                            <div className="flex gap-2 items-center">
                                <SalesByCannelSvg />
                                <h3 className="font-medium text-[#545454]">Social</h3>
                            </div>
                            <p className="font-medium text-[#1E1E1E]">0</p>
                        </div>
                        <div className="flex justify-between items-center">
                            <div className="flex gap-2 items-center">
                                <SalesByCannelSvg />
                                <h3 className="font-medium text-[#545454]">Marketing</h3>
                            </div>
                            <p className="font-medium text-[#1E1E1E]">0</p>
                        </div>
                    </div>
                </div>
                <div className="p-7 border rounded-lg">
                    <div className="flex justify-between items-center mb-4">
                        <h3 className="text-lg font-semibold text-[#2F2F2F]">Online new clients over time</h3>
                        <p className="text-[#5E22DD] font-medium text-sm">View report</p>
                    </div>
                    <p className="text-2xl font-semibold text-[#1E1E1E] mb-7">0%</p>
                    <PresenceChartFour />
                    <div className="space-y-3">
                        <div className="flex justify-between items-center">
                            <div className="flex gap-2 items-center">
                                <SalesByCannelSvg />
                                <h3 className="font-medium text-[#545454]">Fresha marketplace</h3>
                            </div>
                            <p className="font-medium text-[#1E1E1E]">0</p>
                        </div>
                        <div className="flex justify-between items-center">
                            <div className="flex gap-2 items-center">
                                <SalesByCannelSvg />
                                <h3 className="font-medium text-[#545454]">Book now link</h3>
                            </div>
                            <p className="font-medium text-[#1E1E1E]">0</p>
                        </div>
                        <div className="flex justify-between items-center">
                            <div className="flex gap-2 items-center">
                                <SalesByCannelSvg />
                                <h3 className="font-medium text-[#545454]">Social</h3>
                            </div>
                            <p className="font-medium text-[#1E1E1E]">0</p>
                        </div>
                        <div className="flex justify-between items-center">
                            <div className="flex gap-2 items-center">
                                <SalesByCannelSvg />
                                <h3 className="font-medium text-[#545454]">Marketing</h3>
                            </div>
                            <p className="font-medium text-[#1E1E1E]">0</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="grid grid-cols-2 gap-5 mb-5">
                <div className="p-7 border rounded-lg">
                    <div className="flex justify-between items-center mb-4">
                        <h3 className="text-lg font-semibold text-[#2F2F2F]">Online appointments over time</h3>
                        <p className="text-[#5E22DD] font-medium text-sm">View report</p>
                    </div>
                    <p className="text-2xl font-semibold text-[#1E1E1E] mb-7">0%</p>
                    <PresenceChartFive />
                    <div className="space-y-3">
                        <div className="flex justify-between items-center">
                            <div className="flex gap-2 items-center">
                                <SalesByCannelSvg />
                                <h3 className="font-medium text-[#545454]">Fresha marketplace</h3>
                            </div>
                            <p className="font-medium text-[#1E1E1E]">0</p>
                        </div>
                        <div className="flex justify-between items-center">
                            <div className="flex gap-2 items-center">
                                <SalesByCannelSvg />
                                <h3 className="font-medium text-[#545454]">Book now link</h3>
                            </div>
                            <p className="font-medium text-[#1E1E1E]">0</p>
                        </div>
                        <div className="flex justify-between items-center">
                            <div className="flex gap-2 items-center">
                                <SalesByCannelSvg />
                                <h3 className="font-medium text-[#545454]">Social</h3>
                            </div>
                            <p className="font-medium text-[#1E1E1E]">0</p>
                        </div>
                        <div className="flex justify-between items-center">
                            <div className="flex gap-2 items-center">
                                <SalesByCannelSvg />
                                <h3 className="font-medium text-[#545454]">Marketing</h3>
                            </div>
                            <p className="font-medium text-[#1E1E1E]">0</p>
                        </div>
                    </div>
                </div>
                <div className="p-7 border rounded-lg">
                    <div className="flex justify-between items-center mb-4">
                        <h3 className="text-lg font-semibold text-[#2F2F2F]">Online average sale value over time</h3>
                        <p className="text-[#5E22DD] font-medium text-sm">View report</p>
                    </div>
                    <p className="text-2xl font-semibold text-[#1E1E1E] mb-7">SAR 0.00</p>
                    <PresenceChartSix />
                    <div className="space-y-3">
                        <div className="flex justify-between items-center">
                            <div className="flex gap-2 items-center">
                                <SalesByCannelSvg />
                                <h3 className="font-medium text-[#545454]">Fresha marketplace</h3>
                            </div>
                            <p className="font-medium text-[#1E1E1E]">0</p>
                        </div>
                        <div className="flex justify-between items-center">
                            <div className="flex gap-2 items-center">
                                <SalesByCannelSvg />
                                <h3 className="font-medium text-[#545454]">Book now link</h3>
                            </div>
                            <p className="font-medium text-[#1E1E1E]">0</p>
                        </div>
                        <div className="flex justify-between items-center">
                            <div className="flex gap-2 items-center">
                                <SalesByCannelSvg />
                                <h3 className="font-medium text-[#545454]">Social</h3>
                            </div>
                            <p className="font-medium text-[#1E1E1E]">0</p>
                        </div>
                        <div className="flex justify-between items-center">
                            <div className="flex gap-2 items-center">
                                <SalesByCannelSvg />
                                <h3 className="font-medium text-[#545454]">Marketing</h3>
                            </div>
                            <p className="font-medium text-[#1E1E1E]">0</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="grid grid-cols-2 gap-5 mb-5">
                <div className="p-7 border rounded-lg">
                    <div className="flex justify-between items-center mb-4">
                        <h3 className="text-lg font-semibold text-[#2F2F2F]">Online returning client rate over time</h3>
                        <p className="text-[#5E22DD] font-medium text-sm">View report</p>
                    </div>
                    <p className="text-2xl font-semibold text-[#1E1E1E] mb-7">0%</p>
                    <PresenceChartSix />
                    <div className="space-y-3">
                        <div className="flex justify-between items-center">
                            <div className="flex gap-2 items-center">
                                <SalesByCannelSvg />
                                <h3 className="font-medium text-[#545454]">Fresha marketplace</h3>
                            </div>
                            <p className="font-medium text-[#1E1E1E]">0</p>
                        </div>
                        <div className="flex justify-between items-center">
                            <div className="flex gap-2 items-center">
                                <SalesByCannelSvg />
                                <h3 className="font-medium text-[#545454]">Book now link</h3>
                            </div>
                            <p className="font-medium text-[#1E1E1E]">0</p>
                        </div>
                        <div className="flex justify-between items-center">
                            <div className="flex gap-2 items-center">
                                <SalesByCannelSvg />
                                <h3 className="font-medium text-[#545454]">Social</h3>
                            </div>
                            <p className="font-medium text-[#1E1E1E]">0</p>
                        </div>
                        <div className="flex justify-between items-center">
                            <div className="flex gap-2 items-center">
                                <SalesByCannelSvg />
                                <h3 className="font-medium text-[#545454]">Marketing</h3>
                            </div>
                            <p className="font-medium text-[#1E1E1E]">0</p>
                        </div>
                    </div>
                </div>
                <div className="p-7 border rounded-lg">
                    <div className="flex justify-between items-center mb-4">
                        <h3 className="text-lg font-semibold text-[#2F2F2F]">Average online ratings over time</h3>
                        <p className="text-[#5E22DD] font-medium text-sm">View report</p>
                    </div>
                    <p className="text-2xl font-semibold text-[#1E1E1E] mb-7">SAR 0.00</p>
                    <PresenceChartSix />
                    <div className="space-y-3">
                        <div className="flex justify-between items-center">
                            <div className="flex gap-2 items-center">
                                <SalesByCannelSvg />
                                <h3 className="font-medium text-[#545454]">Fresha marketplace</h3>
                            </div>
                            <p className="font-medium text-[#1E1E1E]">0</p>
                        </div>
                        <div className="flex justify-between items-center">
                            <div className="flex gap-2 items-center">
                                <SalesByCannelSvg />
                                <h3 className="font-medium text-[#545454]">Book now link</h3>
                            </div>
                            <p className="font-medium text-[#1E1E1E]">0</p>
                        </div>
                        <div className="flex justify-between items-center">
                            <div className="flex gap-2 items-center">
                                <SalesByCannelSvg />
                                <h3 className="font-medium text-[#545454]">Social</h3>
                            </div>
                            <p className="font-medium text-[#1E1E1E]">0</p>
                        </div>
                        <div className="flex justify-between items-center">
                            <div className="flex gap-2 items-center">
                                <SalesByCannelSvg />
                                <h3 className="font-medium text-[#545454]">Marketing</h3>
                            </div>
                            <p className="font-medium text-[#1E1E1E]">0</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className="grid grid-cols-2 gap-5 mb-5">
                <div className="p-7 border rounded-lg">
                    <div className="flex justify-between items-center mb-4">
                        <h3 className="text-lg font-semibold text-[#2F2F2F]">% online no-shows over time</h3>
                        <p className="text-[#5E22DD] font-medium text-sm">View report</p>
                    </div>
                    <p className="text-2xl font-semibold text-[#1E1E1E] mb-7">0%</p>
                    <PresenceChartSeven />
                    <div className="space-y-3">
                        <div className="flex justify-between items-center">
                            <div className="flex gap-2 items-center">
                                <SalesByCannelSvg />
                                <h3 className="font-medium text-[#545454]">Fresha marketplace</h3>
                            </div>
                            <p className="font-medium text-[#1E1E1E]">0</p>
                        </div>
                        <div className="flex justify-between items-center">
                            <div className="flex gap-2 items-center">
                                <SalesByCannelSvg />
                                <h3 className="font-medium text-[#545454]">Book now link</h3>
                            </div>
                            <p className="font-medium text-[#1E1E1E]">0</p>
                        </div>
                        <div className="flex justify-between items-center">
                            <div className="flex gap-2 items-center">
                                <SalesByCannelSvg />
                                <h3 className="font-medium text-[#545454]">Social</h3>
                            </div>
                            <p className="font-medium text-[#1E1E1E]">0</p>
                        </div>
                        <div className="flex justify-between items-center">
                            <div className="flex gap-2 items-center">
                                <SalesByCannelSvg />
                                <h3 className="font-medium text-[#545454]">Marketing</h3>
                            </div>
                            <p className="font-medium text-[#1E1E1E]">0</p>
                        </div>
                    </div>
                </div>
                <div className="p-7 border rounded-lg">
                    <div className="flex justify-between items-center mb-4">
                        <h3 className="text-lg font-semibold text-[#2F2F2F]">% online cancellation over time</h3>
                        <p className="text-[#5E22DD] font-medium text-sm">View report</p>
                    </div>
                    <p className="text-2xl font-semibold text-[#1E1E1E] mb-7">SAR 0.00</p>
                    <PresenceChartSeven />
                    <div className="space-y-3">
                        <div className="flex justify-between items-center">
                            <div className="flex gap-2 items-center">
                                <SalesByCannelSvg />
                                <h3 className="font-medium text-[#545454]">Fresha marketplace</h3>
                            </div>
                            <p className="font-medium text-[#1E1E1E]">0</p>
                        </div>
                        <div className="flex justify-between items-center">
                            <div className="flex gap-2 items-center">
                                <SalesByCannelSvg />
                                <h3 className="font-medium text-[#545454]">Book now link</h3>
                            </div>
                            <p className="font-medium text-[#1E1E1E]">0</p>
                        </div>
                        <div className="flex justify-between items-center">
                            <div className="flex gap-2 items-center">
                                <SalesByCannelSvg />
                                <h3 className="font-medium text-[#545454]">Social</h3>
                            </div>
                            <p className="font-medium text-[#1E1E1E]">0</p>
                        </div>
                        <div className="flex justify-between items-center">
                            <div className="flex gap-2 items-center">
                                <SalesByCannelSvg />
                                <h3 className="font-medium text-[#545454]">Marketing</h3>
                            </div>
                            <p className="font-medium text-[#1E1E1E]">0</p>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default PresenceDashboard;