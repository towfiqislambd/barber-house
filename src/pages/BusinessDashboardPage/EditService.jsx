import BasicDetailsForEditService from "@/components/BusinessDashboard/BusinessDashboardCatalog/BasicDetailsForEditService";
import { useState } from "react";

const EditService = () => {
  const [activeTab, setActiveTab] = useState("basic_details");

  return (
    <div className="4xl:px-40 px-5 lg:px-5 xl:py-10 py-5">
      <div className="flex flex-col sm:flex-row sm:justify-between sm:items-center gap-5 sm:gap-0">
        <h3 className="font-outfit text-3xl font-semibold">Edit service</h3>
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
            </ul>
          </div>
        </div>
        <div className="flex-grow">
          {activeTab === "basic_details" && <BasicDetailsForEditService />}
        </div>
      </section>
    </div>
  );
};

export default EditService;
