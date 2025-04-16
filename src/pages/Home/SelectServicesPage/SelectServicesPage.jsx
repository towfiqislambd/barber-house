import BreadCrumb from "@/components/BusinessHelpCenter/BreadCrumb/BreadCrumb";
import {
  LeftSideArrowSvg,
  SearchIconSvg,
} from "@/components/svgContainer/SvgContainer";
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import Featured from "./section/Featured";
import TryMore from "./section/TryMore";
import {
  featured,
  boysCuts,
  mensBarberCuts,
  mensColor,
  childrensHaircut,
  keratinTreatment,
  hairConsultation,
  hairExtensions,
  mensBeardTrims,
} from "@/components/dummyData/SelectServicePageData";
import SelectServiceComponent from "@/components/SelectServiceComponent/SelectServiceComponent";

const SelectServicesPage = () => {
  const [activeCountry, setActiveCountry] = useState("Featured");
  const [activeDataArr, setactiveDataArr] = useState([]);

  const activeCountryArr = [
    "Featured",
    "Boys cuts",
    "Men’s Barber Cuts",
    "Men’s Beard Trims",
    "Men’s Color",
    "Children’s Haircut",
    "Keratin Treatment",
    "Hair Consultation",
    "Hair Extensions",
  ];

  console.log(mensBeardTrims, mensColor, hairConsultation);

  useEffect(() => {
    let data;
    switch (activeCountry) {
      case "Featured":
        data = featured;
        break;
      case "Boys cuts":
        data = boysCuts;
        break;
      case "Men’s Barber Cuts":
        data = mensBarberCuts;
        break;
      case "Men’s Beard Trims":
        data = mensBeardTrims;
        break;
      case "Men’s Color":
        data = mensColor;
        break;
      case "Children’s Haircut":
        data = childrensHaircut;
        break;
      case "Keratin Treatment":
        data = keratinTreatment;
        break;
      case "Hair Consultation":
        data = hairConsultation;
        break;
      case "Hair Extensions":
        data = hairExtensions;
        break;
      default:
        data = [];
    }
    setactiveDataArr(data);
  }, [activeCountry]);

  return (
    <section className="bg-[#FCFCFC] pt-36 lg:px-5 xl:px-7 2xl:px-10 3xl:px-12 4xl:px-0">
      <div className="container">
        {/* This is the button section */}
        <div className="flex gap-4 items-center">
          <Link to={"/booknow"}>
            <button className="flex border border-[#757575] rounded-[100px] text-[#2C2C2C] text-base font-manrope font-medium gap-[6px] items-center leading-6 px-3 py-2">
              <LeftSideArrowSvg />
              Back
            </button>
          </Link>
          <BreadCrumb
            items={[
              { label: "Services", href: "/" },
              { label: "Professional & time", href: "/docs/components" },
              { label: "Confirm" },
            ]}
          />
        </div>

        {/*  */}
        <div className="mt-8">
          <h1 className="text-2xl xl:text-3xl 2xl:text-4xl 4xl:text-5xl text-textColor font-medium font-outfit">
            Select Services from galibi&apos;s Barber Salon
          </h1>
          {/*  */}
          <div className="flex flex-wrap 4xl:justify-between items-center mt-7 3xl:mt-[40px]">
            {activeCountryArr.map((item, index) => {
              return (
                <button
                  key={index}
                  onClick={() => setActiveCountry(item)}
                  className={`px-4 lg:px-7 py-2 lg:py-3 rounded-full ${activeCountry === item
                    ? "bg-[#008A90] text-white font-semibold leading-6"
                    : "text-textLight font-manrope font-medium leading-6"
                    }`}
                >
                  {item}
                </button>
              );
            })}
          </div>
          {/* This is the content section */}
          <div className="container">
            <div className="flex flex-col gap-y-[33px] 3xl:ml-[105px] mt-10 3xl:mt-[88px]">
              <div className="bg-white h-12 lg:h-[56px] rounded-[40px]  border lg:w-[532px] pl-3 lg:pl-6 py-2 relative">
                <div className="flex bg-[#1E1E1E] justify-center rounded-full w-8 h-8 lg:h-10 lg:w-10 absolute items-center">
                  <SearchIconSvg />
                </div>
                <input
                  type="text"
                  className="h-full w-full lg:w-[480px] outline-none pl-10 lg:pl-[56px] pr-2"
                  placeholder="Search for your service you want"
                />
              </div>
              <div className="flex flex-col xl:flex-row w-full gap-10 gap-x-[50px] relative">
                <SelectServiceComponent
                  heading={activeCountry}
                  data={activeDataArr}
                />
                <Featured />
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* This */}
      <TryMore />
    </section>
  );
};

export default SelectServicesPage;
