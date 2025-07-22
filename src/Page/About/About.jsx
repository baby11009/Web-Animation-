import { ScreenTransition } from "../../Components";

import {
  HorizonScrollAndZoomParallax,
  ZoomParallax,
  StickyFooter,
  SmoothScrollParallex,
  BackgroundImageParallex,
  TextParallax,
  StickyContentAndImageHorizonSlider,
  FixedImageWithScrollContent,
} from "../../Animation";

const About = () => {
  return (
    <div>
      <div className='h-screen'></div>
      <div className='relative z-10 bg-background'>
        <HorizonScrollAndZoomParallax />
      </div>

      <div className='relative z-10 bg-background'>
        <ZoomParallax />
      </div>
      <div className='relative z-10 bg-background'>
        <TextParallax />
      </div>
      <div className='relative z-10 bg-background'>
        <StickyContentAndImageHorizonSlider />
      </div>
      <FixedImageWithScrollContent />
      <BackgroundImageParallex />
      <SmoothScrollParallex />
      <StickyFooter />
    </div>
  );
};
export default ScreenTransition(About);
