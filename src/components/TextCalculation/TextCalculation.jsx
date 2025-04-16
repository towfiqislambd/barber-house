import { Label } from "@/components/ui/label";
import { RadioGroup, RadioGroupItem } from "@/components/ui/radio-group";

const TextCalculation = () => {
  return (
    <RadioGroup defaultValue="comfortable">
      <div className="flex items-baseline gap-2 space-y-[6px]">
        <RadioGroupItem value="default" id="r1" />
        <div>
          <Label
            className="text-[#000] font-manrope text-base lg:text-lg font-semibold leading-[27px]"
            htmlFor="r1"
          >
            Retail prices exclude tax
          </Label>
          <p className="text-textLight font-manrope text-sm lg:text-base font-normal leading-6">
            Tax = Retail * Tax
          </p>
          <p className="text-textLight font-manrope text-sm lg:text-base font-normal leading-6">
            e.g. 20% tax on a $10 item costs $2
          </p>
        </div>
      </div>
      <div className="flex items-center space-x-2 mt-6">
        <RadioGroupItem value="comfortable" id="r2" />
        <div>
          <Label
            className="text-[#000] font-manrope text-base lg:text-lg font-semibold leading-[27px]"
            htmlFor="r2"
          >
            Retail prices exclude tax
          </Label>
          <p className="text-textLight font-manrope text-sm lg:text-base font-normal leading-6">
            Tax = Retail * Tax
          </p>
          <p className="text-textLight font-manrope text-sm lg:text-base font-normal leading-6">
            e.g. 20% tax on a $10 item costs $2
          </p>
        </div>
      </div>
    </RadioGroup>
  );
};

export default TextCalculation;
