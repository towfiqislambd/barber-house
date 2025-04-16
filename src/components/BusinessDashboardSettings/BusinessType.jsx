import { useState } from "react";
import {
  BarberShopSvg,
  BeautySalonSvg,
  BusinessAestheticSalonSvg,
  BusinessEyebrowsLashesSvg,
  BusinessGymSvg,
  BusinessHairSalonSvg,
  BusinessMessageSvg,
  BusinessNailSalonSvg,
  BusinessPersonalTrainerSvg,
  BusinessSpaSvg,
  BusinessTattooSvg,
  BusinessTherapySvg,
  BusinessWaxingSalonSvg,
  BusinessWeightLossSvg,
} from "../svgContainer/SvgContainer";

const BusinessType = () => {
  const services = [
    { id: 1, icon: <BusinessHairSalonSvg />, title: "Hair Salon" },
    { id: 2, icon: <BusinessNailSalonSvg />, title: "Nail Salon" },
    { id: 3, icon: <BarberShopSvg />, title: "Barbershop" },
    { id: 4, icon: <BeautySalonSvg />, title: "Beauty Salon" },
    { id: 5, icon: <BusinessAestheticSalonSvg />, title: "Aesthetics" },
    { id: 6, icon: <BusinessSpaSvg />, title: "Spa" },
    { id: 7, icon: <BusinessMessageSvg />, title: "Massage" },
    { id: 8, icon: <BusinessEyebrowsLashesSvg />, title: "Eyebrows & Lashes" },
    { id: 9, icon: <BusinessTattooSvg />, title: "Tattoo & Piercing" },
    { id: 10, icon: <BusinessTherapySvg />, title: "Therapy Center" },
    { id: 11, icon: <BusinessWeightLossSvg />, title: "Weight Loss" },
    { id: 12, icon: <BusinessPersonalTrainerSvg />, title: "Personal Trainer" },
    { id: 13, icon: <BusinessGymSvg />, title: "Gym & Fitness" },
    { id: 14, icon: <BusinessWaxingSalonSvg />, title: "Waxing Salon" },
  ];
  const [selected, setSelected] = useState([]);

  const handleSelect = (id) => {
    if (selected.includes(id)) {
      setSelected(selected.filter((item) => item !== id));
    } else if (selected.length < 4) {
      setSelected([...selected, id]);
    }
  };

  return (
    <section>
      {/* This is the button section */}
      <div className="flex justify-end gap-2 container mt-10">
        <button className="border border-[#0D1619] py-[10px] px-[18px] rounded-[10px] text-[#0D1619] font-manrope text-base font-bold leading-6">
          Close
        </button>
        <button className="border border-[#0D1619] py-[10px] px-[18px] rounded-[10px] font-manrope text-base font-bold leading-6 bg-[#0D1619] text-white">
          Save
        </button>
      </div>
      {/* This is the Client Sources */}
      <div className="mt-9 max-w-[778px] mx-auto">
        <p className="text-[#000] font-outfit text-4xl font-semibold">
          Choose your business types
        </p>
        <p className="mt-2 text-[#757575] font-manrope text-lg font-medium leading-[27px]">
          Choose your business types
        </p>
        {/* This is the card section */}
        <div className="grid grid-cols-2 gap-4 mt-6">
          {services.map((service) => {
            const selectedIndex = selected.indexOf(service.id) + 1;
            return (
              <div
                key={service.id}
                onClick={() => handleSelect(service.id)}
                className={`relative border-2 rounded-2xl py-5 px-6 cursor-pointer transition 
                ${selectedIndex ? "border-[#6950F3]" : "border-[#8993A4]"} 
                ${
                  selected.length >= 4 && !selectedIndex
                    ? "opacity-50 cursor-not-allowed"
                    : ""
                }
              `}
              >
                <div className="flex justify-between items-center">
                  <div>
                    {service.icon}
                    <p className="mt-2 text-black font-manrope text-xl font-medium">
                      {service.title}
                    </p>
                  </div>
                  {selectedIndex > 0 && (
                    <span className="absolute top-2 right-2 bg-[#6950F3] text-white w-6 h-6 flex items-center justify-center rounded-full text-sm">
                      {selectedIndex}
                    </span>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default BusinessType;
