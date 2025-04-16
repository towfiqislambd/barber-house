import { useState } from "react";
import { CategoryModalSvg, MembershipSearchSvg } from "@/components/svgContainer/SvgContainer";
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";

const SelectCategoryModal = () => {
    const [open, setOpen] = useState(false);

    return (
        <Dialog open={open} onOpenChange={setOpen}>
            <DialogTrigger asChild>
                <button className="font-semibold text-[#008A90]">Select a category</button>
            </DialogTrigger>
            <DialogContent className='max-w-md'>
                <DialogHeader>
                    <DialogTitle className='mb-3 text-xl'>Select A Category</DialogTitle>
                    <DialogDescription>
                        <div className="">
                            <div className="relative mb-5">
                                <Input placeholder='Search by name' className='px-8 h-10 border border-[#85DDB1]' />
                                <button className="absolute top-2 left-2">
                                    <MembershipSearchSvg />
                                </button>
                            </div>
                            <div className="flex gap-2 mb-5 items-center">
                                <CategoryModalSvg />
                                <p className="font-medium text-[#008A90]">Add new category</p>
                            </div>
                            <div className="py-3 border-t">
                                <h3 className="text-lg font-semibold mb-1 t text-[#2C2C2C]">Hair & styling</h3>
                                <p>1 product</p>
                            </div>
                            <div className="py-3 border-t">
                                <h3 className="text-lg font-semibold mb-1 t text-[#2C2C2C]">Nails</h3>
                                <p>1 product</p>
                            </div>
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

export default SelectCategoryModal;
