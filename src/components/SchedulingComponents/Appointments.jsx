import { Checkbox } from "@/components/ui/checkbox";
import { Switch } from "antd";
import { Link } from "react-router-dom";

export default function Appointments() {
  const listStyle =
    "flex 2xl:gap-[10px] lg:gap-1 gap-2 items-center text-[#2C2C2C] font-manrope font-medium py-[9px] sm:text-base text-sm";

  const onChange = (checked) => {
    console.log(`switch to ${checked}`);
  };

  return (
    <div className="3xl:w-[1000px] xl:pb-[100px] pb-10">
      <div className="mb-[24px] flex justify-between items-center">
        <div>
          <h4 className="mb-[9px] text-[#1E1E1E] font-outfit text-[28px] font-semibold">
            Appointments
          </h4>
          <p className="text-[16px]">
            Customise preferences for clients to book appointments using Fresha
            marketplace or your booking.
          </p>
        </div>
      </div>
      <div className="flex flex-col gap-[24px]">
        <div className="border border-[#DFE1E6] 2xl:p-[32px] p-4 rounded-[16px]">
          <div className="flex justify-between items-center mb-[24px]">
            <div>
              <h4 className="text-[#2C2C2C] font-outfit text-[22px] sm:text-[24px] font-medium mb-[16px]">
                Online availability
              </h4>
              <p className="text-[#545454] font-manrope font-medium">
                Choose how clients can book online.
              </p>
            </div>
            <div>
              <Link to="/businessDashboard/onlineavailability">
                <button className="text-[#2C2C2C] font-manrope font-semibold py-[8px] px-[12px] rounded-[8px] border border-[#757575]">
                  Edit
                </button>
              </Link>
            </div>
          </div>
          <div>
            <ul className="flex flex-col gap-[8px]">
              <li className={listStyle}>
                <Checkbox className="w-[20px] h-[20px]"></Checkbox>
                Clients can book appointments
                <strong className="hidden xl:block">immediately</strong> before
                start time, and no more than
                <strong className="hidden xl:block">5 months</strong>in the
                future.
              </li>
              <li className={listStyle}>
                <Checkbox className="w-[20px] h-[20px]"></Checkbox>
                Clients can choose team members for their appointments.
              </li>
              <li className={listStyle}>
                <Checkbox className="w-[20px] h-[20px]"></Checkbox>
                Online booking allowed during blocked time
              </li>
              <li className={listStyle}>
                <Checkbox className="w-[20px] h-[20px]"></Checkbox>
                Clients can book as a group.
              </li>
              <li className={listStyle}>
                <Checkbox className="w-[20px] h-[20px]"></Checkbox>
                Clients are allowed to cancel or reschedule up to
                <strong className="hidden md:block">30 minutes</strong>in
                advance.
              </li>
            </ul>
          </div>
        </div>
        <div className="border border-[#DFE1E6] 2xl:p-[32px] p-4 rounded-[16px]">
          <div className="flex justify-between items-center mb-[24px]">
            <div>
              <h4 className="text-[#2C2C2C] font-outfit text-[22px] sm:text-[24px] font-medium mb-[16px]">
                Optimise online bookings
              </h4>
              <p className="text-[#545454] font-manrope font-medium">
                Reduce gaps in your calendar and improve occupancy by selecting
                which time slots clients can book online
              </p>
            </div>
            <div>
              <Link to="/businessDashboard/optimizeonlinebooking">
                <button className="text-[#2C2C2C] font-manrope font-semibold py-[8px] px-[12px] rounded-[8px] border border-[#757575]">
                  Edit
                </button>
              </Link>
            </div>
          </div>
          <div>
            <ul className="flex flex-col gap-[8px]">
              <li className={listStyle}>
                <Checkbox className="w-[20px] h-[20px]"></Checkbox>
                Show all available time slots.
              </li>
              <li className={listStyle}>
                <Checkbox className="w-[20px] h-[20px]"></Checkbox>
                Display time slot intervals of 15 minutes.
              </li>
            </ul>
          </div>
        </div>

        <div className="border border-[#DFE1E6] 2xl:p-[32px] p-4 rounded-[16px]">
          <div className="flex justify-between items-center mb-[24px]">
            <div>
              <h4 className="text-[#2C2C2C] font-outfit text-[22px] sm:text-[24px] font-medium mb-[16px]">
                Team member rating
              </h4>
              <p className="text-[#545454] font-manrope font-medium mb-[23px] text-sm sm:text-base">
                Show clients average star ratings for your team members when
                booking.
              </p>
              <p className="text-[#2C2C2C] font-manrope font-medium text-sm sm:text-base">
                Display star ratings next to team members
              </p>
            </div>
            <div>
              <Switch className="" onChange={onChange} />
            </div>
          </div>
        </div>

        <div className="border border-[#DFE1E6] 2xl:p-[32px] p-4 rounded-[16px]">
          <div className="flex justify-between items-center mb-[24px]">
            <div>
              <h4 className="text-[#2C2C2C] font-outfit text-[22px] sm:text-[24px] font-medium mb-[16px]">
                Featured services
              </h4>
              <p className="text-[#545454] font-manrope font-medium mb-[23px] text-sm sm:text-base">
                Show clients your top 6 most popular discounted services when
                booking.
              </p>
              <p className="text-[#2C2C2C] font-manrope font-medium text-sm sm:text-base">
                Display featured services to your clients
              </p>
            </div>
            <div>
              <Switch className="" onChange={onChange} />
            </div>
          </div>
        </div>

        <div className="border border-[#DFE1E6] 2xl:p-[32px] p-4 rounded-[16px]">
          <div className="flex justify-between items-center mb-[24px]">
            <div>
              <h4 className="text-[#2C2C2C] font-outfit text-[22px] sm:text-[24px] font-medium mb-[16px]">
                Notifications
              </h4>
              <p className="text-[#545454] font-manrope font-medium text-sm sm:text-base">
                Send emails to team members when clients book, reschedule or
                cancel appointments online.
              </p>
            </div>
            <div>
              <Link to="/businessDashboard/notification">
                <button className="text-[#2C2C2C] font-manrope font-semibold py-[8px] px-[12px] rounded-[8px] border border-[#757575]">
                  Edit
                </button>
              </Link>
            </div>
          </div>
          <div>
            <ul className="sm:flex sm:flex-col gap-[8px] hidden">
              <li className={listStyle}>
                <Checkbox className="w-[20px] h-[20px]"></Checkbox>
                <p className="text-wrap hidden sm:block">
                  Send to specific email addresses:mamunur.servey@gmail.com
                </p>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}
