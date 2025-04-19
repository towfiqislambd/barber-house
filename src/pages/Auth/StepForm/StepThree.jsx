import { LeftSideArrowSvg } from "@/components/svgContainer/SvgContainer";
import { useForm } from "react-hook-form";

const StepThree = ({ step, setStep, setFormData }) => {
  const { register, handleSubmit } = useForm();

  const onSubmit = data => {
    setStep(step + 1);
    setFormData(prevData => ({ ...prevData, ...data }));
  };

  const handlePrevStep = e => {
    e.preventDefault();
    setStep(step - 1);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      {/* Navigation buttons */}
      <div className="flex justify-between items-center mb-5">
        <button
          type="button"
          onClick={handlePrevStep}
          className="cursor-pointer"
        >
          <LeftSideArrowSvg />
        </button>
        <button
          type="submit"
          className="py-[8px] xl:py-4 px-6 font-manrope text-lg bg-primary text-white font-semibold rounded-lg mt-5"
        >
          Continue
        </button>
      </div>

      {/* Form Content */}
      <div className="max-w-[578px] mx-auto">
        <h4 className="font-outfit text-lg text-center">Account setup</h4>
        <h3 className="text-[#1E1E1E] font-outfit text-[24px] xl:text-4xl py-4 font-semibold text-center">
          What&apos;s your team size?
        </h3>
        <p className="font-outfit text-[16px] xl:text-xl text-[#8993A4] mb-10 text-center">
          This will help us set up your calendar correctly
        </p>

        <div className="space-y-4">
          {["It's just me", "2-5 people", "10-15 people", "15-25 people"].map(
            (option, index) => (
              <label key={index} className="block cursor-pointer">
                <input
                  type="radio"
                  value={option}
                  {...register("teamSize", { required: true })} // Automatically stores in data object
                  className="hidden peer"
                />
                <p className="border py-4 px-5 font-medium border-[#797979] rounded-lg text-[#1E1E1E] peer-checked:border-borderColor peer-checked:bg-primaryLight">
                  {option}
                </p>
              </label>
            )
          )}
        </div>
      </div>
    </form>
  );
};

export default StepThree;
