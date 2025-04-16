import {
  AppointmentSchedulingSvg,
  MarketingPromotionsSvg,
  PaymentProcessingSvg,
  PointOfSaleSvg,
  ProductInventoryAndOnlineStoreSvg,
  ReportingAndAnalyticsSvg,
} from "@/components/svgContainer/SvgContainer";

const GrowBusiness = () => {
  const services = [
    {
      id: 1,
      icon: <AppointmentSchedulingSvg />,
      title: "Appointment scheduling",
      description:
        "A sleek and user-friendly salon software compatible with all devices for seamless appointments scheduling and management.",
    },
    {
      id: 2,
      icon: <PaymentProcessingSvg />,
      title: "Payment processing",
      description:
        "Securely process client payments via pay by link, saved card and Fresha card terminals for a seamless checkout experience.",
    },
    {
      id: 3,
      icon: <PointOfSaleSvg />,
      title: "Point of sale (POS)",
      description:
        "All the tools to manage your salon retail operations with barcode scanners, receipt prints and more.",
    },
    {
      id: 4,
      icon: <MarketingPromotionsSvg />,
      title: "Marketing promotions",
      description:
        "The most powerful salon software with marketing features to grow your business and appointment bookings from new clients.",
    },
    {
      id: 5,
      icon: <ProductInventoryAndOnlineStoreSvg />,
      title: "Product inventory and online store",
      description:
        "Manage your stock and set up your own online store to sell products worldwide.",
    },
    {
      id: 6,
      icon: <ReportingAndAnalyticsSvg />,
      title: "Reporting and analytics",
      description:
        "Leverage Fresha's performance analytics and reporting tools to gain valuable insights into your salon's financials, client trends, and overall business growth.",
    },
  ];

  return (
    <section className="pt-[40px] xl:pt-[83px] pb-[40px] xl:pb-[149px]">
      <div className="container">
        {/*  */}
        <div className="text-center">
          <h1 className="text-[#1E1E1E] text-[28px] font-outfit xl:text-[40px] font-semibold">
            Grow Your Business Easily
          </h1>
          <p className="text-[#545454] font-manrope text-[18px] xl:text-xl font-medium leading-[30px] mb-[20px] mt-3">
            All-in-one tools to boost sales, streamline scheduling, and retain
            clients effortlessly.
          </p>
        </div>
        {/*  */}
        <div className="grid xl:grid-cols-3 xl:mt-[67px] gap-y-[50px] xl:gap-y-[99px]">
          {services.map((service) => (
            <div key={service.id} className="flex gap-3 justify-center">
              {service.icon}
              <div>
                <h1 className=" text-[22px] xl:text-[28px] font-semibold text-[#2C2C2C] font-outfit leading-[33.6px] max-w-[308px]">
                  {service.title}
                </h1>
                <p className="text-[#545454] font-manrope text-base leading-6 mt-2 max-w-[308px]">
                  {service.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GrowBusiness;
