import { MarkedCalender } from "../svgContainer/SvgContainer";

const Appoinment = () => {
  return (
    <div className="flex flex-col gap-y-5  ">
      <div className="flex flex-row w-full justify-between sm:items-end items-center">
        <span className="text-[#757575] font-manrope text-lg font-medium leading-[150%]">
          {" "}
          Current
        </span>
        <div className="flex flex-row gap-x-2 px-5 sm:py-4 py-2 items-center bg-white rounded-[40px] shadow-inputShadow">
          <MarkedCalender />
          <span className="text-[#757575] font-manrope text-lg font-medium leading-[150%]  ">
            Today
          </span>
        </div>
      </div>
      <div className="flex flex-col gap-y-5 ">
        <div className=" w-full h-auto sm:p-6 p-3 rounded-[8px] border-[1px] border-solid border-[#A5ADBA] flex flex-row items-start justify-between">
          <div className="flex flex-col gap-y-5 ">
            <div className="flex flex-col gap-y-1 ">
              <h4 className="text-[#1E1E1E] font-manrope text-base sm:text-xl font-semibold leading-[150%]  ">
                Tariqul Fahim
              </h4>
              <span className="text-[#757575] font-manrope text-sm sm:text-base font-medium leading-[150%]  ">
                10:00 - 13:00
              </span>
            </div>
            <div className="flex flex-col gap-y-2 ">
              <span className="text-[#757575] font-manrope text-sm sm:text-base font-medium leading-[150%]  ">
                45min | M. R. Shihab | Haircut
              </span>
              <span className="text-[#757575] font-manrope text-sm sm:text-base font-medium leading-[150%]  ">
                1h 15min | M. Hossain | Hair color
              </span>
              <span className="text-[#757575] font-manrope text-sm sm:text-base font-medium leading-[150%]  ">
                1h | Wendy Smith | Manicure
              </span>
            </div>
          </div>
          <span className="text-[#1E1E1E] font-manrope text-base sm:text-lg font-semibold leading-[150%]  ">
            SAR 90.00
          </span>
        </div>
        <div className=" w-full h-auto sm:p-6 p-3 rounded-[8px] border-[1px] border-solid border-[#A5ADBA] flex flex-row items-start justify-between">
          <div className="flex flex-col gap-y-5 ">
            <div className="flex flex-col gap-y-1 ">
              <h4 className="text-[#1E1E1E] font-manrope text-base sm:text-xl font-semibold leading-[150%]  ">
                Guest of Tariqul Fahim
              </h4>
              <span className="text-[#757575] font-manrope text-sm sm:text-base font-medium leading-[150%]  ">
                10:00 - 10:45
              </span>
            </div>
            <div className="flex flex-col gap-y-2 ">
              <span className="text-[#757575] font-manrope text-sm sm:text-base font-medium leading-[150%]  ">
                45min | M. R. Shihab | Haircut
              </span>
            </div>
          </div>
          <span className="text-[#1E1E1E] font-manrope text-base sm:text-lg font-semibold leading-[150%]  ">
            SAR 30.00
          </span>
        </div>
      </div>
    </div>
  );
};

export default Appoinment;
