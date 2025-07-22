import AppContext from "./useContext";
import { useDesktopSize } from "../hook";
import { useEffect, useState, useRef } from "react";
import Lenis from "lenis";

const ContextProvider = ({ children }) => {
  const { width, height } = useDesktopSize();

  const [scrollYDirection, setScrollYDirection] = useState();

  const lastScrollY = useRef(0);

  const lenis = useRef(new Lenis());

  useEffect(() => {
    // Initialize Lenis

    // Use requestAnimationFrame to continuously update the scroll
    function raf(time) {
      lenis.current.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    const handleOnScroll = () => {
      const scrollY = window.scrollY;
      if (scrollY > lastScrollY.current) {
        setScrollYDirection("down");
      } else if (scrollY < lastScrollY.current) {
        setScrollYDirection("up");
      }
      lastScrollY.current = scrollY;
    };

    window.addEventListener("scroll", handleOnScroll);
    return () => {
      window.removeEventListener("scroll", handleOnScroll);
    };
  }, []);

  useEffect(() => {
    document.body.style.setProperty("--desktop-width", width);
    document.body.style.setProperty("--desktop-height", height);
  }, [width, height]);

  return (
    <AppContext.Provider
      value={{ size: { width, height }, lenis: lenis.current }}
    >
      <main
        className={`${
          scrollYDirection === "down" ? "scroll-down" : "scroll-up"
        }`}
      >
        {children}
      </main>
    </AppContext.Provider>
  );
};
export default ContextProvider;
