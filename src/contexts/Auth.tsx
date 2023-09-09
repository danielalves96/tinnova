import React, {
  createContext,
  ReactNode,
  useContext,
  useEffect,
  useState,
  useCallback,
} from "react";

interface ContextProps {
  isAuth: boolean;
  isLoading: boolean;
  handleLogin: () => void;
  handleLogout: () => void;
}

interface AuthProviderProps {
  children: ReactNode;
}

const AuthContext = createContext<ContextProps>({} as ContextProps);

export const AuthProvider = ({ children }: AuthProviderProps) => {
  const [isAuth, setIsAuth] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    setTimeout(() => {
      setIsLoading(false);
    }, 1000);
  }, []);

  const handleLogin = useCallback(() => {
    setIsAuth(true);
  }, []);

  const handleLogout = useCallback(() => {
    setIsAuth(false);
  }, []);

  return (
    <AuthContext.Provider
      value={{ isAuth, isLoading, handleLogin, handleLogout }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const useAuthContext = useContext(AuthContext);

  return useAuthContext;
};
