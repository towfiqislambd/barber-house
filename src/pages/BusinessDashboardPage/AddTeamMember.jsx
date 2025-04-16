import AddressInfo from "@/components/BusinessDashboard/BusinessDashboardMemberList/AddressInfo";
import ProfileInfo from "@/components/BusinessDashboard/BusinessDashboardMemberList/ProfileInfo";
import { useState } from "react";
import { Link } from "react-router-dom";

const AddTeamMember = () => {
  const [activeTab, setActiveTab] = useState("profile");
  return (
    <div className="4xl:px-40 4xl:py-10 px-6">
      <div className="flex flex-col sm:flex-row sm:justify-between justify-start sm:items-center gap-5 sm:gap-0 mt-5 md:mt-0">
        <h3 className="font-outfit text-3xl font-semibold">Add team member</h3>
        <div className="flex flex-col md:flex-row gap-3 sm:items-center">
          <Link to="/businessDashboard/members-list">
            <button className="text-[#545454] border font-medium border-[#00C2CB] rounded-lg px-8 py-2 w-full">
              Close
            </button>
          </Link>
          <button className="text-[#fff] bg-[#008A90] font-medium rounded-lg px-8 py-2">
            Save
          </button>
        </div>
      </div>

      {/* Lower part */}
      <section className="flex flex-col xl:flex-row 2xl:gap-20 gap-10 sm:mt-10 mt-5">
        <div className="2xl:px-8 px-6 2xl:py-14 py-7 bg-white rounded-lg shadow h-full">
          <div className="bg-white rounded-lg border-gray-300 h-full xl:w-[250px]">
            <ul className="2xl:space-y-5 space-y-2 text-lg font-medium">
              <h3 className="text-lg font-semibold">Personal</h3>
              <button
                onClick={() => setActiveTab("profile")}
                className={`px-3 py-2 w-full rounded-lg ${
                  activeTab === "profile"
                    ? "text-[#008A90] shadow border"
                    : "text-[#2C2C2C] border-transparent"
                } flex justify-between items-center`}
              >
                Profile
              </button>
              <button
                onClick={() => setActiveTab("address")}
                className={` px-3 py-2 w-full rounded-lg ${
                  activeTab === "address"
                    ? "text-[#008A90] shadow border"
                    : "text-[#2C2C2C] border-transparent"
                } flex justify-between items-center`}
              >
                Addresses
              </button>
              <div className="border-t border-[#00C2CB]"></div>
              <h3 className="text-lg font-semibold">Workspace</h3>
              <button
                onClick={() => setActiveTab("services")}
                className={`px-3 py-2 w-full rounded-lg ${
                  activeTab === "services"
                    ? "text-[#008A90] shadow border"
                    : "text-[#2C2C2C] border-transparent"
                } flex justify-between items-center`}
              >
                Services
              </button>
              <button
                onClick={() => setActiveTab("settings")}
                className={`px-3 py-2 w-full rounded-lg ${
                  activeTab === "settings"
                    ? "text-[#008A90] shadow border"
                    : "text-[#2C2C2C] border-transparent"
                } flex justify-between items-center`}
              >
                Settings
              </button>
              <h3 className="text-lg font-semibold">Pay</h3>
              <button
                onClick={() => setActiveTab("commission")}
                className={`px-3 py-2 w-full rounded-lg ${
                  activeTab === "commission"
                    ? "text-[#008A90] shadow border"
                    : "text-[#2C2C2C] border-transparent"
                } flex justify-between items-center`}
              >
                Commission
              </button>
            </ul>
          </div>
        </div>
        <div className="flex-grow">
          {activeTab === "profile" && <ProfileInfo />}
          {activeTab === "address" && <AddressInfo />}
        </div>
      </section>
    </div>
  );
};

export default AddTeamMember;
