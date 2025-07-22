import { motion } from "motion/react";
import { useEffect, useRef, useState } from "react";

const totalCol = 20;

const anim1 = {
  init: {
    opacity: 1,
  },
  open: (delays) => ({
    opacity: 1,
    transition: {
      duration: 0,
      delay: 0.05 * delays,
    },
  }),
  close: (delays) => ({
    opacity: 0,
    transition: {
      duration: 0,
      delay: 0.05 * delays,
    },
  }),
};

const anim2 = {
  init: {
    opacity: 1,
  },
  open: (delays) => {
    return {
      opacity: 0,
      transition: {
        duration: 0,
        delay: 0.05 * delays[0],
      },
    };
  },
  close: (delays) => ({
    opacity: 1,
    transition: {
      duration: 0,
      delay: 0.05 * delays[1],
    },
  }),
};

const containerAnim = {
  init: {
    opacity: 1,
  },
  enter: {
    opacity: 0,
    transition: {
      duration: 0,
      delay: 3.3,
    },
  },
  exit: {
    opacity: 1,
    transition: {
      duration: 0,
    },
  },
};

const PixelBackgroundTransition = () => {
  /**
   * Shuffles array in place (Fisher–Yates shuffle).
   * @param {Array} a items An array containing the items.
   */
  const shuffle = (a) => {
    var j, x, i;
    for (i = a.length - 1; i > 0; i--) {
      j = Math.floor(Math.random() * (i + 1));
      x = a[i];
      a[i] = a[j];
      a[j] = x;
    }
    return a;
  };

  const getBlocks = (indexOfColumn, direction = "center") => {
    const pixelDirection = {
      center: {
        anim: anim1,
        custom: (delay) => delay,
      },
      horizon: {
        anim: anim2,
        custom: (delay) => [
          indexOfColumn + delay,
          totalCol - indexOfColumn + delay,
        ],
      },
    };

    const currDirect = pixelDirection[direction];
    const { innerWidth, innerHeight } = window;
    const blockSize = innerWidth * 0.05;
    const blockAmount = Math.ceil(innerHeight / blockSize);
    const delays = shuffle(
      Array.from({ length: blockAmount }, (_, index) => index),
    );

    return [
      delays.map((randomDelay, index) => (
        <motion.div
          variants={currDirect.anim}
          initial='init'
          animate='open'
          exit='close'
          key={index}
          custom={currDirect.custom(randomDelay)}
          className='w-full h-[5vw] bg-red-400'
        ></motion.div>
      )),
    ];
  };

  return (
    <motion.div
      className={`fixed z-[9999] flex overflow-hidden h-screen`}
      variants={containerAnim}
      initial='init'
      animate='enter'
      exit='exit'
    >
      {[...Array(totalCol)].map((_, index) => (
        <div key={index} className='w-[5vw] h-full'>
          {getBlocks(index, "horizon")}
        </div>
      ))}
    </motion.div>
  );
};
export default PixelBackgroundTransition;
