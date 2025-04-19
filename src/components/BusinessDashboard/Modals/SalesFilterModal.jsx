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

const SalesFilterModal = () => {
  return (
    <Dialog>
      <DialogTrigger>
        <button className="flex gap-2 border-gray-100 bg-white items-center py-2 lg:py-3 px-3 lg:px-4 rounded-full border shadow">
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
                  Status
                </h3>
                <Select>
                  <SelectTrigger className="w-full text-base border !py-5 border-[#B3BAC5]">
                    <SelectValue placeholder="All statuses" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="All statuses">All statuses</SelectItem>
                    <SelectItem value="Unpaid">Unpaid</SelectItem>
                    <SelectItem value="Part paid">Part paid</SelectItem>
                    <SelectItem value="Completed">Completed</SelectItem>
                    <SelectItem value="Exchanged">Exchanged</SelectItem>
                    <SelectItem value="Refunded">Refunded</SelectItem>
                    <SelectItem value="Voided">Voided</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="flex gap-5 items-center">
                <div className="flex-1">
                  <h3 className="mb-2 text-base font-semibold text-[#2C2C2C]">
                    From amount
                  </h3>
                  <div className="relative">
                    <p className="absolute text-base top-3 left-3 font-semibold text-[#545454]">
                      BDT
                    </p>
                    <input
                      type="text"
                      className="w-full ps-12 pe-3 py-[10px] border rounded outline-none text-base border-[#97A0AF]"
                      placeholder="From"
                    />
                  </div>
                </div>
                <div className="flex-1">
                  <h3 className="mb-2 text-base font-semibold text-[#2C2C2C]">
                    To amount
                  </h3>
                  <div className="relative">
                    <p className="absolute text-base top-3 left-3 font-semibold text-[#545454]">
                      BDT
                    </p>
                    <input
                      type="text"
                      className="w-full ps-12 pe-3 py-[10px] border rounded outline-none text-base border-[#97A0AF]"
                      placeholder="To"
                    />
                  </div>
                </div>
              </div>
              <div>
                <h3 className="mb-2 text-base font-semibold text-[#2C2C2C]">
                  Including items
                </h3>
                <Select>
                  <SelectTrigger className="w-full text-base border !py-5 border-[#B3BAC5]">
                    <SelectValue placeholder="Select item type" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="All statuses">Select all</SelectItem>
                    <SelectItem value="Booked">Services</SelectItem>
                    <SelectItem value="Confirmed">Products</SelectItem>
                    <SelectItem value="Arrived">Gift cards</SelectItem>
                    <SelectItem value="Started">Memberships</SelectItem>
                    <SelectItem value="Cancelled">No show fees</SelectItem>
                    <SelectItem value="No show">Cancellation fees</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
            <div className="flex gap-3 justify-end mt-7">
              <button className="px-4 py-[5px] rounded-lg border border-primary font-medium text-[#2C2C2C]">
                Clear All
              </button>
              <button className="px-4 py-2 bg-primary text-white rounded-lg border border-primary font-medium">
                Apply
              </button>
            </div>
          </DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
};

export default SalesFilterModal;
