import { JoinNowArrowSvg } from "@/components/svgContainer/SvgContainer";
import bannerImg from "../../../assets/images/businessHomeBannerPic.png";

const BusinessHomeBanner = () => {
  return (
    <section className="container flex flex-col xl:flex-row gap-[20px] items-center sm:pt-12 pb-[88px]">
      {/* This is the left div */}
      <div className="xl:w-1/2 space-y-6">
        <h1 className="text-[#1E1E1E] text-[28px] xl:text-5xl font-outfit font-semibold  xl:leading-[57.6px] xl:max-w-[538px]">
          The #1 Software for Salons and Spas
        </h1>
        <p className="text-[#545454] font-manrope text-[18px] xl:text-2xl xl:leading-9 xl:max-w-[538px]">
          Simple, flexible and powerful booking software for your business
        </p>
        <button className="bg-primary-gradient flex py-[10px] px-6 text-lg font-medium items-center rounded-[10px] text-[#FFF] font-manrope gap-[10px]">
          Join Now
          <JoinNowArrowSvg />
        </button>
      </div>
      {/* This is the right div */}
      <div className="overflow-hidden">
        <img
          className="xl:w-[762px] rounded-[10px]  xl:h-[482px] object-cover"
          src={bannerImg}
          alt=""
        />
      </div>
    </section>
  );
};

export default BusinessHomeBanner;
