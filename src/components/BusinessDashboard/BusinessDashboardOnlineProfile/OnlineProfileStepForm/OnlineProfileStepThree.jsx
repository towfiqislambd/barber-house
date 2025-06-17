import {
  ContinueButtonArrowSvg,
  LeftSideArrowSvg,
} from "@/components/svgContainer/SvgContainer";
import { Input } from "@/components/ui/input";
import PhoneInput from "react-phone-input-2";
import "react-phone-input-2/lib/style.css";
import { useForm, Controller } from "react-hook-form";

const OnlineProfileStepThree = ({ step, setStep }) => {
  const {
    handleSubmit,
    control,
    register,
    formState: { errors },
  } = useForm({
    defaultValues: {
      phone: "",
      email: "",
    },
  });

  const onSubmit = data => {
    console.log(data);
    setStep(step + 1);
  };

  return (
    <section>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="flex justify-between container mt-9">
          <button
            type="button"
            onClick={() => {
              setStep(step - 1);
            }}
          >
            <LeftSideArrowSvg />
          </button>
          <div className="flex sm:flex-row flex-col gap-4">
            <button
              type="button"
              className="border border-[#0D1619] sm:px-[18px] px-3 sm:py-[10px] py-2 rounded-[10px] text-[#0D1619] font-manrope text-sm sm:text-base font-bold leading-6"
            >
              Close
            </button>
            <button
              type="submit"
              className="bg-[#0D1619] rounded-[10px] text-[#FFF] sm:w-[135px] py-2 sm:py-0 flex items-center justify-center gap-[6px]"
            >
              Continue
              <ContinueButtonArrowSvg />
            </button>
          </div>
        </div>

        <div className="xl:max-w-[608px] md:w-[500px] w-full mx-auto xl:mt-[84px] mt-12 font-semibold leading-[43.2px] container px-5 xl:px-0 pb-10 sm:pb-0">
          <h1 className="text-textColor font-outfit text-4xl">
            How can clients get in touch?
          </h1>

          {/* Phone */}
          <h1 className="sm:mt-10 mt-5 font-manrope text-lg font-semibold leading-[27px]">
            Business phone number
          </h1>
          <p className="text-[#545454] text-base font-medium leading-6 md:max-w-[465px] max-w-[400px]">
            The contact number is provided for clients to call if there is a
            problem or they need to cancel
          </p>

          <div className="mt-4">
            <Controller
              name="phone"
              control={control}
              rules={{ required: "Phone number is required" }}
              render={({ field }) => (
                <PhoneInput
                  {...field}
                  country="de"
                  regions={"europe"}
                  inputStyle={{
                    width: "100%",
                    height: "51px",
                  }}
                />
              )}
            />
            {errors.phone && (
              <p className="text-red-500 text-sm mt-1">
                {errors.phone.message}
              </p>
            )}
          </div>

          <div className="md:w-[465px] sm:w-[420px] w-full border border-t mt-8"></div>

          {/* Email */}
          <div>
            <h1 className="mt-6 font-manrope text-lg font-semibold leading-[27px]">
              Business email
            </h1>
            <p className="text-[#545454] text-base font-medium leading-6 md:max-w-[465px] w-full">
              Choose where Clerita replies are sent when they respond to
              appointment emails
            </p>

            <div className="mt-4">
              <Input
                className="md:w-[465px] sm:w-[420px] w-full h-[51px] text-[#0D1619] border rounded-[8px]"
                type="email"
                placeholder="mamunur.servey@gmail.com"
                {...register("email", {
                  required: "Email is required",
                  pattern: {
                    value: /^\S+@\S+$/i,
                    message: "Invalid email address",
                  },
                })}
              />
              {errors.email && (
                <p className="text-red-500 text-sm mt-1">
                  {errors.email.message}
                </p>
              )}
            </div>
          </div>
        </div>
      </form>
    </section>
  );
};

export default OnlineProfileStepThree;
