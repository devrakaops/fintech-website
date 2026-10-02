import { Linkedin, Instagram, Twitter } from "lucide-react";
import siteContent from "@/config/siteContent";
import { Logo } from "./Logo";
import { Reveal } from "./Reveal";
import { scrollToSection } from "@/lib/scroll";

const socialIcons = { LinkedIn: Linkedin, Instagram: Instagram, "X (Twitter)": Twitter };

export const Footer = () => {
  const { footer, contact, brand, nav } = siteContent;

  return (
    <footer className="relative overflow-hidden bg-ink" data-testid="footer">
      {/* giant watermark */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-x-0 bottom-0 select-none text-center font-serif text-[22vw] italic leading-[0.75] text-white/[0.02]"
      >
        {brand.shortName}
      </div>

      <div className="container-x relative z-10 pb-10 pt-24 md:pt-32">
        <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-[1.6fr_1fr_1.2fr_1fr]">
          <div>
            <Logo />
            <p className="mt-6 max-w-xs text-sm leading-relaxed text-white/50">
              {footer.description}
            </p>
            <div className="mt-6 flex gap-3">
              {footer.socials.map((s) => {
                const Icon = socialIcons[s.label] || Linkedin;
                return (
                  <a
                    key={s.label}
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={s.label}
                    className="flex h-10 w-10 items-center justify-center rounded-full border border-white/12 text-white/60 transition-all duration-300 hover:border-gold/50 hover:text-gold-light"
                    data-testid={`footer-social-${s.label.toLowerCase().replace(/[^a-z]/g, "")}`}
                  >
                    <Icon className="h-4 w-4" strokeWidth={1.5} />
                  </a>
                );
              })}
            </div>
          </div>

          <div>
            <h4 className="font-mono text-[10px] uppercase tracking-[0.3em] text-gold">
              {footer.quickLinksTitle}
            </h4>
            <ul className="mt-5 space-y-3">
              {nav.links.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={(e) => {
                      e.preventDefault();
                      scrollToSection(link.href);
                    }}
                    className="text-sm text-white/55 transition-colors hover:text-gold-light"
                    data-testid={`footer-link-${link.href.replace("#", "")}`}
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-mono text-[10px] uppercase tracking-[0.3em] text-gold">
              {footer.contactTitle}
            </h4>
            <ul className="mt-5 space-y-3 text-sm text-white/55">
              <li>
                <a href={`tel:${contact.phone.replace(/\D/g, "")}`} className="transition-colors hover:text-gold-light" data-testid="footer-phone">
                  {contact.phone}
                </a>
              </li>
              <li>
                <a href={`mailto:${contact.email}`} className="transition-colors hover:text-gold-light" data-testid="footer-email">
                  {contact.email}
                </a>
              </li>
              <li>
                <a
                  href={`https://wa.me/${contact.whatsapp.replace(/\D/g, "")}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="transition-colors hover:text-gold-light"
                  data-testid="footer-whatsapp"
                >
                  WhatsApp: {contact.whatsapp}
                </a>
              </li>
              <li className="text-white/40">{contact.location}</li>
            </ul>
          </div>

          <div>
            <h4 className="font-mono text-[10px] uppercase tracking-[0.3em] text-gold">
              {footer.socialTitle}
            </h4>
            <ul className="mt-5 space-y-3">
              {footer.socials.map((s) => (
                <li key={s.label}>
                  <a
                    href={s.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-white/55 transition-colors hover:text-gold-light"
                    data-testid={`footer-social-link-${s.label.toLowerCase().replace(/[^a-z]/g, "")}`}
                  >
                    {s.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <Reveal>
          <div className="mt-16 border-t border-white/[0.07] pt-8">
            <p className="max-w-3xl text-[11px] leading-relaxed text-white/35" data-testid="footer-disclaimer">
              {footer.disclaimer}
            </p>
            <p className="mt-4 text-[11px] text-white/40" data-testid="footer-copyright">
              {footer.copyright}
            </p>
          </div>
        </Reveal>
      </div>
    </footer>
  );
};
