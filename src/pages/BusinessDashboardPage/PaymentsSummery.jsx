import BreadCrumb from "@/components/BusinessHelpCenter/BreadCrumb/BreadCrumb";
import { AppointmentCalendarSvg, AppointmentCsvSvg, AppointmentExcelSvg, AppointmentPdfSvg, DropdownSvg, ExportSvg, LeftSideArrowSvg } from "@/components/svgContainer/SvgContainer";
import { Link } from "react-router-dom";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import SalesSummaryModal from "@/components/BusinessDashboard/Modals/SalesSummaryModal";
import { useState } from "react";
import { Calendar } from "@/components/ui/calendar";
import { format } from "date-fns";
const tableData = [
    {
        id: 1,
        paymentMethod: 'Total',
        NoOfPayment: 22,
        amount: 'SAR 6,500.00',
        numberOfRefund: 1,
        refunds: 'SAR 50.00',
        netPayment: 'SAR 6,450.00',
    },
    {
        id: 2,
        paymentMethod: 'Cash',
        NoOfPayment: 22,
        amount: 'SAR 6,500.00',
        numberOfRefund: 1,
        refunds: 'SAR 50.00',
        netPayment: 'SAR 6,450.00',
    },
    {
        id: 3,
        paymentMethod: 'other',
        NoOfPayment: 22,
        amount: 'SAR 6,500.00',
        numberOfRefund: 1,
        refunds: 'SAR 50.00',
        netPayment: 'SAR 6,450.00',
    },
    {
        id: 4,
        paymentMethod: 'Total',
        NoOfPayment: 22,
        amount: 'SAR 6,500.00',
        numberOfRefund: 1,
        refunds: 'SAR 50.00',
        netPayment: 'SAR 6,450.00',
    },
    {
        id: 5,
        paymentMethod: 'Total',
        NoOfPayment: 22,
        amount: 'SAR 6,500.00',
        numberOfRefund: 1,
        refunds: 'SAR 50.00',
        netPayment: 'SAR 6,450.00',
    },
]

const PaymentsSummery = () => {
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
                        { label: "Payments summary", href: "" },
                    ]}
                />
            </div>

            <h3 className="font-outfit text-2xl mb-1 font-medium text-[#2C2C2C]">Payments summary</h3>
            <p className="text-[#2C2C2C] mb-5 font-medium">Payments split by payment methods</p>

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
                    {/* Filter */}
                    <SalesSummaryModal />
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
                    <th className="px-4 py-8">Payment method</th>
                    <th className="px-4 py-8">No. of payments</th>
                    <th className="px-4 py-8">Payment amount</th>
                    <th className="px-4 py-8">No. of refunds</th>
                    <th className="px-4 py-8">Refunds</th>
                    <th className="px-4 py-8">Net payments</th>
                </tr>
                <tbody>
                    {
                        tableData.map(data => <tr key={data.id} className="hover:bg-gray-200 text-left border-t 
                                first:border-none border-dashed text-[#545454]">
                            <td className="px-4 text-[#545454] font-medium py-5">{data.paymentMethod}</td>
                            <td className="px-4 text-[#545454] font-medium py-5">{data.NoOfPayment}</td>
                            <td className="px-4 text-[#545454] font-medium py-5">{data.amount}</td>
                            <td className="px-4 text-[#545454] font-medium py-5">{data.numberOfRefund}</td>
                            <td className="px-4 text-[#545454] font-medium py-5">{data.refunds}</td>
                            <td className="px-4 text-[#545454] font-medium py-5">{data.netPayment}</td>
                        </tr>)
                    }
                </tbody>
            </table>
        </div>
    );
};

export default PaymentsSummery;