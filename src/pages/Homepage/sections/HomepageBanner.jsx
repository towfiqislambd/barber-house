import { SearchButtonSvg } from "@/components/svgContainer/SvgContainer";
import homepageBg from "../../../assets/images/home-bg.jpg";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

const HomepageBanner = () => {
  const navigate = useNavigate();
  const [location, setLocation] = useState("");
  const [category, setCategory] = useState("");
  const [openCategory, setOpenCategory] = useState(false);
  const [openLocation, setOpenLocation] = useState(false);

  const handleSearch = () => {
    navigate("/searchresultpage");
  };

  return (
    <section
      className="flex bg-center bg-cover bg-no-repeat justify-center w-full items-center min-h-screen"
      style={{
        backgroundImage: `linear-gradient(0deg, rgba(0, 0, 0, 0.64) 0%, rgba(0, 0, 0, 0.64) 100%), url(${homepageBg})`,
        backgroundColor: "#E7E7E7",
      }}
    >
      {/* title */}
      <div className="container flex flex-col justify-center gap-8 xl:gap-16 items-center ">
        <h1 className="text-3xl lg:text-5xl xl:text-6xl 3xl:text-7xl text-center text-white font-outfit font-semibold 3xl:leading-[90px] tracking-[-1.44px] pt-8 lg:pt-12 xl:pt-16">
          Experience Luxury Grooming <br />
          Like Never Before
        </h1>
        {/* search filters */}
        <div className="bg-white py-10 xl:py-0 rounded-xl xl:rounded-full w-full max-w-[500px] xl:max-w-[700px] 2xl:max-w-[1000px] mx-auto px-5 2xl:px-4 xl:px-2 2xl:py-1">
          <form
            action=""
            className="flex flex-wrap md:flex-nowrap flex-col xl:flex-row w-full 2xl:justify-between font-medium gap-3 2xl:gap-5 items-center"
          >
            {/* For Category */}
            <Popover>
              <Popover open={openCategory} onOpenChange={setOpenCategory}>
                <PopoverTrigger className="flex flex-1 border xl:border-none py-3 lg:py-5 px-3 lg:px-5 rounded-lg border-r gap-2 items-center w-full xl:w-auto">
                  <SearchButtonSvg />
                  <input
                    className="cursor-pointer focus:outline-none placeholder:text-black w-full"
                    type="text"
                    name=""
                    placeholder={category || "All treatments & places"}
                    readOnly
                  />
                </PopoverTrigger>
                <PopoverContent className="p-5 w-60 mt-8">
                  <ul className="text-[#2C2C2C] text-lg font-medium space-y-5">
                    {[
                      "All Categories",
                      "Hair & styling",
                      "Nails",
                      "Eyebrows & eyelashes",
                      "Massage",
                      "Barbering",
                    ].map(item => (
                      <li
                        key={item}
                        onClick={() => {
                          setCategory(item);
                          setOpenCategory(false);
                        }}
                        className="cursor-pointer duration-300 hover:text-[#008a90] transition-all"
                      >
                        {item}
                      </li>
                    ))}
                  </ul>
                </PopoverContent>
              </Popover>
            </Popover>
            {/* For Location */}
            <Popover>
              <Popover open={openLocation} onOpenChange={setOpenLocation}>
                <PopoverTrigger className="flex flex-1 border xl:border-none px-3 rounded-lg py-2 border-r gap-3 items-center w-full xl:w-auto">
                  <SearchButtonSvg />
                  <input
                    className="cursor-pointer focus:outline-none placeholder:text-black w-full"
                    type="text"
                    name=""
                    placeholder={location || "Location"}
                    readOnly
                  />
                </PopoverTrigger>
                <PopoverContent className="p-5 w-60 mt-8">
                  <ul className="text-[#2C2C2C] text-lg font-medium space-y-5">
                    {[
                      "Medina, Saudi Arabia",
                      "Jeddah, Saudi Arabia",
                      "Riyadh, Saudi Arabia",
                    ].map(city => (
                      <li
                        key={city}
                        onClick={() => {
                          setLocation(city);
                          setOpenLocation(false);
                        }}
                        className="cursor-pointer duration-300 hover:text-[#008a90] transition-all"
                      >
                        {city}
                      </li>
                    ))}
                  </ul>
                </PopoverContent>
              </Popover>
            </Popover>
            {/* Search btn */}
            <button
              onClick={handleSearch}
              className="bg-textColor rounded-full text-white px-4 xl:px-8 py-2 xl:py-4 w-full xl:w-auto"
            >
              Search
            </button>
          </form>
        </div>

        {/* statistics */}
        <div>
          <h4 className="text-xl lg:text-2xl text-white font-outfit">
            <span className="text-3xl font-semibold">250,000</span> appointments
            booked this week!
          </h4>
        </div>
      </div>
    </section>
  );
};

export default HomepageBanner;
