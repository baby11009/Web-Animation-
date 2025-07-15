import { useScroll, useTransform, motion } from "framer-motion";
import { useRef } from "react";
import RightContent from "./RightContent";

const string =
  "Sustainability has always been at the heart of PrimeAsia’s business. We took our commitment further, setting targets under four pillars: Operational Excellence, Circularity, Climate Action, and Social Impact.";

const FixedImageWithScrollContent = () => {
  const container = useRef();
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start end", "end start"],
  });
  const y1 = useTransform(scrollYProgress, [0.6, 1], ["100%", "75%"]);
  const y2 = useTransform(scrollYProgress, [0.6, 1], ["100%", "65%"]);

  return (
    <div
      className='relative flex items-center justify-center min-h-screen'
      style={{ clipPath: "polygon(0% 0, 100% 0%, 100% 100%, 0 100%)" }}
      ref={container}
    >
      <div className='fixed top-[-10vh] left-0 h-[120vh] w-full'>
        <motion.div className='relative w-full h-full'>
          <img
            src={"/images/18.jpg"}
            alt='image'
            className='w-full h-full'
            style={{ objectFit: "cover" }}
          />
        </motion.div>
      </div>
      <div className='relative z-10 w-full'>
        <div className='absolute bg-black/30'></div>
        <div className='grid grid-cols-2  px-12 '>
          <div></div>
          <RightContent string={string} scrollYProgress={scrollYProgress} />
        </div>
        <div className='absolute inset-0 grid grid-cols-3'>
          <motion.div></motion.div>
          <motion.div style={{ y: y1 }} className='bg-black'></motion.div>
          <motion.div style={{ y: y2 }} className='bg-black'></motion.div>
        </div>
      </div>
    </div>
  );
};
export default FixedImageWithScrollContent;
