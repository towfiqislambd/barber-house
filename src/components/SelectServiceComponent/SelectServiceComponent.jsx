import ServiceComponent from "../ServiceComponent/ServiceComponent";

const SelectServiceComponent = ({ heading, data }) => {
  return (
    <div className="w-full flex flex-col gap-5 xl:gap-y-8 ">
      <h1 className="text-[#2C2C2C] font-outfit text-2xl xl:text-[32px] font-medium">
        {heading}
      </h1>
      <ServiceComponent isSingle={true} data={data} />
    </div>
  );
};

export default SelectServiceComponent;
