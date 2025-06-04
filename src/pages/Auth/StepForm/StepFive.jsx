import {
  LeftSideArrowSvg,
  UploadSvg,
} from "@/components/svgContainer/SvgContainer";
import { useForm } from "react-hook-form";
import { message, Upload } from "antd";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useOnboard } from "@/hooks/cms.mutations";

const { Dragger } = Upload;

const StepFive = ({ step, setStep, setFormData, formData }) => {
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

    if (isValid) {
      const mappedData = {
        trade_license: uploadedFiles.tradeLicense,
        vat_registration_certificate: uploadedFiles.vatCertificate,
        passport_copy: uploadedFiles.passportCopy,
        account_statement: uploadedFiles.bankStatement,
        terms_and_condition: data.terms_and_condition ? 1 : 0,
      };

      setFormData(prev => ({ ...prev, ...mappedData }));
    }
    await boardingMutation(formData);
  };

  const handlePrevStep = e => {
    e.preventDefault();
    setStep(step - 1);
  };

  const handleFileChange = (fieldName, info) => {
    const { file } = info;
    if (file.status !== "removed") {
      setUploadedFiles(prev => ({ ...prev, [fieldName]: file }));
      clearErrors(fieldName);
      message.success(`${file.name} added successfully.`);
    }
  };

  const uploadProps = fieldName => ({
    name: "file",
    multiple: false,
    beforeUpload: file => {
      handleFileChange(fieldName, { file });
      return false;
    },
  });

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
          Submit
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

      <div id="dragger" className="max-w-[550px] mx-auto space-y-5">
        {[
          { name: "tradeLicense", label: "Trade license" },
          { name: "vatCertificate", label: "VAT registration certificate" },
          { name: "passportCopy", label: "Owner’s passport copy" },
          {
            name: "bankStatement",
            label: "Business Bank Account Statement (Last 3 Months)",
          },
        ].map(({ name, label }) => (
          <div key={name}>
            <h4 className="font-outfit text-lg mb-2">{label}</h4>
            <Dragger {...uploadProps(name)}>
              <label className="border cursor-pointer rounded p-5 flex justify-between items-center">
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
                  upload
                </p>
              </label>
            </Dragger>
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
