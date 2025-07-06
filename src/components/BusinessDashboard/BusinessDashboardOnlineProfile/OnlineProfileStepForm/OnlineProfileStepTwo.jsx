import {
  ContinueButtonArrowSvg,
  LeftSideArrowSvg,
} from "@/components/svgContainer/SvgContainer";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useForm } from "react-hook-form";

const OnlineProfileStepTwo = ({ step, setStep, setFormData, details }) => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const onSubmit = data => {
    setFormData(prevData => ({ ...prevData, ...data }));
    setStep(step + 1);
  };

  return (
    <section>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="flex justify-between container mt-9">
          <button type="button" onClick={() => setStep(step - 1)}>
            <LeftSideArrowSvg />
          </button>
          <div className="flex gap-4">
            <button
              type="submit"
              className="bg-[#0D1619] px-[18px] py-[10px] rounded-[10px] text-[#FFF] flex items-center justify-center gap-[6px]"
            >
              Continue
              <ContinueButtonArrowSvg />
            </button>
          </div>
        </div>

        <div className="max-w-[608px] mx-auto xl:mt-[84px] mt-10 font-semibold leading-[43.2px] px-5 md:px-0 mb-5 md:mb-0">
          <h1 className="text-textColor font-outfit text-2xl lg:text-4xl">
            Tell us a bit about this venue
          </h1>
          <p className="text-[#545454] text-sm lg:text-base font-medium leading-6 mt-3">
            Add the display name you had like to be known by, along with a short
            description of your business and the services you offer
          </p>

          {/* Display Name */}
          <div className="grid w-full items-center gap-1.5 lg:mt-8 mt-4">
            <Label
              className="text-[#000] font-manrope text-base font-semibold leading-6"
              htmlFor="name"
            >
              Display Name
            </Label>
            <Input
              defaultValue={details?.name}
              id="name"
              className="lg:w-[608px] w-full lg:h-[55px] h-12 px-4 rounded-lg"
              type="text"
              placeholder="Shihab"
              {...register("name", { required: "Display Name is required" })}
            />
            {errors.name && (
              <p className="text-red-500 text-sm mt-1">{errors.name.message}</p>
            )}
          </div>

          {/* About */}
          <div className="grid w-full gap-1.5 mt-4">
            <Label
              className="text-[#000] font-manrope text-base font-semibold leading-6"
              htmlFor="about"
            >
              About
            </Label>
            <Textarea
              defaultValue={details?.about}
              id="about"
              className="h-[130px]"
              placeholder="Type your message here."
              {...register("about", {
                required: "About is required",
              })}
            />
            {errors.about && (
              <p className="text-red-500 text-sm mt-1">
                {errors.about.message}
              </p>
            )}
          </div>
        </div>
      </form>
    </section>
  );
};

export default OnlineProfileStepTwo;
