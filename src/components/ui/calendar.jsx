import * as React from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { cn } from "@/lib/utils";
import { DayPicker } from "react-day-picker";
import "react-day-picker/dist/style.css";

function Calendar({ className, classNames, showOutsideDays = true, ...props }) {
  const [selected, setSelected] = React.useState();
  return (
    <DayPicker
      selected={selected}
      onSelect={setSelected}
      showOutsideDays={showOutsideDays}
      className={cn("p-3", className)}
      components={{
        IconLeft: ({ className, ...props }) => (
          <ChevronLeft className={cn("h-4 w-4", className)} {...props} />
        ),
        IconRight: ({ className, ...props }) => (
          <ChevronRight className={cn("h-4 w-4", className)} {...props} />
        ),
      }}
      {...props}
    />
  );
}
Calendar.displayName = "Calendar";

export { Calendar };
