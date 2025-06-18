import {
  ContinueButtonArrowSvg,
  LeftSideArrowSvg,
} from "@/components/svgContainer/SvgContainer";
import { Label } from "@/components/ui/label";
import { useAllServices, useAllTeamMembers } from "@/hooks/cms.queries";
import { useState } from "react";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Button } from "@/components/ui/button";
import { Command, CommandItem, CommandList } from "@/components/ui/command";
import { CheckIcon } from "lucide-react";

const OnlineProfileStepNine = ({ step, setStep, setFormData }) => {
  const { data: allTeamMembers } = useAllTeamMembers();
  const { data: allServices } = useAllServices();
  const [teams, setTeams] = useState([]);
  const [services, setServices] = useState([]);
  const [error, setError] = useState({ team: false, service: false });

  const toggleSelection = (id, array, setArray) => {
    setArray(prev =>
      prev.includes(id) ? prev.filter(item => item !== id) : [...prev, id]
    );
  };

  const handleContinue = () => {
    const hasError = {
      team: teams.length === 0,
      service: services.length === 0,
    };
    setError(hasError);

    if (!hasError.team && !hasError.service) {
      setFormData(prevData => ({ ...prevData, teams, services }));
      setStep(step + 1);
    }
  };

  return (
    <section className="px-[14px] md:px-0">
      <div className="flex justify-between container mt-9">
        <button onClick={() => setStep(step - 1)}>
          <LeftSideArrowSvg />
        </button>
        <div className="flex gap-4">
          <button className="border border-[#0D1619] px-[18px] py-[10px] rounded-[10px] text-[#0D1619] font-manrope text-base font-bold leading-6">
            Close
          </button>
          <button
            onClick={handleContinue}
            className="bg-[#0D1619] rounded-[10px] text-[#FFF] w-[135px] flex items-center justify-center gap-[6px]"
          >
            Continue
            <ContinueButtonArrowSvg />
          </button>
        </div>
      </div>

      <div className="max-w-[608px] mx-auto mt-6 lg:mt-0 px-5 md:px-0 pb-10 sm:pb-0">
        {/* Team Multi-Select */}
        <div className="mt-5 space-y-2">
          <Label className="text-lg">Select team member(s)</Label>
          <Popover>
            <PopoverTrigger asChild>
              <Button
                variant="outline"
                className={`w-full justify-start !py-6 ${
                  error.team ? "border-red-500" : ""
                }`}
              >
                {teams.length > 0
                  ? `${teams.length} team member(s) selected`
                  : "Select team member(s)"}
              </Button>
            </PopoverTrigger>
            <PopoverContent className="w-full max-h-[200px] overflow-y-auto p-0">
              <Command>
                <CommandList>
                  {allTeamMembers?.map(member => (
                    <CommandItem
                      key={member?.id}
                      onSelect={() =>
                        toggleSelection(member?.id, teams, setTeams)
                      }
                      className="cursor-pointer"
                    >
                      <div className="flex items-center gap-2">
                        <span>{member?.first_name}</span>
                        {teams.includes(member?.id) && (
                          <CheckIcon className="w-4 h-4 ml-auto text-green-500" />
                        )}
                      </div>
                    </CommandItem>
                  ))}
                </CommandList>
              </Command>
            </PopoverContent>
          </Popover>
          {error.team && (
            <p className="text-red-500 text-sm">
              Please select at least one team member
            </p>
          )}
        </div>

        {/* Service Multi-Select */}
        <div className="mt-5 space-y-2">
          <Label className="text-lg">Select service(s)</Label>
          <Popover>
            <PopoverTrigger asChild>
              <Button
                variant="outline"
                className={`w-full justify-start !py-6 ${
                  error.service ? "border-red-500" : ""
                }`}
              >
                {services.length > 0
                  ? `${services.length} service(s) selected`
                  : "Select service(s)"}
              </Button>
            </PopoverTrigger>
            <PopoverContent className="w-full max-h-[200px] overflow-y-auto p-0">
              <Command>
                <CommandList>
                  {allServices?.map(serviceItem => {
                    const service = serviceItem?.service;
                    return (
                      <CommandItem
                        key={service?.id}
                        onSelect={() =>
                          toggleSelection(service?.id, services, setServices)
                        }
                        className="cursor-pointer"
                      >
                        <div className="flex items-center gap-2">
                          <span>{service?.service_name}</span>
                          {services.includes(service?.id) && (
                            <CheckIcon className="w-4 h-4 ml-auto text-green-500" />
                          )}
                        </div>
                      </CommandItem>
                    );
                  })}
                </CommandList>
              </Command>
            </PopoverContent>
          </Popover>
          {error.service && (
            <p className="text-red-500 text-sm">
              Please select at least one service
            </p>
          )}
        </div>
      </div>
    </section>
  );
};

export default OnlineProfileStepNine;
