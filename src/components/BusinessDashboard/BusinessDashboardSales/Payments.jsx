import {
  AppointmentCalendarSvg,
  AppointmentCsvSvg,
  AppointmentExcelSvg,
  AppointmentPdfSvg,
  AppointmentsSearchSvg,
  DropdownSvg,
  ExportSvg,
  ThreeDotSvg,
} from "@/components/svgContainer/SvgContainer";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import AppointmentFilterModal from "../Modals/AppointmentFilterModal";
const tableData = [
  {
    id: 1,
    paymentDate: "11 Feb 2025, 16:14",
    refund: 6,
    clint: "Walk - in",
    teamMember: "M. R. Shihab",
    type: "Sale",
    method: "Cash",
    amount: "SAR 10.00",
  },
  {
    id: 2,
    paymentDate: "11 Feb 2025, 16:14",
    refund: 6,
    clint: "Walk - in",
    teamMember: "M. R. Shihab",
    type: "Sale",
    method: "Cash",
    amount: "SAR 10.00",
  },
  {
    id: 3,
    paymentDate: "11 Feb 2025, 16:14",
    refund: 6,
    clint: "Walk - in",
    teamMember: "M. R. Shihab",
    type: "Sale",
    method: "Cash",
    amount: "SAR 10.00",
  },
  {
    id: 4,
    paymentDate: "11 Feb 2025, 16:14",
    refund: 6,
    clint: "Walk - in",
    teamMember: "M. R. Shihab",
    type: "Sale",
    method: "Cash",
    amount: "SAR 10.00",
  },
  {
    id: 5,
    paymentDate: "11 Feb 2025, 16:14",
    refund: 6,
    clint: "Walk - in",
    teamMember: "M. R. Shihab",
    type: "Sale",
    method: "Cash",
    amount: "SAR 10.00",
  },
  {
    id: 6,
    paymentDate: "11 Feb 2025, 16:14",
    refund: 6,
    clint: "Walk - in",
    teamMember: "M. R. Shihab",
    type: "Sale",
    method: "Cash",
    amount: "SAR 10.00",
  },
];
import ViewSaleDrawer from "./ViewSaleDrawer";
const Payments = () => {
  return (
    <div>
      <h3 className="text-[#2C2C2C] font-outfit text-xl lg:text-2xl font-medium mb-2">
        Payments
      </h3>
      <p className="text-[#2C2C2C] lg:text-lg font-medium mb-5 lg:mb-10">
        Track, analyze & grow your salon business daily
      </p>
      {/* Upper part */}
      <div className="flex justify-between items-center gap-5 flex-wrap">
        <div className="flex gap-3 lg:gap-5 items-center flex-wrap">
          {/* Search */}
          <div className="relative w-[300px] lg:w-[350px] 4xl:w-[450px]">
            <input
              type="text"
              className="rounded-full bg-white w-full py-2 lg:py-3 px-3 lg:px-5 shadow outline-none border border-gray-100"
              placeholder="Search by reference or client"
            />
            <button className="absolute right-2 top-2 w-7 h-7 lg:w-9 lg:h-9 bg-black grid place-items-center rounded-full">
              <AppointmentsSearchSvg />
            </button>
          </div>
          {/* Date */}
          <button className="flex gap-2 focus:border-none border-gray-100 bg-white items-center py-2 lg:py-3 focus:outline-none px-3 lg:px-4 font-medium text-[#2C2C2C] rounded-full border shadow">
            <AppointmentCalendarSvg />
            <p>11 Jan 2025 - 11 Feb 2025</p>
          </button>

          {/* Filter */}
          <AppointmentFilterModal />
        </div>
        {/* Export */}
        <Popover>
          <PopoverTrigger>
            <button className="px-2 lg:px-4 py-2 lg:py-[10px] flex gap-2 items-center outline-none rounded-lg border border-primary ">
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
      </div>
      <div className="border-t border-primary mt-10 pb-5"></div>
      <div className="overflow-x-auto">
        {/* Table */}
        <table className="w-full border-collapse lg:min-w-[800px]">
          <tr className="lg:text-lg text-gray-700 text-nowrap">
            <th className="px-2 lg:px-4 py-3 lg:py-8">Payment date</th>
            <th className="px-2 lg:px-4 py-3 lg:py-8">Refund #</th>
            <th className="px-2 lg:px-4 py-3 lg:py-8">Client</th>
            <th className="px-2 lg:px-4 py-3 lg:py-8">Team member</th>
            <th className="px-2 lg:px-4 py-3 lg:py-8">Type</th>
            <th className="px-2 lg:px-4 py-3 lg:py-8">Method</th>
            <th className="px-2 lg:px-4 py-3 lg:py-8">Amount</th>
            <th className="px-2 lg:px-4 py-3 lg:py-8">More</th>
          </tr>
          <tbody>
            {tableData.map((data) => (
              <tr
                key={data.id}
                className="hover:bg-gray-200 border-t text-nowrap text-sm lg:text-base first:border-none border-dashed text-[#545454]"
              >
                <td className="px-2 lg:px-4 text-[#545454] font-medium py-3 lg:py-5 text-center">
                  {data.paymentDate}
                </td>
                <td className="px-2 lg:px-4 text-[#545454] font-medium py-3 lg:py-5 text-center">
                  {data.refund}
                </td>
                <td className="px-2 lg:px-4 text-[#545454] font-medium py-3 lg:py-5 text-center">
                  {data.clint}
                </td>
                <td className="px-2 lg:px-4 text-[#545454] font-medium py-3 lg:py-5 text-center">
                  {data.teamMember}
                </td>
                <td className="px-2 lg:px-4 text-[#545454] font-medium py-3 lg:py-5 text-center">
                  {data.type}
                </td>
                <td className="px-2 lg:px-4 text-[#545454] font-medium py-3 lg:py-5 text-center">
                  {data.method}
                </td>
                <td className="px-2 lg:px-4 text-[#545454] font-medium py-3 lg:py-5 text-center">
                  {data.amount}
                </td>
                <td className="px-2 lg:px-4 text-[#545454] font-medium py-3 lg:py-5 text-center">
                  <Popover>
                    <PopoverTrigger>
                      <button>
                        <ThreeDotSvg />
                      </button>
                    </PopoverTrigger>
                    <PopoverContent className="w-[150px] p-4">
                      <ViewSaleDrawer />
                      <p className="text-[#545454] font-medium ">Refund</p>
                    </PopoverContent>
                  </Popover>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Payments;
