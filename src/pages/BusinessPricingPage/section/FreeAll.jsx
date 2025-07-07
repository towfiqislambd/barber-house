import { FreeToAllSvg } from "@/components/svgContainer/SvgContainer";

const FreeAll = ({ data, data2 }) => {
  return (
    <section className="bg-[#F4F5F7] px-[15px]">
      <div className="max-w-[1320px] mx-auto">
        <div className="text-center py-[68px]">
          <h1 className="text-textSecondary font-outfit text-[26px] xl:text-[40px] font-semibold leading-normal">
            {data?.title}
          </h1>
          <p className="text-[#545454] font-manrope  xl:text-xl font-medium leading-[30px] mt-3">
            {data?.sub_title}
          </p>
          <div className="grid grid-col-1 xl:grid-cols-2 gap-x-24 gap-y-8 mt-[67px] mx-auto">
            {data2?.map((feature, idx) => (
              <div
                key={feature.id}
                className={`flex gap-2 ${idx % 2 === 0 && "xl:justify-self-end"}`}
              >
                <FreeToAllSvg />
                <div className="text-left">
                  <h1 className="text-[#2C2C2C] font-outfit text-[20px] xl:text-[22px] font-medium leading-normal">
                    {feature?.title}
                  </h1>
                  <p className="text-[#2C2C2C] font-manrope text-base leading-6 mt-2">
                    {feature?.sub_title}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default FreeAll;
