import { Link } from "react-router-dom";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export default function BlockedTimeEdit() {
  return (
    <div>
      <div className="container pt-5 md:pt-0">
        <div className="flex gap-[20px] justify-end">
          <Link to="/businessDashboard/scheduling">
            <button className="border border-[#DFE1E6] rounded-[8px] text-[#2C2C2C] font-manrope text-base md:text-[20px] font-semibold 2xl:p-[14px] py-2 xl:min-w-[218px] min-w-[120px] hover:bg-[#008A90] hover:text-[#FFF] transition-all duration-300 hover:scale-95">
              Close
            </button>
          </Link>
          <button className="border border-[#DFE1E6] rounded-[8px] bg-[#008A90] text-[#FFF] font-manrope text-base md:text-[20px] font-semibold 2xl:p-[14px] py-2 xl:min-w-[218px] min-w-[120px] hover:scale-95 transition-all duration-300">
            Save
          </button>
        </div>
        <div className="lg:w-[700px] mx-auto mt-5 md:mt-0">
          <h3 className="text-[#1E1E1E] font-outfit text-3xl md:text-[36px] font-semibold leading-[43px] md:mb-[14px]">
            Edit blocked time type
          </h3>
          <h5 className="text-[#545454] font-manrope font-medium md:mb-[26px] mb-4"></h5>
          <form action="">
            <div className="flex flex-col gap-[16px]">
              <div>
                <label
                  htmlFor=""
                  className="mb-[10px] text-[#2C2C2C] font-manrope font-semibold block"
                >
                  Type{" "}
                </label>
                <div className="flex items-center gap-[20px]">
                  <div className="border rounded-[8px] md:p-[12px] p-2 w-[12%]">
                    <div>Emoji</div>
                  </div>
                  <div className="flex-shrink-0 lg:w-[88%] w-[84%]">
                    <input
                      type="text"
                      className="border rounded-[8px] py-[12px] px-[16px]  hover:outline-none w-full "
                      placeholder="e.g. Training break, Coffee break"
                    />
                  </div>
                </div>
              </div>

              <div>
                <label
                  htmlFor=""
                  className="mb-[10px] text-[#2C2C2C] font-manrope font-semibold block"
                >
                  Duration
                </label>
                <Select>
                  <SelectTrigger className="w-full text-base border !py-6 bg-white">
                    <SelectValue placeholder="1 hour" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="Active">1 hour</SelectItem>
                    <SelectItem value="1 hour 5 minutes">
                      1 hour 5 minutes
                    </SelectItem>
                    <SelectItem value="1 hour 10 minutes">
                      1 hour 10 minutes
                    </SelectItem>
                    <SelectItem value="1 hour 15 minutes">
                      1 hour 15 minutes
                    </SelectItem>
                    <SelectItem value="1 hour 20 minutes">
                      1 hour 20 minutes
                    </SelectItem>
                    <SelectItem value="1 hour 25 minutes">
                      1 hour 25 minutes
                    </SelectItem>
                    <SelectItem value="1 hour 30 minutes">
                      1 hour 30 minutes
                    </SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div>
                <label
                  htmlFor=""
                  className="mb-[10px] text-[#2C2C2C] font-manrope font-semibold block"
                >
                  Compensation
                </label>
                <Select>
                  <SelectTrigger className="w-full text-base border !py-6 bg-white">
                    <SelectValue placeholder="Paid" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="Active">Paid</SelectItem>
                    <SelectItem value="Team member">Un Paid</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
}
