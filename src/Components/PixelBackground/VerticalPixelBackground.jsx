import { motion } from "motion/react";
import { useState } from "react";

const totalCol = 20;

const anim = {
  init: {
    opacity: 0,
  },
  open: (delays) => ({
    opacity: 1,
    transition: {
      duration: 0,
      delay: 0.05 * delays[1],
    },
  }),
  close: (delays) => ({
    opacity: 0,
    transition: {
      duration: 0,
      delay: 0.05 * delays[0],
    },
  }),
};

const PixelBackground = () => {
  const [isClosed, setIsClosed] = useState(false);

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

  const getBlocks = (indexOfColumn) => {
    const { innerWidth, innerHeight } = window;
    const blockSize = innerHeight * 0.05;
    const blockAmount = Math.ceil(innerWidth / blockSize);
    const delays = shuffle(
      Array.from({ length: blockAmount }, (_, index) => index),
    );
    return [
      delays.map((randomDelay, index) => (
        <motion.div
          variants={anim}
          initial='init'
          animate={isClosed ? "close" : "open"}
          key={index}
          custom={[
            indexOfColumn + randomDelay,
            totalCol - indexOfColumn + randomDelay,
          ]}
          className='w-[5vh] h-full bg-red-400'
        ></motion.div>
      )),
    ];
  };

  return (
    <div className='flex flex-col overflow-hidden h-screen relative'>
      <div
        className='absolute right-4 top-4 rounded-md z-10 px-4 py-2 bg-blue-500'
        onClick={() => setIsClosed((prev) => !prev)}
      >
        <button>Click</button>
      </div>
      {[...Array(totalCol)].map((_, index) => (
        <div key={index} className='h-[5vh] w-full flex'>
          {getBlocks(index)}
        </div>
      ))}
    </div>
  );
};
export default PixelBackground;
