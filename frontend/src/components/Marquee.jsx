import siteContent from "@/config/siteContent";

export const Marquee = () => {
  const items = siteContent.marquee.items;
  const row = [...items, ...items];
  return (
    <div
      className="relative overflow-hidden border-y border-white/[0.06] bg-ink py-5"
      data-testid="marquee-band"
    >
      <div className="marquee-track flex w-max items-center">
        {row.map((item, i) => (
          <span key={i} className="flex shrink-0 items-center">
            <span className="whitespace-nowrap px-8 font-serif text-base italic text-paper/45 md:text-lg">
              {item}
            </span>
            <span className="h-1.5 w-1.5 rotate-45 bg-gold/40" />
          </span>
        ))}
      </div>
      <div className="pointer-events-none absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-ink to-transparent" />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-ink to-transparent" />
    </div>
  );
};
