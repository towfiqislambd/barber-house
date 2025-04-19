import Automations from "@/components/BusinessDashboard/BusinessDashboardMerketing/Automations";
import MessageHistory from "@/components/BusinessDashboard/BusinessDashboardMerketing/MessageHistory";
import Reveiws from "@/components/BusinessDashboard/BusinessDashboardMerketing/Reveiws";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const BusinessDashboardMarketing = () => {
  const navigate = useNavigate();
  const [activeTab, setActiveTab] = useState("Automations");
  const [isVisible, setIsVisible] = useState(false);
  useEffect(() => {
    if (activeTab === "Smart pricing") {
      navigate("/businessDashboard/smartpricingstepcontainer");
    }
  }, [activeTab, navigate]);

  const tabs = [
    { label: "Automations", category: null },
    { label: "Messages history", category: null },
    { label: "Promotion", category: "heading" },
    { label: "Smart pricing", category: null },
    { label: "Engage", category: "heading" },
    { label: "Reviews", category: null },
  ];

  return (
    <section className="flex flex-col xl:flex-row 4xl:gap-[244px] 3xl:gap-8 2xl:gap-40 gap-5 h-[100vh] overflow-hidden px-[26px] xl:px-0 pt-5 pb-10 md:py-0">
      {/*  */}
      <div className="relative">
        {/* Toggle Button */}
        <button
          className="xl:hidden px-4 py-2 bg-primary text-white rounded-md xl:mb-4"
          onClick={() => setIsVisible(!isVisible)}
        >
          {isVisible ? "Close Menu" : "Open Menu"}
        </button>

        {/* Sidebar */}
        <div
          className={`bg-white rounded-xl 4xl:p-6 3xl:p-3 p-5 h-full fixed top-12 left-0 transform -translate-x-full transition-transform duration-300 xl:w-[250px] w-[250px] shadow-lg z-50
    ${
      isVisible ? "translate-x-0" : ""
    } xl:relative xl:translate-x-0 xl:block mt-10 xl:mt-0`}
        >
          <h3 className="mb-3 text-xl font-semibold text-[#000] font-manrope leading-[30px]">
            Messaging
          </h3>
          <ul className="space-y-5 4xl:text-lg text-base font-medium mt-4">
            {tabs.map((tab) =>
              tab.category === "heading" ? (
                <h3
                  key={tab.label}
                  className="mb-3 text-xl font-semibold text-[#000] font-manrope leading-[30px]"
                >
                  {tab.label}
                </h3>
              ) : (
                <button
                  key={tab.label}
                  onClick={() => setIsVisible(false) || setActiveTab(tab.label)}
                  className={`px-5 py-2 w-full block text-left duration-300 transition-all hover:bg-primary hover:text-white rounded-lg ${
                    activeTab === tab.label
                      ? "text-white bg-primary"
                      : "text-[#2C2C2C]"
                  }`}
                >
                  {tab.label}
                </button>
              )
            )}
          </ul>
        </div>
      </div>

      {/*  */}
      <div className="flex-grow xl:max-w-[1080px] xl:overflow-y-auto xl:h-[100vh] hide-scrollbar">
        {activeTab === "Automations" && <Automations />}
        {activeTab === "Messages history" && <MessageHistory />}
        {activeTab === "Smart pricing" && null}{" "}
        {activeTab === "Reviews" && <Reveiws />}
      </div>
    </section>
  );
};

export default BusinessDashboardMarketing;
