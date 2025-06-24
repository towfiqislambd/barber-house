import { useState } from "react";
import ServiceCard from "../cards/ServiceCard";

const ServiceComponent = ({ data, isSingle }) => {
  return (
    <div
      className={
        isSingle ? "flex flex-col gap-y-5 " : "mt-8 grid lg:grid-cols-2 gap-5"
      }
    >
      {data?.data?.store_services.map((service) => (
        <ServiceCard key={service.id} service={service} />
      ))}
    </div>
  );
};

export default ServiceComponent;
