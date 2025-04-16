import { useState } from "react";
import { LeftSideArrowSvg } from "../svgContainer/SvgContainer";
import BreadCrumb from "../BusinessHelpCenter/BreadCrumb/BreadCrumb";
import { Link } from "react-router-dom";
import BusinessDetails from "./BusinessDetails";
import BusinessLocation from "./BusinessLocation";
import ClientSources from "./ClientSources";

const BusinessSetup = () => {
  const [activeTab, setActiveTab] = useState("business-details");
  return (
    <section className="4xl:px-[364px] py-10 px-5 xl:px-0">
      {/* This is the Back and Breadcrumb section */}
      <div className="flex gap-4 items-center">
        <Link
          to={"/businessDashboard/settings"}
          className="flex items-center gap-[6px] border border-[#757575] px-3 py-2 rounded-[100px] text-[#2C2C2C] font-manrope text-base font-medium leading-6"
        >
          <LeftSideArrowSvg />
          Back
        </Link>
        <BreadCrumb
          items={[
            { label: "Workspace settings", href: "/" },
            { label: "Business setup", href: "/docs/components" },
          ]}
        />
      </div>
      <div className="flex flex-col xl:flex-row 2xl:gap-10 lg:gap-10 gap-10 mt-[45px]">
        <div className="bg-white rounded-xl xl:py-6 py-3 xl:px-8 px-4 h-full xl:w-[286px] sm:w-[400px] w-full border border-[#DFE1E6]">
          <h3 className="mb-3 text-2xl font-semibold pl-[18px] xl:pl-0">
            Business setup
          </h3>
          <ul className="space-y-4 text-lg font-medium mt-[22px] text-center">
            <button
              onClick={() => setActiveTab("business-details")}
              className={`px-5 py-2 w-full block text-left duration-300 transition-all hover:bg-[#E7E8FF] hover:text-[#000] rounded-lg ${
                activeTab === "business-details"
                  ? "text-[#000] bg-[#E7E8FF]"
                  : "text-[#2C2C2C]"
              }`}
            >
              Business details
            </button>
            <button
              onClick={() => setActiveTab("appointments")}
              className={`px-5 py-2 w-full block text-left duration-300 transition-all hover:bg-[#E7E8FF] hover:text-[#000] rounded-lg ${
                activeTab === "appointments"
                  ? "text-[#000] bg-[#E7E8FF]"
                  : "text-[#2C2C2C]"
              }`}
            >
              Locations
            </button>
            <button
              onClick={() => setActiveTab("Client sources")}
              className={`px-5 py-2 w-full block text-left duration-300 transition-all hover:bg-[#E7E8FF] hover:text-[#000] rounded-lg ${
                activeTab === "Client sources"
                  ? "text-[#000] bg-[#E7E8FF]"
                  : "text-[#2C2C2C]"
              }`}
            >
              Client sources
            </button>
          </ul>
        </div>
        <div className="flex-grow">
          {activeTab === "business-details" && <BusinessDetails />}
          {activeTab === "appointments" && <BusinessLocation />}
          {activeTab === "Client sources" && <ClientSources />}
        </div>
      </div>
    </section>
  );
};

export default BusinessSetup;
