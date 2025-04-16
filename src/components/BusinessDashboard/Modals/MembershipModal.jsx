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

const MembershipModal = () => {
    const [open, setOpen] = useState(false);
    return (
        <Dialog open={open} onOpenChange={setOpen}>
            <DialogTrigger>
                <button onClick={() => setOpen(true)} className="flex gap-2 border-gray-100 bg-white items-center py-2 lg:py-3 px-3 lg:px-4 rounded-full border shadow">
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
                                <h3 className="mb-2 text-base font-semibold text-[#2C2C2C]">Sessions</h3>
                                <Select>
                                    <SelectTrigger className="w-full text-base border !py-5 border-[#B3BAC5]">
                                        <SelectValue placeholder="All sessions" />
                                    </SelectTrigger>
                                    <SelectContent>
                                        <SelectItem value="All sessions">All sessions</SelectItem>
                                        <SelectItem value="Unlimited">Unlimited</SelectItem>
                                        <SelectItem value="Limited">Limited</SelectItem>
                                    </SelectContent>
                                </Select>
                            </div>
                            <div>
                                <h3 className="mb-2 text-base font-semibold text-[#2C2C2C]">Payment</h3>
                                <Select>
                                    <SelectTrigger className="w-full text-base border !py-5 border-[#B3BAC5]">
                                        <SelectValue placeholder="All" />
                                    </SelectTrigger>
                                    <SelectContent>
                                        <SelectItem value="All">All</SelectItem>
                                        <SelectItem value="Recurring">Recurring</SelectItem>
                                        <SelectItem value="One-off">One-off</SelectItem>
                                    </SelectContent>
                                </Select>
                            </div>
                            <div className="">
                                <label className="mb-2 text-[#2C2C2C] font-semibold block text-[17px]">Valid for</label>
                                <Select>
                                    <SelectTrigger className="w-full text-base border !py-[22px]">
                                        <SelectValue placeholder="7 days" />
                                    </SelectTrigger>
                                    <SelectContent>
                                        <SelectItem value="14 days">14 days</SelectItem>
                                        <SelectItem value="1 month">1 month</SelectItem>
                                        <SelectItem value="2 months">2 months</SelectItem>
                                        <SelectItem value="3 months">3 months</SelectItem>
                                        <SelectItem value="4 months">4 months</SelectItem>
                                        <SelectItem value="6 months">6 months</SelectItem>
                                        <SelectItem value="8 months">8 months</SelectItem>
                                        <SelectItem value="1 year">1 year</SelectItem>
                                        <SelectItem value="18 months">18 months</SelectItem>
                                        <SelectItem value="2 years">2 years</SelectItem>
                                        <SelectItem value="5 years">5 years</SelectItem>
                                    </SelectContent>
                                </Select>
                            </div>
                        </div>
                        <div className="flex gap-3 justify-end mt-7">
                            <button onClick={() => setOpen(false)} className="px-4 py-[5px] rounded-lg border border-[#00C2CB] font-medium text-[#2C2C2C]">Clear All</button>
                            <button className="px-4 py-2 bg-[#008A90] text-white rounded-lg border border-[#008A90] font-medium">Apply</button>
                        </div>
                    </DialogDescription>
                </DialogHeader>
            </DialogContent>
        </Dialog>

    );
};

export default MembershipModal;