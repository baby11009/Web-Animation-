const StrikeThrough = ({ href, label, className }) => {
  return (
    <div
      className={
        className +
        " overflow-hidden relative leading-[.85] uppercase text-5xl group w-fit"
      }
    >
      <div className='flex'>
        {label.split("").map((char, index) => (
          <span
            key={index}
            className={`relative ${index % 2 !== 0 ? "z-10" : "z-0"}`}
          >
            {char}
          </span>
        ))}
      </div>
      <div
        className={`absolute w-full h-[25%] scale-x-0 group-hover:scale-x-[100%] delay-100 group-hover:delay-0 transition-transform duration-800 ease-[cubic-bezier(.4,0,0,1)]  bg-[#ffd074] top-1/2 -translate-y-1/3 origin-right group-hover:origin-left`}
      ></div>
      <div className='absolute w-full h-[25%] scale-x-0 group-hover:scale-x-[100%] delay-50 transition-transform duration-800 ease-[cubic-bezier(.4,0,0,1)]  bg-[#17f1d1] top-1/2 -translate-y-1/3 origin-right group-hover:origin-left'></div>
      <div className='absolute w-full h-[25%] scale-x-0 group-hover:scale-x-[100%] group-hover:delay-100  transition-transform duration-800 ease-[cubic-bezier(.4,0,0,1)]  bg-[#b087ff] top-1/2 -translate-y-1/3 origin-right group-hover:origin-left'></div>
    </div>
  );
};
export default StrikeThrough;
