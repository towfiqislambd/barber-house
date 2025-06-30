import loginImg from "../../../assets/images/loginImage.png";
import { Checkbox } from "@/components/ui/checkbox";
import { Link, useNavigate, useParams } from "react-router-dom";
import { LeftSideArrowSvg } from "@/components/svgContainer/SvgContainer";
import { useState } from "react";
import icon from "../../../assets/images/icon.png";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useForm, Controller } from "react-hook-form";
import { FaUser } from "react-icons/fa";
import { useRegister } from "@/hooks/auth.hook.";
import { CgSpinnerTwoAlt } from "react-icons/cg";

const Registration = () => {
  const navigate = useNavigate();
  const [userAvatar, setUserAvatar] = useState(null);
  const [userFile, setUserFile] = useState(null);

  const [avatarError, setAvatarError] = useState("");
  const { mutateAsync: registerMutation, isPending } = useRegister();
  const { type } = useParams();
  const handlePrev = () => {
    navigate(-1);
  };
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
      password: "",
      country: "",
      agree_to_terms: 0,
      avatar: null,
      role: type,
    },
  });

  const handleImageChange = event => {
    const file = event.target.files[0];

    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setUserAvatar(imageUrl);
      setValue("avatar", file);
      setUserFile(file);
      setAvatarError("");
    }
  };

  const onSubmit = async data => {
    if (!data.avatar) {
      setAvatarError("Avatar is required");
      return;
    }

    const formData = new FormData();
    formData.append("first_name", data.first_name);
    formData.append("last_name", data.last_name);
    formData.append("email", data.email);
    formData.append("number", data.number);
    formData.append("password", data.password);
    formData.append("country", data.country);
    formData.append("role", data.role);
    formData.append("agree_to_terms", data.agree_to_terms ? "1" : "0");
    formData.append("avatar", data.avatar);

    [...formData.entries()].map(([key, value]) => {
      console.log("key", key, "value", value);
    });

    await registerMutation(formData);
  };

  return (
    <section className="container flex flex-col xl:flex-row gap-[20px] xl:gap-[132px] mb-[50px] items-start h-[100vh] overflow-hidden">
      {/* Left Side */}
      <div className="mt-3 xl:h-[100vh] xl:sticky xl:top-0 flex-shrink-0">
        <button onClick={handlePrev}>
          <LeftSideArrowSvg />
        </button>
        <div className="hidden xl:block">
          <img
            className="mt-3 w-[100%] h-[200px] xl:w-[750px] xl:h-[850px] rounded-[32px] object-cover"
            src={loginImg}
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
              type="number"
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

          {/* Password */}
          <div className="space-y-2">
            <label className="text-[#050F2B] font-outfit text-base">
              Password
            </label>
            <Input
              type="password"
              {...register("password", { required: "Password is required" })}
              placeholder="Enter your password"
            />
            {errors.email && (
              <p className="text-red-500 text-sm">{errors.email.message}</p>
            )}
          </div>

          {/* Terms */}
          <div className="flex items-center space-x-2">
            <Controller
              control={control}
              name="agree_to_terms"
              rules={{
                validate: value =>
                  value === true || "You must agree to the terms",
              }}
              render={({ field }) => (
                <Checkbox
                  id="terms"
                  checked={field.value}
                  onCheckedChange={value => field.onChange(value)}
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
          disable={isPending}
          type="submit"
          className="h-[58px] text-gray-200 flex justify-center items-center font-manrope !text-xl font-semibold w-full rounded-2xl mt-5"
          variant="secondary"
        >
          {isPending ? (
            <CgSpinnerTwoAlt className="!text-3xl animate-spin cursor-not-allowed" />
          ) : (
            "Sign Up"
          )}
        </Button>
        <p className="flex flex-col items-center md:flex-row mt-5 justify-center  gap-x-1 ">
          Already have an account?
          <Link to="/login" className="underline font-bold cursor-pointer ">
            Log In
          </Link>
        </p>
      </form>
    </section>
  );
};

export default Registration;
