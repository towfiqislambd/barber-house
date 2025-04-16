import { BlockDeleteSvg } from "@/components/svgContainer/SvgContainer";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";

const DeleteBlockedTimeModal = () => {
  return (
    <div className="z-[12000]">
      <Dialog>
        <DialogTrigger>
          <button className="">
            <BlockDeleteSvg />
          </button>
        </DialogTrigger>
        <DialogContent className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-[13000]">
          <DialogHeader className="pr-[25px] pl-[20px] py-[30px] z-[1500]">
            <DialogTitle className="mb-3 text-xl">
              Delete blocked time
            </DialogTitle>
            <p className="text-textLight font-manrope text-base font-medium leading-6">
              Are you sure you want to delete this blocked time? This action
              cannot be undone.
            </p>
            <DialogDescription>
              <div className="flex gap-3 justify-center mt-7">
                <button className="px-[18px] py-4 rounded-lg border border-[#0D1619] leading-6 text-[#0D1619] w-[199px] font-manrope text-base font-bold">
                  Cancel
                </button>
                <button className="px-[18px] py-4 bg-[#008A90] text-white rounded-[10px] font-bold w-[199px] font-manrope text-base leading-6">
                  Delete
                </button>
              </div>
            </DialogDescription>
          </DialogHeader>
        </DialogContent>
      </Dialog>
    </div>
  );
};

export default DeleteBlockedTimeModal;
