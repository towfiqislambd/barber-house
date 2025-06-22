import {
  LeftSideArrowSvg,
  UploadSvg,
} from "@/components/svgContainer/SvgContainer";
import { useForm } from "react-hook-form";
import { useState } from "react";
import { useOnboard } from "@/hooks/cms.mutations";

const StepFive = ({ step, setStep, formData }) => {
  const { mutateAsync: boardingMutation, isPending } = useOnboard();
  const {
    handleSubmit,
    setError,
    register,
    clearErrors,
    formState: { errors },
  } = useForm();

  const [uploadedFiles, setUploadedFiles] = useState({
    tradeLicense: null,
    vatCertificate: null,
    passportCopy: null,
    bankStatement: null,
  });

  const [messages, setMessages] = useState({
    tradeLicense: null,
    vatCertificate: null,
    passportCopy: null,
    bankStatement: null,
  });

  const handlePrevStep = e => {
    e.preventDefault();
    setStep(step - 1);
  };

  const handleFileChange = (e, fieldName) => {
    const file = e.target.files?.[0];
    if (file) {
      setUploadedFiles(prev => ({ ...prev, [fieldName]: file }));
      clearErrors(fieldName);
      setMessages(prev => ({
        ...prev,
        [fieldName]: `✅ ${file.name} added successfully.`,
      }));
    }
  };

  const onSubmit = async data => {
    let isValid = true;

    Object.keys(uploadedFiles).forEach(key => {
      if (!uploadedFiles[key]) {
        setError(key, { type: "manual", message: "Please upload a file" });
        isValid = false;
      }
    });

    if (!data.terms_and_condition) {
      setError("terms_and_condition", {
        type: "manual",
        message: "You must agree to the terms and conditions",
      });
      isValid = false;
    }

    if (!isValid) return;

    const formDataToSend = new FormData();

    // Attach files
    formDataToSend.append("trade_license", uploadedFiles.tradeLicense);
    formDataToSend.append(
      "vat_registration_certificate",
      uploadedFiles.vatCertificate
    );
    formDataToSend.append("passport_copy", uploadedFiles.passportCopy);
    formDataToSend.append("account_statement", uploadedFiles.bankStatement);

    // Attach other fields explicitly from formData
    formDataToSend.append("business_name", formData.business_name);
    formDataToSend.append("website_url", formData.website_url);

    // service_id is an array; append each value individually or as JSON string
    formData.service_id.forEach(id => {
      formDataToSend.append("service_id[]", id); // or just "service_id"
    });

    formDataToSend.append("team_size", formData.team_size);
    formDataToSend.append("address", formData.address);
    formDataToSend.append(
      "do_not_business_address",
      formData.do_not_business_address.toString()
    );
    formDataToSend.append("calendly", formData.calendly.toString());

    // Terms and conditions checkbox
    formDataToSend.append(
      "terms_and_condition",
      data.terms_and_condition ? "1" : "0"
    );

    // Fixed latitude and longitude
    formDataToSend.append("latitude", formData.latitude);
    formDataToSend.append("longitude", formData.longitude);

    await boardingMutation(formDataToSend);
  };

  const fileFields = [
    { name: "tradeLicense", label: "Trade license" },
    { name: "vatCertificate", label: "VAT registration certificate" },
    { name: "passportCopy", label: "Owner’s passport copy" },
    {
      name: "bankStatement",
      label: "Business Bank Account Statement (Last 3 Months)",
    },
  ];

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div className="flex justify-between items-center mb-5">
        <button onClick={handlePrevStep} className="cursor-pointer">
          <LeftSideArrowSvg />
        </button>
        <button
          type="submit"
          className="py-[8px] xl:py-4 px-6 font-manrope text-lg bg-primary text-white font-semibold rounded-lg mt-5"
        >
          {isPending ? "Submitting..." : "Submit"}
        </button>
      </div>

      <div className="text-center">
        <h4 className="font-outfit text-lg">Legal Documents</h4>
        <h3 className="text-[#1E1E1E] font-outfit text-[24px] xl:text-4xl py-4 font-semibold">
          Business legal documents
        </h3>
        <p className="font-outfit text-[16px] xl:text-xl text-[#8993A4] mb-5 max-w-[486px] mx-auto">
          This is the brand name your clients will see. Your billing and legal
          name can be added later.
        </p>
      </div>

      <div className="max-w-[550px] mx-auto space-y-5">
        {fileFields.map(({ name, label }) => (
          <div key={name}>
            <h4 className="font-outfit text-lg mb-2">{label}</h4>

            <label
              htmlFor={name}
              className="border cursor-pointer rounded p-5 flex justify-between items-center"
            >
              <div>
                <div className="flex gap-2 items-center mb-2">
                  <UploadSvg />
                  <p className="text-[#545454] font-outfit">
                    Drag and drop files here or upload
                  </p>
                </div>
                <p className="text-[#757575] font-outfit text-[15px]">
                  Accepted file types JPEG, Doc, PDF, PNG
                </p>
              </div>
              <p className="text-primary font-outfit px-5 py-[5px] rounded border border-borderColorLight">
                Upload
              </p>
              <input
                id={name}
                type="file"
                onChange={e => handleFileChange(e, name)}
                className="hidden"
              />
            </label>

            {messages[name] && (
              <p className="text-green-600 text-sm mt-1">{messages[name]}</p>
            )}
            {errors[name] && (
              <p className="text-red-500 text-sm mt-1">
                {errors[name].message}
              </p>
            )}
          </div>
        ))}

        {/* Terms and Conditions */}
        <div className="flex gap-2 items-center mt-6">
          <input
            id="terms_and_condition"
            type="checkbox"
            {...register("terms_and_condition")}
          />
          <label
            htmlFor="terms_and_condition"
            className="text-sm text-[#1E1E1E]"
          >
            I agree to the terms and conditions of BS
          </label>
        </div>
        {errors.terms_and_condition && (
          <p className="text-red-500 text-sm mt-1">
            {errors.terms_and_condition.message}
          </p>
        )}
      </div>
    </form>
  );
};

export default StepFive;
