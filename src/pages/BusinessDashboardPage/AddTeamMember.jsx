import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { useForm, Controller } from "react-hook-form";
import { useState } from "react";
import useAuth from "@/hooks/useAuth";
import { useAddTeamMember } from "@/hooks/cms.mutations";

const AddTeamMember = () => {
  const [previewImage, setPreviewImage] = useState(null);
  const { user } = useAuth();
  const business_profile_id = user?.business_profile?.id;
  const { mutateAsync: addTeamMember, isPending } = useAddTeamMember();
  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm();

  const formatDate = dateString => {
    if (!dateString) return "";
    const [year, month, day] = dateString.split("-");
    return `${day}-${month}-${year}`;
  };
  const formatDate2 = dateString => {
    if (!dateString) return "";
    const [year, month, day] = dateString.split("-");
    return `${year}-${month}-${day}`;
  };

  const onSubmit = async data => {
    const formData = new FormData();

    formData.append("first_name", data.first_name);
    formData.append("last_name", data.last_name || "");
    formData.append("birthday", formatDate(data.birthday));
    formData.append("start_date", formatDate2(data.start_date));
    formData.append(
      "end_date",
      data.end_date ? formatDate2(data.end_date) : ""
    );
    formData.append("phone", data.phone);
    formData.append("email", data.email);
    formData.append("country", data.country);
    formData.append("job_title", data.job_title);
    formData.append("employment_type", data.employment_type);
    formData.append("employee_id", data.employee_id);
    formData.append("business_profile_id", business_profile_id);
    formData.append("photo", data.photo[0]);

    try {
      await addTeamMember(formData);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <p className="text-xl font-semibold text-[#2C2C2C]">Profile</p>
      <p className="text-base mb-5 font-medium text-[#757575]">
        Manage your team members personal profile
      </p>

      {/* Profile Image Upload */}
      <div className="relative w-fit">
        <label htmlFor="profile-upload">
          <div className="lg:w-[100px] w-16 lg:h-[100px] h-16 rounded-full bg-[#E5E7EB] flex items-center justify-center cursor-pointer overflow-hidden border-2 border-dashed border-gray-400 hover:border-gray-600 transition-all duration-200">
            {previewImage ? (
              <img
                src={previewImage}
                alt="Profile Preview"
                className="w-full h-full object-cover"
              />
            ) : (
              <span className="text-4xl text-gray-600 font-bold">+</span>
            )}
          </div>
        </label>
        <input
          id="profile-upload"
          type="file"
          accept="image/*"
          {...register("photo", {
            required: "Photo is required",
            onChange: e => {
              const file = e.target.files[0];
              if (file) {
                const imageURL = URL.createObjectURL(file);
                setPreviewImage(imageURL);
              }
            },
          })}
          className="hidden"
        />
        {errors.photo && (
          <p className="text-sm text-red-500 mt-1">{errors.photo.message}</p>
        )}
      </div>

      <div className="grid lg:grid-cols-2 gap-5 mt-5 mb-5">
        <div>
          <label className="font-medium mb-1 block w-full">First Name *</label>
          <input
            type="text"
            {...register("first_name", { required: "First name is required" })}
            className="px-3 lg:py-3 py-2 rounded-lg w-full block bg-transparent shadow outline-none border"
            placeholder="Input your first name"
          />
          {errors.first_name && (
            <p className="text-sm text-red-500 mt-1">
              {errors.first_name.message}
            </p>
          )}
        </div>

        <div>
          <label className="font-medium mb-1 block w-full">Last Name</label>
          <input
            type="text"
            {...register("last_name")}
            className="px-3 lg:py-3 py-2 rounded-lg w-full block bg-transparent shadow outline-none border"
            placeholder="Input your Last name"
          />
        </div>

        <div>
          <label className="font-medium mb-1 block w-full">Email *</label>
          <input
            type="email"
            {...register("email", { required: "Email is required" })}
            className="px-3 lg:py-3 py-2 rounded-lg w-full block bg-transparent shadow outline-none border"
            placeholder="Input your email"
          />
          {errors.email && (
            <p className="text-sm text-red-500 mt-1">{errors.email.message}</p>
          )}
        </div>

        <div>
          <label className="font-medium mb-1 block w-full">
            Phone number *
          </label>
          <input
            type="number"
            {...register("phone", { required: "Phone number is required" })}
            className="px-3 py-3 rounded-lg bg-transparent w-full block shadow outline-none border"
            placeholder="Input your phone number"
          />
          {errors.phone && (
            <p className="text-sm text-red-500 mt-1">{errors.phone.message}</p>
          )}
        </div>

        <div>
          <label className="font-medium mb-1 block w-full">Country *</label>
          <input
            type="text"
            {...register("country", { required: "Country is required" })}
            className="px-3 py-3 rounded-lg bg-transparent w-full block shadow outline-none border"
            placeholder="Add Country"
          />
          {errors.country && (
            <p className="text-sm text-red-500 mt-1">
              {errors.country.message}
            </p>
          )}
        </div>

        <div>
          <label className="font-medium mb-1 block w-full">Birthday *</label>
          <input
            type="date"
            {...register("birthday", { required: "Birthday is required" })}
            className="px-3 lg:py-3 py-2 rounded-lg bg-transparent w-full block shadow outline-none border"
          />
          {errors.birthday && (
            <p className="text-sm text-red-500 mt-1">
              {errors.birthday.message}
            </p>
          )}
        </div>

        <div>
          <label className="font-medium mb-1 block w-full">Job title *</label>
          <input
            type="text"
            {...register("job_title", { required: "Job title is required" })}
            className="px-3 py-3 rounded-lg bg-transparent w-full block shadow outline-none border"
            placeholder="Input Job title"
          />
          {errors.job_title && (
            <p className="text-sm text-red-500 mt-1">
              {errors.job_title.message}
            </p>
          )}
        </div>

        <div>
          <label className="font-medium mb-1 block w-full">Start date *</label>
          <input
            type="date"
            {...register("start_date", { required: "Start date is required" })}
            className="px-3 lg:py-3 py-2 rounded-lg w-full block bg-transparent shadow outline-none border"
          />
          {errors.start_date && (
            <p className="text-sm text-red-500 mt-1">
              {errors.start_date.message}
            </p>
          )}
        </div>

        <div>
          <label className="font-medium mb-1 block w-full">End date</label>
          <input
            type="date"
            {...register("end_date")}
            className="px-3 lg:py-3 py-2 rounded-lg w-full block bg-transparent shadow outline-none border"
          />
        </div>

        <div>
          <label className="font-medium mb-1 block w-full">
            Employment type *
          </label>
          <Controller
            name="employment_type"
            control={control}
            rules={{ required: "Employment type is required" }}
            render={({ field }) => (
              <Select onValueChange={field.onChange} value={field.value}>
                <SelectTrigger className="w-full text-base border !py-6 bg-transparent">
                  <SelectValue placeholder="Employment type" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="full_time">Full time</SelectItem>
                  <SelectItem value="part_time">Part time</SelectItem>
                  <SelectItem value="internship">Internship</SelectItem>
                  <SelectItem value="contract">Contractual</SelectItem>
                </SelectContent>
              </Select>
            )}
          />
          {errors.employment_type && (
            <p className="text-sm text-red-500 mt-1">
              {errors.employment_type.message}
            </p>
          )}
        </div>

        <div>
          <label className="font-medium mb-1 block w-full">Employee Id *</label>
          <input
            type="text"
            {...register("employee_id", {
              required: "Employee ID is required",
            })}
            className="px-3 lg:py-3 py-2 rounded-lg w-full block bg-transparent shadow outline-none border"
            placeholder="Enter Employee id"
          />
          {errors.employee_id && (
            <p className="text-sm text-red-500 mt-1">
              {errors.employee_id.message}
            </p>
          )}
        </div>
      </div>

      <button
        type="submit"
        className="mt-4 px-6 py-3 bg-black text-white rounded-lg transition"
      >
        {isPending ? "Submitting...." : "Submit"}
      </button>
    </form>
  );
};

export default AddTeamMember;
