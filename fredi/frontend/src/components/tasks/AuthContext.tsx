import React, { createContext, useState, useContext } from "react";

type AuthContextType = {
  token: string | null;
  login: (t: string) => void;
  logout: () => void;
};

const AuthContext = createContext<AuthContextType>({
  token: null,
  login: () => {},
  logout: () => {},
});

export const useAuth = () => useContext(AuthContext);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({ children }) => {
  const [token, setToken] = useState<string | null>(localStorage.getItem("token"));

  const login = (t: string) => {
    localStorage.setItem("token", t);
    setToken(t);
  };

  const logout = () => {
    localStorage.removeItem("token");
    setToken(null);
  };

  return (
    <AuthContext.Provider value={{ token, login, logout }}>
      {children}
    </AuthContext.Provider>
  );
};
