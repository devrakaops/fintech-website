import { useEffect, useRef, useState } from "react";
import { animate, useInView } from "framer-motion";
import { Check } from "lucide-react";
import siteContent from "@/config/siteContent";
import { Reveal, SectionHeading } from "./Reveal";

const StatCard = ({ stat, index }) => {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, amount: 0.5 });
  const match = stat.value.match(/^(\d+)(.*)$/);
  const target = match ? parseInt(match[1], 10) : null;
  const [n, setN] = useState(0);

  useEffect(() => {
    if (!inView || target === null) return;
    const controls = animate(0, target, {
      duration: 1.6,
      delay: index * 0.12,
      ease: [0.22, 1, 0.36, 1],
      onUpdate: (v) => setN(Math.round(v)),
    });
    return () => controls.stop();
  }, [inView, target, index]);

  const display = target !== null ? `${n}${match[2]}` : stat.value;

  return (
    <div
      ref={ref}
      className="rounded-2xl border border-ink/[0.08] bg-paper-2 p-5 sm:p-6"
      data-testid={`stat-card-${index}`}
    >
      <p className="font-serif text-3xl tracking-tight text-ink sm:text-4xl">
        {display}
      </p>
      <p className="mt-2 font-mono text-[10px] uppercase tracking-[0.2em] text-ink/50">
        {stat.label}
      </p>
    </div>
  );
};

export const About = () => {
  const { about, images } = siteContent;

  return (
    <section id={about.id} className="bg-paper py-28 md:py-36" data-testid="about-section">
      <div className="container-x grid gap-14 lg:grid-cols-2 lg:gap-20">
        {/* left — narrative */}
        <div>
          <SectionHeading eyebrow={about.eyebrow} title={about.title} light />

          <Reveal delay={0.2}>
            <div className="mt-8 space-y-5">
              {about.paragraphs.map((p, i) => (
                <p key={i} className="text-base leading-relaxed text-ink/65 sm:text-lg">
                  {p}
                </p>
              ))}
            </div>
          </Reveal>

          <Reveal delay={0.28}>
            <blockquote className="mt-10 border-l-2 border-gold pl-6">
              <p className="font-mono text-[10px] uppercase tracking-[0.25em] text-gold-dark">
                {about.philosophy.label}
              </p>
              <p className="mt-3 font-serif text-lg italic leading-relaxed text-ink/80 sm:text-xl">
                "{about.philosophy.text}"
              </p>
            </blockquote>
          </Reveal>

          <Reveal delay={0.36}>
            <ul className="mt-10 space-y-3">
              {about.credentials.map((c, i) => (
                <li key={i} className="flex items-center gap-3 text-sm font-medium text-ink/75">
                  <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-gold/15">
                    <Check className="h-3 w-3 text-gold-dark" />
                  </span>
                  {c}
                </li>
              ))}
            </ul>
          </Reveal>

          <div className="mt-10 grid grid-cols-3 gap-3 sm:gap-4">
            {about.stats.map((stat, i) => (
              <StatCard key={i} stat={stat} index={i} />
            ))}
          </div>
        </div>

        {/* right — imagery & founders */}
        <div className="flex flex-col gap-6">
          <Reveal delay={0.15}>
            <div className="relative overflow-hidden rounded-3xl" data-testid="about-image">
              <img
                src={images.about}
                alt="Advisory office"
                className="aspect-[16/10] w-full object-cover"
                loading="lazy"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-ink/50 via-transparent to-transparent" />
              <p className="absolute bottom-5 left-6 font-mono text-[10px] uppercase tracking-[0.3em] text-paper/90">
                {siteContent.brand.tagline}
              </p>
            </div>
          </Reveal>

          <div className="grid gap-6 sm:grid-cols-2">
            {[about.founders[0], about.founders[1]].map((f, i) => (
              <Reveal key={i} delay={0.2 + i * 0.12} className="h-full">
                <div
                  className="group h-full overflow-hidden rounded-2xl border border-ink/[0.08] bg-paper-2"
                  data-testid={`founder-card-${i + 1}`}
                >
                  <div className="overflow-hidden">
                    <img
                      src={i === 0 ? images.founderOne : images.founderTwo}
                      alt={f.name}
                      className="aspect-[4/5] w-full object-cover"
                      loading="lazy"
                    />
                  </div>
                  <div className="p-5">
                    <h3 className="font-serif text-lg tracking-tight text-ink">{f.name}</h3>
                    <p className="mt-1 font-mono text-[10px] uppercase tracking-[0.2em] text-gold-dark">
                      {f.designation}
                    </p>
                    <p className="mt-3 text-sm leading-relaxed text-ink/55">{f.bio}</p>
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
