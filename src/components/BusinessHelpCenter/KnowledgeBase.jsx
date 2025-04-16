import React, { useState } from "react";
import CommonTitle from "./CommonTitle";
import { Link } from "react-router-dom";
import CalanderIcon from "../../assets/images/icon/calender.png";
import SalesIcon from "../../assets/images/icon/sales.png";
import ClientIcon from "../../assets/images/icon/clients.png";
import TeamIcon from "../../assets/images/icon/team.png";
import ServiceIcon from "../../assets/images/icon/services.png";
import ClientMessageIcon from "../../assets/images/icon/client-message.png";
import OnlineIcon from "../../assets/images/icon/online.png";
import Payment from "../../assets/images/icon/payments.png";
import Marketing from "../../assets/images/icon/marketing.png";
import InventoryIcon from "../../assets/images/icon/invertory.png";
import GiftIcon from "../../assets/images/icon/gift-cards.png";
import ReportIcon from "../../assets/images/icon/reports.png";
import adIcon from "../../assets/images/icon/add-ons.png";
import workSpaceIcon from "../../assets/images/icon/workspace.png";
import BillingIcon from "../../assets/images/icon/billing.png";
import PersonalIcon from "../../assets/images/icon/personal-account.png";
import PrivecyIcon from "../../assets/images/icon/privacy.png";
import { IoArrowDownSharp } from "react-icons/io5";

export default function KnowledgeBase() {
  const [visibleCards, setVisibleCards] = useState(6);
  const knowledgeBaseCards = [
    {
      id: 1,
      title: "Calendar and schedule",
      text: "Master appointment scheduling and get the most from your calendar",
      image: CalanderIcon,
    },
    {
      id: 2,
      title: "Sales and checkout",
      text: "Checkout sales and track invoices, refunds, and sales performance",
      image: SalesIcon,
    },
    {
      id: 3,
      title: "Clients",
      text: "Create and manage your client list while building loyalty with rewards",
      image: ClientIcon,
    },
    {
      id: 4,
      title: "Team ",
      text: "Explore tools to manage, organize, and pay your team and independents",
      image: TeamIcon,
    },
    {
      id: 5,
      title: "Services and memberships",
      text: "Create and customize services and memberships for easy client booking",
      image: ServiceIcon,
    },
    {
      id: 6,
      title: "Client messaging ",
      text: "Set up automated messages to keep clients updated and engaged",
      image: ClientMessageIcon,
    },
    {
      id: 7,
      title: "Online profile",
      text: "Set up your Fresha marketplace profile to boost visibility and attract clients",
      image: OnlineIcon,
    },
    {
      id: 8,
      title: "Payments",
      text: "Set up payments to unlock new methods and reduce no-shows",
      image: Payment,
    },
    {
      id: 9,
      title: "Marketing",
      text: "Create newsletters, promotions, and offers to boost client engagement",
      image: Marketing,
    },
    {
      id: 10,
      title: "Inventory and products ",
      text: "Set up and track inventory, manage stock, and sell products seamlessly",
      image: InventoryIcon,
    },
    {
      id: 11,
      title: "Gift cards ",
      text: "Boost sales and keep clients coming back with gift cards",
      image: GiftIcon,
    },
    {
      id: 12,
      title: "Reports and Insights ",
      text: "Track and analyze data to gain valuable business insights",
      image: ReportIcon,
    },
    {
      id: 13,
      title: "Add-ons and integrations ",
      text: "Enhance your Fresha experience by enabling add-ons and and integrations",
      image: adIcon,
    },
    {
      id: 14,
      title: "Workspace settings ",
      text: "Set up and customize your workspace to match your business preferences",
      image: workSpaceIcon,
    },
    {
      id: 15,
      title: "Billing and fees ",
      text: "Keep finances organized by managing billing, fees, payments, and tax forms",
      image: BillingIcon,
    },
    {
      id: 16,
      title: "Personal account",
      text: "Manage your personal account settings and personal wallet",
      image: PersonalIcon,
    },
    {
      id: 17,
      title: "Privacy and security",
      text: "Secure your account and manage privacy settings to protect your data",
      image: PrivecyIcon,
    },
  ];

  const handleViewAll = () => {
    setVisibleCards(knowledgeBaseCards.length);
  };
  return (
    <section className="py-[40px] xl:py-[67px]">
      <div className="container ">
        <div className="text-center mb-[67px] px-[15px]">
          <CommonTitle
            title="Knowledge base"
            text="Dive into our guides and master the ins-and-outs of using Fresha for your business"
          ></CommonTitle>
        </div>
        <div className="flex flex-wrap gap-x-[30px] gap-y-[30px] px-[15px] ">
          {knowledgeBaseCards.slice(0, visibleCards).map((knowledge) => (
            <Link
              to={"/business/businessdetails"}
              className="xl:w-[31.5%]"
              key={knowledge.id}
            >
              <div className="flex h-[100%] flex-col gap-[18px] w-full rounded-[16px] shadow-[0px_2px_16px_0px_rgba(0,0,0,0.08)] border border-[#dfe1e6] py-[18px] px-[24px]">
                <div className="w-[60px] h-[60px] m-auto xl:m-0">
                  <img
                    className="w-full h-full object-cover"
                    src={knowledge.image}
                    alt=""
                  />
                </div>
                <div className="text-center xl:text-start">
                  <h4 className="mb-[14px] text-[#1E1E1E] font-outfit text-[24px] font-semibold leading-[28px]">
                    {knowledge.title}
                  </h4>
                  <p className="text-[#545454] font-manrope leading-[24px]">
                    {knowledge.text}
                  </p>
                </div>
              </div>
            </Link>
          ))}
        </div>
        <div className="mt-[48px] flex justify-center">
          {visibleCards < knowledgeBaseCards.length && (
            <button
              onClick={handleViewAll}
              className="flex justify-center items-center gap-2 text-[#2C2C2C] text-nowrap font-medium py-[12px] px-[24px] rounded-[16px] border border-[#DFE1E6]"
            >
              See More{" "}
              <span>
                <IoArrowDownSharp />
              </span>
            </button>
          )}
        </div>
      </div>
    </section>
  );
}
