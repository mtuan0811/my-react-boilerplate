import { useOutlet } from "react-router-dom";
import { AuthProvider } from "../../hooks/auth/auth";

export const AuthLayout = () => {
  const outlet = useOutlet();

  return (
    <AuthProvider>{outlet}</AuthProvider>
  );
};