import React from "react";
import BookingImg from "../../assets/images/appoirment-img.png";
import Currency from "../../assets/images/currency.png";
import { Link } from "react-router-dom";
import Payment from "../../assets/images/icon/payment.png";
import { CiCreditCard2 } from "react-icons/ci";
import { FaArrowLeftLong } from "react-icons/fa6";

export default function UserMembershipCheckout() {
  return (
    <div>
      <Link to="/userdashboard/usermembership">
        {" "}
        <button className="text-[25px] mb-[30px]">
          <FaArrowLeftLong />
        </button>
      </Link>

      <h3 className="text-[#2C2C2C] font-outfit text-[36px] font-medium mb-[40px]">
        Review and Checkout{" "}
      </h3>
      <div className="flex gap-[30px]">
        <div className="flex-shrink-0 w-[814px]">
          <div className="border-borderColorLight border rounded-[16px] py-[80px] px-[100px]">
            <div className="mb-[40px]">
              <h3 className="mb-[8px] text-[#1E1E1E] font-outfit text-[28px] font-medium leading-[33px]">
                Payment Process
              </h3>
              <p className="text-[#545454] font-manrope text-[18px font-medium] leading-[27px]">
                Your card will be charged straight away
              </p>
            </div>
            <div>
              <form action="">
                <div className="flex flex-col gap-[28px]">
                  <div>
                    <label
                      className="text-[#2C2C2C] block text-[18px] font-semibold font-manrope leading-[27px] mb-[8px]"
                      htmlFor=""
                    >
                      Card holder name*
                    </label>
                    <input
                      type="text"
                      className="py-[14px] px-[20px] font-manrope text-[18px] font-medium w-full border border-[#d4d4d4] focus:border-primary focus:outline-none rounded-[8px]"
                      placeholder="Write your gift card code"
                    />
                  </div>
                  <div>
                    <label
                      className="text-[#2C2C2C] block text-[18px] font-semibold font-manrope leading-[27px] mb-[8px]"
                      htmlFor=""
                    >
                      Card number*
                    </label>
                    <div className="relative">
                      <input
                        type="number"
                        className="py-[14px] px-[20px] font-manrope text-[18px] font-medium w-full border border-[#d4d4d4] focus:border-primary focus:outline-none rounded-[8px]"
                        placeholder="Credit or debit card number"
                      />
                      <span className="absolute right-[10px] top-[50%] translate-y-[-50%] text-[25px] bg-[#FFF]">
                        <CiCreditCard2 />
                      </span>
                    </div>
                  </div>
                  <div className="flex gap-[20px]">
                    <div className="w-[50%]">
                      <label
                        className="text-[#2C2C2C] block text-[18px] font-semibold font-manrope leading-[27px] mb-[8px]"
                        htmlFor=""
                      >
                        Expiry date*
                      </label>
                      <input
                        type="text"
                        className="py-[14px] px-[20px] font-manrope text-[18px] font-medium w-full border border-[#d4d4d4] rounded-[8px] focus:border-primary focus:outline-none"
                        placeholder="MM/YY"
                      />
                    </div>
                    <div className="w-[50%]">
                      <label
                        className="text-[#2C2C2C] block text-[18px] font-semibold font-manrope leading-[27px] mb-[8px]"
                        htmlFor=""
                      >
                        Security code*
                      </label>
                      <input
                        type="text"
                        className="py-[14px] px-[20px] font-manrope text-[18px] font-medium w-full border border-[#d4d4d4] rounded-[8px] focus:border-primary focus:outline-none"
                        placeholder="123"
                      />
                    </div>
                  </div>
                  <div className="flex gap-[32px] py-[24px] mb-[50px]">
                    <p className="text-[#2C2C2C] text-[18px] font-manrope font-medium leading-[27px]">
                      Pay securely with
                    </p>
                    <div className="flex gap-[16px] items-center">
                      <img className="flex-shrink-0" src={Payment} alt="" />
                    </div>
                  </div>
                </div>
              </form>
            </div>
            <div>
              <h3 className="mb-[40px] text-[#1E1E1E] font-outfit text-[24px] font-medium leading-[28px]">
                Recipient details
              </h3>
              <div className="flex flex-col gap-[28px]">
                <div className="flex">
                  <div className="w-[300px] flex-shrink-0">
                    <p className="text-[#2C2C2C] font-manrope text-[18px] font-medium">
                      Sender name
                    </p>
                  </div>
                  <div>
                    <p className="text-[#545454] font-manrope text-[18px] font-medium">
                      Tariqul Islam Fahim
                    </p>
                  </div>
                </div>
                <div className="flex">
                  <div className="w-[300px] flex-shrink-0">
                    <p className="text-[#2C2C2C] font-manrope text-[18px] font-medium">
                      Recipient name
                    </p>
                  </div>
                  <div>
                    <p className="text-[#545454] font-manrope text-[18px] font-medium">
                      Shafiqul Islam
                    </p>
                  </div>
                </div>
                <div className="flex">
                  <div className="w-[300px] flex-shrink-0">
                    <p className="text-[#2C2C2C] font-manrope text-[18px] font-medium">
                      Recipient email address
                    </p>
                  </div>
                  <div>
                    <p className="text-[#545454] font-manrope text-[18px] font-medium">
                      tariqulFahim97@gmail.com
                    </p>
                  </div>
                </div>
                <div className="flex">
                  <div className="w-[300px] flex-shrink-0">
                    <p className="text-[#2C2C2C] font-manrope text-[18px] font-medium">
                      Personal message
                    </p>
                  </div>
                  <div>
                    <p className="text-[#545454] font-manrope text-[18px] font-medium">
                      It’s a gift from me, daddy. May Allah bless you forever.
                    </p>
                  </div>
                </div>
                <div className="flex">
                  <div className="w-[300px] flex-shrink-0">
                    <p className="text-[#2C2C2C] font-manrope text-[18px] font-medium">
                      Send date
                    </p>
                  </div>
                  <div>
                    <p className="text-[#545454] font-manrope text-[18px] font-medium">
                      Today (Friday, 7 Feb 2025)
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/*Start:: Right card  */}
        <div className="flex-shrink-0 w-[400px] border border-primary rounded-[16px] p-[30px] h-max">
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
            <div className="flex justify-between">
              <div>
                <p className="mb-[5px] text-[#2C2C2C] font-manrope text-[20px] font-semibold">
                  Membership
                </p>
                <p className="text-[#545454] font-manrope font-medium">
                  Valid for 4 months
                </p>
              </div>
              <div className="flex items-center gap-[4px]">
                <img className="h-[20px]" src={Currency} alt="" />
                <span className="text-[#4A4A4A] font-manrope text-[24px] font-semibold">
                  10
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
                  10
                </span>
              </div>
            </div>
            <div>
              <Link to="/userdashboard/membershipdone">
                <button class="py-[14px] px-[20px] text-[#FFF] bg-primary-gradient rounded-[48px]  w-[100%] block font-manrope font-medium text-[18px]">
                  Confirm
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
