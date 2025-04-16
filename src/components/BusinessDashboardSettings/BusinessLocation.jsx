import {
  Select,
  SelectContent,
  SelectGroup,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Link } from "react-router-dom";
import locationImg from "../../assets/images/locationImg/locationImg.png";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import {
  ActionDeleteSvg,
  DropdownSvg,
  ViewOnName,
} from "../svgContainer/SvgContainer";

const BusinessLocation = () => {
  return (
    <Link to={"/businessDashboard/locationsetuppage"}>
      <div className="flex sm:gap-[9px] gap-3 items-centers">
        {/* This is the first div */}
        <div>
          <p className="text-textSecondary font-outfit text-[28px] font-semibold leading-[33.6px]">
            Locations
          </p>
          <p className="text-textColor font-manrope text-base font-normal leading-6 mt-2">
            Manage info and preferences of locations within your business.{" "}
            <span className="text-[#5E22DD] underline">Learn more.</span>
          </p>
        </div>
        {/* This is the second div */}
        <div>
          <div className="flex flex-col sm:flex-row gap-2">
            <Select>
              <SelectTrigger className="w-[120px] h-11">
                <SelectValue
                  className="text-[#000] font-semibold"
                  placeholder="Option"
                />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <Link value="apple">Create a share link</Link>
                </SelectGroup>
              </SelectContent>
            </Select>
            <button className="bg-[#1E1E1E] rounded-[10px] text-white py-[10px] px-[18px]">
              Add
            </button>
          </div>
        </div>
      </div>
      {/*  */}
      <div className="border border-[#DFE1E6] mt-8 lg:p-8 p-4 rounded-2xl">
        {/* This is the left side div */}
        <div className="flex flex-col sm:flex-row justify-between items-center">
          <div className="flex gap-[14px]">
            <figure className="w-[177px] h-[117px] rounded-lg overflow-hidden">
              <img
                className="w-full h-full object-cover cursor-pointer transition-transform duration-500 ease-out hover:scale-[1.1] hover:shadow-[0px_4px_8px_rgba(0,0,0,0.1)] will-change-transform"
                src={locationImg}
                alt=""
              />
            </figure>
            {/*  */}
            <div>
              <p className="text-textColor font-manrope text-lg font-bold leading-[27px]">
                SR
              </p>
              <p className="text-textColor font-manrope text-base font-normal leading-6">
                Bus Stand, Dhaka (Mirpur), Dhaka Division
              </p>
              <p className="text-textLight font-manrope text-sm font-normal leading-[21px]">
                No Review yet
              </p>
            </div>
          </div>
          {/* This is the right side div */}
          <div>
            <Popover>
              <PopoverTrigger>
                <button className="px-4 py-[10px] flex gap-2 items-center outline-none border border-[#DFE1E6] sm:rounded-[100px] rounded-lg mt-5 sm:mt-0 w-[300px] sm:w-full justify-between sm:justify-normal">
                  <p className="text-textColor font-manrope text-base font-bold leading-6">
                    Action
                  </p>
                  <DropdownSvg />
                </button>
              </PopoverTrigger>
              <PopoverContent className="w-[190px] p-4">
                <div className="space-y-4">
                  <button className="flex gap-2 items-center">
                    <ViewOnName />
                    <p className="text-textColor text-base font-manrope font-medium leading-6">
                      View on name
                    </p>
                  </button>
                  <button className="flex gap-2 items-center">
                    <ActionDeleteSvg />
                    <p className="text-[#D21837] text-base font-manrope font-medium leading-6">
                      Delete Location
                    </p>
                  </button>
                </div>
              </PopoverContent>
            </Popover>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default BusinessLocation;
