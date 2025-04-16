import { Link } from "react-router-dom";
import {
  ActionDeleteSvg,
  DropdownSvg,
  EditLocationDetailsSvg,
  LeftSideArrowSvg,
} from "../svgContainer/SvgContainer";
import BreadCrumb from "../BusinessHelpCenter/BreadCrumb/BreadCrumb";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import LocationSetUpPageCard from "./LocationSetUpPageCard";
import TextDefaultsCard from "./TextDefaultsCard";
import ReceiptSequencingCard from "./ReceiptSequencingCard";
import TippingCard from "./TippingCard";

const LocationSetUpPage = () => {
  const contactData = [
    {
      title: "Contact details",
      href: "/businessDashboard/contactdetailspage",
      location: "location email address",
      email: "shawalrahman050@gmail.com",
      contact: "Location contact number",
      phone: "+880 1312-226171",
    },
    {
      title: "Business types",
      href: "/businessDashboard/businesstype",
      location: "Main",
      email: "Hair Salon",
      contact: "Additional",
      phone: "Nail Salon, Beauty Salon, Eyebrows & Lashes, Aesthetics",
    },
  ];

  const billingData = [
    {
      title: "Tax defaults",
      subTitle: "Location tax settings for services and products.",
      href: "/businessDashboard/edittaxdetails",
    },
  ];
  const ReceiptSequencingData = [
    {
      title: "Receipt sequencing",
      href: "/businessDashboard/editreceiptsequencing",
    },
  ];
  const tippingData = [
    {
      title: "Tipping",
      href: "/businessDashboard/edittipping",
    },
  ];
  return (
    <section className="4xl:px-[347px] 3xl:px-[90px] px-6 py-5 3xl:py-10 4xl:py-0">
      {/* This is the Back and Breadcrumb section */}
      <div className="flex gap-4 items-center">
        <Link
          to={"/businessDashboard/businessetup"}
          className="flex items-center gap-[6px] border border-[#757575] px-3 py-2 rounded-[100px] text-[#2C2C2C] font-manrope text-base font-medium leading-6"
        >
          <LeftSideArrowSvg />
          Back
        </Link>
        <BreadCrumb
          items={[
            { label: "Workspace settings", href: "/" },
            { label: "Location", href: "/docs/components" },
            { label: "SR", href: "/docs/components" },
          ]}
        />
      </div>
      {/*  */}
      <div className="mt-[45px] flex justify-between">
        <div>
          <p className="text-textSecondary font-outfit text-[28px] font-semibold leading-[33.6p]">
            SR
          </p>
          <p className="text-textSecondary font-manrope text-base leading-6">
            No reviews yet
          </p>
        </div>
        <div>
          <Popover>
            <PopoverTrigger>
              <button className="px-4 py-[10px] flex gap-2 items-center outline-none border border-[#DFE1E6] rounded-[100px]">
                <p className="text-textColor font-manrope text-base font-bold leading-6">
                  Option
                </p>
                <DropdownSvg />
              </button>
            </PopoverTrigger>
            <PopoverContent className="w-[220px] p-4">
              <div className="space-y-4">
                <button className="flex gap-2 items-center">
                  <EditLocationDetailsSvg />
                  <p className="text-textColor text-base font-manrope font-medium leading-6">
                    Edit location details
                  </p>
                </button>
                <button className="flex gap-2 items-center">
                  <ActionDeleteSvg />
                  <p className="text-[#D21837] text-base font-manrope font-medium leading-6">
                    Delete Location
                  </p>
                </button>
              </div>
            </PopoverContent>
          </Popover>
        </div>
      </div>
      {/* This is the card section */}
      <div className="2xl:mt-[45px] mt-5 grid grid-cols-1 lg:grid-cols-2 gap-4">
        {contactData.map((contact, index) => (
          <LocationSetUpPageCard
            key={index}
            title={contact.title}
            email={contact.email}
            phone={contact.phone}
            location={contact.location}
            href={contact.href}
            contact={contact.contact}
          />
        ))}
      </div>
      {/* This is the location section */}
      <div className="mt-4 ">
        <div className="border border-[#DFE1E6] rounded-2xl 2xl:py-12 py-6 2xl:px-10 px-5">
          <div className="flex justify-between">
            <p className="text-[#000] font-outfit text-2xl font-medium leading-[28.8px]">
              Location
            </p>
            <Link
              to={"/businessDashboard/editbusinesslocation"}
              className="text-[#5E22DD]"
            >
              Edit
            </Link>
          </div>
          {/*  */}
          <div className="mt-[23px]">
            <p className="text-textColor font-manrope text-lg font-semibold leading-[27px]">
              Business address
            </p>
            <p className="text-textLight font-manrope text-base font-medium leading-6">
              Bus Stand, Dhaka (Mirpur), 1216, Dhaka Division
            </p>
          </div>
          {/*  */}
          <div className="xl:h-[260px] h-[200px] w-full mt-3">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14600.205770815965!2d90.35716816220642!3d23.816769688474754!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3755c12f3c6b8c9b%3A0x6a69c4c5e229a516!2sMirpur%2011%2C%20Dhaka%201216!5e0!3m2!1sen!2sbd!4v1742547244288!5m2!1sen!2sbd"
              width="100%"
              height="100%"
              style={{ border: "0" }}
              allowFullScreen
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
        {/* Opening hours */}
        <div className="mt-4">
          <div className="border border-[#DFE1E6] rounded-2xl 2xl:py-12 py-6 2xl:px-10 px-5 bg-[#FFF]">
            <div className="flex justify-between">
              <div>
                <p className="text-[#000] font-outfit text-2xl font-medium leading-[28.8px]">
                  {"Opening hours"}
                </p>
                <p className="max-w-[650px] mt-2 text-textLight font-manrope font-medium sm:text-base text-sm">
                  Opening hours for these locations are default working hours
                  for your team and will be visible to your clients. You can
                  amend business closed periods for events like Bank Holidays in
                  <span className="text-[#5E22DD] font-medium underline">
                    {" "}
                    Settings.
                  </span>
                </p>
              </div>
              <Link
                to={"/businessDashboard/editopeninghours"}
                className="text-[#5E22DD]"
              >
                Edit
              </Link>
            </div>
            <div className="flex md:flex-row flex-col gap-3">
              {/*  */}
              <div className="bg-[#F4F5F7] border md:w-[180px] w-full h-[140px] text-center mt-6 rounded-bl-md rounded-br-md">
                <div className="bg-[#E7E8FF] h-[44px] py-[10px]">
                  <p className="text-[#6950F3] font-manrope text-base font-bold">
                    Monday
                  </p>
                </div>
                <div className="py-4">
                  <p className="text-[#000] font-manrope text-base font-medium leading-6">
                    10:00
                  </p>
                  <p className="text-[#000] font-manrope text-base font-medium leading-6">
                    -
                  </p>
                  <p className="text-[#000] font-manrope text-base font-medium leading-6">
                    19:00
                  </p>
                </div>
              </div>
              {/*  */}
              <div className="bg-[#F4F5F7] border md:w-[180px] w-full h-[140px] text-center mt-6 rounded-bl-md rounded-br-md">
                <div className="bg-[#E7E8FF] h-[44px] py-[10px]">
                  <p className="text-[#6950F3] font-manrope text-base font-bold">
                    Monday
                  </p>
                </div>
                <div className="py-4">
                  <p className="text-[#000] font-manrope text-base font-medium leading-6">
                    10:00
                  </p>
                  <p className="text-[#000] font-manrope text-base font-medium leading-6">
                    -
                  </p>
                  <p className="text-[#000] font-manrope text-base font-medium leading-6">
                    19:00
                  </p>
                </div>
              </div>
              {/*  */}
              <div className="bg-[#F4F5F7] border md:w-[180px] w-full h-[140px] text-center mt-6 rounded-bl-md rounded-br-md">
                <div className="bg-[#E7E8FF] h-[44px] py-[10px]">
                  <p className="text-[#6950F3] font-manrope text-base font-bold">
                    Monday
                  </p>
                </div>
                <div className="py-4">
                  <p className="text-[#000] font-manrope text-base font-medium leading-6">
                    10:00
                  </p>
                  <p className="text-[#000] font-manrope text-base font-medium leading-6">
                    -
                  </p>
                  <p className="text-[#000] font-manrope text-base font-medium leading-6">
                    19:00
                  </p>
                </div>
              </div>
              {/*  */}
              <div className="bg-[#F4F5F7] border md:w-[180px] w-full h-[140px] text-center mt-6 rounded-bl-md rounded-br-md">
                <div className="bg-[#E7E8FF] h-[44px] py-[10px]">
                  <p className="text-[#6950F3] font-manrope text-base font-bold">
                    Monday
                  </p>
                </div>
                <div className="py-4">
                  <p className="text-[#000] font-manrope text-base font-medium leading-6">
                    10:00
                  </p>
                  <p className="text-[#000] font-manrope text-base font-medium leading-6">
                    -
                  </p>
                  <p className="text-[#000] font-manrope text-base font-medium leading-6">
                    19:00
                  </p>
                </div>
              </div>
              {/*  */}
              <div className="bg-[#F4F5F7] border md:w-[180px] w-full h-[140px] text-center mt-6 rounded-bl-md rounded-br-md">
                <div className="bg-[#E7E8FF] h-[44px] py-[10px]">
                  <p className="text-[#6950F3] font-manrope text-base font-bold">
                    Monday
                  </p>
                </div>
                <div className="py-4">
                  <p className="text-[#000] font-manrope text-base font-medium leading-6">
                    10:00
                  </p>
                  <p className="text-[#000] font-manrope text-base font-medium leading-6">
                    -
                  </p>
                  <p className="text-[#000] font-manrope text-base font-medium leading-6">
                    19:00
                  </p>
                </div>
              </div>
              {/*  */}
              <div className="bg-[#F4F5F7] border md:w-[180px] w-full h-[140px] text-center mt-6 rounded-bl-md rounded-br-md">
                <div className="bg-[#E7E8FF] h-[44px] py-[10px]">
                  <p className="text-[#6950F3] font-manrope text-base font-bold">
                    Monday
                  </p>
                </div>
                <div className="py-4">
                  <p className="text-[#000] font-manrope text-base font-medium leading-6">
                    10:00
                  </p>
                  <p className="text-[#000] font-manrope text-base font-medium leading-6">
                    -
                  </p>
                  <p className="text-[#000] font-manrope text-base font-medium leading-6">
                    19:00
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/*  */}
        <div className="mt-4 grid grid-cols-1 lg:grid-cols-2 gap-4">
          {ReceiptSequencingData.map((contact, index) => (
            <ReceiptSequencingCard
              key={index}
              title={contact.title}
              subTitle={contact.subTitle}
              href={contact.href}
            />
          ))}
          {tippingData.map((contact, index) => (
            <TippingCard
              key={index}
              title={contact.title}
              href={contact.href}
            />
          ))}
          {billingData.map((contact, index) => (
            <TextDefaultsCard
              key={index}
              title={contact.title}
              subTitle={contact.subTitle}
              href={contact.href}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default LocationSetUpPage;
