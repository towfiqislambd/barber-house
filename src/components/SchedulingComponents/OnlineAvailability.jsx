import { Link } from "react-router-dom";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";

export default function OnlineAvailability() {
  const listStyle =
    "flex gap-[10px] items-center text-[#2C2C2C] font-manrope font-medium py-[9px]";

  return (
    <div className="pb-[100px] px-6 lg:px-0 py-6 md:py-0">
      <div className="flex gap-[20px] lg:justify-end justify-start container">
        <Link to="/businessDashboard/scheduling">
          <button className="border border-[#DFE1E6] rounded-[8px] text-[#2C2C2C] font-manrope text-base sm:text-[20px] font-semibold 2xl:p-[14px] py-2 xl:min-w-[218px] min-w-[120px] hover:bg-[#008A90] hover:text-[#FFF] transition-all duration-300 hover:scale-95">
            Close
          </button>
        </Link>
        <button className="border border-[#DFE1E6] rounded-[8px] bg-[#008A90] text-[#FFF] font-manrope text-base sm:text-[20px] font-semibold 2xl:p-[14px] py-2 xl:min-w-[218px] min-w-[120px] hover:scale-95 transition-all duration-300">
          Save
        </button>
      </div>
      <div className="xl:w-[700px] mx-auto sm:mt-10 mt-5 xl:mt-0">
        <h3 className="text-[#1E1E1E] font-outfit text-[36px] font-semibold leading-[43px] mb-[14px]">
          Online availability
        </h3>
        <h5 className="text-[#545454] font-manrope mb-[5px] font-semibold">
          Availability
        </h5>
        <p className="text-[#2C2C2C] font-manrope  mb-[26px]">
          Set before appointment buffer time, and choose how far in the future
          clients can book online.
        </p>

        <form action="">
          <div className="flex flex-col gap-[20px]">
            <div>
              <label
                htmlFor=""
                className="mb-[10px] text-[#2C2C2C] font-manrope font-semibold block"
              >
                Clients can book appointments
              </label>
              <div className="mb-[5px]">
                <Select>
                  <SelectTrigger className="w-full text-base border !py-6 bg-white">
                    <SelectValue placeholder="Immediately" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="Active">Immediately</SelectItem>
                    <SelectItem value="Up to 15 minutes before start time">
                      Up to 15 minutes before start time
                    </SelectItem>
                    <SelectItem value="Up to 30 minutes before start time">
                      Up to 30 minutes before start time
                    </SelectItem>
                    <SelectItem value="Up to 1 hour before start time">
                      Up to 1 hour before start time
                    </SelectItem>
                    <SelectItem value="Up to 2 hours before start time">
                      Up to 2 hours before start time
                    </SelectItem>
                    <SelectItem value="Up to 3 hours before start time">
                      Up to 3 hours before start time
                    </SelectItem>
                    <SelectItem value="Up to 4 hours before start time">
                      Up to 4 hours before start time
                    </SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <Select>
                <SelectTrigger className="w-full text-base border !py-6 bg-white">
                  <SelectValue placeholder="No more than 5 month in the " />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="Active">
                    No more than 5 month in the{" "}
                  </SelectItem>
                  <SelectItem value="No more than 6 months in the future">
                    No more than 6 months in the future
                  </SelectItem>
                  <SelectItem value="No more than 4 months in the future">
                    No more than 4 months in the future
                  </SelectItem>
                  <SelectItem value="No more than 3 months in the future">
                    No more than 3 months in the future
                  </SelectItem>
                  <SelectItem value="No more than 2 months in the future">
                    No more than 2 months in the future
                  </SelectItem>
                  <SelectItem value="No more than 1 month in the future">
                    No more than 1 month in the future
                  </SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div>
              <ul className="flex flex-col gap-[8px]">
                <li className={listStyle}>
                  <Checkbox className="w-[20px] h-[20px]"></Checkbox>
                  Allow clients to select team members
                </li>
              </ul>
              <div className="py-[15px]">
                <h5 className="text-[#545454] font-manrope mb-[5px] font-semibold">
                  Allow group appointments
                </h5>
                <p className="text-[#2C2C2C] font-manrope  mb-[10px]">
                  Allow customers to book and manage appointments online for
                  multiple people.
                </p>
              </div>
              <ul className="flex flex-col gap-[8px]">
                <li className={listStyle}>
                  <Checkbox className="w-[20px] h-[20px]"></Checkbox>
                  Allow clients to select team members
                </li>
              </ul>
            </div>
            <div>
              <h5 className="text-[#2C2C2C] font-manrope mb-[5px] mt-[15px] text-[20px] font-semibold">
                Availability
              </h5>
              <p className="text-[#2C2C2C] font-manrope  mb-[10px]">
                Set how far in advance clients can cancel or reschedule online,
                after this timeframe clients must call to change their
                appointment.
              </p>
            </div>

            <div>
              <label
                htmlFor=""
                className="mb-[10px] text-[#2C2C2C] font-manrope font-semibold block"
              >
                Clients can cancel or reschedule
              </label>
              <Select>
                <SelectTrigger className="w-full text-base border !py-6 bg-white">
                  <SelectValue placeholder="Anytime" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="Active">
                    Up to 30 minutes in advance
                  </SelectItem>
                  <SelectItem value="Up to 1 hour in advance">
                    Up to 1 hour in advance
                  </SelectItem>
                  <SelectItem value="Up to 2 hours in advance">
                    Up to 2 hours in advance
                  </SelectItem>
                  <SelectItem value="Up to 3 hours in advance">
                    Up to 3 hours in advance
                  </SelectItem>
                </SelectContent>
              </Select>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
