import { useScroll, useMotionValueEvent } from "motion/react";
import { useEffect, useRef } from "react";
//   Scroll video progress based on scroll position
const ScrollingProgressVideo = () => {
  const container = useRef();
  const videoRef = useRef();

  // using framer-motion
  //   const { scrollYProgress } = useScroll({
  //     target: container,
  //     offset: ["start start", "end end"],
  //   });
  //   useMotionValueEvent(scrollYProgress, "change", (latest) => {
  //     if (videoRef.current) {
  //       videoRef.current.currentTime = videoRef.current.duration * latest || 0;
  //     }
  //   });

  //   using native javascript and DOM controll
  useEffect(() => {
    const handleScroll = (e) => {
      const contEl = container.current;
      const vidEl = videoRef.current;
      if (contEl && vidEl) {
        const progress = Math.max(
          0,
          Math.min(
            1,
            (window.scrollY - contEl.offsetTop) /
              (contEl.offsetHeight - window.innerHeight),
          ),
        );
        vidEl.currentTime = vidEl.duration * progress;
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className='h-[300vh]' ref={container}>
      <div className='h-screen overflow-hidden sticky top-0'>
        <video className='w-full h-full object-cover' ref={videoRef}>
          <source src='/videos/2-1.mov' />
        </video>
      </div>
    </div>
  );
};
export default ScrollingProgressVideo;
