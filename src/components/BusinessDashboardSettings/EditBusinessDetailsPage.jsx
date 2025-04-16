import { Link } from "react-router-dom";
import {
  FacebookInputSvg,
  InstagramInputSvg,
  LeftSideArrowSvg,
  TwitterInputSvg,
  WebsiteInputSvg,
} from "../svgContainer/SvgContainer";
import BreadCrumb from "../BusinessHelpCenter/BreadCrumb/BreadCrumb";
import { Input } from "@/components/ui/input";
import TextCalculation from "../TextCalculation/TextCalculation";

const EditBusinessDetailsPage = () => {
  return (
    <section className="md:px-5 px-6 xl:px-12 2xl:px-[100px] 4xl:px-[364px] 4xl:py-[64px] py-5">
      {/* This is the button section */}
      <div className="flex justify-end gap-2">
        <button className="border border-[#0D1619] py-[10px] px-[18px] rounded-[10px] text-[#0D1619] font-manrope text-base font-bold leading-6">
          Close
        </button>
        <button className="border border-[#0D1619] py-[10px] px-[18px] rounded-[10px] font-manrope text-base font-bold leading-6 bg-[#0D1619] text-white">
          Save
        </button>
      </div>
      {/* This is the Back and Breadcrumb section */}
      <div className="flex gap-4 items-center mt-[27px]">
        <Link
          to={"/businessDashboard/businessetup"}
          className="flex items-center gap-[6px] border border-[#757575] md:px-3 px-2 md:py-2 py-1 rounded-[100px] text-[#2C2C2C] font-manrope text-base font-medium leading-6"
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
      {/*  */}
      <div className="xl:mt-[45px] mt-5">
        <p className="text-[#000] font-outfit text-[30px] lg:text-[36px] font-semibold leading-[43.2px]">
          Edit business details
        </p>
        {/*  */}
        <div className="xl:mt-[45px] mt-5">
          <p className="text-textSecondary font-outfit text-xl lg:text-2xl font-medium leading-[28.8px]">
            Business info
          </p>
          <p className="mt-[9px] text-textColor font-manrope text-sm lg:text-base font-normal leading-6">
            Choose the name displayed on your online booking profile, sales
            receipts and messages to clients.
          </p>
        </div>
        <div className="max-w-[755px]">
          {/* Business Name */}
          <div className="mt-6">
            <label className="text-[#000] font-manrope text-base font-semibold leading-6">
              Business name
            </label>
            <Input
              className="h-[55px] mt-2 border border-[#DFE1E6] rounded-lg"
              type="text"
              placeholder="Enter your name"
            />
          </div>
          {/*  */}
          <div className="bg-[#EBECF0] mt-4 p-4 rounded-lg">
            <p className="text-[#000] font-manrope text-sm font-semibold">
              Your country is set to{" "}
              <span className="text-base font-bold">Bangladesh</span> with{" "}
              <span>BDT</span> currency.
            </p>
          </div>
          {/* Border Section */}
          <div className="border border-[#DFE1E6] my-8"></div>
          {/*  */}
          <div>
            {/*  */}
            <div>
              <p className="text-textSecondary font-outfit text-xl lg:text-2xl font-medium leading-[28.8px]">
                Tax calculation
              </p>
              <p className="text-textColor font-manrope text-sm lg:text-base font-normal leading-6">
                Choose how to apply taxes to prices in sales and reporting
                calculation.{" "}
                <Link
                  to={"/"}
                  className="text-textColor font-manrope text-base font-normal leading-6 underline cursor-pointer"
                >
                  Learn more.
                </Link>
              </p>
            </div>
            {/*  */}
            <div className="mt-6">
              <TextCalculation />
            </div>
            {/* Border Section */}
            <div className="border border-[#DFE1E6] my-8"></div>
            {/*  */}
            <div>
              <p className="text-textSecondary font-outfit text-xl lg:text-2xl font-medium leading-[28.8px]">
                External links
              </p>
              <p className="text-textColor font-manrope text-sm lg:text-base font-normal leading-6 mt-[9px]">
                Add your company website and social media links for sharing with
                clients.
              </p>
            </div>
            {/* Facebook */}
            <div className="mt-6 relative">
              <label className="text-[#000] font-manrope text-base font-semibold leading-6">
                Facebook
              </label>
              <Input
                className="h-12 xl:h-[60px] mt-2 border border-[#DFE1E6] rounded-lg"
                type="text"
                placeholder="facebook.com/yoursite"
              />
              <button className="absolute top-[49px] left-2">
                <FacebookInputSvg />
              </button>
            </div>
            {/* Instagram */}
            <div className="mt-6 relative">
              <label className="text-[#000] font-manrope text-base font-semibold leading-6">
                Instagram
              </label>
              <Input
                className="h-12 xl:h-[60px] mt-2 border border-[#DFE1E6] rounded-lg"
                type="text"
                placeholder="instagram.com/yoursite"
              />
              <button className="absolute top-[49px] left-2">
                <InstagramInputSvg />
              </button>
            </div>
            {/* X (Twitter) */}
            <div className="mt-6 relative">
              <label className="text-[#000] font-manrope text-base font-semibold leading-6">
                X (Twitter)
              </label>
              <Input
                className="h-12 xl:h-[60px] mt-2 border border-[#DFE1E6] rounded-lg"
                type="text"
                placeholder="x.com/yoursite"
              />
              <button className="absolute top-[49px] left-2">
                <TwitterInputSvg />
              </button>
            </div>
            {/* Website */}
            <div className="mt-6 relative">
              <label className="text-[#000] font-manrope text-base font-semibold leading-6">
                Website
              </label>
              <Input
                className="h-12 xl:h-[60px] mt-2 border border-[#DFE1E6] rounded-lg"
                type="text"
                placeholder="www.sr.com"
              />
              <button className="absolute top-[49px] left-2">
                <WebsiteInputSvg />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default EditBusinessDetailsPage;
