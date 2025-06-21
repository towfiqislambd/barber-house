const GrowBusiness = ({ data }) => {
  return (
    <section className="pt-[40px] xl:pt-[83px] pb-[40px] xl:pb-[149px]">
      <div className="container">
        <div className="text-center">
          <h1 className="text-[#1E1E1E] text-[28px] font-outfit xl:text-[40px] font-semibold">
            {data?.title}
          </h1>
          <p className="text-[#545454] font-manrope text-[18px] xl:text-xl font-medium leading-[30px] mb-[20px] mt-3">
            {data?.sub_title}
          </p>
        </div>
        <div className="grid xl:grid-cols-3 xl:mt-[67px] gap-y-[50px] xl:gap-y-[99px]">
          {data?.items?.map(service => (
            <div key={service.id} className="flex gap-3 justify-center">
              <img
                src={`${import.meta.env.VITE_SITE_URL}/${service?.icon}`}
                className="w-14 h-14"
              />
              <div>
                <h1 className=" text-[22px] xl:text-[28px] font-semibold text-[#2C2C2C] font-outfit leading-[33.6px] max-w-[308px]">
                  {service?.title}
                </h1>
                <p className="text-[#545454] font-manrope text-base leading-6 mt-2 max-w-[308px]">
                  {service?.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GrowBusiness;
