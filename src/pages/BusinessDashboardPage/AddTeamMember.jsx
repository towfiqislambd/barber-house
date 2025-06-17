import ProfileInfo from "@/components/BusinessDashboard/BusinessDashboardMemberList/ProfileInfo";
import { useState } from "react";

const AddTeamMember = () => {
  const [activeTab, setActiveTab] = useState("profile");
  return (
    <div className="4xl:px-40 4xl:py-10 px-6">
      <div className="flex flex-col sm:flex-row sm:justify-between justify-start sm:items-center gap-5 sm:gap-0 mt-5 md:mt-0">
        <h3 className="font-outfit text-3xl font-semibold">Add team member</h3>
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
                    ? "text-primary shadow border"
                    : "text-[#2C2C2C] border-transparent"
                } flex justify-between items-center`}
              >
                Profile
              </button>
            </ul>
          </div>
        </div>
        <div className="flex-grow">
          {activeTab === "profile" && <ProfileInfo />}
        </div>
      </section>
    </div>
  );
};

export default AddTeamMember;
