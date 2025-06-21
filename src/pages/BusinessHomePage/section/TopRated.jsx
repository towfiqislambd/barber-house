import topRatedBannerImg from "../../../assets/images/topRatedImage.png";

const TopRated = ({ data }) => {
  const clientData = [
    { id: 1, count: data?.satisfied_clients, text: "Satisfied Clients" },
    { id: 2, count: data?.pro_consultants, text: "Pro Consultants" },
    { id: 3, count: data?.years_in_businesses, text: "Years in Business" },
    { id: 4, count: data?.successful_cases, text: "Successful Cases" },
  ];
  return (
    <section>
      <div
        className="lg:h-[362px] xl:h-[370px]"
        style={{
          backgroundImage: ` url(${topRatedBannerImg}) `,
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundPosition: "center",
        }}
      >
        <div className="flex flex-col xl:flex-row container gap-[50px] xl:gap-[132px] py-20">
          {/* Left Side Div */}
          <div className="">
            <h1 className="text-[#1E1E1E] text-[26px] xl:text-[40px] font-semibold xl:leading-[48px] max-w-[650px] font-outfit">
              {data?.title}
            </h1>
            <p className="text-[18px] xl:text-xl font-manrope font-medium leading-[30px] text-[#545454] mt-4 xl:max-w-[650px]">
              {data?.sub_title}
            </p>
          </div>
          {/* Right side Div */}
          <div className="grid grid-cols-2 gap-12">
            {clientData.map(client => (
              <div key={client.id}>
                <h2 className="text-[#1E1E1E] font-outfit text-[24px] xl:text-4xl font-semibold xl:leading-[43.2px]">
                  {typeof client.count === "number"
                    ? client.count.toLocaleString() + "+"
                    : client.count}
                </h2>
                <p className="text-[#545454] font-manrope text-lg leading-[27px] mt-2">
                  {client.text}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TopRated;
