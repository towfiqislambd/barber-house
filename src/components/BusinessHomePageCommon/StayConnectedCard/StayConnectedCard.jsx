import { ArrowSignSvg } from "@/components/svgContainer/SvgContainer";

const StayConnectedCard = ({ image, title, subTitle, reverse }) => {
  return (
    <div
      className={`flex gap-10 justify-center ${reverse ? "xl:flex-row-reverse flex-col " : "xl:flex-row flex-col"
        }`}
    >
      {/* This is left side */}
      <div>
        <h1 className="text-primary font-manrope text-xl font-medium leading-[30px]">
          {title}
        </h1>
        <h2 className="text-[#1E1E1E] font-outfit text-[28px] xl:text-[40px] font-semibold mt-3">
          {subTitle}
        </h2>
        {/*  */}
        <div className="mt-8">
          <p className="text-[#545454] font-manrope text-base leading-6 max-w-[852px]">
            Be seen, be available, build your brand online. Create an online
            profile on our marketplace to get noticed by thousands of potential
            clients in your area.
          </p>
          <br />
          <p className="text-[#545454] font-manrope text-base leading-6 max-w-[852px]">
            From your social feed to your door - add unlimited Book now buttons
            to your Instagram and Facebook pages so new or existing clients can
            book instantly online.
          </p>
        </div>
        {/* Attract and retain clients */}
        <div className="flex gap-1 items-center mt-5">
          <ArrowSignSvg />
          <p className="text-[#545454] font-manrope text-base leading-6">
            Attract and retain clients
          </p>
        </div>
        {/* Online self-booking */}
        <div className="flex gap-1 items-center mt-5">
          <ArrowSignSvg />
          <p className="text-[#545454] font-manrope text-base leading-6">
            Online self-booking
          </p>
        </div>
        {/* Get trusted ratings and reviews */}
        <div className="flex gap-1 items-center mt-5">
          <ArrowSignSvg />
          <p className="text-[#545454] font-manrope text-base leading-6">
            Get trusted ratings and reviews
          </p>
        </div>
      </div>
      {/* This is right side */}
      <div className="">
        <img className="w-full xl:w-[428px] xl:h-[465px] object-cover" src={image} alt="" />
      </div>
    </div>
  );
};

export default StayConnectedCard;
