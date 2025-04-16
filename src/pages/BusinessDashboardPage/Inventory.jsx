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

import jsPDF from "jspdf";
import autoTable from "jspdf-autotable";
import * as XLSX from "xlsx";

const tableData = [
  {
    id: 1,
    primarySku: "VPR-39006",
    product: "Hair gel",
    category: "Hair & styling",
    Has_description: "Yes",
    Has_image: "No",
    retailPrice: "SAR 20.00",
    uoM: "Sales",
    units: "2",
  },
  {
    id: 2,
    primarySku: "VPR-39006",
    product: "Hair gel",
    category: "Hair & styling",
    Has_description: "Yes",
    Has_image: "No",
    retailPrice: "SAR 20.00",
    uoM: "Sales",
    units: "2",
  },
  {
    id: 3,
    primarySku: "VPR-39006",
    product: "Hair gel",
    category: "Hair & styling",
    Has_description: "Yes",
    Has_image: "No",
    retailPrice: "SAR 20.00",
    uoM: "Sales",
    units: "2",
  },
  {
    id: 4,
    primarySku: "VPR-39006",
    product: "Hair gel",
    category: "Hair & styling",
    Has_description: "Yes",
    Has_image: "No",
    retailPrice: "SAR 20.00",
    uoM: "Sales",
    units: "2",
  },
  {
    id: 5,
    primarySku: "VPR-39006",
    product: "Hair gel",
    category: "Hair & styling",
    Has_description: "Yes",
    Has_image: "No",
    retailPrice: "SAR 20.00",
    uoM: "Sales",
    units: "2",
  },
];

const Inventory = () => {
  const [date, setDate] = useState(null);

  const downloadCSV = () => {
    const csvHeader = [
      "Primary SKU,Product,Category,Has Description,Has Image,Units,UoM,Retail Price",
    ];
    const csvRows = tableData.map(data =>
      [
        data.primarySku,
        data.product,
        data.category,
        data.Has_description,
        data.Has_image,
        data.units,
        data.uoM,
        data.retailPrice,
      ].join(",")
    );
    const csvString = [csvHeader, ...csvRows].join("\n");
    const blob = new Blob([csvString], { type: "text/csv" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = "product_list.csv";
    document.body.appendChild(a);
    a.click();
    document.body.removeChild(a);
  };

  const downloadExcel = () => {
    const worksheet = XLSX.utils.json_to_sheet(tableData);
    const workbook = XLSX.utils.book_new();
    XLSX.utils.book_append_sheet(workbook, worksheet, "Products");
    XLSX.writeFile(workbook, "product_list.xlsx");
  };

  const downloadPDF = () => {
    const doc = new jsPDF();
    doc.text("Product List", 14, 15);
    autoTable(doc, {
      startY: 20,
      head: [
        [
          "Primary SKU",
          "Product",
          "Category",
          "Has Description",
          "Has Image",
          "Units",
          "UoM",
          "Retail Price",
        ],
      ],
      body: tableData.map(data => [
        data.primarySku,
        data.product,
        data.category,
        data.Has_description,
        data.Has_image,
        data.units,
        data.uoM,
        data.retailPrice,
      ]),
    });
    doc.save("product_list.pdf");
  };
  return (
    <section className="px-6 md:px-0 py-5 md:py-0">
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
            { label: "Product list", href: "" },
          ]}
        />
      </div>

      <h3 className="font-outfit text-2xl mb-1 font-medium text-[#2C2C2C]">
        Product list
      </h3>
      <p className="text-[#2C2C2C] mb-5 font-medium">
        Detailed view of all payment transactions.
      </p>

      <div className="flex lg:flex-row flex-col justify-between lg:mb-10 mb-5 gap-3 lg:gap-0">
        <div className="flex lg:gap-5 gap-2 items-center">
          <Popover>
            <PopoverTrigger asChild>
              <button className="flex gap-2 focus:border-none border-gray-100 bg-white items-center 3xl:py-3 py-2 focus:outline-none px-4 font-medium text-[#2C2C2C] rounded-full border shadow">
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
          <ClientModal />
        </div>
        <div className="flex lg:gap-10 gap-5 items-center">
          <Popover>
            <PopoverTrigger>
              <button className="px-4 3xl:py-[10px] py-1 flex gap-2 items-center outline-none rounded-lg border border-[#00C2CB]">
                <ExportSvg />
                <p>Option</p>
                <DropdownSvg />
              </button>
            </PopoverTrigger>
            <PopoverContent className="w-[150px] p-4">
              <div className="space-y-4">
                <button
                  onClick={downloadPDF}
                  className="flex gap-2 items-center"
                >
                  <AppointmentPdfSvg />
                  <p className="text-[#545454] font-medium">PDF</p>
                </button>
                <button
                  onClick={downloadCSV}
                  className="flex gap-2 items-center"
                >
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
          <p className="text-[#2C2C2C] font-medium sm:text-base text-sm">
            Data from 21 mins ago
          </p>
        </div>
      </div>

      <div className="overflow-x-auto">
        {/* Table */}
        <table className="w-full border-collapse text-left">
          <tr className="text-lg text-gray-700 text-nowrap">
            <th className="px-4 2xl:py-8 py-4">Primary SKU</th>
            <th className="px-4 2xl:py-8 py-4">Product</th>
            <th className="px-4 2xl:py-8 py-4">Category</th>
            <th className="px-4 2xl:py-8 py-4">Has description</th>
            <th className="px-4 2xl:py-8 py-4">Has Image</th>
            <th className="px-4 2xl:py-8 py-4">Units</th>
            <th className="px-4 2xl:py-8 py-4">UoM</th>
            <th className="px-4 2xl:py-8 py-4">Retail price</th>
          </tr>
          <tbody>
            {tableData.map(data => (
              <tr
                key={data.id}
                className="hover:bg-gray-200 text-left border-t 
                                first:border-none border-dashed text-[#545454] text-nowrap"
              >
                <td className="px-4 text-[#545454] font-medium xl:py-5">
                  {data.primarySku}
                </td>
                <td className="px-4 text-[#545454] font-medium py-5">
                  {data.product}
                </td>
                <td className="px-4 text-[#545454] font-medium py-5">
                  {data.category}
                </td>
                <td className="px-4 text-[#545454] font-medium py-5">
                  {data.Has_description}
                </td>
                <td className="px-4 text-[#545454] font-medium py-5">
                  {data.Has_image}
                </td>
                <td className="px-4 text-[#545454] font-medium py-5">
                  {data.units}
                </td>
                <td className="px-4 text-[#545454] font-medium py-5">
                  {data.uoM}
                </td>
                <td className="px-4 text-[#545454] font-medium py-5">
                  {data.retailPrice}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
};

export default Inventory;
