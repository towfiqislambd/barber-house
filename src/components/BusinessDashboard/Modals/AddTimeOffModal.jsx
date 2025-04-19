import { useState } from "react";
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
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";

const AddTimeOffModal = () => {
  const [open, setOpen] = useState(false);

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <button>Add time off</button>
      </DialogTrigger>
      <DialogContent className="max-w-2xl">
        <DialogHeader>
          <DialogTitle className="mb-3 text-xl">Add time off</DialogTitle>
          <DialogDescription>
            <div className="space-y-6">
              <div className="flex gap-5">
                <div className="flex-1">
                  <label className="text-[#2C2C2C] mb-2 block font-medium">
                    Team member
                  </label>
                  <Select>
                    <SelectTrigger className="w-full text-base border !py-6 bg-white">
                      <SelectValue placeholder="Wendy Smith (Demo)" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="40min">40 min</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="flex-1">
                  <label className="text-[#2C2C2C] mb-2 block font-medium">
                    Type
                  </label>
                  <Select>
                    <SelectTrigger className="w-full text-base border !py-6 bg-white">
                      <SelectValue placeholder="Annual leave" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="40min">40 min</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
              <div className="flex items-center gap-3 mb-5">
                <div className="flex-1">
                  <label className="text-[#2C2C2C] mb-2 block font-medium">
                    Start date
                  </label>
                  <Select>
                    <SelectTrigger className="w-full text-base border !py-6 bg-white">
                      <SelectValue placeholder="Wendy Smith (Demo)" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="Fixed">Fixed</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="flex-1">
                  <div className="flex gap-5">
                    <div className="flex-1">
                      <label className="text-[#2C2C2C] mb-2 block font-medium">
                        Start time
                      </label>
                      <Select>
                        <SelectTrigger className="w-full text-base border !py-6 bg-white">
                          <SelectValue placeholder="10.00" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="SAR 20.00">SAR 20.00</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                    <div className="flex-1">
                      <label className="text-[#2C2C2C] mb-2 block font-medium">
                        End time
                      </label>
                      <Select>
                        <SelectTrigger className="w-full text-base border !py-6 bg-white">
                          <SelectValue placeholder="10.00" />
                        </SelectTrigger>
                        <SelectContent>
                          <SelectItem value="SAR 20.00">SAR 20.00</SelectItem>
                        </SelectContent>
                      </Select>
                    </div>
                  </div>
                </div>
              </div>
              <div>
                <label className="text-[#2C2C2C] mb-2 block font-medium">
                  Repeat until
                </label>
                <Select>
                  <SelectTrigger className="w-full text-base border !py-6 bg-white">
                    <SelectValue placeholder="Mon, 17 Feb 2025" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="SAR 20.00">SAR 20.00</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div>
                <label
                  htmlFor="description"
                  className="text-[#2C2C2C] mb-2 block font-medium"
                >
                  Description
                </label>
                <Textarea
                  id="description"
                  rows={5}
                  placeholder="Add a short description"
                  className="px-3 placeholder:text-[#545454] py-3 text-base bg-white"
                />
              </div>
              <div className="flex gap-2 font-medium items-center">
                <Checkbox />
                <p>Approve</p>
              </div>
              <p className="">
                Online bookings cannot be placed during time off.
              </p>
            </div>
            <div className="flex gap-3 justify-end mt-7">
              <button
                onClick={() => setOpen(false)}
                className="px-4 py-[5px] rounded-lg border border-[#4c4c4c] font-medium text-[#2C2C2C]"
              >
                Cancel
              </button>
              <button className="px-4 py-2 bg-primary text-white rounded-lg border border-borderColorLight font-medium">
                Save
              </button>
            </div>
          </DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
};

export default AddTimeOffModal;
