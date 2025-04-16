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
import ClientModal from "@/components/BusinessDashboard/Modals/ClientModal";
import { useState } from "react";
import { Calendar } from "@/components/ui/calendar";
import { format } from "date-fns";
const tableData = [
  {
    id: 1,
    name: 24,
    phoneNumber: "17 Feb 2025, 15:15",
    email: "Completed",
    addedOn: "Ghalib’s salon",
    firstAppt: "Work - in",
    lastAppt: "Offline",
  },
  {
    id: 2,
    name: 24,
    phoneNumber: "17 Feb 2025, 15:15",
    email: "Completed",
    addedOn: "Ghalib’s salon",
    firstAppt: "Work - in",
    lastAppt: "Offline",
  },
  {
    id: 3,
    name: 24,
    phoneNumber: "17 Feb 2025, 15:15",
    email: "Completed",
    addedOn: "Ghalib’s salon",
    firstAppt: "Work - in",
    lastAppt: "Offline",
  },
  {
    id: 4,
    name: 24,
    phoneNumber: "17 Feb 2025, 15:15",
    email: "Completed",
    addedOn: "Ghalib’s salon",
    firstAppt: "Work - in",
    lastAppt: "Offline",
  },
  {
    id: 5,
    name: 24,
    phoneNumber: "17 Feb 2025, 15:15",
    email: "Completed",
    addedOn: "Ghalib’s salon",
    firstAppt: "Work - in",
    lastAppt: "Offline",
  },
];

const ReportingClientList = () => {
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
            { label: "Client list", href: "" },
          ]}
        />
      </div>
      <h3 className="font-outfit text-2xl mb-1 font-medium text-[#2C2C2C]">
        Client list
      </h3>
      <p className="text-[#2C2C2C] mb-5 font-medium">
        Comprehensive list of all active clients.
      </p>
      <div className="flex justify-between mb-5 flex-wrap gap-5 lg:mb-10">
        <div className="flex gap-5 items-center">
          {/* Date */}
          <Popover>
            <PopoverTrigger asChild>
              <button className="flex gap-2 focus:border-none border-gray-100 bg-white items-center 2xl:py-3 py-2 focus:outline-none 2xl:px-4 px-2 font-medium text-[#2C2C2C] rounded-full border shadow">
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
          <ClientModal />
        </div>
        <div className="flex gap-10 items-center">
          <Popover>
            <PopoverTrigger>
              <button className="2xl:px-4 px-2 2xl:py-[10px] py-2 flex gap-2 items-center outline-none rounded-lg border border-[#00C2CB]">
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
            <th className="px-4 3xl:py-8 py-4">Client</th>
            <th className="px-4 3xl:py-8 py-4">Mobile number</th>
            <th className="px-4 3xl:py-8 py-4">Email</th>
            <th className="px-4 3xl:py-8 py-4">Added on</th>
            <th className="px-4 3xl:py-8 py-4">First appt.</th>
            <th className="px-4 3xl:py-8 py-4">Last appt.</th>
          </tr>
          <tbody>
            {tableData.map((data) => (
              <tr
                key={data.id}
                className="hover:bg-gray-200 text-left border-t 
                                first:border-none border-dashed text-[#545454] text-nowrap"
              >
                <td className="3xl:px-4 text-[#545454] font-medium 3xl:py-5 py-3">
                  {data.name}
                </td>
                <td className="3xl:px-4 text-[#545454] font-medium 3xl:py-5 py-3">
                  {data.phoneNumber}
                </td>
                <td className="3xl:px-4 text-[#545454] font-medium 3xl:py-5 py-3">
                  {data.email}
                </td>
                <td className="3xl:px-4 text-[#545454] font-medium 3xl:py-5 py-3">
                  {data.addedOn}
                </td>
                <td className="3xl:px-4 text-[#545454] font-medium 3xl:py-5 py-3">
                  {data.firstAppt}
                </td>
                <td className="3xl:px-4 text-[#545454] font-medium 3xl:py-5 py-3">
                  {data.lastAppt}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ReportingClientList;
