const ExploreMore = ({ data }) => {
  return (
    <section className="bg-white relative pb-10 xl:pb-0 2xl:py-20">
      <div className="container">
        <div className="grid grid-cols-1 lg:grid-cols-2 3xl:gap-10 lg:gap-20 gap-10">
          <div className="3xl:space-y-7 space-y-3">
            <h2 className="text-2xl xl:text-3xl 2xl:text-4xl 3xl:text-6xl font-bold text-[#1E1E1E] font-outfit">
              {data?.title}
            </h2>
            <p className="text-[#2C2C2C] font-medium text-sm xl:text-lg 3xl:text-xl leading-7 xl:leading-[35px]">
              {data?.sub_title}
            </p>
            <button className="px-6 py-3 rounded-full bg-primary-gradient text-white">
              {data?.button_text}
            </button>
          </div>
          <div className="relative">
            <figure className="w-full xl:h-[476.452px] rounded-lg object-cover">
              <img
                src={`${import.meta.env.VITE_SITE_URL}/${data?.image}`}
                alt="explore"
                className="3xl:w-full w-full lg:h-[300px] xl:h-[404px] 2xl:h-full md:h-[300px] rounded-lg object-cover"
              />
            </figure>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExploreMore;
