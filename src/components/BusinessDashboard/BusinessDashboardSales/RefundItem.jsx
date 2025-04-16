import { Checkbox } from "@/components/ui/checkbox";
const RefundItem = () => {
  const services = [
    {
      id: "haircut-1",
      name: "Haircut",
      time: "13:00, 11 Feb 2025",
      staff: "M. R. Shihab",
      price: "SAR 10:00",
    },
    {
      id: "haircut-2",
      name: "Haircut",
      time: "13:00, 11 Feb 2025",
      staff: "M. R. Shihab",
      price: "SAR 10:00",
    },
    {
      id: "haircut-3",
      name: "Haircut",
      time: "13:00, 11 Feb 2025",
      staff: "M. R. Shihab",
      price: "SAR 10:00",
    },
    {
      id: "haircut-4",
      name: "Haircut",
      time: "13:00, 11 Feb 2025",
      staff: "M. R. Shihab",
      price: "SAR 10:00",
    },
    {
      id: "haircut-5",
      name: "Haircut",
      time: "13:00, 11 Feb 2025",
      staff: "M. R. Shihab",
      price: "SAR 10:00",
    },
    {
      id: "haircut-6",
      name: "Haircut",
      time: "13:00, 11 Feb 2025",
      staff: "M. R. Shihab",
      price: "SAR 10:00",
    },
  ];
  return (
    <div>
      <div className="flex gap-3 items-center mb-1 justify-between mt-4 lg:mt-10">
        <div className="flex items-center gap-3">
          <Checkbox id="hair" className="scale-125" />
          <p
            htmlFor="hair"
            className="text-base md:text-[17px] font-medium text-[#2C2C2C]"
          >
            All items
          </p>
        </div>
        <p className="text-textColor font-manrope text-base md:text-lg font-medium leading-[27px]">
          Amount
        </p>
      </div>
      {/*  */}
      <div className="lg:mt-10 mt-5">
        {services.map((service) => (
          <div
            key={service.id}
            className="flex justify-between py-4 border-b border-gray-300"
          >
            <div className="flex gap-2 items-center">
              <Checkbox id={service.id} />
              <div>
                <label
                  htmlFor={service.id}
                  className="font-medium text-[#2C2C2C] text-base lg:text-lg"
                >
                  {service.name}
                </label>
                <p className="text-sm lg:text-base">
                  {service.time} with {service.staff}
                </p>
              </div>
            </div>
            <p className="sm:text-base text-sm">{service.price}</p>
          </div>
        ))}

        {/* Final Tax & Refund Div */}
        <div className="flex justify-between py-4 border-gray-300">
          <div className="flex gap-2 items-center">
            <div>
              <label className="font-medium text-[#2C2C2C] text-base lg:text-lg">
                Tax
              </label>
              <p className="text-base lg:text-lg font-manrope font-medium">
                Total to refund
              </p>
            </div>
          </div>
          <div>
            <p className="text-textLight font-manrope text-base font-semibold">
              SAR 0:00
            </p>
            <p className="text-base lg:text-lg text-textColor font-manrope font-semibold leading-[27px]">
              SAR 0:00
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RefundItem;
