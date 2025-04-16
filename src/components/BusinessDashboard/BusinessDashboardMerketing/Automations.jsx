import {
  AppointmentUpdatesSvg,
  CancelledAppointmentSvg,
  CelebrateBirthdays,
  CreateNewSvg,
  DidNotShowUpSvg,
  RemainderMessageSvg,
  RemainderSvg,
  ReminderToRebook,
  RescheduledAppointmentSvg,
  RewardLoyalClients,
  ThankYouSvg,
  TimeSlotAvailable,
  WelcomeNewClients,
  WinBackLapsedClients,
} from "@/components/svgContainer/SvgContainer";

import { useState } from "react";
import { Link } from "react-router-dom";
import RemainderCard from "@/components/RemainderCard/RemainderCard";
import AppointmentUpdatesCard from "@/components/AppointmentUpdatesCard/AppointmentUpdatesCard";
import CelebrateMilestoneCard from "@/components/CelebrateMilestoneCard/CelebrateMilestoneCard";
import MarketingThreeDot from "./MarketingThreeDot";
const Automations = () => {
  const appointmentUpdatesData = [
    {
      id: 1,
      icon: <AppointmentUpdatesSvg />,
      title: "New appointment",
      description:
        "Notifies clients reminding them of their upcoming appointment.",
      status: "Enabled",
    },
    {
      id: 2,
      icon: <RescheduledAppointmentSvg />,
      title: "Rescheduled appointment",
      description:
        "Automatically sends to clients when their appointment start time is changed.",
      status: "Enabled",
    },
    {
      id: 3,
      icon: <CancelledAppointmentSvg />,
      title: "Cancelled appointment",
      description:
        "Automatically sends to clients when their appointment is cancelled.",
      status: "Enabled",
    },
    {
      id: 4,
      icon: <DidNotShowUpSvg />,
      title: "Did not show up",
      description:
        "Automatically sends to clients when their appointment is marked as a no-show.",
      status: "Enabled",
    },
    {
      id: 5,
      icon: <ThankYouSvg />,
      title: "Thank you for visiting",
      description:
        "Reach out to clients when their appointment is checked out, with a link to leave a review.",
      status: "Enabled",
    },
  ];

  const waitlistUpdatesData = [
    {
      id: 1,
      icon: <RescheduledAppointmentSvg />,
      title: "Joined the waitlist",
      description:
        "Automatically sends to clients when they join the waitlist.",
      status: "Enabled",
      statusBg: "#DCFEE6",
      hasIcon: true,
    },
    {
      id: 2,
      icon: <TimeSlotAvailable />,
      title: "Time slot available",
      description:
        "Automatically sends to clients when a time slot becomes available to book.",
      status: "Enabled",
      statusBg: "#DCFEE6",
      hasIcon: false,
    },
  ];

  const increaseMilestonesData = [
    {
      id: 1,
      icon: <ReminderToRebook />,
      title: "Reminder to rebook",
      description:
        "Remind your clients to rebook a few weeks after their last appointment.",
    },
    {
      id: 2,
      icon: <CelebrateBirthdays />,
      title: "Celebrate birthdays",
      description:
        "Surprise clients on their special day, a proven way to boost client loyalty and retention.",
    },
    {
      id: 3,
      icon: <WinBackLapsedClients />,
      title: "Win back lapsed clients",
      description:
        "Reach clients that you haven’t seen for a while and encourage them to book their next appointment.",
    },
    {
      id: 4,
      icon: <RewardLoyalClients />,
      title: "Reward loyal clients",
      description:
        "Message top spenders and get them even more engaged with a special offer.",
    },
  ];

  const tabs = [
    { name: "Reminders", to: "#Reminders" },
    { name: "Appointment updates", to: "#AppointmentUpdates" },
    { name: "Waitlist updates", to: "#WaitlistUpdates" },
    { name: "Increase bookings", to: "#IncreaseBookings" },
    { name: "Celebrate milestones", to: "#CelebrateMilestones" },
  ];

  const celebrateMilestoneData = [
    {
      id: 1,
      icon: <WelcomeNewClients />,
      title: "Welcome new clients",
      description:
        "Celebrate new clients joining your business by offering them a discount.",
      status: "Enabled",
      statusBg: "#DCFEE6",
      hasIcon: true,
    },
    {
      id: 2,
      icon: <RemainderSvg />,
      title: "Appointment Reminder",
      description: "Reminds clients about their upcoming appointment.",
      status: "Active",
      statusBg: "#FFD54F", // Yellow
      hasIcon: true,
    },
    {
      id: 3,
      icon: <WelcomeNewClients />,
      title: "New Promotion",
      description: "A special discount is available for selected clients.",
      status: "Disabled",
      statusBg: "#FFCDD2", // Red
      hasIcon: false, // No icon in this case
    },
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
    <section>
      <div>
        <p className="text-textSecondary font-outfit text-[28px] font-semibold leading-[33.6px]">
          Automations
        </p>
        <p className="text-textColor font-manrope text-base font-normal leading-6 mt-[9px]">
          View and manage all automated messages sent to your clients.{" "}
          <Link className="text-[#055AD9] font-semibold"> Learn more</Link>
        </p>
        {/* array of function */}
        <div className="mt-[45px]">
          {/* Tabs Navigation */}
          <div className="flex flex-wrap 3xl:gap-4 gap-3 pb-2 cursor-pointer">
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
        </div>

        {/* Reminders */}
        <div id="Reminders" className="mt-[45px]">
          <p className="text-[#000] font-outfit text-2xl font-semibold leading-[28.8px] ">
            Reminders
          </p>
          {/*  */}
          <div className="flex flex-wrap gap-4">
            {/* This is the first Card */}
            <RemainderCard
              title="24 hours upcoming appointment reminder"
              description="Notifies clients reminding them of their upcoming appointment."
              status="Enabled"
            />
            {/* This is the second Card */}
            <RemainderCard
              title="1 hour upcoming appointment reminder"
              description="Notifies clients reminding them of their upcoming appointment."
              status="Enabled"
            />
            {/* This is the select select  */}
            <Link className="border border-[#DFE1E6] xl:max-w-[258px] lg:w-[325px] w-full lg:py-[120px] py-[100px] px-[70px] rounded-2xl 3xl:mt-[22px] hover:bg-[#E0E0E0] ease-out duration-300 cursor-pointer">
              <div className="flex flex-col items-center">
                <CreateNewSvg />
                <p className="text-[#0065FF] font-manrope text-base font-bold leading-6">
                  Create New
                </p>
              </div>
            </Link>
          </div>
        </div>
        {/* Appointment updates */}
        <div id="AppointmentUpdates" className="mt-[45px] ">
          <p className="text-[#000] font-outfit text-2xl font-semibold leading-[28.8px]">
            Appointment updates
          </p>
          {/*  */}
          <div className="flex flex-wrap gap-4 mt-[22px]">
            {appointmentUpdatesData.map((card) => (
              <AppointmentUpdatesCard
                key={card.id}
                id={card.id}
                icon={card.icon}
                title={card.title}
                description={card.description}
                status={card.status}
              />
            ))}
          </div>
        </div>
        {/* Waitlist updates */}
        <div id="WaitlistUpdates" className="mt-[45px]">
          <p className="text-[#000] font-outfit text-2xl font-semibold leading-[28.8px]">
            Waitlist updates
          </p>
          {/*  */}
          <div className="flex flex-wrap gap-4">
            {waitlistUpdatesData.map((card) => (
              <div
                key={card.id}
                className="border border-[#DFE1E6] xl:max-w-[258px] lg:w-[325px] w-full xl:p-6 p-4 rounded-2xl md:mt-[22px] mt-3 hover:bg-[#E0E0E0] ease-out duration-300 cursor-pointer"
              >
                <div className="flex justify-between">
                  {card.icon}
                  <MarketingThreeDot />
                </div>

                <div className="mt-[21px]">
                  <h1 className="text-[#000] font-manrope text-lg font-semibold leading-[27px]">
                    {card.title}
                  </h1>
                  <p className="mt-[15px] text-[#000] font-manrope text-base font-normal leading-6">
                    {card.description}
                  </p>
                </div>

                <div className="flex justify-between items-center mt-[21px]">
                  <p
                    className="rounded-[100px] max-w-[85px] px-3 py-[6px]"
                    style={{ backgroundColor: card.statusBg }}
                  >
                    {card.status}
                  </p>
                  {card.hasIcon && <RemainderMessageSvg />}
                </div>
              </div>
            ))}
          </div>
        </div>
        {/* Increase bookings */}
        <div id="IncreaseBookings" className="mt-[45px]">
          <p className="text-[#000] font-outfit text-2xl font-semibold leading-[28.8px]">
            Celebrate milestones
          </p>
          {/*  */}
          <div className="flex flex-wrap gap-4 mt-[22px]">
            {increaseMilestonesData?.map((card) => (
              <div
                key={card.id}
                className="border border-[#DFE1E6] xl:max-w-[258px] lg:w-[325px] w-full xl:p-6 p-4 rounded-2xl hover:bg-[#E0E0E0] ease-out duration-300 cursor-pointer"
              >
                <div className="flex justify-between">
                  {card.icon}
                  <MarketingThreeDot />
                </div>

                <div className="mt-[21px]">
                  <h1 className="text-[#000] font-manrope text-lg font-semibold leading-[27px]">
                    {card.title}
                  </h1>
                  <p className="mt-[15px] text-[#000] font-manrope text-base font-normal leading-6">
                    {card.description}
                  </p>
                </div>

                <div className="flex justify-between items-center mt-[21px]">
                  <p className="bg-[#DCFEE6] rounded-[100px] max-w-[85px] px-3 py-[6px]">
                    Enabled
                  </p>
                  <RemainderMessageSvg />
                </div>
              </div>
            ))}
          </div>
        </div>
        {/* Celebrate milestones */}
        <div id="CelebrateMilestones" className="mt-[45px]">
          <p className="text-[#000] font-outfit text-2xl font-semibold leading-[28.8px]">
            Celebrate milestones
          </p>
          {/*  */}
          <div className="flex flex-wrap gap-4">
            {/* This is the first Card */}
            <div className="flex flex-wrap gap-4">
              {celebrateMilestoneData.map((card) => (
                <CelebrateMilestoneCard key={card.id} {...card} />
              ))}
            </div>
            {/* This is the select select  */}
            <Link className="border border-[#DFE1E6] xl:max-w-[258px] lg:w-[325px] w-full lg:py-[120px] py-[100px] px-[70px] rounded-2xl 3xl:mt-[22px]">
              <div className="flex flex-col items-center">
                <CreateNewSvg />
                <p className="text-[#0065FF] font-manrope text-base font-bold leading-6">
                  Create New
                </p>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Automations;
