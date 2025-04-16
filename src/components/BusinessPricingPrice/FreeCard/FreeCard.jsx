import { FromStartUpSvg } from "@/components/svgContainer/SvgContainer";

const FreeCard = ({ title, price, bgColor, textColor, btnBg }) => {
  return (
    <div
      className={`border border-[#DFE1E6] rounded-2xl p-6 w-full lg:w-[266px] ${bgColor ? "bg-black" : "bg-white"
        }`}
    >
      <div className="space-y-1">
        <h1
          className={` ${textColor ? textColor : "text-[#2C2C2C]"
            } font-outfit text-2xl font-semibold leading-[28.8px]`}
        >
          {title}
        </h1>
        <h1
          className={`${textColor ? textColor : "text-[#2C2C2C]"
            } font-outfit text-[32px] font-semibold leading-[38.4px]`}
        >
          {price}
          {/* $0 */}
        </h1>
        <p
          className={` ${textColor ? textColor : "text-textLight"
            } font-manrope text-xs leading-[16.8px]`}
        >
          per user/month, billed annually
        </p>
      </div>
      {/*  */}
      <div className="mt-6">
        <h1
          className={`${textColor ? textColor : "text-textSecondary"
            } font-outfit font-medium leading-[21px]`}
        >
          For Small Teams
        </h1>
        <div className="space-y-3 mt-3">
          {/* First */}
          <div className="flex gap-3">
            <div className="bg-[#DFE1E6] w-5 h-5 rounded-[3.2px] flex items-center">
              <FromStartUpSvg />
            </div>
            <h1
              className={` ${textColor ? textColor : "text-textLight"
                } font-manrope leading-[21px] text-sm`}
            >
              Real-time contact syncing
            </h1>
          </div>
          {/* Second */}
          <div className="flex gap-3">
            <div className="bg-[#DFE1E6] w-5 h-5 rounded-[3.2px] flex items-center">
              <FromStartUpSvg />
            </div>
            <h1
              className={` ${textColor ? textColor : "text-textLight"
                } font-manrope leading-[21px] text-sm`}
            >
              Real-time contact syncing
            </h1>
          </div>
          {/* Third */}
          <div className="flex gap-3">
            <div className="bg-[#DFE1E6] w-5 h-5 rounded-[3.2px] flex items-center">
              <FromStartUpSvg />
            </div>
            <h1
              className={` ${textColor ? textColor : "text-textLight"
                } font-manrope leading-[21px] text-sm`}
            >
              Real-time contact syncing
            </h1>
          </div>
          {/* Fourth */}
          <div className="flex gap-3">
            <div className="bg-[#DFE1E6] w-5 h-5 rounded-[3.2px] flex items-center">
              <FromStartUpSvg />
            </div>
            <h1
              className={` ${textColor ? textColor : "text-textLight"
                } font-manrope leading-[21px] text-sm`}
            >
              Real-time contact syncing
            </h1>
          </div>
        </div>
        {/*  */}
        <div
          className={`mt-6 border ${btnBg ? btnBg : "bg-white"
            } border-[#050505] rounded py-2 px-[18px] flex justify-center`}
        >
          <button
            className={`text-[#2C2C2C] font-manrope text-base font-medium leading-6 `}
          >
            Get Started
          </button>
        </div>
      </div>
    </div>
  );
};

export default FreeCard;
