import { useScroll, useTransform, motion } from "framer-motion";
import { useRef } from "react";

export default function Home() {
  const container = useRef();
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start end", "end start"],
  });

  return (
    <div className='overflow-hidden'>
      <div className='h-[100vh]' />
      <div ref={container}>
        <Slide
          src={"15.jpg"}
          direction={"left"}
          left={"-40%"}
          progress={scrollYProgress}
        />
        <Slide
          src={"16.jpg"}
          direction={"right"}
          left={"-25%"}
          progress={scrollYProgress}
        />
        <Slide
          src={"17.jpg"}
          direction={"left"}
          left={"-75%"}
          progress={scrollYProgress}
        />
      </div>
      <div className="h-[30vh]"></div>
    </div>
  );
}

const Slide = (props) => {
  const direction = props.direction == "left" ? -1 : 1;
  const translateX = useTransform(
    props.progress,
    [0, 1],
    [150 * direction, -150 * direction],
  );

  return (
    <motion.div
      style={{ x: translateX, left: props.left }}
      className='relative flex whitespace-nowrap'
    >
      <Phrase src={props.src} />
      <Phrase src={props.src} />
      <Phrase src={props.src} />
    </motion.div>
  );
};

const Phrase = ({ src }) => {
  return (
    <div className={"px-5 flex gap-5 items-center"}>
      <p className='text-[7.5vw]'>Front End Developer</p>
      <span className='relative h-[7.5vw] aspect-[4/2] rounded-full overflow-hidden'>
        <img
          src={`/images/${src}`}
          alt='image'
          className='w-full h-full object-cover'
        />
      </span>
    </div>
  );
};
