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
import TeamMemberModal from "../Modals/TeamMemberModal";
import { Drawer } from "antd";
import ellipse from "../../../assets/images/ellipse.png";
import { useState } from "react";
import Overview from "./Overview";
import Personal from "./Personal";
import Workspace from "./Workspace";
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
  const [activeTab, setActiveTab] = useState("overview");
  const [open, setOpen] = useState(false);
  const [size, setSize] = useState();
  const showLargeDrawer = () => {
    setSize("large");
    setOpen(true);
  };
  const onClose = () => {
    setOpen(false);
  };
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
          {/* Filter */}
          <TeamMemberModal />
        </div>
        <div className="flex gap-2 items-center">
          {/* Export */}
          <Popover>
            <PopoverTrigger>
              <button className="px-3 lg:px-4 py-2 lg:py-[10px] flex gap-1 lg:gap-2 items-center outline-none rounded-lg border border-borderColorLight">
                <p>Options</p>
                <DropdownSvg />
              </button>
            </PopoverTrigger>
            <PopoverContent className="w-[150px] p-4">
              <div className="space-y-4">
                <button className="flex gap-2 items-center">
                  <p className="text-[#545454] font-medium">Team Settings</p>
                </button>
                <button className="flex gap-2 items-center">
                  <p className="text-[#545454] font-medium">CSV</p>
                </button>
              </div>
            </PopoverContent>
          </Popover>
          <Link to="/businessDashboard/add-team-member">
            <button className="bg-[#0D1619] text-white px-3 lg:px-5 py-2 lg:py-[10px] rounded-lg font-medium">
              Add
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
            <th className="px-4 py-2 text-left">Rating</th>
            <th className="px-4 py-2 text-left">All actions</th>
          </tr>
          <tbody>
            {tableData.map(data => (
              <tr
                key={data.id}
                className="hover:bg-gray-200 border-t first:border-none border-dashed text-[#545454] text-nowrap"
              >
                <td
                  onClick={showLargeDrawer}
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
                  {data.rating}
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
                        <p className="cursor-pointer text-[#545454] font-medium">
                          View calendar
                        </p>
                        <p className="cursor-pointer text-[#545454] font-medium">
                          View scheduled shifts
                        </p>
                        <p className="cursor-pointer text-[#545454] font-medium">
                          Add time off
                        </p>
                        <p className="cursor-pointer text-[#545454] font-medium">
                          Resend email invitation
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
      <Drawer
        className="!bg-[#F9F9F9]"
        width="70%"
        placement="right"
        size={size}
        onClose={onClose}
        open={open}
      >
        <div className="grid grid-cols-12 gap-5">
          <div className="2xl:col-span-4 col-span-12 lg:border-r sm:py-10 sm:px-5">
            <img src={ellipse} className="mx-auto" />
            <h3 className="text-center text-xl mt-5 mb-1 font-semibold text-[#1E1E1E]">
              Waleedbinsalma
            </h3>
            <p className="text-center text-[#757575] text-base">
              Waleedbinsalma15@gmail.com
            </p>
            <p className="text-center text-[#757575] text-base">
              +444 09258964321
            </p>
            <button className="px-4 mb-5 2xl:w-full justify-center mt-5 lg:py-[10px] py-[6px] flex gap-2 items-center outline-none rounded-lg border text-lg font-semibold border-borderColorLight">
              <p>Actions</p>
              <DropdownSvg />
            </button>
            <hr />
            <ul className="space-y-4 text-lg font-medium mt-5">
              <button
                onClick={() => setActiveTab("overview")}
                className={`px-5 py-2 2xl:w-full block text-left duration-300 transition-all hover:bg-[#F0F0FF] rounded-lg ${
                  activeTab === "overview" ? "bg-[#F0F0FF]" : "text-[#2C2C2C]"
                }`}
              >
                Overview
              </button>
              <button
                onClick={() => setActiveTab("personal")}
                className={`px-5 py-2 2xl:w-full block text-left duration-300 transition-all hover:bg-[#F0F0FF] rounded-lg ${
                  activeTab === "personal" ? "bg-[#F0F0FF]" : "text-[#2C2C2C]"
                }`}
              >
                Personal
              </button>
              <button
                onClick={() => setActiveTab("workspace")}
                className={`px-5 py-2 2xl:w-full block text-left duration-300 transition-all hover:bg-[#F0F0FF] rounded-lg ${
                  activeTab === "workspace" ? "bg-[#F0F0FF]" : "text-[#2C2C2C]"
                }`}
              >
                Workspace
              </button>
            </ul>
          </div>
          <div className="2xl:col-span-8 col-span-12">
            {activeTab === "overview" && <Overview />}
            {activeTab === "personal" && <Personal />}
            {activeTab === "workspace" && <Workspace />}
          </div>
        </div>
      </Drawer>
    </div>
  );
};

export default TeamMembers;
