import { Input } from "../ui/input";
import { Checkbox } from "@/components/ui/checkbox";

const AddClientSources = () => {
  return (
    <section className="px-6 md:px-0">
      {/* This is the button section */}
      <div className="flex justify-end gap-2 container mt-10 ">
        <button className="border border-[#0D1619] py-[10px] px-[18px] rounded-[10px] text-[#0D1619] font-manrope text-base font-bold leading-6">
          Close
        </button>
        <button className="border border-[#0D1619] py-[10px] px-[18px] rounded-[10px] font-manrope text-base font-bold leading-6 bg-[#0D1619] text-white">
          Save
        </button>
      </div>
      {/* This is the Client Sources */}
      <div className="max-w-[778px] mx-auto mt-9">
        <p className="text-[#000] font-outfit text-3xl lg:text-4xl font-semibold">
          Add client sources
        </p>
        {/* Client source name */}
        <div className="mt-6">
          <label className="text-[#000] font-manrope text-base font-semibold leading-6">
            Client source name
          </label>
          <Input
            className="h-12 md:h-[55px] mt-2 border border-[#DFE1E6] rounded-lg"
            type="text"
            placeholder="Location Promotion"
          />
        </div>
        {/*  */}
        <div className="flex items-center space-x-2 mt-4">
          <Checkbox id="terms" />
          <label
            htmlFor="terms"
            className="text-xl text-[#000] font-manrope font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
          >
            Active
          </label>
        </div>
      </div>
    </section>
  );
};

export default AddClientSources;
