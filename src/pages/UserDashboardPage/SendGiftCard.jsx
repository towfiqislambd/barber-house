import React from "react";
import BookingImg from "../../assets/images/appoirment-img.png";
import Currency from "../../assets/images/currency.png";
import { Link } from "react-router-dom";
import { DatePicker } from "antd";
import { TimePicker } from "antd";
import dayjs from "dayjs";

export default function SendGiftCard() {
  const onChange = (date, dateString) => {
    console.log(date, dateString);
  };
  const startTime = dayjs("12:08:23", "HH:mm:ss");
  const endTime = dayjs("12:08:23", "HH:mm:ss");
  const format = "h:mm:ss a";
  return (
    <div>
      <h3 className="text-[#2C2C2C] font-outfit text-[36px] font-medium mb-[40px]">
        Send gift cards
      </h3>
      <div className="flex gap-[30px]">
        <div className="flex-shrink-0 w-[814px]">
          <div>
            <form action="">
              <div className="flex flex-col gap-[32px]">
                <div>
                  <label
                    class="text-[#2C2C2C] block text-[18px] font-semibold font-manrope leading-[27px] mb-[8px]"
                    for=""
                  >
                    Gift cards from
                  </label>
                  <input
                    class="py-[14px] px-[20px] font-manrope text-[18px] font-medium w-full border border-[#d4d4d4] focus:border-primary focus:outline-none rounded-[8px]"
                    placeholder="Write sender name"
                    type="text"
                  />
                </div>
                <div>
                  <label
                    class="text-[#2C2C2C] block text-[18px] font-semibold font-manrope leading-[27px] mb-[8px]"
                    for=""
                  >
                    Gift cards to
                  </label>
                  <input
                    class="py-[14px] px-[20px] font-manrope text-[18px] font-medium w-full border border-[#d4d4d4] focus:border-primary focus:outline-none rounded-[8px]"
                    placeholder="Write recipient name"
                    type="text"
                  />
                </div>
                <div>
                  <label
                    class="text-[#2C2C2C] block text-[18px] font-semibold font-manrope leading-[27px] mb-[8px]"
                    for=""
                  >
                    Write recipient email address
                  </label>
                  <input
                    class="py-[14px] px-[20px] font-manrope text-[18px] font-medium w-full border border-[#d4d4d4] focus:border-primary focus:outline-none rounded-[8px]"
                    placeholder="Write recipient name"
                    type="email"
                  />
                </div>
                <div>
                  <label
                    class="text-[#2C2C2C] block text-[18px] font-semibold font-manrope leading-[27px] mb-[8px]"
                    for=""
                  >
                    Message
                  </label>
                  <textarea
                    className="py-[14px] px-[20px] font-manrope text-[18px] font-medium w-full border border-[#d4d4d4] focus:border-primary focus:outline-none rounded-[8px] min-h-[100px]"
                    name=""
                    id=""
                    placeholder="Write anything..."
                  ></textarea>
                </div>
                <div>
                  <label
                    class="text-[#2C2C2C] block text-[18px] font-semibold font-manrope leading-[27px] mb-[8px]"
                    for=""
                  >
                    Choose date
                  </label>

                  <div>
                    <DatePicker
                      onChange={onChange}
                      placeholder={"Choose a  send date"}
                      className="w-full min-h-[56px] custom-date-picker"
                    />
                  </div>
                </div>
                <div>
                  <label
                    class="text-[#2C2C2C] block text-[18px] font-semibold font-manrope leading-[27px] mb-[20px]"
                    for=""
                  >
                    Choose Time
                  </label>
                  <div className="flex gap-[20px]">
                    <TimePicker.RangePicker
                      defaultValue={[startTime, endTime]}
                      format={format}
                      className="w-full min-h-[56px] custom-date-picker"
                    />
                  </div>
                </div>
              </div>
            </form>
          </div>
        </div>

        {/*Start:: Right card  */}
        <div className="flex-shrink-0 w-[400px] border border-borderColorLight rounded-[16px] p-[30px] h-max">
          <div className="overflow-hidden rounded-tl-[8px] rounded-tr-[8px] h-[200px] mb-[20px]">
            <img
              src={BookingImg}
              className="w-full h-full object-cover"
              alt=""
            />
          </div>
          <div className="flex flex-col gap-[64px]">
            <div>
              <h4 className="text-[#545454] mb-[8px] font-outfit text-[24px] font-medium">
                Ghalib's Barber Salon
              </h4>
              <p className="text-[#545454] text-[18px] font-medium font-manrope">
                Khalidiyah, Sultanah Qiblatain Road, Medina, Saudi Arabia. See
                direction
              </p>
            </div>

            <div class="flex justify-between">
              <div>
                <p class="mb-[5px] text-[#2C2C2C] font-manrope text-[20px] font-semibold">
                  Gift card
                </p>
                <p class="text-[#545454] font-manrope font-medium">
                  Valid for 6 months
                </p>
              </div>
              <div class="flex items-center gap-[4px]">
                <img src={Currency} className="h-[20px]" alt="" />
                <span class="text-[#4A4A4A] font-manrope text-[24px] font-semibold">
                  100
                </span>
              </div>
            </div>

            <div className="flex justify-between">
              <p className="mb-[5px] text-[#2C2C2C] font-manrope text-[20px] font-semibold">
                Total
              </p>
              <div className="flex items-center gap-[4px]">
                <img className="h-[20px]" src={Currency} alt="" />
                <span className="text-[#4A4A4A] font-manrope text-[24px] font-semibold">
                  100
                </span>
              </div>
            </div>
            <div>
              <Link to="/userdashboard/usermembercheckout">
                <button class="py-[14px] px-[20px] text-[#FFF] bg-primary-gradient rounded-[48px]  w-[100%] block font-manrope font-medium text-[18px]">
                  Continue
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
