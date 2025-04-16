import { Input } from "../ui/input";

const AddNewTax = () => {
  return (
    <section>
      {/* This is the button section */}
      <div className="flex justify-end gap-2 container mt-10">
        <button className="border border-[#0D1619] py-[10px] px-[18px] rounded-[10px] text-[#0D1619] font-manrope text-base font-bold leading-6">
          Close
        </button>
        <button className="border border-[#0D1619] py-[10px] px-[18px] rounded-[10px] font-manrope text-base font-bold leading-6 bg-[#0D1619] text-white">
          Add
        </button>
      </div>
      {/*  */}
      {/* This is the Client Sources */}
      <div className="max-w-[778px] mx-auto mt-9">
        <p className="text-[#000] font-outfit text-4xl font-semibold">
          Add new tax
        </p>
        <p className="mt-2 text-[#757575] font-manrope text-lg font-medium leading-[27px]">
          Set the tax name and percentage rate. To apply this to your products
          and services, adjust your tax defaults settings.
        </p>
        {/* Tax name */}
        <div className="mt-6">
          <label className="text-[#000] font-manrope text-base font-semibold leading-6">
            Tax name
          </label>
          <Input
            className="h-[55px] mt-2 border border-[#DFE1E6] rounded-lg bg-[#FFF]"
            type="text"
            placeholder="Tax name"
          />
        </div>
        {/* Tax rate */}
        <div className="mt-6">
          <label className="text-[#000] font-manrope text-base font-semibold leading-6">
            Tax rate
          </label>
          <Input
            className="h-[55px] mt-2 border border-[#DFE1E6] rounded-lg bg-[#FFF]"
            type="text"
            placeholder="%"
          />
        </div>
      </div>
    </section>
  );
};

export default AddNewTax;
