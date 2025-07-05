import ServiceCard from "../cards/ServiceCard";

const ServiceComponent = ({ data, bookingType, detailsPage }) => {
  return (
    <div className={"flex flex-col lg:flex-row  gap-5 "}>
      {data?.data?.store_services.map((service) => (
        <ServiceCard
          bookingType={bookingType}
          key={service.id}
          service={service}
          detailsPage={detailsPage}
        />
      ))}
    </div>
  );
};

export default ServiceComponent;
