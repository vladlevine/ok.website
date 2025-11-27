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

### 1. META TAGS & SEO
```html
<title>Specific, Keyword-Rich Title | Core Visuals NYC</title>
<meta name="description" content="150-160 character description with main keyword">
<meta name="keywords" content="primary keyword, secondary, tertiary, NYC">
```

### 2. OPEN GRAPH
```html
<meta property="og:type" content="article">
<meta property="og:title" content="Full Title">
<meta property="og:description" content="Description">
<meta property="og:url" content="https://corevisualsnyc.com/blog/filename.html">
<meta property="og:image" content="[MAIN IMAGE URL]">
```

### 3. SCHEMAS (ALL THREE REQUIRED)
- Article Schema (with image, author, publisher, dates)
- Breadcrumb Schema (3 levels: Home > Blog > Post Title)
- FAQ Schema (ONLY if post has FAQ section - optional)

### 4. TABLE OF CONTENTS
**REQUIRED** for posts with 4+ H2 sections.

Format:
```html
<!-- Table of Contents -->
<div style="background: #F9FAFB; border-left: 4px solid #D4AF37; padding: 32px; margin: 40px 0; border-radius: 8px;">
  <h3 style="font-size: 18px; font-weight: 700; margin: 0 0 20px; color: #0A0A0A;">Table of Contents</h3>
  <ul style="list-style: none; padding: 0; margin: 0;">
    <li style="margin-bottom: 12px;"><a href="#section-id" style="color: #D4AF37; font-weight: 600; text-decoration: none;">Section Title</a></li>
    <!-- More items -->
  </ul>
</div>
```

**Add anchor IDs to H2 tags:**
```html
<h2 id="section-id">Section Title</h2>
```

**Placement**: Immediately after first image, before first H2 section.

### 5. MOBILE RESPONSIVENESS
```css
@media (max-width: 768px) {
  .article-header h1 {
    max-width: 100%;
    padding: 0 24px;  /* NOT 12px! */
  }

  .article-excerpt {
    padding: 0 24px;  /* NOT 12px! */
  }

  .article-content {
    max-width: 100%;
    padding: 0 24px;  /* NOT 12px! Always 24px for readability */
    margin: 60px auto;
  }

  .breadcrumb-nav {
    max-width: 100%;
    padding: 0 24px;  /* NOT 12px! */
  }
}
```

### 6. FOOTER (STANDARD - ALWAYS USE THIS)
```html
<!-- Footer -->
<footer class="footer">
  <div class="container">
    <div class="footer-grid">
      <div>
        <h4>Core Visuals NYC</h4>
        <p style="max-width: 320px; line-height: 1.8;">Event video and photography for NYC businesses. Corporate events, conferences, brand content. Professional, transparent, reliable.</p>
        <p style="margin-top: 32px;">
          <strong style="font-weight: 700;">99 Wall Street #1751</strong><br>
          New York, NY 10005
        </p>
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
        <a href="mailto:heyvladlevine@gmail.com">Email Us</a>
      </div>

      <div>
        <h4>Connect</h4>
        <a href="https://www.linkedin.com/in/vladlevine/" target="_blank" rel="noopener" aria-label="Visit Core Visuals NYC on LinkedIn">LinkedIn</a>
        <p style="margin-top: 32px; font-size: 14px;">
          <strong style="font-weight: 700;">Hours</strong><br>
          Mon-Fri: 9am - 6pm EST
        </p>
      </div>
    </div>

    <div class="footer-bottom">
      <p>&copy; 2025 Core Visuals NYC. All Rights Reserved.</p>
    </div>
  </div>
</footer>
```

**NEVER use**: `footer-content`, `footer-container`, `footer-brand`, `footer-links`, inline styles for footer, or any other footer structure.

---

## Image Requirements

### Main/Hero Image
- Cloudinary URL with `f_auto,q_auto` parameters
- Must be the same image used in Open Graph and Article Schema
- Alt text: Descriptive, keyword-rich, natural language

### In-Content Images
- Strategic placement between sections
- Each image should support the narrative
- Alt text describes the image AND its context
- Use `loading="lazy"` for all images except hero
- Class: `article-image`

### Image Selection Criteria
- **Show actual work** when possible, not stock photos
- **Match the content**: If discussing collaboration, show collaboration
- **Natural lighting**: Prefer natural light over studio when appropriate
- **Diverse representation**: Show inclusive teams

---

## Content Structure

### Opening Hook (Required)
Start with a specific observation, story, or counterintuitive statement. NOT a generic intro.

**Bad**: "In today's competitive market, photography is important for businesses."
**Good**: "Here's something I've noticed after photographing offices for NYC companies for the past several years: the companies struggling to hire aren't necessarily offering worse compensation or benefits. They just look worse online."

### Body Sections
- 5-8 H2 sections typically
- Each section should flow into the next
- Use client stories and specific examples
- End sections with a transition thought

### Call-to-Action (Required)
- Styled CTA block near the end (before footer)
- Conversational, not salesy
- References the specific service/topic
- Links to contact page or relevant service page

```html
<div class="article-cta">
  <h3>[Specific Question/Statement]</h3>
  <p>[Brief explanation of what you offer related to this topic]</p>
  <a href="../contact.html" class="btn-white">[Clear Action]</a>
</div>
```

---

## Quality Checklist (Run BEFORE Committing)

### Content Quality
- [ ] Writing is conversational, not corporate
- [ ] Fewer than 3 bullet-point lists in entire post
- [ ] Real examples and stories included
- [ ] No marketing jargon or buzzwords
- [ ] Flows naturally paragraph to paragraph

### Technical Requirements
- [ ] Table of contents included (if 4+ sections)
- [ ] All H2 tags have anchor IDs matching ToC
- [ ] Standard footer-grid footer used
- [ ] Mobile padding is 24px (NOT 12px)
- [ ] All images have proper alt text
- [ ] Main image matches OG and Schema

### SEO & Meta
- [ ] Title tag is specific and keyword-rich
- [ ] Meta description is 150-160 chars
- [ ] Open Graph tags complete
- [ ] Article Schema complete
- [ ] Breadcrumb Schema complete
- [ ] Canonical URL matches actual URL

### Images
- [ ] Main image in hero section
- [ ] Images placed strategically throughout
- [ ] All Cloudinary URLs have f_auto,q_auto
- [ ] All images except hero have loading="lazy"
- [ ] Alt text is descriptive and natural

---

## Common Mistakes (AVOID THESE)

1. **Using wrong footer structure** - Always use footer-grid with 4 columns
2. **12px mobile padding** - Must be 24px for readability
3. **Forgetting table of contents** - Add it if 4+ H2 sections
4. **Mismatched images** - OG image, Schema image, and hero must match
5. **Missing anchor IDs** - All H2s need IDs if you have a ToC
6. **Too many bullet points** - Limit to 2-3 lists maximum per post
7. **Corporate jargon** - Write conversationally
8. **Generic examples** - Use specific client stories

---

## File Naming & Organization

### Blog Post Files
- Format: `blog/lowercase-with-hyphens.html`
- Keep names short but descriptive
- Include NYC when relevant for SEO

### Updating blog.html
After creating a new post, add it to `blog.html`:
```html
<article class="blog-card">
  <img src="[MAIN IMAGE]" alt="[DESCRIPTIVE ALT TEXT]" class="blog-card-image" loading="lazy">
  <div class="blog-card-content">
    <div class="blog-card-meta">[CATEGORY]</div>
    <h2>[TITLE]</h2>
    <p>[EXCERPT - 150 chars]</p>
    <a href="blog/[filename].html" class="blog-card-link">
      Read Article
      <span>→</span>
    </a>
  </div>
</article>
```

---

## Git Commit Messages

Format:
```
[Action] blog post title

- [Specific change 1]
- [Specific change 2]
- [Specific change 3]
```

Examples:
- "Add NYC office photography blog post"
- "Fix mobile padding on last 3 blog posts"
- "Update footer structure on prepare-team-event post"

---

## Reference Files

**Good Examples** (use these as reference):
- `blog/aerial-commercial-photography-nyc.html` - Perfect footer, ToC, structure
- `blog/color-psychology-corporate-branding-videos.html` - Good writing style, brand examples

**Template**:
- `.claude/blog-post-template.html` - Start here for new posts

**This Workflow**:
- `.claude/blog-writing-workflow.md` - YOU ARE HERE - Single source of truth

---

## Final Notes

- **Read this ENTIRE file before writing any blog post**
- **Check the template file** before starting
- **Reference a good example** to see it in action
- **Run the quality checklist** before committing
- **Never deviate from the standard footer structure**
- **Always use 24px mobile padding**
- **Include table of contents for 4+ sections**

If you're unsure about anything, check the good examples, not your memory.
