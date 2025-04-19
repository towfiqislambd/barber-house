import {
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
import AppointmentFilterModal from "../Modals/AppointmentFilterModal";
import { useState } from "react";
import jsPDF from "jspdf";
import autoTable from "jspdf-autotable";
import * as XLSX from "xlsx";

const tableData = [
  {
    id: 1,
    ID: "#F7F503C0",
    client: "Walk - in",
    service: "Hair color",
    createdBy: "M R Shihab",
    createdDate: "11 Feb 2025, 16:14",
    scheduledDate: "13 Feb 2025, 16:14",
    duration: "1h 10min",
    teamMember: "M R Shihab",
    price: "SAR 10.00",
    status: "Booked",
  },
  {
    id: 2,
    ID: "#F7F503C0",
    client: "Walk - in",
    service: "Hair color",
    createdBy: "M R Shihab",
    createdDate: "11 Feb 2025, 16:14",
    scheduledDate: "13 Feb 2025, 16:14",
    duration: "1h 10min",
    teamMember: "M R Shihab",
    price: "SAR 10.00",
    status: "Booked",
  },
  {
    id: 3,
    ID: "#F7F503C0",
    client: "Walk - in",
    service: "Hair color",
    createdBy: "M R Shihab",
    createdDate: "11 Feb 2025, 16:14",
    scheduledDate: "13 Feb 2025, 16:14",
    duration: "1h 10min",
    teamMember: "M R Shihab",
    price: "SAR 10.00",
    status: "Cancelled",
  },
  {
    id: 4,
    ID: "#F7F503C0",
    client: "Walk - in",
    service: "Hair color",
    createdBy: "M R Shihab",
    createdDate: "11 Feb 2025, 16:14",
    scheduledDate: "13 Feb 2025, 16:14",
    duration: "1h 10min",
    teamMember: "M R Shihab",
    price: "SAR 10.00",
    status: "Booked",
  },
  {
    id: 5,
    ID: "#F7F503C0",
    client: "Walk - in",
    service: "Hair color",
    createdBy: "M R Shihab",
    createdDate: "11 Feb 2025, 16:14",
    scheduledDate: "13 Feb 2025, 16:14",
    duration: "1h 10min",
    teamMember: "M R Shihab",
    price: "SAR 10.00",
    status: "Booked",
  },
  {
    id: 6,
    ID: "#F7F503C0",
    client: "Walk - in",
    service: "Hair color",
    createdBy: "M R Shihab",
    createdDate: "11 Feb 2025, 16:14",
    scheduledDate: "13 Feb 2025, 16:14",
    duration: "1h 10min",
    teamMember: "M R Shihab",
    price: "SAR 10.00",
    status: "Cancelled",
  },
  {
    id: 7,
    ID: "#F7F503C0",
    client: "Walk - in",
    service: "Hair color",
    createdBy: "M R Shihab",
    createdDate: "11 Feb 2025, 16:14",
    scheduledDate: "13 Feb 2025, 16:14",
    duration: "1h 10min",
    teamMember: "M R Shihab",
    price: "SAR 10.00",
    status: "Booked",
  },
  {
    id: 8,
    ID: "#F7F503C0",
    client: "Walk - in",
    service: "Hair color",
    createdBy: "M R Shihab",
    createdDate: "11 Feb 2025, 16:14",
    scheduledDate: "13 Feb 2025, 16:14",
    duration: "1h 10min",
    teamMember: "M R Shihab",
    price: "SAR 10.00",
    status: "Cancelled",
  },
  {
    id: 9,
    ID: "#F7F503C0",
    client: "Walk - in",
    service: "Hair color",
    createdBy: "M R Shihab",
    createdDate: "11 Feb 2025, 16:14",
    scheduledDate: "13 Feb 2025, 16:14",
    duration: "1h 10min",
    teamMember: "M R Shihab",
    price: "SAR 10.00",
    status: "Booked",
  },
];

const Appointments = () => {
  const [location, setLocation] = useState("");
  const [openLocation, setOpenLocation] = useState(false);

  const downloadCSV = () => {
    const csvHeader = [
      "ID,Client,Service,Created By,Created Date,Scheduled Date,Duration,Team Member,Price,Status",
    ];
    const csvRows = tableData.map(data =>
      [
        data.ID,
        data.client,
        data.service,
        data.createdBy,
        data.createdDate,
        data.scheduledDate,
        data.duration,
        data.teamMember,
        data.price,
        data.status,
      ].join(",")
    );
    const csvString = [csvHeader, ...csvRows].join("\n");
    const blob = new Blob([csvString], { type: "text/csv" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "appointments_list.csv";
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
  };

  const downloadExcel = () => {
    const worksheet = XLSX.utils.json_to_sheet(
      tableData.map(data => ({
        ID: data.ID,
        Client: data.client,
        Service: data.service,
        "Created By": data.createdBy,
        "Created Date": data.createdDate,
        "Scheduled Date": data.scheduledDate,
        Duration: data.duration,
        "Team Member": data.teamMember,
        Price: data.price,
        Status: data.status,
      }))
    );
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, "Appointments");
    XLSX.writeFile(workbook, "appointments_list.xlsx");
  };

  const downloadPDF = () => {
    const doc = new jsPDF();
    doc.text("Appointments List", 14, 15);
    autoTable(doc, {
      startY: 20,
      head: [
        [
          "ID",
          "Client",
          "Service",
          "Created By",
          "Created Date",
          "Scheduled Date",
          "Duration",
          "Team Member",
          "Price",
          "Status",
        ],
      ],
      body: tableData.map(data => [
        data.ID,
        data.client,
        data.service,
        data.createdBy,
        data.createdDate,
        data.scheduledDate,
        data.duration,
        data.teamMember,
        data.price,
        data.status,
      ]),
    });
    doc.save("appointments_list.pdf");
  };
  return (
    <div className=" relative">
      <h3 className="text-[#2C2C2C] font-outfit text-xl lg:text-2xl font-medium mb-2">
        Appointments
      </h3>
      <p className="text-[#2C2C2C] lg:text-lg font-medium mb-5 lg:mb-10">
        Track, analyze & grow your salon business daily
      </p>
      {/* Upper part */}
      <div className="flex justify-between flex-wrap gap-5 items-center">
        <div className="flex gap-3 4xl:gap-5 items-center flex-wrap">
          {/* Search */}
          <div className="relative w-[300px] md:w-[350px] 4xl:w-[450px]">
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
          <div>
            <Select>
              <SelectTrigger className="flex gap-2 focus:border-none border-gray-100 bg-white items-center py-2 lg:py-6 focus:outline-none px-3 lg:px-4 rounded-full border shadow">
                <AppointmentCalendarSvg />
                <SelectValue
                  className="font-medium text-[#2C2C2C]"
                  placeholder="Month to date"
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
                <SelectItem value="Quarter to date">Quarter to date</SelectItem>
                <SelectItem value="Tomorrow">Tomorrow</SelectItem>
                <SelectItem value="Next 7 days">Next 7 days</SelectItem>
                <SelectItem value="Next month">Next month</SelectItem>
                <SelectItem value="Next 30 days">Next 30 days</SelectItem>
                <SelectItem value="All time">All time</SelectItem>
              </SelectContent>
            </Select>
          </div>

          {/* Filter */}
          <AppointmentFilterModal />

          {/* Scheduled */}
          <Popover open={openLocation} onOpenChange={setOpenLocation}>
            <PopoverTrigger className="border-r flex-shrink-0 flex gap-2 bg-white border-gray-100 items-center py-1 px-3 lg:py-3 lg:px-4 rounded-full border shadow">
              <AppointmentScheduleSvg />
              <p className="font-medium text-[#2C2C2C]">
                {location ? location : "Scheduled date (newest first)"}
              </p>
            </PopoverTrigger>
            <PopoverContent className="w-72 2xl:w-80 p-5">
              <ul className="font-medium text-[#2C2C2C] 2xl:text-lg space-y-4 2xl:space-y-6">
                {[
                  "Created Date (oldest first)",
                  "Created Date (newest first)",
                  "Scheduled Date (oldest first)",
                  "Scheduled Date (newest first)",
                  "Duration (shortest first)",
                  "Duration (longest first)",
                  "Price (lowest first)",
                  "Price (highest first)",
                ].map(city => (
                  <li
                    key={city}
                    onClick={() => {
                      setLocation(city);
                      setOpenLocation(false);
                    }}
                    className="cursor-pointer duration-300 transition-all hover:text-primary"
                  >
                    {city}
                  </li>
                ))}
              </ul>
            </PopoverContent>
          </Popover>
        </div>
        {/* Export */}
        <Popover>
          <PopoverTrigger>
            <button className="px-2 lg:px-4 py-1 lg:py-[10px] flex gap-1 lg:gap-2 items-center outline-none rounded-lg border border-primary">
              <ExportSvg />
              <p>Option</p>
              <DropdownSvg />
            </button>
          </PopoverTrigger>
          <PopoverContent className="w-[150px] p-4">
            <div className="space-y-4">
              <button onClick={downloadPDF} className="flex gap-2 items-center">
                <AppointmentPdfSvg />
                <p className="text-[#545454] font-medium">PDF</p>
              </button>
              <button onClick={downloadCSV} className="flex gap-2 items-center">
                <AppointmentCsvSvg />
                <p className="text-[#545454] font-medium">CSV</p>
              </button>
              <button
                onClick={downloadExcel}
                className="flex gap-2 items-center"
              >
                <AppointmentExcelSvg />
                <p className="text-[#545454] font-medium">Excel</p>
              </button>
            </div>
          </PopoverContent>
        </Popover>
      </div>
      <div className="border-t border-primary mt-10 pb-5"></div>
      <div className="overflow-x-auto">
        <table className="w-full border-collapse min-w-[800px]">
          <thead>
            <tr className="lg:text-lg text-gray-700 bg-gray-100 text-nowrap">
              <th className="py-4 px-2">ID #</th>
              <th className="py-4 px-2">Client</th>
              <th className="py-4 px-2">Service</th>
              <th className="py-4 px-2">Created by</th>
              <th className="py-4 px-2">Created date</th>
              <th className="py-4 px-2">Scheduled date</th>
              <th className="py-4 px-2">Duration</th>
              <th className="py-4 px-2">Team member</th>
              <th className="py-4 px-2">Price</th>
              <th className="py-4 px-2">Status</th>
            </tr>
          </thead>
          <tbody>
            {tableData.map(data => (
              <tr
                key={data.id}
                className="hover:bg-gray-200 border-t first:border-none border-dashed text-[#545454] text-nowrap"
              >
                <td className="px-3 text-sm md:px-4 py-3 md:py-5 md:text-base text-center">
                  {data.ID}
                </td>
                <td className="px-3 text-sm md:px-4 py-3 md:py-5 md:text-base text-center">
                  {data.client}
                </td>
                <td className="px-3 text-sm md:px-4 py-3 md:py-5 md:text-base text-center">
                  {data.service}
                </td>
                <td className="px-3 text-sm md:px-4 py-3 md:py-5 md:text-base text-center">
                  {data.createdBy}
                </td>
                <td className="px-3 text-sm md:px-4 py-3 md:py-5 md:text-base text-center">
                  {data.createdDate}
                </td>
                <td className="px-3 text-sm md:px-4 py-3 md:py-5 md:text-base text-center">
                  {data.scheduledDate}
                </td>
                <td className="px-3 text-sm md:px-4 py-3 md:py-5 md:text-base text-center">
                  {data.duration}
                </td>
                <td className="px-3 text-sm md:px-4 py-3 md:py-5 md:text-base text-center">
                  {data.teamMember}
                </td>
                <td className="px-3 text-sm md:px-4 py-3 md:py-5 md:text-base text-center">
                  {data.price}
                </td>
                <td className="px-3 text-sm md:px-4 py-3 md:py-5 md:text-base text-center">
                  <span
                    className={`${
                      data.status === "Booked"
                        ? "text-green-700 bg-green-200"
                        : "text-red-700 bg-red-200"
                    } px-3 py-1 rounded-full`}
                  >
                    {data.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Appointments;
