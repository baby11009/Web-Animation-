import StickyContent from "./StickyContent";
import VerticalSlider from "./VerticalSlider";

const StickyContentAndVerticalSlider = () => {
  return (
    <div className='grid grid-cols-12 pt-[10rem] pb-[10px]'>
      <div className='col-start-1 col-end-7'>
        <VerticalSlider />
      </div>
      <div className='col-start-7 col-end-13'>
        <StickyContent />
      </div>
    </div>
  );
};
export default StickyContentAndVerticalSlider;
