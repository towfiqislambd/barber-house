import { useQuery } from "@tanstack/react-query";
import { ServicesType } from "./cms.api";

// Services Type
export const useServicesType = () => {
  return useQuery({
    queryKey: ["services-type"],
    queryFn: ServicesType,
  });
};
