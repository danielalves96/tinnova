import { createContext, ReactNode, useContext } from "react";

export type ContextProps = {
  isPopulated: string | null;
  handleOnSet: () => void;
};

const POPULATED_KEY = "populated"; 

interface ListContextProps {
  children: ReactNode;
}

const ListContext = createContext<ContextProps>({
  isPopulated: null, 
  handleOnSet: () => {},
});

export const ListProvider = ({ children }: ListContextProps) => {
  const handleOnSet = () => {
    localStorage.removeItem(POPULATED_KEY);
    localStorage.setItem(POPULATED_KEY, "true");
  };

  const isPopulated = localStorage.getItem(POPULATED_KEY) ?? null; 

  return (
    <ListContext.Provider value={{ isPopulated, handleOnSet }}>
      {children}
    </ListContext.Provider>
  );
};

export const useList = () => {
  const useListContext = useContext(ListContext);

  return useListContext;
};
