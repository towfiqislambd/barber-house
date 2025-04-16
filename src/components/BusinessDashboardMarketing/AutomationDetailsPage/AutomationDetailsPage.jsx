import BreadCrumb from "@/components/BusinessHelpCenter/BreadCrumb/BreadCrumb";
import {
  LeftSideArrowSvg,
  OptionDropDownSvg,
} from "@/components/svgContainer/SvgContainer";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Link } from "react-router-dom";
import DisabledAutomation from "@/components/BusinessDashboard/Modals/DisabledAutomation";
import ResetAutomation from "@/components/BusinessDashboard/Modals/ResetAutomation";
import DeleteAutomation from "@/components/BusinessDashboard/Modals/DeleteAutomation";
import { useState } from "react";
import Performance from "@/components/Performance/Performance";

const AutomationDetailsPage = () => {
  const tabs = [
    { name: "Performance", content: <Performance /> },
    { name: "Details", content: "Here are more details about the topic." },
  ];

  const [activeTab, setActiveTab] = useState(tabs[0]);

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  return (
    <section className="md:max-w-[1072px] mx-auto px-6 md:px-0 py-10 md:py-0">
      {/* This is the button section */}
      <div className="flex gap-4 items-center">
        <Link to={"/booknow"}>
          <button className="flex items-center gap-[6px] border border-[#757575] px-3 py-2 rounded-[100px] text-[#2C2C2C] font-manrope text-base font-medium leading-6">
            <LeftSideArrowSvg />
            Back
          </button>
        </Link>
        <BreadCrumb
          items={[
            { label: "Automations", href: "/" },
            { label: "Appointment reminder", href: "/docs/components" },
          ]}
        />
      </div>
      {/* This is the text section */}
      <div className="xl:mt-12 mt-6 flex flex-col md:flex-row md:justify-between md:items-center gap-5 md:gap-0">
        {/*  */}
        <div className="flex flex-col xl:flex-row gap-4">
          <div>
            <p className="text-[#000] font-outfit text-[28px] font-semibold leading-[33.6px]">
              24 hours upcoming appointment reminder
            </p>
            <p className="text-textLight font-manrope text-base font-medium leading-6 mt-4">
              Notifies clients reminding them of their upcoming appointment.
            </p>
          </div>
          <p className="text-[#008C4F] bg-[#DCFEE6] max-w-[90px] pt-1 px-3 rounded-[100px] h-[33px]">
            Enabled
          </p>
        </div>
        {/*  */}
        <Popover>
          <PopoverTrigger>
            <button className="border border-[#75757] rounded-[100px] py-2 px-6 flex">
              <p className="">Option</p>
              <OptionDropDownSvg />
            </button>
          </PopoverTrigger>
          <PopoverContent className="w-[150px] p-4 space-y-[14px]">
            <Link
              to={"/businessDashboard/automationdetailspage"}
              className="text-[#545454] font-medium"
            >
              Overview
            </Link>
            <Link
              to={"/businessDashboard/businessdashboardeditpage"}
              className="text-[#545454] font-medium block"
            >
              Edit
            </Link>
            <p className="text-[#545454] font-medium">
              <DisabledAutomation />
            </p>
            <p className="">
              <DeleteAutomation />{" "}
            </p>
            <p className="text-[#D21837] font-medium">
              <ResetAutomation />
            </p>
          </PopoverContent>
        </Popover>
      </div>
      {/*  */}
      <div className="md:mt-[45px] mt-5">
        {/* Tabs Navigation */}
        <div>
          {/* Tabs */}
          <div className="flex gap-4 pb-2 cursor-pointer">
            {tabs.map((tab, index) => (
              <p
                key={index}
                onClick={() => handleTabClick(tab)}
                className={`px-4 py-2 font-medium cursor-pointer ${
                  activeTab.name === tab.name
                    ? "bg-textColor rounded-[100px] text-[#FFF] font-manrope text-base font-semibold leading-6"
                    : "text-textColor font-manrope text-base font-semibold leading-6"
                }`}
              >
                {tab.name}
              </p>
            ))}
          </div>

          {/* Tab Content */}
          <div>{activeTab.content}</div>
        </div>
      </div>
    </section>
  );
};

export default AutomationDetailsPage;
