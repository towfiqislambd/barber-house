import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

const DisabledAutomation = () => {
  return (
    <Dialog>
      <DialogTrigger>
        <button className="">
          <p className="text-[#545454] font-medium">Disable</p>
        </button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader className="md:pr-[25px] md:pl-[20px] md:py-[30px]">
          <DialogTitle className="mb-3 text-xl">Disable automation</DialogTitle>
          <p className="text-textLight font-manrope text-base font-medium leading-6">
            Are you sure you want to disable this automation? This action will
            stop sending Appointment reminder messages to clients.
          </p>
          <DialogDescription>
            <div className="flex flex-col md:flex-row gap-3 justify-center mt-7">
              <button className="md:px-[18px] md:py-4 py-2 rounded-[10px] border border-[#0D1619] leading-6 text-[#0D1619] w-[199px] font-manrope text-base font-bold">
                Cancel
              </button>
              <button className="md:px-[18px] md:py-4 py-2 bg-[#0D1619] text-white rounded-[10px] font-bold w-[199px] font-manrope text-base leading-6">
                Disable
              </button>
            </div>
          </DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
};

export default DisabledAutomation;
