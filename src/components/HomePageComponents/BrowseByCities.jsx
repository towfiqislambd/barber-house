import { useState } from "react";
const fakeData = [
  {
    id: 1,
    category_name: "Saudi Arabia",
    more: [
      {
        id: 1,
        location_name: "Riyadh",
        feathers: [
          "Hair Salons in Riyadh",
          "Nail Salons in Riyadh",
          "Barbershops in Riyadh",
          "Spas in Riyadh",
          "Message in Riyadh",
          "Waxing Salons in Riyadh",
        ],
      },
      {
        id: 2,
        location_name: "Jeddah",
        feathers: [
          "Hair Salons in Jeddah",
          "Nail Salons in Jeddah",
          "Barbershops in Jeddah",
          "Spas in Jeddah",
          "Message in Jeddah",
          "Waxing Salons in Jeddah",
        ],
      },
      {
        id: 3,
        location_name: "Mecca",
        feathers: [
          "Hair Salons in Mecca",
          "Nail Salons in Mecca",
          "Barbershops in Mecca",
          "Spas in Mecca",
          "Message in Mecca",
          "Waxing Salons in Mecca",
        ],
      },
      {
        id: 4,
        location_name: "Medina",
        feathers: [
          "Hair Salons in Medina",
          "Nail Salons in Medina",
          "Barbershops in Medina",
          "Spas in Medina",
          "Message in Medina",
          "Waxing Salons in Medina",
        ],
      },
      {
        id: 5,
        location_name: "Al Jubail",
        feathers: [
          "Hair Salons in Al Jubail",
          "Nail Salons in Al Jubail",
          "Barbershops in Al Jubail",
          "Spas in Al Jubail",
          "Message in Al Jubail",
          "Waxing Salons in Al Jubail",
        ],
      },
    ],
  },
  {
    id: 2,
    category_name: "Bahrain",
    more: [
      {
        id: 1,
        location_name: "Bahrain",
        feathers: [
          "Hair Salons in Riyadh",
          "Nail Salons in Riyadh",
          "Barbershops in Riyadh",
          "Spas in Riyadh",
          "Message in Riyadh",
          "Waxing Salons in Riyadh",
        ],
      },
      {
        id: 2,
        location_name: "Bahrain",
        feathers: [
          "Hair Salons in Jeddah",
          "Nail Salons in Jeddah",
          "Barbershops in Jeddah",
          "Message in Jeddah",
          "Waxing Salons in Jeddah",
        ],
      },
      {
        id: 3,
        location_name: "Bahrain",
        feathers: [
          "Hair Salons in Mecca",
          "Nail Salons in Mecca",
          "Spas in Mecca",
          "Message in Mecca",
          "Waxing Salons in Mecca",
        ],
      },
      {
        id: 4,
        location_name: "Bahrain",
        feathers: [
          "Hair Salons in Medina",
          "Nail Salons in Medina",
          "Barbershops in Medina",
          "Spas in Medina",
          "Message in Medina",
        ],
      },
      {
        id: 5,
        location_name: "ABahrain",
        feathers: [
          "Hair Salons in Al Jubail",
          "Nail Salons in Al Jubail",
          "Barbershops in Al Jubail",
          "Spas in Al Jubail",
          "Message in Al Jubail",
          "Waxing Salons in Al Jubail",
        ],
      },
    ],
  },
  {
    id: 3,
    category_name: "kuwait",
    more: [
      {
        id: 1,
        location_name: "kuwait",
        feathers: [
          "Hair Salons in Riyadh",
          "Nail Salons in Riyadh",
          "Barbershops in Riyadh",
          "Spas in Riyadh",
          "Message in Riyadh",
          "Waxing Salons in Riyadh",
        ],
      },
      {
        id: 2,
        location_name: "kuwait",
        feathers: [
          "Hair Salons in Jeddah",
          "Nail Salons in Jeddah",
          "Barbershops in Jeddah",
          "Spas in Jeddah",
          "Message in Jeddah",
          "Waxing Salons in Jeddah",
        ],
      },
      {
        id: 3,
        location_name: "kuwait",
        feathers: [
          "Hair Salons in Mecca",
          "Nail Salons in Mecca",
          "Barbershops in Mecca",
          "Spas in Mecca",
          "Message in Mecca",
          "Waxing Salons in Mecca",
        ],
      },
      {
        id: 4,
        location_name: "kuwait",
        feathers: [
          "Hair Salons in Medina",
          "Nail Salons in Medina",
          "Barbershops in Medina",
          "Spas in Medina",
          "Message in Medina",
          "Waxing Salons in Medina",
        ],
      },
      {
        id: 5,
        location_name: "kuwait",
        feathers: [
          "Hair Salons in Al Jubail",
          "Nail Salons in Al Jubail",
          "Barbershops in Al Jubail",
          "Spas in Al Jubail",
          "Message in Al Jubail",
          "Waxing Salons in Al Jubail",
        ],
      },
    ],
  },
  {
    id: 4,
    category_name: "Mecca",
    more: [
      {
        id: 1,
        location_name: "Mecca",
        feathers: [
          "Hair Salons in Riyadh",
          "Nail Salons in Riyadh",
          "Barbershops in Riyadh",
          "Spas in Riyadh",
          "Message in Riyadh",
          "Waxing Salons in Riyadh",
        ],
      },
      {
        id: 2,
        location_name: "Mecca",
        feathers: [
          "Hair Salons in Jeddah",
          "Nail Salons in Jeddah",
          "Barbershops in Jeddah",
          "Message in Jeddah",
          "Waxing Salons in Jeddah",
        ],
      },
      {
        id: 3,
        location_name: "Mecca",
        feathers: [
          "Hair Salons in Mecca",
          "Nail Salons in Mecca",
          "Spas in Mecca",
          "Message in Mecca",
          "Waxing Salons in Mecca",
        ],
      },
      {
        id: 4,
        location_name: "Mecca",
        feathers: [
          "Hair Salons in Medina",
          "Nail Salons in Medina",
          "Barbershops in Medina",
          "Spas in Medina",
          "Message in Medina",
        ],
      },
      {
        id: 5,
        location_name: "Mecca",
        feathers: [
          "Hair Salons in Al Jubail",
          "Nail Salons in Al Jubail",
          "Barbershops in Al Jubail",
          "Spas in Al Jubail",
          "Message in Al Jubail",
          "Waxing Salons in Al Jubail",
        ],
      },
    ],
  },
];

const BrowseByCities = () => {
  const [activeCountry, setActiveCountry] = useState("Saudi Arabia");
  return (
    <section className="py-10 2xl:py-20 bg-[#FCFCFC] container">
      <div className="">
        <h2 className="text-[25px] xl:text-3xl font-medium font-outfit mb-5 md:mb-10 text-[#1E1E1E] xl:pl-5 3xl:pl-10 4xl:pl-0">
          Browse by Cities of Gulf Sea
        </h2>
        <div className="flex flex-wrap lg:flex-row sm:gap-5 items-center md:justify-between lg:px-2 xl:px-8 4xl:px-0">
          <button
            onClick={() => setActiveCountry("Saudi Arabia")}
            className={`font-medium text-base 2xl:text-xl 2xl:px-7 px-3 2xl:py-3 py-2 rounded-full ${activeCountry === "Saudi Arabia"
              ? "bg-[#545454] text-white"
              : "text-[#2C2C2C]"
              }`}
          >
            Saudi Arabia
          </button>
          <button
            onClick={() => setActiveCountry("Bahrain")}
            className={`font-medium text-base 2xl:text-xl 2xl:px-7 px-3 2xl:py-3 py-2 rounded-full ${activeCountry === "Bahrain"
              ? "bg-[#545454] text-white"
              : "text-[#2C2C2C]"
              }`}
          >
            Bahrain
          </button>
          <button
            onClick={() => setActiveCountry("kuwait")}
            className={`font-medium text-base 2xl:text-xl 2xl:px-7 px-3 2xl:py-3 py-2 rounded-full ${activeCountry === "kuwait"
              ? "bg-[#545454] text-white"
              : "text-[#2C2C2C]"
              }`}
          >
            Kuwait
          </button>
          <button
            onClick={() => setActiveCountry("Mecca")}
            className={`font-medium text-base 2xl:text-xl 2xl:px-7 px-3 2xl:py-3 py-2 rounded-full ${activeCountry === "Mecca"
              ? "bg-[#545454] text-white"
              : "text-[#2C2C2C]"
              }`}
          >
            Oman
          </button>
          <button
            onClick={() => setActiveCountry("qatar")}
            className={`font-medium text-base 2xl:text-xl 2xl:px-7 px-3 2xl:py-3 py-2 rounded-full ${activeCountry === "qatar"
              ? "bg-[#545454] text-white"
              : "text-[#2C2C2C]"
              }`}
          >
            Qatar
          </button>
          <button
            onClick={() => setActiveCountry("uae")}
            className={`font-medium text-base 2xl:text-xl 2xl:px-7 px-3 2xl:py-3 py-2 rounded-full ${activeCountry === "uae"
              ? "bg-[#545454] text-white"
              : "text-[#2C2C2C]"
              }`}
          >
            The United Arab Emirates
          </button>
        </div>
        <div className="border-t mt-5 mb-10"></div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 3xl:gap-10 lg:gap-10 sm:gap-5 gap-6 px-2 3xl:px-10 4xl:px-0">
          {fakeData.map(
            (data) =>
              data?.category_name === activeCountry &&
              data?.more?.map((newData) => (
                <div key={newData.id}>
                  <h3 className="font-outfit text-2xl mb-6">
                    {newData?.location_name}
                  </h3>
                  <ul className="font-medium text-base 3xl:text-lg text-[#2C2C2C] space-y-2 xl:space-y-3 2xl:space-y-5">
                    {newData?.feathers.map((feather) => (
                      <li key={feather.id}>{feather}</li>
                    ))}
                  </ul>
                </div>
              ))
          )}
        </div>
      </div>
    </section>
  );
};

export default BrowseByCities;
