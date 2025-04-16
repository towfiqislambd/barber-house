import { SanitizerSvg } from "../svgContainer/SvgContainer";

const Product = () => {
  return (
    <div className="flex flex-row gap-x-[26px] gap-y-[16px] flex-wrap">
      {[1, 2, 3, 4, 5, 6].map((item, index) => {
        return (
          <div
            key={index}
            className="flex flex-row gap-x-4 p-3 border-[1px] border-solid rounded-[8px] 2xl:w-[263px] w-full h-auto border-[#DFE1E6] items-center"
          >
            <div className="p-4 h-20 w-20 rounded-[8px] border-[1px] border-solid border-[#DFE1E6] flex items-center justify-center">
              <SanitizerSvg />
            </div>
            <div className="flex flex-col gap-y-[6px] ">
              <h4 className="text-[#1E1E1E] font-manrope text-lg font-semibold  leading-[150%]  ">
                Hair gel
              </h4>
              <span className="text-[#757575] font-manrope text-[14px] font-semibold  leading-[150%]  ">
                SAR 55.00 | No stock
              </span>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Product;
