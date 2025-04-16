import { useState } from "react";
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog";

const PermanentlyDeleteModal = () => {
    const [open, setOpen] = useState(false);

    return (
        <Dialog open={open} onOpenChange={setOpen}>
            <DialogTrigger asChild>
                <button className="font-medium text-[#D21837]">Permanently delete</button>
            </DialogTrigger>
            <DialogContent className='max-w-md'>
                <DialogHeader>
                    <DialogTitle className='mb-3 text-lg'>Permanently delete service</DialogTitle>
                    <DialogDescription>
                        <p className="font-medium text-base text-[#2C2C2C]">Are you sure you want to delete this service?</p>
                        <div className="flex gap-3 justify-end mt-8">
                            <button onClick={() => setOpen(false)} className="px-4 py-[5px] rounded-lg border border-[#222] font-medium text-[#2C2C2C]">Cancel</button>
                            <button className="px-4 py-2 bg-[#D21837] text-white rounded-lg border border-[#D21837] font-medium" >Delete</button>
                        </div>
                    </DialogDescription>
                </DialogHeader>
            </DialogContent>
        </Dialog>
    );
};

export default PermanentlyDeleteModal;
