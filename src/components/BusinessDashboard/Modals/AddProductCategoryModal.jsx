import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { useAddProductCategory } from "@/hooks/cms.mutations";
import useAuth from "@/hooks/useAuth";
import { useForm } from "react-hook-form";

const AddProductCategoryModal = ({ open, setOpen }) => {
  const { mutateAsync: addProductCategory } = useAddProductCategory();
  const { user } = useAuth();

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const onSubmit = async data => {
    const business_profile_id = user?.business_profile?.id;
    const formData = new FormData();

    formData.append("name", data.name);
    formData.append("business_profile_id", business_profile_id);
    if (data.category_image?.[0]) {
      formData.append("photo", data.category_image[0]);
    }

    await addProductCategory(formData);
    setOpen(false);
    reset();
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle className="mb-3 text-xl">
            Add Product Category
          </DialogTitle>
          <DialogDescription asChild>
            <form
              onSubmit={handleSubmit(onSubmit)}
              encType="multipart/form-data"
            >
              <div className="space-y-6">
                <div>
                  <h3 className="mb-2 text-base font-semibold text-[#2C2C2C]">
                    Category name
                  </h3>
                  <Input
                    placeholder="Hair services"
                    {...register("name", {
                      required: "Category name is required",
                    })}
                  />
                  {errors.name && (
                    <p className="text-sm text-red-500 mt-1">
                      {errors.name.message}
                    </p>
                  )}
                </div>

                <div>
                  <h3 className="mb-2 text-base font-semibold text-[#2C2C2C]">
                    Category Image
                  </h3>
                  <Input
                    type="file"
                    accept="image/*"
                    {...register("category_image", {
                      required: "Category image is required",
                    })}
                  />
                  {errors.category_image && (
                    <p className="text-sm text-red-500 mt-1">
                      {errors.category_image.message}
                    </p>
                  )}
                </div>
              </div>

              <div className="flex gap-3 justify-end mt-7">
                <button
                  type="button"
                  onClick={() => {
                    setOpen(false);
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
                  Add
                </button>
              </div>
            </form>
          </DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
};

export default AddProductCategoryModal;
