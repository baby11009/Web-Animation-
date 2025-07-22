import { useEffect, cloneElement, Children } from "react";

const StackCardScroll = ({ children }) => {
  return (
    <div className='relative h-screen overflow-hidden'>
      <div
        className='overflow-auto h-screen '
        style={{
          scrollSnapType: "y mandatory",
        }}
      >
        {Children.map(children, (child, index) => {
          return (
            <div
              className={`child-${index}`}
              style={{
                scrollSnapAlign: "start",
              }}
            >
              {child}
            </div>
          );
        })}
      </div>
    </div>
  );
};
export default StackCardScroll;
