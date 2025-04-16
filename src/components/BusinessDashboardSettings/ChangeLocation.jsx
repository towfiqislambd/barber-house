import { SearchLocationSvg } from "../svgContainer/SvgContainer";
import { Input } from "../ui/input";

const ChangeLocation = () => {
  return (
    <section className="px-6 xl:px-0">
      {/* This is the button section */}
      <div className="flex justify-end gap-2 container xl:mt-10 mt-5">
        <button className="border border-[#0D1619] lg:py-[10px] py-2 lg:px-[18px] px-4 rounded-[10px] text-[#0D1619] font-manrope text-base font-bold leading-6">
          Close
        </button>
        <button className="border border-[#0D1619] lg:py-[10px] py-2 lg:px-[18px] px-4 rounded-[10px] font-manrope text-base font-bold leading-6 bg-[#0D1619] text-white">
          Add
        </button>
      </div>
      {/* This is the Client Sources */}
      <div className="max-w-[778px] mx-auto lg:mt-9 mt-5">
        <p className="text-[#000] font-outfit text-3xl lg:text-4xl font-semibold">
          Edit your location
        </p>
        {/* Where is your business located? */}
        <div className="lg:mt-6 mt-3 relative">
          <label className="text-[#000] font-manrope text-base font-semibold leading-6">
            Where is your business located?
          </label>
          <Input
            className="lg:h-[60px] h-12 mt-2 border border-[#DFE1E6] rounded-lg"
            type="text"
            placeholder="search location"
          />
          <button className="absolute lg:top-[54px] top-12 left-2">
            <SearchLocationSvg />
          </button>
        </div>
      </div>
    </section>
  );
};

export default ChangeLocation;
