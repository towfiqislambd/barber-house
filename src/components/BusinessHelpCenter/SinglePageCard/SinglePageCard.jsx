import {
  DislikeSvg,
  ThumbsUpSvg,
} from "@/components/svgContainer/SvgContainer";

const SinglePageCard = () => {
  const calenders = [
    {
      title: "Built for beauty and wellness",
      subtitle:
        "The Fresha calendar is tailored for businesses in the beauty and wellness space, providing all the essential tools to easily manage bookings. Whether you’re scheduling individual, repeat, or group appointments, the calendar adapts to your business needs - you can also block time out for breaks or team availability!",
    },
    {
      title: "Easy to use, anywhere",
      subtitle:
        "Scheduling is easy with an intuitive calendar design that’s built for simplicity. Accessible on multiple divides like desktop, tablet, and mobile, it lets you manage appointments from anywhere at any time. Customize your calendar views, adjust display settings, and set time zones to fit the way you work.",
    },
    {
      title: "Smarter scheduling",
      subtitle:
        "Keep your calendar running smoothly with smart scheduling tools. Optimize availability to minimize gaps, and use waitlists to fill last-minute slots, keeping your calendar fully booked. Filter appointments by team member, status, or service type for a clear and organized overview.",
    },
    {
      title: "Accurate availability",
      subtitle:
        "Stay in sync with availability based on your team’s working hours, break times, and time off. Assign rooms or equipment to specific appointments and use color-coded schedules for an easy view of your team’s availability.",
    },
    {
      title: "Synced to your schedule",
      subtitle:
        "The Fresha calendar is tailored for businesses in the beauty and wellness space, providing all the essential tools to easily manage bookings. Whether you’re scheduling individual, repeat, or group appointments, the calendar adapts to your business needs - you can also block time out for breaks or team availability!",
    },
    {
      title: "Built for beauty and wellness",
      subtitle:
        "Keep everything organized by syncing your Fresha calendar with Google, Outlook, or Apple calendars, so you never miss a booking.Start learning more about the Fresha calendar and take full control of your schedule!",
    },
  ];
  return (
    <div className="max-w-[938px] space-y-[46px]">
      {calenders?.map((calendar, key) => {
        return (
          <div key={key} className="">
            <h1 className="text-textSecondary font-outfit text-[24px] xl:text-[28px] font-semibold leading-[33.6px]">
              {calendar.title}
            </h1>
            <p className="text-[#2C2C2C] font-manrope text-[16px] xl:text-lg leading-[27px] mt-8">
              {calendar.subtitle}
            </p>
          </div>
        );
      })}

      {/*  */}
      <div>
        <h1 className="text-textSecondary font-outfit text-[24px] xl:text-[28px] font-semibold leading-[33.6px]">
          Was this guide helpful?
        </h1>
        <div className="flex gap-2 mt-8">
          <button className="border border-[#757575] py-2 px-3 rounded-[100px] flex items-center gap-2 text-[#2C2C2C] font-manrope font-medium">
            Yes, Thanks <ThumbsUpSvg />
          </button>
          <button className="border border-[#757575] py-2 px-3 rounded-[100px] flex items-center gap-2 text-[#2C2C2C] font-manrope font-medium">
            Not Really <DislikeSvg />
          </button>
        </div>
      </div>
    </div>
  );
};

export default SinglePageCard;
