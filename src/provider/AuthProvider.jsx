/* eslint-disable react/prop-types */
import { createContext, useEffect, useState } from "react";

// eslint-disable-next-line react-refresh/only-export-components
export const AuthContext = createContext();
const AuthProvider = ({ children }) => {
  const [title, setTitle] = useState("Home");
  useEffect(() => {
    document.title = title;
  }, [title]);
  const authValue = {
    title,
    setTitle,
  };
  return (
    <AuthContext.Provider value={authValue}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
