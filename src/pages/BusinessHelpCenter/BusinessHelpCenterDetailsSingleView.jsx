import BreadCrumb from "@/components/BusinessHelpCenter/BreadCrumb/BreadCrumb";
import { useState } from "react";
import { Tabs } from "antd";
import SinglePageCard from "@/components/BusinessHelpCenter/SinglePageCard/SinglePageCard";
import { UpNextArrowSign } from "@/components/svgContainer/SvgContainer";

export default function BusinessHelpCenterDetailsSingleView() {
  const [tabPosition, setTabPosition] = useState("right");

  const items = [
    {
      label: (
        <span className="font-manrope text-lg font-medium leading-[27px]">
          Built for beauty and wellness
        </span>
      ),
      key: "1",
      children: <SinglePageCard />,
    },
    {
      label: (
        <span className="font-manrope text-lg font-medium leading-[27px]">
          Easy to use, anywhere
        </span>
      ),
      key: "2",
      children: <SinglePageCard />,
    },
    {
      label: (
        <span className="font-manrope text-lg font-medium leading-[27px]">
          Smarter scheduling
        </span>
      ),
      key: "3",
      children: <SinglePageCard />,
    },
    {
      label: (
        <span className="font-manrope text-lg font-medium leading-[27px]">
          Accurate availability
        </span>
      ),
      key: "4",
      children: "Accurate availability",
    },
    {
      label: (
        <span className="font-manrope text-lg font-medium leading-[27px]">
          Synced to your schedule
        </span>
      ),
      key: "5",
      children: <SinglePageCard />,
    },
  ];

  const appointments = [
    {
      title: "Complete appointments",
      description:
        "Explore the benefits of completing appointments from reliable reporting to targeted marketing.",
    },
    {
      title: "Scheduled appointments",
      description:
        "Schedule appointments with ease and manage your calendar effectively.",
    },
    {
      title: "Upcoming appointments",
      description:
        "Stay on top of your appointments and prepare in advance for each session.",
    },
  ];

  return (
    <section>
      <div>
        <div className="container py-[68px]">
          <BreadCrumb
            items={[
              { label: "Help center", href: "/" },
              { label: "Knowledge base", href: "/docs/components" },
              { label: "Calendar and schedule" },
              { label: "Calendar and About the calendar" },
            ]}
          />
          <h1 className="text-textSecondary font-outfit text-5xl font-semibold leading-[57.6px] mt-6">
            About the calendar
          </h1>
          <p className="text-textLight font-manrope text-lg leading-[27px] max-w-[1053px] mt-2">
            The Fresha calendar is a powerful scheduling tool that allows your
            businesses to manage appointments, team availability, and resources
            in one central place. Designed for flexibility and ease, it helps
            you stay on top of your bookings while reducing admin time.
          </p>
        </div>
        {/* Main content container */}
        <div className="container">
          {/* Title outside the Tabs component */}
          <h1 className="text-textSecondary font-outfit text-2xl font-semibold leading-[28.8px] mt-6 text-right absolute right-[310px] top-[452px]">
            This guide covers
          </h1>
          {/* Tabs component */}
          <Tabs tabPosition={tabPosition} items={items} />
        </div>
      </div>

      {/* Like button section */}
      <div className="max-w-[659px] border-t ml-[185px] mt-[72px]">
        <h1 className="text-textSecondary font-outfit text-[28px] font-semibold leading-[33.3px] mt-[72px]">
          Up next
        </h1>
        <div className="my-[37px]">
          {appointments.map((appointment, index) => (
            <div
              key={index}
              className={`flex gap-2 pb-4 mt-[43px] ${
                index !== appointments.length - 1 ? "border-b" : ""
              }`}
            >
              <UpNextArrowSign />
              <div>
                <h1 className="text-textSecondary font-manrope text-lg font-medium leading-[27px]">
                  {appointment.title}
                </h1>
                <p className="text-textLight font-manrope text-base leading-6">
                  {appointment.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
