import users from "../../../../assets/images/icon/user_icon.jpg";
const TeamofGhalib = ({ data }) => {
  return (
    <section className="container pb-10 2xl:py-20 lg:px-5 xl:px-7 2xl:px-10 3xl:px-12 4xl:px-0">
      <h1 className="text-[#2C2C2C] font-outfit text-2xl xl:text-3xl 2xl:text-[32px] font-medium">
        Team of {data?.data?.name}
      </h1>
      {/* card section */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5 gap-5 place-items-center">
        {data?.data?.store_teams?.map((person, index) => {
          return (
            <div
              key={index}
              className="bg-primaryLight  border-[0.4px] border-primary max-w-[249px] rounded-tl-[52px] rounded-tr-[16px] rounded-br-[16px] rounded-bl-[16px] p-6 mt-8"
            >
              {person?.team?.photo ? (
                <div className="  rounded-tl-[52px] rounded-tr-[16px] rounded-br-[16px] rounded-bl-[16px] overflow-hidden">
                  <img
                    className="w-full h-32"
                    src={`${import.meta.env.VITE_SITE_URL}/${
                      person?.team?.photo
                    }`}
                    alt={person.name}
                  />
                </div>
              ) : (
                <img className="w-full h-32" src={users} alt={"team avatar"} />
              )}

              <div className="text-center mt-2">
                <h1 className="text-[#2C2C2C] font-manrope text-lg font-semibold">
                  {person?.team?.first_name}
                </h1>
                <p className="text-[#2C2C2C] font-manrope text-lg font-semibold mt-1 truncate text-nowrap">
                  {person?.team?.job_title}
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default TeamofGhalib;
