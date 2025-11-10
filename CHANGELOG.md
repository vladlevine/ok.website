# LIGHTROOM NYC - Project Changelog & Documentation
**Version 3.0 | Premium Gold Redesign**
**Last Updated:** November 10, 2025

---

## 📱 CONTACT INFORMATION

**Phone:** (929) 445-0603
**Email:** contact@lightroomnyc.com
**Address:** 99 Wall Street #1751, New York, NY 10005

---

## 🎨 DESIGN EVOLUTION

### Version 3.0 - Premium Gold Redesign (Current)
**Accent Color:** Sophisticated Gold (#D4AF37)
- Rich, elegant gold palette with champagne tones
- Gold gradients and glow effects
- Premium feel while staying professional

**Typography:**
- Maximum H1: 128px
- Font: Inter (weights 400, 500, 600, 700, 800)
- Tight letter-spacing (-0.03em)
- Text gradient effects on key headlines

**Layout:**
- Max container width: 1600px
- Section spacing: 200px desktop / 120px mobile
- Generous padding: 80px desktop / 32px mobile
- Full-width cinematic hero

**Key Features:**
- Video background support in hero (HTML5 <video> tag)
- Gold shine sweep effect on buttons
- Floating service icons (4s animation cycle)
- Staggered scroll animations
- Testimonial cards with decorative quote marks
- Premium glassmorphism effects

### Version 2.0 - Modern Indigo Redesign
**Accent Color:** Vibrant Indigo (#6366F1)
- Modern, energetic purple/blue gradient
- Glassmorphism service cards
- Scroll-triggered animations

### Version 1.0 - Initial Minimalist Design
**Accent Color:** Muted Gold (#D4A574)
- Clean, minimal, classic approach
- Basic responsive layout

---

## 🎯 SEO KEYWORD STRATEGY

### HOME PAGE
**Primary Keywords:**
- corporate photographer NYC
- NYC corporate photography and video
- corporate event photographer new york

**Meta Title:** Corporate Photographer NYC | Event & Video | LIGHTROOM NYC
**Meta Description:** NYC corporate photography and video production. Events, conferences, brand content. Fixed pricing, professional results. Book your project today.

### SERVICES PAGE (Planned)
**Section 1 - Corporate Photography:**
- corporate photography NYC
- corporate event photography pricing
- office photography NYC
- business photography services NYC
- conference photographer NYC

**Section 2 - Event Coverage:**
- event photographer NYC
- corporate event photographer NYC
- NYC event photography
- gala photographer NYC
- conference photography new york

**Section 3 - Video Production:**
- corporate video production NYC
- brand video production
- testimonial video company NYC
- corporate videographer NYC
- video production services manhattan

### WORK/PORTFOLIO PAGE (Planned)
**Primary:** corporate photography portfolio
**Purpose:** Conversion, not discovery

### ABOUT PAGE (Planned)
**Primary:** LIGHTROOM NYC
**Secondary:** Vlad Levine photographer
**Purpose:** Brand searches

### CONTACT PAGE (Planned)
**Primary Keywords:**
- hire corporate photographer NYC
- book event photographer manhattan
- corporate photography quote

---

## 💡 DESIGN TIPS & TRICKS USED

### Color Psychology
- **Gold (#D4AF37):** Luxury, quality, professionalism
- **Black (#0A0A0A):** Sophistication, authority
- **White (#FFFFFF):** Cleanliness, simplicity
- Gold works for creative/photography industry - stands out from competitors using blue

### Typography Hierarchy
- Use `clamp()` for responsive font sizes: `clamp(56px, 10vw, 128px)`
- Negative letter-spacing for modern feel: `-0.03em`
- Limit line length to 70 characters for readability
- Text gradients for visual interest without being tacky

### Animation Performance
- Use `cubic-bezier(0.4, 0, 0.2, 1)` for smooth, premium feel
- IntersectionObserver for scroll animations (better than scroll events)
- Stagger animation delays by 0.15s for cascading effect
- `transform` and `opacity` only for 60fps performance

### Glassmorphism Done Right
- `backdrop-filter: blur(24px) saturate(180%)`
- Subtle background opacity (0.6-0.7)
- Light border with accent color
- Use sparingly for premium feel

### Accessibility
- 4.5:1 color contrast minimum
- 3px outline on focus states
- Keyboard navigation support
- Reduced motion media query
- Semantic HTML structure

---

## 📂 FILE STRUCTURE

```
ok.website/
├── index.html              (Homepage - live)
├── styles.css              (All CSS - modular design system)
├── images/                 (To be added)
│   ├── hero-background.jpg
│   ├── work-1.jpg
│   ├── work-2.jpg
│   ├── work-3.jpg
│   └── work-4.jpg
├── videos/                 (Optional - for video backgrounds)
│   └── hero-background.mp4
└── CHANGELOG.md           (This file)
```

---

## 🎬 VIDEO IMPLEMENTATION NOTES

### GitHub Hosting (Current Setup)
**Limits:**
- 1GB total repository storage
- 100MB per file (soft limit)
- 1GB/month bandwidth on GitHub Pages

**Calculation:**
- 50MB video × 20 page loads = 1GB bandwidth used
- Fine for new site, might need upgrade if popular

### Recommended: External Video Hosting

**Option 1: Cloudinary (Best)**
- Free tier: 25GB bandwidth/month
- Automatic optimization
- Fast global CDN
- Setup: Upload video → get URL → paste in code

**Option 2: Vimeo**
- Professional video player
- Clean embeds
- Good for demo reels

**Option 3: Host on Netlify**
- Better bandwidth than GitHub
- Faster loading
- No strict limits on free tier

### How to Add Video Background
1. Upload video to chosen host
2. In `index.html` line 90-96, uncomment the video tag
3. Update `src` attribute with your video URL
4. Refresh - video plays automatically

**Video Specs:**
- Format: MP4 (H.264 codec)
- Resolution: 1920x1080 (1080p)
- Length: 10-30 seconds (loops)
- File size: Under 20MB ideal (compress with HandBrake)

---

## 🚀 DEPLOYMENT STATUS

### Current: GitHub Pages
- URL: https://vladlevine.github.io/ok.website/
- Branch: `claude/home-page-draft-011CUuUyyGhKB79ZcvTiwL3j`
- Auto-deploys on push (1-2 minute delay)

### Planned: Netlify
- Better performance
- Custom domain support
- Automatic HTTPS
- Form handling
- Better bandwidth limits
- Build previews

---

## 🔧 TECHNICAL SPECIFICATIONS

### Browser Support
- Chrome/Edge: Last 2 versions
- Firefox: Last 2 versions
- Safari: Last 2 versions
- Mobile Safari: iOS 14+

### Performance Targets
- Mobile PageSpeed: 90+
- Desktop PageSpeed: 95+
- First Contentful Paint: <1.5s
- Time to Interactive: <3s

### Responsive Breakpoints
- Mobile: 320px - 767px
- Tablet: 768px - 1023px
- Desktop: 1024px+
- Large Desktop: 1440px+

---

## 📋 PLANNED PAGES

### Phase 1 (Current)
- ✅ Home Page (live)

### Phase 2 (Next)
- [ ] Services Page (single page, 3 sections)
- [ ] Contact Page (form + info)

### Phase 3
- [ ] Work/Portfolio Page
- [ ] Individual project case studies

### Phase 4
- [ ] About Page
- [ ] Blog migration (100+ existing posts)

---

## 🎨 COMPONENT LIBRARY

### Buttons
```css
.btn-primary        /* Gold gradient, for main CTAs */
.btn-secondary      /* Gold outline, for secondary actions */
.btn-white          /* White bg, for dark backgrounds */
.btn-outline-white  /* White outline, for dark backgrounds */
```

### Cards
```css
.service-card       /* Glassmorphism cards with floating icons */
.work-item          /* Portfolio items with hover overlays */
.testimonial-card   /* Quote cards with decorative marks */
.bento-item         /* Asymmetric grid items */
```

### Animations
```css
.fade-in            /* Fade up on scroll */
.slide-in-left      /* Slide from left */
.slide-in-right     /* Slide from right */
.scale-in           /* Scale up on scroll */
```

---

## 💼 BUSINESS STRATEGY

### Target Audience
- NYC corporate clients
- Event planners
- Marketing managers
- Startups and tech companies
- Financial services firms

### Positioning
- Professional without being stuffy
- Transparent pricing (no mystery quotes)
- Fast turnaround (48 hours for events)
- One photographer they can trust

### Competitive Advantages
1. **Price Transparency** - Fixed packages, clear pricing
2. **Speed** - Faster delivery than agencies
3. **Package Deals** - Photo + video bundles
4. **Availability** - Last-minute bookings accepted

---

## 📈 SUCCESS METRICS TO TRACK

### Traffic
- Organic search traffic
- Direct traffic (brand searches)
- Referral traffic

### Conversions
- Contact form submissions
- Phone calls from site
- Email inquiries
- Quote requests

### SEO Rankings
- "corporate photographer NYC"
- "event photographer manhattan"
- "corporate video production NYC"

### Engagement
- Time on site
- Pages per session
- Scroll depth
- Video play rate (when added)

---

## 🔐 SECURITY & COMPLIANCE

### Current (GitHub Pages)
- ✅ HTTPS enabled
- ✅ DDoS protection (GitHub CDN)
- ⚠️ No form submissions (links to email)
- ⚠️ No business email hosting

### Planned (Netlify)
- ✅ Automatic HTTPS
- ✅ DDoS protection
- ✅ Form handling with spam protection
- ✅ Better security headers
- ⚠️ Business email requires separate service

### For Business Email
**Recommended:** Google Workspace ($6/user/month)
- Professional email: contact@lightroomnyc.com
- Calendar, Drive, Meet
- 30GB storage
- 24/7 support

**Alternative:** Zoho Mail (Free tier available)

---

## 🎯 NEXT STEPS

### Immediate (This Week)
1. [ ] Add loading screen animation
2. [ ] Fix header hover readability
3. [ ] Remove strikethrough on "GET"
4. [ ] Update phone number throughout site
5. [ ] Add sitemap to footer

### Short Term (This Month)
1. [ ] Upload real photos (10-12 images)
2. [ ] Add video background (optional)
3. [ ] Build Services page
4. [ ] Build Contact page
5. [ ] Deploy to Netlify

### Medium Term (Next 2 Months)
1. [ ] Build Work/Portfolio page
2. [ ] Create 4-6 case studies
3. [ ] Build About page
4. [ ] Set up business email
5. [ ] Migrate existing blog posts

---

## 🆘 COMMON ISSUES & SOLUTIONS

### "Changes not showing on live site"
**Solution:** Hard refresh browser (Cmd/Ctrl + Shift + R)

### "Video not loading"
**Solution:** Check file size (<50MB), format (MP4), and path

### "Animations not working on mobile"
**Solution:** Ensure `playsinline` attribute on videos

### "Site loading slowly"
**Solution:** Optimize images (WebP format, lazy loading)

---

## 📞 SUPPORT RESOURCES

- **GitHub Docs:** https://docs.github.com/pages
- **Netlify Docs:** https://docs.netlify.com
- **Web.dev Performance:** https://web.dev/measure
- **Can I Use (Browser Support):** https://caniuse.com

---

## 🎨 DESIGN PHILOSOPHY SUMMARY

**"The Art of Asking"**

Every design decision removes friction from potential clients asking for help:
- Clear hierarchy = Easy to scan
- Generous whitespace = Reduces cognitive load
- Conversational copy = Lowers intimidation
- Transparent pricing = Removes biggest objection
- Simple navigation = No one gets lost
- Fast loading = Respect their time

**The best design gets out of the way and lets clients ask for what they need.**

---

**Document maintained by:** Claude Code
**Project owner:** Vlad Levine, The Lightroom Studios
**Status:** Active Development
