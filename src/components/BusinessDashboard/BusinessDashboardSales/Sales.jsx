import { useState } from "react";
import { Drawer } from "antd";
import {
  AddNowSvg,
  AppointmentCalendarSvg,
  AppointmentCsvSvg,
  AppointmentExcelSvg,
  AppointmentPdfSvg,
  AppointmentScheduleSvg,
  AppointmentsSearchSvg,
  DropdownSvg,
  ExportSvg,
} from "@/components/svgContainer/SvgContainer";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import SalesFilterModal from "../Modals/SalesFilterModal";
import SalesDrawer from "./SalesDrawer";

const tableData = [
  {
    id: 1,
    sale: 6,
    client: "Walk - in",
    status: "Completed",
    started_date: "11 Feb 2025, 16:14",
    tips: "SAR 0.00",
    gross_total: "SAR 10.00",
  },
  {
    id: 2,
    sale: 6,
    client: "Walk - in",
    status: "Completed",
    started_date: "11 Feb 2025, 16:14",
    tips: "SAR 0.00",
    gross_total: "SAR 10.00",
  },
  {
    id: 3,
    sale: 6,
    client: "Walk - in",
    status: "Cancelled",
    started_date: "11 Feb 2025, 16:14",
    tips: "SAR 0.00",
    gross_total: "SAR 10.00",
  },
  {
    id: 4,
    sale: 6,
    client: "Walk - in",
    status: "Completed",
    started_date: "11 Feb 2025, 16:14",
    tips: "SAR 0.00",
    gross_total: "SAR 10.00",
  },
  {
    id: 5,
    sale: 6,
    client: "Walk - in",
    status: "Cancelled",
    started_date: "11 Feb 2025, 16:14",
    tips: "SAR 0.00",
    gross_total: "SAR 10.00",
  },
  {
    id: 6,
    sale: 6,
    client: "Walk - in",
    status: "Completed",
    started_date: "11 Feb 2025, 16:14",
    tips: "SAR 0.00",
    gross_total: "SAR 10.00",
  },
  {
    id: 7,
    sale: 6,
    client: "Walk - in",
    status: "Completed",
    started_date: "11 Feb 2025, 16:14",
    tips: "SAR 0.00",
    gross_total: "SAR 10.00",
  },
];

const Sales = () => {
  const [location, setLocation] = useState("");
  const [openLocation, setOpenLocation] = useState(false);
  const [open, setOpen] = useState(false);
  const showLargeDrawer = () => {
    setOpen(true);
  };
  const onClose = () => {
    setOpen(false);
  };

  return (
    <>
      <div>
        <h3 className="text-[#2C2C2C] font-outfit text-xl md:text-2xl font-medium mb-2">
          Sales
        </h3>
        <p className="text-[#2C2C2C] md:text-lg font-medium mb-5 md:mb-10">
          Track, analyze & grow your salon business daily Learn more
        </p>
        {/* Upper part */}
        <div className="flex justify-between items-center flex-wrap gap-5">
          <div className="flex gap-3 lg:gap-5 items-center flex-wrap">
            {/* Search */}
            <div className="relative w-[300px] lg:w-[350px] 4xl:w-[450px]">
              <input
                type="text"
                className="rounded-full bg-white w-full py-2 lg:py-3 px-3 lg:px-5 shadow outline-none border border-gray-100"
                placeholder="Search by sale or client"
              />
              <button className="absolute right-2 top-2 w-7 lg:w-9 h-7 lg:h-9 bg-black grid place-items-center rounded-full">
                <AppointmentsSearchSvg />
              </button>
            </div>
            {/* Date */}
            <div>
              <Select>
                <SelectTrigger className="flex gap-2 focus:border-none border-gray-100 bg-white items-center py-3 lg:py-6 focus:outline-none px-3 lg:px-4 rounded-full border shadow">
                  <AppointmentCalendarSvg />
                  <SelectValue
                    className="font-medium text-[#2C2C2C]"
                    placeholder="Today"
                  />
                </SelectTrigger>
                <SelectContent className="w-[300px] p-3">
                  <SelectItem value="Today">Today</SelectItem>
                  <SelectItem value="Yesterday">Yesterday</SelectItem>
                  <SelectItem value="Last 7 days">Last 7 days</SelectItem>
                  <SelectItem value="Last 30 days">Last 30 days</SelectItem>
                  <SelectItem value="Last 90 days">Last 90 days</SelectItem>
                  <SelectItem value="Last month">Last month</SelectItem>
                  <SelectItem value="Last year">Last year</SelectItem>
                  <SelectItem value="Week to date">Week to date</SelectItem>
                  <SelectItem value="Month to date">Month to date</SelectItem>
                  <SelectItem value="Quarter to date">
                    Quarter to date
                  </SelectItem>
                  <SelectItem value="Tomorrow">Tomorrow</SelectItem>
                  <SelectItem value="Next 7 days">Next 7 days</SelectItem>
                  <SelectItem value="Next month">Next month</SelectItem>
                  <SelectItem value="Next 30 days">Next 30 days</SelectItem>
                  <SelectItem value="All time">All time</SelectItem>
                </SelectContent>
              </Select>
            </div>

            {/* Filter */}
            <SalesFilterModal />

            {/* Short by */}
            <Popover open={openLocation} onOpenChange={setOpenLocation}>
              <PopoverTrigger className="border-r flex-1 flex gap-2 bg-white border-gray-100 items-center py-2 px-3 lg:py-3 lg:px-4 rounded-full border shadow">
                <AppointmentScheduleSvg />
                <p className="font-medium text-[#2C2C2C]">
                  {location ? location : "Short By"}
                </p>
              </PopoverTrigger>
              <PopoverContent className="w-80 p-5">
                <ul className="font-medium text-[#2C2C2C] text-base 2xl:text-lg space-y-4 2xl:space-y-6">
                  {[
                    "Sale # (Z-A)",
                    "Sale # (A-Z)",
                    "Client (Z-A)",
                    "Client (A-Z)",
                    "Sale date (newest first)",
                    "Sale date (oldest first)",
                    "Tips (highest first)",
                    "LTips (lowest first)",
                    "Gross total(highest first)",
                  ].map((city) => (
                    <li
                      key={city}
                      onClick={() => {
                        setLocation(city);
                        setOpenLocation(false);
                      }}
                      className="cursor-pointer duration-300 transition-all hover:text-[#008a90]"
                    >
                      {city}
                    </li>
                  ))}
                </ul>
              </PopoverContent>
            </Popover>
          </div>
          <div className="flex gap-3 items-center">
            {/* Export */}
            <Popover>
              <PopoverTrigger>
                <button className="px-3 lg:px-4 py-2 lg:py-[10px] flex gap-2 items-center outline-none rounded-lg border border-[#00C2CB]">
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
            <button
              onClick={showLargeDrawer}
              className="px-3 lg:px-4 py-2 bg-[#008A90] flex gap-2 items-center outline-none rounded-lg text-white"
            >
              <AddNowSvg />
              <p>Add new</p>
            </button>
          </div>
        </div>
        <div className="border-t border-[#008A90] mt-10 pb-5"></div>
        <div className="overflow-x-auto">
          {/* Table */}
          <table className="w-full border-collapse lg:min-w-[800px]">
            <tr className="lg:text-lg text-gray-700 text-nowrap">
              <th className="lg:px-4 py-2 lg:py-6">Sell</th>
              <th className="lg:px-4 py-2 lg:py-6">Client</th>
              <th className="lg:px-4 py-2 lg:py-6">Status</th>
              <th className="lg:px-4 py-2 lg:py-6">Sell date</th>
              <th className="lg:px-4 py-2 lg:py-6">Tips</th>
              <th className="lg:px-4 py-2 lg:py-6">Gross total</th>
            </tr>
            <tbody>
              {tableData.map((data) => (
                <tr
                  key={data.id}
                  className="hover:bg-gray-200 border-t 
                    first:border-none text-sm lg:text-base text-nowrap border-dashed text-[#545454]"
                >
                  <td className="px-4 text-[#545454] font-medium py-5">
                    {data.sale}
                  </td>
                  <td className="px-4 text-[#545454] font-medium py-5 text-center">
                    {data.client}
                  </td>
                  <td className="px-4 font-medium py-5 text-center">
                    <button
                      className={`${
                        data.status === "Completed"
                          ? "text-[#008C4F] bg-[#DCFEE6] border-[#00c1cb9d]"
                          : "text-[#D21837] bg-[#FFE1E1] border-[#ff563065]"
                      } px-3 py-1 border rounded-full`}
                    >
                      {data.status}
                    </button>
                  </td>
                  <td className="px-4 text-[#545454] font-medium py-5 text-center">
                    {data.started_date}
                  </td>
                  <td className="px-4 text-[#545454] font-medium py-5 text-center">
                    {data.tips}
                  </td>
                  <td className="px-4 text-[#545454] font-medium py-5 text-center">
                    {data.gross_total}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
      <div>
        <Drawer
          title={null}
          closable={false}
          styles={{ body: { paddingTop: 40 } }}
          width={1300}
          onClose={onClose}
          open={open}
        >
          <div>
            <SalesDrawer />
          </div>
        </Drawer>
      </div>
    </>
  );
};

export default Sales;
