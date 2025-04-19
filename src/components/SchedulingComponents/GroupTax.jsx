import { BsPercent } from "react-icons/bs";
import { Link } from "react-router-dom";

export default function GroupTax() {
  return (
    <div className="mt-[40px] px-6 md:px-0">
      <div className="flex gap-[20px] justify-end container mb-[50px]">
        <Link to="/businessDashboard/settingsales">
          <button className="border border-[#DFE1E6] rounded-[8px] text-[#2C2C2C] font-manrope text-[18px] xl:text-[20px] font-semibold p-[10px] xl:p-[14px] min-w-[100px] xl:min-w-[218px] hover:bg-primary hover:text-[#FFF] transition-all duration-300 hover:scale-95">
            Close
          </button>
        </Link>
        <button className="border border-[#DFE1E6] rounded-[8px] bg-primary text-[#FFF] font-manrope text-[18px] xl:text-[20px] font-semibold p-[10px] xl:p-[14px] min-w-[100px] xl:min-w-[218px] hover:scale-95 transition-all duration-300">
          Save
        </button>
      </div>

      <div className="xl:w-[700px] mx-auto">
        <div className="mb-[40px]">
          <h3 className="mb-[10px] text-[#1E1E1E] font-outfit text-[28px] xl:text-[36px] font-semibold xl:leading-[43px]">
            Add new tax group
          </h3>
          <p className="font-manrope font-medium">
            Combine multiple taxes into a group, each tax still shows
            individually on sales receipts and reports. To apply this group to
            your products and services, adjust your tax default settings.
          </p>
        </div>
        <form action="">
          <div className="flex flex-col gap-[32px]">
            <div className="">
              <label
                htmlFor=""
                className="mb-[10px] text-[#2C2C2C] font-manrope font-semibold block"
              >
                Tax group name
              </label>
              <input
                type="text"
                placeholder="enter tax Group name"
                className="sm:py-[16px] py-3 px-[20px] border rounded-[8px] w-full focus:border-primary focus:outline-none"
              />
            </div>
            <div className="">
              <label
                htmlFor=""
                className="mb-[10px] text-[#2C2C2C] font-manrope font-semibold block"
              >
                Tax rate
              </label>

              <div className="relative">
                <input
                  type="text"
                  placeholder="enter tax name"
                  className="sm:py-[16px] py-3 px-[20px] border rounded-[8px] w-full focus:border-primary focus:outline-none pl-[40px]"
                />

                <span className="absolute left-[15px]  top-[50%] translate-y-[-50%] bg-[#fff]">
                  <BsPercent />
                </span>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
