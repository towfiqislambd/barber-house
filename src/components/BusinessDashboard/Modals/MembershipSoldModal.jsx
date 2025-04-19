import { AppointmentFilterSvg } from "@/components/svgContainer/SvgContainer";
import {
    Dialog,
    DialogContent,
    DialogDescription,
    DialogHeader,
    DialogTitle,
    DialogTrigger,
} from "@/components/ui/dialog"
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { useState } from "react";

const MembershipSoldModal = () => {
    const [open, setOpen] = useState(false);
    return (
        <Dialog open={open} onOpenChange={setOpen}>
            <DialogTrigger>
                <button className="flex gap-2 border-gray-100 bg-white items-center py-2 lg:py-3 px-3 lg:px-4 rounded-full border shadow">
                    <AppointmentFilterSvg />
                    <p className="font-medium text-[#2C2C2C]">Filters</p>
                </button>
            </DialogTrigger>
            <DialogContent>
                <DialogHeader>
                    <DialogTitle className='mb-3 text-xl'>Filters</DialogTitle>
                    <DialogDescription>
                        <div className="space-y-6">
                            <div>
                                <h3 className="mb-2 text-base font-semibold text-[#2C2C2C]">Membership Status</h3>
                                <Select>
                                    <SelectTrigger className="w-full text-base border !py-5 border-[#B3BAC5]">
                                        <SelectValue placeholder="All status" />
                                    </SelectTrigger>
                                    <SelectContent>
                                        <SelectItem value="All status">All status</SelectItem>
                                        <SelectItem value="Unpaid">Active</SelectItem>
                                        <SelectItem value="Part paid">Used</SelectItem>
                                        <SelectItem value="Completed">Expired</SelectItem>
                                        <SelectItem value="Exchanged">Refunded</SelectItem>
                                        <SelectItem value="Refunded">Unavailable</SelectItem>
                                        <SelectItem value="Voided">Cancelled</SelectItem>
                                        <SelectItem value="Paused">Paused</SelectItem>
                                    </SelectContent>
                                </Select>
                            </div>
                            <div>
                                <h3 className="mb-2 text-base font-semibold text-[#2C2C2C]">Payment type</h3>
                                <Select>
                                    <SelectTrigger className="w-full text-base border !py-5 border-[#B3BAC5]">
                                        <SelectValue placeholder="Select item type" />
                                    </SelectTrigger>
                                    <SelectContent>
                                        <SelectItem value="All types">All types</SelectItem>
                                        <SelectItem value="Recurring">Recurring</SelectItem>
                                        <SelectItem value="One-time">One-time</SelectItem>
                                    </SelectContent>
                                </Select>
                            </div>
                        </div>
                        <div className="flex gap-3 justify-end mt-7">
                            <button onClick={() => setOpen(false)} className="px-4 py-[5px] rounded-lg border border-primary font-medium text-[#2C2C2C]">Clear All</button>
                            <button className="px-4 py-2 bg-primary text-white rounded-lg border border-primary font-medium">Apply</button>
                        </div>
                    </DialogDescription>
                </DialogHeader>
            </DialogContent>
        </Dialog>

    );
};

export default MembershipSoldModal;