import BreadCrumb from "@/components/BusinessHelpCenter/BreadCrumb/BreadCrumb";
import { Input } from "@/components/ui/input";
import {
  SearchSvg,
  UpNextArrowSign,
} from "@/components/svgContainer/SvgContainer";
export default function ContactUs() {
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
    {
      title: "Upcoming appointments",
      description:
        "Stay on top of your appointments and prepare in advance for each session.",
    },
  ];
  return (
    <section className="">
      <div className="container sm:pt-[72px] space-y-6">
        <BreadCrumb
          items={[
            { label: "Help center", href: "/" },
            { label: "Contact us", href: "/docs/components" },
            { label: "What can we help you with" },
          ]}
        />
        <div>
          <h1 className="text-textSecondary font-outfit text-[26px] mb-[20px] leading-[28px] xl:text-5xl font-semibold xl:leading-[57.6px]">
            What can we help you with
          </h1>
          <p className="text-textLight font-manrope text-[16px] lg:text-lg leading-[27px] mt-2">
            Tell us a little more about you and what you need help with
          </p>
        </div>
        <div className="relative">
          <Input
            className="w-full xl:max-w-[1500px] pr-4 pl-10 h-[67px]"
            type="email"
            placeholder="search"
          />
          <button className="absolute left-[13px] top-[53%] translate-y-[-50%]">
            <SearchSvg />
          </button>
          <button className="absolute right-1 xl:right-[50px] top-1/2 transform -translate-y-1/2 px-4 py-2 bg-textSecondary text-white rounded-lg">
            Search
          </button>
        </div>
      </div>
      {/*  */}
      <div className="mx-[15px] max-w-[1099px] lg:mx-auto bg-[#F6F7F9] mt-[10px] mb-[52px] border border-[#DFE1E6] rounded-2xl shadow-topArticles_Shadow p-6">
        <h1 className="text-textSecondary text-lg font-medium">Top articles</h1>
        <div className="">
          {appointments.map((appointment, index) => (
            <div
              key={index}
              className={`flex gap-2 pb-4 mt-[34px] ${
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
