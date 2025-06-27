import { Link } from "react-router-dom";
import chooseImg from "../../../assets/images/chooseProfessionalImg/chooseProfessionalImg.png";
import currencyImg from "../../../assets/images/searchResultPage/currentcy.png";

const FeatherTwo = ({
  formattedDate,
  storeData,
  selectedServices,
  bookingType,
  selectedAppointment,
  totalPrice,
}) => {
  return (
    <div className="lg:max-w-[493px] max-h-[871px] border-[0.4px] border-solid p-5 border-borderColorLight 2xl:px-7 2xl:py-7 3xl:py-8 3xl:px-7 rounded-2xl">
      <img
        className="w-full h-[180px] 2xl:h-[237px] object-cover"
        src={`${import.meta.env.VITE_SITE_URL}/${
          storeData?.data?.store_images[0]?.images
        }`}
        alt=""
      />
      {/*  */}
      <div className="py-3 2xl:py-5">
        <h1 className="text-[#545454] font-outfit text-2xl 2xl:text-[28px] font-medium">
          {storeData?.data?.name}
        </h1>
        <p className="text-[#545454] font-manrope 2xl:text-lg font-medium leading-[25px] 2xl:leading-[27px]">
          {storeData?.data?.address}
        </p>
      </div>
      {/*  */}
      <div className="border-t border-borderColor border-b py-6 2xl:py-12">
        {/* This is the Wax Services 01 */}
        {selectedServices?.map((service, index) => (
          <div className="flex justify-between mt-4 first:mt-0" key={index}>
            <div>
              <h1 className="text-[#2C2C2C] font-manrope text-lg font-semibold leading-[27px]">
                {service?.catalog_service?.name || "Unnamed Service"}
              </h1>
              <p className="text-textLight font-manrope font-medium leading-[21px]">
                {service?.catalog_service?.duration || "Unknown duration"}
              </p>
            </div>
            <div className="flex items-center gap-1">
              <img
                className="w-[13px] h-4 object-cover"
                src={currencyImg}
                alt="currency"
              />
              <h1 className="text-[#3E3E3E] font-manrope text-lg font-medium leading-[27px]">
                {service?.catalog_service?.price || 0}
              </h1>
            </div>
          </div>
        ))}
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
            {totalPrice}
          </h1>
        </div>
      </div>
      {/* This is the button section */}
      <div
        className={`flex justify-center mt-5 2xl:mt-10 3xl:mt-20 py-2 2xl:py-[14px] px-6 rounded-[40px] ${
          selectedAppointment && formattedDate
            ? "bg-primary-gradient"
            : "bg-gray-300 cursor-not-allowed"
        }`}
      >
        {selectedAppointment && formattedDate ? (
          <Link
            to="/booking-confirmation"
            state={{
              formattedDate: formattedDate,
              storeData: storeData,
              selectedServices: selectedServices,
              bookingType: bookingType,
              selectedAppointment: selectedAppointment,
              totalPrice: totalPrice,
            }}
            className="text-[#FFF] font-manrope text-lg font-semibold"
          >
            Continue
          </Link>
        ) : (
          <span className="text-[#FFF] font-manrope text-lg font-semibold">
            Continue
          </span>
        )}
      </div>
    </div>
  );
};

export default FeatherTwo;
