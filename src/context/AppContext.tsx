import React, { createContext, useState, useContext, ReactNode } from 'react';

// Define the shape of the context data
interface AppContextProps {
  isCollapsed: boolean;
  setIsCollapsed: (value: boolean) => void;
  selectedSearchCategory: string | null,
  setSelectedSearchCategory: (value: string) => void,
}

// Create the context with default values
const AppContext = createContext<AppContextProps>({
  isCollapsed: false,
  setIsCollapsed: () => {},
  selectedSearchCategory: null,
  setSelectedSearchCategory: () => {},
  
});

// Create a provider component
const AppContextProvider: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [isCollapsed, setIsCollapsed] = useState(false);
  const [selectedSearchCategory, setSelectedSearchCategory] = useState<string | null>("Frontend Developer");


  return (
    <AppContext.Provider value={{ isCollapsed, setIsCollapsed, selectedSearchCategory, setSelectedSearchCategory }}>
      {children}
    </AppContext.Provider>
  );
};

// Custom hook to use the sidebar context
const useAppContext = () => {
  return useContext(AppContext);
};

export { AppContextProvider, useAppContext };
