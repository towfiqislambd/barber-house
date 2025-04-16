import { Input } from "../ui/input";

const EditReceiptSequencing = () => {
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
      {/* This is the Client Sources */}
      <div className="max-w-[778px] mx-auto mt-9">
        <p className="text-[#000] font-outfit text-4xl font-semibold">
          Edit receipt sequencing
        </p>
        <p className="mt-2 text-[#757575] font-manrope text-lg font-medium leading-[27px]">
          Change receipt sequence for SR
        </p>
        <div className="flex gap-6 justify-between">
          {/* Receipt No. Prefix */}
          <div className="mt-6 w-[390px]">
            <label className="text-[#000] font-manrope text-base font-semibold leading-6">
              Receipt No. Prefix
            </label>
            <Input
              className="h-[55px] mt-2 border border-[#DFE1E6] rounded-lg bg-[#FFF]"
              type="text"
              placeholder="."
            />
          </div>
          {/* Next receipt number */}
          <div className="mt-6 w-[390px]">
            <label className="text-[#000] font-manrope text-base font-semibold leading-6">
              Next receipt number
            </label>
            <Input
              className="h-[55px] mt-2 border border-[#DFE1E6] rounded-lg bg-[#FFF]"
              type="text"
              placeholder="1"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default EditReceiptSequencing;
