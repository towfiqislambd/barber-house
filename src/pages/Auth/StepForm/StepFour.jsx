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
  } = useForm()


  const onSubmit = (data) => {
    if (data) {
      setStep(step + 1);
      setFormData(prevData => ({ ...prevData, ...data }));
    }
  };

  const handlePrevStep = (e) => {
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
        <button className="py-[8px] xl:py-4 px-6 font-manrope text-lg bg-[#008A90] text-white font-semibold rounded-lg mt-5">
          Continue
        </button>
      </div>
      {/* Main form */}
      <div className="max-w-[690px] mx-auto">
        <div className="text-left mb-14 max-w-[554px]">
          <h4 className="font-outfit text-lg">Account setup</h4>
          <h3 className="text-[#1E1E1E] font-outfit text-[28px] xl:text-4xl py-4 font-semibold">
            Set your location address
          </h3>
          <p className="font-outfit text-[16px] xl:text-xl text-[#8993A4] mb-5">
            Add your business location so your clients can easily find you.
          </p>
          <div className="">
            <label htmlFor="location" className="xl:text-lg font-medium">
              Where&apos;s your business located?
            </label>
            <div className="relative">
              <input
                id="location"
                type="text"
                placeholder="Zoo, Dhaka, Bangladesh"
                className="block mt-3 w-full px-10 mb-2 py-3 border rounded-lg border-[#797979]"
                {...register("location", { required: true })}
              />
              {errors.location && <span className="text-red-400">This field is required</span>}
              <div className="absolute top-3 left-2">
                <LocationSvgInStepFrom />
              </div>
            </div>
          </div>
          <div className="flex gap-2 items-center mt-5">
            <input id="services" type="checkbox" />
            <label htmlFor="services" className="text-sm text-[#1E1E1E]">
              I don&apos;t have a business address (mobile and online services
              only)
            </label>
          </div>
        </div>
        <div className="text-left mb-14 max-w-[690px]">
          <h4 className="font-outfit text-lg">Account setup</h4>
          <h3 className="text-[#1E1E1E] font-outfit text-[24px] xl:text-4xl py-4 font-semibold">
            Which software are you currently using?
          </h3>
          <p className="font-outfit  xl:text-xl text-[#8993A4] mb-5">
            If you&apos;re looking to switch, we can help speed up your business
            setup and import your data into your new Fresha account..
          </p>
          <div className="flex gap-2 items-center mt-5">
            <input id="calendly" type="checkbox" />
            <label htmlFor="calendly" className="text-sm text-[#1E1E1E]">
              Calendly
            </label>
          </div>
        </div>
      </div>
    </form>
  );
};

export default StepFour;
