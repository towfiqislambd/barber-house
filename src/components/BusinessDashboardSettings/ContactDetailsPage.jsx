import { Input } from "../ui/input";
import { useState } from "react";
import PhoneInput from "react-phone-input-2";

const ContactDetailsPage = () => {
  const [phone, setPhone] = useState(null);
  const handleInput = (e) => {
    console.log(e);
  };
  return (
    <section>
      {/* This is the button section */}
      <div className="flex justify-end gap-2 container mt-5 2xl:mt-10">
        <button className="border border-[#0D1619] py-[10px] px-[18px] rounded-[10px] text-[#0D1619] font-manrope text-base font-bold leading-6">
          Close
        </button>
        <button className="border border-[#0D1619] py-[10px] px-[18px] rounded-[10px] font-manrope text-base font-bold leading-6 bg-[#0D1619] text-white">
          Save
        </button>
      </div>
      {/* This is the Client Sources */}
      <div className="max-w-[778px] mx-auto mt-4 lg:mt-9">
        <p className="text-[#000] font-outfit text-[30px] lg:text-4xl font-semibold">
          Edit your business
        </p>
        {/* Business name */}
        <div className="mt-6">
          <label className="text-[#000] font-manrope text-base font-semibold leading-6">
            Business name
          </label>
          <Input
            className="h-12 lg:h-[55px] mt-2 border border-[#DFE1E6] rounded-lg bg-[#FFF]"
            type="text"
            placeholder="SR"
          />
        </div>
        {/* Location contact number */}
        <div className="flex-shrink-0 custom-phone mt-6">
          <label
            className="text-[#2C2C2C] block text-[16px] font-semibold font-manrope leading-[27px] mb-[5px] "
            htmlFor=""
          >
            Location contact number
          </label>
          <div>
            <PhoneInput country={"us"} value={phone} onChange={handleInput} />
          </div>
        </div>
        {/* Location email address */}
        <div className="mt-6">
          <label className="text-[#000] font-manrope text-base font-semibold leading-6">
            Location email address
          </label>
          <Input
            className="h-12 lg:h-[55px] mt-2 border border-[#DFE1E6] rounded-lg bg-[#FFF]"
            type="text"
            placeholder="shawalrahman050@gmail.com"
          />
        </div>
      </div>
    </section>
  );
};

export default ContactDetailsPage;
