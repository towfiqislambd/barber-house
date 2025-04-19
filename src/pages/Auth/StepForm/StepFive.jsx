import { LeftSideArrowSvg } from "@/components/svgContainer/SvgContainer";
import { useForm } from "react-hook-form";

const StepFive = ({ step, setStep, setFormData }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();
  const onSubmit = data => {
    if (data) {
      setStep(step + 1);
      setFormData(prevData => ({ ...prevData, ...data }));
    }
  };
  const handlePrevStep = e => {
    e.preventDefault();
    setStep(step - 1);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      {/* Next, Prev btns */}
      <div className="flex justify-between items-center mb-5">
        <button onClick={handlePrevStep} className="cursor-pointer">
          <LeftSideArrowSvg />
        </button>
        <button className="py-[8px] xl:py-4 px-6 font-manrope text-lg bg-primary text-white font-semibold rounded-lg mt-5">
          Continue
        </button>
      </div>
      <div className="text-center">
        <h4 className="font-outfit text-lg">Bank Details</h4>
        <h3 className="text-[#1E1E1E] font-outfit text-[24px] xl:text-4xl py-4 font-semibold">
          Your bank statement details
        </h3>
        <p className="font-outfit text-[16px] xl:text-xl text-[#8993A4] mb-5 max-w-[486px] mx-auto">
          This is the brand name your clients will see. Your billing and legal
          name can be added later.
        </p>
      </div>
      <div className="max-w-[550px] mx-auto">
        {/* bank name */}
        <div className="self-end text-left mb-5">
          <label
            htmlFor="bankName"
            className="text-[16px] xl:text-xl font-medium"
          >
            Bank name
          </label>
          <input
            id="bankName"
            type="text"
            {...register("bankName", { required: true })}
            placeholder="Input your bank name"
            className="block mt-3 w-full px-4 mb-2 py-3 border rounded-lg border-[#797979]"
          />
          {errors.bankName && (
            <span className="text-red-400">This field is required</span>
          )}
        </div>
        {/* IBAN number  */}
        <div className="self-end text-left mb-5">
          <label
            htmlFor="ibanNumber"
            className="text-[16px] xl:text-xl font-medium"
          >
            IBAN number{" "}
          </label>
          <input
            id="ibanNumber"
            type="text"
            {...register("ibanNumber", { required: true })}
            placeholder="Input your IBAN number"
            className="block mt-3 w-full px-4 mb-2 py-3 border rounded-lg border-[#797979]"
          />
          {errors.ibanNumber && (
            <span className="text-red-400">This field is required</span>
          )}
        </div>
        {/* Account holder name */}
        <div className="self-end text-left mb-5">
          <label
            htmlFor="accountHolderName"
            className="text-[16px] xl:text-xl font-medium"
          >
            Account holder name
          </label>
          <input
            id="accountHolderName"
            type="text"
            {...register("accountHolderName", { required: true })}
            placeholder="Input account holder name"
            className="block mt-3 w-full px-4 mb-2 py-3 border rounded-lg border-[#797979]"
          />
          {errors.accountHolderName && (
            <span className="text-red-400">This field is required</span>
          )}
        </div>
      </div>
    </form>
  );
};

export default StepFive;
