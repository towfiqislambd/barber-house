import { useForm } from "react-hook-form";

const StepOne = ({ step, setStep, setFormData }) => {
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

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      {/* Next, Prev btns */}
      <div className="flex justify-between items-center mb-5">
        <button className="cursor-pointer"></button>
        <button className="py-[8px] xl:py-4 px-6 font-manrope text-lg bg-primary text-white font-semibold rounded-lg mt-5">
          Continue
        </button>
      </div>
      {/* Main form */}
      <div className="max-w-[578px] mx-auto text-center">
        <h4 className="font-outfit text-lg">Account setup</h4>
        <h3 className="text-[#1E1E1E] font-outfit text-[24px] xl:text-4xl py-4 font-semibold">
          What&apos;s your business name?
        </h3>
        <p className="font-outfit text-[16px] xl:text-xl text-[#8993A4] mb-14">
          This is the brand name your clients will see. Your billing and legal
          name can be added later.
        </p>

        {/* Business name */}
        <div className="self-end text-left mb-5">
          <label
            htmlFor="business_name"
            className="text-[16px] xl:text-xl font-medium"
          >
            Business name
          </label>
          <input
            id="business_name"
            type="text"
            {...register("business_name", { required: true })}
            placeholder="Input your first name"
            className="block mt-3 w-full px-4 mb-2 py-3 border rounded-lg border-[#797979]"
          />
          {errors.business_name && (
            <span className="text-red-400">This field is required</span>
          )}
        </div>
        {/* Business website */}
        <div className="self-end text-left">
          <label
            htmlFor="website_url"
            className="text-[16px] xl:text-xl font-medium"
          >
            Website (Optional)
          </label>
          <input
            id="website_url"
            type="url"
            {...register("website_url", { required: true })}
            placeholder="Enter your website name"
            className="block mt-3 w-full px-4 mb-2 py-3 border rounded-lg border-[#797979]"
          />
          {errors.website_url && (
            <span className="text-red-400">This field is required</span>
          )}
        </div>
      </div>
    </form>
  );
};

export default StepOne;
