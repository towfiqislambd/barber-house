import FromStartUpCard from "@/components/BusinessPricingPrice/FromStartUpCard/FromStartUpCard";

const FromStartUp = () => {
  return (
    <section className="max-w-[1160px] mx-auto py-[68px] px-[15px]">
      <div className="text-center">
        <h1 className="text-textSecondary font-outfit text-[26px] xl:text-[40px] font-medium xl:leading-[48px]">
          From Startup to Enterprise.
        </h1>
        <p className="mt-3 text-textLight font-manrope xl:text-xl font-medium leading-[30px]">
          Perfectly tailored for every stage of your growth.
          <br />
          Get started today, no credit card needed.
        </p>
      </div>
      {/*  */}
      <FromStartUpCard />
    </section>
  );
};

export default FromStartUp;
