import { useState } from "react";
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog";
import AddSupplierModal from "./AddSupplierModal";

const SelectSupplierModal = () => {
    const [open, setOpen] = useState(false);

    return (
        <Dialog open={open} onOpenChange={setOpen}>
            <DialogTrigger asChild>
                <button className="font-semibold text-[#008A90]">Select a supplier</button>
            </DialogTrigger>
            <DialogContent className='max-w-md'>
                <DialogHeader>
                    <DialogTitle className='mb-3 text-xl'>Select A supplier</DialogTitle>
                    <div className="border-t border-[#00899096]"></div>
                    <DialogDescription>
                        <div className="flex py-5 justify-center flex-col items-center">
                            <h3 className="text-xl text-[#1E1E1E] mb-2 font-semibold">No suppliers here yet</h3>
                            <p className="mb-5">Your suppliers will appear here</p>
                            <AddSupplierModal />
                        </div>
                        <div className="flex gap-3 font-medium justify-end mt-7">
                            <button onClick={() => setOpen(false)} className="px-4 py-[5px] rounded-lg border border-[#00C2CB] font-medium text-[#2C2C2C]">Cancel</button>
                            <button className="px-4 py-2 bg-[#008A90] text-white rounded-lg border border-[#008A90] font-medium" >Save</button>
                        </div>
                    </DialogDescription>
                </DialogHeader>
            </DialogContent>
        </Dialog>
    );
};

export default SelectSupplierModal;
