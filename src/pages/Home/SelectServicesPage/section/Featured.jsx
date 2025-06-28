import { Link } from "react-router-dom";
import currencyImg from "../../../../assets/images/searchResultPage/currentcy.png";
import { useSelector } from "react-redux";
import { currencyFormatter } from "@/lib/currencyFormatter";

const Featured = ({ storeData, bookingType }) => {
  const selectedServices = useSelector(
    (state) => state.services.selectedServices
  );

  const totalPrice = selectedServices.reduce(
    (acc, service) => acc + +service?.catalog_service?.price,
    0
  );

  return (
    <div className="w-[438px] max-h-[871px] border-[0.4px] border-solid p-5 border-borderColorLight 2xl:px-7 2xl:py-7 3xl:py-8 3xl:px-7 rounded-2xl">
      <img
        className="w-full h-[180px] 2xl:h-[237px] object-cover"
        src={`${import.meta.env.VITE_SITE_URL}/${
          storeData?.data?.store_images[0]?.images
        }`}
        alt=""
      />
      <div className="py-3 2xl:py-5">
        <h1 className="text-[#545454] font-outfit text-2xl 2xl:text-[28px] font-medium">
          {storeData?.data?.name}
        </h1>
        <p className="text-[#545454] font-manrope 2xl:text-lg font-medium leading-[25px] 2xl:leading-[27px]">
          {storeData?.data?.address}
        </p>
      </div>

      {selectedServices?.length > 0 && (
        <>
          <div className="border-t border-primary border-b py-6">
            {selectedServices.map((service) => (
              <div key={service?.id} className="flex justify-between mt-4">
                <div>
                  <h1 className="text-[#2C2C2C] font-manrope text-lg font-semibold leading-[27px]">
                    {service?.catalog_service?.name}
                  </h1>
                  <p className="text-textLight font-manrope font-medium leading-[21px]">
                    {service?.catalog_service?.duration}
                  </p>
                </div>
                <div className="flex items-center gap-1">
                  <h1 className="text-[#3E3E3E] font-manrope text-lg font-medium leading-[27px]">
                    {currencyFormatter(+service?.catalog_service?.price)}
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
              <h1 className="text-[#3E3E3E] font-manrope text-2xl font-medium leading-[27px]">
                {currencyFormatter(totalPrice)}
              </h1>
            </div>
          </div>
        </>
      )}

      <div className="flex justify-center mt-5 2xl:mt-10 3xl:mt-20 bg-primary-gradient py-2 2xl:py-[14px] px-6 rounded-[40px]">
        {selectedServices?.length > 0 ? (
          <Link
            to="/professional-time-page"
            state={{
              storeData: storeData,
              selectedServices: selectedServices,
              bookingType: bookingType,
              totalPrice: totalPrice,
            }}
            className="text-[#FFF] font-manrope text-lg font-semibold"
          >
            Continue
          </Link>
        ) : (
          <button
            disabled
            className="text-[#FFF] font-manrope text-lg font-semibold opacity-50 cursor-not-allowed"
          >
            Continue
          </button>
        )}
      </div>
    </div>
  );
};

export default Featured;
