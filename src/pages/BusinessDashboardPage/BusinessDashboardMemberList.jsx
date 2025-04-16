import ScheduledShifts from "@/components/BusinessDashboard/BusinessDashboardMemberList/ScheduledShifts";
import TeamMembers from "@/components/BusinessDashboard/BusinessDashboardMemberList/TeamMembers";
import { useState } from "react";

const BusinessDashboardMemberList = () => {
  const [activeTab, setActiveTab] = useState("team-members");
  return (
    <section className="xl:grid xl:grid-cols-12 xl:gap-7 2xl:gap-10">
      <div className="bg-white rounded-xl xl:mb-0 sm:p-6 p-4 xl:self-start xl:h-fit xl:col-span-4 2xl:col-span-3 4xl:col-span-2">
        <h3 className="mb-3 text-2xl font-semibold">Team</h3>
        <div className="border-t pb-5"></div>
        <ul className="flex gap-5 xl:block xl:space-y-7 text-lg font-medium">
          <button
            onClick={() => setActiveTab("team-members")}
            className={`sm:px-5 px-2 py-2 xl:w-full xl:block text-left duration-300 transition-all hover:bg-[#008A90] hover:text-white rounded-lg ${
              activeTab === "team-members"
                ? "text-white bg-[#008A90] sm:text-lg text-sm"
                : "text-[#2C2C2C] sm:text-lg text-sm"
            }`}
          >
            Team members
          </button>
          <button
            onClick={() => setActiveTab("scheduled_shifts")}
            className={`sm:px-5 px-2 py-2 xl:w-full xl:block text-left duration-300 transition-all hover:bg-[#008A90] hover:text-white rounded-lg ${
              activeTab === "scheduled_shifts"
                ? "text-white bg-[#008A90] sm:text-lg text-sm"
                : "text-[#2C2C2C] sm:text-lg text-sm"
            }`}
          >
            Scheduled shifts
          </button>
        </ul>
      </div>
      <div className="xl:col-span-8 2xl:col-span-9 4xl:col-span-10 bg-white p-4 md:p-6 rounded-xl w-full">
        {activeTab === "team-members" && <TeamMembers />}
        {activeTab === "scheduled_shifts" && <ScheduledShifts />}
      </div>
    </section>
  );
};

export default BusinessDashboardMemberList;
