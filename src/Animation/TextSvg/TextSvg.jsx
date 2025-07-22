import { useEffect, useRef } from "react";
import { H, E, L, O } from "../../Icon";

const iconMap = {
  h: <H />,
  e: <E />,
  l: <L />,
  o: <O />,
};

const TextSvg = () => {
  const word = "HELL";

  const element = useRef();

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          element.current.classList.add("screen-container");
        } else {
          element.current.classList.remove("screen-container");
        }
      },
      {
        threshold: 0.4,
      },
    );

    observer.observe(element.current);

    return () => {
      observer.disconnect();
    };
  }, []);

  return (
    <div
      ref={element}
      className='h-screen flex items-center justify-center gap-2'
    >
      {word
        .toLowerCase()
        .split("")
        .map((letter, id) => (
          <div
            key={id}
            className='svg-letter'
            style={{
              "--delay": 0.5 * id + "s",
            }}
          >
            {iconMap[letter]}
          </div>
        ))}
    </div>
  );
};
export default TextSvg;
