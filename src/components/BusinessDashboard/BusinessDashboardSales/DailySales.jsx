import {
  AddNowSvg,
  DropdownSvg,
  ExportSvg,
} from "@/components/svgContainer/SvgContainer";
import { useState } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
const servicesData = [
  {
    id: 1,
    service: "Services",
    thisMonth: 6,
    lastMonth: 0,
    PaymentType: "Cash",
    grossTotal: "SAR 0.00",
  },
  {
    id: 2,
    service: "Services",
    thisMonth: 4,
    PaymentType: "Products",
    grossTotal: "SAR 0.00",
  },
  {
    id: 3,
    service: "Shipping",
    thisMonth: 3,
    lastMonth: 0,
    PaymentType: "Shipping",
    grossTotal: "SAR 0.00",
  },
  {
    id: 4,
    service: "Gift cards",
    thisMonth: 5,
    lastMonth: 0,
    grossTotal: "SAR 0.00",
  },
  {
    id: 5,
    service: "Memberships",
    thisMonth: 7,
    lastMonth: 0,
    grossTotal: "SAR 0.00",
  },
  {
    id: 6,
    service: "Late cancellation fees",
    thisMonth: 7,
    lastMonth: 0,
    grossTotal: "SAR 0.00",
  },
];

const DailySales = () => {
  const [startDate, setStartDate] = useState(new Date());
  const [showDatePicker, setShowDatePicker] = useState(false);

  return (
    <div>
      <h3 className="text-[#2C2C2C] font-outfit text-xl lg:text-2xl font-medium mb-2">
        Daily Sales
      </h3>
      <p className="text-[#2C2C2C] lg:text-lg font-medium mb-4 lg:mb-7">
        Track, analyze & grow your salon business daily
      </p>
      <div className="flex justify-between items-center mb-5 md:mb-8 relative flex-wrap gap-3 md:gap-5">
        {/* Button to toggle DatePicker */}
        <button
          className="bg-[#F2F2F2] px-4 lg:px-7 py-2 lg:py-3 text-[#474747] rounded-lg "
          onClick={() => setShowDatePicker(!showDatePicker)}
        >
          {startDate.toLocaleDateString("en-GB", {
            weekday: "long",
            day: "2-digit",
            month: "short",
            year: "numeric",
          })}
        </button>

        {/* Show DatePicker when button is clicked */}
        {showDatePicker && (
          <div className="absolute top-full left-0 z-50 bg-white">
            <DatePicker
              selected={startDate}
              onChange={date => {
                setStartDate(date);
                setShowDatePicker(false);
              }}
              inline
            />
          </div>
        )}

        <div className="flex gap-3 items-center">
          <button className="px-2 text-sm md:text-base md:px-4 py-[5px] lg:py-[10px] flex gap-2 items-center outline-none rounded-lg border border-borderColor">
            <ExportSvg />
            <p>Export</p>
            <DropdownSvg />
          </button>
          <button className="px-2 text-sm md:text-base md:px-4 py-[5px] lg:py-[10px] bg-primary flex gap-2 items-center outline-none rounded-lg text-white">
            <AddNowSvg />
            <p>Add new</p>
          </button>
        </div>
      </div>

      <div className="flex flex-col 4xl:flex-row gap-5">
        <div className="overflow-x-auto 4xl:w-[800px] border p-3 2xl:p-6 border-primary rounded-xl bg-white shadow-md">
          <h3 className="font-semibold text-xl md:text-[22px] text-center text-[#2C2C2C] mb-4 md:mb-6">
            Cash movement summary
          </h3>
          <table className="w-full border-collapse">
            <thead>
              <tr className="2xl:text-lg text-gray-700 text-nowrap">
                <th className="text-left px-2 md:px-4 py-1 md:py-2">
                  Type of item
                </th>
                <th className="text-left px-2 md:px-4 py-1 md:py-2">
                  Sales quantity
                </th>
                <th className="text-left px-2 md:px-4 py-1 md:py-2">
                  Refund quantity
                </th>
                <th className="text-left px-2 md:px-4 py-1 md:py-2">
                  Gross total
                </th>
              </tr>
            </thead>
            <tbody className="">
              {servicesData.map(data => (
                <tr
                  key={data.id}
                  className="hover:bg-gray-100 text-nowrap border-t first:border-none border-dashed text-[#545454]"
                >
                  <td className="px-2 md:px-4 py-3 md:py-5">{data.service}</td>
                  <td className="px-2 md:px-4 py-3 md:py-5 text-center">
                    {data.thisMonth}
                  </td>
                  <td className="px-2 md:px-4 py-3 md:py-5 text-center">
                    {data.lastMonth}
                  </td>
                  <td className="px-2 md:px-4 py-3 md:py-5 text-center">
                    {data.grossTotal}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="flex-grow overflow-x-auto border p-3 2xl:p-6 border-borderColor rounded-xl bg-white shadow-md">
          <h3 className="font-semibold text-xl md:text-[22px] text-center text-[#2C2C2C] md:mb-6 mb-4">
            Transaction summary
          </h3>
          <table className="w-full border-collapse">
            <thead>
              <tr className="md:text-lg text-gray-700 text-nowrap">
                <th className="text-left px-2 md:px-4 py-1 md:py-2">
                  Payment type
                </th>
                <th className="text-left px-2 md:px-4 py-1 md:py-2">
                  Payments collection
                </th>
                <th className="px-2 md:px-4 text-right py-1 md:py-2">
                  Refund paid
                </th>
              </tr>
            </thead>
            <tbody className="">
              {servicesData.map(data => (
                <tr
                  key={data.id}
                  className="hover:bg-gray-100 border-t first:border-none border-dashed text-nowrap text-[#545454]"
                >
                  <td className="px-2 md:px-4 py-3 md:py-5">{data.service}</td>
                  <td className="px-2 md:px-4 py-3 md:py-5 text-center">
                    {data.thisMonth}
                  </td>
                  <td className="px-2 md:px-4 py-3 md:py-5 text-center">
                    {data.lastMonth}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default DailySales;
