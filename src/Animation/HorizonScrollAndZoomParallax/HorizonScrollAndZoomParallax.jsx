import { useScroll, useTransform, motion, useAnimate } from "motion/react";
import { useRef } from "react";

const LastImage = ({ data, scrollYProgress }) => {
  const scaleX = useTransform(scrollYProgress, [0.725, 1], [1, 5]);
  const scaleY = useTransform(scrollYProgress, [0.725, 1], [1, 20 / 3]);

  return (
    <motion.div
      className='shrink-0 aspect-[3/4] select-none overflow-hidden'
      style={{
        width: `20vw`,
        scaleX: scaleX,
        scaleY: scaleY,
      }}
    >
      <motion.img
        whileHover={{
          scale: 1.2,
        }}
        transition={{
          duration: 0.4,
        }}
        src={`./images/${data.src}`}
        alt=''
        className='size-full object-cover'
        draggable='false'
      />
    </motion.div>
  );
};

const Image = ({ data }) => {
  const [scope, animate] = useAnimate();

  const active = useRef(false);

  const handleOnClick = () => {
    let anim = {
      scale: 1.2,
    };
    if (active.current) {
      anim = {
        scale: 1,
      };
    }

    active.current = !active.current;

    animate(scope.current, anim, { duration: 0.5 });
  };

  return (
    <div
      ref={scope}
      className='shrink-0 aspect-[3/4] select-none overflow-hidden'
      style={{
        width: `calc(100%/5 - 24px)`,
      }}
    >
      <motion.img
        whileHover={{
          scale: 1.2,
        }}
        transition={{
          duration: 0.4,
        }}
        src={`./images/${data.src}`}
        alt=''
        className='size-full object-cover orig'
        draggable='false'
      />
    </div>
  );
};

const HorizonScrollAndZoomParallax = () => {
  const container = useRef();
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end end"],
  });

  const images = [
    { src: "1.jpg" },
    { src: "2.jpg" },
    { src: "3.jpg" },
    { src: "4.jpg" },
    { src: "5.jpg" },
    { src: "6.jpg" },
    { src: "13.jpg" },
  ];

  const scrollX = useTransform(
    scrollYProgress,
    [0, 0.7],
    ["0%", `-${(images.length - 1) * 20}%`],
  );

  return (
    <div className='h-[500vh] relative' ref={container}>
      <div className='h-screen overflow-hidden sticky top-0 flex items-center justify-center'>
        <motion.div
          style={{ x: scrollX }}
          className='flex  gap-6 translate-x-2/5'
        >
          {images.map((image, index) => {
            if (index === images.length - 1) {
              return (
                <LastImage
                  key={index}
                  scrollYProgress={scrollYProgress}
                  data={image}
                />
              );
            }
            return <Image key={index} data={image} />;
          })}
        </motion.div>
      </div>
    </div>
  );
};
export default HorizonScrollAndZoomParallax;
