// ============================================================================
//  MERIDIAN CAPITAL ADVISORS — WEBSITE CONTENT
//  This is the ONLY file you need to edit to change the website's content.
//  Change text between the "quotes", save, and the whole site updates.
//  Do not change the words before the colon (e.g. name:, email:).
// ============================================================================

const siteContent = {
  // --------------------------------------------------------------------------
  // BRAND — company name, tagline and logo size
  // --------------------------------------------------------------------------
  brand: {
    name: "Meridian Capital Advisors",
    shortName: "Meridian",
    tagline: "Private Wealth & Investment Advisory",
    // Logo mark height in pixels. The mark never stretches — only scale this.
    logoHeight: 34,
  },

  // --------------------------------------------------------------------------
  // NAVIGATION — menu links and the top-right button
  // --------------------------------------------------------------------------
  nav: {
    links: [
      { label: "About", href: "#about" },
      { label: "Approach", href: "#approach" },
      { label: "Services", href: "#services" },
      { label: "Contact", href: "#contact" },
    ],
    cta: { label: "Talk to an Advisor", href: "#contact" },
  },

  // --------------------------------------------------------------------------
  // HERO — the first big screen
  // --------------------------------------------------------------------------
  hero: {
    eyebrow: "Private Wealth & Investment Advisory",
    // Each line of the headline. "accent" is shown in elegant italic gold.
    titleLines: [
      { pre: "Invest With ", accent: "Clarity." },
      { pre: "Build With ", accent: "Confidence." },
    ],
    description:
      "Thoughtful investment guidance designed around your financial goals, risk profile and long-term vision.",
    primaryCta: { label: "Talk to an Advisor", href: "#contact" },
    secondaryCta: { label: "Explore Our Approach", href: "#approach" },
    credentials: [
      "Chartered Accountant-led",
      "Boutique by design",
      "Long-term partnership",
    ],
    scrollHint: "Scroll to explore",
  },

  // --------------------------------------------------------------------------
  // MARQUEE — the slowly scrolling band under the hero
  // --------------------------------------------------------------------------
  marquee: {
    items: [
      "Private Wealth Management",
      "Investment Planning",
      "Tax-Efficient Strategy",
      "Retirement Planning",
      "Portfolio Review",
      "Financial Goal Planning",
    ],
  },

  // --------------------------------------------------------------------------
  // ABOUT & EXPERTISE
  // --------------------------------------------------------------------------
  about: {
    id: "about",
    eyebrow: "About & Expertise",
    title: "Built on Expertise. Driven by Your Goals.",
    paragraphs: [
      "Meridian Capital Advisors is a boutique investment advisory and financial consulting practice founded by two professionals, including a Chartered Accountant.",
      "We combine financial expertise, analytical thinking and practical investment planning — so every decision is grounded in your goals, not market noise.",
    ],
    philosophy: {
      label: "Our Philosophy",
      text: "Clear advice, disciplined decisions and a long-term perspective — delivered with institutional rigour and genuine personal attention.",
    },
    credentials: [
      "Chartered Accountant (CA) founded & led",
      "Research-driven, disciplined process",
      "Transparent, fee-clarity-first advice",
    ],
    // PLACEHOLDER VALUES — replace with your real numbers at any time.
    stats: [
      { value: "10+", label: "Years of Experience" },
      { value: "100+", label: "Clients / Portfolios" },
      { value: "360°", label: "Financial Perspective" },
    ],
    founders: [
      {
        name: "Founder Name One", // PLACEHOLDER — replace with founder's name
        designation: "Chartered Accountant & Investment Advisor",
        bio: "Leads investment strategy and financial planning, pairing analytical rigour with a practitioner's understanding of tax and structure.", // PLACEHOLDER
      },
      {
        name: "Founder Name Two", // PLACEHOLDER — replace with founder's name
        designation: "Co-Founder & Financial Consultant",
        bio: "Focuses on wealth planning and client relationships, translating complex decisions into clear, confident next steps.", // PLACEHOLDER
      },
    ],
  },

  // --------------------------------------------------------------------------
  // APPROACH — the 4-step process
  // --------------------------------------------------------------------------
  approach: {
    id: "approach",
    eyebrow: "Our Approach",
    title: "Our Approach",
    subtitle: "Simple principles. Disciplined decisions. Long-term thinking.",
    steps: [
      {
        number: "01",
        title: "Understand",
        description:
          "We begin by understanding your financial goals, timeline, existing investments and risk profile.",
      },
      {
        number: "02",
        title: "Plan",
        description:
          "We structure an investment approach aligned with your objectives and financial circumstances.",
      },
      {
        number: "03",
        title: "Invest",
        description:
          "We focus on disciplined, research-driven and diversified investment decisions.",
      },
      {
        number: "04",
        title: "Review",
        description:
          "We continuously review the strategy as your goals and circumstances evolve.",
      },
    ],
  },

  // --------------------------------------------------------------------------
  // SERVICES — add, remove or rename services freely
  // --------------------------------------------------------------------------
  services: {
    id: "services",
    eyebrow: "Services",
    title: "How We Can Help",
    subtitle: "Advisory services shaped around your life, your goals and your balance sheet.",
    items: [
      {
        title: "Investment Planning",
        description:
          "A clear, goal-based investment plan that matches your risk profile and time horizon.",
      },
      {
        title: "Portfolio Review",
        description:
          "An independent, structured review of your existing investments and their alignment.",
      },
      {
        title: "Wealth Planning",
        description:
          "Long-term strategies to organise, protect and grow wealth across generations.",
      },
      {
        title: "Tax-Efficient Investment Strategy",
        description:
          "Structuring investments with tax efficiency in mind — guided by Chartered Accountancy expertise.",
      },
      {
        title: "Retirement Planning",
        description:
          "Building a dependable income plan so your retirement stays exactly as you imagine it.",
      },
      {
        title: "Financial Goal Planning",
        description:
          "Mapping every milestone — education, home, legacy — to a deliberate funding strategy.",
      },
    ],
  },

  // --------------------------------------------------------------------------
  // JOURNEY — the 3-stage visual section
  // --------------------------------------------------------------------------
  journey: {
    id: "journey",
    eyebrow: "The Journey",
    title: "Your Financial Journey, Clearly Defined.",
    subtitle: "Three stages. One disciplined partnership.",
    stages: [
      {
        number: "01",
        title: "Understand",
        description:
          "A deep look at your finances, goals and risk appetite — the foundation of everything that follows.",
      },
      {
        number: "02",
        title: "Plan",
        description:
          "A clear, written strategy that maps every goal to a deliberate, achievable investment path.",
      },
      {
        number: "03",
        title: "Grow",
        description:
          "Disciplined execution, ongoing review and steady progress toward what matters most.",
      },
    ],
  },

  // --------------------------------------------------------------------------
  // CONTACT — phone, WhatsApp and email.
  //  ⚠ REPLACE the placeholder values below with your real details.
  //  Use the full number with country code, e.g. "+91 98765 43210".
  // --------------------------------------------------------------------------
  contact: {
    id: "contact",
    eyebrow: "Contact",
    title: "Let's Talk About Your Financial Goals.",
    subtitle:
      "Have a question or want to explore how we can help? Start a conversation with our advisory team.",
    phone: "+91 90000 00000", // ← PLACEHOLDER — your phone number
    whatsapp: "+91 90000 00000", // ← PLACEHOLDER — your WhatsApp number
    email: "hello@example.com", // ← PLACEHOLDER — your email address
    location: "India",
    whatsappPrefill:
      "Hello, I would like to know more about your investment advisory services.",
    form: {
      title: "Send an Enquiry",
      note: "This form does not store any information on the website. Submitting simply opens WhatsApp (or your email app) with your details filled in.",
      submitLabel: "Start a Conversation",
      emailFallbackLabel: "Prefer email? Send via email instead",
    },
  },

  // --------------------------------------------------------------------------
  // FOOTER
  // --------------------------------------------------------------------------
  footer: {
    description:
      "Boutique investment advisory & financial consulting — built on expertise, driven by your goals.",
    quickLinksTitle: "Quick Links",
    contactTitle: "Contact",
    socialTitle: "Connect",
    socials: [
      { label: "LinkedIn", href: "#" }, // ← PLACEHOLDER — your LinkedIn URL
      { label: "Instagram", href: "#" }, // ← PLACEHOLDER — your Instagram URL
      { label: "X (Twitter)", href: "#" }, // ← PLACEHOLDER — your X URL
    ],
    disclaimer:
      "Investment-related information presented on this website is for general informational purposes and does not constitute personalized financial advice.",
    copyright: "© 2026 Meridian Capital Advisors. All rights reserved.",
  },

  // --------------------------------------------------------------------------
  // IMAGES — replace the files inside  frontend/public/images/  (same file
  // names) and everything updates automatically. Or change the paths here.
  // Set logo to "" (empty) to use the built-in brand mark.
  // --------------------------------------------------------------------------
  images: {
    logo: "", // e.g. "/images/logo.png" — leave empty for the built-in mark
    hero: "/images/hero.jpg",
    about: "/images/about.jpg",
    journey: "/images/journey.jpg",
    founderOne: "/images/founder-1.jpg",
    founderTwo: "/images/founder-2.jpg",
  },
};

export default siteContent;
