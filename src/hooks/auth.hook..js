import { useLocation, useNavigate } from "react-router-dom";
import {
  GetUserDataFunc,
  GoogleLoginFunc,
  LoginFunc,
  LogOutFunc,
  OtpVerifyFunc,
  RegisterFunc,
  ResetPasswordFunc,
  VerifyEmailFunc,
} from "./auth.api";
import { useMutation, useQuery } from "@tanstack/react-query";
import toast from "react-hot-toast";
import useAuth from "./useAuth";

// get user data:
export const useGetUserData = token => {
  return useQuery({
    queryKey: ["user", token],
    queryFn: GetUserDataFunc,
    enabled: !!token, // Only run the query if token is truthy
    refetchInterval: 1000 * 60 * 60, // refetch every hour
  });
};

// Register:
export const useRegister = () => {
  const { setLoading, setToken } = useAuth();
  const navigate = useNavigate();

  return useMutation({
    mutationKey: ["register"],
    mutationFn: payload => RegisterFunc(payload),
    onMutate: () => {
      setLoading(true);
    },
    onSuccess: data => {
      if (data?.token) {
        if (data?.role === "customer") {
          toast.success("Registration Successful");
          navigate("/login");
        } else {
          setToken(data?.token);
          navigate("/stepContainer");
        }
      }
    },
    onError: err => {
      setLoading(false);
      toast.error(err?.response?.data?.message);
    },
  });
};

// Login:
export const useLogin = () => {
  const { setLoading, setToken } = useAuth();
  const navigate = useNavigate();
  const location = useLocation();

  return useMutation({
    mutationKey: ["login"],
    mutationFn: payload => LoginFunc(payload),
    onMutate: () => {
      setLoading(true);
    },
    onSuccess: data => {
      console.log(data);
      setLoading(false);
      toast.success("Login Successful");
      if (data?.token) {
        setToken(data?.token);
        if (data?.role === "customer") {
          navigate((location?.state && location?.state) || "/");
        } else {
          alert(data?.role);
        }
      }
    },
    onError: err => {
      setLoading(false);
      toast.error(err?.response?.data?.message);
    },
  });
};

// social login:
export const useSocialLogin = setSslLoading => {
  const { setToken } = useAuth();
  const navigate = useNavigate();
  return useMutation({
    mutationKey: ["social-login"],
    mutationFn: payload => GoogleLoginFunc(payload),
    onMutate: () => {
      // setSslLoading(true);
    },
    onSuccess: data => {
      // setSslLoading(false);
      setToken(data?.token);
      navigate((location?.state && location.state) || "/");
      toast.success("Login Successful");
    },
    onError: err => {
      // setSslLoading(false);
      toast.error(err?.response?.data?.message);
    },
  });
};

// verify email:
export const useVerifyEmail = () => {
  const { setLoading } = useAuth();
  const navigate = useNavigate();

  return useMutation({
    mutationKey: ["verify-email"],
    mutationFn: payload => VerifyEmailFunc(payload),
    onMutate: () => {
      setLoading(true);
    },
    onSuccess: data => {
      if (data?.email) {
        navigate("/verify-otp", { state: { email: data.email } });
        setLoading(false);
        toast.success("Otp sent to your email address");
      }
    },
    onError: err => {
      console.log(err);
      setLoading(false);
      toast.error(err?.response?.data?.data?.email?.[0]);
    },
  });
};

// verify otp:
export const useVerifyOtp = () => {
  const { setLoading } = useAuth();
  const navigate = useNavigate();

  return useMutation({
    mutationKey: ["verify-otp"],
    mutationFn: payload => OtpVerifyFunc(payload),
    onMutate: () => {
      setLoading(true);
    },
    onSuccess: data => {
      if (data) {
        setLoading(false);
        toast.success("Otp verified successfully");
        navigate("/create-pass", {
          state: { email: data.email, key: data?.password_reset_token },
        });
      }
    },
    onError: err => {
      setLoading(false);
      toast.error(err?.response?.data?.message);
    },
  });
};

// reset password:
export const useResetPassword = () => {
  const { setLoading } = useAuth();
  const navigate = useNavigate();

  return useMutation({
    mutationKey: ["reset-password"],
    mutationFn: payload => ResetPasswordFunc(payload),
    onMutate: () => {
      setLoading(true);
    },
    onSuccess: data => {
      if (data) {
        setLoading(false);
        toast.success("Password reset successfully");
        navigate("/login");
      }
    },
    onError: err => {
      setLoading(false);
      toast.error(err?.response?.data?.message);
    },
  });
};

// logout:
export const useLogOut = () => {
  const { setLoading, clearToken } = useAuth();
  const navigate = useNavigate();

  return useMutation({
    mutationKey: ["logout"],
    mutationFn: LogOutFunc,
    onMutate: () => {
      setLoading(true);
    },
    onSuccess: () => {
      clearToken();
      navigate("/login");
      setLoading(false);
      toast.success("User Logged out Successfully");
    },
    onError: err => {
      toast.error(err?.response?.data?.message);
    },
  });
};
