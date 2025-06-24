const HomepageStat = ({ data }) => {
  return (
    <section className="2xl:my-20 xl:py-20 py-10 bg-[#FCFCFC]">
      <div className="max-w-[1024px] mx-auto">
        {/* title */}
        <div className="container text-center space-y-2 md:space-y-4">
          <h2 className="font-outfit text-[30px] md:text-4xl font-semibold">
            {data?.title}
          </h2>
          <p className="text-base md:text-lg font-semibold text-textColor">
            {data?.sub_title}
          </p>
        </div>

        {/* stats */}
        <div className="mt-6 md:mt-12 grid lg:grid-cols-12 gap-5 px-5 2xl:px-0">
          {/* big */}
          <div className="col-span-4 lg:col-span-4 xl:col-span-6 bg-[#F4F4F4] xl:py-[72px] py-7 xl:px-12 w-full flex flex-col gap-2 items-center justify-center rounded-lg px-3">
            <h3 className="text-4xl xl:text-8xl font-semibold font-outfit bg-primary-gradient bg-clip-text text-transparent">
              {data?.years_in_businesses}
            </h3>
            <p className="text-base xl:text-lg font-semibold">
              Appointments booked on Cleanse
            </p>
          </div>

          {/* 2nd half */}
          <div className="col-span-4 lg:col-span-4 xl:col-span-3 flex flex-col gap-5">
            <div className="bg-[#F4F4F4] py-8 px-4 flex flex-col items-center justify-center rounded-lg">
              <h4 className="text-2xl xl:text-3xl font-semibold font-outfit text-textLight">
                {data?.satisfied_clients}
              </h4>
              <p className="text-base xl:text-lg font-semibold">
                Satisfied Clients
              </p>
            </div>
            <div className="bg-[#F4F4F4] 2xl:py-8 py-8 2xl:px-4 flex flex-col items-center justify-center rounded-lg">
              <h4 className="text-2xl xl:text-3xl font-semibold font-outfit text-textLight">
                {data?.pro_consultants}
              </h4>
              <p className="text-base xl:text-lg font-semibold">
                Pro Consultants
              </p>
            </div>
          </div>
          {/* 3rd half */}
          <div className="col-span-4 lg:col-span-4 xl:col-span-3 flex flex-col gap-5 text-nowrap">
            <div className="bg-[#F4F4F4] py-8 px-4 flex flex-col items-center justify-center rounded-lg">
              <h4 className="text-2xl xl:text-3xl font-semibold font-outfit text-textLight">
                {data?.years_in_businesses}
              </h4>
              <p className="text-base xl:text-lg font-semibold">
                Years in Business
              </p>
            </div>
            <div className="bg-[#F4F4F4] py-8 px-4 flex flex-col items-center justify-center rounded-lg">
              <h4 className="text-2xl xl:text-3xl font-semibold font-outfit text-textLight">
                {data?.successful_cases}
              </h4>
              <p className="text-base xl:text-lg font-semibold">
                Successful Cases
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HomepageStat;
