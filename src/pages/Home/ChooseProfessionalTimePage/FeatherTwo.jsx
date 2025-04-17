import { Link } from "react-router-dom";
import chooseImg from "../../../assets/images/chooseProfessionalImg/chooseProfessionalImg.png";
import currencyImg from "../../../assets/images/searchResultPage/currentcy.png";

const FeatherTwo = () => {
    return (
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
            <img
              className="w-[19px] h-6 object-cover"
              src={currencyImg}
              alt=""
            />
            <h1 className="text-[#3E3E3E] font-manrope text-2xl font-medium leading-[27px]">
              10
            </h1>
          </div>
        </div>
        {/* This is the button section */}
        <div className="flex justify-center mt-5 2xl:mt-10 3xl:mt-20 bg-primary-gradient py-2 2xl:py-[14px] px-6 rounded-[40px]">
          <Link
            to={"/booking-confirmation"}
            className="text-[#FFF] font-manrope text-lg font-semibold "
          >
            Continue
          </Link>
        </div>
      </div>
    );
};

export default FeatherTwo;
