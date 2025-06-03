import { useLocation, useNavigate } from "react-router-dom";
import { GoogleLoginFunc, LoginFunc, RegisterFunc } from "./auth.api";
// import useAuth from "./useAuth";
import { useMutation } from "@tanstack/react-query";
import toast from "react-hot-toast";

// Register:
export const useRegister = () => {
  // const { setLoading } = useAuth();
  const navigate = useNavigate();

  return useMutation({
    mutationKey: ["register"],
    mutationFn: payload => RegisterFunc(payload),
    onMutate: () => {
      // setLoading(true);
    },
    onSuccess: data => {
      // setLoading(false);
      toast.success("Registration Successful");
      if (data?.token) {
        navigate("/business/login");
      }
    },
    onError: err => {
      // setLoading(false);
      toast.error(err?.response?.data?.message);
    },
  });
};

// Login:
export const useLogin = () => {
  // const { setLoading, setToken } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();

  return useMutation({
    mutationKey: ["login"],
    mutationFn: payload => LoginFunc(payload),
    onMutate: () => {
      // setLoading(true);
    },
    onSuccess: data => {
      // setLoading(false);
      toast.success("Login Successful");
      if (data?.token) {
        // setToken(data?.data?.token);
        navigate((location?.state && location.state) || "/");
      }
    },
    onError: err => {
      // setLoading(false);
      toast.error(err?.response?.data?.message);
    },
  });
};

// social login:
export const useSocialLogin = setSslLoading => {
  // const { setToken } = useAuth();
  const navigate = useNavigate();
  return useMutation({
    mutationKey: ["social-login"],
    mutationFn: payload => GoogleLoginFunc(payload),
    onMutate: () => {
      // setSslLoading(true);
    },
    onSuccess: data => {
      // setSslLoading(false);
      // setToken(data?.token);
      navigate("/");
      toast.success("Login Successful");
    },
    onError: err => {
      // setSslLoading(false);
      toast.error(err?.response?.data?.message);
    },
  });
};
