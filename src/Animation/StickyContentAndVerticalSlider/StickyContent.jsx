const StickyContent = () => {
  return (
    <div className='sticky top-0 pb-[10svh] overflow-hidden'>
      <div className='mx-[20px] pb-[30px] border-b border-gray-200'>
        Latest Collection
      </div>
      <div className='my-[30px] flex gap-[5rem] marquee-text'>
        {Array(6)
          .fill(0)
          .map((_, id) => (
            <div key={id} className='shrink-0 w-[40vw] '>
              <span className='text-[4.6rem]'>Spring-Summer 27 Collection</span>
            </div>
          ))}
      </div>

      <div className='w-[365px] px-[20px] pb-[30px]'>
        From court to commute, SS27 reflects the depth and range of what
        Primeasia does best—crafting versatile leathers that scale with your
        needs. As part of our rebrand, this season marks a renewed commitment to
        serving brands of every size with precision, purpose, and partnership.
        Whether you’re building high-volume lines or limited-run silhouettes,
        our products are designed to adapt. From smooth full grains to rugged
        nubucks, each leather is a result of expert craftsmanship and industrial
        precision—backed by a brand identity built to accelerate ahead. This is
        Primeasia—refreshed, refined, and ready to move with you.
      </div>
      <div className='px-[20px]'>
        <button className='bg-white h-[50px] flex items-center text-black px-[30px] rounded-full group relative'>
          <div
            className='absolute z-0 left-0 w-[50px] h-full flex items-center justify-center
           bg-white rounded-full transition-transform group-hover:-translate-x-1'
          >
            <span className='block size-0 group-hover:size-1.5 -translate-x-1 bg-background transition-[width_height] rounded-full'></span>
          </div>
          <span className='relative z-10'>Discorver</span>
          <div
            className='absolute z-0 right-0 w-[50px] h-full flex items-center justify-center
           bg-white rounded-full transition-transform group-hover:translate-x-1'
          >
            <span className='block size-0 group-hover:size-1.5 translate-x-1 bg-background transition-[width_height] rounded-full'></span>
          </div>
        </button>
      </div>
    </div>
  );
};
export default StickyContent;
