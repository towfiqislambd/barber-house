import { useQuery } from "@tanstack/react-query";
import {
  AllServices,
  AllTeamMembers,
  Amenities,
  Analytics,
  Blog,
  BlogDetails,
  BusinessHelp,
  BusinessHelpDetails,
  BusinessHome,
  BusinessPricing,
  Catalogue,
  ClientList,
  GetStore,
  Highlights,
  HomePageData,
  ProductsBrand,
  ProductsCategory,
  ServicesType,
  SocialLinks,
  StoreDetails,
  TeamMemberDetails,
  Values,
} from "./cms.api";

// Services Type
export const useServicesType = () => {
  return useQuery({
    queryKey: ["services-type"],
    queryFn: ServicesType,
  });
};

// Social Links
export const useSocialLinks = () => {
  return useQuery({
    queryKey: ["social-links"],
    queryFn: SocialLinks,
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

// Blog
export const useBlog = () => {
  return useQuery({
    queryKey: ["blog"],
    queryFn: Blog,
  });
};

// Business Details
export const useBlogDetails = slug => {
  return useQuery({
    queryKey: ["blog-details", slug],
    queryFn: () => BlogDetails(slug),
    enabled: !!slug,
  });
};

// Team Member Details
export const useTeamMemberDetails = id => {
  return useQuery({
    queryKey: ["team-member-details", id],
    queryFn: () => TeamMemberDetails(id),
    enabled: !!id,
  });
};

// Home page data
export const useHomePageData = () => {
  return useQuery({
    queryKey: ["home-page-data"],
    queryFn: HomePageData,
  });
};

// Business Details
export const useGetStore = id => {
  return useQuery({
    queryKey: ["get-store", id],
    queryFn: () => GetStore(id),
    enabled: !!id,
  });
};

// Store Details
export const useStoreDetails = id => {
  return useQuery({
    queryKey: ["store-details", id],
    queryFn: () => StoreDetails(id),
    enabled: !!id,
  });
};

// Client List
export const useClientLists = id => {
  return useQuery({
    queryKey: ["client-lists", id],
    queryFn: () => ClientList(id),
    enabled: !!id,
  });
};

// Client List
export const useAnalytics = id => {
  return useQuery({
    queryKey: ["analytics", id],
    queryFn: () => Analytics(id),
    enabled: !!id,
  });
};
