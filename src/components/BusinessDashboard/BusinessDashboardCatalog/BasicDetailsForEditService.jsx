import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { useEditService } from "@/hooks/cms.mutations";
import { useCatalogue, useServicesType } from "@/hooks/cms.queries";
import useAuth from "@/hooks/useAuth";
import Input from "antd/es/input/Input";
import { useForm, Controller } from "react-hook-form";
import { useNavigate, useParams } from "react-router-dom";

const BasicDetailsForEditService = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const { data: categoryData } = useCatalogue();
  const { user } = useAuth();
  const business_profile_id = user?.business_profile?.id;
  const { mutateAsync: editService } = useEditService();
  const { data: servicesTypes } = useServicesType();

  const {
    handleSubmit,
    control,
    formState: { errors },
  } = useForm();

  const onSubmit = async data => {
    if (!id) return; // safeguard
    const {
      duration,
      price,
      price_type,
      description,
      name,
      service_id,
      catalog_service_category_id,
    } = data;

    await editService({
      id,
      payload: {
        duration,
        price,
        price_type,
        description,
        name,
        service_id,
        catalog_service_category_id,
        business_profile_id,
      },
    });
    navigate("/businessDashboard/catalogue");
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <h3 className="font-outfit text-2xl text-[#2C2C2C] font-medium mb-5">
        Basic details
      </h3>

      {/* Service Name */}
      <div className="mb-5">
        <label
          htmlFor="name"
          className="text-[#2C2C2C] mb-2 text-base md:text-lg block font-medium"
        >
          Service name
        </label>
        <Controller
          name="name"
          control={control}
          rules={{ required: "Service name is required" }}
          render={({ field }) => (
            <Input
              {...field}
              id="name"
              placeholder="Haircut"
              className="px-3 placeholder:text-[#545454] sm:py-3 py-2 text-base"
            />
          )}
        />
        {errors.name && (
          <p className="text-red-500 text-sm">{errors.name.message}</p>
        )}
      </div>

      <div className="flex flex-col lg:flex-row gap-5 mb-5">
        {/* Service Type */}
        <div className="lg:flex-1 w-full">
          <label className="text-[#2C2C2C] mb-2 text-base md:text-lg block font-medium">
            Service type
          </label>
          <Controller
            name="service_id"
            control={control}
            rules={{ required: "Service type is required" }}
            render={({ field }) => (
              <Select
                onValueChange={field.onChange}
                value={field.value?.toString()} // Ensure it's a string
                defaultValue={field.value?.toString()}
              >
                <SelectTrigger className="w-full text-base border sm:!py-6 !py-5 bg-white">
                  <SelectValue placeholder="Select a service type" />
                </SelectTrigger>
                <SelectContent className="!text-black">
                  {servicesTypes?.map(item => (
                    <SelectItem
                      key={item.id}
                      value={item.id.toString()} // Convert to string if necessary
                      className="!text-black"
                    >
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
          <p className="mt-2 text-[15px] text-[#757575] font-medium">
            Helping clients to find their services
          </p>
        </div>

        {/* Menu Category */}
        <div className="lg:flex-1 w-full">
          <label className="text-[#2C2C2C] mb-2 text-base md:text-lg block font-medium">
            Menu category
          </label>
          <Controller
            name="catalog_service_category_id"
            control={control}
            rules={{ required: "Menu category is required" }}
            render={({ field }) => (
              <Select
                onValueChange={field.onChange}
                value={field.value?.toString()} // Ensure it's a string
              >
                <SelectTrigger className="w-full text-base border sm:!py-6 !py-5 bg-white">
                  <SelectValue placeholder="Select a category" />
                </SelectTrigger>
                <SelectContent>
                  {categoryData?.map(item => (
                    <SelectItem
                      key={item.id}
                      value={item.id.toString()} // Convert to string if needed
                    >
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
          <p className="mt-2 text-[15px] text-[#757575] font-medium">
            The category displayed to you, and to clients online
          </p>
        </div>
      </div>

      {/* Description */}
      <div className="mb-5">
        <label
          htmlFor="description"
          className="text-[#2C2C2C] mb-2 text-base md:text-lg block font-medium"
        >
          Description <span className="text-[#757575]"></span>
        </label>
        <Controller
          name="description"
          control={control}
          rules={{ required: "Description is required" }}
          render={({ field }) => (
            <Textarea
              {...field}
              id="description"
              rows={6}
              placeholder="Add a short description"
              className="px-3 placeholder:text-[#545454] py-3 text-base bg-white"
            />
          )}
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
          <label className="text-[#2C2C2C] mb-2 text-base md:text-lg block font-medium">
            Duration
          </label>
          <Controller
            name="duration"
            control={control}
            rules={{ required: "Duration is required" }}
            render={({ field }) => (
              <Input
                {...field}
                id="duration"
                placeholder="Duration"
                className="px-3 placeholder:text-[#545454] sm:py-3 py-2 text-base"
              />
            )}
          />
          {errors.duration && (
            <p className="text-red-500 text-sm">{errors.duration.message}</p>
          )}
        </div>

        {/* Price Type */}
        <div className="lg:flex-1 w-full">
          <label className="text-[#2C2C2C] mb-2 text-base md:text-lg block font-medium">
            Price type
          </label>
          <Controller
            name="price_type"
            control={control}
            rules={{ required: "Price type is required" }}
            render={({ field }) => (
              <Select onValueChange={field.onChange} defaultValue={field.value}>
                <SelectTrigger className="w-full text-base border sm:!py-6 !py-5 bg-white">
                  <SelectValue placeholder="Fixed" />
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
          <label className="text-[#2C2C2C] mb-2 text-base md:text-lg block font-medium">
            Price
          </label>
          <Controller
            name="price"
            control={control}
            rules={{ required: "Price is required" }}
            render={({ field }) => (
              <Input
                {...field}
                id="price"
                placeholder="Price"
                className="px-3 placeholder:text-[#545454] sm:py-3 py-2 text-base"
              />
            )}
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
        Submit
      </button>
    </form>
  );
};

export default BasicDetailsForEditService;
