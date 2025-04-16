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

const AllServicesModal = () => {
  const [open, setOpen] = useState(false);

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <button className="text-[#6950F3] font-manrope font-medium absolute top-[10px] right-4">
          Edit
        </button>
      </DialogTrigger>
      <DialogContent className="md:max-w-[720px] w-[300px]">
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
              <div className="sm:h-[350px] h-[250px] overflow-y-auto p-5">
                {/* First Div */}
                <div className="flex justify-between py-4 border-b border-gray-300">
                  <div className="flex gap-2 items-center">
                    <Checkbox id="haircut" />
                    <div className="">
                      <label
                        htmlFor="haircut"
                        className="font-medium text-[#2C2C2C]"
                      >
                        Haircut
                      </label>
                      <p>50 Min</p>
                    </div>
                  </div>
                  <p className="">BDT 40</p>
                </div>
                {/*  */}
                {/* Second Div */}
                <div className="flex justify-between py-4 border-b border-gray-300">
                  <div className="flex gap-2 items-center">
                    <Checkbox id="haircut" />
                    <div className="">
                      <label
                        htmlFor="haircut"
                        className="font-medium text-[#2C2C2C]"
                      >
                        Haircut
                      </label>
                      <p>50 Min</p>
                    </div>
                  </div>
                  <p className="">BDT 40</p>
                </div>
                {/*  */}
                {/* Third Div */}
                <div className="flex justify-between py-4 border-b border-gray-300">
                  <div className="flex gap-2 items-center">
                    <Checkbox id="haircut" />
                    <div className="">
                      <label
                        htmlFor="haircut"
                        className="font-medium text-[#2C2C2C]"
                      >
                        Haircut
                      </label>
                      <p>50 Min</p>
                    </div>
                  </div>
                  <p className="">BDT 40</p>
                </div>
                {/*  */}
                {/* Fourth Div */}
                <div className="flex justify-between py-4 border-b border-gray-300">
                  <div className="flex gap-2 items-center">
                    <Checkbox id="haircut" />
                    <div className="">
                      <label
                        htmlFor="haircut"
                        className="font-medium text-[#2C2C2C]"
                      >
                        Haircut
                      </label>
                      <p>50 Min</p>
                    </div>
                  </div>
                  <p className="">BDT 40</p>
                </div>
                {/*  */}
                {/* Fifth Div */}
                <div className="flex justify-between py-4 border-b border-gray-300">
                  <div className="flex gap-2 items-center">
                    <Checkbox id="haircut" />
                    <div className="">
                      <label
                        htmlFor="haircut"
                        className="font-medium text-[#2C2C2C]"
                      >
                        Haircut
                      </label>
                      <p>50 Min</p>
                    </div>
                  </div>
                  <p className="">BDT 40</p>
                </div>
                {/*  */}
                {/* Six Div */}
                <div className="flex justify-between py-4 border-b border-gray-300">
                  <div className="flex gap-2 items-center">
                    <Checkbox id="haircut" />
                    <div className="">
                      <label
                        htmlFor="haircut"
                        className="font-medium text-[#2C2C2C]"
                      >
                        Haircut
                      </label>
                      <p>50 Min</p>
                    </div>
                  </div>
                  <p className="">BDT 40</p>
                </div>
                {/* Seven Div */}
                <div className="flex justify-between py-4 border-b border-gray-300">
                  <div className="flex gap-2 items-center">
                    <Checkbox id="haircut" />
                    <div className="">
                      <label
                        htmlFor="haircut"
                        className="font-medium text-[#2C2C2C]"
                      >
                        Haircut
                      </label>
                      <p>50 Min</p>
                    </div>
                  </div>
                  <p className="">BDT 40</p>
                </div>
              </div>
              {/*  */}
            </section>
            <div className="flex flex-col sm:flex-row gap-3 justify-end mt-7">
              <button
                onClick={() => setOpen(false)}
                className="px-4 py-[5px] rounded-lg border border-[#00C2CB] font-medium text-[#2C2C2C] w-[150px]"
              >
                Cancel
              </button>
              <button className="px-4 py-2 bg-[#008A90] text-white rounded-lg border border-[#008A90] font-medium w-[150px]">
                Apply
              </button>
            </div>
          </DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
};

export default AllServicesModal;
