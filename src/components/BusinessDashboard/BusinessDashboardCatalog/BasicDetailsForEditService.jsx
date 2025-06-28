import { Loader } from "@/components/Loader/Loader";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { useEditService } from "@/hooks/cms.mutations";
import {
  useCatalogue,
  useServiceDetails,
  useServicesType,
} from "@/hooks/cms.queries";
import useAuth from "@/hooks/useAuth";
import Input from "antd/es/input/Input";
import { useEffect } from "react";
import { useForm, Controller } from "react-hook-form";
import { useNavigate, useParams } from "react-router-dom";

const BasicDetailsForEditService = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const { user } = useAuth();
  const business_profile_id = user?.business_profile?.id;

  const { mutateAsync: editService, isPending } = useEditService();
  const { data: servicesTypes } = useServicesType();
  const { data: categoryData } = useCatalogue();
  const { data: serviceDetails, isLoading } = useServiceDetails(id);

  const {
    register,
    handleSubmit,
    control,
    reset,
    formState: { errors },
  } = useForm();

  useEffect(() => {
    if (serviceDetails) {
      reset({
        name: serviceDetails.name || "",
        service_id: serviceDetails?.service?.id?.toString(),
        catalog_service_category_id: serviceDetails?.category?.id?.toString(),
        description: serviceDetails.description || "",
        duration: serviceDetails.duration || "",
        price_type: serviceDetails.price_type || "",
        price: serviceDetails.price || "",
      });
    }
  }, [serviceDetails, reset]);

  const onSubmit = async data => {
    if (!id) return;
    await editService({
      id,
      payload: { ...data, business_profile_id },
    });
    navigate("/businessDashboard/catalogue");
  };

  if (isLoading) {
    return (
      <div className="flex justify-center items-center h-[80vh]">
        <Loader />
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <h3 className="font-outfit text-2xl text-[#2C2C2C] font-medium mb-5">
        Basic details
      </h3>

      {/* Service Name */}
      <div className="mb-5">
        <label htmlFor="name" className="block mb-2 font-medium">
          Service name
        </label>
        <Input
          id="name"
          placeholder="Haircut"
          {...register("name", { required: "Service name is required" })}
          defaultValue={serviceDetails?.name}
          className="px-3 sm:py-3 py-2 text-base"
        />
        {errors.name && (
          <p className="text-red-500 text-sm">{errors.name.message}</p>
        )}
      </div>

      <div className="flex flex-col lg:flex-row gap-5 mb-5">
        {/* Service Type */}
        <div className="lg:flex-1 w-full">
          <label className="block mb-2 font-medium">Service type</label>
          <Controller
            name="service_id"
            control={control}
            rules={{ required: "Service type is required" }}
            render={({ field }) => (
              <Select
                onValueChange={field.onChange}
                value={field.value}
                defaultValue={field.value}
              >
                <SelectTrigger className="w-full border sm:!py-6 !py-5 bg-white">
                  <SelectValue
                    placeholder={serviceDetails?.service?.service_name}
                  />
                </SelectTrigger>
                <SelectContent>
                  {servicesTypes?.map(item => (
                    <SelectItem key={item.id} value={item.id.toString()}>
                      {item.service_name}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            )}
          />
          {errors.service_id && (
            <p className="text-red-500 text-sm">{errors.service_id.message}</p>
          )}
        </div>

        {/* Menu Category */}
        <div className="lg:flex-1 w-full">
          <label className="block mb-2 font-medium">Menu category</label>
          <Controller
            name="catalog_service_category_id"
            control={control}
            rules={{ required: "Menu category is required" }}
            render={({ field }) => (
              <Select
                onValueChange={field.onChange}
                value={field.value}
                defaultValue={field.value}
              >
                <SelectTrigger className="w-full border sm:!py-6 !py-5 bg-white">
                  <SelectValue placeholder={serviceDetails?.category?.name} />
                </SelectTrigger>
                <SelectContent>
                  {categoryData?.map(item => (
                    <SelectItem key={item.id} value={item.id.toString()}>
                      {item.name}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            )}
          />
          {errors.catalog_service_category_id && (
            <p className="text-red-500 text-sm">
              {errors.catalog_service_category_id.message}
            </p>
          )}
        </div>
      </div>

      {/* Description */}
      <div className="mb-5">
        <label htmlFor="description" className="block mb-2 font-medium">
          Description
        </label>
        <Textarea
          id="description"
          placeholder="Add a short description"
          rows={6}
          defaultValue={serviceDetails?.description}
          {...register("description", { required: "Description is required" })}
          className="px-3 py-3 text-base bg-white"
        />
        {errors.description && (
          <p className="text-red-500 text-sm">{errors.description.message}</p>
        )}
      </div>

      <h3 className="font-outfit text-2xl text-[#2C2C2C] font-medium mt-10 mb-5">
        Pricing & duration
      </h3>

      <div className="flex flex-col lg:flex-row items-center gap-5 mb-5">
        {/* Duration */}
        <div className="lg:flex-1 w-full">
          <label className="block mb-2 font-medium">Duration</label>
          <Input
            id="duration"
            placeholder="Duration"
            defaultValue={serviceDetails?.duration}
            {...register("duration", { required: "Duration is required" })}
            className="px-3 py-2 text-base"
          />
          {errors.duration && (
            <p className="text-red-500 text-sm">{errors.duration.message}</p>
          )}
        </div>

        {/* Price Type */}
        <div className="lg:flex-1 w-full">
          <label className="block mb-2 font-medium">Price type</label>
          <Controller
            name="price_type"
            control={control}
            rules={{ required: "Price type is required" }}
            render={({ field }) => (
              <Select
                onValueChange={field.onChange}
                value={field.value}
                defaultValue={field.value}
              >
                <SelectTrigger className="w-full border sm:!py-6 !py-5 bg-white">
                  <SelectValue placeholder={serviceDetails?.price_type} />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="Fixed">Fixed</SelectItem>
                  <SelectItem value="Free">Free</SelectItem>
                </SelectContent>
              </Select>
            )}
          />
          {errors.price_type && (
            <p className="text-red-500 text-sm">{errors.price_type.message}</p>
          )}
        </div>

        {/* Price */}
        <div className="lg:flex-1 w-full">
          <label className="block mb-2 font-medium">Price</label>
          <Input
            id="price"
            placeholder="Price"
            defaultValue={serviceDetails?.price}
            {...register("price", { required: "Price is required" })}
            className="px-3 py-2 text-base"
          />
          {errors.price && (
            <p className="text-red-500 text-sm">{errors.price.message}</p>
          )}
        </div>
      </div>

      <button
        type="submit"
        className="mt-5 bg-black text-white px-6 py-2 rounded-lg"
      >
        {isPending ? "Updating..." : "Update"}
      </button>
    </form>
  );
};

export default BasicDetailsForEditService;
