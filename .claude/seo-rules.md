# SEO & LLM Optimization Rules

**Read this before writing any page copy, blog post, or meta tags.**
**Full keyword data in:** `KEYWORD-STRATEGY.md`

---

## Priority Framework

**Classical SEO is the floor. LLM/AI visibility is the ceiling.**

76% of URLs cited by AI systems (ChatGPT, Perplexity, Claude, Google AI Overviews) also rank in Google's top 10. You can't skip classical SEO — it's the entry ticket. But the tactics that make content *extractable and citable by LLMs* are different from what gets you ranked, and for Core Visuals they compound faster than chasing backlinks.

**Priority order when making decisions:**
1. LLM citation signals (answer-first, FAQ schema, entity consistency, self-contained blocks)
2. Classical SEO infrastructure (title tags, H1, canonical, sitemap)
3. Keyword targeting (use naturally — don't optimize for density)

---

## Part 1 — LLM/AI Search Optimization

### What It's Called

The field has no single name. All of these are in use in 2025:
- **GEO** (Generative Engine Optimization) — any generative engine
- **LLMO** (Large Language Model Optimization) — specifically LLM systems
- **AEO** (Answer Engine Optimization) — older term, overlaps significantly

For our purposes: GEO and LLMO mean the same thing. This is the layer that gets Core Visuals cited when someone asks ChatGPT, Perplexity, or Google AI Overviews for an NYC event photographer or video team.

---

### How Each Platform Cites Content

| Platform | How it works | What it favors |
|---|---|---|
| **ChatGPT** | Bing's index for web browsing | 40–60 word self-contained answer blocks under H2s; Wikipedia-style clarity |
| **Perplexity** | Continuous crawl | Recent content (updated within 30 days gets 3.2× more citations); Reddit mentions |
| **Google AI Overviews** | Traditional authority + semantic richness | E-E-A-T, schema markup, topical completeness |
| **Bing Copilot** | Schema markup directly helps LLM parsing | Structured data, clear entity identity |
| **Claude** | Training data + Citations API | Depth, precision, verifiable claims |

---

### The Signals That Actually Matter for LLMs

**Brand mentions > backlinks.** Brand mentions correlate at 3:1 over links for AI Overview placement. Getting into local NYC directories, Reddit threads, listicles, and industry roundups matters more than link-building.

**Entity consistency.** Consistent name/address/phone across Google Business, Yelp, LinkedIn, and industry directories signals entity trust. LLMs resolve confidence in an entity by comparing mentions across sources.

**Topical completeness.** LLMs don't reward keyword repetition. They reward covering a topic thoroughly. One good 900-word answer beats five thin 200-word pages.

**Content recency.** Perplexity weights content updated within 30 days at 3.2× the rate of older content. Refreshing blog posts with updated info and dates is a cheap compounding win.

**Brand search volume** is the strongest single predictor of AI citation (0.334 correlation in studies — stronger than any backlink metric). Growing the Core Visuals brand on LinkedIn, directories, and word of mouth directly feeds LLM visibility.

---

### On-Page Tactics — Highest ROI First

**1. Self-contained answer blocks (highest impact)**
Every H2 section should open with a 40–60 word direct answer to the implied question. Not a teaser — the actual answer. The explanation follows. This is the format ChatGPT prefers to extract and cite. Already used in the backup workflow post and the AI headshot post — do this consistently.

**2. FAQ sections with FAQPage schema**
BrightEdge study: 44% increase in AI citations for pages with FAQ sections + FAQPage schema.
- 4–6 questions per page
- Each answer: 40–70 words, fully self-contained
- Questions should match real conversational queries ("How much does corporate video production cost in NYC?")
- Mark up every FAQ section with `FAQPage` JSON-LD

**3. Definition sentences**
Define core terms once per page where it's natural:
> "An AI-assisted photography workflow is a production process where AI supports planning or creative prep — while the photographer keeps full control of direction, lighting, and judgment."

These become directly extractable definitions for AI summaries.

**4. Answer-first structure on every page**
Structure: **claim → mechanism → boundary.**
Answer the main question in the first 50–70 words of body copy (after the hook). Don't build to the answer — lead with it, then explain.

**5. Person schema on all blog posts**
Every blog post needs `"author": {"@type": "Person", "name": "Vlad Levine"}` in the Article schema. Links bylines to a real entity. Critical for E-E-A-T in LLM indexing. Already in templates — don't remove.

**6. Explicit E-E-A-T moments**
Include one specific, observable, first-hand detail per blog post that proves the author was there:
> "Guests started walking up to the stand on their own, before I called them over. That didn't happen at the last setup."

This signals direct experience to both Google and LLMs. Not a strategy claim — a concrete observation.

---

### Schema Types — Priority Order

| Schema | Priority | Reason |
|---|---|---|
| `FAQPage` | **HIGHEST** | 44% AI citation lift; direct extraction format |
| `LocalBusiness` | **HIGHEST** | Entity identity for local AI queries |
| `Article` + `Person` author | HIGH | E-E-A-T signal; author entity confidence |
| `BreadcrumbList` | HIGH | Contextual clarity for LLM parsing |
| `Organization` | MEDIUM | Reinforces entity identity across platforms |
| `ImageObject` | LOW | Useful for BTS/portfolio-adjacent content |

**All schema in JSON-LD format only** (not microdata). Place in `<head>`.

---

### What Does NOT Transfer from Classical SEO

These classical SEO tactics have **no measurable effect** on LLM citation rates:

- ❌ Keyword density — LLMs don't respond to repetition
- ❌ Exact-match anchor text in backlinks — entity trust outweighs link graphs
- ❌ Meta description optimization — not a citation signal for LLMs
- ❌ CTR optimization — irrelevant; LLMs don't track clicks
- ❌ Thin pages with strong backlinks — LLMs require extractable content, not authority inheritance
- ❌ `lms.txt` files and elaborate entity graphs — low ROI at boutique domain scale

---

### What to Build for Brand Mention Growth

These drive LLM visibility at Core Visuals' scale:
- NYC photography/videography directories (get listed)
- LinkedIn presence (publish consistently — Perplexity weights social heavily)
- Reddit mentions in r/NYCphotography, r/weddingplanning, r/EventProfs
- Industry listicles ("best event photographers in NYC")
- Google Business profile completeness (photos, reviews, Q&A)

---

## Part 2 — Classical SEO (Infrastructure Layer)

### Keywords With Real Search Volume

#### Tier 1 — Target These (~500 searches/month)
| Keyword | Competition | Priority |
|---|---|---|
| event photographer nyc | MEDIUM | HIGH |
| event photography nyc | MEDIUM | HIGH |
| **corporate video production nyc** | **LOW (3/100)** | **HIGHEST** ⭐ |
| corporate photographer nyc | MEDIUM | HIGH |
| **corporate event photography pricing** | MEDIUM | HIGH ⭐ |
| corporate video production company nyc | LOW | HIGH |

#### Tier 2 — Use Naturally (~50 searches/month)
- corporate event photographer nyc
- event videographer nyc (HIGH competition — harder)
- event photography rates nyc (LOW competition)

**Secret weapon:** "Corporate video production NYC" — 500 searches/month, competition 3/100. Position as a "production company" not just a "videographer."

---

### Keywords With ZERO Search Volume — Don't Target

❌ Specific event types: conference photographer nyc, gala photographer nyc, networking event photographer
❌ Industry-specific: startup photographer, nonprofit photographer, tech event photographer
❌ Quality modifiers: best event photographer nyc, top videographer, affordable
❌ Package terms: photo and video package nyc, full event coverage
❌ Neighborhood targeting: manhattan photographer, midtown, downtown

---

### Page Strategy

**Do this:**
- 2–3 excellent service pages (not 20 thin ones)
- ONE comprehensive event coverage page mentioning all event types in body copy
- Pricing sections on every service page
- "Transparent pricing" and "fixed packages" language throughout

**Don't do this:**
- Separate pages for conference, gala, networking (zero search volume)
- Neighborhood pages (Midtown, Downtown — zero volume)
- Industry pages (tech, nonprofit — zero volume)

---

### Meta Tag Rules

- Title: 55–65 characters, primary keyword included, reads like a headline
- Description: 145–155 characters, action-oriented, primary keyword once (not first word)
- One H1 per page, primary keyword in H1
- Primary keyword in first 100 words of body copy
- 2–4 keyword mentions per 500 words — natural, never stuffed

---

### Internal Linking Rules

- Blog posts → link to service pages (high priority)
- Service pages → link to portfolio and contact
- Portfolio → link back to relevant service pages
- Every page: 3–5 internal links minimum

---

## Full Checklist — Every New Page

### LLM / GEO
- [ ] Answer-first paragraph in first 50–70 words (claim → mechanism → boundary)
- [ ] Each H2 section opens with a self-contained 40–60 word answer
- [ ] At least one definition sentence for a core term
- [ ] At least one first-hand E-E-A-T observation (specific, observable)
- [ ] FAQ section with 4–6 questions (40–70 word self-contained answers each)
- [ ] `FAQPage` schema if FAQ present
- [ ] `Article` schema with `Person` author attribution
- [ ] `LocalBusiness` schema on service/landing pages
- [ ] `BreadcrumbList` schema on all pages

### Classical SEO
- [ ] Unique title tag (55–65 chars, keyword included)
- [ ] Unique meta description (145–155 chars)
- [ ] One H1 with primary keyword
- [ ] Canonical URL tag
- [ ] Open Graph tags (og:title, og:description, og:url, og:image)
- [ ] Added to `sitemap.xml`
- [ ] Linked from at least one other page
- [ ] Image alt text: descriptive + keyword where natural

---

## Realistic Targets

### Classical Search (12-month)
- Top 10: event photographer nyc, event photography nyc, corporate photographer nyc
- **Top 5: corporate video production nyc** (low competition — winnable)
- Top 10: corporate event photography pricing

### LLM Citation (ongoing)
- Get cited when someone asks Perplexity or ChatGPT for "NYC event photographer" or "corporate video team NYC"
- Path: FAQ schema on service pages + consistent brand mentions + Google Business completeness
- This compounds with time and brand volume — start now, measure quarterly

---

## Do NOT

- Pay for backlinks or "SEO services"
- Build 10+ service pages (dilutes authority)
- Chase zero-volume keywords
- Optimize for keyword density — it doesn't help rankings and actively hurts LLM extractability
- Write blog posts "just for SEO" with no real content
- Obsess over daily rankings
- Add FAQ sections without the FAQPage schema — you get half the benefit
