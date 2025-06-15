import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useForm } from "react-hook-form";
import { useEditCategory } from "@/hooks/cms.mutations";

const EditCategoryModal = ({ id, isOpen, onClose }) => {
  const { mutateAsync: editCategory } = useEditCategory();

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const onSubmit = async formData => {
    if (!id) return; // safeguard
    await editCategory({ id, payload: formData });
    onClose();
    reset();
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle className="mb-3 text-xl">Edit Category</DialogTitle>
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
                    onClose();
                    reset();
                  }}
                  className="px-4 py-[5px] rounded-lg border border-[#00C2CB] font-medium text-[#2C2C2C]"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="px-4 py-2 bg-[#008A90] text-white rounded-lg border border-[#008A90] font-medium"
                >
                  Save
                </button>
              </div>
            </form>
          </DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
};

export default EditCategoryModal;
