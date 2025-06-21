import { useQuery } from "@tanstack/react-query";
import {
  AllServices,
  AllTeamMembers,
  Amenities,
  BusinessHelp,
  BusinessHelpDetails,
  BusinessHome,
  BusinessPricing,
  Catalogue,
  Highlights,
  ProductsBrand,
  ProductsCategory,
  ServicesType,
  Values,
} from "./cms.api";

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
export const useAllTeamMembers = search => {
  return useQuery({
    queryKey: ["team-members", search],
    queryFn: () => AllTeamMembers(search),
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

// Amenities
export const useAmenities = () => {
  return useQuery({
    queryKey: ["amenities"],
    queryFn: Amenities,
  });
};

// Highlights
export const useHighlights = () => {
  return useQuery({
    queryKey: ["highlights"],
    queryFn: Highlights,
  });
};

// Values
export const useValues = () => {
  return useQuery({
    queryKey: ["values"],
    queryFn: Values,
  });
};

// All Services
export const useAllServices = () => {
  return useQuery({
    queryKey: ["all-services"],
    queryFn: AllServices,
  });
};

// Business Home
export const useBusinessHome = () => {
  return useQuery({
    queryKey: ["business-home"],
    queryFn: BusinessHome,
  });
};

// Business Pricing
export const useBusinessPricing = () => {
  return useQuery({
    queryKey: ["business-pricing"],
    queryFn: BusinessPricing,
  });
};

// Business Help
export const useBusinessHelp = () => {
  return useQuery({
    queryKey: ["business-help"],
    queryFn: BusinessHelp,
  });
};

// Business Details
export const useBusinessHelpDetails = id => {
  return useQuery({
    queryKey: ["business-help", id],
    queryFn: () => BusinessHelpDetails(id),
    enabled: !!id,
  });
};
