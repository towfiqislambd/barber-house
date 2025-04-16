import { JoinNowArrowSvg } from "@/components/svgContainer/SvgContainer";
import pricingPageBannerImage from "../../../assets/images/pricingPageBanner.png";

const BusinessPricingBanner = () => {
  return (
    <section className="container flex flex-col xl:flex-row gap-[20px] items-center xl:pt-12  xl:pb-[88px]">
      {/* This is the left div */}
      <div className="xl:w-1/2 xl:space-y-6">
        <h1 className="text-[#1E1E1E] mb-[20px] text-[26px] xl:text-5xl font-outfit font-semibold xl:leading-[57.6px] max-w-[538px]">
          The only free software for beauty and wellness professionals
        </h1>
        <p className="text-[#545454] font-manrope text-[18px] xl:text-2xl xl:leading-9 xl:max-w-[538px] mb-[20px]">
          Focus on what you do best. With Fresha's Professional app you can
          effortlessly manage your schedule and client communication from
          anywhere, at any time, right from your phone.
        </p>
        <button className="bg-primary-gradient flex py-[10px] px-6 text-lg font-medium items-center rounded-[10px] text-[#FFF] font-manrope gap-[10px]">
          Sign up for free
          <JoinNowArrowSvg />
        </button>
      </div>
      {/* This is the right div */}
      <div>
        <img
          className="xl:w-[762px] xl:h-[482px] object-cover"
          src={pricingPageBannerImage}
          alt="Not Found"
        />
      </div>
    </section>
  );
};

export default BusinessPricingBanner;
