import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useAddSupport } from "@/hooks/user.mutation";
import { useForm } from "react-hook-form";

const SupportModal = ({ isOpen, setIsOpen }) => {
  const { mutateAsync: addSupportMutation, isPending } = useAddSupport();

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm();

  const onSubmit = async data => {
    const formData = new FormData();
    formData.append("subject", data.subject);
    formData.append("message", data.message);
    formData.append("email", data.email);

    await addSupportMutation(formData);
    setIsOpen(false);
    reset();
  };

  return (
    <Dialog open={isOpen} onOpenChange={setIsOpen}>
      <DialogContent>
        <DialogHeader>
          <DialogTitle className="mb-3 text-xl">Add Support</DialogTitle>
          <DialogDescription asChild>
            <form
              onSubmit={handleSubmit(onSubmit)}
              encType="multipart/form-data"
            >
              <div className="space-y-6">
                {/* Email */}
                <div>
                  <h3 className="mb-2 text-base font-semibold text-[#2C2C2C]">
                    Enter your Email
                  </h3>
                  <Input
                    type="email"
                    placeholder="Enter your Email"
                    {...register("email", {
                      required: "Email is required",
                    })}
                  />
                  {errors.email && (
                    <p className="text-sm text-red-500 mt-1">
                      {errors.email.message}
                    </p>
                  )}
                </div>

                {/* Subject */}
                <div>
                  <h3 className="mb-2 text-base font-semibold text-[#2C2C2C]">
                    Enter your subject
                  </h3>
                  <Input
                    placeholder="Enter your subject"
                    {...register("subject", {
                      required: "Subject is required",
                    })}
                  />
                  {errors.subject && (
                    <p className="text-sm text-red-500 mt-1">
                      {errors.subject.message}
                    </p>
                  )}
                </div>

                {/* Feedback */}
                <div>
                  <h3 className="mb-2 text-base font-semibold text-[#2C2C2C]">
                    Write your feedback
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
                  {isPending ? "Submitting..." : "Submit"}
                </button>
              </div>
            </form>
          </DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
};

export default SupportModal;
