import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useState } from "react";


const EditCategoryModal = () => {
    const [open, setOpen] = useState(false);
    return (
        <Dialog open={open} onOpenChange={setOpen}>
            <DialogTrigger>
                <button className="text-[#545454] font-medium hover:text-blue-500">Edit category</button>
            </DialogTrigger>
            <DialogContent>
                <DialogHeader>
                    <DialogTitle className='mb-3 text-xl'>Edit Category</DialogTitle>
                    <DialogDescription>
                        <div className="space-y-6">
                            <div>
                                <h3 className="mb-2 text-base font-semibold text-[#2C2C2C]">Category name</h3>
                                <Input placeholder='e.g. Hair services' />
                            </div>
                            <div>
                                <div className="flex justify-between items-center">
                                    <h3 className="mb-2 text-base font-semibold text-[#2C2C2C]">Description</h3>
                                    <p>0/320</p>
                                </div>
                                <Textarea rows={6} placeholder='Write anything...' />
                            </div>
                        </div>
                        <div className="flex gap-3 justify-end mt-7">
                            <button onClick={() => setOpen(false)} className="px-4 py-[5px] rounded-lg border border-[#00C2CB] font-medium text-[#2C2C2C]">Cancel</button>
                            <button className="px-4 py-2 bg-[#008A90] text-white rounded-lg border border-[#008A90] font-medium">Save</button>
                        </div>
                    </DialogDescription>
                </DialogHeader>
            </DialogContent>
        </Dialog>

    );
};

export default EditCategoryModal;