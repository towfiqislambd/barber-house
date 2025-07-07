import { useQuery } from "@tanstack/react-query";
import {
  AllProductsList,
  AllSales,
  AllServices,
  AllTeamMembers,
  Amenities,
  Analytics,
  AppointmentLists,
  ArticleDetails,
  Blog,
  BlogDetails,
  BusinessHelp,
  BusinessHelpDetails,
  BusinessHome,
  BusinessPricing,
  Catalogue,
  CategoryDetails,
  ClientList,
  DailySales,
  GetReviews,
  GetStore,
  Highlights,
  HomePageData,
  ProductsBrand,
  ProductsCategory,
  ServicesDetails,
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
    retry: false,
    keepPreviousData: true,
    queryKey: ["get-catalogue", category_id, search, selectedTeamMember],
    queryFn: () => Catalogue(category_id, search, selectedTeamMember),
  });
};

// All Team Members
export const useAllTeamMembers = search => {
  return useQuery({
    retry: false,
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

// Article Details
export const useArticleDetails = id => {
  return useQuery({
    queryKey: ["article-details", id],
    queryFn: () => ArticleDetails(id),
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

// AppointmentLists
export const useAppointmentLists = id => {
  return useQuery({
    queryKey: ["appointment-lists", id],
    queryFn: () => AppointmentLists(id),
    enabled: !!id,
  });
};

// Get Reviews
export const useGetReviews = id => {
  return useQuery({
    queryKey: ["get-reviews", id],
    queryFn: () => GetReviews(id),
    enabled: !!id,
  });
};

// Analytics
export const useAnalytics = (id, filter) => {
  return useQuery({
    queryKey: ["analytics", id, filter],
    queryFn: () => Analytics(id, filter),
    enabled: !!id,
  });
};

// Services Details
export const useServiceDetails = id => {
  return useQuery({
    queryKey: ["service-details", id],
    queryFn: () => ServicesDetails(id),
    enabled: !!id,
  });
};

// Category Details
export const useCategoryDetails = id => {
  return useQuery({
    queryKey: ["category-details", id],
    queryFn: () => CategoryDetails(id),
    enabled: !!id,
  });
};

// All Products List
export const useAllProductsList = id => {
  return useQuery({
    queryKey: ["all-products-list", id],
    queryFn: () => AllProductsList(id),
    enabled: !!id,
  });
};

// Daily Sales
export const useDailySales = id => {
  return useQuery({
    retry: false,
    queryKey: ["daily-sales", id],
    queryFn: () => DailySales(id),
    enabled: !!id,
  });
};

// Sales
export const useAllSales = (id, filter) => {
  return useQuery({
    queryKey: ["all-sales", id, filter],
    queryFn: () => AllSales(id, filter),
    enabled: !!id,
  });
};
