import {
  AppointmentsSearchSvg,
  DropdownSvg,
  TeamMemberSvg,
} from "@/components/svgContainer/SvgContainer";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Link } from "react-router-dom";
const tableData = [
  {
    id: 1,
    name: "M. R. Shihab",
    image: <TeamMemberSvg />,
    contact: "waledbinsalma123@gmail.com",
    mail: "+966 14 123 4567",
    rating: 4.8,
  },
  {
    id: 2,
    name: "M. R. Shihab",
    image: <TeamMemberSvg />,
    contact: "waledbinsalma123@gmail.com",
    mail: "+966 14 123 4567",
    rating: 4.8,
  },
  {
    id: 3,
    name: "M. R. Shihab",
    image: <TeamMemberSvg />,
    contact: "waledbinsalma123@gmail.com",
    mail: "+966 14 123 4567",
    rating: 4.8,
  },
  {
    id: 4,
    name: "M. R. Shihab",
    image: <TeamMemberSvg />,
    contact: "waledbinsalma123@gmail.com",
    mail: "+966 14 123 4567",
    rating: 4.8,
  },
  {
    id: 5,
    name: "M. R. Shihab",
    image: <TeamMemberSvg />,
    contact: "waledbinsalma123@gmail.com",
    mail: "+966 14 123 4567",
    rating: 4.8,
  },
];

const TeamMembers = () => {
  return (
    <div>
      <h3 className="text-[#2C2C2C] font-outfit text-2xl font-medium mb-2">
        Team members (5)
      </h3>
      <p className="text-[#2C2C2C] text-lg font-medium mb-5 xl:mb-10">
        Track, analyze & grow your salon business daily
      </p>
      {/* Upper part */}
      <div className="flex justify-between items-center flex-wrap gap-3 lg:gap-5">
        <div className="flex gap-3 lg:gap-5 items-center flex-wrap">
          {/* Search */}
          <div className="relative w-[300px] xl:w-[450px]">
            <input
              type="text"
              className="rounded-full bg-white w-full py-2 lg:py-3 px-3 lg:px-5 shadow outline-none border border-gray-100"
              placeholder="Search by sale or client"
            />
            <button className="absolute right-2 top-2 w-7 h-7 lg:w-9 lg:h-9 bg-black grid place-items-center rounded-full">
              <AppointmentsSearchSvg />
            </button>
          </div>
        </div>
        <div className="flex gap-2 items-center">
          <Link to="/businessDashboard/add-team-member">
            <button className="bg-[#0D1619] text-white px-3 lg:px-5 py-2 lg:py-[10px] rounded-lg font-medium">
              Add Member
            </button>
          </Link>
        </div>
      </div>
      <div className="border-t border-borderColor mt-10 pb-10"></div>
      {/* Table */}
      <div className="overflow-x-auto">
        <table className="w-full border-collapse min-w-[800px]">
          <tr className="text-lg text-gray-700 text-nowrap">
            <th className="px-4 py-2 text-left">Name</th>
            <th className="px-4 py-2 text-left">Contact</th>
            <th className="px-4 py-2 text-left">All actions</th>
          </tr>
          <tbody>
            {tableData.map(data => (
              <tr
                key={data.id}
                className="hover:bg-gray-200 border-t first:border-none border-dashed text-[#545454] text-nowrap"
              >
                <td
                  className="px-4 text-[#545454] cursor-pointer font-medium py-3 flex gap-2 items-center"
                >
                  <div>{data?.image}</div>
                  <h3 className="text-[17px] font-medium text-[#2C2C2C]">
                    {data.name}
                  </h3>
                </td>
                <td className="px-4 text-[#545454] font-medium py-3">
                  <p>{data.contact}</p>
                  <p>{data.mail}</p>
                </td>
                <td className="px-4 text-[#545454] font-medium py-3">
                  <Popover>
                    <PopoverTrigger>
                      <button className="px-3 lg:px-4 py-2 lg:py-[10px] flex gap-1 lg:gap-2 items-center outline-none rounded-full border border-borderColorLight">
                        <p>Actions</p>
                        <DropdownSvg />
                      </button>
                    </PopoverTrigger>
                    <PopoverContent className="w-[220px] p-4">
                      <div className="space-y-5">
                        <p className="cursor-pointer text-[#545454] font-medium">
                          Edit
                        </p>
                      </div>
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

export default TeamMembers;
