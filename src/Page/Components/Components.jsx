import {
  ScreenTransition,
  CompCard,
  FlipLink,
  StrikeThrough,
  Reverse
} from "../../Components";

const Components = () => {
  const comps = [
    {
      name: "Flip Link Hovered",
      component: (
        <FlipLink href={"/"} label={"Facebook"} className={"!text-4xl"} />
      ),
    },
    {
      name: "Strike Through Hovered",
      component: (
        <StrikeThrough href={"/"} label={"Twitter"} className={"!text-4xl"} />
      ),
    },
    {
      name: "Flip Link Hovered",
      component: (
        <Reverse href={"/"} label={"Instagram"} className={"!text-4xl"} />
      ),
    },
    {
      name: "Flip Link Hovered",
      component: (
        <FlipLink href={"/"} label={"LinkedIn"} className={"!text-4xl"} />
      ),
    },
  ];

  return (
    <div className='pt-20  px-10'>
      <div className='grid gap-8 grid-template-columns'>
        {comps.map((comp, index) => (
          <CompCard key={index}>
            <div className='h-full flex flex-col'>
              <div className='clipContainer relative text-2xl uppercase font-bold'>
                <p className='clipped-text hover-clipPath'>
                  Effect: {comp.name}
                </p>
                <p className='absolute inset-0 text-white'>
                  {("Effect: " + comp.name).split("").map((char, index) => (
                    <span key={index}>{char}</span>
                  ))}
                </p>
              </div>
              <div className='flex-1 flex justify-center items-center'>
                {comp.component}
              </div>
            </div>
          </CompCard>
        ))}
      </div>
    </div>
  );
};
export default ScreenTransition(Components);
