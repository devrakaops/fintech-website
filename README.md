# Meridian Capital Advisors — Website Content Guide

A premium, fully static single-page website. There is **no backend, no database and no login** — everything you see is controlled by **one content file**.

---

## ⚡ The 30-second version

| I want to change... | Do this |
|---|---|
| Company name, phone, email, WhatsApp, services, text | Edit **`frontend/src/config/siteContent.js`** |
| Images (hero, office, founders) | Replace files in **`frontend/public/images/`** |
| Logo | Replace **`frontend/public/favicon.svg`** — or put a `logo.png` in `public/images/` and set `images.logo: "/images/logo.png"` in the config file |

**That's it.** Never hunt through other files — every heading, name, number, service and link lives in `siteContent.js`.

---

## 1. Where everything lives

```
frontend/
├── src/
│   ├── config/
│   │   └── siteContent.js      ← ✏️ ALL editable text, numbers & links
│   └── components/             ← layout only (no content here)
└── public/
    └── images/                 ← 🖼️ put your images here
```

## 2. Change the company name
Open `frontend/src/config/siteContent.js` → `brand.name` (full name) and `brand.shortName` (used in the logo + footer watermark). Also update `footer.copyright` if needed.

## 3. Change headings & text
Every section's text is in the config file under matching keys:
- Hero → `hero` (eyebrow, title lines, description, buttons)
- About → `about` (title, paragraphs, philosophy, credentials)
- Approach → `approach.steps` (the 4 steps)
- Services → `services.items` (add / remove / rename freely — the cards update automatically)
- Journey → `journey.stages`
- Contact → `contact`

## 4. Change founder information
Config file → `about.founders`. Edit `name`, `designation` and `bio` for each founder. Founder photos are `images.founderOne` / `images.founderTwo`.

## 5. Change the WhatsApp number
Config file → `contact.whatsapp`. Use the full number with country code, e.g. `"91 98765 43210"`. The pre-filled message is `contact.whatsappPrefill`.

## 6. Change the email
Config file → `contact.email`, e.g. `"hello@yourfirm.com"`.

## 7. Change the phone number
Config file → `contact.phone`. Same format as WhatsApp.

> ⚠️ The site currently ships with **placeholder** contact details (`+91 90000 00000`, `hello@example.com`) and placeholder founder names and statistics. Replace them before going live.

## 8. Replace images
1. Put your new image in `frontend/public/images/`
2. Keep the same file name (`hero.jpg`, `about.jpg`, `journey.jpg`, `founder-1.jpg`, `founder-2.jpg`) — done. Or change the paths in `images` inside the config file.
Images are always cropped to fit (`object-fit: cover`), so any reasonable size works without breaking the layout.

## 9. Replace the logo
The site uses a built-in vector brand mark (works on dark & light). To use your own logo:
1. Save it as `frontend/public/images/logo.png` (PNG with transparent background looks best)
2. In the config file set `images.logo: "/images/logo.png"`
3. Adjust `brand.logoHeight` (pixels) if you want it bigger/smaller — it never stretches.

The browser-tab icon (favicon) is `frontend/public/favicon.svg` — replace that file to change it.

## 10. Run the website locally
```bash
cd frontend
yarn install
yarn start
```
Then open http://localhost:3000.

## 11. Build the static website
```bash
cd frontend
yarn build
```
The finished site appears in `frontend/build/` — a plain static folder you can host anywhere (Netlify, Vercel, S3, cPanel…).

---

## About the enquiry form
There is intentionally **no backend**. When someone submits the form, their browser opens **WhatsApp** (primary) or their **email app** (alternative link) with all the details pre-filled. Nothing is stored on the website — the form says this clearly to visitors.

## Disclaimer
The investment disclaimer in the footer is editable at `footer.disclaimer` in the config file.
