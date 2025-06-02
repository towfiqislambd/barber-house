/* eslint-disable react-refresh/only-export-components */
// import useLocalStorage from "@/hooks/useLocalStorage";
import { createContext, useState } from "react";
export const AuthContextProvider = createContext(null);

const AuthProvider = ({ children }) => {
  const [loading, setLoading] = useState(false);
  const [user, setUser] = useState();
  // const [token, setToken, clearToken] = useLocalStorage("token", null);

  // values to pass:
  const allValues = {
    user,
    loading,
    // token,
    // setToken,
    // clearToken,
    setUser,
    setLoading,
  };
  return (
    <AuthContextProvider.Provider value={allValues}>
      {children}
    </AuthContextProvider.Provider>
  );
};

export default AuthProvider;
