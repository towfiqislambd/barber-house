import { ArrowSignSvg } from "@/components/svgContainer/SvgContainer";
import parse from "html-react-parser";

const StayConnectedCard = ({
  image,
  title,
  subTitle,
  reverse,
  description,
}) => {
  return (
    <div
      className={`flex gap-10 justify-center ${
        reverse ? "xl:flex-row-reverse flex-col " : "xl:flex-row flex-col"
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
            {typeof description === "string" ? parse(description) : description}
          </p>
        </div>
      </div>
      {/* This is right side */}
      <div>
        <img
          className="w-full xl:w-[428px] xl:h-[465px] object-cover"
          src={`${import.meta.env.VITE_SITE_URL}/${image}`}
          alt=""
        />
      </div>
    </div>
  );
};

export default StayConnectedCard;
