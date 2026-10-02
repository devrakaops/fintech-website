import { ScanSearch, DraftingCompass, Sprout, ArrowRight } from "lucide-react";
import siteContent from "@/config/siteContent";
import { Reveal, SectionHeading } from "./Reveal";

const icons = [ScanSearch, DraftingCompass, Sprout];

export const Journey = () => {
  const { journey, images } = siteContent;

  return (
    <section
      id={journey.id}
      className="relative overflow-hidden bg-ink py-28 md:py-36"
      data-testid="journey-section"
    >
      <div className="absolute inset-0" data-testid="journey-backdrop">
        <img src={images.journey} alt="" className="h-full w-full object-cover opacity-20" loading="lazy" />
        <div className="absolute inset-0 bg-gradient-to-b from-ink via-ink/70 to-ink" />
      </div>

      <div className="container-x relative z-10">
        <SectionHeading
          eyebrow={journey.eyebrow}
          title={journey.title}
          subtitle={journey.subtitle}
          align="center"
        />

        <div className="mt-16 grid gap-5 lg:grid-cols-3">
          {journey.stages.map((stage, i) => {
            const Icon = icons[i % icons.length];
            return (
              <Reveal key={stage.number} delay={i * 0.14} className="h-full">
                <div
                  className="group relative h-full overflow-hidden rounded-2xl border border-white/[0.09] bg-white/[0.04] p-8 backdrop-blur-xl transition-colors duration-500 hover:border-gold/30"
                  data-testid={`journey-stage-${i + 1}`}
                >
                  <span className="pointer-events-none absolute -right-3 -top-6 font-serif text-[6rem] italic leading-none text-white/[0.035]">
                    {stage.number}
                  </span>
                  <span className="flex h-12 w-12 items-center justify-center rounded-full border border-gold/25 bg-gold/[0.08] text-gold-light">
                    <Icon className="h-5 w-5" strokeWidth={1.5} />
                  </span>
                  <p className="mt-8 font-mono text-[10px] uppercase tracking-[0.3em] text-gold">
                    Stage {stage.number}
                  </p>
                  <h3 className="mt-3 font-serif text-3xl tracking-tight text-paper">
                    {stage.title}
                  </h3>
                  <p className="mt-4 text-sm leading-relaxed text-white/55">
                    {stage.description}
                  </p>
                  {i < journey.stages.length - 1 && (
                    <ArrowRight className="absolute -right-3 top-1/2 hidden h-5 w-5 -translate-y-1/2 text-gold/40 lg:block" />
                  )}
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
};
