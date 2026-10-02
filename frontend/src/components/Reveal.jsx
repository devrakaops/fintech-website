import { motion, useReducedMotion } from "framer-motion";

export const Reveal = ({ children, delay = 0, y = 28, className, once = true }) => {
  const reduce = useReducedMotion();
  return (
    <motion.div
      className={className}
      initial={reduce ? false : { opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once, amount: 0.15 }}
      transition={{ duration: 0.7, delay, ease: [0.22, 1, 0.36, 1] }}
    >
      {children}
    </motion.div>
  );
};

export const SectionHeading = ({ eyebrow, title, subtitle, light = false, align = "left" }) => (
  <div className={align === "center" ? "text-center mx-auto max-w-2xl" : "max-w-2xl"}>
    <Reveal>
      <p
        className={`font-mono text-xs uppercase tracking-[0.3em] ${
          light ? "text-gold-dark" : "text-gold"
        }`}
      >
        {eyebrow}
      </p>
    </Reveal>
    <Reveal delay={0.08}>
      <h2
        className={`mt-4 font-serif text-3xl sm:text-4xl lg:text-[2.75rem] leading-[1.12] tracking-tight ${
          light ? "text-ink" : "text-paper"
        }`}
      >
        {title}
      </h2>
    </Reveal>
    {subtitle && (
      <Reveal delay={0.16}>
        <p className={`mt-5 text-base sm:text-lg leading-relaxed ${light ? "text-ink/60" : "text-white/60"}`}>
          {subtitle}
        </p>
      </Reveal>
    )}
  </div>
);
