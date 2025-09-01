import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { useAddDiscountCode } from "@/hooks/cms.mutations";
import useAuth from "@/hooks/useAuth";
import { useForm } from "react-hook-form";

const AddDiscountModal = ({ isOpen, setIsOpen }) => {
  const { user } = useAuth();
  const online_store_id = user?.business_profile?.online_store?.id;
  const { mutateAsync: addDiscountMutation, isPending } =
    useAddDiscountCode(online_store_id);

  const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
    reset,
  } = useForm();

  const watchDiscountAmount = watch("discount_amount");
  const watchDiscountPercentage = watch("discount_percentage");

  const onSubmit = async data => {
    console.log(data);

    const business_profile_id = user?.business_profile?.id;
    const formData = new FormData();
    formData.append("code", data.code);

    // Conditionally append discount fields
    if (data.discount_amount) {
      formData.append("discount_amount", data.discount_amount);
    }
    if (data.discount_percentage) {
      formData.append("discount_percentage", data.discount_percentage);
    }

    formData.append("valid_from", data.valid_from);
    formData.append("valid_until", data.valid_until);
    formData.append("usage_limit", data.usage_limit);
    formData.append("minimum_amount", data.minimum_amount);
    formData.append("business_profile_id", business_profile_id);

    await addDiscountMutation(formData);
    setIsOpen(false);
    reset();
  };

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle className="mb-3 text-xl">Add Discount</DialogTitle>
          <DialogDescription asChild>
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-3">
              {/* Discount Code */}
              <div>
                <h3 className="mb-2 text-base font-semibold text-[#2C2C2C]">
                  Discount Code
                </h3>
                <Input
                  placeholder="Enter discount code"
                  {...register("code", { required: "Code is required" })}
                />
                {errors.code && (
                  <p className="text-sm text-red-500 mt-1">
                    {errors.code.message}
                  </p>
                )}
              </div>

              {/* Discount Amount */}
              <div>
                <h3 className="mb-2 text-base font-semibold text-[#2C2C2C]">
                  Discount Amount
                </h3>
                <Input
                  type="number"
                  placeholder="Enter discount amount"
                  {...register("discount_amount", {
                    validate: value => {
                      if (!value && !watchDiscountPercentage) {
                        return "Enter discount amount or percentage";
                      }
                      return true;
                    },
                  })}
                />
                {errors.discount_amount && (
                  <p className="text-sm text-red-500 mt-1">
                    {errors.discount_amount.message}
                  </p>
                )}
              </div>

              {/* Discount Percentage */}
              <div>
                <h3 className="mb-2 text-base font-semibold text-[#2C2C2C]">
                  Discount Percentage
                </h3>
                <Input
                  type="number"
                  placeholder="Enter discount percentage"
                  {...register("discount_percentage", {
                    validate: value => {
                      if (!value && !watchDiscountAmount) {
                        return "Enter discount amount or percentage";
                      }
                      return true;
                    },
                  })}
                />
                {errors.discount_percentage && (
                  <p className="text-sm text-red-500 mt-1">
                    {errors.discount_percentage.message}
                  </p>
                )}
              </div>

              {/* Valid From */}
              <div>
                <h3 className="mb-2 text-base font-semibold text-[#2C2C2C]">
                  Valid From
                </h3>
                <Input
                  type="date"
                  {...register("valid_from", {
                    required: "Valid from is required",
                  })}
                />
                {errors.valid_from && (
                  <p className="text-sm text-red-500 mt-1">
                    {errors.valid_from.message}
                  </p>
                )}
              </div>

              {/* Valid Until */}
              <div>
                <h3 className="mb-2 text-base font-semibold text-[#2C2C2C]">
                  Valid Until
                </h3>
                <Input
                  type="date"
                  {...register("valid_until", {
                    required: "Valid until is required",
                  })}
                />
                {errors.valid_until && (
                  <p className="text-sm text-red-500 mt-1">
                    {errors.valid_until.message}
                  </p>
                )}
              </div>

              {/* Usage Limit */}
              <div>
                <h3 className="mb-2 text-base font-semibold text-[#2C2C2C]">
                  Usage Limit
                </h3>
                <Input
                  type="number"
                  placeholder="Enter usage limit"
                  {...register("usage_limit", {
                    required: "Usage limit is required",
                  })}
                />
                {errors.usage_limit && (
                  <p className="text-sm text-red-500 mt-1">
                    {errors.usage_limit.message}
                  </p>
                )}
              </div>

              {/* Minimum Amount */}
              <div>
                <h3 className="mb-2 text-base font-semibold text-[#2C2C2C]">
                  Minimum Amount
                </h3>
                <Input
                  type="number"
                  placeholder="Enter minimum purchase amount"
                  {...register("minimum_amount", {
                    required: "Minimum amount is required",
                  })}
                />
                {errors.minimum_amount && (
                  <p className="text-sm text-red-500 mt-1">
                    {errors.minimum_amount.message}
                  </p>
                )}
              </div>

              {/* Buttons */}
              <div className="flex gap-3 justify-end mt-7">
                <button
                  type="button"
                  onClick={() => {
                    setIsOpen(false);
                    reset();
                  }}
                  className="px-4 py-[5px] rounded-lg border border-borderColor font-medium text-[#2C2C2C]"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 bg-primary text-white rounded-lg border border-borderColorLight font-medium"
                >
                  {isPending ? "Adding..." : "Add"}
                </button>
              </div>
            </form>
          </DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
};

export default AddDiscountModal;
