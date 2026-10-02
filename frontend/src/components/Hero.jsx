import { useRef } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowUpRight, ArrowDown } from "lucide-react";
import siteContent from "@/config/siteContent";
import { scrollToSection } from "@/lib/scroll";

const lineAnim = (i) => ({
  initial: { y: "112%" },
  animate: { y: 0 },
  transition: { duration: 1, delay: 0.25 + i * 0.14, ease: [0.22, 1, 0.36, 1] },
});

export const Hero = () => {
  const { hero, images } = siteContent;
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });
  const bgY = useTransform(scrollYProgress, [0, 1], ["0%", "22%"]);

  return (
    <section
      ref={ref}
      className="relative flex min-h-[100svh] items-center overflow-hidden bg-ink"
      data-testid="hero-section"
    >
      {/* parallax backdrop */}
      <motion.div style={{ y: bgY }} className="absolute inset-0 -bottom-24" data-testid="hero-backdrop">
        <img
          src={images.hero}
          alt=""
          className="h-full w-full object-cover opacity-30"
          loading="eager"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-ink/60 via-ink/45 to-ink" />
        <div className="absolute inset-0 bg-gradient-to-r from-ink/85 via-ink/35 to-transparent" />
      </motion.div>

      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent via-gold/20 to-transparent" />

      <motion.div className="container-x relative z-10 pb-32 pt-44 md:pb-40">
        <motion.p
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
          className="flex items-center gap-4 font-mono text-[11px] uppercase tracking-[0.35em] text-gold sm:text-xs"
          data-testid="hero-eyebrow"
        >
          <span className="h-px w-10 bg-gold/60" />
          {hero.eyebrow}
        </motion.p>

        <h1 className="mt-8 font-serif text-[clamp(3rem,8vw,6rem)] font-light leading-[1.04] tracking-[-0.02em] text-paper">
          {hero.titleLines.map((line, i) => (
            <span key={i} className="block overflow-hidden pb-1">
              <motion.span className="block" {...lineAnim(i)}>
                {line.pre}
                <em className="font-normal italic text-gold-light">{line.accent}</em>
              </motion.span>
            </span>
          ))}
        </h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.65, ease: [0.22, 1, 0.36, 1] }}
          className="mt-8 max-w-xl text-base leading-relaxed text-white/65 sm:text-lg"
          data-testid="hero-description"
        >
          {hero.description}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.8, ease: [0.22, 1, 0.36, 1] }}
          className="mt-10 flex flex-wrap items-center gap-4"
        >
          <a
            href={hero.primaryCta.href}
            onClick={(e) => {
              e.preventDefault();
              scrollToSection(hero.primaryCta.href);
            }}
            className="group inline-flex items-center gap-2.5 rounded-full bg-gold px-7 py-3.5 text-sm font-semibold text-ink transition-colors duration-300 hover:bg-gold-light"
            data-testid="hero-primary-cta"
          >
            {hero.primaryCta.label}
            <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
          </a>
          <a
            href={hero.secondaryCta.href}
            onClick={(e) => {
              e.preventDefault();
              scrollToSection(hero.secondaryCta.href);
            }}
            className="inline-flex items-center gap-2.5 rounded-full border border-white/20 px-7 py-3.5 text-sm font-medium text-paper transition-all duration-300 hover:border-gold/60 hover:text-gold-light"
            data-testid="hero-secondary-cta"
          >
            {hero.secondaryCta.label}
          </a>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1, delay: 1.1 }}
          className="mt-14 flex flex-wrap items-center gap-x-6 gap-y-3 font-mono text-[10px] uppercase tracking-[0.25em] text-white/45 sm:gap-x-8 sm:text-[11px]"
          data-testid="hero-credentials"
        >
          {hero.credentials.map((c, i) => (
            <span key={i} className="flex items-center gap-6 sm:gap-8">
              {i > 0 && <span className="h-1.5 w-1.5 rotate-45 bg-gold/60" />}
              {c}
            </span>
          ))}
        </motion.div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.6, duration: 1 }}
        className="absolute bottom-8 left-1/2 z-10 -translate-x-1/2"
        data-testid="hero-scroll-cue"
      >
        <div className="flex flex-col items-center gap-2 text-white/40">
          <span className="font-mono text-[9px] uppercase tracking-[0.3em]">{hero.scrollHint}</span>
          <ArrowDown className="scroll-cue h-4 w-4 text-gold/70" />
        </div>
      </motion.div>
    </section>
  );
};
