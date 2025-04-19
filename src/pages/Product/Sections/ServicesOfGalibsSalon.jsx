import { PlusIconSvg } from "@/components/svgContainer/SvgContainer";
import servicesBg from "../../../assets/images/servicesBg.png";
const servicesData = [
  {
    id: 1,
    title: "Wax Services 02",
    time: "25-35 mins",
    count: "10",
  },
  {
    id: 2,
    title: "Wax Services 02",
    time: "25-35 mins",
    count: "10",
  },
  {
    id: 3,
    title: "Wax Services 02",
    time: "25-35 mins",
    count: "10",
  },
  {
    id: 4,
    title: "Wax Services 02",
    time: "25-35 mins",
    count: "10",
  },
];

// eslint-disable-next-line react/prop-types
const ServicesOfGalibsSalon = ({ setActiveCart }) => {
  return (
    <div
      onClick={() => setActiveCart(false)}
      className="bg-[#FCFCFC] xl:py-14 lg:py-2 py-0"
    >
      <div className="container px-5 4xl:px-0">
        <h3 className="font-outfit text-3xl font-medium text-[#2C2C2C] mb-7">
          Services of Ghalibs Barber Salon
        </h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          {servicesData.map((data) => (
            <label key={data.id} className="cursor-pointer">
              <input
                type="checkbox"
                name="customCheckbox"
                value={data.id}
                className="hidden peer"
              />
              <div className="flex justify-between items-center border xl:p-5 p-3 rounded-xl peer-checked:border-primary peer-checked:bg-primaryLight">
                <div className="xl:space-y-2">
                  <h3 className="text-[#2C2C2C] font-manrope text-lg xl:text-xl font-semibold">
                    {data.title}
                  </h3>
                  <h4 className="text-[#545454] font-medium font-manrope text-base">
                    {data.time}
                  </h4>
                  <div className="flex gap-2 items-center">
                    <img src={servicesBg} alt="servicesBg" />
                    <p className="font-manrope font-semibold text-primary text-lg">

                      {data.count}
                    </p>
                  </div>
                </div>
                <PlusIconSvg />
              </div>
            </label>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ServicesOfGalibsSalon;
