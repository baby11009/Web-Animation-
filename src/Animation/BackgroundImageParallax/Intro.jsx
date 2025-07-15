import { useScroll, useTransform, motion } from "framer-motion";
import { useRef } from "react";

export default function Intro() {
  const container = useRef();
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end start"],
  });

  const y = useTransform(scrollYProgress, [0, 1], ["0vh", "100vh"]);

  return (
    <div className='h-screen overflow-hidden bg-black'>
      <motion.div style={{ y }} className='relative w-full h-full'>
        <img
          src={"/images/14.jpg"}
          alt='image'
          className='w-full h-full object-cover'
        />
      </motion.div>
    </div>
  );
}
