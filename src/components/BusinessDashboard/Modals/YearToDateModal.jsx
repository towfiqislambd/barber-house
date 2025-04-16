import { useState } from "react";
import { YearToDateSvg } from "@/components/svgContainer/SvgContainer";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTrigger,
} from "@/components/ui/dialog";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import * as React from "react";
import { addDays, format } from "date-fns";
import { CalendarIcon } from "lucide-react";

import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import { Calendar } from "@/components/ui/calendar";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";

const YearToDateModal = ({ className }) => {
  const [date, setDate] = React.useState({
    from: new Date(2022, 0, 20),
    to: addDays(new Date(2022, 0, 20), 20),
  });
  const [open, setOpen] = useState(false);
  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogTrigger asChild>
        <div className="bg-[#EBECF0] py-3 px-[14px] rounded-lg">
          <button
            onClick={() => setOpen(true)}
            className="flex gap-2 items-center text-[#000] bg-[#FFF] font-medium px-5 py-2 rounded-full"
          >
            <p>Year to date</p>
            <YearToDateSvg />
          </button>
        </div>
      </DialogTrigger>
      <DialogContent className="xl:max-w-2xl">
        <DialogHeader>
          <DialogDescription>
            <div className="space-y-6">
              <div className="flex-1">
                <label className="text-[#2C2C2C] mb-2 block font-medium">
                  Date range
                </label>
                <Select>
                  <SelectTrigger className="w-full text-base border !py-6 bg-white">
                    <SelectValue placeholder="45min" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="40min">40 min</SelectItem>
                    <SelectItem value="Today">Today</SelectItem>
                    <SelectItem value="Yesterday">Yesterday</SelectItem>
                    <SelectItem value="Last 7 days">Last 7 days</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              {/* Date picker */}
              <div className={cn("grid gap-2 justify-center", className)}>
                <Popover>
                  <PopoverTrigger asChild>
                    <Button
                      id="date"
                      variant={"outline"}
                      className={cn(
                        "w-full justify-start text-left font-normal",
                        !date && "text-muted-foreground"
                      )}
                    >
                      <CalendarIcon />
                      {date?.from ? (
                        date.to ? (
                          <>
                            {format(date.from, "LLL dd, y")} -{" "}
                            {format(date.to, "LLL dd, y")}
                          </>
                        ) : (
                          format(date.from, "LLL dd, y")
                        )
                      ) : (
                        <span>Pick a date</span>
                      )}
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent className="w-auto p-0" align="start">
                    <Calendar
                      initialFocus
                      mode="range"
                      defaultMonth={date?.from}
                      selected={date}
                      onSelect={setDate}
                      numberOfMonths={2}
                    />
                  </PopoverContent>
                </Popover>
              </div>
            </div>
            {/*  */}
            <div className="flex gap-3 justify-end mt-7">
              <button
                onClick={() => setOpen(false)}
                className="px-4 py-[5px] rounded-lg bg-[#fff] border border-[#000] font-medium text-[#2C2C2C]"
              >
                Cancel
              </button>
              <button className="px-4 py-2 bg-[#000] text-white rounded-lg font-medium">
                Apply
              </button>
            </div>
          </DialogDescription>
        </DialogHeader>
      </DialogContent>
    </Dialog>
  );
};

export default YearToDateModal;
