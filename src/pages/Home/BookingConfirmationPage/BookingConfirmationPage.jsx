import BreadCrumb from "@/components/BusinessHelpCenter/BreadCrumb/BreadCrumb";
import { LeftSideArrowSvg } from "@/components/svgContainer/SvgContainer";
import { Link } from "react-router-dom";
import chooseImg from "../../../assets/images/chooseProfessionalImg/chooseProfessionalImg.png";
import currencyImg from "../../../assets/images/searchResultPage/currentcy.png";

const BookingConfirmationPage = () => {
  return (
    <section className="container  pb-10 xl:pb-20 pt-28 2xl:py-36 lg:px-5 xl:px-7 2xl:px-10 3xl:px-12 4xl:px-0">
      {/* This is the button section */}
      <div className="flex gap-4 items-center">
        <Link to={"#"}>
          <button className="flex border border-[#757575] rounded-[100px] text-[#2C2C2C] lg:text-base font-manrope font-medium gap-1 text-sm lg:gap-[6px] items-center leading-6 px-2 lg:px-3 py-1 lg:py-2">
            <LeftSideArrowSvg />
            Back
          </button>
        </Link>
        <BreadCrumb
          items={[
            { label: "Services", href: "/" },
            { label: "Professional & time", href: "/docs/components" },
            { label: "Confirm" },
          ]}
        />
      </div>

      <h1 className="mt-5 xl:mt-8 text-textColor font-outfit text-2xl 2xl:text-3xl 3xl:text-4xl 4xl:text-5xl font-medium">
        Confirm your Booking
      </h1>
      {/*  */}
      <div className="flex flex-col lg:flex-row gap-5 mt-5 xl:mt-10">
        {/* First Div */}
        <div className="w-full lg:w-[70%] border-[0.4px] border-borderColorLight rounded-2xl bg-[#FFF]">
          <div className="py-5 xl:py-12 px-5 xl:px-10 3xl:px-[165px]">
            <h1 className="text-textColor font-manrope text-xl font-bold">
              Booking Notes
            </h1>
            <textarea
              className="border border-[#8993A4] w-full 2xl:w-[678px] h-40 lg:h-[203px] rounded-xl mt-4 px-3 lg:px-5 py-3 lg:py-6 text-[#8993A4]"
              name=""
              id=""
              placeholder="Write anything about your booking..."
            ></textarea>
            <h1 className="mt-5 xl:mt-10 3xl:mt-16 text-textColor font-manrope xl:text-lg font-normal leading-[30px]">
              <span className="text-textColor font-manrope text-xl font-semibold leading-[30px]">
                Contact Note:
              </span>{" "}
              If there is any inquiry regarding booking, rescheduling,
              cancelling appointment or any other queries please Call us/Text
              us/Contact on whatsapp/viber in the follwing number.
            </h1>
          </div>
        </div>
        {/* Second Div */}
        <div className="lg:max-w-[493px] max-h-[871px] border-[0.4px] border-solid p-5 border-borderColorLight 2xl:px-7 2xl:py-7 3xl:py-8 3xl:px-7 rounded-2xl">
          <img
            className="w-full h-[180px] 2xl:h-[237px] object-cover"
            src={chooseImg}
            alt=""
          />
          {/*  */}
          <div className="py-3 2xl:py-5">
            <h1 className="text-[#545454] font-outfit text-2xl 2xl:text-[28px] font-medium">
              galibi&apos;s Barber Salon
            </h1>
            <p className="text-[#545454] font-manrope 2xl:text-lg font-medium leading-[25px] 2xl:leading-[27px]">
              Khalidiyah, Sultanah Qiblatain Road, Medina, Saudi Arabia.
            </p>
          </div>
          {/*  */}
          <div className="border-t border-borderColor border-b py-6 2xl:py-12">
            {/* This is the Wax Services 01 */}
            <div className="flex justify-between">
              <div>
                <h1 className="text-[#2C2C2C] font-manrope text-lg font-semibold leading-[27px]">
                  Wax Services 01
                </h1>
                <p className="text-textLight font-manrope font-medium leading-[21px]">
                  5 - 10 mins
                </p>
              </div>
              <div className="flex items-center gap-1">
                <img
                  className="w-[13px] h-4 object-cover"
                  src={currencyImg}
                  alt=""
                />
                <h1 className="text-[#3E3E3E] font-manrope text-lg font-medium leading-[27px]">
                  10
                </h1>
              </div>
            </div>
            {/* This is the Boys cuts */}
            <div className="flex justify-between mt-4">
              <div>
                <h1 className="text-[#2C2C2C] font-manrope text-lg font-semibold leading-[27px]">
                  Boys cuts
                </h1>
                <p className="text-textLight font-manrope font-medium leading-[21px]">
                  5 - 10 mins
                </p>
              </div>
              <div className="flex items-center gap-1">
                <img
                  className="w-[13px] h-4 object-cover"
                  src={currencyImg}
                  alt=""
                />
                <h1 className="text-[#3E3E3E] font-manrope text-lg font-medium leading-[27px]">
                  10
                </h1>
              </div>
            </div>
          </div>
          {/*  */}
          {/* This is the Total */}
          <div className="flex justify-between mt-4">
            <h1 className="text-[#2C2C2C] font-manrope text-xl font-semibold leading-[30px]">
              Total
            </h1>
            <div className="flex items-center gap-1">
              <img className="w-[19px] h-6 object-cover" src={currencyImg} alt="" />
              <h1 className="text-[#3E3E3E] font-manrope text-2xl font-medium leading-[27px]">
                10
              </h1>
            </div>
          </div>
          {/* This is the button section */}
          <div className="flex justify-center mt-5 2xl:mt-10 3xl:mt-20 bg-primary-gradient py-2 2xl:py-[14px] px-6 rounded-[40px]">
            <Link
              to={"/confirmation-with-pay"}
              className="text-[#FFF] font-manrope text-lg font-semibold "
            >
              Continue
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BookingConfirmationPage;
