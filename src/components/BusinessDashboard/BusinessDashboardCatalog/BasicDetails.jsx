import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import Input from "antd/es/input/Input";

const BasicDetails = () => {
  return (
    <div>
      <h3 className="font-outfit text-2xl text-[#2C2C2C] font-medium mb-5">
        Basic details
      </h3>
      <div className="mb-5">
        <label
          htmlFor="services_name"
          className="text-[#2C2C2C] mb-2 text-lg block font-medium"
        >
          Service name
        </label>
        <Input
          id="services_name"
          placeholder="Add a service name, e.g. Men’s haircut"
          className="px-3 placeholder:text-[#545454] py-3 text-base"
        />
      </div>
      <div className="flex flex-col lg:flex-row gap-5 mb-5">
        <div className="lg:flex-1 w-full">
          <label className="text-[#2C2C2C] mb-2 text-lg block font-medium">
            Service type
          </label>
          <Select>
            <SelectTrigger className="w-full text-base border !py-6 bg-white">
              <SelectValue placeholder="Select service type" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="All statuses">All statuses</SelectItem>
              <SelectItem value="Active">Active</SelectItem>
              <SelectItem value="Archived">Archived</SelectItem>
            </SelectContent>
          </Select>
          <p className="mt-2 text-[15px] text-[#757575] font-medium">
            Helping clients to find their services
          </p>
        </div>
        <div className="lg:flex-1 w-full">
          <label className="text-[#2C2C2C] mb-2 text-lg block font-medium">
            Menu category
          </label>
          <Select>
            <SelectTrigger className="w-full text-base border !py-6 bg-white">
              <SelectValue placeholder="Select menu category" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="All statuses">All statuses</SelectItem>
              <SelectItem value="Active">Active</SelectItem>
              <SelectItem value="Archived">Archived</SelectItem>
            </SelectContent>
          </Select>
          <p className="mt-2 text-[15px] text-[#757575] font-medium">
            The category displayed to you, and to clients online
          </p>
        </div>
      </div>
      <div className="mb-5">
        <label
          htmlFor="description"
          className="text-[#2C2C2C] mb-2 text-lg block font-medium"
        >
          Description <span className="text-[#757575]">(optional)</span>
        </label>
        <Textarea
          id="description"
          rows={6}
          placeholder="Add a short description"
          className="px-3 placeholder:text-[#545454] py-3 text-base bg-white"
        />
      </div>
      <h3 className="font-outfit text-2xl text-[#2C2C2C] font-medium mt-10 mb-5">
        Pricing & duration
      </h3>
      <div className="flex flex-col lg:flex-row items-center gap-5 mb-5">
        <div className="lg:flex-1 w-full">
          <label className="text-[#2C2C2C] mb-2 text-base lg:text-lg block font-medium">
            Duration
          </label>
          <Select>
            <SelectTrigger className="w-full text-base border !py-6 bg-white">
              <SelectValue placeholder="45min" />
            </SelectTrigger>
            <SelectContent>
              <SelectItem value="All statuses">40 min</SelectItem>
              <SelectItem value="Active">45 min</SelectItem>
              <SelectItem value="Archived">50 min</SelectItem>
              <SelectItem value="Archived">55 min</SelectItem>
              <SelectItem value="Archived">1h</SelectItem>
              <SelectItem value="Archived">1h 5min</SelectItem>
            </SelectContent>
          </Select>
        </div>
        <div className="lg:flex-1 w-full">
          <label className="text-[#2C2C2C] mb-2 text-base lg:text-lg block font-medium">
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
        <div className="lg:flex-1 w-full">
          <label className="text-[#2C2C2C] mb-2 text-base lg:text-lg block font-medium">
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
  );
};

export default BasicDetails;
