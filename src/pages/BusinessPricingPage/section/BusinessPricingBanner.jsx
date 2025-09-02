import { JoinNowArrowSvg } from "@/components/svgContainer/SvgContainer";

const BusinessPricingBanner = ({ data }) => {
  return (
    <section className="container flex flex-col xl:flex-row gap-[20px] items-center mb-5 md:mb-8 lg:pb-12 xl:pb-[88px]">
      {/* This is the left div */}
      <div className="xl:w-1/2 xl:space-y-6">
        <h1 className="text-[#1E1E1E] mb-[20px] text-[26px] 2xl:text-4xl 3xl:text-5xl font-outfit font-semibold 3xl:leading-[57.6px] max-w-[538px]">
          {data?.title}
        </h1>
        <p className="text-[#545454] font-manrope text-[18px] 2xl:text-2xl xl:leading-9 xl:max-w-[538px] mb-[20px]">
          {data?.sub_title}
        </p>
        <button className="bg-primary-gradient flex py-[10px] px-6 text-lg font-medium items-center rounded-[10px] text-[#FFF] font-manrope gap-[10px]">
          {data?.button_text}
          <JoinNowArrowSvg />
        </button>
      </div>
      {/* This is the right div */}
      <div>
        <img
          className="xl:w-[762px] xl:h-[482px] object-cover"
          src={`${import.meta.env.VITE_SITE_URL}/${data?.image}`}
          alt="Not Found"
        />
      </div>
    </section>
  );
};

export default BusinessPricingBanner;
