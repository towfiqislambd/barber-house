import { useForm, Controller } from "react-hook-form";
import { MembershipCrossSvg } from "@/components/svgContainer/SvgContainer";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { useProductsBrand, useProductsCategory } from "@/hooks/cms.queries";
import { Link, useNavigate } from "react-router-dom";
import useAuth from "@/hooks/useAuth";
import { useAddProduct } from "@/hooks/cms.mutations";

const AddNewProduct = () => {
  const navigate = useNavigate();
  const { user } = useAuth();
  const business_profile_id = user?.business_profile?.id;
  const { data: productsBrand } = useProductsBrand();
  const { data: productsCategory } = useProductsCategory();
  const { mutateAsync: addProductMutation, isPending } = useAddProduct();

  const {
    register,
    handleSubmit,
    control,
    formState: { errors },
  } = useForm();

  const onSubmit = async data => {
    const formData = new FormData();
    formData.append("name", data.name);
    formData.append("barcode", data.barcode || "");
    formData.append("brand_id", data.brand_id);
    formData.append("category_id", data.category_id);
    formData.append("measure", data.measure);
    formData.append("amount", data.amount);
    formData.append("short_description", data.short_description);
    formData.append("description", data.description);
    formData.append("supply_price", data.supply_price);
    formData.append("price", data.price);
    formData.append("stock_quantity", data.stock_quantity);
    formData.append("business_profile_id", business_profile_id);
    formData.append("image_url", data.image_url[0]);

    try {
      await addProductMutation(formData);
      navigate("/businessDashboard/catalogue");
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <section className="4xl:max-w-[1095px] mx-auto py-5 px-3 sm:px-6 lg:px-6 4xl:px-0">
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="flex justify-between items-center mb-5">
          <Link to="/businessDashboard/catalogue">
            <MembershipCrossSvg />
          </Link>
          <button
            type="submit"
            className="bg-[#008A90] text-white px-5 md:py-[10px] py-2 font-medium rounded-lg"
          >
            {isPending ? "Saving..." : "Save Product"}
          </button>
        </div>

        <div className="border rounded-t-xl border-[#00C2CB] px-6 py-4">
          <h3 className="font-outfit text-xl md:text-2xl font-medium text-[#1E1E1E]">
            Add new product
          </h3>
        </div>

        <div className="border rounded-b-xl xl:px-20 lg:px-10 px-5 py-5">
          <h3 className="font-outfit md:text-2xl text-xl font-medium mb-1">
            Basic information
          </h3>
          <p className="md:text-lg text-base text-[#545454] font-medium mb-5">
            How this form will appear to clients
          </p>

          <div className="shadow border rounded-lg lg:p-10 p-5">
            {/* Product Name */}
            <div className="mb-7">
              <label className="label">Product name</label>
              <Input
                {...register("name", { required: "Product name is required" })}
                placeholder="Add product name"
                className="h-11 px-4"
              />
              {errors.name && (
                <p className="text-sm text-red-500 mt-1">
                  {errors.name.message}
                </p>
              )}
            </div>

            {/* Barcode (optional) */}
            <div className="mb-7">
              <label className="label">
                Product barcode{" "}
                <span className="text-[#545454]">(optional)</span>
              </label>
              <Input
                {...register("barcode")}
                placeholder="UPC, EAN, GTIN"
                className="h-11 px-4"
              />
            </div>

            {/* Product Brand */}
            <div className="mb-7">
              <label className="label">Product brand</label>
              <Controller
                name="brand_id"
                control={control}
                rules={{ required: "Product brand is required" }}
                render={({ field }) => (
                  <Select
                    onValueChange={val => field.onChange(val)}
                    value={field.value ? String(field.value) : ""}
                  >
                    <SelectTrigger className="w-full text-base border !py-[22px]">
                      <SelectValue placeholder="Select a brand" />
                    </SelectTrigger>
                    <SelectContent>
                      {productsBrand?.map(brand => (
                        <SelectItem key={brand.id} value={String(brand.id)}>
                          {brand.name}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                )}
              />

              {errors.brand_id && (
                <p className="text-sm text-red-500 mt-1">
                  {errors.brand_id.message}
                </p>
              )}
            </div>

            {/* Product Category */}
            <div className="mb-7">
              <label className="label">Product Category</label>
              <Controller
                name="category_id"
                control={control}
                rules={{ required: "Product category is required" }}
                render={({ field }) => (
                  <Select
                    onValueChange={val => field.onChange(val)}
                    value={field.value ? String(field.value) : ""}
                  >
                    <SelectTrigger className="w-full text-base border !py-[22px]">
                      <SelectValue placeholder="Select a Category" />
                    </SelectTrigger>
                    <SelectContent>
                      {productsCategory?.map(category => (
                        <SelectItem
                          key={category.id}
                          value={String(category.id)}
                        >
                          {category.name}
                        </SelectItem>
                      ))}
                    </SelectContent>
                  </Select>
                )}
              />
              {errors.category_id && (
                <p className="text-sm text-red-500 mt-1">
                  {errors.category_id.message}
                </p>
              )}
            </div>

            {/* Measure & Amount */}
            <div className="flex flex-col lg:flex-row gap-5 items-center mb-7">
              <div className="lg:flex-1 w-full">
                <label className="label">Measure</label>
                <Controller
                  name="measure"
                  control={control}
                  rules={{ required: "Measure is required" }}
                  render={({ field }) => (
                    <Select onValueChange={field.onChange} value={field.value}>
                      <SelectTrigger className="w-full text-base border !py-[22px]">
                        <SelectValue placeholder="Milliliters (ml)" />
                      </SelectTrigger>
                      <SelectContent>
                        <SelectItem value="Milliliters (ml)">
                          Milliliters (ml)
                        </SelectItem>
                      </SelectContent>
                    </Select>
                  )}
                />
                {errors.measure && (
                  <p className="text-sm text-red-500 mt-1">
                    {errors.measure.message}
                  </p>
                )}
              </div>
              {/* Amount */}
              <div className="lg:flex-1 w-full">
                <label className="label">Amount</label>
                <Input
                  type="number"
                  step="any"
                  {...register("amount", {
                    required: "Amount is required",
                    valueAsNumber: true,
                  })}
                  placeholder="ml 0.00"
                  className="h-11 px-4"
                />
                {errors.amount && (
                  <p className="text-sm text-red-500 mt-1">
                    {errors.amount.message}
                  </p>
                )}
              </div>
            </div>

            {/* Short Description */}
            <div className="mb-7">
              <label className="label">Short description</label>
              <Input
                {...register("short_description", {
                  required: "Short description is required",
                })}
                placeholder="Short description"
                className="h-11 px-4"
              />
              {errors.short_description && (
                <p className="text-sm text-red-500 mt-1">
                  {errors.short_description.message}
                </p>
              )}
            </div>

            {/* Product Description */}
            <div className="mb-7">
              <label className="label">Product description</label>
              <Textarea
                {...register("description", {
                  required: "Description is required",
                })}
                placeholder="Add product description"
                rows={6}
                className="px-4"
              />
              {errors.description && (
                <p className="text-sm text-red-500 mt-1">
                  {errors.description.message}
                </p>
              )}
            </div>

            {/* Stock Quantity */}
            <div className="mb-7">
              <label className="label">Stock Quantity</label>
              <Input
                type="number"
                {...register("stock_quantity", {
                  required: "Stock quantity is required",
                  valueAsNumber: true,
                  min: { value: 0, message: "Stock cannot be negative" },
                })}
                placeholder="Stock quantity"
                className="h-11 px-4"
              />
              {errors.stock_quantity && (
                <p className="text-sm text-red-500 mt-1">
                  {errors.stock_quantity.message}
                </p>
              )}
            </div>

            {/* Image */}
            <div className="mb-7">
              <label className="label">Add an image</label>
              <Input
                {...register("image_url", {
                  required: "Image is required",
                })}
                type="file"
                className="h-11 px-4"
                accept="image/*"
              />
              {errors.image_url && (
                <p className="text-sm text-red-500 mt-1">
                  {errors.image_url.message}
                </p>
              )}
            </div>

            {/* Pricing */}
            <div className="border-t border-[#00899072] mb-7"></div>
            <h3 className="text-xl mb-3 text-[#2C2C2C] font-medium font-outfit">
              Pricing
            </h3>

            {/* Supply Price */}
            <div className="mb-10">
              <label className="label">Supply price</label>
              <Input
                type="number"
                step="any"
                {...register("supply_price", {
                  required: "Supply price is required",
                  valueAsNumber: true,
                })}
                placeholder="0.00"
                className="h-11 px-4"
              />
              {errors.supply_price && (
                <p className="text-sm text-red-500 mt-1">
                  {errors.supply_price.message}
                </p>
              )}
            </div>

            {/* Price */}
            <div className="mb-10">
              <label className="label">Price</label>
              <Input
                type="number"
                step="any"
                {...register("price", {
                  required: "Price is required",
                  valueAsNumber: true,
                })}
                placeholder="SAR"
                className="h-11 px-4"
              />
              {errors.price && (
                <p className="text-sm text-red-500 mt-1">
                  {errors.price.message}
                </p>
              )}
            </div>
          </div>
        </div>
      </form>
    </section>
  );
};

export default AddNewProduct;
