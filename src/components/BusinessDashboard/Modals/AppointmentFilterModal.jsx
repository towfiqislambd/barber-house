import { AppointmentFilterSvg } from "@/components/svgContainer/SvgContainer";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

const AppointmentFilterModal = () => {
  return (
    <Dialog>
      <DialogTrigger>
        <button className="flex gap-2 border-gray-100 bg-white items-center py-[5px] px-3 lg:py-3 lg:px-4 rounded-full border shadow">
          <AppointmentFilterSvg />
          <p className="font-medium text-[#2C2C2C]">Filters</p>
        </button>
      </DialogTrigger>
      <DialogContent>
        <DialogHeader>
          <DialogTitle className="mb-3 text-xl">Filters</DialogTitle>
          <DialogDescription>
            <div className="space-y-6">
              <div>
                <h3 className="mb-2 text-base font-semibold text-[#2C2C2C]">
                  Team member
                </h3>
                <Select>
                  <SelectTrigger className="w-full text-base border !py-5 border-[#B3BAC5]">
                    <SelectValue placeholder="All team members" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="All team members">
                      All team members
                    </SelectItem>
                    <SelectItem value="M. Hossain">M. Hossain</SelectItem>
                    <SelectItem value="M. R. Hossain">M. R. Hossain</SelectItem>
                    <SelectItem value="W. Smith">W. Smith</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div>
                <h3 className="mb-2 text-base font-semibold text-[#2C2C2C]">
                  Channel
                </h3>
                <Select>
                  <SelectTrigger className="w-full text-base border !py-5 border-[#B3BAC5]">
                    <SelectValue placeholder="All channels" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="All channels">All channels</SelectItem>
                    <SelectItem value="Book now link">Book now link</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div>
                <h3 className="mb-2 text-base font-semibold text-[#2C2C2C]">
                  Status
                </h3>
                <Select>
                  <SelectTrigger className="w-full text-base border !py-5 border-[#B3BAC5]">
                    <SelectValue placeholder="All statuses" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="All statuses">All statuses</SelectItem>
                    <SelectItem value="Booked">Booked</SelectItem>
                    <SelectItem value="Confirmed">Confirmed</SelectItem>
                    <SelectItem value="Arrived">Arrived</SelectItem>
                    <SelectItem value="Started">Started</SelectItem>
                    <SelectItem value="Cancelled">Cancelled</SelectItem>
                    <SelectItem value="No show">No show</SelectItem>
                    <SelectItem value="Completed">Completed</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
            <div className="flex gap-3 justify-end mt-7">
              <button className="px-4 py-[5px] rounded-lg border border-borderColor font-medium text-[#2C2C2C]">
                Clear All
              </button>
              <button className="px-4 py-2 bg-primary text-white rounded-lg border border-borderColorLight font-medium">
                Apply
              </button>
            </div>
          </DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
};

export default AppointmentFilterModal;
