import { useQuery } from "@tanstack/react-query";
import { UserDataGet } from "./user.api";

export const useUserDataGet = () => {
  return useQuery({
    queryKey: ["user-data-get"],
    queryFn: UserDataGet,
  });
};

