import { useEffect, useRef } from "react";

const MorphingGradients = ({ children }) => {
  const container = useRef();

  const interactive = useRef();

  const isEntered = useRef(false);

  const mousePos = useRef({ x: 0, y: 0 });

  const currPos = useRef({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseEnter = () => {
      isEntered.current = true;
    };
    const handleMouseLeave = () => {
      isEntered.current = false;
    };

    function move() {
      if (!interactive.current) return;

      currPos.current.x += (mousePos.current.x - currPos.current.x) / 20;
      currPos.current.y += (mousePos.current.y - currPos.current.y) / 20;
      interactive.current.style.transform = `translate(${Math.round(
        currPos.current.x,
      )}px, ${Math.round(currPos.current.y)}px)`;
    }

    const handleMouseMove = (e) => {
      if (!isEntered.current) return;
      mousePos.current.x = e.clientX;
      mousePos.current.y = e.clientY;

      requestAnimationFrame(() => {
        move();
      });
    };

    window.addEventListener("mousemove", handleMouseMove);

    container.current.addEventListener("mouseenter", handleMouseEnter);

    container.current.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);

      if (container.current) {
        container.current.removeEventListener("mouseenter", handleMouseEnter);

        container.current.removeEventListener("mouseleave", handleMouseLeave);
      }
    };
  }, []);
  return (
    <div className='relative' ref={container}>
      {children && (
        <div className='absolute inset-0 flex items-center justify-center z-100'>
          {children}
        </div>
      )}
      <div className='gradient-bg'>
        <svg xmlns='http://www.w3.org/2000/svg'>
          <defs>
            <filter id='goo'>
              <feGaussianBlur
                in='SourceGraphic'
                stdDeviation='10'
                result='blur'
              />
              <feColorMatrix
                in='blur'
                mode='matrix'
                values='1 0 0 0 0  0 1 0 0 0  0 0 1 0 0  0 0 0 18 -8'
                result='goo'
              />
              <feBlend in='SourceGraphic' in2='goo' />
            </filter>
          </defs>
        </svg>
        <div className='gradients-container'>
          <div className='g1'></div>
          <div className='g2'></div>
          <div className='g3'></div>
          <div className='g4'></div>
          <div className='g5'></div>
          <div className='interactive' ref={interactive}></div>
        </div>
      </div>
    </div>
  );
};
export default MorphingGradients;
