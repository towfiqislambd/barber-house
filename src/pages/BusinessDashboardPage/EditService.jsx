import BasicDetailsForEditService from "@/components/BusinessDashboard/BusinessDashboardCatalog/BasicDetailsForEditService";
import TeamMembers from "@/components/BusinessDashboard/BusinessDashboardCatalog/TeamMembers";
import { useState } from "react";
import { Link } from "react-router-dom";

const EditService = () => {
  const [activeTab, setActiveTab] = useState("basic_details");
  return (
    <div className="4xl:px-40 px-5 lg:px-5 xl:py-10 py-5">
      <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-5 sm:gap-0">
        <h3 className="font-outfit text-3xl font-semibold">Edit service</h3>
        <div className="flex gap-3 items-center">
          <Link to="/businessDashboard/catalogue">
            <button className="text-[#545454] border font-medium border-[#00C2CB] rounded-lg sm:px-8 px-4 sm:py-2 py-1">
              Close
            </button>
          </Link>
          <button className="text-[#fff] bg-[#008A90] font-medium rounded-lg sm:px-8 px-4 sm:py-2 py-1">
            Save
          </button>
        </div>
      </div>

      {/* Lower part */}
      <section className="flex flex-col xl:flex-row 3xl:gap-20 gap-10 mt-10">
        <div className="xl:px-8 px-4 xl:py-14 py-7 bg-white rounded-lg shadow h-full">
          <div className="bg-white rounded-lg border-gray-300 h-full xl:w-[250px]">
            <ul className="space-y-5 text-lg font-medium">
              <h3 className="">Basic</h3>
              <button
                onClick={() => setActiveTab("basic_details")}
                className={`px-3 py-2 w-full rounded-lg ${
                  activeTab === "basic_details"
                    ? "text-[#008A90] shadow border"
                    : "text-[#2C2C2C] border-transparent"
                } flex justify-between items-center`}
              >
                Basic details
              </button>
              <button
                onClick={() => setActiveTab("team_members")}
                className={` px-3 py-2 w-full rounded-lg ${
                  activeTab === "team_members"
                    ? "text-[#008A90] shadow border"
                    : "text-[#2C2C2C] border-transparent"
                } flex justify-between items-center`}
              >
                <p>Team Members</p>
                <p
                  className={`w-6 h-6 text-sm rounded-full font-bold grid place-items-center ${
                    activeTab === "team_members"
                      ? "text-white bg-[#008A90]"
                      : "text-[#2C2C2C] bg-gray-200 shadow-sm"
                  }`}
                >
                  3
                </p>
              </button>
            </ul>
          </div>
        </div>
        <div className="flex-grow">
          {activeTab === "basic_details" && <BasicDetailsForEditService />}
          {activeTab === "team_members" && <TeamMembers />}
        </div>
      </section>
    </div>
  );
};

export default EditService;
