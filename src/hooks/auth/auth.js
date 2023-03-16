import { createContext, useContext, useMemo } from "react";
import { getLocalUser } from "./useLocalStorage";
const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const user = getLocalUser()
  console.log(user)
  const value = useMemo(
    () => ({
      user,
    }),
    [user]
  );
  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export const useAuth = () => {
  return useContext(AuthContext);
};