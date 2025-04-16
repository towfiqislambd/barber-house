import { RemainderSvg } from "../svgContainer/SvgContainer";
import MarketingThreeDot from "../BusinessDashboard/BusinessDashboardMerketing/MarketingThreeDot";

const RemainderCard = ({ title, description, status }) => {
  return (
    <div className="border border-[#DFE1E6] xl:max-w-[258px] lg:w-[325px] w-full xl:p-6 p-4 rounded-2xl mt-[22px] hover:bg-[#E0E0E0] ease-out duration-300 cursor-pointer">
      <div className="flex justify-between">
        <RemainderSvg />
        <MarketingThreeDot />
      </div>

      <div className="mt-[21px]">
        <h1 className="text-[#000] font-manrope text-lg font-semibold leading-[27px]">
          {title}
        </h1>
        <p className="mt-[15px] text-[#000] font-manrope text-base font-normal leading-6">
          {description}
        </p>
      </div>

      <div className="flex justify-between items-center mt-[21px]">
        <p className="bg-[#DCFEE6] rounded-[100px] max-w-[85px] px-3 py-[6px]">
          {status}
        </p>
      </div>
    </div>
  );
};

export default RemainderCard;
