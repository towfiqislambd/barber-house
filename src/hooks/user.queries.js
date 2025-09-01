import { useQuery } from "@tanstack/react-query";
import {
  AppointmentCount,
  AppointmentList,
  BookmarkGet,
  ShowProducts,
  StoreDetails,
  stores,
  SubscribedStores,
  UserDataGet,
  UserRecentlyStores,
  UserSearchStores,
  UserTrendingStores,
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

export const useStoreDetails = id => {
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

export const useUserAppointmentLists = () => {
  return useQuery({
    queryKey: ["appointment-lists"],
    queryFn: () => AppointmentList(),
  });
};

export const useUserTrendingStores = () => {
  return useQuery({
    queryKey: ["trending-store"],
    queryFn: () => UserTrendingStores(),
  });
};

export const useSubscribedStores = () => {
  return useQuery({
    queryKey: ["subscribed-store"],
    queryFn: () => SubscribedStores(),
  });
};

export const useUserRecentlyViewStores = () => {
  return useQuery({
    queryKey: ["recently-view"],
    queryFn: () => UserRecentlyStores(),
  });
};

export const useShowProducts = () => {
  return useQuery({
    queryKey: ["show-products"],
    queryFn: () => ShowProducts(),
  });
};

export const useAppointmentCount = () => {
  return useQuery({
    queryKey: ["appointment-count"],
    queryFn: () => AppointmentCount(),
  });
};

// export const useDownloadInvoice = () => {
//   return useMutation({
//     mutationFn: DownloadInvoice,
//   });
// };
