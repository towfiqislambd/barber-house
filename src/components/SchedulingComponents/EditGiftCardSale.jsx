import { Link } from "react-router-dom";
import { Switch } from "antd";
import { RiDeleteBin6Line } from "react-icons/ri";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export default function EditGiftCardSale() {
  const onChange = (checked) => {
    console.log(`switch to ${checked}`);
  };
  return (
    <div className="pt-[40px] pb-[40px] xl:pb-[100px] px-6 md:px-0">
      <div className="flex gap-[20px] justify-end container mb-[40px]">
        <Link to="/businessDashboard/settingsales">
          <button className="border border-[#DFE1E6] rounded-[8px] text-[#2C2C2C] font-manrope text-[18px] xl:text-[20px] font-semibold p-[10px] xl:p-[14px] min-w-[100px] xl:min-w-[218px] hover:bg-primary hover:text-[#FFF] transition-all duration-300 hover:scale-95">
            Close
          </button>
        </Link>
        <button className="border border-[#DFE1E6] rounded-[8px] bg-primary text-[#FFF] font-manrope text-[18px] xl:text-[20px] font-semibold p-[10px] xl:p-[14px] min-w-[100px] xl:min-w-[218px] hover:scale-95 transition-all duration-300">
          Save
        </button>
      </div>
      <div className="xl:w-[754px] mx-auto ">
        <h3 className="mb-[10px] text-[#1E1E1E] font-outfit text-[28px] xl:text-[36px] font-semibold xl:leading-[43px]">
          Gift card settings
        </h3>
        <div className="flex justify-between items-center mb-[24px]">
          <div>
            <h4 className="text-[#2C2C2C] font-outfit text-[18px] xl:text-[24px] font-medium mb-[16px]">
              Gift cards
            </h4>
            <p className="text-[#545454] font-manrope font-medium mb-[23px]">
              Show clients your top 6 most popular discounted services when
              booking.
            </p>
          </div>
          <div>
            <Switch onChange={onChange} />
          </div>
        </div>
        <div>
          <h5 className="mb-[10px] text-[#2C2C2C] font-semibold text-[18px]">
            Values
          </h5>
          <p>
            Choose preset values that allow clients to quickly select an amount,
            and enable custom values within minimum and maximum.
          </p>
        </div>

        <div className="mt-[30px] flex flex-col gap-[20px]">
          <div className="flex justify-between items-center gap-[20px]">
            <div className="flex-shrink-0 w-[88%] xl:w-full relative">
              <Select className="">
                <SelectTrigger className="w-full ps-[55px]  text-base border !py-6 bg-white">
                  <SelectValue placeholder="12 hours (e.g. 9:00pm)" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="Active">10</SelectItem>
                  <SelectItem value="10">10</SelectItem>
                  <SelectItem value="25">25</SelectItem>
                  <SelectItem value="20">20</SelectItem>
                  <SelectItem value="15">15</SelectItem>
                  <SelectItem value="5">5</SelectItem>
                  <SelectItem value="30">30</SelectItem>
                </SelectContent>
              </Select>
              <span className="absolute bg-white top-[50%] translate-y-[-50%] text-[#2C2C2C] font-manrope left-[15px]">
                SAR
              </span>
            </div>
            <div>
              <button>
                {" "}
                <span className="text-[20px] cursor-pointer">
                  <RiDeleteBin6Line />
                </span>
              </button>
            </div>
          </div>

          <div className="flex justify-between items-center gap-[20px]">
            <div className="flex-shrink-0 w-[88%] xl:w-full relative">
              <Select className="">
                <SelectTrigger className="w-full ps-[55px]  text-base border !py-6 bg-white">
                  <SelectValue placeholder="12 hours (e.g. 9:00pm)" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="Active">10</SelectItem>
                  <SelectItem value="10">10</SelectItem>
                  <SelectItem value="25">25</SelectItem>
                  <SelectItem value="20">20</SelectItem>
                  <SelectItem value="15">15</SelectItem>
                  <SelectItem value="5">5</SelectItem>
                  <SelectItem value="30">30</SelectItem>
                </SelectContent>
              </Select>
              <span className="absolute bg-white top-[50%] translate-y-[-50%] text-[#2C2C2C] font-manrope left-[15px]">
                SAR
              </span>
            </div>
            <div>
              <button>
                {" "}
                <span className="text-[20px] cursor-pointer">
                  <RiDeleteBin6Line />
                </span>
              </button>
            </div>
          </div>

          <div className="flex justify-between items-center gap-[20px]">
            <div className="flex-shrink-0 w-[88%] xl:w-full relative">
              <Select className="">
                <SelectTrigger className=" ps-[55px]  text-base border !py-6 bg-white">
                  <SelectValue placeholder="12 hours (e.g. 9:00pm)" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="Active">10</SelectItem>
                  <SelectItem value="10">10</SelectItem>
                  <SelectItem value="25">25</SelectItem>
                  <SelectItem value="20">20</SelectItem>
                  <SelectItem value="15">15</SelectItem>
                  <SelectItem value="5">5</SelectItem>
                  <SelectItem value="30">30</SelectItem>
                </SelectContent>
              </Select>
              <span className="absolute bg-white top-[50%] translate-y-[-50%] text-[#2C2C2C] font-manrope left-[15px]">
                SAR
              </span>
            </div>
            <div>
              <button>
                {" "}
                <span className="text-[20px] cursor-pointer">
                  <RiDeleteBin6Line />
                </span>
              </button>
            </div>
          </div>
        </div>

        <div className="mt-[20px]">
          <h5 className="mb-[10px] text-[#2C2C2C] font-semibold text-[16px]">
            Expiration{" "}
          </h5>
          <p>
            Choose your default expiration period for all sold gift cards.
            Changing this only effects newly sold gift cards.
          </p>
        </div>

        <div className="mt-[24px] ">
          <label
            htmlFor=""
            className="font-manrope font-semibold text-[#2C2C2C] mb-[5px] block"
          >
            Minimum value
          </label>
          <Select className="">
            <SelectTrigger className=" text-base border !py-6 bg-white">
              <SelectValue placeholder="15 Days" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="Active">15 Days</SelectItem>
              <SelectItem value="10">10 Days</SelectItem>
              <SelectItem value="25">1 Monts</SelectItem>
              <SelectItem value="20">2 Monts</SelectItem>
              <SelectItem value="15">10 Month</SelectItem>
              <SelectItem value="5">5 Month</SelectItem>
            </SelectContent>
          </Select>
        </div>
      </div>
    </div>
  );
}
