import AllReports from "@/components/BusinessDashboard/BusinessDashboardReport/AllReports";
import Dashboards from "@/components/BusinessDashboard/BusinessDashboardReport/Dashboards";
import Favourites from "@/components/BusinessDashboard/BusinessDashboardReport/Favourites";
import Standard from "@/components/BusinessDashboard/BusinessDashboardReport/Standard";
import { useState } from "react";

const BusinessDashboardReporting = () => {
  const [activeTab, setActiveTab] = useState("all-reports");
  return (
    <section className="xl:grid xl:grid-cols-12 xl:gap-7 2xl:gap-10">
      {/* Sidebar */}
      <div className="bg-white xl:self-start xl:h-fit xl:col-span-3 4xl:col-span-2 rounded-xl p-4 2xl:p-6 mb-5 xl:mb-0">
        <h3 className="mb-3 text-xl md:text-2xl font-semibold">Reports</h3>
        <div className="border-t pb-5"></div>
        <ul className="xl:space-y-5 text-nowrap flex flex-wrap gap-4 md:gap-5 xl:block 2xl:space-y-7 lg:text-lg font-medium">
          {[
            { id: "all-reports", label: "All reports" },
            { id: "favourites", label: "Favorites" },
            { id: "dashboards", label: "Dashboards" },
            { id: "standard", label: "Standard" },
          ].map((tab) => (
            <button
              key={tab.id}
              onClick={() => setActiveTab(tab.id)}
              className={`px-3 2xl:px-5 py-1 xl:py-2 xl:w-full xl:block text-center xl:text-left transition-all duration-300 hover:bg-primary hover:text-white rounded-lg ${
                activeTab === tab.id
                  ? "text-white bg-primary"
                  : "text-[#2C2C2C]"
              }`}
            >
              {tab.label}
            </button>
          ))}
        </ul>
      </div>
      {/* Content */}
      <div className="xl:col-span-9 4xl:col-span-10 bg-white p-4 md:p-6 rounded-xl w-full">
        {activeTab === "all-reports" && <AllReports />}
        {activeTab === "favourites" && <Favourites />}
        {activeTab === "dashboards" && <Dashboards />}
        {activeTab === "standard" && <Standard />}
      </div>
    </section>
  );
};

export default BusinessDashboardReporting;
