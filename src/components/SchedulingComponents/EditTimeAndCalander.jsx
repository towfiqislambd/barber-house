import { useState } from "react";
import { Link } from "react-router-dom";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

export default function EditTimeAndCalander() {
  const [selectedTimeZone, setSelectedTimeZone] = useState("");

  const handleChange = (event) => {
    setSelectedTimeZone(event.target.value);
  };
  const timeZones = [
    { id: 1, name: "Pacific/Midway", offset: "-11:00" },
    { id: 2, name: "Pacific/Honolulu", offset: "-10:00" },
    { id: 3, name: "America/Anchorage", offset: "-09:00" },
    { id: 4, name: "America/Los_Angeles", offset: "-08:00" },
    { id: 5, name: "America/Denver", offset: "-07:00" },
    { id: 6, name: "America/Chicago", offset: "-06:00" },
    { id: 7, name: "America/New_York", offset: "-05:00" },
    { id: 8, name: "America/Caracas", offset: "-04:00" },
    { id: 9, name: "America/Halifax", offset: "-04:00" },
    { id: 10, name: "America/St_Johns", offset: "-03:30" },
    { id: 11, name: "America/Argentina/Buenos_Aires", offset: "-03:00" },
    { id: 12, name: "America/Sao_Paulo", offset: "-03:00" },
    { id: 13, name: "Atlantic/South_Georgia", offset: "-02:00" },
    { id: 14, name: "Atlantic/Azores", offset: "-01:00" },
    { id: 15, name: "Europe/London", offset: "+00:00" },
    { id: 16, name: "Europe/Berlin", offset: "+01:00" },
    { id: 17, name: "Europe/Paris", offset: "+01:00" },
    { id: 18, name: "Europe/Athens", offset: "+02:00" },
    { id: 19, name: "Africa/Cairo", offset: "+02:00" },
    { id: 20, name: "Europe/Moscow", offset: "+03:00" },
    { id: 21, name: "Asia/Tehran", offset: "+03:30" },
    { id: 22, name: "Asia/Dubai", offset: "+04:00" },
    { id: 23, name: "Asia/Kabul", offset: "+04:30" },
    { id: 24, name: "Asia/Karachi", offset: "+05:00" },
    { id: 25, name: "Asia/Kolkata", offset: "+05:30" },
    { id: 26, name: "Asia/Kathmandu", offset: "+05:45" },
    { id: 27, name: "Asia/Dhaka", offset: "+06:00" },
    { id: 28, name: "Asia/Yangon", offset: "+06:30" },
    { id: 29, name: "Asia/Bangkok", offset: "+07:00" },
    { id: 30, name: "Asia/Shanghai", offset: "+08:00" },
    { id: 31, name: "Asia/Tokyo", offset: "+09:00" },
    { id: 32, name: "Australia/Adelaide", offset: "+09:30" },
    { id: 33, name: "Australia/Sydney", offset: "+10:00" },
    { id: 34, name: "Pacific/Guam", offset: "+10:00" },
    { id: 35, name: "Pacific/Auckland", offset: "+12:00" },
    { id: 36, name: "Pacific/Fiji", offset: "+12:00" },
  ];
  return (
    <div className="px-6 lg:px-0">
      <div className="container mt-10 md:mt-0 ">
        <div className="flex md:gap-[20px] gap-3 justify-end">
          <Link to="/businessDashboard/scheduling">
            <button className="border border-[#DFE1E6] rounded-[8px] text-[#2C2C2C] font-manrope md:text-xl text-base font-semibold 2xl:p-[14px] p-2 md:min-w-[218px] hover:bg-primary hover:text-[#FFF] transition-all duration-300 hover:scale-95">
              Close
            </button>
          </Link>
          <button className="border border-[#DFE1E6] rounded-[8px] bg-primary text-[#FFF] font-manrope md:text-xl text-base font-semibold 2xl:p-[14px] p-2 md:min-w-[218px] hover:scale-95 transition-all duration-300">
            Save
          </button>
        </div>
        <div className="lg:w-[700px] mx-auto mt-5 2xl:mt-0">
          <h3 className="text-[#1E1E1E] font-outfit md:text-[36px] sm:text-3xl text-2xl font-semibold leading-[43px] sm:mb-[14px]">
            Time and calendar settings
          </h3>
          <h5 className="text-[#545454] font-manrope font-medium sm:mb-[26px] mb-2"></h5>
          <form action="">
            <div className="flex flex-col gap-[16px]">
              <div>
                <label
                  htmlFor=""
                  className="mb-[10px] text-[#2C2C2C] font-manrope font-semibold block"
                >
                  Time zone
                </label>
                <Select>
                  <SelectTrigger className="w-full text-base border !py-6 bg-white">
                    <SelectValue placeholder="Select a time zone" />
                  </SelectTrigger>
                  <SelectContent>
                    {timeZones.map((zone) => (
                      <SelectItem key={zone.id} value={zone.name}>
                        {" "}
                        {zone.name} (UTC{zone.offset})
                      </SelectItem>
                    ))}
                    {/* {selectedTimeZone && (
                       <p>Selected Time Zone: {selectedTimeZone}</p>
                     )} */}
                  </SelectContent>
                </Select>
              </div>

              <div>
                <label
                  htmlFor=""
                  className="mb-[10px] text-[#2C2C2C] font-manrope font-semibold block"
                >
                  Time format
                </label>
                <Select>
                  <SelectTrigger className="w-full text-base border !py-6 bg-white">
                    <SelectValue placeholder="12 hours (e.g. 9:00pm)" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="Active">
                      12 hours (e.g. 9:00pm)
                    </SelectItem>
                    <SelectItem value="24">24 hours (e.g. 21:00)</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div>
                <label
                  htmlFor=""
                  className="mb-[10px] text-[#2C2C2C] font-manrope font-semibold block"
                >
                  First day of the week
                </label>
                <Select>
                  <SelectTrigger className="w-full text-base border !py-6 bg-white">
                    <SelectValue placeholder="Saturday" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="Active">Saturday</SelectItem>
                    <SelectItem value="Sunday">Sunday</SelectItem>
                    <SelectItem value="Monday">Monday</SelectItem>
                    <SelectItem value="Tuesday">Tuesday</SelectItem>
                    <SelectItem value="Wednesday">Wednesday</SelectItem>
                    <SelectItem value="Tuesday">Tuesday</SelectItem>
                    <SelectItem value="Friday">Friday</SelectItem>
                  </SelectContent>
                </Select>
              </div>

              <div>
                <h3 className="mb-[5px] mt-[15px] font-manrope font-semibold text-[20px]">
                  Calendar
                </h3>
              </div>

              <div>
                <label
                  htmlFor=""
                  className="mb-[10px] text-[#2C2C2C] font-manrope font-semibold block"
                >
                  Appointment colour source
                </label>
                <Select>
                  <SelectTrigger className="w-full text-base border !py-6 bg-white">
                    <SelectValue placeholder="Service group" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="Active">Service group</SelectItem>
                    <SelectItem value="Team member">Team member</SelectItem>
                    <SelectItem value="Status">Status</SelectItem>
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
