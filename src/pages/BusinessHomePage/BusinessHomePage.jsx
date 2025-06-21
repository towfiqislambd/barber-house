import CallToAction from "@/components/BusinessHomePageCommon/CallToAction/CallToAction";
import BusinessHomeBanner from "./section/BusinessHomeBanner";
import GetStarted from "./section/GetStarted";
import GrowBusiness from "./section/GrowBusiness";
import StayConnected from "./section/StayConnected";
import TopRated from "./section/TopRated";
import WhatOurUserSay from "./section/WhatOurUserSay";
import { useBusinessHome } from "@/hooks/cms.queries";
import { Loader } from "@/components/Loader/Loader";
import { useEffect } from "react";

const BusinessHomePage = () => {
  const { data: businessHome, isLoading } = useBusinessHome();
  useEffect(() => {
    if (isLoading) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "";
    }
    return () => {
      document.body.style.overflow = "";
    };
  }, [isLoading]);

  if (isLoading) {
    return (
      <div className="flex justify-center items-center h-[80vh]">
        <Loader />
      </div>
    );
  }

  return (
    <>
      <BusinessHomeBanner data={businessHome} />
      <TopRated data={businessHome?.stats} />
      <GrowBusiness data={businessHome?.grow_business} />
      <StayConnected data={businessHome?.stay_connected?.items} />
      <GetStarted data={businessHome?.get_started} />
      <CallToAction
        title={businessHome?.interested?.title}
        subtitle={businessHome?.interested?.sub_title}
        btnText={businessHome?.interested?.button_text}
      />
      <WhatOurUserSay data={businessHome?.client_says} />
    </>
  );
};

export default BusinessHomePage;
