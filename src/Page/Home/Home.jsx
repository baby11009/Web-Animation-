import {
  TextSvg,
  ExpandingButton,
  StackCardScroll,
  ScrollingProgressVideo,
} from "../../Animation";

import { ScreenTransition } from "../../Components";

const Home = () => {
  return (
    <div>
      <TextSvg />
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
