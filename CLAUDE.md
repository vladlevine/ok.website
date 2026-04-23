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

## Deployment Workflow
1. Edit HTML files directly (no build needed)
2. When adding a page: add it to `sitemap.xml` and link it from `blog.html` or nav
3. Commit and push to `main` → site goes live automatically

## Active Branch
The ongoing development branch is: `claude/add-video-project-pricing-v1C3H`
This branch has open PR #31. Always continue work here unless told otherwise.
Switch to it at session start with: `git checkout claude/add-video-project-pricing-v1C3H`

## Known Issues
- `corerevisualsnyc.com` (note: with extra "re") — SSL cert mismatch error, needs fixing at DNS/hosting level
- The canonical domain is `corevisuals.nyc` (no "re")

---

## Sub-Files — Load These When Relevant

| File | Load when... |
|------|-------------|
| `.claude/writing-style.md` | Writing or editing ANY copy: blog posts, page copy, CTAs, headlines, case studies |
| `.claude/seo-rules.md` | Working on meta tags, page titles, keyword strategy, new pages, blog topics |
| `.claude/brand.md` | Touching design, colors, layout, positioning copy, or adding new UI components |
| `.claude/blog-writing-workflow.md` | Creating a new blog post — follow this step by step |
| `.claude/blog-post-template.html` | Starting a new blog post — use as the HTML base |
| `KEYWORD-STRATEGY.md` | Deep SEO work, keyword research questions, competitive analysis |
| `SITE-STRUCTURE.md` | Planning new pages, navigation changes, IA questions |
| `CHANGELOG.md` | Understanding past decisions, what's been built, what's planned |
| `BLOG_GUIDE.md` | Full blog standards reference — detailed version of writing-style.md |

### Quick Rules
- **Writing anything?** → Read `.claude/writing-style.md` first
- **New blog post?** → Read `.claude/blog-writing-workflow.md` AND `.claude/blog-post-template.html`
- **New page or SEO change?** → Read `.claude/seo-rules.md` first
- **Design or layout change?** → Read `.claude/brand.md` first
- **Not sure what's been done before?** → Check `CHANGELOG.md`
