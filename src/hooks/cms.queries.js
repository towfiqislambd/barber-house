import { useQuery } from "@tanstack/react-query";
import { AllTeamMembers, Catalogue, ProductsBrand, ProductsCategory, ServicesType } from "./cms.api";

// Services Type
export const useServicesType = () => {
  return useQuery({
    queryKey: ["services-type"],
    queryFn: ServicesType,
  });
};

// Catalogue
export const useCatalogue = (category_id, search, selectedTeamMember) => {
  return useQuery({
    queryKey: ["get-catalogue", category_id, search, selectedTeamMember],
    queryFn: () => Catalogue(category_id, search, selectedTeamMember),
  });
};

// All Team Members
export const useAllTeamMembers = () => {
  return useQuery({
    queryKey: ["team-members"],
    queryFn: AllTeamMembers,
  });
};

// Products brand
export const useProductsBrand = () => {
  return useQuery({
    queryKey: ["products-brand"],
    queryFn: ProductsBrand,
  });
};

// Products Category
export const useProductsCategory = () => {
  return useQuery({
    queryKey: ["products-category"],
    queryFn: ProductsCategory,
  });
};