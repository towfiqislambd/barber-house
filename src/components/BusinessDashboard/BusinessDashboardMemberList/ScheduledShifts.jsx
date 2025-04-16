import { AppointmentCalendarSvg, DropdownSvg, EditShiftSvg, ScheduledSvg } from "@/components/svgContainer/SvgContainer";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { useState } from "react";
import { Link } from "react-router-dom";
import { Calendar } from "@/components/ui/calendar";
import { format } from "date-fns";
import { PlusCircleIcon } from "lucide-react";
import AddTimeOffModal from "../Modals/AddTimeOffModal";
import RegularShift from "../Modals/RegularShift";
import DeleteShiftModal from "../Modals/DeleteShiftModal";
const tableData = [
    {
        id: 1,
        image: <ScheduledSvg />,
        name: 'Shawal Rahman',
        duration: '33h 30min',
        dayOne: '10:00- 17:00',
        dayTwo: '10:00- 17:00',
        dayThree: '10:00- 17:00',
        dayFour: '10:00- 17:00',
        dayFive: '10:00- 17:00',
    },
    {
        id: 2,
        image: <ScheduledSvg />,
        name: 'Shawal Rahman',
        duration: '33h 30min',
        dayOne: '10:00- 17:00',
        dayTwo: '10:00- 17:00',
        dayThree: '10:00- 17:00',
        dayFour: '10:00- 17:00',
        dayFive: '10:00- 17:00',
    },
    {
        id: 3,
        image: <ScheduledSvg />,
        name: 'Shawal Rahman',
        duration: '33h 30min',
        dayOne: '10:00- 17:00',
        dayTwo: '10:00- 17:00',
        dayThree: '10:00- 17:00',
        dayFour: '10:00- 17:00',
        dayFive: '10:00- 17:00',
    },
    {
        id: 4,
        image: <ScheduledSvg />,
        name: 'Shawal Rahman',
        duration: '33h 30min',
        dayOne: '10:00- 17:00',
        dayTwo: '10:00- 17:00',
        dayThree: '10:00- 17:00',
        dayFour: '10:00- 17:00',
        dayFive: '10:00- 17:00',
    },
    {
        id: 5,
        image: <ScheduledSvg />,
        name: 'Shawal Rahman',
        duration: '33h 30min',
        dayOne: '10:00- 17:00',
        dayTwo: '10:00- 17:00',
        dayThree: '10:00- 17:00',
        dayFour: '10:00- 17:00',
        dayFive: '10:00- 17:00',
    },
]
const ScheduledShifts = () => {
    const [date, setDate] = useState(null);
    return (
        <div>
            <h3 className="text-[#2C2C2C] font-outfit text-2xl font-medium mb-5">Scheduled shifts</h3>
            {/* Upper part */}
            <div className="flex justify-between items-center flex-wrap gap-3 lg:gap-5">
                <div className="flex gap-4 lg:gap-7 items-center flex-wrap">
                    {/* Date */}
                    <Popover>
                        <PopoverTrigger asChild>
                            <button className="flex gap-2 focus:border-none border-gray-100 bg-white items-center py-2 lg:py-3 focus:outline-none px-3 lg:px-4 font-medium text-[#2C2C2C] rounded-full border shadow">
                                <AppointmentCalendarSvg />
                                <p>{date ? format(date, "PPP") : "17-24 Feb, 2025"}</p>
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
                    {/* Export */}
                    <Popover>
                        <PopoverTrigger>
                            <button className="px-4 py-[10px] flex gap-2 items-center outline-none rounded-lg border border-[#00C2CB]">
                                <p>Options</p>
                                <DropdownSvg />
                            </button>
                        </PopoverTrigger>
                        <PopoverContent className="w-[200px] p-4">
                            <div className="space-y-4">
                                <button className="flex gap-2 items-center">
                                    <p className="text-[#545454] font-medium">Scheduling Settings</p>
                                </button>
                            </div>
                        </PopoverContent>
                    </Popover>
                    <Link to='/businessDashboard/add-team-member'>
                        <button className="bg-[#0D1619] text-white px-5 py-[10px] rounded-lg font-medium">Add</button>
                    </Link>
                </div>
            </div>
            <div className="overflow-x-auto">
                <table className="w-full border-collapse text-left min-w-[800px]">
                    <tr className="text-lg text-gray-700 text-nowrap">
                        <th className="px-4 py-8">Team member</th>
                        <th className="px-4 py-8">Mon, 3 Mar</th>
                        <th className="px-4 py-8">Mon, 4 Mar</th>
                        <th className="px-4 py-8">Mon, 5 Mar</th>
                        <th className="px-4 py-8">Mon, 6 Mar</th>
                        <th className="px-4 py-8">Mon, 7 Mar</th>
                    </tr>
                    <tbody>
                        {
                            tableData.map(data => <tr key={data.id} className="text-left border-t first:border-none border-dashed text-[#545454] text-nowrap">
                                <td className="px-4 border text-[#545454] font-medium py-2 flex gap-5 items-center">
                                    <div>{data.image}</div>
                                    <div className="flex-shrink-0">
                                        <h2 className="font-medium text-[#1E1E1E]">{data.name}</h2>
                                        <p>{data.duration}</p>
                                    </div>
                                    <Popover>
                                        <PopoverTrigger className="w-full h-full flex justify-center items-center">
                                            <button> <EditShiftSvg /></button>
                                        </PopoverTrigger>
                                        <PopoverContent className="w-auto p-4">
                                            <div className="flex flex-col gap-5 text-left items-start font-medium">
                                                <RegularShift />
                                                <button>Edit team member</button>
                                                <DeleteShiftModal />
                                            </div>
                                        </PopoverContent>
                                    </Popover>
                                </td>
                                <td className="px-4 border text-[#545454] font-medium py-2">
                                    <p className="bg-[#E7E8FF] text-center py-1 rounded">{data.dayOne}</p>
                                </td>
                                <td className="px-4 border text-[#545454] font-medium py-2">
                                    <p className="bg-[#E7E8FF] text-center py-1 rounded">{data.dayTwo}</p>
                                </td>
                                <td className="px-4 border text-[#545454] font-medium py-2">
                                    <p className="bg-[#E7E8FF] text-center py-1 rounded">{data.dayThree}</p>
                                </td>
                                <td className="px-4 border text-[#545454] font-medium py-2">
                                    <p className="bg-[#E7E8FF] text-center py-1 rounded">{data.dayFour}</p>
                                </td>
                                <td className="px-4 border text-center text-[#545454] font-medium py-2 bg-[#F4F5F7]">
                                    <Popover>
                                        <PopoverTrigger className="w-full h-full flex justify-center items-center">
                                            <PlusCircleIcon />
                                        </PopoverTrigger>
                                        <PopoverContent className="w-auto p-4">
                                            <div className="flex flex-col gap-5 text-left items-start font-medium">
                                                <Link to='/businessDashboard/shifts'>Add shift</Link>
                                                <button>Set regular shifts</button>
                                                <AddTimeOffModal />
                                            </div>
                                        </PopoverContent>
                                    </Popover>
                                </td>

                            </tr>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default ScheduledShifts;