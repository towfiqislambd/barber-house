import { Link } from "react-router-dom";
import BusinessDetailsCardSection from "./BusinessDetailsCardSection";
import ExternalLinkCard from "./ExternalLinkCard";

const BusinessDetails = () => {
  const details = [
    { label: "Business Name", value: "SR" },
    { label: "Country", value: "Bangladesh" },
    { label: "Industry", value: "Technology" },
    { label: "Founded", value: "2022" },
    { label: "Founded", value: "2022" },
    { label: "Founded", value: "2022" },
  ];
  const externalDetailsData = [
    { label: "Facebook", value: "Add", href: "/" },
    { label: "X (Twitter)", value: "Add", href: "/" },
    { label: "Instagram", value: "Add", href: "/" },
    { label: "Website", value: "www.sr.com", href: "/" },
  ];
  return (
    <section>
      <div>
        <p className="text-textSecondary font-outfit text-[28px] font-semibold leading-[33.6px]">
          Business details
        </p>
        <p className="text-textColor font-manrope text-base font-normal leading-6 mt-[9px]">
          Set your business name, tax and language preferences, and manage
          external links.
        </p>
        {/*  */}
        <div className="border border-[#DFE1E6] rounded-2xl xl:p-8 p-4 mt-4">
          {/* Business Info */}
          <div className="flex justify-between items-center">
            <p className="text-[#000] font-outfit text-2xl font-medium leading-[28.8px]">
              Business Info
            </p>
            <Link
              to={"/businessDashboard/editbusinessdetailspage"}
              className="text-textColor rounded-lg border border-[#757575] px-3 py-2 text-base font-manrope leading-6"
            >
              Edit
            </Link>
          </div>
          {/* Business Name */}
          <div className="flex mt-[31px] flex-wrap">
            {details.map((detail, index) => (
              <BusinessDetailsCardSection key={index} {...detail} />
            ))}
          </div>
          {/*  */}
          <div className="border border-[#DFE1E6] my-8 h-[2px]"></div>
          {/*  */}
          <div>
            <h1 className="text-[#000] font-outfit text-2xl font-medium leading-[28.8px]">
              External links
            </h1>
            <div className="flex mt-[31px] flex-wrap">
              {externalDetailsData?.map((detail, index) => (
                <ExternalLinkCard key={index} {...detail} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BusinessDetails;
