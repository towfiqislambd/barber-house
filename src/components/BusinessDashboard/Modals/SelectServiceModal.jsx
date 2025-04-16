import { useState } from "react";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import { Checkbox } from "@/components/ui/checkbox";
import { Input } from "@/components/ui/input";
import { MembershipSearchSvg } from "@/components/svgContainer/SvgContainer";

const SelectServiceModal = () => {
  const [open, setOpen] = useState(false);

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <button className="text-[#008A90] font-medium absolute top-[10px] right-4">
          Edit
        </button>
      </DialogTrigger>
      <DialogContent className="xl:max-w-md lg:max-w-[400px] max-w-[380px]">
        <DialogHeader>
          <DialogTitle className="mb-3 text-xl">Select services</DialogTitle>
          <DialogDescription>
            <section className="">
              <div className="relative mb-7">
                <Input
                  placeholder="Search services"
                  className="px-8 h-10 border border-[#85DDB1]"
                />
                <button className="absolute top-2 left-2">
                  <MembershipSearchSvg />
                </button>
              </div>
              <div className="flex gap-3 items-center mb-1">
                <Checkbox id="hair" className="scale-125" />
                <label
                  htmlFor="hair"
                  className="text-[17px] font-medium text-[#2C2C2C]"
                >
                  Hair & styling
                </label>
                <p className="border rounded-full border-gray-200 grid place-items-center w-6 h-6 text-sm font-bold">
                  3
                </p>
              </div>
              <div className="flex justify-between py-4 border-b border-gray-300">
                <div className="flex gap-2 items-center">
                  <Checkbox id="haircut" />
                  <label
                    htmlFor="haircut"
                    className="font-medium text-[#2C2C2C]"
                  >
                    Haircut
                  </label>
                </div>
                <p className="">SAR 20.00</p>
              </div>
              <div className="flex justify-between py-4 border-b border-gray-300">
                <div className="flex gap-2 items-center">
                  <Checkbox id="color" />
                  <label htmlFor="color" className="font-medium text-[#2C2C2C]">
                    Hair color
                  </label>
                </div>
                <p className="">SAR 20.00</p>
              </div>
              <div className="flex justify-between py-4 mb-5">
                <div className="flex gap-2 items-center">
                  <Checkbox id="dry" />
                  <label htmlFor="dry" className="font-medium text-[#2C2C2C]">
                    Blow dry
                  </label>
                </div>
                <p className="">SAR 20.00</p>
              </div>
              <div className="flex gap-3 items-center">
                <Checkbox id="nails" className="scale-125" />
                <label
                  htmlFor="nails"
                  className="text-[17px] font-medium text-[#2C2C2C]"
                >
                  Nails
                </label>
                <p className="border rounded-full border-gray-200 grid place-items-center w-6 h-6 text-sm font-bold">
                  1
                </p>
              </div>
              <div className="flex justify-between py-4 mb-5">
                <div className="flex gap-2 items-center">
                  <Checkbox id="Manicure" />
                  <label
                    htmlFor="Manicure"
                    className="font-medium text-[#2C2C2C]"
                  >
                    Manicure
                  </label>
                </div>
                <p className="">SAR 20.00</p>
              </div>
              <div className="flex gap-3 items-center">
                <Checkbox id="Messaging" className="scale-125" />
                <label
                  htmlFor="Messaging"
                  className="text-[17px] font-medium text-[#2C2C2C]"
                >
                  Messaging
                </label>
                <p className="border rounded-full border-gray-200 grid place-items-center w-6 h-6 text-sm font-bold">
                  1
                </p>
              </div>
              <div className="flex justify-between py-4 mb-3">
                <div className="flex gap-2 items-center">
                  <Checkbox id="message" />
                  <label
                    htmlFor="message"
                    className="font-medium text-[#2C2C2C]"
                  >
                    Body message
                  </label>
                </div>
                <p className="">SAR 20.00</p>
              </div>
            </section>
            <div className="flex gap-3 justify-end mt-7">
              <button
                onClick={() => setOpen(false)}
                className="px-4 py-[5px] rounded-lg border border-[#00C2CB] font-medium text-[#2C2C2C]"
              >
                Close
              </button>
              <button className="px-4 py-2 bg-[#008A90] text-white rounded-lg border border-[#008A90] font-medium">
                Select 0 service
              </button>
            </div>
          </DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
};

export default SelectServiceModal;
