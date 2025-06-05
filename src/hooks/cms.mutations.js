import { useMutation } from "@tanstack/react-query";
import { OnBoarding } from "./cms.api";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

// Onboard:
export const useOnboard = () => {
  const navigate = useNavigate();
  return useMutation({
    mutationKey: ["onboard"],
    mutationFn: payload => OnBoarding(payload),
    onSuccess: data => {
      navigate("/");
      toast.success("Registration Successful");
    },
    onError: err => {
      toast.error(err?.response?.data?.message);
    },
  });
};
