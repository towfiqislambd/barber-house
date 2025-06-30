import StepOne from "./StepOne";
import StepTwo from "./StepTwo";
import StepThree from "./StepThree";
import StepFour from "./StepFour";
import StepFive from "./StepFive";
import { useState } from "react";

const StepContainer = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState(null);

  // For step form
  const renderStep = () => {
    if (step === 1) {
      return (
        <StepOne
          formData={formData}
          setFormData={setFormData}
          step={step}
          setStep={setStep}
        />
      );
    }
    if (step === 2) {
      return (
        <StepTwo
          formData={formData}
          setFormData={setFormData}
          step={step}
          setStep={setStep}
        />
      );
    }
    if (step === 3) {
      return (
        <StepThree
          formData={formData}
          setFormData={setFormData}
          step={step}
          setStep={setStep}
        />
      );
    }
    if (step === 4) {
      return (
        <StepFour
          formData={formData}
          setFormData={setFormData}
          step={step}
          setStep={setStep}
        />
      );
    }
    if (step === 5) {
      return (
        <StepFive
          formData={formData}
          setFormData={setFormData}
          step={step}
          setStep={setStep}
        />
      );
    }
  };
  return (
    <div className="px-[15px] xl:px-40 py-14">
      {/* Step bar */}
      <div className="flex gap-5 items-center justify-center">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="164"
          height="4"
          viewBox="0 0 164 4"
          fill="none"
        >
          <path
            d="M2 2H162"
            stroke={step === 1 ? "#EE6C9C" : "#DFE1E6"}
            strokeWidth="4"
            strokeLinecap="round"
          />
        </svg>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="164"
          height="4"
          viewBox="0 0 164 4"
          fill="none"
        >
          <path
            d="M2 2H162"
            stroke={step === 2 ? "#EE6C9C" : "#DFE1E6"}
            strokeWidth="4"
            strokeLinecap="round"
          />
        </svg>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="164"
          height="4"
          viewBox="0 0 164 4"
          fill="none"
        >
          <path
            d="M2 2H162"
            stroke={step === 3 ? "#EE6C9C" : "#DFE1E6"}
            strokeWidth="4"
            strokeLinecap="round"
          />
        </svg>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="164"
          height="4"
          viewBox="0 0 164 4"
          fill="none"
        >
          <path
            d="M2 2H162"
            stroke={step === 4 ? "#EE6C9C" : "#DFE1E6"}
            strokeWidth="4"
            strokeLinecap="round"
          />
        </svg>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="164"
          height="4"
          viewBox="0 0 164 4"
          fill="none"
        >
          <path
            d="M2 2H162"
            stroke={step === 5 ? "#EE6C9C" : "#DFE1E6"}
            strokeWidth="4"
            strokeLinecap="round"
          />
        </svg>
      </div>

      {/* Step Content */}
      <div>{renderStep()}</div>
    </div>
  );
};

export default StepContainer;
