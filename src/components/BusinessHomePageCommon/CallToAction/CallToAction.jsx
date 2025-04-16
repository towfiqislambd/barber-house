import { GetStartSvg } from "@/components/svgContainer/SvgContainer";
import callToActionImage from "../../../assets/images/callToAction.png";

const CallToAction = ({ title, subtitle, btnText }) => {
  return (
    <section className="">
      <div
        className="lg:h-[440px] xl:h-[370px] py-[40px] xl:py-[130px] px-[15px]"
        style={{
          backgroundImage: ` url(${callToActionImage}) `,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
        }}
      >
        {/* This is the content section */}
        <div className="max-w-[1320px] mx-auto">
          <h1 className="text-[#FFF] font-outfit text-[32px] xl:text-5xl font-semibold leading-[57.6px]">
            {title}
          </h1>
          <p className="text-[#F4F5F7] font-manrope  text-[16px] xl:text-2xl xl:leading-9 mt-[6px]">
            {subtitle}
          </p>
          <button className="flex gap-[10px] items-center text-[#FFF] font-manrope text-lg font-medium leading-[27px] bg-primary py-3 px-6 mt-8 rounded-lg shadow-getStart_Shadow group">
            {btnText}
            <GetStartSvg />
          </button>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
