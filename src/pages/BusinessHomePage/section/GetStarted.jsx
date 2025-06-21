import {
  AestheticsSvg,
  EyebrowsLashesSvg,
  GymFitnessSvg,
  HairSalon2Svg,
  HairSalon3Svg,
  HairSalonSvg,
  MassageSvg,
  NailSalonSvg,
  PersonalTrainerSvg,
  SpaSvg,
  TanningStudioSvg,
  TattooPiercingSvg,
  TherapyCentreSvg,
  WaxingSalonSvg,
  WeightLossSvg,
} from "@/components/svgContainer/SvgContainer";

const GetStarted = ({ data }) => {
  const category = [
    { id: 1, icon: <HairSalonSvg />, title: "Hair Salon" },
    { id: 2, icon: <NailSalonSvg />, title: "Nail Salon" },
    { id: 3, icon: <WaxingSalonSvg />, title: "Waxing Salon" },
    { id: 4, icon: <HairSalon2Svg />, title: "Hair Salon" },
    { id: 5, icon: <HairSalon3Svg />, title: "Hair Salon" },
    { id: 6, icon: <EyebrowsLashesSvg />, title: "Eyebrows & Lashes" },
    { id: 7, icon: <MassageSvg />, title: "Massage" },
    { id: 8, icon: <SpaSvg />, title: "Spa" },
    { id: 9, icon: <GymFitnessSvg />, title: "Gym & Fitness" },
    { id: 10, icon: <PersonalTrainerSvg />, title: "Personal Trainer" },
    { id: 11, icon: <TherapyCentreSvg />, title: "Therapy Centre" },
    { id: 12, icon: <TattooPiercingSvg />, title: "Tattoo & Piercing" },
    { id: 13, icon: <TanningStudioSvg />, title: "Tanning Studio" },
    { id: 14, icon: <AestheticsSvg />, title: "Aesthetics" },
    { id: 15, icon: <WeightLossSvg />, title: "Weight Loss" },
  ];
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
          {category?.map(service => (
            <div
              key={service.id}
              className="flex items-center gap-3 bg-[#F4F5F7] xl:py-10 p-[10px] xl:px-8 xl:max-w-[251.2px] rounded-lg hover:bg-[#E0E0E0] ease-out duration-300 cursor-pointer h-full"
            >
              <div className="w-[20px] xl:w-[30px]">{service.icon}</div>

              <h1 className=" text-[#2C2C2C] font-manrope text-[16px] xl:text-xl font-semibold leading-[30px]">
                {service.title}
              </h1>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GetStarted;
