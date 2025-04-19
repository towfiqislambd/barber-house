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

const SalesSummaryModal = () => {
  return (
    <Dialog>
      <DialogTrigger>
        <button className="flex gap-2 border-gray-100 bg-white items-center 2xl:py-3 py-2 md:px-4 sm:px-3 px-11 rounded-full border shadow">
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
                  Location
                </h3>
                <Select>
                  <SelectTrigger className="w-full text-base border !py-5 border-[#B3BAC5]">
                    <SelectValue placeholder="All locations" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="All locations">All locations</SelectItem>
                    <SelectItem value="Medina, Saudi Arabia">
                      Medina, Saudi Arabia
                    </SelectItem>
                    <SelectItem value="Mecca, Saudi Arabia">
                      Mecca, Saudi Arabia
                    </SelectItem>
                  </SelectContent>
                </Select>
              </div>
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
                    <SelectItem value="M. R. Shihab">M. R. Shihab</SelectItem>
                    <SelectItem value="M. R. Shihab">M. R. Shihab</SelectItem>
                    <SelectItem value="M. R. Shihab">M. R. Shihab</SelectItem>
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
                    <SelectItem value="Confirmed">Unpaid</SelectItem>
                    <SelectItem value="Arrived">Part paid</SelectItem>
                    <SelectItem value="Started">Completed</SelectItem>
                    <SelectItem value="No show">Exchanged</SelectItem>
                    <SelectItem value="Completed">Refunded</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div>
                <h3 className="mb-2 text-base font-semibold text-[#2C2C2C]">
                  Channel
                </h3>
                <Select>
                  <SelectTrigger className="w-full text-base border !py-5 border-[#B3BAC5]">
                    <SelectValue placeholder="All statuses" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="All channels">All channels</SelectItem>
                    <SelectItem value="All online channels">
                      All online channels
                    </SelectItem>
                    <SelectItem value="Website">Website</SelectItem>
                    <SelectItem value="Marketing">Marketing</SelectItem>
                    <SelectItem value="Offline">Offline</SelectItem>
                    <SelectItem value="Google">Google</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div>
                <h3 className="mb-2 text-base font-semibold text-[#2C2C2C]">
                  Type
                </h3>
                <Select>
                  <SelectTrigger className="w-full text-base border !py-5 border-[#B3BAC5]">
                    <SelectValue placeholder="All item types" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="All item types">
                      All item types
                    </SelectItem>
                    <SelectItem value="Services">Services</SelectItem>
                    <SelectItem value="Products">Products</SelectItem>
                    <SelectItem value="Memberships">Memberships</SelectItem>
                    <SelectItem value="Shipping">Shipping</SelectItem>
                    <SelectItem value="Late cancellation fee">
                      Late cancellation fee
                    </SelectItem>
                    <SelectItem value="No show fees">No show fees</SelectItem>
                  </SelectContent>
                </Select>
              </div>
            </div>
            <div className="flex justify-between items-center">
              <p className="text-primary text-lg font-medium">
                Clear all filters
              </p>
              <div className="flex gap-3 justify-end mt-7">
                <button className="px-4 py-[5px] rounded-lg border border-borderColor font-medium text-[#2C2C2C]">
                  Cancel
                </button>
                <button className="px-4 py-2 bg-primary text-white rounded-lg border border-borderColorLight font-medium">
                  Apply
                </button>
              </div>
            </div>
          </DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
};

export default SalesSummaryModal;
