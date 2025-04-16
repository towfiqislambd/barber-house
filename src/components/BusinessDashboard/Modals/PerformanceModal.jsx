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

const PerformanceModal = () => {
    return (
        <Dialog>
            <DialogTrigger>
                <button className="flex gap-2 border-gray-100 bg-white items-center py-3 px-4 rounded-full border shadow">
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
                                <h3 className="mb-2 text-base font-semibold text-[#2C2C2C]">Location</h3>
                                <Select>
                                    <SelectTrigger className="w-full text-base border !py-5 border-[#B3BAC5]">
                                        <SelectValue placeholder="All locations" />
                                    </SelectTrigger>
                                    <SelectContent>
                                        <SelectItem value="All locations">All locations</SelectItem>
                                        <SelectItem value="Medina, Saudi Arabia">Medina, Saudi Arabia</SelectItem>
                                        <SelectItem value="Medina, Saudi Arabia">Medina, Saudi Arabia</SelectItem>
                                    </SelectContent>
                                </Select>
                            </div>
                            <div>
                                <h3 className="mb-2 text-base font-semibold text-[#2C2C2C]">Team member</h3>
                                <Select>
                                    <SelectTrigger className="w-full text-base border !py-5 border-[#B3BAC5]">
                                        <SelectValue placeholder="All team members" />
                                    </SelectTrigger>
                                    <SelectContent>
                                        <SelectItem value="All team members">All team members</SelectItem>
                                        <SelectItem value="M. R. Shihab">M. R. Shihab</SelectItem>
                                        <SelectItem value="Wendy Smith">Wendy Smith</SelectItem>
                                    </SelectContent>
                                </Select>
                            </div>
                        </div>
                        <div className="flex items-center justify-between mt-5">
                            <p className="text-[#008A90] cursor-pointer text-lg font-medium">Clear all filters</p>
                            <div className="flex gap-3 justify-end mt-7">
                                <button className="px-4 py-[5px] rounded-lg border border-[#00C2CB] font-medium text-[#2C2C2C]">Cancel</button>
                                <button className="px-4 py-2 bg-[#008A90] text-white rounded-lg border border-[#008A90] font-medium">Apply</button>
                            </div>
                        </div>
                    </DialogDescription>
                </DialogHeader>
            </DialogContent>
        </Dialog>

    );
};

export default PerformanceModal;