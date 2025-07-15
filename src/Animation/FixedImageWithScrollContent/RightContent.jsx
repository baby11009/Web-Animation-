import { useTransform } from "motion/react";
import { motion } from "motion/react";
const RightContent = ({ string, scrollYProgress }) => {
  const y = useTransform(
    scrollYProgress,
    [0.3, 0.6],
    ["-1", string.length * 40],
  );
  return (
    <div
      className='responsesive-font'
      style={{ padding: "50lvh calc(1.5625rem - .625rem)" }}
    >
      {string.split("").map((char, id) => {
        const opacity = useTransform(y, (val) =>
          Math.floor(val) >= id * 40 ? 1 : 0.15,
        );
        return (
          <motion.span style={{ opacity }} key={id}>
            {char}
          </motion.span>
        );
      })}
    </div>
  );
};
export default RightContent;
