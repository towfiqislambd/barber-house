import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useAddCategory } from "@/hooks/cms.mutations";
import useAuth from "@/hooks/useAuth";
import { useForm } from "react-hook-form";

const AddProductCategoryModal = ({ open, setOpen }) => {
  const { mutateAsync: addCategory } = useAddCategory();
  const { user } = useAuth();

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const onSubmit = async data => {
    const business_profile_id = user?.business_profile?.id;
    const formData = { ...data, business_profile_id };
    await addCategory(formData);
    setOpen(false);
    reset();
  };

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle className="mb-3 text-xl">Add Product Category</DialogTitle>
          <DialogDescription asChild>
            <form onSubmit={handleSubmit(onSubmit)}>
              <div className="space-y-6">
                <div>
                  <h3 className="mb-2 text-base font-semibold text-[#2C2C2C]">
                    Category name
                  </h3>
                  <Input
                    placeholder="e.g. Hair services"
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
                  <div className="flex justify-between items-center">
                    <h3 className="mb-2 text-base font-semibold text-[#2C2C2C]">
                      Description
                    </h3>
                    <p>0/320</p>
                  </div>
                  <Textarea
                    rows={6}
                    placeholder="Write anything..."
                    {...register("description", {
                      required: "Description is required",
                    })}
                  />
                  {errors.description && (
                    <p className="text-sm text-red-500 mt-1">
                      {errors.description.message}
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
