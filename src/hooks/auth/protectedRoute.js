import { Navigate, useLocation } from "react-router-dom";
import { useAuth } from "./auth";

export const ProtectedRoute = ({ children }) => {
  const { user } = useAuth();
  const location = useLocation();
  const { pathname } = location;

  if (pathname === "/login") {
    if (user) {
      return <Navigate to="/" />;
    }
    return children;
  }

  if (!user) {
    // user is not authenticated
    return <Navigate to="/login" />;
  }

  return children;
};
