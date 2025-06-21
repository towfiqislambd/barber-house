const GetStarted = ({ data, data2 }) => {
  return (
    <section className="py-[65px]">
      <div className="container">
        {/* This is the title */}
        <div className="text-center">
          <h1 className="text-[#1E1E1E] font-outfit text-[28px] xl:text-[40px] font-semibold">
            {data?.title}
          </h1>
          <p className="text-[#545454] font-manrope  text-[18px] xl:text-xl font-medium leading-[30px] mt-3">
            {data?.sub_title}
          </p>
        </div>
        {/* This is the card section */}
        <div className="grid grid-cols-2 gap-[10px] xl:grid-cols-5 max-w-[1320px] mx-auto mt-[67px] gap-y-4">
          {data2?.map(service => (
            <div
              key={service.id}
              className="flex items-center gap-3 bg-[#F4F5F7] xl:py-10 p-[10px] xl:px-8 xl:max-w-[251.2px] rounded-lg hover:bg-[#E0E0E0] ease-out duration-300 cursor-pointer h-full"
            >
              <div className="w-[20px] xl:w-[30px]">
                <img
                  src={`${import.meta.env.VITE_SITE_URL}/${service?.icon}`}
                  alt=""
                  className="w-full h-full"
                />
              </div>

              <h1 className=" text-[#2C2C2C] font-manrope text-[16px] xl:text-xl font-semibold leading-[30px]">
                {service?.service_name}
              </h1>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GetStarted;
