import BusinessAccordion from "./BusinessAccordion";

const FAQ = ({ data }) => {
  return (
    <section className="xl:py-[68px] py-[40px] px-[15px]">
      <div>
        <h1 className="text-textSecondary font-outfit text-[26px] xl:text-[40px] font-medium xl:leading-[48px] text-center">
          Frequently Asked Questions
        </h1>
        {/* Accordion Section */}
        <div className="xl:max-w-[1062px] mx-auto mt-[20px] xl:mt-16">
          <BusinessAccordion data={data} />
        </div>
      </div>
    </section>
  );
};

export default FAQ;
