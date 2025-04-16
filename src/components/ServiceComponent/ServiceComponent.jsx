import { useState } from "react";
import ServiceCard from "../cards/ServiceCard";

const ServiceComponent = ({ data, isSingle }) => {
  const [activeCard, setActiveCard] = useState(null);
  return (
    <div className={isSingle ? "flex flex-col gap-y-5 " : "mt-8 grid lg:grid-cols-2 gap-5"}>
      {data.map((service) => (
        <ServiceCard
          key={service.id}
          service={service}
          activeCard={activeCard}
          setActiveCard={setActiveCard}
        />
      ))}
    </div>
  );
};

export default ServiceComponent;
