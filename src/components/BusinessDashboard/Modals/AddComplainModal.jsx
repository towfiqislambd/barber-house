import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Textarea } from "@/components/ui/textarea";
import { useAddComplain } from "@/hooks/user.mutation";
import { useForm } from "react-hook-form";

const AddComplainModal = ({ id, isOpen, setIsOpen }) => {
  const { mutateAsync: addComplainMutation, isPending } = useAddComplain();

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const onSubmit = async data => {
    const formData = new FormData();
    formData.append("store_id", id);
    formData.append("message", data.message);

    await addComplainMutation(formData);
    setIsOpen(false);
    reset();
  };

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle className="mb-3 text-xl">Add Complain</DialogTitle>
          <DialogDescription asChild>
            <form
              onSubmit={handleSubmit(onSubmit)}
              encType="multipart/form-data"
            >
              <div className="space-y-6">
                {/* Feedback */}
                <div>
                  <h3 className="mb-2 text-base font-semibold text-[#2C2C2C]">
                    Write your complain
                  </h3>
                  <Textarea
                    rows={5}
                    placeholder="Enter your feedback"
                    {...register("message", {
                      required: "Complain is required",
                    })}
                  />
                  {errors.message && (
                    <p className="text-sm text-red-500 mt-1">
                      {errors.message.message}
                    </p>
                  )}
                </div>
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
                  {isPending ? "Submitting..." : "Submit Complain"}
                </button>
              </div>
            </form>
          </DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
};

export default AddComplainModal;
