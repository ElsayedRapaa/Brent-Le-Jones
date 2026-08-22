
const MarqueeSection = () => {
  const words = ["Recent Work", "Recent Work", "Recent Work"];

  return (
    <section className="relative w-full bg-black py-10 overflow-hidden select-none">
      
      <div className="absolute top-0 bottom-0 left-0 w-32 md:w-48 bg-linear-to-r from-black via-black/80 to-transparent z-10 pointer-events-none" />

      <div className="absolute top-0 bottom-0 right-0 w-32 md:w-48 bg-linear-to-l from-black via-black/80 to-transparent z-10 pointer-events-none" />

      <div className="flex whitespace-nowrap animate-marquee">
        <div className="flex items-center gap-16 md:gap-24 pr-16 md:pr-24">
          {words.map((text, index) => (
            <h2
              key={`first-${index}`}
              className="font-kepler text-[112px] font-normal text-white tracking-wide"
            >
              {text}
            </h2>
          ))}
        </div>

        <div className="flex items-center gap-16 md:gap-24 pr-16 md:pr-24" aria-hidden="true">
          {words.map((text, index) => (
            <h2
              key={`second-${index}`}
              className="font-kepler text-[112px] font-normal text-white tracking-wide"
            >
              {text}
            </h2>
          ))}
        </div>
      </div>

    </section>
  );
};

export default MarqueeSection;