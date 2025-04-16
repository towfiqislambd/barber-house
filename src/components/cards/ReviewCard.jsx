import { QuotationSvg, StarSvg } from "../svgContainer/SvgContainer";
import profile from "../../assets/images/review/profile-1.jpg";

const ReviewCard = () => {
  return (
    <div className="bg-[#F6F6F6] 4xl:h-[300px] 4xl:px-6 px-3 4xl:py-8 py-4 rounded-lg transition-all w-full hover:bg-[#E0E0E0] ease-out duration-300 cursor-pointer">
      {/* description */}
      <div>
        <p className="text-textColor 4xl:text-xl">
          Absolute top-tier service! The attention to detail and precision in my
          haircut was next level...
        </p>
      </div>
      {/* review */}
      <div className="mt-2">
        <p className="flex items-center gap-2 text-xl font-medium">
          4.8
          <span>
            <StarSvg />
          </span>
        </p>
      </div>
      {/* quotation */}
      <div className="w-full flex justify-end">
        <QuotationSvg />
      </div>
      {/* user info */}
      <div className="3xl:mt-5 mt-3 flex items-center gap-3">
        {/* image */}
        <div className="size-[60px]">
          <img
            className="h-full w-full object-cover rounded-full"
            src={profile}
            alt=""
          />
        </div>
        {/* info */}
        <div>
          <h4 className="text-lg font-medium">John Doe</h4>
          <p className="text-sm font-medium text-textLight">AI Engineer</p>
        </div>
      </div>
    </div>
  );
};

export default ReviewCard;
