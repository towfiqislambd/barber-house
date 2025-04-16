import CallToAction from "@/components/BusinessHomePageCommon/CallToAction/CallToAction";
import BusinessHomeBanner from "./section/BusinessHomeBanner";
import GetStarted from "./section/GetStarted";
import GrowBusiness from "./section/GrowBusiness";
import StayConnected from "./section/StayConnected";
import TopRated from "./section/TopRated";
import WhatOurUserSay from "./section/WhatOurUserSay";

const BusinessHomePage = () => {
  return (
    <div>
      <BusinessHomeBanner />
      <TopRated />
      <GrowBusiness />
      <StayConnected />
      <GetStarted />
      <CallToAction
        title={"Interested to find out more?"}
        subtitle={"Discover More and Begin Your Journey"}
        btnText={"Get Start Now"}
      />
      <WhatOurUserSay />
    </div>
  );
};

export default BusinessHomePage;
