import { useMutation } from "@tanstack/react-query";
import {
  AddCategory,
  AddService,
  DeleteService,
  EditCategory,
  EditService,
  OnBoarding,
} from "./cms.api";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import AddTeamMember from "@/pages/BusinessDashboardPage/AddTeamMember";

// Onboard:
export const useOnboard = () => {
  const navigate = useNavigate();
  return useMutation({
    mutationKey: ["onboard"],
    mutationFn: payload => OnBoarding(payload),
    onSuccess: () => {
      navigate("/");
      toast.success("Registration Successful");
    },
    onError: err => {
      toast.error(err?.response?.data?.message);
    },
  });
};

// Edit Category:
export const useEditCategory = () => {
  return useMutation({
    mutationKey: ["edit-category"],
    mutationFn: ({ id, payload }) => EditCategory(id, payload),
    onSuccess: () => {
      toast.success("Category has been updated");
    },
    onError: err => {
      toast.error(err?.response?.data?.message || "Failed to update category");
    },
  });
};

// Add Category:
export const useAddCategory = () => {
  return useMutation({
    mutationKey: ["add-category"],
    mutationFn: payload => AddCategory(payload),
    onSuccess: () => {
      toast.success("Category has been created");
    },
    onError: err => {
      toast.error(err?.response?.data?.message || "Failed to add category");
    },
  });
};

// Edit Service:
export const useEditService = () => {
  return useMutation({
    mutationKey: ["edit-service"],
    mutationFn: ({ id, payload }) => EditService(id, payload),
    onSuccess: () => {
      toast.success("Service has been updated");
    },
    onError: err => {
      toast.error(err?.response?.data?.message || "Failed to update category");
    },
  });
};

// Add Service:
export const useAddService = () => {
  return useMutation({
    mutationKey: ["add-service"],
    mutationFn: ({ payload }) => AddService(payload),
    onSuccess: data => {
      console.log(data);
      toast.success("Service has been added");
    },
    onError: err => {
      toast.error(err?.response?.data?.message || "Failed to update category");
    },
  });
};

// Delete Service:
export const useDeleteService = () => {
  return useMutation({
    mutationKey: ["delete-service"],
    mutationFn: id => DeleteService(id),
    onSuccess: () => {
      toast.success("Service has been deleted");
    },
    onError: err => {
      toast.error(err?.response?.data?.message || "Failed to delete service");
    },
  });
};

// Add Team Members
export const useAddTeamMembers = () => {
  return useMutation({
    mutationKey: ["add-team-members"],
    mutationFn: ({ id, payload }) => AddTeamMember(id, payload),
    onSuccess: () => {
      toast.success("Team Member has been added");
    },
    onError: err => {
      toast.error(err?.response?.data?.message || "Failed to delete service");
    },
  });
};
