import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { DropdownSvg } from "../svgContainer/SvgContainer";
const EditTipping = () => {
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
          Edit tipping
        </p>
        <p className="mt-2 text-[#757575] font-manrope text-lg font-medium leading-[27px]">
          Use workspace defaults or custom for this location
        </p>

        {/* Receipt No. Prefix */}
        <div className="mt-6 ">
          <Popover>
            <PopoverTrigger>
              <button className="px-4 py-[10px] flex justify-between w-[804px] gap-2 items-center outline-none border border-[#DFE1E6] rounded-lg">
                <p className="text-textColor font-manrope text-base font-bold leading-6">
                  Workspace defaults
                </p>
                <DropdownSvg />
              </button>
            </PopoverTrigger>
            <PopoverContent className="w-[804px] p-4">
              <div className="space-y-4">
                <button className="flex gap-2 items-center">
                  <p className="text-textColor text-base font-manrope font-medium leading-6">
                    Custom for location
                  </p>
                </button>
                <button className="flex gap-2 items-center">
                  <p className="text-textColor text-base font-manrope font-medium leading-6">
                    Workspace faults
                  </p>
                </button>
              </div>
            </PopoverContent>
          </Popover>
        </div>
      </div>
    </section>
  );
};

export default EditTipping;
