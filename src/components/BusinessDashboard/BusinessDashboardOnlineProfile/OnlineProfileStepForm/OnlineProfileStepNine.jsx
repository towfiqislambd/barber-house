import {
  ContinueButtonArrowSvg,
  LeftSideArrowSvg,
} from "@/components/svgContainer/SvgContainer";
import { Label } from "@/components/ui/label";
import { useAllServices, useAllTeamMembers } from "@/hooks/cms.queries";
import { useState, useEffect } from "react";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import { Button } from "@/components/ui/button";
import { Command, CommandItem, CommandList } from "@/components/ui/command";
import { CheckIcon } from "lucide-react";

const OnlineProfileStepNine = ({ step, setStep, setFormData, details }) => {
  const { data: allTeamMembers } = useAllTeamMembers();
  const { data: allServices } = useAllServices();

  const [teams, setTeams] = useState([]);
  const [services, setServices] = useState([]);
  const [error, setError] = useState({ team: false, service: false });

  // ✅ Populate defaults from details
  useEffect(() => {
    if (details?.store_teams?.length > 0) {
      const defaultTeamIds = details.store_teams.map(item => item.team_id);
      setTeams(defaultTeamIds);
    }

    if (details?.store_services?.length > 0) {
      const defaultServiceIds = details.store_services.map(
        item => item.catalog_service_id
      );
      setServices(defaultServiceIds);
    }
  }, [details]);

  // Update error when teams/services change
  useEffect(() => {
    setError({
      team: teams.length === 0,
      service: services.length === 0,
    });
  }, [teams, services]);

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

    if (hasError.team || hasError.service) {
      setError(hasError);
      return;
    }

    setFormData(prevData => ({ ...prevData, teams, services }));
    setStep(step + 1);
  };

  return (
    <section className="px-[14px] md:px-0">
      <div className="flex justify-between container mt-9">
        <button onClick={() => setStep(step - 1)}>
          <LeftSideArrowSvg />
        </button>
        <div className="flex gap-4">
          <button
            onClick={handleContinue}
            className="bg-[#0D1619] px-[18px] py-[10px] rounded-[10px] text-[#FFF] flex items-center justify-center gap-[6px]"
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
            <PopoverContent className="w-full max-h-[240px] overflow-y-auto p-0">
              <Command>
                <CommandList>
                  {allTeamMembers?.map(member => {
                    const isSelected = teams.includes(member?.id);
                    return (
                      <CommandItem key={member?.id} className="cursor-pointer">
                        <label className="flex items-center gap-3 w-full cursor-pointer px-2 py-2">
                          <input
                            type="checkbox"
                            checked={isSelected}
                            onChange={() =>
                              toggleSelection(member?.id, teams, setTeams)
                            }
                            className="w-4 h-4 accent-[#0D1619]"
                          />
                          <span className="text-sm">{member?.first_name}</span>
                        </label>
                      </CommandItem>
                    );
                  })}
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
                    const isSelected = services.includes(serviceItem?.id);
                    return (
                      <CommandItem
                        key={serviceItem?.id}
                        onSelect={() =>
                          toggleSelection(
                            serviceItem?.id,
                            services,
                            setServices
                          )
                        }
                        className="cursor-pointer"
                      >
                        <div className="flex items-center gap-2 w-full">
                          <span>{serviceItem?.name}</span>
                          {isSelected && (
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
