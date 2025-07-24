import { useEffect } from "react";

const Reverse = ({ href, label, className }) => {
  useEffect(() => {
    const container = document.querySelector(".float-container");
    if (!container) return;
    const floatEls = document.querySelectorAll(".float");

    const handleMouseEnter = () => {
      [...floatEls].map((floatEl) => {
        const computed = getComputedStyle(floatEl);
        const currentTransform = computed.transform;
        floatEl.style.animation = "none"; // stop animation
        floatEl.style.transform = currentTransform;
        floatEl.offsetHeight; // force reflow

        // Apply smooth transition to (0, 0)
        floatEl.style.transition = "transform 0.6s ease-in-out";
        floatEl.style.transform = "translate(0, 0)";
      });
    };

    const handleMouseLeave = () => {
      // Reset back to float animation
      [...floatEls].map((floatEl) => {
        floatEl.style.transition = "none";
        floatEl.style.animation = "float 3s ease-in-out infinite";
      });
    };
    container.addEventListener("mouseenter", handleMouseEnter);

    container.addEventListener("mouseleave", handleMouseLeave);

    return () => {
      container.removeEventListener("mouseenter", handleMouseEnter);

      container.removeEventListener("mouseleave", handleMouseLeave);
    };
  }, []);
  return (
    <div
      className={
        className +
        "relative leading-[.85] uppercase text-5xl group w-fit float-container"
      }
    >
      <div className='flex'>
        {label.split("").map((char, index) => (
          <span
            key={index}
            className={`relative float`}
            style={{
              "--float-x": `${Math.random() * 20 - 10}px`,
              "--float-y": `${Math.random() * 50 - 25}px`,
            }}
          >
            {char}
          </span>
        ))}
      </div>
    </div>
  );
};
export default Reverse;
