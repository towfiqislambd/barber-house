import { Loader } from "@/components/Loader/Loader";
import useAuth from "@/hooks/useAuth";
import { Navigate, useLocation } from "react-router-dom";

const PrivateRoute = ({ children }) => {
  const location = useLocation();
  const { user, token, loading } = useAuth();

  if (loading) {
    return (
      <div className="h-svh flex justify-center items-center">
        <Loader />
      </div>
    );
  }
  if (token && user?.role === "customer") return children;

  return <Navigate to="/login" state={location?.pathname} replace />;
};

export default PrivateRoute;
