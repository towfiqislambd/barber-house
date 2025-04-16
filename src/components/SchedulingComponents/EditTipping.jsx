import { Link } from "react-router-dom";

import { RiDeleteBin6Line } from "react-icons/ri";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { AiOutlinePercentage } from "react-icons/ai";

export default function EditTipping() {
  const onChange = (checked) => {
    console.log(`switch to ${checked}`);
  };
  return (
    <div className=" mb-[40px] pt-[40px] xl:pb-[100px] px-6 md:px-0">
      <div className="flex gap-[20px] justify-end container mb-[40px]">
        <Link to="/businessDashboard/settingsales">
          <button className="border border-[#DFE1E6] rounded-[8px] text-[#2C2C2C] font-manrope text-[18px] xl:text-[20px] font-semibold p-[10px] xl:p-[14px] min-w-[100px] xl:min-w-[218px] hover:bg-[#008A90] hover:text-[#FFF] transition-all duration-300 hover:scale-95">
            Close
          </button>
        </Link>
        <button className="border border-[#DFE1E6] rounded-[8px] bg-[#008A90] text-[#FFF] font-manrope text-[18px] xl:text-[20px] font-semibold p-[10px] xl:p-[14px] min-w-[100px] xl:min-w-[218px] hover:scale-95 transition-all duration-300">
          Save
        </button>
      </div>
      <div className="xl:w-[754px] mx-auto">
        <h3 className="mb-[20px] text-[#1E1E1E] font-outfit text-[28px] xl:text-[36px] font-semibold xl:leading-[43px]">
          Suggested tip values
        </h3>

        <div>
          <h5 className="mb-[10px] text-[#2C2C2C] font-semibold text-[18px]">
            Default tip values
          </h5>
          <p>
            The tip values are default options, clients will also be able to add
            a custom amount.
          </p>
        </div>

        <div className="mt-[30px] flex flex-col gap-[20px]">
          <div>
            <label
              htmlFor=""
              className="font-manrope font-semibold text-[#2C2C2C] mb-[5px] block"
            >
              Tax value{" "}
            </label>
            <div className="flex justify-between items-center gap-[20px]">
              <div className="flex-shrink-0 w-[88%] xl:w-full relative">
                <Select className="">
                  <SelectTrigger className="w-full ps-[40px]  text-base border !py-6 bg-white">
                    <SelectValue placeholder="12" />
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
                  <AiOutlinePercentage />
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
          <div>
            <label
              htmlFor=""
              className="font-manrope font-semibold text-[#2C2C2C] mb-[5px] block"
            >
              Tax value{" "}
            </label>
            <div className="flex justify-between items-center gap-[20px]">
              <div className="flex-shrink-0 w-[88%] xl:w-full relative">
                <Select className="w-[88%]">
                  <SelectTrigger className="w-full ps-[40px]  text-base border !py-6 bg-white">
                    <SelectValue placeholder="12" />
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
                  <AiOutlinePercentage />
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
        </div>
      </div>
    </div>
  );
}
