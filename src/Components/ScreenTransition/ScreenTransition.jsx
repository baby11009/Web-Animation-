import PixelBackgroundTransition from "../PixelBackground/PixelBackgroundTransition";
import { motion } from "motion/react";
const ScreenTransition = (OgComp) => {
  return () => (
    <>
      {/* <PixelBackgroundTransition /> */}
      <motion.div
        className='fixed inset-0 z-[9999] bg-white origin-top'
        initial={{ scaleY: 1 }}
        animate={{ scaleY: 0 }}
        transition={{
          duration: 0.7,
          ease: [0.22, 1, 0.36, 1],
        }}
      ></motion.div>
      <motion.div
        className='fixed inset-0 z-[9999] bg-white origin-bottom'
        initial={{ scaleY: 0 }}
        exit={{ scaleY: 1 }}
        transition={{
          duration: 0.7,
          ease: [0.22, 1, 0.36, 1],
        }}
      ></motion.div>
      <OgComp />
    </>
  );
};
export default ScreenTransition;
