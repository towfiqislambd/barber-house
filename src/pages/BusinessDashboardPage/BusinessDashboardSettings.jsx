import OnlinePresence from "@/components/OnlinePresence/OnlinePresence";
import SettingCard from "@/components/SettingCard/SettingCard";
import {
  BusinessSetupSvg,
  PaymentsSvg,
  SalesSvg,
  SchedulingSvg,
} from "@/components/svgContainer/SvgContainer";
import { useState } from "react";

const BusinessDashboardSettings = () => {
  const cardsData = [
    {
      icon: BusinessSetupSvg,
      title: "Business Setup",
      description:
        "Customize business details, manage locations, and client referral sources.",
      link: "/businessDashboard/businessetup",
    },
    {
      icon: SchedulingSvg,
      title: "Scheduling",
      description:
        "Set your availability, manage bookable resources and online booking preferences",
      link: "/businessDashboard/scheduling",
    },
    {
      icon: SalesSvg,
      title: "Sales",
      description:
        "Configure payment methods, taxes, receipts, service charges and gift cards.",
      link: "/businessDashboard/settingsales",
    },
    {
      icon: BusinessSetupSvg,
      title: "Team",
      description: "Manage permissions, compensation and time-off",
      link: "/businessDashboard/permissionpage",
    },
    {
      icon: PaymentsSvg,
      title: "Payments",
      description:
        "Configure payment methods, terminals and your payment policy",
      link: "/analytics",
    },
  ];
  const orderPresenceData = [
    {
      title: "Marketplace profile",
      description: "Attract new clients with online bookings.",
      link: "/business-setup",
    },
  ];
  const marketingData = [
    {
      title: "Automations",
      description: "Attract new clients with online bookings.",
      link: "/business-setup",
    },
    {
      title: "Deals",
      description:
        "Reward and retain clients with discount codes, flash sales and promotion offers.",
      link: "/business-setup",
    },
    {
      title: "Smart pricing",
      description:
        "Adjust your prices to charge different amounts during more or less busy hours",
      link: "/business-setup",
    },
    {
      title: "Ratings and reviews",
      description:
        "View star ratings and reviews left by clients after their visit.",
      link: "/business-setup",
    },
  ];
  const otherData = [
    {
      title: "Add-ons",
      description: "Take your business to the next level with Fresha add-ons",
      link: "/business-setup",
    },
    {
      title: "Integrations",
      description: "Integrate Fresha with third party applications",
      link: "/business-setup",
    },
  ];

  const tabs = [
    { name: "Settings", to: "#Settings" },
    { name: "Online presence", to: "#OnlinePresence" },
    { name: "Marketing", to: "#Marketing" },
    { name: "Other", to: "#Other" },
  ];

  const handleTabClick = (tab) => {
    setActiveTab(tab);
    const section = document.getElementById(tab.to.substring(1));
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };
  const [activeTab, setActiveTab] = useState(tabs[0]);
  return (
    <section className="2xl:px-14 3xl:px-12 4xl:px-[364px] px-6 py-8 4xl:py-16">
      {/* This is the text size */}
      <div>
        <p className="text-textSecondary font-outfit text-[28px] font-semibold leading-[33.6px]">
          Workspace settings
        </p>
        <p className="text-textColor font-manrope text-base leading-6 mt-[9px]">
          Manage settings for SR.
        </p>
      </div>
      {/* array of function */}
      <div className="my-6 xl:my-[45px]">
        {/* Tabs Navigation */}
        <div className="flex flex-col sm:flex-row gap-2 lg:gap-4 pb-2 cursor-pointer text-center sm:text-left">
          {tabs.map((tab, index) => (
            <p
              key={index}
              onClick={() => handleTabClick(tab)}
              className={`lg:px-4 md:px-3 px-2 md:py-2 py-1 font-medium cursor-pointer  ${
                activeTab.name === tab.name
                  ? "bg-textColor rounded-[100px] text-[#FFF] font-manrope text-sm md:text-sm lg:text-base font-semibold leading-6"
                  : "text-textColor font-manrope text-sm md:text-sm lg:text-base font-semibold leading-6"
              }`}
            >
              {tab.name}
            </p>
          ))}
        </div>
      </div>
      {/* This is the card */}
      <div className="grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-3 lg:gap-6">
        {cardsData.map((card, index) => (
          <SettingCard key={index} {...card} />
        ))}
      </div>
      {/* Online presence */}
      <div id="OnlinePresence" className="mt-5 md:mt-[45px]">
        <p className="text-textColor font-outfit text-xl xl:text-2xl 2xl:text-[28px] font-semibold leading-[33.6px]">
          Online presence
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6 mt-4">
          {orderPresenceData.map((card, index) => (
            <OnlinePresence key={index} {...card} />
          ))}
        </div>
      </div>
      {/* Marketing */}
      <div id="Marketing" className="mt-5 md:mt-[45px]">
        <p className="text-textColor font-outfit text-xl xl:text-2xl 2xl:text-[28px] font-semibold leading-[33.6px]">
          Marketing
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6 mt-4">
          {marketingData.map((card, index) => (
            <OnlinePresence key={index} {...card} />
          ))}
        </div>
      </div>
      {/* Other */}
      <div id="Other" className="mt-5 md:mt-[45px]">
        <p className="text-textColor font-outfit text-xl xl:text-2xl 2xl:text-[28px] font-semibold leading-[33.6px]">
          Other
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 gap-6 mt-4">
          {otherData.map((card, index) => (
            <OnlinePresence key={index} {...card} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default BusinessDashboardSettings;
