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

// Catalogue:
export const Catalogue = async () => {
  const { data } = await axiosPublic("/api/catalog-service-categories");
  return data?.data;
};

// Catalogue Filter:
export const CatalogueFilter = async () => {
  const { data } = await axiosPublic("/api/catalog-service-categories");
  return data?.data;
};

// Edit Category:
export const EditCategory = async (id, payload) => {
  const { data } = await axiosPublic.post(
    `api/catalog/edit-service-categories/${id}`,
    payload
  );
  return data?.data;
};

// Add Category:
export const AddCategory = async payload => {
  const { data } = await axiosPublic.post(
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
  const { data } = await axiosPublic.post(
    `api/catalog-services/store`,
    payload
  );
  return data?.data;
};

// Delete Service:
export const DeleteService = async id => {
  const { data } = await axiosPublic.delete(
    `api/catalog-services/destroy/${id}`
  );
  return data?.data;
};

// All team members:
export const AllTeamMembers = async () => {
  const { data } = await axiosPublic("/api/teams");
  return data?.data;
};
