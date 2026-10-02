import { useId } from "react";
import siteContent from "@/config/siteContent";

export const LogoMark = ({ className, height }) => {
  const id = useId();
  const h = height || siteContent.brand.logoHeight;
  if (siteContent.images.logo) {
    return (
      <img
        src={siteContent.images.logo}
        alt={siteContent.brand.name}
        style={{ height: h, width: "auto" }}
        className={className}
        data-testid="brand-logo-image"
      />
    );
  }
  return (
    <svg
      viewBox="0 0 40 40"
      fill="none"
      style={{ height: h, width: h }}
      className={className}
      aria-label={siteContent.brand.name}
      data-testid="brand-logo-mark"
    >
      <circle cx="20" cy="20" r="15.5" stroke={`url(#g-${id})`} strokeWidth="1.4" />
      <ellipse cx="20" cy="20" rx="6.5" ry="15.5" stroke={`url(#g-${id})`} strokeWidth="1.4" />
      <line x1="4.5" y1="20" x2="35.5" y2="20" stroke={`url(#g-${id})`} strokeWidth="1.4" />
      <circle cx="20" cy="20" r="2.2" fill={`url(#g-${id})`} />
      <defs>
        <linearGradient id={`g-${id}`} x1="4" y1="4" x2="36" y2="36">
          <stop stopColor="#E5C889" />
          <stop offset="1" stopColor="#C5A059" />
        </linearGradient>
      </defs>
    </svg>
  );
};

export const Logo = ({ dark = false, onClick }) => (
  <a
    href="#top"
    onClick={onClick}
    className="flex items-center gap-3 group"
    data-testid="brand-logo"
  >
    <LogoMark className="shrink-0 transition-transform duration-500 group-hover:rotate-[15deg]" />
    <span className="flex flex-col leading-none">
      <span
        className={`font-serif text-lg tracking-tight ${dark ? "text-ink" : "text-paper"}`}
      >
        {siteContent.brand.shortName}
      </span>
      <span className="font-mono text-[9px] uppercase tracking-[0.3em] text-gold mt-1">
        Capital Advisors
      </span>
    </span>
  </a>
);
