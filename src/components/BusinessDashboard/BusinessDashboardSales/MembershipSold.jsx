import { AppointmentCsvSvg, AppointmentExcelSvg, AppointmentPdfSvg, AppointmentsSearchSvg, DropdownSvg, ExportSvg } from "@/components/svgContainer/SvgContainer";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import MembershipSoldModal from "../Modals/MembershipSoldModal";
const tableData = [
    {
        id: 1,
        name: 'Tariqul Fahim',
        client: 'Fahmida Tanni',
        status: 'Active',
        type: 'All types',
        started_date: '20 Mar, 2025',
        end_date: '19 April, 2025',
        tips: 'SAR 0.00',
        total_charged: 'SAR 10.00',
    },
    {
        id: 2,
        name: 'Tariqul Fahim',
        client: 'Fahmida Tanni',
        status: 'Active',
        type: 'All types',
        started_date: '20 Mar, 2025',
        end_date: '19 April, 2025',
        tips: 'SAR 0.00',
        total_charged: 'SAR 10.00',
    },
    {
        id: 3,
        name: 'Tariqul Fahim',
        client: 'Fahmida Tanni',
        status: 'Inactive',
        type: 'All types',
        started_date: '20 Mar, 2025',
        end_date: '19 April, 2025',
        tips: 'SAR 0.00',
        total_charged: 'SAR 10.00',
    },
    {
        id: 4,
        name: 'Tariqul Fahim',
        client: 'Fahmida Tanni',
        status: 'Active',
        type: 'All types',
        started_date: '20 Mar, 2025',
        end_date: '19 April, 2025',
        tips: 'SAR 0.00',
        total_charged: 'SAR 10.00',
    },
]

const MembershipSold = () => {
    return (
        <div>
            <h3 className="text-[#2C2C2C] text-xl font-outfit lg:text-2xl font-medium mb-2">Memberships sold</h3>
            <p className="text-[#2C2C2C] lg:text-lg font-medium mb-5 lg:mb-10">View and filter memberships purchased by your clients</p>
            {/* Upper part */}
            <div className="flex justify-between items-center flex-wrap gap-5">
                <div className="flex gap-5 items-center flex-wrap">
                    {/* Search */}
                    <div className="relative w-[300px] lg:w-[350px] 4xl:w-[450px]">
                        <input type="text" className="rounded-full bg-white w-full py-2 lg:py-3 px-5 shadow outline-none lg:border border-gray-100" placeholder="Search by sale or client" />
                        <button className="absolute right-2 top-2 w-7 h-7 lg:w-9 lg:h-9 bg-black grid place-items-center rounded-full"><AppointmentsSearchSvg /></button>
                    </div>

                    {/* Filter */}
                    <MembershipSoldModal />

                </div>
                <div className="flex gap-3 items-center flex-wrap">
                    {/* Export */}
                    <Popover>
                        <PopoverTrigger>
                            <button className="px-3 lg:px-4  py-2 lg:py-[10px] flex gap-2 items-center outline-none rounded-lg border border-[#00C2CB]">
                                <ExportSvg />
                                <p>Options</p>
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
                </div>
            </div>
            <div className="border-t border-[#008A90] mt-10 pb-5"></div>
            <div className="overflow-x-auto">
                {/* Table */}
                <table className="w-full border-collapse">
                    <tr className="lg:text-lg text-gray-700 text-nowrap text-base">
                        <th className="px-2 lg:px-4 text-left py-3 lg:py-6">Name</th>
                        <th className="px-2 lg:px-4 text-left py-3 lg:py-6">Client</th>
                        <th className="px-2 lg:px-4 text-left py-3 lg:py-6">Type</th>
                        <th className="px-2 lg:px-4 text-left py-3 lg:py-6">Start date</th>
                        <th className="px-2 lg:px-4 text-left py-3 lg:py-6">End date</th>
                        <th className="px-2 lg:px-4 text-left py-3 lg:py-6">Status</th>
                        <th className="px-2 lg:px-4 text-left py-3 lg:py-6">Total charged</th>
                    </tr>
                    <tbody>
                        {
                            tableData.map(data => <tr key={data.id} className="hover:bg-gray-200 border-t 
                    first:border-none border-dashed text-sm lg:text-base text-[#545454] text-nowrap">
                                <td className="px-2 lg:px-4 text-[#545454] font-medium py-5">{data.name}</td>
                                <td className="px-2 lg:px-4 text-[#545454] font-medium py-5 text-left">{data.client}</td>
                                <td className="px-2 lg:px-4 text-[#545454] font-medium py-5 text-left">{data.type}</td>
                                <td className="px-2 lg:px-4 font-medium py-5 text-left">
                                    <button className={`${data.status === 'Active' ? 'text-[#008C4F] bg-[#DCFEE6] border-[#00c1cb9d]' : 'text-[#D21837] bg-[#FFE1E1] border-[#ff563065]'} px-2 lg:px-3 py-1 border rounded-full`}>{data.status}</button>
                                </td>
                                <td className="px-2 lg:px-4 text-[#545454] font-medium py-5 text-left">{data.started_date}</td>
                                <td className="px-2 lg:px-4 text-[#545454] font-medium py-5 text-left">{data.end_date}</td>
                                <td className="px-2 lg:px-4 text-[#545454] font-medium py-5 text-left">{data.tips}</td>
                                <td className="px-2 lg:px-4 text-[#545454] font-medium py-5 text-left">{data.gross_total}</td>
                            </tr>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default MembershipSold;