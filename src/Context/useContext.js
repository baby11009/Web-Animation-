import { createContext, useContext } from "react";

const AppContext = createContext({
  size: { width: 0, height: 0 },
  lenis: null,
});

export default AppContext;

export const useAppContext = () => useContext(AppContext);
