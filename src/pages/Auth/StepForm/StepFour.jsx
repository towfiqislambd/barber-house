import {
  LeftSideArrowSvg,
  LocationSvgInStepFrom,
} from "@/components/svgContainer/SvgContainer";
import { useForm } from "react-hook-form";

const StepFour = ({ step, setStep, setFormData }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    defaultValues: {
      address: "",
      do_not_business_address: 0,
      calendly: 0,
    },
  });

  const onSubmit = data => {
    // Ensure boolean values are converted to 1 or 0
    const payload = {
      address: data.address,
      do_not_business_address: data.do_not_business_address ? 1 : 0,
      calendly: data.calendly
    };

    setStep(step + 1);
    setFormData(prevData => ({ ...prevData, ...payload }));
  };

  const handlePrevStep = e => {
    e.preventDefault();
    setStep(step - 1);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      {/* Navigation buttons */}
      <div className="flex justify-between items-center mb-5">
        <button onClick={handlePrevStep} className="cursor-pointer">
          <LeftSideArrowSvg />
        </button>
        <button className="py-[8px] xl:py-4 px-6 font-manrope text-lg bg-primary text-white font-semibold rounded-lg mt-5">
          Continue
        </button>
      </div>

      {/* Main content */}
      <div className="max-w-[690px] mx-auto">
        {/* Address block */}
        <div className="text-left mb-14 max-w-[554px]">
          <h4 className="font-outfit text-lg">Account setup</h4>
          <h3 className="text-[#1E1E1E] font-outfit text-[28px] xl:text-4xl py-4 font-semibold">
            Set your location address
          </h3>
          <p className="font-outfit text-[16px] xl:text-xl text-[#8993A4] mb-5">
            Add your business location so your clients can easily find you.
          </p>

          <label htmlFor="address" className="xl:text-lg font-medium">
            Where&apos;s your business located?
          </label>
          <div className="relative">
            <input
              id="address"
              type="text"
              placeholder="Zoo, Dhaka, Bangladesh"
              className="block mt-3 w-full px-10 mb-2 py-3 border rounded-lg border-[#797979]"
              {...register("address", { required: true })}
            />
            {errors.address && (
              <span className="text-red-400">This field is required</span>
            )}
            <div className="absolute top-3 left-2">
              <LocationSvgInStepFrom />
            </div>
          </div>

          <div className="flex gap-2 items-center mt-5">
            <input
              id="do_not_business_address"
              type="checkbox"
              {...register("do_not_business_address")}
            />
            <label
              htmlFor="do_not_business_address"
              className="text-sm text-[#1E1E1E]"
            >
              I don&apos;t have a business address (mobile and online services
              only)
            </label>
          </div>
        </div>

        {/* Software section */}
        <div className="text-left mb-14 max-w-[690px]">
          <h4 className="font-outfit text-lg">Account setup</h4>
          <h3 className="text-[#1E1E1E] font-outfit text-[24px] xl:text-4xl py-4 font-semibold">
            Which software are you currently using?
          </h3>
          <p className="font-outfit  xl:text-xl text-[#8993A4] mb-5">
            If you&apos;re looking to switch, we can help speed up your business
            setup and import your data into your new Fresha account.
          </p>

          <div className="flex gap-2 items-center mt-5">
            <div className="relative">
              <input
                id="calendly"
                type="text"
                placeholder="Calendly"
                className="block mt-3 w-full px-10 mb-2 py-3 border rounded-lg border-[#797979]"
                {...register("calendly", { required: true })}
              />
              {errors.calendly && (
                <span className="text-red-400">This field is required</span>
              )}
            </div>
          </div>
        </div>
      </div>
    </form>
  );
};

export default StepFour;
