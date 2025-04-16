import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

const DeleteAutomation = () => {
  return (
    <Dialog>
      <DialogTrigger>
        <button className="">
          <p className="text-[#D21837] font-medium">Remove</p>
        </button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader className="md:pr-[25px] md:pl-[20px] md:py-[30px]">
          <DialogTitle className="mb-3 text-xl">Delete automation</DialogTitle>
          <p className="text-textLight font-manrope text-base font-medium leading-6">
            Are you sure you want to delete this automation? This action can not
            be undone.
          </p>
          <DialogDescription>
            <div className="flex flex-col md:flex-row gap-3 justify-center mt-7">
              <button className="md:px-[18px] md:py-4 py-2 rounded-lg border border-[#0D1619] leading-6 text-[#0D1619] w-[199px] font-manrope text-base font-bold">
                Cancel
              </button>
              <button className="md:px-[18px] md:py-4 py-2 bg-[#D21837] text-white rounded-[10px] font-bold w-[199px] font-manrope text-base leading-6">
                Delete
              </button>
            </div>
          </DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
};

export default DeleteAutomation;
