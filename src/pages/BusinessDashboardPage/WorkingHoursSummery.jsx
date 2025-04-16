import BreadCrumb from "@/components/BusinessHelpCenter/BreadCrumb/BreadCrumb";
import { AppointmentCalendarSvg, AppointmentCsvSvg, AppointmentExcelSvg, AppointmentPdfSvg, DropdownSvg, ExportSvg, LeftSideArrowSvg } from "@/components/svgContainer/SvgContainer";
import { Link } from "react-router-dom";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import ClientModal from "@/components/BusinessDashboard/Modals/ClientModal";
const tableData = [
    {
        id: 1,
        location: "BS",
        scheduled: '452h 0m',
        timeOff: '0m',
        blocked: '0m',
        available: '452h 25m',
        booked: '1h 10m',
        unBooked: '1h 10m',
        occupancy: '0.3%',
    },
    {
        id: 2,
        location: "BS",
        scheduled: '452h 0m',
        timeOff: '0m',
        blocked: '0m',
        available: '452h 25m',
        booked: '1h 10m',
        unBooked: '1h 10m',
        occupancy: '0.3%',
    },
    {
        id: 3,
        location: "BS",
        scheduled: '452h 0m',
        timeOff: '0m',
        blocked: '0m',
        available: '452h 25m',
        booked: '1h 10m',
        unBooked: '1h 10m',
        occupancy: '0.3%',
    },
    {
        id: 4,
        location: "BS",
        scheduled: '452h 0m',
        timeOff: '0m',
        blocked: '0m',
        available: '452h 25m',
        booked: '1h 10m',
        unBooked: '1h 10m',
        occupancy: '0.3%',
    },
    {
        id: 5,
        location: "BS",
        scheduled: '452h 0m',
        timeOff: '0m',
        blocked: '0m',
        available: '452h 25m',
        booked: '1h 10m',
        unBooked: '1h 10m',
        occupancy: '0.3%',
    },
]

const WorkingHoursSummery = () => {
    return (
        <>

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
                        { label: "Working hours Summary", href: "" },
                    ]}
                />
            </div>

            <h3 className="font-outfit text-2xl mb-1 font-medium text-[#2C2C2C]">Working hours Summary</h3>
            <p className="text-[#2C2C2C] mb-5 font-medium">Overview of operational hours and productivity</p>

            <div className="flex justify-between mb-10">
                <div className="flex gap-5 items-center">
                    {/* Date */}
                    <button className="flex gap-2 focus:border-none border-gray-100 bg-white items-center py-3 focus:outline-none px-4 font-medium text-[#2C2C2C] rounded-full border shadow">
                        <AppointmentCalendarSvg />
                        <p>Month to date</p>
                    </button>
                    {/* Filter */}
                    <ClientModal />
                </div>
                <div className="flex gap-10 items-center">
                    <Popover>
                        <PopoverTrigger>
                            <button className="px-4 py-[10px] flex gap-2 items-center outline-none rounded-lg border border-[#00C2CB]">
                                <ExportSvg />
                                <p>Option</p>
                                <DropdownSvg />
                            </button>
                        </PopoverTrigger>
                        <PopoverContent className="w-[150px] p-4">
                            <div className="space-y-4">
                                <button className="flex gap-2 items-center">
                                    <AppointmentPdfSvg />
                                    <p className="text-[#545454] font-medium">PDF</p>
                                </button>
                                <button className="flex gap-2 items-center">
                                    <AppointmentCsvSvg />
                                    <p className="text-[#545454] font-medium">CSV</p>
                                </button>
                                <button className="flex gap-2 items-center">
                                    <AppointmentExcelSvg />
                                    <p className="text-[#545454] font-medium">Excel</p>
                                </button>
                            </div>
                        </PopoverContent>
                    </Popover>
                    <p className="text-[#2C2C2C] font-medium">Data from 21 mins ago</p>
                </div>
            </div>

            {/* Table */}
            <table className="w-full border-collapse text-left">
                <tr className="text-lg text-gray-700">
                    <th className="px-4 py-8">Location</th>
                    <th className="px-4 py-8">Scheduled</th>
                    <th className="px-4 py-8">Time off</th>
                    <th className="px-4 py-8">Blocked</th>
                    <th className="px-4 py-8">Available</th>
                    <th className="px-4 py-8">Booked</th>
                    <th className="px-4 py-8">Unbooked</th>
                    <th className="px-4 py-8">0% Occupancy</th>
                </tr>
                <tbody>
                    {
                        tableData.map(data => <tr key={data.id} className="hover:bg-gray-200 text-left border-t 
                                first:border-none border-dashed text-[#545454]">
                            <td className="px-4 text-[#545454] font-medium py-5">{data.location}</td>
                            <td className="px-4 text-[#545454] font-medium py-5">{data.scheduled}</td>
                            <td className="px-4 text-[#545454] font-medium py-5">{data.timeOff}</td>
                            <td className="px-4 text-[#545454] font-medium py-5">{data.blocked}</td>
                            <td className="px-4 text-[#545454] font-medium py-5">{data.available}</td>
                            <td className="px-4 text-[#545454] font-medium py-5">{data.booked}</td>
                            <td className="px-4 text-[#545454] font-medium py-5">{data.unBooked}</td>
                            <td className="px-4 text-[#545454] font-medium py-5">{data.occupancy}</td>
                        </tr>)
                    }
                </tbody>
            </table>

        </>
    );
};

export default WorkingHoursSummery;