import { useEffect, useRef, useState } from "react";
import Lenis from "lenis";
import {
  StickyFooter,
  SmoothScrollParallex,
  BackgroundImageParallex,
  TextParallax,
  StickyContentAndImageHorizonSlider,
  FixedImageWithScrollContent,
} from "./Animation";

import ContextProvider from "./Context/ContextProvider";
function App() {
  const [scrollYDirection, setScrollYDirection] = useState();
  console.log(scrollYDirection);
  const lastScrollY = useRef(0);

  useEffect(() => {
    // Initialize Lenis
    const lenis = new Lenis();

    // Use requestAnimationFrame to continuously update the scroll
    function raf(time) {
      lenis.raf(time);
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
  return (
    <ContextProvider>
      <main
        className={`${
          scrollYDirection === "down" ? "scroll-down" : "scroll-up"
        }`}
      >
        {/* <div className='relative z-10 bg-background'>
          <TextParallax />
        </div>
        <div className='relative z-10 bg-background'>
          <StickyContentAndImageHorizonSlider />
        </div>
        <FixedImageWithScrollContent /> */}
        <BackgroundImageParallex />
        <SmoothScrollParallex />
        <StickyFooter />
      </main>
    </ContextProvider>
  );
}

export default App;
