import { Link } from "react-router-dom";

export default function TimeAndCalander() {
  return (
    <div className="3xl:w-[768px] mb-10 md:mb-0">
      <div>
        <div className="mb-[24px]">
          <h4 className="mb-[9px] text-[#1E1E1E] font-outfit text-2xl sm:text-[28px] font-semibold">
            Time and calendar
          </h4>
          <p className="">Choose the time and date format for your business.</p>
        </div>
        <div className="3xl:w-[650px] border border-[#DFE1E6] sm:p-[32px] p-4 rounded-[16px]">
          <div className="flex flex-col gap-[23px]">
            <div className="flex justify-between">
              <div>
                <h4 className="text-[#2C2C2C] font-outfit text-[24px] font-medium">
                  Settings
                </h4>
              </div>
              <div>
                <Link to="/businessDashboard/edittimeandcalander">
                  <button className="text-[#2C2C2C] font-manrope font-semibold py-[8px] px-[12px] rounded-[8px] border border-[#757575]">
                    Edit
                  </button>
                </Link>
              </div>
            </div>

            <div className="flex flex-col gap-[20px]">
              <div className="flex flex-col sm:flex-row gap-[20px]">
                <div className="sm:w-[50%]">
                  <h4 className="text-[#2C2C2C] font-manrope text-[18px] font-semibold mb-[5px]">
                    Time zone
                  </h4>
                  <p className="text-[#545454] font-manrope font-medium">
                    (GMT +06:00) Dhaka
                  </p>
                </div>
                <div className="sm:w-[50%]">
                  <h4 className="text-[#2C2C2C] font-manrope text-[18px] font-semibold mb-[5px]">
                    Time format
                  </h4>
                  <p className="text-[#545454] font-manrope font-medium">
                    24 hours (e.g. 21:00)
                  </p>
                </div>
              </div>
              <div className="flex flex-col sm:flex-row gap-[20px]">
                <div className="sm:w-[50%]">
                  <h4 className="text-[#2C2C2C] font-manrope text-[18px] font-semibold mb-[5px]">
                    First day of the week{" "}
                  </h4>
                  <p className="text-[#545454] font-manrope font-medium">
                    Monday
                  </p>
                </div>
                <div className="sm:w-[50%]">
                  <h4 className="text-[#2C2C2C] font-manrope text-[18px] font-semibold mb-[5px]">
                    Appointment colour source
                  </h4>
                  <p className="text-[#545454] font-manrope font-medium">
                    Team member
                  </p>
                </div>
              </div>
              <div className="flex flex-col sm:flex-row gap-[20px]">
                <div className="sm:w-[50%]">
                  <h4 className="text-[#2C2C2C] font-manrope text-[18px] font-semibold mb-[5px]">
                    Team default language
                  </h4>
                  <p className="text-[#545454] font-manrope font-medium">
                    English (English)
                  </p>
                </div>
                <div className="sm:w-[50%]">
                  <h4 className="text-[#2C2C2C] font-manrope text-[18px] font-semibold mb-[5px]">
                    Client default language
                  </h4>
                  <p className="text-[#545454] font-manrope font-medium">
                    English (English)
                  </p>
                </div>
              </div>
            </div>
            <div className="py-[16px] xl:px-[36px] px-4 bg-[#F2F2F2] rounded-[10px]">
              <p className="text-[#000] font-manrope font-medium">
                Daylight savings changes will automatically apply based on your
                selected time zone
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
