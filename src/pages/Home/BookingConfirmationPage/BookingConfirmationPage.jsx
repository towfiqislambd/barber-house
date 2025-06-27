import BreadCrumb from "@/components/BusinessHelpCenter/BreadCrumb/BreadCrumb";
import { LeftSideArrowSvg } from "@/components/svgContainer/SvgContainer";
import { Link, useLocation, useNavigate } from "react-router-dom";
import chooseImg from "../../../assets/images/chooseProfessionalImg/chooseProfessionalImg.png";
import currencyImg from "../../../assets/images/searchResultPage/currentcy.png";
import { useAppointmentBooking } from "@/hooks/user.mutation";
import { useState } from "react";

const BookingConfirmationPage = () => {
  const location = useLocation();
  const navigate = useNavigate();
  const [notes, setNotes] = useState("");

  const storeData = location.state?.storeData;
  const selectedServices = location.state?.selectedServices;
  const bookingType = location.state?.bookingType;
  const totalPrice = location.state?.totalPrice;
  const formattedDate = location?.state?.formattedDate;
  const selectedAppointment = location?.state?.selectedAppointment;
  const { mutateAsync, isLoading } = useAppointmentBooking();

  const handleConfirm = () => {
    const formData = new FormData();

    formData.append("online_store_id", storeData?.data?.id);
    formData.append("appointment_type", bookingType);
    formData.append("is_professional_selected", true);
    formData.append("date", formattedDate);
    formData.append("time", selectedAppointment || "12:30");
    formData.append("booking_notes", notes);
    selectedServices?.forEach((s) => {
      formData.append("store_service_ids[]", s.catalog_service.id);
    });
    formData.append(
      "success_redirect_url",
      "https://your-site.com/booking-success"
    );
    formData.append(
      "cancel_redirect_url",
      "https://your-site.com/booking-cancel"
    );

    mutateAsync(formData, {
      onSuccess: (data) => {
        console.log("✅ Success:", data);
      },
      onError: (err) => {
        console.error("❌ Error:", err);
      },
    });
  };

  return (
    <section className="container  pb-10 xl:pb-20 pt-28 2xl:py-36 lg:px-5 xl:px-7 2xl:px-10 3xl:px-12 4xl:px-0">
      {/* This is the button section */}
      <div className="flex gap-4 items-center">
        <Link to={-1}>
          <button className="flex border border-[#757575] rounded-[100px] text-[#2C2C2C] lg:text-base font-manrope font-medium gap-1 text-sm lg:gap-[6px] items-center leading-6 px-2 lg:px-3 py-1 lg:py-2">
            <LeftSideArrowSvg />
            Back
          </button>
        </Link>
      </div>

      <h1 className="mt-5 xl:mt-8 text-textColor font-outfit text-2xl 2xl:text-3xl 3xl:text-4xl 4xl:text-5xl font-medium">
        Confirm your Booking
      </h1>

      <div className="flex flex-col lg:flex-row gap-5 mt-5 xl:mt-10">
        {/* First Div */}
        <div className="w-full lg:w-[70%] border-[0.4px] border-borderColorLight rounded-2xl bg-[#FFF]">
          <div className="py-5 xl:py-12 px-5 xl:px-10 3xl:px-[165px]">
            <h1 className="text-textColor font-manrope text-xl font-bold">
              Booking Notes
            </h1>
            <textarea
              className="border border-[#8993A4] w-full 2xl:w-[678px] h-40 lg:h-[203px] rounded-xl mt-4 px-3 lg:px-5 py-3 lg:py-6 text-[#8993A4]"
              placeholder="Write anything about your booking..."
              value={notes}
              onChange={(e) => setNotes(e.target.value)}
            ></textarea>
            <h1 className="mt-5 xl:mt-10 3xl:mt-16 text-textColor font-manrope xl:text-lg font-normal leading-[30px]">
              <span className="text-textColor font-manrope text-xl font-semibold leading-[30px]">
                Contact Note:
              </span>{" "}
              If there is any inquiry regarding booking, rescheduling,
              cancelling appointment or any other queries please Call us/Text
              us/Contact on whatsapp/viber in the following number.
            </h1>
          </div>
        </div>

        {/* Second Div */}
        <div className="lg:max-w-[493px] max-h-[871px] border-[0.4px] border-solid p-5 border-borderColorLight 2xl:px-7 2xl:py-7 3xl:py-8 3xl:px-7 rounded-2xl">
          <img
            className="w-full h-[180px] 2xl:h-[237px] object-cover"
            src={`${import.meta.env.VITE_SITE_URL}/${
              storeData?.data?.store_images[0]?.images
            }`}
            alt={storeData?.data?.name || "Store Image"}
          />
          <div className="py-3 2xl:py-5">
            <h1 className="text-[#545454] font-outfit text-2xl 2xl:text-[28px] font-medium">
              {storeData?.data?.name}
            </h1>
            <p className="text-[#545454] font-manrope 2xl:text-lg font-medium leading-[25px] 2xl:leading-[27px]">
              {storeData?.data?.address}
            </p>
          </div>

          <div className="border-t border-borderColor border-b py-6 2xl:py-12">
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

          <div className="flex justify-between mt-4">
            <h1 className="text-[#2C2C2C] font-manrope text-xl font-semibold leading-[30px]">
              Total
            </h1>
            <div className="flex items-center gap-1">
              <img
                className="w-[19px] h-6 object-cover"
                src={currencyImg}
                alt="currency"
              />
              <h1 className="text-[#3E3E3E] font-manrope text-2xl font-medium leading-[27px]">
                {totalPrice}
              </h1>
            </div>
          </div>

          <div className="flex justify-center mt-5 2xl:mt-10 3xl:mt-20 bg-primary-gradient py-2 2xl:py-[14px] px-6 rounded-[40px]">
            <button
              disabled={isLoading}
              onClick={handleConfirm}
              className="text-[#FFF] font-manrope text-lg font-semibold"
            >
              {isLoading ? "Confirming..." : "Continue"}
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BookingConfirmationPage;
