import Content from "./Content";
import Intro from "./Intro";
// Change fixed height of footer to managed how sitcky do you want from the footer
const StickyFooter = () => {
  return (
    <div>
      <Intro />
      <div
        className='relative h-[110vh]'
        style={{ clipPath: "polygon(0% 0, 100% 0%, 100% 100%, 0 100%)" }}
      >
        <div className='relative h-[calc(100vh+110vh)] -top-[100vh]'>
          <div className='h-[110vh] sticky top-[calc(100vh-110vh)] pt-[calc(110vh-100vh)]'>
            <Content />
          </div>
        </div>
      </div>
    </div>
  );
};
export default StickyFooter;
