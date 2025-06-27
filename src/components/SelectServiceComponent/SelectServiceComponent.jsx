import ServiceComponent from "../ServiceComponent/ServiceComponent";

const SelectServiceComponent = ({ storeData, bookingType }) => {
  return (
    <div className="w-full flex flex-col gap-5 xl:gap-y-8 ">
      <ServiceComponent bookingType={bookingType} data={storeData} />
    </div>
  );
};

export default SelectServiceComponent;
