import { SentSvg } from "../svgContainer/SvgContainer";

const PerformanceCard = ({
  title = "Sent",
  total = 0,
  emailCount = 0,
  textCount = 0,
}) => {
  return (
    <div className="md:max-w-[256px] border border-[#DFE1E6] rounded-2xl p-6 bg-[#FFF]">
      <div className="flex items-center gap-[10px]">
        <p className="text-textColor font-manrope text-lg font-semibold leading-[27px]">
          {title}
        </p>
        {/* Tooltip */}
        <div className="relative group cursor-pointer">
          <SentSvg />
          <span className="absolute bottom-full left-1/2 transform -translate-x-1/2 mb-2 w-[200px] px-3 py-1 text-xs text-white bg-gray-800 rounded opacity-0 group-hover:opacity-100 transition-opacity">
            Total Message sent across all channels for the selected period
          </span>
        </div>
      </div>
      {/* Total Messages */}
      <p className="text-textColor font-manrope text-2xl font-normal leading-[36px] mt-[17px]">
        {total}
      </p>
      {/* Email Count */}
      <div className="flex gap-2 mt-6">
        <p className="text-textLight font-manrope text-base font-normal leading-6">
          Email:
        </p>
        <p className="text-textLight font-manrope text-base leading-6">
          {emailCount}
        </p>
      </div>
      {/* Text Count */}
      <div className="flex gap-2 mt-1">
        <p className="text-textLight font-manrope text-base font-normal leading-6">
          Text:
        </p>
        <p className="text-textLight font-manrope text-base leading-6">
          {textCount}
        </p>
      </div>
    </div>
  );
};

export default PerformanceCard;
