import {
  ContinueButtonArrowSvg,
  LeftSideArrowSvg,
} from "@/components/svgContainer/SvgContainer";
import { Label } from "@/components/ui/label";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useForm, Controller } from "react-hook-form";

const OnlineProfileStepFour = ({ step, setStep, setFormData }) => {
  const {
    handleSubmit,
    control,
    register,
    formState: { errors },
  } = useForm({
    defaultValues: {
      day_name: "",
      morning_start_time: "",
      morning_end_time: "",
      evening_start_time: "",
      evening_end_time: "",
    },
  });

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

        <div className="max-w-[608px] mx-auto mt-6 lg:mt-0 px-5 md:px-0 pb-10 sm:pb-0">
          <h1 className="text-textColor font-outfit lg:text-4xl text-3xl font-semibold leading-[43.2px]">
            Add your opening hours
          </h1>
          <p className="text-textLight mt-3 font-manrope text-base font-medium leading-6 mb-8">
            Let clients know your standard opening hours. These will be
            displayed on your profile but do not affect your appointments
            calendar.
          </p>

          {/* Select Day */}
          <Controller
            name="day_name"
            control={control}
            rules={{ required: "Please select a day" }}
            render={({ field }) => (
              <Select onValueChange={field.onChange} value={field.value}>
                <SelectTrigger className="w-full text-base border !py-6">
                  <SelectValue placeholder="Select a day" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="saturday">Saturday</SelectItem>
                  <SelectItem value="sunday">Sunday</SelectItem>
                  <SelectItem value="monday">Monday</SelectItem>
                  <SelectItem value="tuesday">Tuesday</SelectItem>
                  <SelectItem value="wednesday">Wednesday</SelectItem>
                  <SelectItem value="thursday">Thursday</SelectItem>
                  <SelectItem value="friday">Friday</SelectItem>
                </SelectContent>
              </Select>
            )}
          />
          {errors.day_name && (
            <p className="text-red-500 text-sm mt-1">
              {errors.day_name.message}
            </p>
          )}

          {/* Morning Start Time */}
          <div className="grid w-full items-center gap-1.5 lg:mt-5 mt-4">
            <Label htmlFor="morning_start_time">Morning start time</Label>
            <Input
              id="morning_start_time"
              type="number"
              placeholder="7.00"
              {...register("morning_start_time", {
                required: "Start time is required",
              })}
            />
            {errors.morning_start_time && (
              <p className="text-red-500 text-sm mt-1">
                {errors.morning_start_time.message}
              </p>
            )}
          </div>

          {/* Morning End Time */}
          <div className="grid w-full items-center gap-1.5 lg:mt-5 mt-4">
            <Label htmlFor="morning_end_time">Morning end time</Label>
            <Input
              id="morning_end_time"
              type="number"
              placeholder="9.00"
              {...register("morning_end_time", {
                required: "End time is required",
              })}
            />
            {errors.morning_end_time && (
              <p className="text-red-500 text-sm mt-1">
                {errors.morning_end_time.message}
              </p>
            )}
          </div>

          {/* Evening Start Time */}
          <div className="grid w-full items-center gap-1.5 lg:mt-8 mt-4">
            <Label htmlFor="evening_start_time">Evening start time</Label>
            <Input
              id="evening_start_time"
              type="number"
              placeholder="7.00"
              {...register("evening_start_time", {
                required: "Start time is required",
              })}
            />
            {errors.evening_start_time && (
              <p className="text-red-500 text-sm mt-1">
                {errors.evening_start_time.message}
              </p>
            )}
          </div>

          {/* Evening End Time */}
          <div className="grid w-full items-center gap-1.5 lg:mt-5 mt-4">
            <Label htmlFor="evening_end_time">Evening end time</Label>
            <Input
              id="evening_end_time"
              type="number"
              placeholder="9.00"
              {...register("evening_end_time", {
                required: "End time is required",
              })}
            />
            {errors.evening_end_time && (
              <p className="text-red-500 text-sm mt-1">
                {errors.evening_end_time.message}
              </p>
            )}
          </div>
        </div>
      </form>
    </section>
  );
};

export default OnlineProfileStepFour;
