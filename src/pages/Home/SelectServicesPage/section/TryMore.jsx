import { Link } from "react-router-dom";

const TryMore = () => {
  const servicesData = [
    {
      name: "Grouping Appointment",
      duration: "Book for yourself and others or more than 1 people",
      price: "See More Details",
    },
    {
      name: "Grouping Appointment",
      duration: "Book for yourself and others or more than 1 people",
      price: "See More Details",
    },
    {
      name: "Grouping Appointment",
      duration: "Book for yourself and others or more than 1 people",
      price: "See More Details",
    },
    {
      name: "Grouping Appointment",
      duration: "Book for yourself and others or more than 1 people",
      price: "See More Details",
    },
  ];
  return (
    <div className="bg-[#FCFCFC] container mt-10 2xl:mt-[160px] mb-12">
      {/*  */}
      <div className="flex items-center justify-between">
        <h1 className="text-textColor font-outfit text-2xl 2xl:text-[32px] font-semibold">
          Try More Offerings from Cleanse
        </h1>
      </div>

      {/* This is the card section */}
      <div className="mt-8 grid md:grid-cols-2 gap-5">
        {servicesData.map((service, index) => (
          <div
            key={index}
            className="border border-borderColorLight bg-primaryLight max-w-[750px] py-6 px-7 rounded-2xl flex items-center justify-between"
          >
            {/* Card Content */}
            <div>
              <h1 className="text-[#2C2C2C] font-manrope text-xl font-semibold leading-[30px]">
                {service.name}
              </h1>
              <p className="text-textLight font-manrope text-base font-semibold mt-2">
                {service.duration}
              </p>
              <Link className=" text-primary font-manrope text-lg font-medium leading-[30px] mt-3 underline cursor-pointer flex">
                {service.price}
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TryMore;
