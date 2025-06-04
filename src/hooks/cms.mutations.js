import { useMutation } from "@tanstack/react-query";
import { OnBoarding } from "./cms.api";

// Onboard:
export const useOnboard = () => {
  return useMutation({
    mutationKey: ["onboard"],
    mutationFn: payload => OnBoarding(payload),
    onSuccess: data => {
      console.log(data);
      navigate("/");
      toast.success("Registration Successful");
    },
    onError: err => {
      toast.error(err?.response?.data?.message);
    },
  });
};
