import StayConnectedCard from "@/components/BusinessHomePageCommon/StayConnectedCard/StayConnectedCard";
import stayConnectedImage from "../../../assets/images/stayConnectedImage.png";
const StayConnected = () => {
  return (
    <section className="bg-[#F4F5F7]">
      <div className="py-[65px] container">
        <StayConnectedCard
          image={stayConnectedImage}
          title={"Stay Connected Automatically"}
          subTitle={"Stay Connected Automatically"}
        />
        <div className="mt-[68.5px]">
          <StayConnectedCard
            image={stayConnectedImage}
            title={"Online Booking"}
            subTitle={"Attract Clients Online"}
            reverse={true}
          />
        </div>
      </div>
    </section>
  );
};

export default StayConnected;
