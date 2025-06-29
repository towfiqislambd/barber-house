import BreadCrumb from "@/components/BusinessHelpCenter/BreadCrumb/BreadCrumb";
import { AppointmentCalendarSvg, AppointmentCsvSvg, AppointmentExcelSvg, AppointmentPdfSvg, DropdownSvg, ExportSvg, LeftSideArrowSvg } from "@/components/svgContainer/SvgContainer";
import { Link } from "react-router-dom";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { useState } from "react";
import { Calendar } from "@/components/ui/calendar";
import { format } from "date-fns";
const tableData = [
    {
        id: 1,
        saleNo: 24,
        saleDate: '17 Feb 2025, 15:15',
        saleStatus: 'Completed',
        location: 'Ghalib’s salon',
        client: 'Work - in',
        cannel: 'Offline',
        itemSold: 54,
        totalSold: 'SAR 2450.00',
        taxes: 'SAR 2500.00',
        totalSales: 'SAR 2500.00',
        giftCard: 'SAR 0.00',
        ServiceCard: 'SAR 150.00',
        amountDue: 'SAR 230.00'
    },
    {
        id: 2,
        saleNo: 24,
        saleDate: '17 Feb 2025, 15:15',
        saleStatus: 'Completed',
        location: 'Ghalib’s salon',
        client: 'Work - in',
        cannel: 'Offline',
        itemSold: 54,
        totalSold: 'SAR 2450.00',
        taxes: 'SAR 2500.00',
        totalSales: 'SAR 2500.00',
        giftCard: 'SAR 0.00',
        ServiceCard: 'SAR 150.00',
        amountDue: 'SAR 230.00'
    },
    {
        id: 3,
        saleNo: 24,
        saleDate: '17 Feb 2025, 15:15',
        saleStatus: 'Completed',
        location: 'Ghalib’s salon',
        client: 'Work - in',
        cannel: 'Offline',
        itemSold: 54,
        totalSold: 'SAR 2450.00',
        taxes: 'SAR 2500.00',
        totalSales: 'SAR 2500.00',
        giftCard: 'SAR 0.00',
        ServiceCard: 'SAR 150.00',
        amountDue: 'SAR 230.00'
    },
    {
        id: 4,
        saleNo: 24,
        saleDate: '17 Feb 2025, 15:15',
        saleStatus: 'Completed',
        location: 'Ghalib’s salon',
        client: 'Work - in',
        cannel: 'Offline',
        itemSold: 54,
        totalSold: 'SAR 2450.00',
        taxes: 'SAR 2500.00',
        totalSales: 'SAR 2500.00',
        giftCard: 'SAR 0.00',
        ServiceCard: 'SAR 150.00',
        amountDue: 'SAR 230.00'
    },
    {
        id: 5,
        saleNo: 24,
        saleDate: '17 Feb 2025, 15:15',
        saleStatus: 'Completed',
        location: 'Ghalib’s salon',
        client: 'Work - in',
        cannel: 'Offline',
        itemSold: 54,
        totalSold: 'SAR 2450.00',
        taxes: 'SAR 2500.00',
        totalSales: 'SAR 2500.00',
        giftCard: 'SAR 0.00',
        ServiceCard: 'SAR 150.00',
        amountDue: 'SAR 230.00'
    },
]
const SalesList = () => {
    const [date, setDate] = useState(null);
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
                        { label: "Sales list", href: "" },
                    ]}
                />
            </div>

            <h3 className="font-outfit text-2xl mb-1 font-medium text-[#2C2C2C]">Sales list</h3>
            <p className="text-[#2C2C2C] mb-5 font-medium">Complete listing of all sales transactions.</p>

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
                    <th className="px-4 py-8">Sale no.</th>
                    <th className="px-4 py-8">Sale date</th>
                    <th className="px-4 py-8">Sale status</th>
                    <th className="px-4 py-8">Location</th>
                    <th className="px-4 py-8">Client</th>
                    <th className="px-4 py-8">Channel</th>
                    <th className="px-4 py-8">Items sold</th>
                    <th className="px-4 py-8">Total sales</th>
                    <th className="px-4 py-8">Gift card</th>
                    <th className="px-4 py-8">Service charges</th>
                    <th className="px-4 py-8">Amount due</th>
                </tr>
                <tbody>
                    {
                        tableData.map(data => <tr key={data.id} className="hover:bg-gray-200 text-left border-t 
                                first:border-none border-dashed text-[#545454]">
                            <td className="px-4 text-[#545454] font-medium py-5">{data.saleNo}</td>
                            <td className="px-4 text-[#545454] font-medium py-5">{data.saleDate}</td>
                            <td className="px-4 text-[#545454] font-medium py-5">{data.saleStatus}</td>
                            <td className="px-4 text-[#545454] font-medium py-5">{data.location}</td>
                            <td className="px-4 text-[#545454] font-medium py-5">{data.client}</td>
                            <td className="px-4 text-[#545454] font-medium py-5">{data.cannel}</td>
                            <td className="px-4 text-[#545454] font-medium py-5">{data.itemSold}</td>
                            <td className="px-4 text-[#545454] font-medium py-5">{data.totalSales}</td>
                            <td className="px-4 text-[#545454] font-medium py-5">{data.giftCard}</td>
                            <td className="px-4 text-[#545454] font-medium py-5">{data.ServiceCard}</td>
                            <td className="px-4 text-[#545454] font-medium py-5">{data.amountDue}</td>
                        </tr>)
                    }
                </tbody>
            </table>

        </>
    );
};

export default SalesList;