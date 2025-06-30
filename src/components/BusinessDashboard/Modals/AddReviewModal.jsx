import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useAddReview } from "@/hooks/user.mutation";
import { useForm } from "react-hook-form";

const AddReviewModal = ({ id, isOpen, setIsOpen }) => {
  const { mutateAsync: addReviewMutation, isPending } = useAddReview();

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const onSubmit = async data => {
    const formData = new FormData();
    formData.append("appointment_id", id);
    formData.append("rating", data.rating);
    formData.append("review", data.review);

    await addReviewMutation(formData);
    setIsOpen(false);
    reset();
  };

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle className="mb-3 text-xl">Add Review</DialogTitle>
          <DialogDescription asChild>
            <form
              onSubmit={handleSubmit(onSubmit)}
              encType="multipart/form-data"
            >
              <div className="space-y-6">
                {/* Rating */}
                <div>
                  <h3 className="mb-2 text-base font-semibold text-[#2C2C2C]">
                    Rating (1-5)
                  </h3>
                  <Input
                    type="number"
                    min={1}
                    max={5}
                    placeholder="Enter rating"
                    {...register("rating", {
                      required: "Rating is required",
                      min: { value: 1, message: "Minimum rating is 1" },
                      max: { value: 5, message: "Maximum rating is 5" },
                    })}
                  />
                  {errors.rating && (
                    <p className="text-sm text-red-500 mt-1">
                      {errors.rating.message}
                    </p>
                  )}
                </div>

                {/* Feedback */}
                <div>
                  <h3 className="mb-2 text-base font-semibold text-[#2C2C2C]">
                    Feedback
                  </h3>
                  <Textarea
                    rows={5}
                    placeholder="Enter your feedback"
                    {...register("review", {
                      required: "Feedback is required",
                    })}
                  />
                  {errors.review && (
                    <p className="text-sm text-red-500 mt-1">
                      {errors.review.message}
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
                  {isPending ? "Submitting..." : "Submit Review"}
                </button>
              </div>
            </form>
          </DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
};

export default AddReviewModal;
