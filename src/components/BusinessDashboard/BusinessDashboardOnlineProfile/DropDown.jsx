import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { OptionDropDownSvg } from "@/components/svgContainer/SvgContainer";

const DropDown = ({ title, options }) => {
  const [checkedItems, setCheckedItems] = useState(
    options.reduce(
      (acc, option) => ({ ...acc, [option.label]: option.checked || false }),
      {}
    )
  );

  const handleCheckedChange = (label) => {
    setCheckedItems((prev) => ({ ...prev, [label]: !prev[label] }));
  };

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          className="text-[#0D1619] font-manrope text-base font-bold leading-6"
          variant="outline"
        >
          {title} <OptionDropDownSvg />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent className="w-56">
        {options.map((option) => (
          <DropdownMenuCheckboxItem
            key={option.label}
            checked={checkedItems[option.label]}
            onCheckedChange={() => handleCheckedChange(option.label)}
          >
            {option.label}
          </DropdownMenuCheckboxItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
};

export default DropDown;
