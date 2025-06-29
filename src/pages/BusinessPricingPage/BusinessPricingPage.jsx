import { useBusinessPricing } from "@/hooks/cms.queries";
import BusinessPricingBanner from "./section/BusinessPricingBanner";
import FAQ from "./section/FAQ";
import FreeAll from "./section/FreeAll";
import { useEffect } from "react";
import { Loader } from "@/components/Loader/Loader";

const BusinessPricingPage = () => {
  const { data: businessPricing, isLoading } = useBusinessPricing();
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
      <BusinessPricingBanner data={businessPricing?.banner} />
      <FreeAll
        data={businessPricing?.section_description}
        data2={businessPricing?.description_items}
      />
      <FAQ data={businessPricing?.faqs} />
    </>
  );
};

export default BusinessPricingPage;
