import { Input } from "../ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

const EditAddressDetails = () => {
  return (
    <section className="my-5 sm:my-0">
      {/* This is the button section */}
      <div className="flex justify-end gap-2 container xl:mt-10">
        <button className="border border-[#0D1619] lg:py-[10px] py-1 lg:px-[18px] px-4 rounded-[10px] text-[#0D1619] font-manrope text-base font-bold leading-6">
          Close
        </button>
        <button className="border border-[#0D1619] lg:py-[10px] lg:px-[18px] px-4 rounded-[10px] font-manrope text-base font-bold leading-6 bg-[#0D1619] text-white">
          Add
        </button>
      </div>
      {/* This is the Client Sources */}
      <div className="max-w-[778px] mx-auto xl:mt-9 mt-5 md:px-6 px-7 xl:px-0">
        <p className="text-[#000] font-outfit text-xl sm:text-3xl lg:text-4xl font-semibold">
          Edit receipt sequencing
        </p>
        <p className="mt-2 text-[#757575] font-manrope text-sm sm:text-lg font-medium leading-[27px]">
          Change receipt sequence for SR
        </p>
        {/* First Div */}
        <div className="flex flex-col sm:flex-row md:gap-6 gap-3 justify-between">
          {/* Receipt No. Prefix */}
          <div className="lg:mt-6 mt-3 sm:w-[390px]">
            <label className="text-[#000] font-manrope text-base font-semibold leading-6">
              Address
            </label>
            <Input
              className="lg:h-[55px] h-12 mt-2 border border-[#DFE1E6] rounded-lg bg-[#FFF]"
              type="text"
              placeholder="Bus Stand"
            />
          </div>
          {/* Next receipt number */}
          <div className="lg:mt-6 sm:w-[390px]">
            <label className="text-[#000] font-manrope text-base font-semibold leading-6">
              Next receipt number
            </label>
            <Input
              className="lg:h-[55px] h-12 mt-2 border border-[#DFE1E6] rounded-lg bg-[#FFF]"
              type="text"
              placeholder="1"
            />
          </div>
        </div>
        {/* Second Div */}
        <div className="flex flex-col sm:flex-row md:gap-6 gap-3 justify-between">
          {/* Receipt No. Prefix */}
          <div className="lg:mt-6 mt-3 sm:w-[390px]">
            <label className="text-[#000] font-manrope text-base font-semibold leading-6">
              District
            </label>
            <Input
              className="lg:h-[55px] h-12 mt-2 border border-[#DFE1E6] rounded-lg bg-[#FFF]"
              type="text"
              placeholder="Mirpur"
            />
          </div>
          {/* Next receipt number */}
          <div className="lg:mt-6 sm:w-[390px]">
            <label className="text-[#000] font-manrope text-base font-semibold leading-6">
              City
            </label>
            <Input
              className="lg:h-[55px] h-12 mt-2 border border-[#DFE1E6] rounded-lg bg-[#FFF]"
              type="text"
              placeholder="Dhaka"
            />
          </div>
        </div>
        {/* Third Div */}
        <div className="flex flex-col sm:flex-row md:gap-6 gap-3 justify-between">
          {/* Receipt No. Prefix */}
          <div className="lg:mt-6 mt-3 sm:w-[390px]">
            <label className="text-[#000] font-manrope text-base font-semibold leading-6">
              County
            </label>
            <Input
              className="lg:h-[55px] h-12 mt-2 border border-[#DFE1E6] rounded-lg bg-[#FFF]"
              type="text"
              placeholder="Dhaka District"
            />
          </div>
          {/* Next receipt number */}
          <div className="lg:mt-6 sm:w-[390px]">
            <label className="text-[#000] font-manrope text-base font-semibold leading-6">
              State
            </label>
            <Input
              className="lg:h-[55px] h-12 mt-2 border border-[#DFE1E6] rounded-lg bg-[#FFF]"
              type="text"
              placeholder="%"
            />
          </div>
        </div>
        {/* Fourth Div */}
        <div className="flex flex-col sm:flex-row md:gap-6 gap-3 justify-between">
          {/* Receipt No. Prefix */}
          <div className="lg:mt-6 mt-3 sm:w-[390px]">
            <label className="text-[#000] font-manrope text-base font-semibold leading-6">
              Postcode
            </label>
            <Input
              className="lg:h-[55px] h-12 mt-2 border border-[#DFE1E6] rounded-lg bg-[#FFF]"
              type="text"
              placeholder="1216"
            />
          </div>
          {/* Next receipt number */}
          <div className="lg:mt-6 sm:w-[390px]">
            <label className="text-[#000] font-manrope text-base font-semibold leading-6">
              Country
            </label>
            <Input
              className="lg:h-[55px] h-12 mt-2 border border-[#DFE1E6] rounded-lg bg-[#FFF]"
              type="text"
              placeholder="%"
            />
          </div>
        </div>
        {/*  */}
        <div className="grid w-full gap-1.5 mt-6">
          <Label
            htmlFor="message"
            className="text-[#000] font-manrope text-base font-normal leading-6"
          >
            Directions
          </Label>
          <Textarea
            className="bg-[#FFF] lg:h-[169px] h-20 mt-2"
            placeholder="Type your message here."
            id="message"
          />
        </div>
      </div>
    </section>
  );
};

export default EditAddressDetails;
