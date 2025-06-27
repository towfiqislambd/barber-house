import { AppointmentsSearchSvg } from "@/components/svgContainer/SvgContainer";
import SalesFilterModal from "../Modals/SalesFilterModal";

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

            {/* Filter */}
            <SalesFilterModal />
          </div>
        </div>
        <div className="border-t border-primary mt-10 pb-5"></div>
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
              {tableData.map(data => (
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
    </>
  );
};

export default Sales;
