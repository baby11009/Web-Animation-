import AppContext from "./useContext";
import { useDesktopSize } from "../hook";
import { useEffect } from "react";
import { q } from "motion/react-client";
const ContextProvider = ({ children }) => {
  const { width, height } = useDesktopSize();

  useEffect(() => {
    document.body.style.setProperty("--desktop-width", width);
    document.body.style.setProperty("--desktop-height", height);
  }, [width, height]);

  return (
    <AppContext.Provider value={{ size: { width, height } }}>
      {children}
    </AppContext.Provider>
  );
};
export default ContextProvider;
