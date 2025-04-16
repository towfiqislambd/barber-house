import SelectServiceModal from "@/components/BusinessDashboard/Modals/SelectServiceModal";
import { MembershipCrossSvg } from "@/components/svgContainer/SvgContainer";
import { Input } from "@/components/ui/input";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "@/components/ui/textarea";
import { Link } from "react-router-dom";

const AddMembership = () => {
  return (
    <section className="4xl:max-w-[1095px] mx-auto py-5 px-3 lg:px-6 4xl:px-0">
      <div className="flex justify-between items-center mb-5">
        <Link to="/businessDashboard/catalogue">
          <MembershipCrossSvg />
        </Link>
        <button className="bg-[#008A90] text-white px-5 lg:py-[10px] py-2 font-medium rounded-lg">
          Add membership
        </button>
      </div>
      <div className="rounded-xl">
        <div className="border rounded-t-xl border-[#00C2CB] px-6 py-3">
          <h3 className="font-outfit text-2xl font-medium text-[#1E1E1E]">
            Add a membership
          </h3>
        </div>
        <div className="border rounded-b-xl 2xl:px-20 xl:px-10 px-5 py-5">
          <h3 className="font-outfit text-xl lg:text-2xl font-medium mb-1">
            Basic information
          </h3>
          <p className="lg:text-lg text-base text-[#545454] font-medium mb-5">
            How this form will appear to clients
          </p>
          <div className="shadow border rounded-lg xl:p-10 p-5">
            <h3 className="font-outfit text-xl lg:text-[22px] font-medium mb-2">
              Personal information
            </h3>
            <div className="mb-7">
              <label
                htmlFor="membership"
                className="mb-2 text-[#2C2C2C] font-semibold block text-[17px]"
              >
                Membership name
              </label>
              <Input placeholder="Add membership name" className="h-11 px-4" />
            </div>
            <div className="mb-10">
              <label className="mb-2 text-[#2C2C2C] font-semibold block text-[17px]">
                Membership description
              </label>
              <Textarea
                placeholder="Add membership description"
                rows={6}
                className="px-4"
              />
            </div>
            <div className="border-t border-[#00899072] mb-7"></div>

            <h3 className="font-outfit text-xl lg:text-[22px] font-medium mb-1">
              Services & sessions
            </h3>
            <p className="text-base lg:text-lg text-[#545454] font-medium mb-5">
              Add the services and sessions included in the membership.
            </p>
            <div className="mb-8">
              <label className="mb-2 text-[#2C2C2C] font-semibold block text-[17px]">
                Included services
              </label>
              <div className="relative">
                <Input placeholder="0 services" className="h-11 px-4" />
                <SelectServiceModal />
              </div>
            </div>
            <div className="flex flex-col lg:flex-row gap-5 items-center mb-10">
              <div className="lg:flex-1 w-full">
                <label className="mb-2 text-[#2C2C2C] font-semibold block text-[17px]">
                  Sessions
                </label>
                <Select>
                  <SelectTrigger className="w-full text-base border !py-[22px]">
                    <SelectValue placeholder="Limited" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="Limited">Limited</SelectItem>
                    <SelectItem value="Unlimited">Unlimited</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="lg:flex-1 w-full">
                <div className="lg:flex-1 w-full">
                  <label className="mb-2 text-[#2C2C2C] font-semibold block text-[17px]">
                    Number of sessions
                  </label>
                  <Input placeholder="SAR" className="h-11 px-4" />
                </div>
              </div>
            </div>
            <div className="border-t border-[#00899072] mb-7"></div>

            <h3 className="font-outfit text-xl lg:text-[22px] font-medium mb-1">
              Pricing & payment
            </h3>
            <p className="text-base lg:text-lg text-[#545454] font-medium mb-5">
              Choose how you&apos;d like your clients to pay
            </p>
            <div className="flex flex-col lg:flex-row gap-5 items-center mb-10">
              <div className="lg:flex-1 w-full">
                <label className="mb-2 text-[#2C2C2C] font-semibold block text-[17px]">
                  Valid for
                </label>
                <Select>
                  <SelectTrigger className="w-full text-base border !py-[22px]">
                    <SelectValue placeholder="7 days" />
                  </SelectTrigger>
                  <SelectContent>
                    <SelectItem value="14 days">14 days</SelectItem>
                    <SelectItem value="1 month">1 month</SelectItem>
                    <SelectItem value="2 months">2 months</SelectItem>
                    <SelectItem value="3 months">3 months</SelectItem>
                    <SelectItem value="4 months">4 months</SelectItem>
                    <SelectItem value="6 months">6 months</SelectItem>
                    <SelectItem value="8 months">8 months</SelectItem>
                    <SelectItem value="1 year">1 year</SelectItem>
                    <SelectItem value="18 months">18 months</SelectItem>
                    <SelectItem value="2 years">2 years</SelectItem>
                    <SelectItem value="5 years">5 years</SelectItem>
                  </SelectContent>
                </Select>
              </div>
              <div className="lg:flex-1 w-full">
                <div className="lg:flex-1 w-full">
                  <label className="mb-2 text-[#2C2C2C] font-semibold block text-[17px]">
                    Price
                  </label>
                  <Input placeholder="SAR" className="h-11 px-4" />
                </div>
              </div>
            </div>
            <div className="border-t border-[#00899072] mb-7"></div>

            <h3 className="font-outfit text-xl lg:text-[22px] font-medium mb-1">
              Tax rate
            </h3>
            <div className="mb-10">
              <label className="mb-2 text-[#2C2C2C] font-semibold block text-base lg:text-[17px]">
                Tax rate
              </label>
              <Select>
                <SelectTrigger className="w-full text-base border !py-[22px]">
                  <SelectValue placeholder="No tax" />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="No tax">No tax</SelectItem>
                </SelectContent>
              </Select>
            </div>
            <div className="border-t border-[#00899072] mb-7"></div>

            <h3 className="font-outfit text-xl lg:text-[22px] font-medium mb-1">
              Terms & conditions
            </h3>
            <p className="text-base lg:text-lg text-[#545454] font-medium mb-5">
              If there are any rules attached to your membership it&apos;s a
              good place to mention them
            </p>
            <div className="">
              <label className="mb-2 text-[#2C2C2C] font-semibold block text-[17px]">
                Terms & conditions{" "}
                <span className="text-[#757575]">(optional)</span>
              </label>
              <Textarea
                placeholder="Add terms & conditions"
                rows={6}
                className="px-4"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AddMembership;
