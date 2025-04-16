import { CategoryModal2Svg } from "@/components/svgContainer/SvgContainer";
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


const AddSupplierModal = () => {
    const [open, setOpen] = useState(false);

    return (
        <Dialog open={open} onOpenChange={setOpen}>
            <DialogTrigger>
                <button className="text-white bg-[#008A90] px-5 py-2 rounded flex gap-2 items-center">
                    <CategoryModal2Svg />
                    <p>Add a supplier</p>
                </button>
            </DialogTrigger>
            <DialogContent>
                <DialogHeader>
                    <DialogTitle className='mb-3 text-xl'>Add a supplier</DialogTitle>
                    <DialogDescription>
                        <div className="space-y-6">
                            <div>
                                <h3 className="mb-2 text-base font-semibold text-[#2C2C2C]">Supplier name</h3>
                                <Input placeholder='e.g. Fresha' />
                            </div>
                            <div>
                                <div className="flex justify-between items-center">
                                    <h3 className="mb-2 text-base font-semibold text-[#2C2C2C]">Supplier description</h3>
                                    <p>0/320</p>
                                </div>
                                <Textarea rows={6} placeholder='Write anything about supplier' />
                            </div>
                        </div>
                        <div className="flex gap-3 justify-end mt-7">
                            <button onClick={() => setOpen(false)} className="px-4 py-[5px] rounded-lg border border-[#00C2CB] font-medium text-[#2C2C2C]">Cancel</button>
                            <button className="px-4 py-2 bg-[#008A90] text-white rounded-lg border border-[#008A90] font-medium">Add</button>
                        </div>
                    </DialogDescription>
                </DialogHeader>
            </DialogContent>
        </Dialog>

    );
};

export default AddSupplierModal;