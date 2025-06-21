import StayConnectedCard from "@/components/BusinessHomePageCommon/StayConnectedCard/StayConnectedCard";
const StayConnected = ({ data }) => {
  return (
    <section className="bg-[#F4F5F7]">
      <div className="py-[65px] container space-y-20">
        {data?.map((item, idx) => (
          <StayConnectedCard
            image={item?.icon}
            title={item?.link_text}
            subTitle={item?.title}
            description={item?.description}
            reverse={idx === 1}
          />
        ))}
      </div>
    </section>
  );
};

export default StayConnected;
