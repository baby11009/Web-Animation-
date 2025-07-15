import { useInView } from "motion/react";
import { useRef } from "react";

const items = [
  { top: "1.jpg", beneath: "2.jpg" },
  { top: "3.jpg", beneath: "4.jpg" },
  { top: "5.jpg", beneath: "6.jpg" },
  { top: "7.jpg", beneath: "8.jpg" },
  { top: "9.jpg", beneath: "10.jpg" },
  { top: "11.jpg", beneath: "12.jpg" },
];

const SliderItem = ({ data }) => {
  const itemRef = useRef();

  const isInView = useInView(itemRef);

  return (
    <div
      className={`${
        isInView ? "in-view" : "out-view"
      } w-full aspect-square relative overflow-hidden group slider-clip-path bg-yellow-300
       transition-[clip-path_opacity] duration-1000 ease-soft-out `}
      ref={itemRef}
    >
      <div className='relative size-full'>
        <div className='absolute w-full z-10 flex justify-evenly items-center mt-6'>
          <div className='size-5 bg-background rounded-full mix-blend-difference'></div>
          <div className='size-5 bg-background rounded-full mix-blend-difference'></div>
        </div>
        <div className='absolute inset-0 bg-yellow-50'>
          <div
            className='absolute inset-0 group-hover:opacity-0 opacity-100 
          transition-[opacity_transform] duration-[.75s] ease-[cubic-bezier(.4,.15,0,1)] '
          >
            <img
              src={`/images/${data.top}`}
              alt='image'
              className='w-full h-full object-cover object-center'
            />
          </div>
          <img
            src={`/images/${data.beneath}`}
            alt='image'
            className='w-full h-full object-cover object-center'
          />
        </div>
      </div>
    </div>
  );
};

const VerticalSlider = () => {
  return (
    <div className='pl-[10px] flex flex-col gap-[10px]'>
      {items.map((item, id) => (
        <SliderItem data={item} key={id} />
      ))}
    </div>
  );
};
export default VerticalSlider;
