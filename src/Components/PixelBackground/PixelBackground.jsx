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
  open: (delays) => ({
    opacity: 0,
    transition: {
      duration: 0,
      delay: 0.05 * delays[0],
    },
  }),
  close: (delays) => ({
    opacity: 1,
    transition: {
      duration: 0,
      delay: 0.05 * delays[1],
    },
  }),
};

const PixelBackground = ({ isClosed = false }) => {
  // const [isClosed, setIsClosed] = useState(false);
  const [isTransitionEnded, setIsTransitionEnded] = useState(false);

  const totalBlock = useRef(0);
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
    totalBlock.current += blockAmount;
    const delays = shuffle(
      Array.from({ length: blockAmount }, (_, index) => index),
    );

    return [
      delays.map((randomDelay, index) => (
        <motion.div
          variants={currDirect.anim}
          initial='init'
          animate={isClosed ? "close" : "open"}
          // animate={isClosed ? "close" : "open"}
          key={index}
          custom={currDirect.custom(randomDelay)}
          className='w-full h-[5vw] bg-red-400'
        ></motion.div>
      )),
    ];
  };

  useEffect(() => {
    console.log(totalBlock.current * 50);
    setTimeout(() => setIsTransitionEnded(true), totalBlock.current * 5);
  }, []);

  return (
    <div
      className={`fixed z-[9999] flex overflow-hidden h-screen ${
        isTransitionEnded ? "hidden" : ""
      }`}
    >
      {/* <div
        className='absolute right-4 top-4 rounded-md z-10 px-4 py-2 bg-blue-500'
        onClick={() => setIsClosed((prev) => !prev)}
      >
        <button>Click</button>
      </div> */}
      {[...Array(totalCol)].map((_, index) => (
        <div key={index} className='w-[5vw] h-full'>
          {getBlocks(index, "horizon")}
        </div>
      ))}
    </div>
  );
};
export default PixelBackground;
