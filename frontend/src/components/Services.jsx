import {
  Compass,
  PieChart,
  Landmark,
  Scale,
  Hourglass,
  Target,
  ArrowUpRight,
} from "lucide-react";
import siteContent from "@/config/siteContent";
import { Reveal, SectionHeading } from "./Reveal";

const icons = [Compass, PieChart, Landmark, Scale, Hourglass, Target];

export const Services = () => {
  const { services } = siteContent;

  return (
    <section id={services.id} className="bg-paper py-28 md:py-36" data-testid="services-section">
      <div className="container-x">
        <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
          <SectionHeading
            eyebrow={services.eyebrow}
            title={services.title}
            subtitle={services.subtitle}
            light
          />
          <Reveal delay={0.2}>
            <a
              href="#contact"
              onClick={(e) => {
                e.preventDefault();
                document.querySelector("#contact")?.scrollIntoView({ behavior: "smooth" });
              }}
              className="group inline-flex shrink-0 items-center gap-2 text-sm font-semibold text-gold-dark"
              data-testid="services-contact-link"
            >
              Discuss your needs
              <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
          </Reveal>
        </div>

        <div className="mt-14 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {services.items.map((service, i) => {
            const Icon = icons[i % icons.length];
            return (
              <Reveal key={i} delay={(i % 3) * 0.1} className="h-full">
                <div
                  className="group h-full rounded-2xl border border-ink/[0.08] bg-paper-2 p-8 transition-colors duration-500 hover:border-gold/40"
                  data-testid={`service-card-${i + 1}`}
                >
                  <div className="flex items-start justify-between">
                    <span className="flex h-11 w-11 items-center justify-center rounded-full bg-gold/[0.1] text-gold-dark transition-colors duration-500 group-hover:bg-gold/15">
                      <Icon className="h-5 w-5" strokeWidth={1.5} />
                    </span>
                    <span className="font-mono text-xs tracking-[0.2em] text-ink/30">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                  </div>
                  <h3 className="mt-7 font-serif text-xl tracking-tight text-ink">
                    {service.title}
                  </h3>
                  <p className="mt-3 text-sm leading-relaxed text-ink/55">
                    {service.description}
                  </p>
                </div>
              </Reveal>
            );
          })}
        </div>
      </div>
    </section>
  );
};
