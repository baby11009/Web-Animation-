import { useScroll, useTransform, motion } from "motion/react";
import { useRef } from "react";
const ZoomParallax = () => {
  const container = useRef();

  const { scrollYProgress } = useScroll({
    target: container,

    offset: ["start start", "end end"],
  });

  const scale4 = useTransform(scrollYProgress, [0, 1], [1, 4.1]);

  const scale5 = useTransform(scrollYProgress, [0, 1], [1, 5]);

  const scale6 = useTransform(scrollYProgress, [0, 1], [1, 6]);

  const scale8 = useTransform(scrollYProgress, [0, 1], [1, 8]);

  const scale9 = useTransform(scrollYProgress, [0, 1], [1, 9]);

  const images = [
    { src: "13.jpg", scale: scale4 },
    { src: "1.jpg", scale: scale5 },
    { src: "2.jpg", scale: scale6 },
    { src: "3.jpg", scale: scale5 },
    { src: "4.jpg", scale: scale6 },
    { src: "5.jpg", scale: scale8 },
    { src: "6.jpg", scale: scale9 },
  ];
  return (
    <div className='h-[300vh] relative' ref={container}>
      <div className='sticky top-0 h-screen overflow-hidden'>
        {images.map((image, index) => (
          <motion.div
            key={index}
            style={{ scale: image.scale }}
            className='size-full absolute top-0 flex items-center justify-center el   '
          >
            <div className='w-[25vw] h-[25vh] relative imageContainer'>
              <img
                src={`./images/${image.src}`}
                alt=''
                className='size-full object-cover'
              />
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
};
export default ZoomParallax;
