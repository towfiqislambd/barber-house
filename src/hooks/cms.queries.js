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
export const useCatalogue = category_id => {
  return useQuery({
    queryKey: ["get-catalogue", category_id],
    queryFn: () => Catalogue(category_id),
  });
};

// All Team Members
export const useAllTeamMembers = () => {
  return useQuery({
    queryKey: ["team-members"],
    queryFn: AllTeamMembers,
  });
};
