import { useLocation } from "react-router-dom";
import Featured from "./section/Featured";
import SelectServiceComponent from "@/components/SelectServiceComponent/SelectServiceComponent";

const SelectServicesPage = () => {
  const location = useLocation();
  const bookingType = location.state?.bookingType;
  const storeData = location.state?.storeData;

  return (
    <section className="bg-[#FCFCFC] pt-36  pb-20 2xl:pb-32 lg:px-5 xl:px-7 2xl:px-10 3xl:px-12 4xl:px-0">
      <div className="container">
        <div className="mt-8">
          <h1 className="text-2xl xl:text-3xl 2xl:text-4xl 4xl:text-5xl text-textColor font-medium font-outfit">
            Select Services from {storeData?.data?.name}
          </h1>

          {/* This is the content section */}
          <div className="container">
            <div className="flex flex-col gap-y-[33px] 3xl:ml-[105px] mt-10 3xl:mt-[88px]">
              <div className="flex flex-col xl:flex-row w-full gap-10 gap-x-[50px] relative">
                <SelectServiceComponent
                  bookingType={bookingType}
                  storeData={storeData}
                />
                <Featured bookingType={bookingType} storeData={storeData} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SelectServicesPage;
