import ServiceComponent from "@/components/ServiceComponent/ServiceComponent";
import { servicesData } from "@/components/dummyData/SelectServicePageData";

const ServicesGhalibSalon = ({ data }) => {
  return (
    <section className="bg-[#FCFCFC] pb-20 2xl:py-20 lg:px-5 xl:px-7 2xl:px-10 3xl:px-12 4xl:px-0">
      <div className="container ">
        {/*  */}
        <div className="flex items-center justify-between">
          <h3 className="text-textColor font-outfit text-xl md:text-2xl lg:text-3xl xl:text-[32px] font-medium">
            Services of {data?.data?.name}
          </h3>
        </div>

        {/* This is the card section */}
        <ServiceComponent data={data} />
      </div>
    </section>
  );
};

export default ServicesGhalibSalon;
