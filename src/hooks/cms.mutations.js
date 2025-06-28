import { useMutation } from "@tanstack/react-query";
import {
  AddCategory,
  AddOnlineStore,
  AddProduct,
  AddProductCategory,
  AddService,
  AddTeamMember,
  addTeamMembers,
  DeleteService,
  DeleteTeamMember,
  EditCategory,
  EditService,
  OnBoarding,
  OnStripe,
} from "./cms.api";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

// Onboard:
export const useOnboard = () => {
  return useMutation({
    mutationKey: ["onboard"],
    mutationFn: payload => OnBoarding(payload),
    onSuccess: () => {},
    onError: err => {
      toast.error(err?.response?.data?.message);
    },
  });
};

// Stripe:
export const useStripe = () => {
  return useMutation({
    mutationKey: ["stripe"],
    mutationFn: payload => OnStripe(payload),
    onSuccess: data => {
      const redirectUrl = data?.url;
      if (redirectUrl) {
        window.location.href = redirectUrl;
      }
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
  const navigate = useNavigate();
  return useMutation({
    mutationKey: ["add-team-members"],
    mutationFn: ({ id, payload }) => addTeamMembers(id, payload),
    onSuccess: () => {
      toast.success("Team Member has been added");
      navigate("/businessDashboard/catalogue");
    },
    onError: err => {
      toast.error(err?.response?.data?.message);
    },
  });
};

// Add Product:
export const useAddProduct = () => {
  return useMutation({
    mutationKey: ["add-product"],
    mutationFn: payload => AddProduct(payload),
    onSuccess: data => {
      toast.success("Product has been added");
    },
    onError: err => {
      toast.error(err?.response?.data?.message || "Failed to add product");
    },
  });
};

// Delete Team Member
export const useDeleteTeamMember = () => {
  return useMutation({
    mutationKey: ["delete-team-member"],
    mutationFn: id => DeleteTeamMember(id),
    onSuccess: () => {
      toast.success("Team Member has been Deleted");
    },
    onError: err => {
      toast.error(err?.response?.data?.message);
    },
  });
};

// Add Team Member
export const useAddTeamMember = () => {
  const navigate = useNavigate();
  return useMutation({
    mutationKey: ["add-team-member"],
    mutationFn: payload => AddTeamMember(payload),
    onSuccess: () => {
      toast.success("Team Member has been added");
      navigate("/businessDashboard/members-list");
    },
    onError: err => {
      toast.error(err?.response?.data?.message);
    },
  });
};

// Add Online Store:
export const useAddOnlineStore = () => {
  return useMutation({
    mutationKey: ["add-online-store"],
    mutationFn: payload => AddOnlineStore(payload),
    onSuccess: () => {
      toast.success("Successfully Added");
    },
    onError: err => {
      toast.error(err?.response?.data?.message);
    },
  });
};

// Add Product Category:
export const useAddProductCategory = () => {
  return useMutation({
    mutationKey: ["add-product-category"],
    mutationFn: payload => AddProductCategory(payload),
    onSuccess: () => {
      toast.success("Product category has been added");
    },
    onError: err => {
      toast.error(err?.response?.data?.message);
    },
  });
};
