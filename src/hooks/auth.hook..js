import { useNavigate } from "react-router-dom";
import { RegisterFunc } from "./auth.api";
import useAuth from "./useAuth";

// Register:
export const useRegister = () => {
  const { setLoading } = useAuth();
  const navigate = useNavigate();

  return useMutation({
    mutationKey: ["register"],
    mutationFn: payload => RegisterFunc(payload),
    onMutate: () => {
      setLoading(true);
    },
    onSuccess: data => {
      setLoading(false);
      toast.success("Registration Successful");
      if (data?.token) {
        navigate("/auth/login");
      }
    },
    onError: err => {
      setLoading(false);
      toast.error(err?.response?.data?.message);
    },
  });
};
