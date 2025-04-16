import { useState } from "react";
import { Link } from "react-router-dom";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";

export default function OptimizeOnlineBook() {
  const [isVisible, setIsVisible] = useState(false);

  const handleToggle = () => {
    setIsVisible((prev) => !prev);
  };

  return (
    <div className="pb-[100px] px-5 lg:px-0 py-5 md:py-0">
      <div className="flex gap-[20px] justify-end container">
        <Link to="/businessDashboard/scheduling">
          <button className="border border-[#DFE1E6] rounded-[8px] text-[#2C2C2C] font-manrope text-base sm:text-[20px] font-semibold 2xl:p-[14px] py-2 xl:min-w-[218px] min-w-[120px] hover:bg-[#008A90] hover:text-[#FFF] transition-all duration-300 hover:scale-95">
            Close
          </button>
        </Link>
        <button className="border border-[#DFE1E6] rounded-[8px] bg-[#008A90] text-[#FFF] font-manrope text-base sm:text-[20px] font-semibold 2xl:p-[14px] py-2 xl:min-w-[218px] min-w-[120px] hover:scale-95 transition-all duration-300">
          Save
        </button>
      </div>
      <div className="2xl:w-[700px] mx-auto mt-5 2xl:mt-0">
        <h3 className="text-[#1E1E1E] font-outfit text-3xl xl:text-[36px] font-semibold leading-[43px] mb-[14px]">
          Booking optimization
        </h3>
        <p className="text-[#2C2C2C] font-manrope  mb-[26px]">
          Reduce gaps in your calendar and improve occupancy by selecting which
          time slots clients can book online
        </p>

        <form action="">
          <div className="flex flex-col gap-[20px]">
            <div>
              <div className="mb-[5px]">
                <div className="mb-[16px]">
                  <ul>
                    <li className="flex gap-[10px]">
                      <div className="mt-[5px]">
                        <Checkbox className="w-[20px] h-[20px]"></Checkbox>
                      </div>
                      <div>
                        <h5 className="mb-[10px] text-[#2C2C2C] font-manrope text-base xl:text-[20px] font-medium">
                          Regular time slots
                        </h5>
                        <p className="text-[#2C2C2C] font-manrope font-medium">
                          Show all available time slots based on your time slot
                          interval. This may create gaps in your calendar
                        </p>
                      </div>
                    </li>
                  </ul>
                </div>
                <div className="mb-[16px]">
                  <ul>
                    <li className="flex gap-[10px]">
                      <div className="mt-[5px]">
                        <Checkbox
                          className="w-[20px] h-[20px]"
                          onClick={handleToggle}
                        ></Checkbox>
                      </div>
                      <div>
                        <h5 className="mb-[10px] text-[#2C2C2C] font-manrope text-base xl:text-[20px] font-medium">
                          Eliminate calendar gaps
                        </h5>
                        <p className="text-[#2C2C2C] font-manrope font-medium mb-[20px]">
                          Only show slots before and after existing appointments
                          and blocked time. This may limit your online
                          availability
                        </p>

                        {isVisible && (
                          <div className="mt-4 p-3 rounded-md">
                            <ul className="flex flex-col gap-[20px]">
                              <li className="flex gap-[10px]">
                                <span>
                                  <Checkbox className="w-[20px] h-[20px]"></Checkbox>
                                </span>
                                <span>At the start and end of the day</span>
                              </li>
                              <li className="flex gap-[10px]">
                                <span>
                                  <Checkbox className="w-[20px] h-[20px]"></Checkbox>
                                </span>
                                <span>At the start of the day</span>
                              </li>
                              <li className="flex gap-[10px]">
                                <span>
                                  <Checkbox className="w-[20px] h-[20px]"></Checkbox>
                                </span>
                                <span>At the end of the day</span>
                              </li>
                            </ul>
                          </div>
                        )}
                      </div>
                    </li>
                  </ul>
                </div>
                <div className="ml-[30px] mb-[20px]">
                  <label
                    htmlFor=""
                    className="mb-[10px] text-[#2C2C2C] font-manrope font-semibold block"
                  >
                    Allow gaps that are at least
                  </label>
                  <Select>
                    <SelectTrigger className="w-full text-base border !py-6 bg-white">
                      <SelectValue placeholder="10 minutes" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="Active">10 minutes</SelectItem>
                      <SelectItem value="15 minutes">15 minutes</SelectItem>
                      <SelectItem value="20 minutes">20 minutes</SelectItem>
                      <SelectItem value="25 minutes">25 minutes</SelectItem>
                      <SelectItem value="30 minutes">30 minutes</SelectItem>
                      <SelectItem value="35 minutes">35 minutes</SelectItem>
                      <SelectItem value="40 minutes">35 minutes</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="mb-[16px]">
                  <ul>
                    <li className="flex gap-[10px]">
                      <div className="mt-[5px]">
                        <Checkbox className="w-[20px] h-[20px]"></Checkbox>
                      </div>
                      <div>
                        <h5 className="mb-[10px] text-[#2C2C2C] font-manrope text-base xl:text-[20px] font-medium">
                          Regular time slots
                        </h5>
                        <p className="text-[#2C2C2C] font-manrope font-medium">
                          Show all available time slots based on your time slot
                          interval. This may create gaps in your calendar
                        </p>
                      </div>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            <div>
              <label
                htmlFor=""
                className="mb-[10px] text-[#2C2C2C] font-manrope font-semibold block"
              >
                Time slot interval
              </label>
              <Select>
                <SelectTrigger className="w-full text-base border !py-6 bg-white">
                  <SelectValue placeholder="Anytime" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="Active">10 minutes</SelectItem>
                  <SelectItem value="15 minutes">15 minutes</SelectItem>
                  <SelectItem value="20 minutes">20 minutes</SelectItem>
                  <SelectItem value="25 minutes">25 minutes</SelectItem>
                  <SelectItem value="30 minutes">30 minutes</SelectItem>
                  <SelectItem value="35 minutes">35 minutes</SelectItem>
                  <SelectItem value="40 minutes">40 minutes</SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
