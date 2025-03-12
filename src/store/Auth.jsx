import { createContext, useContext, useEffect, useState } from "react";

export const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [token, setToken] = useState(localStorage.getItem("token"));
  const [user, setUser] = useState("");
  const [isLoading, setIsLoading] = useState(true);
  const [services, setServices] = useState([]);
  const authorizationToken = `Bearer ${token}`;

  // save the token in LS
  const storeTokenInLS = (serverToken) => {
    setToken(serverToken);
    return localStorage.setItem("token", serverToken);
  };

  let isLoggedIn = !!token;
  console.log("isLoggedIn", isLoggedIn);

  // tackel the logout funcnality
  const LogoutUser = () => {
    setToken("");
    return localStorage.removeItem("token");
  };

  //JWT Authentication - to get currently loggenIn user data
  const userAuthentication = async () => {
    try {
      setIsLoading(true);
      const response = await fetch("http://localhost:4000/api/auth/user", {
        method: "GET",
        headers: {
          Authorization: authorizationToken,
        },
      });

      if (response.ok) {
        const data = await response.json();
        console.log("userdata", data.userData);
        setUser(data.userData);
        setIsLoading(false);
      } else {
        console.log("Error fetching user data");

        setIsLoading(false);
      }
    } catch (error) {
      console.log("Error fetching user Data");
    }
  };

  //----------
  // to fetch the services data from the DB
  const getServices = async () => {
    try {
      const response = await fetch("http://localhost:4000/api/data/service", {
        method: "GET",
      });
      if (response.ok) {
        const services = await response.json();
        // console.log(data.msg);
        setServices(services.data);
      }
      console.log("service", response);
    } catch (error) {
      console.log(error);
    }
  };
  // --------
  useEffect(() => {
    getServices();
    userAuthentication();
  }, []);
  return (
    <AuthContext.Provider
      value={{
        isLoggedIn,
        storeTokenInLS,
        LogoutUser,
        user,
        services,
        authorizationToken,
        isLoading,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const authContextValue = useContext(AuthContext);

  if (!authContextValue) {
    throw new Error("useAuth used outside of the provider");
  }
  return authContextValue;
};
