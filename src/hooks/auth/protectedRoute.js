import { Navigate } from "react-router-dom";
import { useAuth } from "./auth";

export const ProtectedRoute = ({ children }) => {
  const { user } = useAuth();
  console.log("user")
  console.log(user)
  if (!user) {
    // user is not authenticated
    return <Navigate to="/login" />;
  }
  return children;
};