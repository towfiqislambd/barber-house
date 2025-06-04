import { useLocation, useNavigate } from "react-router-dom";
import {
  GoogleLoginFunc,
  LoginFunc,
  OtpVerifyFunc,
  RegisterFunc,
  ResetPasswordFunc,
  VerifyEmailFunc,
} from "./auth.api";
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
        navigate("/login");
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
  // const { setLoading } = useAuth();
  const navigate = useNavigate();

  return useMutation({
    mutationKey: ["verify-email"],
    mutationFn: payload => VerifyEmailFunc(payload),
    onMutate: () => {
      // setLoading(true);
    },
    onSuccess: data => {
      if (data?.email) {
        navigate("/auth/verify-otp", { state: { email: data.email } });
        // setLoading(false);
        toast.success("Otp sent to your email address");
      }
    },
    onError: err => {
      console.log(err);
      // setLoading(false);
      toast.error(err?.response?.data?.data?.email?.[0]);
    },
  });
};

// verify otp:
export const useVerifyOtp = () => {
  // const { setLoading } = useAuth();
  const navigate = useNavigate();

  return useMutation({
    mutationKey: ["verify-otp"],
    mutationFn: payload => OtpVerifyFunc(payload),
    onMutate: () => {
      // setLoading(true);
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
      // setLoading(false);
      // reset();
      toast.error(err?.response?.data?.message);
    },
  });
};

// reset password:
export const useResetPassword = () => {
  // const { setLoading } = useAuth();
  const navigate = useNavigate();

  return useMutation({
    mutationKey: ["reset-password"],
    mutationFn: payload => ResetPasswordFunc(payload),
    onMutate: () => {
      // setLoading(true);
    },
    onSuccess: data => {
      if (data) {
        // setLoading(false);
        toast.success("Password reset successfully");
        navigate("/login");
      }
    },
    onError: err => {
      // setLoading(false);
      toast.error(err?.response?.data?.message);
    },
  });
};
