import { useState } from "react";
import OnlineProfileStepOne from "./OnlineProfileStepOne";
import OnlineProfileStepTwo from "./OnlineProfileStepTwo";
import OnlineProfileStepThree from "./OnlineProfileStepThree";
import OnlineProfileStepSix from "./OnlineProfileStepSix";
import OnlineProfileStepFive from "./OnlineProfileStepFive";
import OnlineProfileStepTen from "./OnlineProfileStepTen";
import OnlineProfileStepEleven from "./OnlineProfileStepEleven";
import OnlineProfileStepFour from "./OnlineProfileStepFour";
import OnlineProfileStepEight from "./OnlineProfileStepEight";
import OnlineProfileStepNine from "./OnlineProfileStepNine";
import useAuth from "@/hooks/useAuth";

const OnlineProfileContainer = () => {
  const { user } = useAuth();
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState(null);

  // For step form
  const renderStep = () => {
    if (step === 1) {
      return (
        <OnlineProfileStepOne
          step={step}
          setStep={setStep}
          formData={formData}
          setFormData={setFormData}
        />
      );
    }
    if (step === 2) {
      return (
        <OnlineProfileStepTwo
          step={step}
          setStep={setStep}
          formData={formData}
          setFormData={setFormData}
          details={user?.business_profile?.online_store}
        />
      );
    }
    if (step === 3) {
      return (
        <OnlineProfileStepThree
          step={step}
          setStep={setStep}
          formData={formData}
          setFormData={setFormData}
          details={user?.business_profile?.online_store}
        />
      );
    }
    if (step === 4) {
      return (
        <OnlineProfileStepFour
          step={step}
          setStep={setStep}
          formData={formData}
          setFormData={setFormData}
          details={user?.business_profile?.online_store}
        />
      );
    }
    if (step === 5) {
      return (
        <OnlineProfileStepFive
          step={step}
          setStep={setStep}
          formData={formData}
          setFormData={setFormData}
          details={user?.business_profile?.online_store}
        />
      );
    }
    if (step === 6) {
      return (
        <OnlineProfileStepSix
          step={step}
          setStep={setStep}
          formData={formData}
          setFormData={setFormData}
        />
      );
    }

    if (step === 7) {
      return (
        <OnlineProfileStepEight
          step={step}
          setStep={setStep}
          formData={formData}
          setFormData={setFormData}
          details={user?.business_profile?.online_store}
        />
      );
    }

    if (step === 8) {
      return (
        <OnlineProfileStepNine
          step={step}
          setStep={setStep}
          formData={formData}
          setFormData={setFormData}
          details={user?.business_profile?.online_store}
        />
      );
    }
    if (step === 9) {
      return (
        <OnlineProfileStepTen
          step={step}
          setStep={setStep}
          formData={formData}
          setFormData={setFormData}
          details={user?.business_profile?.online_store}
        />
      );
    }
    if (step === 10) {
      return (
        <OnlineProfileStepEleven
          step={step}
          setStep={setStep}
          formData={formData}
          setFormData={setFormData}
        />
      );
    }
  };
  return (
    <div className="mt-5 md:mt-0">
      {/* Step bar */}
      <div className="flex gap-5 items-center justify-center container">
        <div
          className={`w-40 h-2 rounded ${
            step === 1 ? "bg-primary" : "bg-[#DFE1E6]"
          }`}
        ></div>

        <div
          className={`w-40 h-2 rounded ${
            step === 2 ? "bg-primary" : "bg-[#DFE1E6]"
          }`}
        ></div>

        <div
          className={`w-40 h-2 rounded ${
            step === 3 ? "bg-primary" : "bg-[#DFE1E6]"
          }`}
        ></div>
        <div
          className={`w-40 h-2 rounded ${
            step === 4 ? "bg-primary" : "bg-[#DFE1E6]"
          }`}
        ></div>
        <div
          className={`w-40 h-2 rounded ${
            step === 5 ? "bg-primary" : "bg-[#DFE1E6]"
          }`}
        ></div>
        <div
          className={`w-40 h-2 rounded ${
            step === 6 ? "bg-primary" : "bg-[#DFE1E6]"
          }`}
        ></div>
        <div
          className={`w-40 h-2 rounded ${
            step === 7 ? "bg-primary" : "bg-[#DFE1E6]"
          }`}
        ></div>
        <div
          className={`w-40 h-2 rounded ${
            step === 8 ? "bg-primary" : "bg-[#DFE1E6]"
          }`}
        ></div>
        <div
          className={`w-40 h-2 rounded ${
            step === 9 ? "bg-primary" : "bg-[#DFE1E6]"
          }`}
        ></div>
      </div>

      {/* Step Content */}
      <div>{renderStep()}</div>
    </div>
  );
};

export default OnlineProfileContainer;
