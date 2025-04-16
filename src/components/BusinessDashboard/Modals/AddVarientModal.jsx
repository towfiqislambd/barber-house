import { useState } from "react";
import { PlusSvg } from "@/components/svgContainer/SvgContainer";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";

const AddVarientModal = () => {
  const [open, setOpen] = useState(false);

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <button
          onClick={() => setOpen(true)}
          className="flex gap-2 items-center text-[#545454] font-medium px-5 py-2 rounded-full border border-[#00899089]"
        >
          <PlusSvg />
          <p>Add variant</p>
        </button>
      </DialogTrigger>
      <DialogContent className="xl:max-w-2xl max-w-[500px]">
        <DialogHeader>
          <DialogTitle className="mb-3 text-xl">Add variant</DialogTitle>
          <DialogDescription>
            <div className="space-y-6">
              <div>
                <label
                  htmlFor="services_name"
                  className="text-[#2C2C2C] mb-2 block font-medium"
                >
                  Variant name
                </label>
                <Input
                  id="services_name"
                  placeholder="Haircut"
                  className="px-3 placeholder:text-[#545454] py-3 text-base"
                />
              </div>
              <div>
                <label
                  htmlFor="description"
                  className="text-[#2C2C2C] mb-2 block font-medium"
                >
                  Variant description{" "}
                  <span className="text-[#757575]">(optional)</span>
                </label>
                <Textarea
                  id="description"
                  rows={4}
                  placeholder="Add a short description"
                  className="px-3 placeholder:text-[#545454] py-3 text-base bg-white"
                />
              </div>
              <div className="flex flex-col md:flex-row items-center gap-3 mb-5">
                <div className="md:flex-1 w-full">
                  <label className="text-[#2C2C2C] mb-2 block font-medium">
                    Duration
                  </label>
                  <Select>
                    <SelectTrigger className="w-full text-base border !py-6 bg-white">
                      <SelectValue placeholder="45min" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="40min">40 min</SelectItem>
                      <SelectItem value="45min">45 min</SelectItem>
                      <SelectItem value="50min">50 min</SelectItem>
                      <SelectItem value="55min">55 min</SelectItem>
                      <SelectItem value="1h">1h</SelectItem>
                      <SelectItem value="1h5min">1h 5min</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="md:flex-1 w-full">
                  <label className="text-[#2C2C2C] mb-2 block font-medium">
                    Price type
                  </label>
                  <Select>
                    <SelectTrigger className="w-full text-base border !py-6 bg-white">
                      <SelectValue placeholder="Fixed" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="Fixed">Fixed</SelectItem>
                      <SelectItem value="Free">Free</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div className="md:flex-1 w-full">
                  <label className="text-[#2C2C2C] mb-2 block font-medium">
                    Price
                  </label>
                  <Select>
                    <SelectTrigger className="w-full text-base border !py-6 bg-white">
                      <SelectValue placeholder="SAR 20.00" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="SAR 20.00">SAR 20.00</SelectItem>
                      <SelectItem value="SAR 10.00">SAR 10.00</SelectItem>
                      <SelectItem value="SAR 30.00">SAR 30.00</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
              </div>
            </div>
            <div className="flex gap-3 justify-end mt-7">
              <button
                onClick={() => setOpen(false)}
                className="px-4 py-[5px] rounded-lg border border-[#00C2CB] font-medium text-[#2C2C2C]"
              >
                Cancel
              </button>
              <button className="px-4 py-2 bg-[#008A90] text-white rounded-lg border border-[#008A90] font-medium">
                Save
              </button>
            </div>
          </DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
};

export default AddVarientModal;
