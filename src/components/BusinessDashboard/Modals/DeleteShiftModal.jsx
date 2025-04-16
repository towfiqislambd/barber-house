import { useState } from "react";
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";

const DeleteShiftModal = () => {
    const [open, setOpen] = useState(false);
    return (
        <Dialog open={open} onOpenChange={setOpen}>
            <DialogTrigger asChild>
                <button>Delete all shifts</button>
            </DialogTrigger>
            <DialogContent className='max-w-md'>
                <DialogHeader>
                    <DialogTitle className='mb-3 text-xl'>Delete all shifts</DialogTitle>
                    <DialogDescription>
                        <div>
                            <label className="text-[#2C2C2C] mb-2 block font-medium">From</label>
                            <Select>
                                <SelectTrigger className="w-full text-base border !py-6 bg-white">
                                    <SelectValue placeholder="Fri, 21 Feb 2025" />
                                </SelectTrigger>
                                <SelectContent>
                                    <SelectItem value="Fri, 21 Feb 2025">Fri, 21 Feb 2025</SelectItem>
                                </SelectContent>
                            </Select>
                        </div>
                        <div className="flex gap-3 justify-end mt-7">
                            <button onClick={() => setOpen(false)} className="px-4 py-[5px] rounded-lg border border-[#00C2CB] font-medium text-[#2C2C2C]">Cancel</button>
                            <button className="px-4 py-2 bg-[#008A90] text-white rounded-lg border border-[#008A90] font-medium" >Save</button>
                        </div>
                    </DialogDescription>
                </DialogHeader>
            </DialogContent>
        </Dialog>
    );
};

export default DeleteShiftModal;
