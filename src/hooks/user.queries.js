import { useQuery, useQueryClient } from "@tanstack/react-query";
import {
  BookmarkGet,
  BookMarkRemove,
  StoreDetails,
  stores,
  UserDataGet,
  UserSearchStores,
} from "./user.api";
import useAuth from "./useAuth";

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

export const useBookmarkGet = () => {
  const { user } = useAuth();
  return useQuery({
    queryKey: ["bookmarks"],
    queryFn: () => BookmarkGet(),
    enabled: !!user,
  });
};

export const useStores = () => {
  return useQuery({
    queryKey: ["store"],
    queryFn: () => stores(),
  });
};
