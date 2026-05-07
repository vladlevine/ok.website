# Blog Writing Workflow - SINGLE SOURCE OF TRUTH

**CRITICAL: This is the ONLY blog writing reference. Follow this exactly every time. No exceptions.**

## Before You Start

1. **Check for existing template**: Use `.claude/blog-post-template.html` as your starting point
2. **Read one good example**: Look at `blog/aerial-commercial-photography-nyc.html` for reference
3. **Never skip any section** in this workflow

---

## Writing Style (NON-NEGOTIABLE)

### Core Principles
- **Conversational tone**: Write like you're talking to someone over coffee, not writing a corporate manual
- **Story-driven**: Use real examples, client stories, specific scenarios
- **Minimal bullet points**: Only use when absolutely necessary (pricing, technical specs)
- **No jargon**: Avoid corporate speak, marketing buzzwords, or overly technical language
- **Authentic voice**: "I've shot...", "Here's what I see...", "The companies that succeed..."

### What to AVOID
- ❌ Lists of 5+ bullet points
- ❌ "Leveraging", "synergy", "best practices", "game-changer"
- ❌ Overly formal language
- ❌ Numbered lists unless showing a process/timeline
- ❌ Generic stock photo descriptions

### What to DO
- ✅ Tell specific stories ("I worked with a law firm that...")
- ✅ Use flowing paragraphs that connect ideas
- ✅ Include real brand examples with links when relevant
- ✅ Write in first person when appropriate
- ✅ Be opinionated but fair

---

## Required Elements (CHECK EACH ONE)

### 1. ANSWER-FIRST PARAGRAPH (LLM CITATION — REQUIRED)

Place in the first 50–70 words of body copy, after the hook and before the first H2. This is the post's direct answer to its implied search query.

**Structure: claim → mechanism → boundary.**

Example:
> "AI can help photographers improve corporate event headshots by handling the prep work that makes the session better before the camera fires. In this case, that meant building a pose guide guests could choose from. The AI did the prep. The photographer did everything else."

This paragraph is what LLMs extract when summarizing your post. Write it to stand alone.

---

### 2. SELF-CONTAINED ANSWER BLOCKS UNDER EVERY H2 (LLM CITATION — REQUIRED)

Every H2 section must open with a 40–60 word direct answer to the implied question of that section. Not a teaser — the actual answer. The explanation follows.

ChatGPT cites this format at 72% rate for matching pages. It is the single highest-impact LLM tactic.

**Bad (classic SEO style):**
> "Backup discipline is something every working photographer should think about..."

**Good (LLM-extractable):**
> "Video footage backup workflows fail at the gap between local capture and cloud sync — not at the camera. The most-cited reason for lost footage is the assumption that 'I'll sync it later.' The practical fix is treating the sync as the final shot of the day, not post-shoot cleanup."

---

### 3. DEFINITION SENTENCE (LLM CITATION — REQUIRED when introducing a specialized concept)

Define the core concept of the post once, early, in plain language. This becomes the extractable definition AI uses to answer "what is X" queries.

Format: `[Term] is [plain definition] — [boundary or clarification].`

Example:
> "An AI-assisted photography workflow is a production process where AI supports planning or creative prep — while the photographer keeps full control of direction, lighting, composition, and final judgment."

---

### 4. E-E-A-T OBSERVATION (LLM CITATION — REQUIRED, once per post)

Include one specific, observable, first-hand detail that proves the author was there. Not a strategy claim. A concrete moment.

Example:
> "Guests started walking up to the stand on their own, before I called them over. That didn't happen at the last setup."

This signals direct experience to both Google and LLMs. One sentence is enough. Make it specific.

---

### 5. FAQ SECTION (LLM CITATION — REQUIRED)

**Every blog post needs a FAQ section.** This is not optional.

- 4–6 questions
- Each answer: 40–70 words, fully self-contained (no "as mentioned above")
- Questions must match real conversational queries people actually ask
- Place near the end, before the CTA, under its own H2

**FAQPage schema is REQUIRED if FAQ section is present** — you get half the citation benefit without it.

Format:
```html
<!-- FAQ Section -->
<h2 id="faq">Frequently Asked Questions</h2>

<h3>[Question?]</h3>
<p>[Self-contained answer, 40-70 words. No references to earlier content.]</p>
```

Schema (in `<head>`):
```html
<script type="application/ld+json">
{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [{
    "@type": "Question",
    "name": "[Question]",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "[Answer matching the HTML content exactly]"
    }
  }]
}
</script>
```

---

### 6. META TAGS & SEO
```html
<title>Specific, Keyword-Rich Title | Core Visuals NYC</title>
<meta name="description" content="145-155 character description. Primary keyword once, not first word. End with implied benefit.">
<meta name="keywords" content="primary keyword, secondary, tertiary, NYC">
```

---

### 7. OPEN GRAPH
```html
<meta property="og:type" content="article">
<meta property="og:title" content="Full Title">
<meta property="og:description" content="Description">
<meta property="og:url" content="https://corevisualsnyc.com/blog/filename.html">
<meta property="og:image" content="[MAIN IMAGE URL]">
```

---

### 8. SCHEMAS (ALL THREE REQUIRED)

**Article Schema** — include `Person` author attribution. Required for E-E-A-T LLM signals:
```json
{
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "...",
  "author": {
    "@type": "Person",
    "name": "Vlad Levine"
  },
  "publisher": { "@type": "Organization", "name": "Core Visuals NYC" },
  "datePublished": "YYYY-MM-DD",
  "dateModified": "YYYY-MM-DD"
}
```

**Breadcrumb Schema** — 3 levels: Home > Blog > Post Title

**FAQPage Schema** — required when FAQ section is present (see section 5 above)

---

### 9. TABLE OF CONTENTS
**REQUIRED** for posts with 4+ H2 sections.

Format:
```html
<div style="background: #F9FAFB; border-left: 4px solid #D4AF37; padding: 32px; margin: 40px 0; border-radius: 8px;">
  <h3 style="font-size: 18px; font-weight: 700; margin: 0 0 20px; color: #0A0A0A;">Table of Contents</h3>
  <ul style="list-style: none; padding: 0; margin: 0;">
    <li style="margin-bottom: 12px;"><a href="#section-id" style="color: #D4AF37; font-weight: 600; text-decoration: none;">Section Title</a></li>
  </ul>
</div>
```

**Placement**: Immediately after hero image, before first H2.

---

### 10. MOBILE RESPONSIVENESS
```css
@media (max-width: 768px) {
  .article-header h1 { max-width: 100%; padding: 0 12px; }
  .article-excerpt { padding: 0 12px; }
  .article-content { max-width: 100%; padding: 0 12px; margin: 60px auto; }
  .breadcrumb-nav { max-width: 100%; padding: 0 12px; }
}
```

**CRITICAL RULES**:
- Use `padding: 0 12px` for all mobile blog post elements (NOT percentages)
- NEVER place duplicate `.article-content` CSS rules after this media query
- Mobile `@media (max-width: 768px)` must be the LAST CSS rule for mobile selectors

---

### 11. FOOTER (STANDARD - ALWAYS USE THIS)
```html
<footer class="footer">
  <div class="container">
    <div class="footer-grid">
      <div>
        <h4>Core Visuals NYC</h4>
        <p style="max-width: 320px; line-height: 1.8;">Event video and photography for NYC businesses. Corporate events, conferences, brand content. Professional, transparent, reliable.</p>
        <p style="margin-top: 32px;"><strong style="font-weight: 700;">99 Wall Street #1751</strong><br>New York, NY 10005</p>
      </div>
      <div>
        <h4>Services</h4>
        <a href="../service-event-coverage.html">Event Video + Photo</a>
        <a href="../service-corporate-content.html">Corporate Content</a>
        <a href="../service-custom-projects.html">Custom Projects</a>
        <a href="../portfolio.html">Portfolio</a>
      </div>
      <div>
        <h4>Company</h4>
        <a href="../about.html">About</a>
        <a href="../blog.html">Blog</a>
        <a href="../contact.html">Contact</a>
        <a href="tel:+19294450603">(929) 445-0603</a>
        <a href="mailto:vlad@corevisuals.nyc">Email Us</a>
      </div>
      <div>
        <h4>Connect</h4>
        <a href="https://www.linkedin.com/in/vladlevine/" target="_blank" rel="noopener">LinkedIn</a>
        <p style="margin-top: 32px; font-size: 14px;"><strong style="font-weight: 700;">Hours</strong><br>Mon-Fri: 9am - 6pm EST</p>
      </div>
    </div>
    <div class="footer-bottom"><p>&copy; 2025 Core Visuals NYC. All Rights Reserved.</p></div>
  </div>
</footer>
```

**NEVER use**: `footer-content`, `footer-container`, `footer-brand`, `footer-links`, or any other footer structure.

---

## Image Requirements

### Main/Hero Image
- Cloudinary URL with `f_auto,q_auto` parameters
- Must be the same image used in Open Graph and Article Schema
- Alt text: descriptive, keyword-rich, natural language

### In-Content Images
- Strategic placement between sections
- Alt text describes image AND its context
- Use `loading="lazy"` for all images except hero
- Class: `article-image`

---

## Content Structure

### Opening Hook (Required)
Start with a specific observation, story, or counterintuitive statement. NOT a generic intro.

**Bad**: "In today's competitive market, photography is important for businesses."
**Good**: "The most useful thing AI did on my last shoot took about 20 minutes to build and got taped to a light stand."

### Answer-First Paragraph (Required — see section 1 above)
Immediately after the hook. 50–70 words. Claim → mechanism → boundary. Stands alone without the rest of the post.

### Body Sections
- 3–5 H2 sections (narrative posts) or up to 8 (guide-style posts)
- Each H2 opens with a 40–60 word self-contained answer
- Include at least one definition sentence for a core concept
- Include at least one specific first-hand E-E-A-T observation
- Sections flow into each other — no isolated idea dumps

### Call-to-Action (Required)
- Styled CTA block near the end, before FAQ
- Conversational, not salesy
- References the specific topic

```html
<div class="article-cta">
  <h3>[Specific Question/Statement]</h3>
  <p>[Brief, conversational explanation]</p>
  <a href="../contact.html" class="btn-white">[Clear Action]</a>
</div>
```

### FAQ Section (Required — see section 5 above)
After CTA or before close. Always with FAQPage schema.

### LinkedIn close (when relevant)
If the post relates to a LinkedIn post Vlad published, close with a line linking to his LinkedIn. Keeps cross-channel loop active.

---

## Quality Checklist (Run BEFORE Committing)

### LLM / GEO Signals
- [ ] Answer-first paragraph in first 50–70 words (claim → mechanism → boundary)
- [ ] Every H2 opens with 40–60 word self-contained answer block
- [ ] At least one definition sentence for a core term
- [ ] At least one first-hand E-E-A-T observation (specific, observable)
- [ ] FAQ section with 4–6 questions, 40–70 word self-contained answers
- [ ] FAQPage schema present and matching FAQ content
- [ ] Article schema has `"@type": "Person"` author attribution

### Content Quality
- [ ] Writing is conversational, not corporate
- [ ] Fewer than 3 bullet-point lists in entire post
- [ ] Real examples and stories included
- [ ] No marketing jargon or buzzwords
- [ ] Flows naturally paragraph to paragraph
- [ ] Sounds like Vlad — rewrite any sentence that sounds like a LinkedIn post generator

### Technical Requirements
- [ ] Table of contents included (if 4+ H2 sections)
- [ ] All H2 tags have anchor IDs matching ToC
- [ ] Standard footer-grid footer used
- [ ] Mobile padding is 12px (NOT percentages)
- [ ] No duplicate CSS rules after mobile media queries
- [ ] Mobile @media block is LAST for each selector
- [ ] All images have proper alt text

### SEO & Meta
- [ ] Title tag 55–65 characters, primary keyword included
- [ ] Meta description 145–155 chars, primary keyword once (not first word)
- [ ] Open Graph tags complete
- [ ] Article Schema complete with Person author
- [ ] FAQPage Schema complete (if FAQ present)
- [ ] Breadcrumb Schema complete
- [ ] Canonical URL matches actual URL
- [ ] Added to sitemap.xml
- [ ] Added to blog.html grid

### Images
- [ ] Main image in hero section
- [ ] Cloudinary URLs have f_auto,q_auto
- [ ] All images except hero have loading="lazy"
- [ ] Alt text is descriptive and natural
- [ ] OG image, Schema image, and hero match

---

## Common Mistakes (AVOID THESE)

1. **Skipping the FAQ section** — This is the highest-impact LLM citation tactic. Non-optional.

2. **FAQ section without FAQPage schema** — Half the benefit. Always add the schema.

3. **H2 sections that tease instead of answer** — LLMs can't extract a tease. Open with the answer.

4. **Answer-first paragraph that builds to the answer** — It must answer immediately. Not "In this post, we'll explore..." but the actual claim in sentence one.

5. **CRITICAL: Duplicate CSS rules after media queries** — NEVER place duplicate `.article-content` or media query blocks after the main `@media (max-width: 768px)` block. Causes 1-2 words per line on mobile.

6. **Wrong footer structure** — Always use footer-grid with 4 columns.

7. **Wrong mobile padding** — Use `padding: 0 12px` (NOT 5%, NOT percentages).

8. **Forgetting table of contents** — Add it if 4+ H2 sections.

9. **Mismatched images** — OG image, Schema image, and hero must match.

10. **Missing anchor IDs** — All H2s need IDs if you have a ToC.

11. **Too many bullet points** — Limit to 2–3 lists maximum per post.

---

## File Naming & Organization

### Blog Post Files
- Format: `blog/lowercase-with-hyphens.html`
- Keep names short but descriptive
- Include primary keyword in slug

### Updating blog.html
After creating a new post, add card to the TOP of the blog grid:
```html
<article class="blog-card">
  <img src="[MAIN IMAGE]" alt="[DESCRIPTIVE ALT TEXT]" class="blog-card-image" loading="lazy">
  <div class="blog-card-content">
    <div class="blog-card-meta">[CATEGORY]</div>
    <h2>[TITLE]</h2>
    <p>[EXCERPT - ~150 chars]</p>
    <a href="blog/[filename].html" class="blog-card-link">Read Article <span>→</span></a>
  </div>
</article>
```

---

## Git Commit Messages

Format:
```
Add [post topic] blog post

- [Specific change 1]
- [Specific change 2]
```

---

## Reference Files

**Good Examples:**
- `blog/aerial-commercial-photography-nyc.html` — structure, ToC, footer
- `blog/ai-corporate-headshot-pose-guide.html` — answer-first, FAQ, E-E-A-T, narrative voice
- `blog/video-footage-backup-workflow.html` — answer-first, self-contained H2 blocks

**Template:**
- `.claude/blog-post-template.html` — start here

**SEO + LLM rules:**
- `.claude/seo-rules.md` — keyword data + full GEO/LLMO framework

---

## Final Notes

- **Read this ENTIRE file before writing any blog post**
- **Answer-first paragraph and FAQ section are now required — not optional**
- **Every H2 must open with a self-contained answer block**
- **FAQPage schema every time a FAQ section exists**
- **Person author schema on every Article schema**
- **Standard footer structure always**
- **12px mobile padding always**
- **CRITICAL: Never place duplicate CSS rules after mobile media queries**
- **Include table of contents for 4+ H2 sections**

If you're unsure, check `blog/ai-corporate-headshot-pose-guide.html` — it implements all LLM and classical SEO requirements correctly.
