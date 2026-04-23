# Brand, Design System & Business Positioning

**Read this when:** working on any visual design, writing brand copy, creating new pages, or adjusting positioning.

---

## Business Identity

**Core Visuals NYC** — boutique event photography & videography studio
- Owner: Vlad Levine (founder, lead shooter — you work with him directly)
- Phone: (929) 445-0603
- Email: contact@corevisuals.nyc
- Address: 99 Wall Street #1751, New York, NY 10005
- Service area: All five NYC boroughs; tri-state available; nationwide for right projects

---

## Services (In Priority Order)

1. **Event Coverage** (primary) — video + photo packages for corporate events, galas, conferences, product launches, networking events, fundraisers, panel discussions, trade shows
2. **Corporate Content** (secondary) — team headshots, office/culture photography, brand videos, testimonial videos, explainers
3. **Custom Projects** (tertiary) — multi-day coverage, specialized events

---

## Positioning

**"Boutique by Design"** — the core differentiator. Always explain what boutique means concretely:
- No account managers between client and shooter
- Fixed packages, no mystery pricing
- Same person from inquiry to final delivery
- Small team = lower overhead = better rates than agencies

**"Production company" not "videographer"** — use this language for SEO and positioning (less competition).

---

## Competitive Differentiators

1. **Pricing transparency** — competitors hide pricing, we show it
2. **Video + photo combined** — most do one or the other
3. **Production company positioning** — lower competition keyword
4. **Simplified structure** — 2–3 core service pages vs. competitors' 15+
5. **Direct access** — client reaches Vlad, not an account manager

---

## Design System

### Colors
| Name | Hex | Usage |
|------|-----|-------|
| Gold (primary) | `#D4AF37` | Links, CTAs, accents, borders |
| Cyan (accent 1) | `#06B6D4` | Secondary accents, hover states |
| Magenta (accent 2) | `#EC4899` | Tertiary accents, highlights |
| Dark | `#0A0A0A` | Body text, dark sections |
| Charcoal | `#1F2937` | Secondary dark backgrounds |
| Off-white | `#F9FAFB` | Page backgrounds, light sections |
| Gray | `#6B7280` | Secondary text |

### Typography
- **Font:** Inter (Google Fonts — 400, 500, 600, 700, 800)
- H1: 48–128px (clamp, ultra-bold 800 weight)
- H2: 36–56px (700–800 weight)
- H3: 24–32px
- Body: 16–18px (400 weight)
- Eyebrow labels: 11–12px uppercase, letter-spaced

### Image CDN
- Cloudinary account: `dtuxu64zp`
- Always use: `f_auto,q_auto` in transform URL
- Example: `https://res.cloudinary.com/dtuxu64zp/image/upload/f_auto,q_auto/[image-id]`

---

## Design Philosophy

**Every design decision removes friction AND addresses a pain point:**
- Clear hierarchy → busy client finds info fast
- Generous whitespace → not overwhelming
- Punchy copy → respects their time
- Transparent pricing → removes biggest objection upfront
- Video-first messaging → "Finally, someone gets it"

**Goal:** Client reads the page and thinks "This is exactly what I need."

---

## Portfolio Content Mix (Target)

- 60% event work (galas, conferences, networking)
- 30% corporate (headshots, office, teams)
- 10% specialized video projects

---

## Technical Features Already Built

**Desktop:**
- Scroll progress bar (tri-color gradient)
- Service card hover animations
- Bento grid layout (philosophy section)
- Smooth scroll animations

**Mobile:**
- Floating call button → (929) 445-0603
- Touch ripple effects (Material Design style)
- Swipeable testimonials (snap-to-card)
- Device tilt parallax (gyroscope)
- Haptic feedback on interactions
- Loading screen: CORE → VISUALS → NYC

---

## Schema Markup (LocalBusiness — Include on Every Page)

```json
{
  "@context": "https://schema.org",
  "@type": "LocalBusiness",
  "name": "Core Visuals NYC",
  "description": "NYC event photography and corporate video production",
  "address": {
    "@type": "PostalAddress",
    "streetAddress": "99 Wall Street #1751",
    "addressLocality": "New York",
    "addressRegion": "NY",
    "postalCode": "10005",
    "addressCountry": "US"
  },
  "telephone": "+1-929-445-0603",
  "priceRange": "$$",
  "url": "https://corevisuals.nyc"
}
```

---

## Analytics

- **Google Analytics 4:** G-REYC2K415E (in `<head>` of every page — already implemented)
- **Google Search Console:** Set up, sitemap needs submission
- **Hosting:** Netlify (app.netlify.com) — connected to GitHub repo, auto-deploys on push to `main`
