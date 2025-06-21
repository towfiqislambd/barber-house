import FromStartUpCard from "@/components/BusinessPricingPrice/FromStartUpCard/FromStartUpCard";

const FromStartUp = ({ data }) => {
  return (
    <section className="max-w-[1160px] mx-auto py-[68px] px-[15px]">
      <div className="text-center">
        <h1 className="text-textSecondary font-outfit text-[26px] xl:text-[40px] font-medium xl:leading-[48px]">
          {data?.title}
        </h1>
        <p className="mt-3 text-textLight font-manrope xl:text-xl font-medium leading-[30px]">
          {data?.sub_title}
        </p>
      </div>
      <FromStartUpCard />
    </section>
  );
};

export default FromStartUp;
