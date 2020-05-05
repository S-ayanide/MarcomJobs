import React, { useEffect, useState } from "react";
import app from "../../Config/firebaseConfig";
import marcomjobs_logo from "../../assets/logo/marcomjobs_logo.png";
import "./Auth.css";

export const AuthContext = React.createContext();

export const AuthProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);
  const [pending, setPending] = useState(true);

  useEffect(() => {
    app.auth().onAuthStateChanged((user) => {
      setCurrentUser(user)
      setPending(false)
    });
  }, []);

  if(pending){
    return (
      <img className="splashLogo" src={marcomjobs_logo} alt="Company Logo" />
    );
  }

  return (
    <AuthContext.Provider
      value={{
        currentUser
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};