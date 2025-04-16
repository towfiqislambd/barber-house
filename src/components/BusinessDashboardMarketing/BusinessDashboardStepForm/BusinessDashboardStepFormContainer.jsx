import { useState } from "react";
import BusinessDashboardStepFormOne from "./BusinessDashboardStepFormOne";
import BusinessDashboardStepFormTwo from "./BusinessDashboardStepFormTwo";

const BusinessDashboardStepFormContainer = () => {
  const [step, setStep] = useState(1);

  // For step form
  const renderStep = () => {
    if (step === 1) {
      return <BusinessDashboardStepFormOne step={step} setStep={setStep} />;
    }
    if (step === 2) {
      return <BusinessDashboardStepFormTwo step={step} setStep={setStep} />;
    }
  };
  return (
    <div className="mt-[68px]">
      {/* Step bar */}
      <div className="flex gap-5 items-center justify-center container">
        <div
          className={`w-[435px] h-2 rounded ${
            step === 1 ? "bg-[#6950F3]" : "bg-[#DFE1E6]"
          }`}
        ></div>

        <div
          className={`w-[435px] h-2 rounded ${
            step === 2 ? "bg-[#6950F3]" : "bg-[#DFE1E6]"
          }`}
        ></div>

        <div
          className={`w-[435px] h-2 rounded ${
            step === 3 ? "bg-[#6950F3]" : "bg-[#DFE1E6]"
          }`}
        ></div>
      </div>

      {/* Step Content */}
      <div>{renderStep()}</div>
    </div>
  );
};

export default BusinessDashboardStepFormContainer;
