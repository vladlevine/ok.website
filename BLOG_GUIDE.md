# Core Visuals NYC - Blog Writing Guide

**Last Updated:** January 16, 2025
**Version:** 2.0 (Flexible & Future-Ready)

---

## Table of Contents
1. [Website Overview](#website-overview)
2. [Development Workflow](#development-workflow)
3. [Blog Writing Philosophy](#blog-writing-philosophy)
4. [SEO Requirements (Non-Negotiable)](#seo-requirements-non-negotiable)
5. [Content Structure Options](#content-structure-options)
6. [Content Accuracy & Risk Management](#content-accuracy--risk-management)
7. [Strategic Content Direction](#strategic-content-direction)
8. [Beyond the Guidelines](#beyond-the-guidelines)
9. [Image Sourcing & Attribution](#image-sourcing--attribution)
10. [Technical Specifications](#technical-specifications)
11. [Publishing Checklist](#publishing-checklist)

---

## Website Overview

### Domain & Hosting
- **Primary Domain**: corevisualsnyc.com
- **GitHub Repository**: vladlevine/ok.website
- **Branch**: `claude/branch-4-01RnBi2WecBgc3KmFy16PVU9`
- **Image CDN**: Cloudinary (dtuxu64zp account)

### Brand Colors
- **Gold**: #D4AF37 (primary brand color, links, accents)
- **Cyan**: #06B6D4 (secondary accent)
- **Magenta**: #EC4899 (tertiary accent)
- **Black**: #0A0A0A (text)
- **White**: #FFFFFF (backgrounds, light text)
- **Gray**: #6B7280 (secondary text)

### Typography
- **Font**: Inter (400, 500, 600, 700, 800 weights)
- **Headings**: 800 weight
- **Body**: 400 weight
- **Bold**: 700 weight

---

## Development Workflow

### Current Workflow (Active)
**Status:** ✅ In Use

Currently, blog posts are created as **standalone HTML files** in the `/blog/` directory.

**When creating a new blog post:**
1. Create complete HTML file with full structure (header, footer, schemas)
2. Save as `/blog/descriptive-slug.html`
3. Add entry to `sitemap.xml`
4. Add card to `blog.html` index page
5. Commit and push

**Advantages:**
- Simple, no build process
- Direct deployment
- Full control over every detail

**Disadvantages:**
- Repetitive code across posts
- Site-wide style changes require editing multiple files
- Harder to maintain consistency at scale

### Future Workflow (Planned)
**Status:** 📋 Documentation Only - Not Yet Implemented

**Golden Rule:** To ensure our website is scalable, maintainable, and high-performing, we will eventually migrate to a **Separation of Concerns** architecture.

**When SSG is implemented, blog posts will be:**
1. Written as **Markdown (.md) files** with YAML front matter
2. Saved in `/content/posts/` directory
3. Automatically wrapped in master templates by static site generator
4. Built into final HTML files during deployment

**Example Markdown file structure:**
```markdown
---
title: "Professional Headshots ROI: LinkedIn & Recruiting Impact"
description: "Data-driven breakdown of headshot ROI for LinkedIn, recruiting, and sales"
date: 2025-01-15
category: "Corporate Photography"
heroImage: "https://res.cloudinary.com/dtuxu64zp/image/upload/v1763057059/business_headshot_1.jpg"
keywords: ["professional headshots NYC", "headshot ROI", "LinkedIn headshots"]
---

## The LinkedIn Numbers (They're Wild)

LinkedIn's own data shows that profiles with professional photos get 14x more profile views...
```

**Advantages:**
- Write content once, templates handle structure
- Site-wide changes update all posts instantly
- Cleaner content files, easier to write
- Better separation of content and presentation

**Migration Requirements (when ready):**
- Choose SSG (Jekyll, Hugo, Eleventy, etc.)
- Create layout/template files
- Set up build process
- Convert existing posts to Markdown
- Test and deploy

**Until SSG is implemented:** Continue using current HTML workflow.

---

## Blog Writing Philosophy

### The Core Principle
**Each post should feel unique and valuable to its specific audience.** The guidelines below provide a framework, not a rigid formula. SEO requirements are essential for visibility, but content should always prioritize genuine helpfulness and your authentic voice.

### Voice & Tone Guidelines

**Consider incorporating these elements:**
- Conversational writing that speaks directly to peers
- Honest discussions about pricing, challenges, and trade-offs
- Personal experience using "I" and "we" when appropriate
- Calling out industry misconceptions when relevant
- Actionable, specific advice
- Short, digestible paragraphs (typically 2-3 sentences)
- Natural breaking points with subheadings

**Elements to generally avoid:**
- Corporate jargon or empty marketing speak
- Vague promises or unnecessary superlatives
- Hiding important details
- Passive voice when active would be clearer
- Walls of text without breaks
- Over-explaining obvious concepts

### Opening Approaches

**Example of an engaging opening:**
```
Look, I get it. You see those sweeping aerial shots of Manhattan skylines and think
"we need that for our marketing." And sometimes, you're right. But after shooting
hundreds of commercial projects in NYC—both aerial and ground-level—I can tell you
that drone photography is oversold about 60% of the time.
```

**Example of a less effective opening:**
```
Aerial photography has become increasingly popular in recent years, offering unique
perspectives for businesses. This comprehensive guide will explore the various
applications and benefits of drone photography services.
```

**The key difference:** The first acknowledges the reader's perspective and offers experienced insight. The second feels generic and impersonal.

---

## SEO Requirements (Non-Negotiable)

These are **strict requirements** for every blog post. SEO is how people find your content.

### Essential Elements Checklist

✅ **Title Tag:** 50-60 characters, includes primary keyword and location when relevant
✅ **Meta Description:** 150-160 characters, compelling benefit statement
✅ **Keywords:** 3-5 relevant keywords naturally integrated
✅ **Canonical URL:** Points to correct blog post URL
✅ **Open Graph Tags:** Complete set (title, description, url, image, type=article)
✅ **Article Schema:** Complete JSON-LD markup with author, publisher, dates
✅ **Breadcrumb Schema:** Home > Blog > Post structure
✅ **FAQ Schema:** When including FAQ section (highly recommended)
✅ **H1 Tag:** Single H1 (the post title in article-header)
✅ **H2 Tags:** Section headings with id attributes for anchor links
✅ **H3 Tags:** Subsection headings as needed
✅ **Image Alt Text:** Descriptive, includes relevant keywords
✅ **Image Optimization:** All images via Cloudinary with f_auto, q_auto transformations
✅ **Lazy Loading:** loading="lazy" on all images except above-fold hero
✅ **Mobile Responsive:** Proper breakpoints at 768px and 1400px

### Keyword Placement Strategy

**Primary keyword should naturally appear in:**
- Title tag
- H1
- First paragraph
- At least one H2
- Meta description
- URL slug
- Image alt text where relevant

**Secondary keywords throughout:**
- H2 and H3 tags
- Body paragraphs (organically, not stuffed)
- Internal link anchor text
- Related services section

**Avoid:**
- Keyword stuffing (unnatural repetition)
- Exact match anchor text for all internal links
- Forcing keywords where they don't fit naturally

---

## Content Structure Options

These are **flexible elements** to consider based on post topic and length. Not every post needs every element.

### Table of Contents
**Consider when:**
- Post is 1500+ words
- Multiple distinct sections
- Reader might want to jump to specific topic

**Can skip when:**
- Short, focused posts (800-1200 words)
- Single topic exploration
- Natural flow doesn't require jumping

**Implementation:**
```html
<div style="background: #F9FAFB; border-left: 4px solid #D4AF37; padding: 32px; margin: 40px 0; border-radius: 8px;">
  <h3>Table of Contents</h3>
  <ul>
    <li><a href="#section-id">Section Title</a></li>
  </ul>
</div>
```

### Images
**Hero image:**
- Often works well but not mandatory
- Should be compelling and relevant
- 1200px+ width, Cloudinary optimized

**In-content images:**
- Add every 2-3 sections for visual break
- Only include if they add value (not decoration)
- 800px+ width, lazy loaded
- Always include descriptive alt text

**Quality over quantity:**
- 2-3 strong images > 10 mediocre stock photos
- Your own work > generic stock
- Relevant diagrams/screenshots > random office photos

### Callout Boxes
**Use for:**
- Key insights or warnings
- Real client examples with specific numbers
- Important caveats or considerations

**Don't overuse:**
- 1-2 per post typically sufficient
- Should feel special, not routine
- Each should deliver genuine value

**Implementation:**
```html
<div class="article-callout">
  <p><strong>Real numbers:</strong> A client running a $50,000 annual conference...</p>
</div>
```

### CTA Sections
**Include when:**
- Natural service connection exists
- Reader likely ready to take action
- Post demonstrates specific expertise

**Position:**
- Before FAQ section, or
- At logical conclusion point, or
- After demonstrating value

**Vary messaging:**
- Match CTA to post topic
- Different calls for different content types
- Don't use identical CTAs in every post

### FAQ Section
**Highly recommended for SEO:**
- Excellent for appearing in Google's "People also ask"
- 3-4 questions typically optimal
- Questions should reflect actual searches
- Always include FAQPage schema markup

**FAQ best practices:**
- Answer concisely (2-3 sentences)
- Include specific numbers/pricing where appropriate
- Link to related resources
- Use <strong> tags for key points

### Related Services
**Purpose:**
- Internal linking for SEO
- Lead readers to relevant services
- Cross-promote related offerings

**Implementation:**
- Link to 2-3 relevant service pages
- Use card format for visual appeal
- Match services to actual post content
- Don't force unrelated links

---

## Content Accuracy & Risk Management

**CRITICAL:** Always verify pricing and statements against actual service pages before publishing.

### Before Writing Any Blog Post

**1. Check Service Pages First**
- Read `service-event-coverage.html`, `service-corporate-content.html`, `service-custom-projects.html`
- Note actual package prices, hourly rates, deliverables
- Identify how services are positioned and described
- Match blog post pricing ranges to actual offerings

**2. Verify Pricing Alignment**
- ❌ **BAD**: Blog says "$200-350/hour professional tier" when you actually charge $850+/hour
- ✅ **GOOD**: Blog pricing tiers position your actual rates in the appropriate category
- Blog posts should use pricing RANGES that make your actual prices look reasonable
- Never accidentally price yourself out by positioning lower-cost competitors as "premium"

### Avoid Future Traps - Sensitive Topics

**Pricing Statements:**
- ✅ Use: "ranges from $X to $Y depending on..." (gives flexibility)
- ❌ Avoid: "always costs exactly $X" (locks you into specific pricing)
- ✅ Use: "typically see 3-5x ROI" (reasonable range)
- ❌ Avoid: "guaranteed 500% ROI" (impossible promise, legal liability)
- ✅ Use: "most conferences budget 5-8% for photography" (industry guidance)
- ❌ Avoid: "you should never pay more than $X" (contradicts your own pricing)

**Financial Claims:**
- ✅ Use: "one client secured 2 additional sponsor renewals" (specific example, anecdotal)
- ❌ Avoid: "all clients double their sponsors" (measurable claim you can't prove)
- ✅ Use: "LinkedIn profiles with photos get 14x more views according to LinkedIn data" (cited source)
- ❌ Avoid: "I guarantee your LinkedIn engagement will increase 14x" (promise you can't control)

**Controversial Statements:**
- ❌ Avoid: politics, religion, hot-button social issues
- ❌ Avoid: negative statements about specific competitors or companies
- ❌ Avoid: absolute claims about industries you don't know deeply
- ✅ Stick to: photography, events, corporate content, NYC business topics

**Legal/Regulatory:**
- ✅ Link to authority sources (e.g., FAA.gov for drone regulations)
- ❌ Avoid: giving definitive legal advice ("you must..." or "it's illegal to...")
- ✅ Use: "FAA Part 107 certification is required for commercial drone work"
- ❌ Avoid: "you can fly drones anywhere in NYC without permits" (false, liability risk)

### Red Flags Checklist - Do NOT Publish If Post Contains:

- [ ] Pricing that contradicts service page pricing
- [ ] Guaranteed ROI percentages without "typical" or "average" qualifiers
- [ ] Absolute statements about competitors ("they always..." or "they never...")
- [ ] Legal advice presented as fact without citing sources
- [ ] Promises you can't control ("your photos will go viral")
- [ ] Industry statistics without sources
- [ ] Negative statements about specific companies or people
- [ ] Political, religious, or controversial non-business topics
- [ ] Claims that could be disproven with simple fact-checking

### Self-Protection Language Patterns

**Use these qualifiers:**
- "In my experience..."
- "I've found that..."
- "Most clients see..."
- "Typical range is..."
- "According to [source]..."
- "One client example..."
- "Industry data suggests..."

**Avoid these absolutes:**
- "Always" / "Never"
- "Guaranteed" / "Everyone"
- "The only way" / "You must"
- "Proven to"

### Pricing Strategy Example

**Your actual packages:** $5,000-10,000
**Blog positioning:** Place in "Premium Coverage: $7,500-12,000" tier
**Explain value:** Multi-photographer teams, fast turnaround, sponsor documentation
**Justify with ROI:** "$100K conference with $40-60K sponsorships needs $8-10K coverage"

**This makes readers think:**
"Oh, $8K for conference photography makes sense for a serious event" (not "That's overpriced")

### Cross-Reference Requirement

Before publishing, verify:
- [ ] Pricing ranges align with service pages
- [ ] Claims match actual deliverables
- [ ] No contradictions with existing content
- [ ] All statistics have sources
- [ ] No legal/financial advice beyond your expertise

**Bottom Line:** Blog posts should make your actual services look like smart investments, not expensive outliers. Always position pricing to make readers think "this makes sense for professional work" rather than "they're charging way more than the market."

---

## Strategic Content Direction

While we don't prescribe a rigid content calendar, these strategic principles help ensure posts work together effectively.

### Topic Clusters

**Concept:** Group related posts around core topics to build topical authority.

**Example clusters for Core Visuals NYC:**
- **Event Photography Cluster:** Conference photography pricing, venue considerations, ROI metrics, sponsor documentation
- **Corporate Headshots Cluster:** LinkedIn headshots ROI, team photography logistics, executive portraits, personal branding
- **Video Content Cluster:** Video business cards, brand videos, founder stories, testimonial videos
- **NYC-Specific Cluster:** Best event venues for photography, NYC photography permits, seasonal considerations

**Benefits:**
- Google recognizes you as an authority on the topic
- Readers discover related content
- Internal linking structure strengthens SEO
- Creates comprehensive coverage of subject

### Interlinking Strategy

**When you have multiple posts in same cluster:**
- Link newer posts to older pillar content
- Update older posts to link to new supporting content
- Use varied, descriptive anchor text
- Create "hub" posts that link to all related content

**Avoid:**
- Writing 10 posts targeting the exact same keyword (cannibalization)
- Generic anchor text ("click here", "read more")
- Forcing unrelated links just to increase link count

### Topic Selection Principles

**Good topic indicators:**
- You have unique insight or experience
- Keyword has 100-1,000 monthly searches
- Topic naturally connects to your services
- You can provide specific, actionable advice
- Addresses common client questions

**Topics to avoid:**
- Purely theoretical concepts with no service connection
- Oversaturated keywords you can't realistically rank for
- Topics outside your expertise
- Content that contradicts your positioning

---

## Beyond the Guidelines

Always ask: **"Can we make this post even better?"**

### Consider These Enhancements

**Interactive Elements:**
- ROI calculators relevant to the topic
- Before/after image comparisons
- Budget planning tools
- Comparison matrices (e.g., photographer types, package tiers)

**Data Visualization:**
- Charts illustrating pricing ranges
- Infographics for processes (e.g., "How to Plan Conference Coverage")
- Timeline graphics
- Cost breakdown tables

**Social Proof:**
- Client testimonials relevant to topic
- Specific case study results
- Industry recognition
- Portfolio examples

**Content Depth Variations:**
- **Quick guides (500-800 words):** Single focused topic, fast read
- **Comprehensive guides (1500-2500 words):** Deep dive, multiple angles
- **Series posts:** Multi-part deep exploration
- **Update posts:** Revisit and refresh older content with new insights

**Engagement Features:**
- Downloadable checklists or templates
- Email opt-in for detailed guides
- Social sharing prompts
- Question/comment sections

---

## Link Strategy

### Internal Links (3-5 per post)

**Link to:**
- Relevant service pages (primary goal)
- Related blog posts (once catalog grows)
- Case studies when relevant
- Contact page for CTAs

**Best practices:**
- Use descriptive anchor text ("conference photography packages" not "click here")
- Style with brand gold (#D4AF37)
- Open in same tab (internal navigation)
- Vary anchor text to avoid repetition

### External Links (1-2 per post)

**Link to authority sources when they add genuine value:**

**Examples might include:**
- Government resources (FAA.gov for drone regulations, SBA.gov for business guidance)
- Industry associations (ASMP, PPA when discussing photography standards)
- Academic research or studies
- Major news outlets for statistics
- Official documentation (LinkedIn for LinkedIn data, Google for Google features)

**Implementation:**
- Always use `rel="noopener"` for security
- Consider `target="_blank"` for user experience
- Link text should describe destination
- Must genuinely enhance understanding

**Don't:**
- Link to competitors
- Link to low-quality or questionable sources
- Include affiliate links without disclosure
- Link just to have external links

---

## Image Sourcing & Attribution

### Priority Order

**1. Your Own Photography (70% goal)**
- Actual client work (with permission/anonymized)
- Behind-the-scenes shots
- Equipment and setup photos
- NYC location shots
- Most authentic, builds brand trust

**2. Free Stock Photography (25%)**
- **Unsplash**: https://unsplash.com (high-quality, free commercial use)
- **Pexels**: https://pexels.com (large library, business scenes)
- **Pixabay**: https://pixabay.com (backup option)
- All free for commercial use, no attribution required (but we provide it anyway)

**3. AI Generation (5%)**
- For specific concepts you can't photograph
- Midjourney, DALL-E 3, Leonardo.ai
- Use sparingly, only when other options don't work

### Photo Attribution Guidelines

**IMPORTANT:** Clearly distinguish between your photography and stock photography.

**For posts with YOUR photos:**
Add attribution section at bottom (before "Back to Blog" link):

```html
<!-- Photo Attribution -->
<div class="photo-attribution">
  <p><strong>Photo Credits:</strong> Professional [headshot/event/corporate] images
  in this article photographed by Core Visuals NYC. Select stock photography sourced
  from <a href="https://unsplash.com" target="_blank" rel="noopener">Unsplash</a>,
  <a href="https://pexels.com" target="_blank" rel="noopener">Pexels</a>, and
  <a href="https://pixabay.com" target="_blank" rel="noopener">Pixabay</a> for
  illustrative purposes.</p>
</div>
```

**For posts with ONLY stock photos:**
```html
<div class="photo-attribution">
  <p><strong>Photo Credits:</strong> Stock photography sourced from
  <a href="https://unsplash.com" target="_blank" rel="noopener">Unsplash</a>,
  <a href="https://pexels.com" target="_blank" rel="noopener">Pexels</a>, and
  <a href="https://pixabay.com" target="_blank" rel="noopener">Pixabay</a> for
  illustrative purposes.</p>
</div>
```

**CSS (already in posts):**
```css
.photo-attribution {
  margin-top: 80px;
  padding-top: 24px;
  border-top: 1px solid #E5E7EB;
  font-size: 12px;
  color: #9CA3AF;
  line-height: 1.6;
}
```

**Why this matters:**
- Maintains credibility (don't take credit for stock photos)
- Gives proper attribution to free sources
- Highlights your actual work
- Builds trust with readers

---

## Technical Specifications

### File Naming
- Format: `descriptive-keyword-focused-slug.html`
- Keep URLs readable and under 60 characters
- All lowercase with hyphens
- Match primary keyword when possible

**Examples:**
- ✅ `conference-photography-nyc-pricing.html`
- ✅ `professional-headshots-roi.html`
- ❌ `blog-post-1.html`
- ❌ `my_awesome_photography_article_about_events.html`

### Responsive Width Settings

**Article content widths:**
```css
.article-content {
  max-width: 50%;  /* Large screens >1400px */
}

@media (max-width: 1400px) {
  .article-content {
    max-width: 70%;  /* Medium screens 768-1400px */
  }
}

@media (max-width: 768px) {
  .article-content {
    max-width: 100%;  /* Mobile <768px */
    padding: 0 12px;
  }
}
```

### Image Handling

**Cloudinary base URL:**
```
https://res.cloudinary.com/dtuxu64zp/image/upload/
```

**Recommended transformations:**
```
f_auto,q_auto,w_1200  // Hero images
f_auto,q_auto,w_800   // In-content images
```

**Full example:**
```html
<img src="https://res.cloudinary.com/dtuxu64zp/image/upload/f_auto,q_auto/v1763057059/business_headshot_1.jpg"
     alt="Professional business headshot NYC - corporate photography"
     class="article-image"
     loading="lazy">
```

**Best practices:**
- Always use f_auto (automatic format selection)
- Always use q_auto (automatic quality optimization)
- Specify width for performance (w_800, w_1200)
- Descriptive alt text for accessibility and SEO
- loading="lazy" except hero images

### Schema Markup Requirements

**Always include these three:**

**1. Article Schema**
```json
{
  "@context": "https://schema.org",
  "@type": "Article",
  "headline": "Post Title",
  "description": "Post description",
  "image": "Hero image URL",
  "author": {
    "@type": "Person",
    "name": "Vlad Levine"
  },
  "publisher": {
    "@type": "Organization",
    "name": "Core Visuals NYC",
    "logo": {
      "@type": "ImageObject",
      "url": "https://corevisualsnyc.com/images/logo.png"
    }
  },
  "datePublished": "YYYY-MM-DD",
  "dateModified": "YYYY-MM-DD"
}
```

**2. Breadcrumb Schema**
```json
{
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [{
    "@type": "ListItem",
    "position": 1,
    "name": "Home",
    "item": "https://corevisualsnyc.com/"
  },{
    "@type": "ListItem",
    "position": 2,
    "name": "Blog",
    "item": "https://corevisualsnyc.com/blog.html"
  },{
    "@type": "ListItem",
    "position": 3,
    "name": "Post Title",
    "item": "https://corevisualsnyc.com/blog/slug.html"
  }]
}
```

**3. FAQPage Schema (when FAQ section included)**
```json
{
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [{
    "@type": "Question",
    "name": "Question text?",
    "acceptedAnswer": {
      "@type": "Answer",
      "text": "Answer text with specific details..."
    }
  }]
}
```

### Performance Considerations
- Inline critical CSS in `<style>` tags
- Cloudinary handles image optimization
- Lazy load all images except above-fold
- Preconnect to Google Fonts
- Minimize JavaScript (only essential functionality)

---

## Publishing Checklist

### Pre-Writing
- [ ] Research keyword opportunities (100-1000 monthly searches)
- [ ] Check service pages for pricing alignment
- [ ] Outline main points and structure
- [ ] Gather or identify relevant images
- [ ] Consider unique angle or insight to offer

### Writing Phase
- [ ] Write conversational, honest content
- [ ] Include specific examples or case studies
- [ ] Integrate keywords naturally
- [ ] Add pricing references that align with service pages
- [ ] Include data with sources
- [ ] Write compelling title and meta description

### Technical Implementation
- [ ] Create HTML file in `/blog/` directory
- [ ] Include all required schema markup (Article, Breadcrumb, FAQ)
- [ ] Optimize images through Cloudinary
- [ ] Add descriptive alt text to all images
- [ ] Implement lazy loading
- [ ] Add internal links to service pages
- [ ] Add 1-2 external authority links
- [ ] Include photo attribution if using stock images
- [ ] Verify responsive behavior on mobile

### SEO Verification
- [ ] Title tag 50-60 characters
- [ ] Meta description 150-160 characters
- [ ] Primary keyword in title, H1, first paragraph
- [ ] All H2 tags have id attributes for anchors
- [ ] Images have descriptive alt text
- [ ] Canonical URL correct
- [ ] Open Graph tags complete

### Pre-Publish Quality Check
- [ ] Run red flags checklist (no pricing contradictions, guarantees, etc.)
- [ ] Verify all links work
- [ ] Check that claims match actual deliverables
- [ ] Ensure statistics have sources
- [ ] Test mobile responsiveness
- [ ] Proofread for typos and clarity

### Publishing Steps
- [ ] Add entry to `sitemap.xml` with priority 0.6
- [ ] Add blog card to `blog.html` index page
- [ ] Git commit with descriptive message
- [ ] Git push to branch

### Post-Publishing
- [ ] Submit updated sitemap to Google Search Console
- [ ] Monitor initial indexing
- [ ] Consider social media promotion
- [ ] Update related posts with internal links (as catalog grows)
- [ ] Track keyword rankings after 2-4 weeks

---

## Writing Process Recommendations

### Start With Value
Before writing, ask:
- What unique insight can I offer?
- What specific problem am I solving?
- What would actually help someone searching for this?
- What's my honest take that others might not share?

### Write Naturally First, Optimize Second
1. Write the post in your natural voice
2. Tell the story or make the argument
3. Then go back and optimize for SEO
4. Don't let keyword requirements stifle authentic voice

### Vary Your Approach
- **Short posts (800-1200 words):** Quick, focused, actionable
- **Long posts (1800-2500 words):** Comprehensive, authoritative, detailed
- **Data-heavy posts:** Statistics, ROI calculations, pricing breakdowns
- **Story-driven posts:** Client examples, case studies, personal experience
- **How-to posts:** Step-by-step guides, checklists, frameworks

### Quality Over Quantity
**One excellent post per month > Four mediocre posts per month**

Better to publish:
- Content you're genuinely proud of
- Posts that showcase your expertise
- Material that actually helps readers
- Writing that feels authentic to you

Than to churn out formulaic content just to hit a quota.

---

## Remember: The Core Principle

**This guide provides a framework, not a formula.**

The SEO requirements are essential for visibility, but the content itself should always prioritize:
1. **Genuine helpfulness** to the reader
2. **Your authentic voice** and experience
3. **Specific, actionable insights** they can't get elsewhere
4. **Honest perspective** on pricing and trade-offs

The best blog posts combine:
- ✅ Solid SEO foundations (visibility)
- ✅ Genuine expertise (credibility)
- ✅ Authentic personality (memorability)
- ✅ Strategic positioning (business value)

Don't sacrifice any of these for the others. When in doubt, ask: **"Would I find this helpful if I were searching for this topic?"**

If yes, publish it. If no, keep refining until you can answer yes.

---

**Questions or Suggestions?**
This is a living document. As we learn what works (and what doesn't), we'll continue refining these guidelines.
