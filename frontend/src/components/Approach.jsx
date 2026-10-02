import { Search, Compass, TrendingUp, RefreshCw } from "lucide-react";
import siteContent from "@/config/siteContent";
import { Reveal, SectionHeading } from "./Reveal";

const icons = [Search, Compass, TrendingUp, RefreshCw];

export const Approach = () => {
  const { approach } = siteContent;

  return (
    <section id={approach.id} className="relative bg-ink py-24 md:py-32" data-testid="approach-section">
      <div className="pointer-events-none absolute right-0 top-0 h-[420px] w-[420px] rounded-full bg-gold/[0.05] blur-[130px]" />
      <div className="container-x">
        <SectionHeading
          eyebrow={approach.eyebrow}
          title={approach.title}
          subtitle={approach.subtitle}
          align="center"
        />

        <div className="mt-16 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {approach.steps.map((step, i) => {
            const Icon = icons[i % icons.length];
            return (
              <Reveal key={step.number} delay={i * 0.1} className="h-full">
                <div
                  className="group relative h-full rounded-3xl border border-white/[0.07] bg-ink-2 p-8 transition-all duration-500 hover:-translate-y-2 hover:border-gold/35 hover:shadow-[0_20px_60px_rgba(0,0,0,0.4)]"
                  data-testid={`approach-card-${i + 1}`}
                >
                  <div className="flex items-start justify-between">
                    <span className="flex h-11 w-11 items-center justify-center rounded-full border border-gold/25 bg-gold/[0.08] text-gold-light transition-colors duration-500 group-hover:bg-gold/15">
                      <Icon className="h-5 w-5" strokeWidth={1.5} />
                    </span>
                    <span className="font-mono text-xs tracking-[0.2em] text-gold/50">
                      {step.number}
                    </span>
                  </div>
                  <h3 className="mt-8 font-serif text-2xl tracking-tight text-paper">
                    {step.title}
                  </h3>
                  <p className="mt-4 text-sm leading-relaxed text-white/55">
                    {step.description}
                  </p>
                  <span className="absolute inset-x-8 bottom-0 h-px origin-left scale-x-0 bg-gradient-to-r from-gold/50 to-transparent transition-transform duration-500 group-hover:scale-x-100" />
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
};
