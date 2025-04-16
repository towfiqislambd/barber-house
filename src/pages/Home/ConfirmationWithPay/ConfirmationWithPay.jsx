import {
  AmericanExpress,
  CalendarSvg,
  PlusSvg,
  RightArrowSvg,
  Stripe,
  VisaCartSvg,
  WatchSvg,
} from "@/components/svgContainer/SvgContainer";
import s2 from "../../../assets/images/s2.png";
import servicesBg from "../../../assets/images/servicesBg.png";
import { Link } from "react-router-dom";

const ConfirmationWithPay = () => {
  return (
    <div className="bg-[#FCFCFC] 4xl:py-20 sm:py-10 py-5 overscroll-y-auto">
      <div className="container md:px-10 px-5 4xl:px-0">
        <Link to="/checkout">
          <button>
            <RightArrowSvg />
          </button>
        </Link>
        <h3 className="font-medium mt-5 text-[#1E1E1E] font-outfit text-3xl mb-7">
          Confirm your Booking
        </h3>
        <div className="grid xl:grid-cols-12 2xl:gap-10 gap-5">
          <div className="col-span-8 bg-white border border-[#b0ecef8a] 3xl:px-32 2xl:px-16 px-4 3xl:py-20 py-4 rounded">
            <h3 className="text-[#2C2C2C] text-xl xl:text-2xl font-semibold mb-3">
              Payment Method
            </h3>
            <div className="mb-3">
              <label
                htmlFor="fullName"
                className="text-base xl:text-lg font-medium mb-2 inline-block"
              >
                Card holder full name*
              </label>
              <input
                id="fullName"
                type="text "
                className="px-3 py-3 block w-full border rounded-lg outline-none"
                placeholder="Add card holder full name"
              />
            </div>
            <div className="mb-3">
              <label
                htmlFor="cardNumber"
                className="text-base xl:text-lg font-medium mb-2 inline-block"
              >
                Card number*
              </label>
              <input
                type="number"
                id="cardNumber"
                className="px-3 py-3 block w-full border rounded-lg outline-none"
                placeholder="Add credit or debit card number"
              />
            </div>
            <div className="flex gap-5 items-center mb-3">
              <div className="flex-grow">
                <label
                  htmlFor="expireDate"
                  className="text-base xl:text-lg font-medium mb-2 inline-block"
                >
                  Expiry Date*
                </label>
                <input
                  id="expireDate"
                  type="date"
                  className="px-3 py-3 block w-full border rounded-lg outline-none"
                  placeholder="MM/YY"
                />
              </div>
              <div className="flex-grow">
                <label
                  htmlFor="code"
                  className="text-base xl:text-lg font-medium mb-2 inline-block"
                >
                  Security Code*
                </label>
                <input
                  id="code"
                  type="text"
                  className="px-3 py-3 block w-full border rounded-lg outline-none"
                  placeholder="123"
                />
              </div>
            </div>
            <div className="flex gap-5 items-center py-7">
              <p className="text-lg font-medium text-[#2C2C2C]">
                Pay securely with
              </p>
              <div className="flex gap-2 items-center">
                <VisaCartSvg />
                <AmericanExpress />
                <Stripe />
              </div>
            </div>
            <button className="flex gap-2 font-medium text-lg items-center px-5 py-3 rounded-full border">
              <PlusSvg />
              <p>Add a gift card</p>
            </button>
            <h3 className="text-[#2C2C2C] text-xl xl:text-2xl mt-5 font-semibold mb-3">
              Deposit policy
            </h3>
            <p className="text-[#545454] font-medium text-base lg:text-lg">
              A non-refundable deposit is required to book your appointment.
            </p>
            <h3 className="text-[#2C2C2C] text-xl xl:text-2xl mt-8 font-semibold mb-3">
              Additional terms & conditions
            </h3>
            <div className="space-y-2">
              <p className="text-[#545454] font-medium text-base xl:text-lg">
                Appointments must be booked in advance and confirmed via call,
                text, or online booking.
              </p>
              <p className="text-[#545454] font-medium text-base xl:text-lg">
                Full payment is required upon completion of the service.
              </p>
              <p className="text-[#545454] font-medium text-base xl:text-lg">
                Additional guests may be limited due to space and safety
                concerns.
              </p>
              <p className="text-[#545454] font-medium text-base xl:text-lg">
                Gift cards are non-refundable and must be used before their
                expiration date.
              </p>
            </div>
            <h3 className="text-[#2C2C2C] text-xl xl:text-2xl mt-5 font-semibold mb-3">
              Booking Notes
            </h3>
            <textarea
              placeholder="Write anything about your booking..."
              className="p-5 block w-full outline-none border rounded-lg text-base sm:text-lg"
              rows={5}
            ></textarea>
          </div>
          <div className="xl:col-span-4 col-span-8 bg-white border self-start border-[#b0ecef8a] 2xl:p-12 p-6 rounded">
            <img src={s2} className="w-full xl:h-full lg:h-[350px]" />
            <h3 className="font-outfit text-xl xl:text-2xl font-medium text-[#545454] my-2">
              Ghalibs Barber Salon
            </h3>
            <p className="text-base xl:text-lg text-[#545454] font-medium mb-3">
              Khalidiyah, Sultanah Qiblatain Road, Medina, Saudi Arabia.
            </p>
            <div className="border-t pb-5 border-[#54D6DC]"></div>
            <div className="flex gap-2 items-center font-medium text-[#545454] mb-2">
              <CalendarSvg />
              <p>4th February, Tuesday</p>
            </div>
            <div className="flex gap-2 items-center font-medium text-[#545454] mb-5">
              <WatchSvg />
              <p>3:00 PM - 3:30 PM</p>
            </div>
            <div className="flex justify-between pb-7 items-center text-[#2C2C2C] text-lg font-medium">
              <div className="">
                <p className="text-[#2C2C2C] font-semibold text-base xl:text-lg mb-1">
                  Wax Services 01
                </p>
                <p className="text-[15px]">30 mins with any professional</p>
              </div>
              <p className="font-semibold text-[#545454] pb-2 flex gap-2 items-center">
                <img src={servicesBg} alt="" />
                <span>20.00</span>
              </p>
            </div>
            <div className="border-t border-[#54D6DC]"></div>
            <div className="flex justify-between pt-5 pb-5 items-center text-[#2C2C2C] text-lg font-medium">
              <p className="text-[#2C2C2C] font-semibold text-base xl:text-lg mb-1">
                Total (Pay now)
              </p>
              <p className="font-semibold text-[#545454] pb-2 flex gap-2 items-center">
                <img src={servicesBg} alt="" />
                <span>20.00</span>
              </p>
            </div>
            <Link to="/appointment-completed">
              <button className="text-[#FFF] font-manrope text-xl font-semibold bg-gradient-to-r from-[#008A90] to-[#00C2CB] justify-center py-3 xl:mt-8 mt-0 rounded-[40px] w-full block">
                Confirm
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ConfirmationWithPay;
