# Core Visuals NYC — Claude Session Context

## The Business
**Core Visuals NYC** — NYC event photography & videography studio.
- Owner: Vlad Levine (founder & lead shooter)
- Phone: (929) 445-0603 | Email: contact@corevisuals.nyc
- Address: 99 Wall Street #1751, New York, NY 10005
- Domain: **corevisuals.nyc**
- Services: event video+photo coverage, corporate content (headshots, brand video), custom projects

## The Website
- **Stack:** Pure HTML5 / CSS3 / Vanilla JS — no framework, no build step, no package.json
- **Hosting:** GitHub Pages — auto-deploys 1–2 min after push to `main`
- **Repo:** `vladlevine/ok.website` on GitHub
- **Image CDN:** Cloudinary account `dtuxu64zp` — use `f_auto,q_auto` in transform URLs
- **Analytics:** Google Analytics 4 — ID `G-REYC2K415E` (in `<head>` of every page)
- **Design system:** `styles.css` — Inter font, gold `#D4AF37`, cyan `#06B6D4`, magenta `#EC4899`

## Site Structure
- `index.html` — homepage
- `about.html`, `contact.html`, `portfolio.html`, `faq.html`, `blog.html`, `404.html`
- `service-event-coverage.html`, `service-corporate-content.html`, `service-custom-projects.html`
- `case-study-law-firm-photography.html`, `case-study-nonprofit-golf.html`
- `blog/` — 13 HTML articles
- `sitemap.xml`, `robots.txt` — SEO files, update sitemap when adding pages

## Key Docs in This Repo
- `SITE-STRUCTURE.md` — full information architecture
- `BLOG_GUIDE.md` — blog writing standards (follow this for all blog posts)
- `KEYWORD-STRATEGY.md` — SEO keyword research
- `CHANGELOG.md` — history of changes and planned work
- `.claude/blog-writing-workflow.md` — step-by-step blog workflow
- `.claude/blog-post-template.html` — starter template for new blog posts

## Deployment Workflow
1. Edit HTML files directly (no build needed)
2. When adding a page: add it to `sitemap.xml` and link it from `blog.html` or nav
3. Commit and push to `main` → site goes live automatically

## Active Branch
The ongoing development branch is: `claude/add-video-project-pricing-v1C3H`
This branch has open PR #31. Always continue work here unless told otherwise.
Switch to it at session start with: `git checkout claude/add-video-project-pricing-v1C3H`

## Known Issues
- `corerevisualsnyc.com` (note: with extra "re") shows SSL error `NET::ERR_CERT_COMMON_NAME_INVALID` — cert mismatch, needs fixing at the hosting/DNS level
- The canonical domain is `corevisuals.nyc` (no "re")
