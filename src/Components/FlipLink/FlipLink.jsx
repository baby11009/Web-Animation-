import { useState } from "react";
import { motion } from "motion/react";

const anim = {
  init: {
    y: 0,
  },
  hovered: (delays) => ({
    y: "-100%",
    transition: {
      delay: delays[0] * 0.2,
      ease: "easeInOut",
    },
  }),
};

const FlipLink = ({ href, label, className }) => {
  return (
    <motion.div
      initial='init'
      animate='anim'
      exit='exit'
      whileHover={"hovered"}
      className={
        className + " overflow-hidden relative leading-[.85] uppercase text-5xl"
      }
    >
      <div className='flex '>
        {label.split("").map((char, index) => (
          <motion.span variants={anim} key={index} custom={[index]}>
            {char}
          </motion.span>
        ))}
      </div>
      <div className='absolute flex'>
        {label.split("").map((char, index) => (
          <motion.span variants={anim} key={index} custom={[index]}>
            {char}
          </motion.span>
        ))}
      </div>
    </motion.div>
  );
};
export default FlipLink;
