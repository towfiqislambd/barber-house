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

const GiftCardSold = () => {
    return (
        <div>
            <h3 className="text-[#2C2C2C] font-outfit text-xl lg:text-2xl font-medium mb-2">Gift cards sold</h3>
            <p className="text-[#2C2C2C] lg:text-lg font-medium mb-5 lg:mb-10">View and filter memberships purchased by your clients</p>
            {/* Upper part */}
            <div className="flex justify-between items-center gap-5 flex-wrap">
                <div className="flex gap-3 lg:gap-5 items-center flex-wrap">
                    {/* Search */}
                    <div className="relative w-[300px] lg:w-[350px] 4xl:w-[450px]">
                        <input type="text" className="rounded-full bg-white w-full py-2 lg:py-3 px-3 lg:px-5 shadow outline-none border border-gray-100" placeholder="Search by sale or client" />
                        <button className="absolute right-2 top-2 w-7 h-7 lg:w-9 lg:h-9 bg-black grid place-items-center rounded-full"><AppointmentsSearchSvg /></button>
                    </div>

                    {/* Filter */}
                    <MembershipSoldModal />

                </div>
                <div className="flex gap-3 items-center">
                    {/* Export */}
                    <Popover>
                        <PopoverTrigger>
                            <button className="px-2 lg:px-4 py-1 lg:py-[10px] flex gap-2 items-center outline-none rounded-lg border border-[#00C2CB]">
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
                <table className="w-full border-collapse lg:min-w-[800px]">
                    <tr className="lg:text-lg text-gray-700 text-nowrap">
                        <th className="px-2 lg:px-4 text-left py-3 lg:py-6">Code</th>
                        <th className="px-2 lg:px-4 text-left py-3 lg:py-6">Sender</th>
                        <th className="px-2 lg:px-4 text-left py-3 lg:py-6">Recipient</th>
                        <th className="px-2 lg:px-4 text-left py-3 lg:py-6">Purchase date</th>
                        <th className="px-2 lg:px-4 text-left py-3 lg:py-6">Amount</th>
                    </tr>
                    <tbody>
                        {
                            tableData.map(data => <tr key={data.id} className="hover:bg-gray-200 text-nowrap border-t 
                    first:border-none border-dashed text-[#545454]">
                                <td className="lg:px-4  px-2 text-[#545454] font-medium py-3 lg:py-5">{data.name}</td>
                                <td className="lg:px-4  px-2 text-[#545454] font-medium py-3 lg:py-5 text-left">{data.client}</td>
                                <td className="lg:px-4  px-2 text-[#545454] font-medium py-3 lg:py-5 text-left">{data.client}</td>
                                <td className="lg:px-4  px-2 text-[#545454] font-medium py-3 lg:py-5 text-left">{data.started_date}</td>
                                <td className="lg:px-4  px-2 text-[#545454] font-medium py-3 lg:py-5 text-left">{data.tips}</td>
                                <td className="lg:px-4  px-2 text-[#545454] font-medium py-3 lg:py-5 text-left">{data.gross_total}</td>
                            </tr>)
                        }
                    </tbody>
                </table>
            </div>
        </div>
    );
};

export default GiftCardSold;