import {
  AddNowSvg,
  ServicesSearch,
} from "@/components/svgContainer/SvgContainer";
import { useState } from "react";
import AllCategories from "./AllCategories";
import AddCategoryModal from "../Modals/AddCategoryModal";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Link } from "react-router-dom";
import { useAllTeamMembers, useCatalogue } from "@/hooks/cms.queries";

const ServiceMenu = ({ allCategoryData }) => {
  const [activeTab, setActiveTab] = useState(null);
  const [search, setSearch] = useState(null);
  const [selectedTeamMember, setSelectedTeamMember] = useState(null);
  const { data: allTeamMembers } = useAllTeamMembers();
  const {
    data: categoryData,
    isLoading,
    refetch,
  } = useCatalogue(activeTab, search, selectedTeamMember);

  const handleReset = () => {
    setActiveTab(null);
    setSearch(null);
    setSelectedTeamMember(null);
  };

  return (
    <div>
      <h3 className="text-[#2C2C2C] font-outfit text-2xl font-medium mb-2">
        Service menu
      </h3>
      <p className="text-[#2C2C2C] lg:text-lg font-medium mb-5 lg:mb-10">
        Track, analyze & grow your salon business daily
      </p>

      {/* Upper part */}
      <div className="flex justify-between items-center flex-wrap gap-5">
        <div className="flex gap-3 lg:gap-5 items-center flex-wrap">
          {/* Search */}
          <div className="relative w-[300px] 2xl:w-[350px] 3xl:w-[450px]">
            <input
              type="text"
              className="rounded-lg bg-white w-full py-2 lg:py-3 ps-10 pe-5 shadow outline-none border border-gray-100"
              placeholder="Search by service name, category name"
              onChange={e => setSearch(e.target.value)}
            />
            <button className="absolute left-4 top-[15px] lg:top-[18px]">
              <ServicesSearch />
            </button>
          </div>

          {/* Filter */}
          {/* <Select
            value={selectedTeamMember}
            onValueChange={setSelectedTeamMember}
          >
            <SelectTrigger className="w-[220px] text-base border !py-5 border-[#B3BAC5]">
              <SelectValue>
                {allTeamMembers?.find(
                  member => member.id.toString() === selectedTeamMember
                )?.first_name || "Filter by team member"}
              </SelectValue>
            </SelectTrigger>
            <SelectContent>
              {allTeamMembers?.map(item => (
                <SelectItem
                  key={item.id}
                  value={item.id.toString()}
                  className="!text-black"
                >
                  {item.first_name}
                </SelectItem>
              ))}
            </SelectContent>
          </Select> */}

          {/* reset */}
          <button
            onClick={handleReset}
            className="px-3 lg:px-4 py-[5px] lg:py-[10px] bg-primary flex gap-2 items-center outline-none rounded-lg text-white"
          >
            Reset
          </button>
        </div>
        <Link
          to="/businessDashboard/addService"
          className="px-3 lg:px-4 py-[5px] lg:py-[10px] bg-primary flex gap-2 items-center outline-none rounded-lg text-white"
        >
          <AddNowSvg />
          <p>Add Service</p>
        </Link>
      </div>

      {/* Lower part */}
      <section className="flex flex-col 2xl:flex-row gap-7 3xl:gap-10 mt-10">
        <div className="p-5 3xl:p-8 bg-white rounded-lg shadow h-full">
          <h3 className="mb-3 text-xl font-semibold">Categories</h3>
          {/* <div className="2xl:hidden">
            <Select>
              <SelectTrigger className="w-full text-base border !py-5 border-[#B3BAC5]">
                <SelectValue placeholder="All Categories" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem>
                  <button
                    onClick={() => setActiveTab("all-categories")}
                    className="flex gap-2 items-center"
                  >
                    <p className="text-base">All categories</p>
                    <p
                      className={`w-5 h-5 rounded-full font-bold grid place-items-center text-sm ${
                        activeTab === "all-categories"
                          ? "text-white bg-primary"
                          : " "
                      }`}
                    >
                      5
                    </p>
                  </button>
                </SelectItem>
                <SelectItem>
                  <button
                    onClick={() => setActiveTab("hairAndStyling")}
                    className="flex gap-2 items-center"
                  >
                    <p className="text-base">Hair And Styling</p>
                    <p
                      className={`w-5 h-5 rounded-full font-bold grid place-items-center text-sm ${
                        activeTab === "hairAndStyling"
                          ? "text-white bg-primary"
                          : " "
                      }`}
                    >
                      5
                    </p>
                  </button>
                </SelectItem>
                <SelectItem>
                  <button
                    onClick={() => setActiveTab("nailCare")}
                    className="flex gap-2 items-center"
                  >
                    <p className="text-base">Nail care</p>
                    <p
                      className={`w-5 h-5 rounded-full font-bold grid place-items-center text-sm ${
                        activeTab === "nailCare" ? "text-white bg-primary" : " "
                      }`}
                    >
                      5
                    </p>
                  </button>
                </SelectItem>
                <SelectItem>
                  <button
                    onClick={() => setActiveTab("messaging")}
                    className="flex gap-2 items-center"
                  >
                    <p className="text-base">Messaging</p>
                    <p
                      className={`w-5 h-5 rounded-full font-bold grid place-items-center text-sm ${
                        activeTab === "messaging"
                          ? "text-white bg-primary"
                          : " "
                      }`}
                    >
                      5
                    </p>
                  </button>
                </SelectItem>
                <SelectItem value="5">
                  <AddCategoryModal />
                </SelectItem>
              </SelectContent>
            </Select>
          </div> */}
          <div className="hidden 2xl:block bg-white rounded-lg border-gray-300 p-4 3xl:p-6 h-full w-[300px] border">
            <ul className="space-y-5 text-lg font-medium">
              {/* All Categories Button */}
              <button
                onClick={() => setActiveTab(null)}
                className={`px-3 py-2 w-full rounded-lg text-[#2C2C2C] flex justify-between items-center ${
                  !activeTab
                    ? "bg-primary text-white shadow border"
                    : "border-transparent"
                }`}
              >
                <p>All Categories</p>
                <p
                  className={`w-6 h-6 text-sm rounded-full font-bold grid place-items-center ${
                    activeTab === "all"
                      ? "text-black bg-white"
                      : "text-[#2C2C2C] bg-gray-200 shadow-sm"
                  }`}
                >
                  {allCategoryData?.reduce(
                    (total, cat) => total + (cat?.filtered_services_count || 0),
                    0
                  )}
                </p>
              </button>

              {/* Other Categories */}
              {allCategoryData?.map(item => (
                <button
                  key={item?.id}
                  onClick={() => setActiveTab(item?.id)}
                  className={`px-3 py-2 w-full rounded-lg text-[#2C2C2C] flex justify-between items-center ${
                    activeTab === item?.id
                      ? "bg-primary text-white shadow border"
                      : "border-transparent"
                  }`}
                >
                  <p>{item?.name}</p>
                  <p
                    className={`w-6 h-6 text-sm rounded-full font-bold grid place-items-center ${
                      activeTab === item?.id
                        ? "text-black bg-white"
                        : "text-[#2C2C2C] bg-gray-200 shadow-sm"
                    }`}
                  >
                    {item?.filtered_services_count}
                  </p>
                </button>
              ))}

              {/* Add Category */}
              <AddCategoryModal refetch={refetch} />
            </ul>
          </div>
        </div>
        <div className="flex-grow">
          <AllCategories
            categoryData={categoryData}
            isLoading={isLoading}
            refetch={refetch}
          />
        </div>
      </section>
    </div>
  );
};

export default ServiceMenu;
