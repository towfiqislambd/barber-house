import { useState } from "react";
import { Checkbox } from "@/components/ui/checkbox";
import onlineBooking from "../../../assets/images/online-booking.png";
import { Input } from "@/components/ui/input";
import { MembershipSvg } from "@/components/svgContainer/SvgContainer";
import { Switch } from "@/components/ui/switch";

const OnlineBooking = () => {
  const [isOnlineBookingEnabled, setIsOnlineBookingEnabled] = useState(false);
  const [isServiceUpsellingEnabled, setIsServiceUpsellingEnabled] =
    useState(false);
  const [isMembershipUpsellingEnabled, setIsMembershipUpsellingEnabled] =
    useState(false);

  return (
    <div>
      <figure>
        <img src={onlineBooking} className="w-full h-full object-cover" />
      </figure>
      <div className="mb-10 flex justify-between items-center mt-5">
        <div>
          <div className="flex gap-2 items-center">
            <h3 className="font-outfit text-xl lg:text-2xl mb-1 font-medium">
              Online booking
            </h3>
            {isOnlineBookingEnabled ? (
              <p className="font-semibold px-3 py-1 border border-[#008C4F] rounded-full bg-[#DCFEE6] text-sm text-[#008C4F]">
                On
              </p>
            ) : (
              <p className="font-semibold px-3 py-1 border rounded-full bg-[#B0B0B0] text-sm text-[#676767]">
                Off
              </p>
            )}
          </div>
          <p className="text-[#545454] text-base lg:text-lg font-medium">
            Choose which team members will perform this service
          </p>
        </div>
        <Switch
          checked={isOnlineBookingEnabled}
          onCheckedChange={setIsOnlineBookingEnabled}
        />
      </div>

      {isOnlineBookingEnabled && (
        <>
          <div className="mb-10">
            <h3 className="font-outfit text-xl lg:text-2xl mt-5 mb-1 font-medium">
              Upselling
            </h3>
            <p className="text-[#545454] lg:max-w-[904px] text-base lg:text-lg mb-5 font-medium">
              Encourage clients to book additional services and buy suitable
              memberships when booking online. Manage your workspace settings
            </p>
          </div>
          <div className="mt-5 space-y-7">
            <div>
              <p className="flex gap-3 items-center">
                <Checkbox
                  id="Service"
                  className="scale-150"
                  checked={isServiceUpsellingEnabled}
                  onCheckedChange={setIsServiceUpsellingEnabled}
                />
                <label
                  htmlFor="Service"
                  className="font-medium text-[#2C2C2C] text-lg"
                >
                  Service upselling
                </label>
              </p>
              <p className="text-[#545454] ps-7 mt-1 font-medium">
                Adds an additional step when booking, where clients can choose
                additional services
              </p>

              {isServiceUpsellingEnabled && (
                <div className="flex flex-col lg:flex-row ps-7 gap-5 mt-5">
                  <div className="lg:flex-1 w-full">
                    <label
                      htmlFor="services"
                      className="text-[#2C2C2C] mb-2 text-lg block font-medium"
                    >
                      Services
                    </label>
                    <div className="relative">
                      <Input
                        id="services"
                        placeholder="None selected"
                        className="placeholder:text-[#545454] h-12 text-base"
                      />
                      <button className="font-medium text-[#008A90] absolute right-3 top-3">
                        Edit
                      </button>
                    </div>
                    <p className="mt-2 text-[15px] text-[#757575] font-medium">
                      Select up to 5 services
                    </p>
                  </div>
                  <div className="lg:flex-1 w-full">
                    <label className="text-[#2C2C2C] mb-2 text-lg block font-medium">
                      Discount
                    </label>
                    <div className="relative">
                      <Input
                        id="services_name"
                        placeholder="0"
                        className="!px-3 placeholder:text-[#545454] h-12 text-base"
                      />
                      <button className="font-medium text-[#008A90] absolute right-3 top-3">
                        %
                      </button>
                    </div>
                    <p className="mt-2 text-[15px] text-[#757575] font-medium">
                      Discount will be applied to upsold services
                    </p>
                  </div>
                </div>
              )}
            </div>
            <div>
              <p className="flex gap-3 items-center">
                <Checkbox
                  id="membership"
                  className="scale-150"
                  checked={isMembershipUpsellingEnabled}
                  onCheckedChange={setIsMembershipUpsellingEnabled}
                />
                <label
                  htmlFor="membership"
                  className="font-medium text-[#2C2C2C] text-lg"
                >
                  Membership upselling
                </label>
              </p>
              <p className="text-[#545454] ps-7 mt-1 font-medium">
                Adds an additional step when booking, where clients can choose
                additional services
              </p>

              {isMembershipUpsellingEnabled && (
                <div className="flex lg:ms-7 gap-4 mt-5 bg-[#E6ECF3] rounded-[16px] 2xl:px-12 px-6 2xl:py-10 py-5">
                  <MembershipSvg />
                  <p className="lg:max-w-[634px] -mt-1 font-medium text-[#2C2C2C] text-base xl:text-lg">
                    You do not currently have any memberships set up for this
                    service. Create a membership to enable upselling
                  </p>
                </div>
              )}
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default OnlineBooking;
