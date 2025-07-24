import {
  TextSvg,
  ExpandingButton,
  StackCardScroll,
  ScrollingProgressVideo,
  MorphingGradients,
} from "../../Animation";

import { ScreenTransition } from "../../Components";

const Home = () => {
  return (
    <div>
      <MorphingGradients>
        <TextSvg />
      </MorphingGradients>
      <ScrollingProgressVideo />
      {/* <StackCardScroll>
        <TextSvg />
        <TextSvg />
        <TextSvg />
      </StackCardScroll> */}
      <ExpandingButton />
    </div>
  );
};
export default ScreenTransition(Home);
