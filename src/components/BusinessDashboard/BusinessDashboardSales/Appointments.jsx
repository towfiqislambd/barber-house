import { AppointmentsSearchSvg } from "@/components/svgContainer/SvgContainer";
import AppointmentFilterModal from "../Modals/AppointmentFilterModal";
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

          {/* Filter */}
          <AppointmentFilterModal />
        </div>
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
