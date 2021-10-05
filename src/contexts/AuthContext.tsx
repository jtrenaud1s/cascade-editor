import React, { createContext, useState } from "react";

interface IAuthContext {
    username: string;
    password: string;
    setUsername: React.Dispatch<React.SetStateAction<string>>;
    setPassword: React.Dispatch<React.SetStateAction<string>>;
}

export const AuthContext = createContext({} as IAuthContext);

const AuthContextProvider: React.FC = ({ children }) => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const value = {
    username,
    password,
    setUsername,
    setPassword,
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};

export default AuthContextProvider;
