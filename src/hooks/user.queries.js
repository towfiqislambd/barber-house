import { useQuery } from "@tanstack/react-query";
import { StoreDetails, UserDataGet, UserSearchStores } from "./user.api";

export const useUserDataGet = () => {
  return useQuery({
    queryKey: ["user-data-get"],
    queryFn: UserDataGet,
  });
};

export const useUserSearchStore = (queryParams = {}) => {
  return useQuery({
    queryKey: ["user-search-stores", queryParams],
    queryFn: () => UserSearchStores(queryParams),
    enabled: !!queryParams,
  });
};

export const useStoreDetails = (id) => {
  return useQuery({
    queryKey: ["store-details", id],
    queryFn: () => StoreDetails(id),
    enabled: !!id,
  });
};
