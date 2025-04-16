import BusinessPricingBanner from "./section/BusinessPricingBanner";
import FAQ from "./section/FAQ";
import FreeAll from "./section/FreeAll";
import FromStartUp from "./section/FromStartUp";

const BusinessPricingPage = () => {
  return (
    <div>
      <BusinessPricingBanner />
      <FromStartUp />
      <FreeAll />
      <FAQ />
    </div>
  );
};

export default BusinessPricingPage;
