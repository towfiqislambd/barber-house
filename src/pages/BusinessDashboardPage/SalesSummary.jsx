import BreadCrumb from "@/components/BusinessHelpCenter/BreadCrumb/BreadCrumb";
import {
  AppointmentCalendarSvg,
  AppointmentCsvSvg,
  AppointmentExcelSvg,
  AppointmentPdfSvg,
  DropdownSvg,
  ExportSvg,
  LeftSideArrowSvg,
  ReportingDropdownSvg,
} from "@/components/svgContainer/SvgContainer";
import { Link } from "react-router-dom";
import SalesSummaryModal from "@/components/BusinessDashboard/Modals/SalesSummaryModal";
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
    type: "service",
    salesQty: 24,
    itemsSold: 54,
    teamMember: "M. R. Shihab",
    grossSales: "SAR 2500.00",
    totalDiscount: "SAR 0.00",
    refunds: "SAR 0.00",
    netSales: "SAR 0.00",
    taxes: "SAR 2500.00",
    totalSales: "SAR 2500.00",
  },
  {
    id: 2,
    type: "service",
    salesQty: 24,
    itemsSold: 54,
    teamMember: "M. R. Shihab",
    grossSales: "SAR 2500.00",
    totalDiscount: "SAR 0.00",
    refunds: "SAR 0.00",
    netSales: "SAR 0.00",
    taxes: "SAR 2500.00",
    totalSales: "SAR 2500.00",
  },
  {
    id: 3,
    type: "service",
    salesQty: 24,
    itemsSold: 54,
    teamMember: "M. R. Shihab",
    grossSales: "SAR 2500.00",
    totalDiscount: "SAR 0.00",
    refunds: "SAR 0.00",
    netSales: "SAR 0.00",
    taxes: "SAR 2500.00",
    totalSales: "SAR 2500.00",
  },
  {
    id: 4,
    type: "service",
    salesQty: 24,
    itemsSold: 54,
    teamMember: "M. R. Shihab",
    grossSales: "SAR 2500.00",
    totalDiscount: "SAR 0.00",
    refunds: "SAR 0.00",
    netSales: "SAR 0.00",
    taxes: "SAR 2500.00",
    totalSales: "SAR 2500.00",
  },
  {
    id: 5,
    type: "service",
    salesQty: 24,
    itemsSold: 54,
    teamMember: "M. R. Shihab",
    grossSales: "SAR 2500.00",
    totalDiscount: "SAR 0.00",
    refunds: "SAR 0.00",
    netSales: "SAR 0.00",
    taxes: "SAR 2500.00",
    totalSales: "SAR 2500.00",
  },
];
const SalesSummary = () => {
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
            { label: "All reports", href: "/businessDashboard/reporting" },
            { label: "Sales summary", href: "" },
          ]}
        />
      </div>
      <h3 className="font-outfit text-2xl mb-1 font-medium text-[#2C2C2C]">
        Sales summary
      </h3>
      <p className="text-[#2C2C2C] mb-5 font-medium">
        Sales quantities and value, excluding gift card sales.
      </p>
      <div className="flex flex-col xl:flex-row justify-between md:mb-10 mb-5 gap-5 xl:gap-0">
        <div className="flex flex-col sm:flex-row gap-5 sm:items-center">
          <button className="flex gap-2 focus:border-none border-gray-100 bg-white items-center justify-between 2xl:py-3 py-2 focus:outline-none px-4 font-medium text-[#2C2C2C] rounded-full border shadow sm:w-[103px] w-[159px]">
            <p>Type</p>
            <ReportingDropdownSvg />
          </button>
          {/* Date */}
          <Popover>
            <PopoverTrigger asChild>
              <button className="flex gap-2 focus:border-none border-gray-100 bg-white items-center 2xl:py-3 py-2 focus:outline-none px-4 font-medium text-[#2C2C2C] rounded-full border shadow w-[159px]">
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
        <div className="flex gap-5 xl:gap-10 items-center">
          <Popover>
            <PopoverTrigger>
              <button className="sm:px-4 px-2 2xl:py-[10px] py-2 flex gap-2 items-center outline-none rounded-lg border border-[#00C2CB]">
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
      <div className="overflow-x-auto">
        <table className="w-full border-collapse text-left lg:min-w-[800px]">
          <tr className="text-lg text-gray-700 text-nowrap">
            <th className="px-4 3xl:py-8">Type</th>
            <th className="px-4 3xl:py-8">Sales qty</th>
            <th className="px-4 3xl:py-8">Items sold</th>
            <th className="px-4 3xl:py-8">Gross sales</th>
            <th className="px-4 3xl:py-8">Total discounts</th>
            <th className="px-4 3xl:py-8">Refunds</th>
            <th className="px-4 3xl:py-8">Net sales</th>
            <th className="px-4 3xl:py-8">Taxes</th>
            <th className="px-4 3xl:py-8">Total sales</th>
          </tr>
          <tbody>
            {tableData.map((data) => (
              <tr
                key={data.id}
                className="hover:bg-gray-200 text-left border-t 
                                first:border-none border-dashed text-[#545454] 2xl:text-base text-sm"
              >
                <td className="px-4 text-[#545454] font-medium 3xl:py-5">
                  {data.type}
                </td>
                <td className="px-4 text-[#545454] font-medium 3xl:py-5">
                  {data.salesQty}
                </td>
                <td className="px-4 text-[#545454] font-medium 3xl:py-5">
                  {data.itemsSold}
                </td>
                <td className="px-4 text-[#545454] font-medium 3xl:py-5">
                  {data.grossSales}
                </td>
                <td className="px-4 text-[#545454] font-medium 3xl:py-5">
                  {data.totalDiscount}
                </td>
                <td className="px-4 text-[#545454] font-medium 3xl:py-5">
                  {data.refunds}
                </td>
                <td className="px-4 text-[#545454] font-medium py-5">
                  {data.netSales}
                </td>
                <td className="px-4 text-[#545454] font-medium 3xl:py-5">
                  {data.taxes}
                </td>
                <td className="px-4 text-[#545454] font-medium 3xl:py-5">
                  {data.totalSales}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default SalesSummary;
