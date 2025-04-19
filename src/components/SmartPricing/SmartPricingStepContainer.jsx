import { useState } from "react";
import SmartPricingStepFormOne from "./SmartPricingStepFormOne";
import SmartPricingStepFormTwo from "./SmartPricingStepFormTwo";
import SmartPricingStepFormThree from "./SmartPricingStepFormThree";

const SmartPricingStepContainer = () => {
  const [step, setStep] = useState(1);

  // For step form
  const renderStep = () => {
    if (step === 1) {
      return <SmartPricingStepFormOne step={step} setStep={setStep} />;
    }
    if (step === 2) {
      return <SmartPricingStepFormTwo step={step} setStep={setStep} />;
    }
    if (step === 3) {
      return <SmartPricingStepFormThree step={step} setStep={setStep} />;
    }
  };
  return (
    <div className="lg:mt-[68px]">
      {/* Step bar */}
      <div className="flex gap-5 items-center justify-center container">
        <div
          className={`w-[435px] h-2 rounded ${
            step === 1 ? "bg-primary" : "bg-[#DFE1E6]"
          }`}
        ></div>

        <div
          className={`w-[435px] h-2 rounded ${
            step === 2 ? "bg-primary" : "bg-[#DFE1E6]"
          }`}
        ></div>

        <div
          className={`w-[435px] h-2 rounded ${
            step === 3 ? "bg-primary" : "bg-[#DFE1E6]"
          }`}
        ></div>
      </div>

      {/* Step Content */}
      <div>{renderStep()}</div>
    </div>
  );
};

export default SmartPricingStepContainer;
