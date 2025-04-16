const GiftCard = () => {
  return (
    <div className="flex flex-row gap-x-[26px] gap-y-[16px] flex-wrap ">
      {[1, 2, 3, 4, 5, 6].map((item, index) => {
        return (
          <div
            key={index}
            className="flex flex-row gap-x-4 p-3 border-[1px] border-solid rounded-[8px] lg:w-[263px] w-full h-auto border-[#DFE1E6] items-center"
          >
            <div className="flex flex-col gap-y-[6px]">
              <h4 className="text-[#1E1E1E] font-manrope text-lg font-semibold leading-[150%]">
                SAR 120.00
              </h4>
              <span className="text-[#757575] font-manrope text-[14px] font-semibold leading-[150%]">
                Gift card
              </span>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default GiftCard;
