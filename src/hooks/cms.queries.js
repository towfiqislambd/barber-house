import { useQuery } from "@tanstack/react-query";
import { AllTeamMembers, Catalogue, ServicesType } from "./cms.api";

// Services Type
export const useServicesType = () => {
  return useQuery({
    queryKey: ["services-type"],
    queryFn: ServicesType,
  });
};

// Catalogue
export const useCatalogue = () => {
  return useQuery({
    queryKey: ["get-catalogue"],
    queryFn: Catalogue,
  });
};

// All Team Members
export const useAllTeamMembers = () => {
  return useQuery({
    queryKey: ["team-members"],
    queryFn: AllTeamMembers,
  });
};
