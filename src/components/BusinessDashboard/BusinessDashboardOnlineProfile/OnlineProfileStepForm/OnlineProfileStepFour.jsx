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
import { Checkbox } from "@/components/ui/checkbox";

const days = [
  "Saturday",
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
];

const OnlineProfileStepFour = ({
  step,
  setStep,
  formData,
  setFormData,
  details,
}) => {
  // Extract selected days
  const selectedDays = details?.opening_hours?.map(item => item.day_name) || [];

  // Use first entry for time values
  const defaultTimeData = details?.opening_hours?.[0] || {
    morning_start_time: "",
    morning_end_time: "",
    evening_start_time: "",
    evening_end_time: "",
  };

  // Convert 12-hour format to 24-hour for input[type="time"]
  const convertTo24Hour = time12h => {
    if (!time12h) return "";
    const [time, modifier] = time12h.split(" ");
    let [hours, minutes] = time.split(":");
    if (hours === "12") hours = "00";
    if (modifier === "PM") hours = parseInt(hours, 10) + 12;
    return `${String(hours).padStart(2, "0")}:${minutes}`;
  };

  const {
    handleSubmit,
    control,
    register,
    formState: { errors },
  } = useForm({
    defaultValues: {
      day_name: formData?.day_name || selectedDays,
      morning_start_time: convertTo24Hour(
        formData?.morning_start_time || defaultTimeData.morning_start_time
      ),
      morning_end_time: convertTo24Hour(
        formData?.morning_end_time || defaultTimeData.morning_end_time
      ),
      evening_start_time: convertTo24Hour(
        formData?.evening_start_time || defaultTimeData.evening_start_time
      ),
      evening_end_time: convertTo24Hour(
        formData?.evening_end_time || defaultTimeData.evening_end_time
      ),
    },
  });

  const formatTimeTo12Hour = time24 => {
    if (!time24) return "";
    const [hour, minute] = time24.split(":");
    const hourNum = parseInt(hour, 10);
    const ampm = hourNum >= 12 ? "PM" : "AM";
    const hour12 = hourNum % 12 || 12;
    return `${hour12}:${minute} ${ampm}`;
  };

  const onSubmit = data => {
    const formattedData = {
      ...data,
      morning_start_time: formatTimeTo12Hour(data.morning_start_time),
      morning_end_time: formatTimeTo12Hour(data.morning_end_time),
      evening_start_time: formatTimeTo12Hour(data.evening_start_time),
      evening_end_time: formatTimeTo12Hour(data.evening_end_time),
    };

    setFormData(prevData => ({ ...prevData, ...formattedData }));
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
          <h1 className="text-textColor font-outfit lg:text-4xl text-2xl font-semibold leading-[43.2px]">
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
            rules={{
              validate: value =>
                value.length > 0 || "Please select at least one day",
            }}
            render={({ field: { value, onChange } }) => (
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-4 mb-4">
                {days.map(day => (
                  <label key={day} className="flex items-center space-x-2">
                    <Checkbox
                      checked={value.includes(day)}
                      onCheckedChange={checked => {
                        if (checked) {
                          onChange([...value, day]);
                        } else {
                          onChange(value.filter(d => d !== day));
                        }
                      }}
                    />
                    <span className="text-sm">{day}</span>
                  </label>
                ))}
              </div>
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
              type="time"
              placeholder="7:00 AM"
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
              type="time"
              placeholder="9:00 AM"
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
              type="time"
              placeholder="5:00 PM"
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
              type="time"
              placeholder="9:00 PM"
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
