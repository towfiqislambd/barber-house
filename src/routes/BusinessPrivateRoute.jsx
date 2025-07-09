import { Loader } from "@/components/Loader/Loader";
import { useGetUserData } from "@/hooks/auth.hook.";
import useAuth from "@/hooks/useAuth";
import { Navigate, useLocation } from "react-router-dom";

const BusinessPrivateRoute = ({ children }) => {
  const location = useLocation();
  const { token, loading } = useAuth();
  const { data, isLoading: dataLoading } = useGetUserData(token);

  if (loading || dataLoading) {
    return (
      <div className="h-svh flex justify-center items-center">
        <Loader />
      </div>
    );
  }

  if (
    token &&
    data &&
    data?.data?.role === "business" &&
    data?.data?.flag &&
    data?.data?.bank_connected
  ) {
    return children;
  }

  return <Navigate to="/login" state={location?.pathname} replace />;
};

export default BusinessPrivateRoute;
