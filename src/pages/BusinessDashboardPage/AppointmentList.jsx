import BreadCrumb from "@/components/BusinessHelpCenter/BreadCrumb/BreadCrumb";
import {
  AppointmentCalendarSvg,
  AppointmentCsvSvg,
  AppointmentExcelSvg,
  AppointmentPdfSvg,
  DropdownSvg,
  ExportSvg,
  LeftSideArrowSvg,
} from "@/components/svgContainer/SvgContainer";
import { Link } from "react-router-dom";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { useState } from "react";
import { Calendar } from "@/components/ui/calendar";
import { format } from "date-fns";
const tableData = [
  {
    id: 1,
    paymentDate: "17 Feb 2025, 15:15",
    paymentNo: "380643027",
    saleDate: "17 Feb 2025 15:15",
    saleNo: "24",
    ppptRef: "477A98F7",
    client: "walk-in",
    location: "Ghalib’s salon",
    teamMember: "M. R. Shihab",
    transactionType: "Sales",
    paymentMethod: "cash",
    paymentAmount: "SAR 550.00",
  },
  {
    id: 2,
    paymentDate: "17 Feb 2025, 15:15",
    paymentNo: "380643027",
    saleDate: "17 Feb 2025 15:15",
    saleNo: "24",
    ppptRef: "477A98F7",
    client: "walk-in",
    location: "Ghalib’s salon",
    teamMember: "M. R. Shihab",
    transactionType: "Sales",
    paymentMethod: "cash",
    paymentAmount: "SAR 550.00",
  },
  {
    id: 3,
    paymentDate: "17 Feb 2025, 15:15",
    paymentNo: "380643027",
    saleDate: "17 Feb 2025 15:15",
    saleNo: "24",
    ppptRef: "477A98F7",
    client: "walk-in",
    location: "Ghalib’s salon",
    teamMember: "M. R. Shihab",
    transactionType: "Sales",
    paymentMethod: "cash",
    paymentAmount: "SAR 550.00",
  },
  {
    id: 4,
    paymentDate: "17 Feb 2025, 15:15",
    paymentNo: "380643027",
    saleDate: "17 Feb 2025 15:15",
    saleNo: "24",
    ppptRef: "477A98F7",
    client: "walk-in",
    location: "Ghalib’s salon",
    teamMember: "M. R. Shihab",
    transactionType: "Sales",
    paymentMethod: "cash",
    paymentAmount: "SAR 550.00",
  },
];

const AppointmentList = () => {
  const [date, setDate] = useState(null);
  return (
    <div className="px-5 md:px-0 py-5 md:py-0">
      <div className="flex gap-4 items-center mb-5">
        <Link to={"/businessDashboard/reporting"}>
          <button className="flex items-center gap-[6px] border border-[#757575] px-3 py-2 rounded-[100px] text-[#2C2C2C] font-manrope text-base font-medium leading-6">
            <LeftSideArrowSvg />
            Back
          </button>
        </Link>
        <BreadCrumb
          items={[
            { label: "Appointments", href: "/businessDashboard/reporting" },
            { label: "Appointments list", href: "" },
          ]}
        />
      </div>

      <h3 className="font-outfit text-2xl mb-1 font-medium text-[#2C2C2C]">
        Appointments List
      </h3>
      <p className="text-[#2C2C2C] mb-5 font-medium">
        Full list of scheduled appointments.
      </p>
      <div className="flex justify-between lg:mb-10 mb-5 flex-wrap gap-5">
        <div className="flex gap-5 items-center flex-wrap">
          {/* Date */}
          <Popover>
            <PopoverTrigger asChild>
              <button className="flex gap-2 focus:border-none border-gray-100 bg-white items-center md:py-3 py-2 focus:outline-none md:px-4 px-3 font-medium text-[#2C2C2C] rounded-full border shadow">
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
              <button className="md:px-4 px-2 md:py-[10px] py-2 flex gap-2 items-center outline-none rounded-lg border border-borderColorLight">
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
      <div className="overflow-x-auto">
        {/* Table */}
        <table className="w-full border-collapse text-left lg:min-w-[800px]">
          <tr className="text-lg text-gray-700 text-nowrap">
            <th className="px-4 py-4">Payment date</th>
            <th className="px-4 py-4">Payment no.</th>
            <th className="px-4 py-4">Sale date</th>
            <th className="px-4 py-4">Sale no.</th>
            <th className="px-4 py-4">Appt. ref.</th>
            <th className="px-4 py-4">Client</th>
            <th className="px-4 py-4">Location</th>
            <th className="px-4 py-4">Team member</th>
            <th className="px-4 py-4">Transaction type</th>
            <th className="px-4 py-4">Payment method</th>
            <th className="px-4 py-4">Payment Amount</th>
          </tr>
          <tbody>
            {tableData.map((data) => (
              <tr
                key={data.id}
                className="hover:bg-gray-200 text-left border-t first:border-none border-dashed text-[#545454] text-nowrap"
              >
                <td className="px-3 lg:px-4 text-[#545454] font-medium py-4 lg:py-5">
                  {data.paymentDate}
                </td>
                <td className="px-3 lg:px-4 text-[#545454] font-medium py-4 lg:py-5">
                  {data.paymentNo}
                </td>
                <td className="px-3 lg:px-4 text-[#545454] font-medium py-4 lg:py-5">
                  {data.saleDate}
                </td>
                <td className="px-3 lg:px-4 text-primary font-medium py-4 lg:py-5">
                  {data.saleNo}
                </td>
                <td className="px-3 lg:px-4 text-primary font-medium py-4 lg:py-5">
                  {data.ppptRef}
                </td>
                <td className="px-3 lg:px-4 text-[#545454] font-medium py-4 lg:py-5">
                  {data.client}
                </td>
                <td className="px-3 lg:px-4 text-[#545454] font-medium py-4 lg:py-5">
                  {data.location}
                </td>
                <td className="px-3 lg:px-4 text-primary font-medium py-4 lg:py-5">
                  {data.teamMember}
                </td>
                <td className="px-3 lg:px-4 text-[#545454] font-medium py-4 lg:py-5">
                  {data.transactionType}
                </td>
                <td className="px-3 lg:px-4 text-[#545454] font-medium py-4 lg:py-5">
                  {data.paymentMethod}
                </td>
                <td className="px-3 lg:px-4 text-[#545454] font-medium py-4 lg:py-5">
                  {data.paymentAmount}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default AppointmentList;
