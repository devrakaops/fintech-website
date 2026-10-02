import { useState } from "react";
import { MessageCircle, Mail, Phone, ArrowUpRight, Info } from "lucide-react";
import { toast } from "sonner";
import siteContent from "@/config/siteContent";
import { Reveal, SectionHeading } from "./Reveal";

const digits = (s) => s.replace(/\D/g, "");

const inputClass =
  "w-full rounded-xl border border-ink/10 bg-paper/60 px-4 py-3 text-sm text-ink outline-none transition-colors duration-300 placeholder:text-ink/35 focus:border-gold focus:bg-paper-2";

export const Contact = () => {
  const { contact } = siteContent;
  const [form, setForm] = useState({ name: "", email: "", phone: "", message: "" });

  const set = (key) => (e) => setForm({ ...form, [key]: e.target.value });

  const composedMessage = () =>
    [
      contact.whatsappPrefill,
      "",
      `Name: ${form.name}`,
      `Email: ${form.email}`,
      `Phone: ${form.phone}`,
      `Message: ${form.message}`,
    ].join("\n");

  const openWhatsApp = () => {
    window.open(
      `https://wa.me/${digits(contact.whatsapp)}?text=${encodeURIComponent(composedMessage())}`,
      "_blank"
    );
    toast.success("Opening WhatsApp with your message prefilled.");
  };

  const onSubmit = (e) => {
    e.preventDefault();
    openWhatsApp();
  };

  const mailtoHref = `mailto:${contact.email}?subject=${encodeURIComponent(
    "Website Enquiry"
  )}&body=${encodeURIComponent(composedMessage())}`;

  const methods = [
    {
      icon: MessageCircle,
      label: "WhatsApp",
      value: contact.whatsapp,
      button: "Chat on WhatsApp",
      href: `https://wa.me/${digits(contact.whatsapp)}?text=${encodeURIComponent(
        contact.whatsappPrefill
      )}`,
      external: true,
      testid: "contact-whatsapp-button",
    },
    {
      icon: Mail,
      label: "Email",
      value: contact.email,
      button: "Email Us",
      href: `mailto:${contact.email}`,
      external: false,
      testid: "contact-email-button",
    },
    {
      icon: Phone,
      label: "Phone",
      value: contact.phone,
      button: "Call Us",
      href: `tel:${digits(contact.phone)}`,
      external: false,
      testid: "contact-phone-button",
    },
  ];

  return (
    <section id={contact.id} className="bg-paper py-24 md:py-32" data-testid="contact-section">
      <div className="container-x grid gap-14 lg:grid-cols-2 lg:gap-20">
        {/* left — CTA + methods */}
        <div>
          <SectionHeading
            eyebrow={contact.eyebrow}
            title={contact.title}
            subtitle={contact.subtitle}
            light
          />

          <div className="mt-10 space-y-4">
            {methods.map((m, i) => (
              <Reveal key={m.label} delay={0.15 + i * 0.08}>
                <a
                  href={m.href}
                  target={m.external ? "_blank" : undefined}
                  rel={m.external ? "noopener noreferrer" : undefined}
                  className="group flex items-center justify-between gap-4 rounded-2xl border border-ink/[0.08] bg-paper-2 p-5 transition-all duration-500 hover:-translate-y-0.5 hover:border-gold/40 hover:shadow-[0_14px_44px_rgba(160,126,59,0.12)] sm:p-6"
                  data-testid={m.testid}
                >
                  <div className="flex items-center gap-4">
                    <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-full bg-gold/[0.1] text-gold-dark transition-colors duration-500 group-hover:bg-gold group-hover:text-ink">
                      <m.icon className="h-5 w-5" strokeWidth={1.5} />
                    </span>
                    <div>
                      <p className="font-mono text-[10px] uppercase tracking-[0.25em] text-ink/45">
                        {m.label}
                      </p>
                      <p className="mt-1 text-sm font-semibold text-ink sm:text-base">
                        {m.value}
                      </p>
                    </div>
                  </div>
                  <span className="hidden items-center gap-1.5 text-sm font-medium text-gold-dark sm:inline-flex">
                    {m.button}
                    <ArrowUpRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </span>
                </a>
              </Reveal>
            ))}
          </div>

          <Reveal delay={0.4}>
            <p className="mt-8 flex items-start gap-2 text-xs leading-relaxed text-ink/45">
              <Info className="mt-0.5 h-3.5 w-3.5 shrink-0" />
              Prefer to write directly? Use the form — nothing is stored on this website; your
              details simply open a chat or email draft.
            </p>
          </Reveal>
        </div>

        {/* right — enquiry form */}
        <Reveal delay={0.2}>
          <div
            className="rounded-3xl border border-ink/[0.08] bg-paper-2 p-7 shadow-[0_4px_40px_rgba(12,14,18,0.06)] sm:p-9"
            data-testid="enquiry-form-card"
          >
            <h3 className="font-serif text-2xl tracking-tight text-ink">
              {contact.form.title}
            </h3>
            <form onSubmit={onSubmit} className="mt-7 space-y-4">
              <div>
                <label htmlFor="enq-name" className="mb-1.5 block font-mono text-[10px] uppercase tracking-[0.2em] text-ink/50">
                  Full Name
                </label>
                <input
                  id="enq-name"
                  required
                  value={form.name}
                  onChange={set("name")}
                  placeholder="Your name"
                  className={inputClass}
                  data-testid="enquiry-input-name"
                />
              </div>
              <div className="grid gap-4 sm:grid-cols-2">
                <div>
                  <label htmlFor="enq-email" className="mb-1.5 block font-mono text-[10px] uppercase tracking-[0.2em] text-ink/50">
                    Email
                  </label>
                  <input
                    id="enq-email"
                    type="email"
                    required
                    value={form.email}
                    onChange={set("email")}
                    placeholder="you@email.com"
                    className={inputClass}
                    data-testid="enquiry-input-email"
                  />
                </div>
                <div>
                  <label htmlFor="enq-phone" className="mb-1.5 block font-mono text-[10px] uppercase tracking-[0.2em] text-ink/50">
                    Phone Number
                  </label>
                  <input
                    id="enq-phone"
                    type="tel"
                    required
                    value={form.phone}
                    onChange={set("phone")}
                    placeholder="+91 ..."
                    className={inputClass}
                    data-testid="enquiry-input-phone"
                  />
                </div>
              </div>
              <div>
                <label htmlFor="enq-message" className="mb-1.5 block font-mono text-[10px] uppercase tracking-[0.2em] text-ink/50">
                  Message
                </label>
                <textarea
                  id="enq-message"
                  required
                  rows={4}
                  value={form.message}
                  onChange={set("message")}
                  placeholder="Tell us a little about your goals..."
                  className={`${inputClass} resize-none`}
                  data-testid="enquiry-input-message"
                />
              </div>

              <button
                type="submit"
                className="group flex w-full items-center justify-center gap-2.5 rounded-full bg-gold px-7 py-4 text-sm font-semibold text-ink transition-all duration-300 hover:bg-gold-light hover:shadow-[0_8px_40px_rgba(197,160,89,0.35)]"
                data-testid="enquiry-submit-button"
              >
                <MessageCircle className="h-4 w-4" />
                {contact.form.submitLabel}
              </button>

              <a
                href={mailtoHref}
                onClick={() => toast.success("Opening your email app with the draft.")}
                className="block text-center text-xs font-medium text-ink/50 underline-offset-4 transition-colors hover:text-gold-dark hover:underline"
                data-testid="enquiry-email-fallback"
              >
                {contact.form.emailFallbackLabel}
              </a>

              <p className="pt-1 text-center text-[11px] leading-relaxed text-ink/40">
                {contact.form.note}
              </p>
            </form>
          </div>
        </Reveal>
      </div>
    </section>
  );
};
