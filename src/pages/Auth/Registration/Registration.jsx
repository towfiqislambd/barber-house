import loginImg from "../../../assets/images/loginImage.png";
import { Checkbox } from "@/components/ui/checkbox";
import { Link } from "react-router-dom";
import { LeftSideArrowSvg } from "@/components/svgContainer/SvgContainer";
import { useState } from "react";
import icon from "../../../assets/images/icon.png";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useForm, Controller } from "react-hook-form";
import { FaUser } from "react-icons/fa";
import { useRegister } from "@/hooks/auth.hook.";

const Registration = () => {
  const { mutateAsync: registerMutation } = useRegister();

  const {
    register,
    handleSubmit,
    control,
    setValue,
    formState: { errors },
  } = useForm({
    defaultValues: {
      first_name: "",
      last_name: "",
      email: "",
      number: "",
      country: "",
      agree_to_terms: false,
      avatar: null,
    },
  });

  const [userAvatar, setUserAvatar] = useState(null);
  const [avatarError, setAvatarError] = useState("");

  const handleImageChange = event => {
    const file = event.target.files[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setUserAvatar(imageUrl);
      setValue("avatar", file);
      setAvatarError(""); // Clear error
    }
  };

  const onSubmit = async data => {
    if (!data.avatar) {
      setAvatarError("Avatar is required");
      return;
    }
    await registerMutation(data);
  };

  return (
    <section className="container flex flex-col xl:flex-row gap-[20px] xl:gap-[132px] mb-[50px] items-start h-[100vh] overflow-hidden">
      {/* Left Side */}
      <div className="mt-3 xl:h-[100vh] xl:sticky xl:top-0 flex-shrink-0">
        <Link className="w-full block" to={"/business/signorlogin"}>
          <LeftSideArrowSvg />
        </Link>
        <div className="hidden xl:block">
          <img
            className="mt-3 w-[100%] h-[200px] xl:w-[750px] xl:h-[850px] rounded-[32px] object-cover"
            src={loginImg}
            alt=""
          />
        </div>
      </div>

      {/* Right Side */}
      <form
        onSubmit={handleSubmit(onSubmit)}
        className="lg:py-[62px] overflow-y-auto h-[100vh] hide-scrollbar w-full"
      >
        <h1 className="text-textSecondary font-outfit text-[32px] xl:text-[40px] font-semibold leading-[52.8px] text-center">
          Sign up
        </h1>
        <p className="text-[#8993A4] font-outfit text-lg leading-[29.52px] text-center max-w-[578px] mt-2">
          We imported your data from Google but any changes you make here will
          be limited to your Fresha profile.
        </p>

        {/* Avatar */}
        <div className="w-full flex justify-center items-center mt-6">
          <label htmlFor="avatar" className="relative cursor-pointer">
            <input
              id="avatar"
              type="file"
              className="hidden"
              accept="image/*"
              onChange={handleImageChange}
            />
            {userAvatar ? (
              <img
                src={userAvatar}
                alt="upload preview"
                className="rounded-full lg:w-40 lg:h-40 w-32 h-32 object-cover"
              />
            ) : (
              <div className="border lg:w-40 lg:h-40 w-32 h-32 rounded-full bg-gray-200 grid place-items-center">
                <FaUser className="text-7xl" />
              </div>
            )}
            <div className="absolute bottom-0 right-4 bg-white rounded-[20px] p-[7px] border border-[#DFE1E6]">
              <img src={icon} alt="upload icon" className="w-5 h-5 block" />
            </div>
          </label>
        </div>
        {avatarError && (
          <p className="text-red-500 text-sm text-center mt-2">{avatarError}</p>
        )}

        <div className="space-y-[14px] mt-6">
          {/* First Name */}
          <div className="space-y-2">
            <label className="text-[#050F2B] font-outfit text-base">
              First Name
            </label>
            <Input
              {...register("first_name", {
                required: "First name is required",
              })}
              placeholder="Input your first name"
            />
            {errors.first_name && (
              <p className="text-red-500 text-sm">
                {errors.first_name.message}
              </p>
            )}
          </div>

          {/* Last Name */}
          <div className="space-y-2">
            <label className="text-[#050F2B] font-outfit text-base">
              Last Name
            </label>
            <Input
              {...register("last_name", { required: "Last name is required" })}
              placeholder="Input your last name"
            />
            {errors.last_name && (
              <p className="text-red-500 text-sm">{errors.last_name.message}</p>
            )}
          </div>

          {/* Email */}
          <div className="space-y-2">
            <label className="text-[#050F2B] font-outfit text-base">
              Email address
            </label>
            <Input
              type="email"
              {...register("email", { required: "Email is required" })}
              placeholder="Input your email"
            />
            {errors.email && (
              <p className="text-red-500 text-sm">{errors.email.message}</p>
            )}
          </div>

          {/* Mobile Number */}
          <div className="space-y-2">
            <label className="text-[#050F2B] font-outfit text-base">
              Mobile Number
            </label>
            <Input
              type="tel"
              {...register("number", { required: "Mobile number is required" })}
              placeholder="Mobile Number"
            />
            {errors.number && (
              <p className="text-red-500 text-sm">{errors.number.message}</p>
            )}
          </div>

          {/* Country */}
          <div className="space-y-2">
            <label className="text-[#050F2B] font-outfit text-base">
              Country
            </label>
            <Input
              {...register("country", { required: "Country is required" })}
              placeholder="Input your country"
            />
            {errors.country && (
              <p className="text-red-500 text-sm">{errors.country.message}</p>
            )}
          </div>

          {/* Terms */}
          <div className="flex items-center space-x-2">
            <Controller
              control={control}
              name="agree_to_terms"
              rules={{ required: "You must agree to the terms" }}
              render={({ field }) => (
                <Checkbox
                  id="terms"
                  checked={field.value}
                  onCheckedChange={checked => field.onChange(!!checked)}
                />
              )}
            />
            <label htmlFor="terms" className="text-sm font-medium leading-none">
              <h1 className="text-textSecondary font-outfit leading-[22.96px]">
                I agree to the{" "}
                <span className="text-primary">
                  Privacy Policy, Terms of Service
                </span>{" "}
                and <span className="text-primary">Terms of Business.</span>
              </h1>
            </label>
          </div>
          {errors.agree_to_terms && (
            <p className="text-red-500 text-sm">
              {errors.agree_to_terms.message}
            </p>
          )}
        </div>

        {/* Submit Button */}
        <Button
          type="submit"
          className="h-[58px] text-gray-200 font-manrope text-xl font-semibold block w-full rounded-2xl mt-5"
          variant="secondary"
        >
          Continue
        </Button>
      </form>
    </section>
  );
};

export default Registration;
