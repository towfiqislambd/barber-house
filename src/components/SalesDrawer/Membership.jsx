const Membership = () => {
  return (
    <div className="flex flex-col md:w-[468px]">
      <div className="flex flex-row gap-x-4 p-3 border-[1px] border-solid rounded-[8px] w-full h-auto border-[#DFE1E6] items-center  ">
        <div className="flex flex-col gap-y-[6px] ">
          <h4 className="text-[#1E1E1E] font-manrope text-xl font-semibold leading-[150%]">
            Ghalib’s Barber Salon
          </h4>
          <span className="text-[#757575] font-manrope text-base font-semibold leading-[150%]">
            5 sessions | 2 services | SAR 150.00
          </span>
        </div>
      </div>
    </div>
  );
};

export default Membership;
