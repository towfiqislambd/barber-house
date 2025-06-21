import { axiosPublic } from "./useAxiosPublic";
import { axiosSecure } from "./useAxiosSecure";

// Services Type
export const ServicesType = async () => {
  const { data } = await axiosPublic("/api/service_types");
  return data?.data;
};

// Onboard:
export const OnBoarding = async payload => {
  const { data } = await axiosSecure.post(
    "/api/create/business/profile",
    payload
  );
  return data?.data;
};

// Edit Category:
export const EditCategory = async (id, payload) => {
  const { data } = await axiosSecure.post(
    `api/catalog/edit-service-categories/${id}`,
    payload
  );
  return data?.data;
};

// Add Category:
export const AddCategory = async payload => {
  const { data } = await axiosSecure.post(
    `api/catalog/add-service-categories`,
    payload
  );
  return data?.data;
};

// Edit Service:
export const EditService = async (id, payload) => {
  const { data } = await axiosPublic.put(
    `api/catalog-services/update/${id}`,
    payload
  );
  return data?.data;
};

// Add Service:
export const AddService = async payload => {
  const { data } = await axiosSecure.post(
    `api/catalog-services/store`,
    payload
  );
  return data?.data;
};

// Delete Service:
export const DeleteService = async id => {
  const { data } = await axiosSecure.delete(
    `api/catalog-services/destroy/${id}`
  );
  return data?.data;
};

// All team members:
export const AllTeamMembers = async search => {
  let url = "/api/teams?";
  if (search) url += `query=${search}&`;
  url = url.endsWith("&") ? url.slice(0, -1) : url;
  url = url.endsWith("?") ? url.slice(0, -1) : url;

  const { data } = await axiosSecure(url);
  return data?.data;
};

// Catalogue:
export const Catalogue = async (category_id, search, selectedTeamMember) => {
  let url = "/api/catalog-service-categories?";

  if (category_id) url += `catalog_service_category_id=${category_id}&`;
  if (search) url += `query=${search}&`;
  if (selectedTeamMember) url += `team_member=${selectedTeamMember}&`;

  url = url.endsWith("&") ? url.slice(0, -1) : url;
  url = url.endsWith("?") ? url.slice(0, -1) : url;

  const { data } = await axiosSecure(url);
  return data?.data;
};

// Add Team Members:
export const addTeamMembers = async (id, payload) => {
  const { data } = await axiosSecure.put(
    `api/catalog-services/${id}/update-team-members`,
    payload
  );
  return data?.data;
};

// Products brand
export const ProductsBrand = async () => {
  const { data } = await axiosSecure("/api/product-brands");
  return data?.data;
};

// Products Category
export const ProductsCategory = async () => {
  const { data } = await axiosSecure("/api/product-categories");
  return data?.data;
};

// Add Product:
export const AddProduct = async payload => {
  const { data } = await axiosSecure.post(`api/products`, payload);
  return data?.data;
};

// Delete Team Member:
export const DeleteTeamMember = async id => {
  const { data } = await axiosSecure.delete(`api/teams/${id}`);
  return data?.data;
};

// Add Team Member:
export const AddTeamMember = async payload => {
  const { data } = await axiosSecure.post(`api/teams`, payload);
  return data?.data;
};

// Amenities
export const Amenities = async () => {
  const { data } = await axiosSecure("/api/amenities");
  return data?.data;
};

// Highlights
export const Highlights = async () => {
  const { data } = await axiosSecure("/api/highlights");
  return data?.data;
};

// Values
export const Values = async () => {
  const { data } = await axiosSecure("/api/values");
  return data?.data;
};

// All Services
export const AllServices = async () => {
  const { data } = await axiosSecure("/api/catalog-services");
  return data?.data;
};

// Add Online Store:
export const AddOnlineStore = async payload => {
  const { data } = await axiosSecure.post(`api/online-store/register`, payload);
  return data?.data;
};

// Business Home
export const BusinessHome = async () => {
  const { data } = await axiosPublic("/api/cms/business-home");
  return data?.data;
};

// Business Pricing
export const BusinessPricing = async () => {
  const { data } = await axiosPublic("/api/cms/business-pricing");
  return data?.data;
};

// Business Help
export const BusinessHelp = async () => {
  const { data } = await axiosPublic("/api/cms/business-help");
  return data?.data;
};

// Business Details
export const BusinessHelpDetails = async id => {
  const { data } = await axiosPublic(`/api/cms/knowledge-base/${id}`);
  return data?.data;
};

// Blog
export const Blog = async () => {
  const { data } = await axiosPublic(`/api/cms/blog`);
  return data?.data;
};

// Blog Details
// export const BlogDetails = async id => {
//   const { data } = await axiosPublic(`/api/cms/knowledge-base/${id}`);
//   return data?.data;
// };