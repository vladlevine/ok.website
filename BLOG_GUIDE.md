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

### ⚠️ CRITICAL CONTENT RULE #1: NO FABRICATED DATA

**THIS IS THE HIGHEST PRIORITY - VIOLATION CAN RUIN THE ENTIRE PROJECT**

**NEVER Include:**
- ❌ Specific fabricated numbers: "After photographing 150 gallery openings..."
- ❌ Made-up statistics: "45% of gallery owners struggle..."
- ❌ Fake biographical facts: "I've been a photographer for 15 years..."
- ❌ Fabricated client names or case studies

**ALWAYS Use Instead:**
- ✅ Generic observations: "Many galleries struggle with..."
- ✅ Non-specific experiences: "From my experience with gallery openings..."
- ✅ General trends: "Most creatives find that..."

**Rule:** If tempted to write a specific number or personal fact, STOP and rephrase as a general observation.

---

### Blog Post Goals (Priority Order)

1. **SEO** - Rank for target keywords and drive organic traffic
2. **Natural, Human Feel** - Authentic images and copy, not corporate
3. **Entertaining & Easy** - Readable, engaging, respects reader's time

---

### Writing Voice & Tone

#### Conversational Authenticity
- Use casual, approachable language (like a real conversation)
- Avoid business jargon, buzzwords, corporate speak
- Use contractions naturally ("I'm," "don't," "we've")

#### Warm Deadpan Humor
- Subtle, observational humor delivered matter-of-factly
- Self-aware commentary on creative industry dynamics
- Example: "I specialize in making camera-shy executives look natural on screen, which is exactly as straightforward as it sounds"
- Avoid sarcasm or cynicism

#### Respectful Directness
- Get to the point quickly without unnecessary buildup
- Acknowledge reader's time and expertise
- Clear, straightforward language with warmth
- Avoid flattery or excessive compliments

#### Story-Driven
- Weave personal narrative into content
- Use specific examples rather than generic statements
- Reference real experiences (without fabricated details)

---

### The Core Principle

**Each post should feel unique and valuable to its specific audience.** The guidelines below provide a framework, not a rigid formula. SEO requirements are essential for visibility, but content should always prioritize genuine helpfulness and your authentic voice.

### Content Structure Approach

**Target Length:** 7-10 minute read (2,000-2,500 words)
- Posts longer than 2,500 words feel overwhelming
- Posts shorter than 2,000 words lack SEO depth
- If you have 4,000+ words, you have two posts

**Content Formula:** Main body of text + FAQ section = Complete article
- If it's not essential to main narrative or FAQ-worthy, cut it

**Layered Information Architecture:**
1. **Basic (Opening):** Relatable story/scenario, everyday language
2. **Intermediate (Core):** Clear definitions, practical examples, how-to guidance
3. **Advanced (Technical):** Specifications, equipment lists, technical workflows

---

### What NOT to Include

**❌ Excessive Detail Sections:**
- NO detailed pricing tiers with bullet lists
- NO unnecessary preparation lists ("Stay hydrated," "Get adequate sleep")
- NO over-detailed wardrobe sections (separate sections for men/women)
- NO excessive bullet lists (reads like checklist, not story)

**❌ Fabricated Case Studies:**
- NEVER invent testimonials or specific data points
- DON'T create fake "Chelsea Gallery increased sales by $185K"
- DO use theoretical framing: "If engagement improves from 1.5% to 3%..."
- DO discuss possibilities in conversational, analytical way

---

### Voice & Tone Guidelines (Detailed)

**Consider incorporating these elements:**
- Conversational writing that speaks directly to peers
- Honest discussions about pricing, challenges, and trade-offs
- Personal experience using "I" and "we" when appropriate
- Calling out industry misconceptions when relevant
- Actionable, specific advice
- Short, digestible paragraphs (typically 2-3 sentences)
- Natural breaking points with subheadings
- **Use narrative paragraphs instead of bullet lists in most chapters**

**Elements to generally avoid:**
- Corporate jargon or empty marketing speak
- Vague promises or unnecessary superlatives
- Hiding important details
- Passive voice when active would be clearer
- Walls of text without breaks
- Over-explaining obvious concepts
- **Excessive bullet lists in every section** (use sparingly, favor paragraphs)

---

### Narrative Flow (CRITICAL for Human Feel)

**The Problem:** AI models default to bullet points because they're trained to optimize for "readability," which they interpret as "lists." This makes content feel robotic and formulaic.

**The Solution:** Force narrative mode with specific structural instructions.

#### Required Narrative Techniques

**1. Use Continuous Narrative Flow**
- Write in long-form paragraphs that connect ideas
- Each paragraph should flow naturally into the next
- Use transitional phrases: "Think about what happens next," "Here's why that matters," "But there's more to it"
- Treat the post as a cohesive essay/article, not a summary or outline

**2. Vary Sentence Length (Burstiness)**
- Mix short punchy sentences with longer descriptive ones
- Example: "Speed matters. When you send photos while the event is fresh in clients' minds, it keeps momentum going and shows you're responsive—not just another vendor who disappears after the invoice is paid."
- Avoid robotic rhythm where every sentence is the same length

**3. Avoid Subheadings for Every Single Point**
- Don't break every idea into its own H3
- Let ideas breathe within paragraph groups
- Use subheadings only for major topic shifts
- Example: Instead of "What to Avoid" → "1. Logos" → "2. Patterns" → "3. Colors" as separate H3s, write it as flowing paragraphs

**4. Write in Conversational, Organic Tone**
- Use natural language patterns: "Here's the thing," "Think about it this way," "Let me explain"
- Include rhetorical questions that create dialogue feel
- Use em-dashes and parenthetical asides for conversational rhythm

#### When Bullet Lists ARE Appropriate

Bullet lists work well for:
- **Checklists and action items** ("Bring these items to your shoot")
- **Comparison lists** (pricing tiers, package options)
- **Technical specifications** (equipment lists, file formats)
- **Quick reference guides** (FAQ answers, troubleshooting steps)

Bullet lists DON'T work for:
- **Explaining concepts** (use narrative paragraphs)
- **Telling stories** (use flowing prose)
- **Making arguments** (use connected paragraphs)
- **Describing processes with nuance** (use paragraph form)

#### Example: Bullet-Heavy (BAD) vs. Narrative Flow (GOOD)

**❌ Bullet-Heavy (Feels AI-Generated):**
```
### Relationship Marketing Value of Professional Event Photos

- **Personalized follow-up content**—Send clients their photos with a thank-you message
- **Social proof for future clients**—Shows you invest in relationships
- **Content clients want to share**—Gets your brand visibility
- **Ongoing engagement touchpoints**—Keeps relationships active
```

**✅ Narrative Flow (Feels Human):**
```
Think about what happens after the event. You send clients their photos with a thank-you message—it's a natural reason to reach out that feels personal, not transactional. Those same high-quality event photos become social proof for prospective clients, showing that you invest in relationships beyond just closing deals. When you give clients professional photos they actually want to share, they'll post them on LinkedIn or use them internally. Your brand gets visibility without you having to ask for it.

The real value compounds over time. Feature those client photos (with permission) in newsletters, case studies, or anniversary posts months later—it keeps the relationship active long after the champagne glasses are cleared.
```

**Why the second works better:**
- Flows like someone talking to you
- Uses transitional phrases ("Think about," "The real value")
- Varies sentence length (short and long)
- Feels organic, not templated
- Same information, more engaging delivery

---

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
- 5+ questions recommended (not just 3-4)
- Questions should reflect actual searches
- Always include FAQPage schema markup

**FAQ best practices:**
- **Answer length: 80-120 words per answer** (not 40-60 words)
- Front-load keywords in questions and answers
- Provide specific examples and actionable advice
- Include reasonable pricing ranges where appropriate (avoid fabricated statistics)
- Link to related resources when helpful
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
- [ ] **Add "Published: DATE | Last Updated: DATE" to article-date** (standard feature)
- [ ] **Add Table of Contents with anchor links to all H2 sections** (manual HTML - standard feature)
- [ ] Optimize images through Cloudinary
- [ ] Add descriptive alt text to all images
- [ ] Implement lazy loading
- [ ] Add internal links to service pages
- [ ] Add 1-2 external authority links
- [ ] **Add Social Share Buttons section** (Twitter/X, LinkedIn, Email - HTML only, properly URL-encoded)
- [ ] **Add Related Posts Widget** (2-3 related articles with thumbnails)
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

## Advanced SEO Implementation & Risk Management

**Last Updated:** January 25, 2025

This section documents which advanced SEO features are safe to implement vs. which could break the website. Use this as a reference for future enhancement decisions.

### ✅ Already Implemented (Core SEO - Do Not Remove)

These features are live and working. Removing or modifying them will hurt rankings:

| Feature | Status | Notes |
|---------|--------|-------|
| SEO-Friendly URLs | ✅ Live | Clean URLs like `/portfolio.html`, `/blog/post-name.html` |
| Mobile Responsiveness | ✅ Live | Full mobile optimization with @media queries |
| XML Sitemap | ✅ Live | `/sitemap.xml` - Must update when adding pages |
| Canonical Tags | ✅ Live | Every page has `<link rel="canonical">` |
| Schema Markup | ✅ Live | Article, Breadcrumb, FAQ, LocalBusiness schemas |
| Title & Meta Tags | ✅ Live | Unique title/description per page |
| Header Hierarchy | ✅ Live | Proper H1-H6 structure |
| Image Alt Text | ✅ Live | All images have descriptive alt attributes |
| Robots.txt | ✅ Live | Controls crawler access |
| Author Bios | ✅ Live | Blog posts include author information |
| Breadcrumb Navigation | ✅ Live | Blog posts show Home > Blog > Article |

### 🟢 Safe to Add (Low Risk)

These features can be implemented without breaking anything:

#### 1. Last Updated Date Display
**Impact:** 6/10 | **Effort:** Low | **Risk:** None

**Why safe:** Just HTML + CSS, no JavaScript required

**Implementation:**
```html
<!-- Add to blog post after published date -->
<div class="article-date">
  Published: January 25, 2025 | Last Updated: January 25, 2025
</div>
```

**Schema update:**
```json
"datePublished": "2025-01-25",
"dateModified": "2025-01-25"
```

**Maintenance:** Update `dateModified` when making significant content updates (not typo fixes)

#### 2. Related Posts Widget Enhancement
**Impact:** 7/10 | **Effort:** Low | **Risk:** None

**Why safe:** Already have manual links, just improving presentation

**Current:** Manual "Read this next" links at article end
**Enhancement:** Add styled card grid with thumbnails

**No JavaScript needed** - just HTML/CSS in footer section

#### 3. Social Share Buttons
**Impact:** 4/10 | **Effort:** Low | **Risk:** None

**Why safe:** Simple HTML links, no third-party scripts

**Implementation:** Add share links that open in new window:
```html
<div class="share-buttons">
  <a href="https://twitter.com/intent/tweet?url=[URL]&text=[TITLE]">Twitter</a>
  <a href="https://www.linkedin.com/sharing/share-offsite/?url=[URL]">LinkedIn</a>
</div>
```

**Note:** Avoid third-party share widgets (AddThis, ShareThis) - they slow page load

---

### 🔴 Do NOT Implement (High Risk)

These features will break functionality or create maintenance nightmares:

#### 1. Table of Contents (Auto-Generated JavaScript)
**Impact:** 6/10 | **Risk:** ⚠️ HIGH

**Why dangerous:**
- Requires JavaScript injection into every blog post
- Could conflict with existing hamburger menu JavaScript (`script.js`)
- May cause Cumulative Layout Shift (CLS) if TOC loads after page render
- Could break mobile menu behavior or scroll animations

**Alternative:** Add manual HTML table of contents when needed:
```html
<div class="table-of-contents">
  <h3>Table of Contents</h3>
  <ul>
    <li><a href="#section-1">Section Title</a></li>
    <li><a href="#section-2">Section Title</a></li>
  </ul>
</div>
```

**Safe because:** No JavaScript, no layout shift, full control

#### 2. Comment Section
**Impact:** 5/10 | **Risk:** ⚠️ CRITICAL

**Why dangerous:**
- Requires backend database integration (not available on GitHub Pages)
- Opens major security vulnerabilities (spam, XSS attacks, SQL injection)
- Adds 3-5 seconds to page load time
- Requires constant moderation (high maintenance burden)
- GDPR compliance issues if storing user data

**Alternative:** Use email/contact form for reader questions, or link to social media discussions

**Decision:** Skip entirely - Not worth the risk/maintenance for a business blog

#### 3. Speed/Caching System & Build Process
**Impact:** 9/10 | **Risk:** ⚠️ HIGH

**Why dangerous:**
- CSS/JS minification could break CSS custom properties or functions
- Aggressive caching could prevent users from seeing updates
- Requires server configuration beyond GitHub Pages capabilities
- Could break existing clean HTML/CSS architecture

**Current setup is already optimized:**
- Cloudinary handles image optimization/compression automatically
- Clean, minimal HTML/CSS loads fast
- No heavy JavaScript frameworks
- Mobile-first responsive design

**Decision:** Current architecture is sufficient - Don't over-engineer

#### 4. 404 Redirect Manager
**Impact:** 6/10 | **Risk:** ⚠️ MEDIUM-HIGH

**Why dangerous:**
- Requires server configuration (`.htaccess` or Nginx rules)
- Could cause redirect loops if misconfigured
- GitHub Pages has limited redirect capabilities
- Could break existing navigation if rules conflict

**Alternative:**
- Maintain consistent URL structure (don't change blog post URLs)
- Use 404.html page with helpful navigation (already implemented)
- Monitor Google Search Console for broken links

---

### 📊 Implementation Priority Matrix

**Priority 1: Maintain What Works (Score 10/10)**
- Keep all existing SEO features functional
- Update sitemap.xml when adding new pages
- Maintain schema markup consistency

**Priority 2: Safe Enhancements (Score 7-8)**
- Add "Last Updated" dates to blog posts
- Improve related posts styling
- Consider social share buttons (simple HTML only)

**Priority 3: Skip High-Risk Features**
- Do not add auto-generated TOC
- Do not implement comment systems
- Do not modify caching/minification without testing environment

---

### 🔄 Future Enhancement Process

When considering new SEO features, follow this decision tree:

```
1. Does it require JavaScript?
   └─ YES → Could it conflict with existing menu/loading scripts?
      └─ YES → HIGH RISK - Test extensively or skip
      └─ NO → Proceed with caution
   └─ NO → Probably safe

2. Does it require backend/database?
   └─ YES → Cannot implement on GitHub Pages - Skip
   └─ NO → Proceed

3. Does it modify server configuration?
   └─ YES → Beyond our access - Skip
   └─ NO → Proceed

4. Could it affect page load speed?
   └─ YES → Test with PageSpeed Insights before deployment
   └─ NO → Proceed

5. Does it improve user experience AND SEO?
   └─ YES → Implement
   └─ NO → Reconsider necessity
```

**Testing Protocol Before Major Changes:**
1. Create test branch
2. Implement feature on single blog post
3. Test on mobile and desktop
4. Check JavaScript console for errors
5. Run PageSpeed Insights
6. Verify mobile menu still works
7. If all pass → Deploy to other pages
8. If any fail → Revert and document issue

---

### 📝 Maintenance Schedule

**Weekly:**
- Add new blog posts to sitemap.xml
- Update blog.html index page

**Monthly:**
- Review Google Search Console for crawl errors
- Check for broken links
- Update dateModified on posts with significant edits

**Quarterly:**
- Audit all schema markup still validates
- Review mobile responsiveness across devices
- Check PageSpeed Insights scores

**Yearly:**
- Review entire SEO strategy
- Consider new safe features that emerged
- Update this guide with lessons learned

---

## Standard Blog Post Features (Implementation Guide)

**Last Updated:** November 25, 2025

These features are now **standard** for all blog posts. Include them in every new post you create.

### 1. Table of Contents (Manual HTML)

**Location:** After first image, before first H2 section

**Purpose:** Helps readers navigate long posts and improves SEO with internal anchor links

**HTML:**
```html
<!-- Table of Contents -->
<div class="table-of-contents" style="background: #F9FAFB; padding: 32px; border-radius: 12px; margin: 40px 0;">
  <h3 style="margin: 0 0 20px; font-size: 18px; font-weight: 700; color: #0A0A0A;">Table of Contents</h3>
  <ol style="margin: 0; padding-left: 24px; line-height: 2;">
    <li><a href="#section-1" style="color: #0A66C2; text-decoration: none;">First Section Title</a></li>
    <li><a href="#section-2" style="color: #0A66C2; text-decoration: none;">Second Section Title</a></li>
    <li><a href="#section-3" style="color: #0A66C2; text-decoration: none;">Third Section Title</a></li>
  </ol>
</div>
```

**Add ID attributes to each H2:**
```html
<h2 id="section-1">First Section Title</h2>
<h2 id="section-2">Second Section Title</h2>
<h2 id="section-3">Third Section Title</h2>
```

**ID naming conventions:**
- Use lowercase
- Replace spaces with hyphens
- Remove special characters
- Keep it short but descriptive
- Example: "What to Ask Your Photographer" → `#what-to-ask-photographer`

**When to include:**
- Posts with 5+ H2 sections
- Posts over 1,500 words
- How-to guides and comprehensive guides
- Any post where navigation would help readers

---

### 2. Last Updated Date Display

**Location:** Article header section, after article title and excerpt

**HTML:**
```html
<div class="article-date">Published: January 25, 2025 | Last Updated: January 25, 2025</div>
```

**Schema Update:**
```json
"datePublished": "2025-01-25",
"dateModified": "2025-01-25"
```

**Maintenance:** When making significant content updates (not typo fixes), update the "Last Updated" date and `dateModified` in schema.

---

### 2. Social Share Buttons

**Location:** After main article content, before article-cta section

**CSS (add to `<style>` section):**
```css
/* Social Share Buttons */
.social-share {
  margin: 60px 0 40px;
  padding: 32px;
  background: #F9FAFB;
  border-radius: 12px;
  text-align: center;
}

.social-share h4 {
  font-size: 16px;
  font-weight: 700;
  color: #0A0A0A;
  margin: 0 0 20px;
  text-transform: uppercase;
  letter-spacing: 0.05em;
}

.share-buttons {
  display: flex;
  gap: 12px;
  justify-content: center;
  flex-wrap: wrap;
}

.share-button {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 12px 24px;
  background: #FFFFFF;
  color: #374151;
  text-decoration: none;
  border-radius: 8px;
  font-size: 14px;
  font-weight: 600;
  transition: all 0.3s ease;
  border: 1px solid #E5E7EB;
}

.share-button:hover {
  transform: translateY(-2px);
  box-shadow: 0 4px 12px rgba(0,0,0,0.1);
}

.share-button.twitter {
  background: #1DA1F2;
  color: #FFFFFF;
  border-color: #1DA1F2;
}

.share-button.linkedin {
  background: #0A66C2;
  color: #FFFFFF;
  border-color: #0A66C2;
}

.share-button.email {
  background: #374151;
  color: #FFFFFF;
  border-color: #374151;
}

@media (max-width: 768px) {
  .share-buttons {
    flex-direction: column;
  }

  .share-button {
    width: 100%;
    justify-content: center;
  }
}
```

**HTML (replace URL and TITLE):**
```html
<!-- Social Share Buttons -->
<div class="social-share">
  <h4>Share This Article</h4>
  <div class="share-buttons">
    <a href="https://twitter.com/intent/tweet?url=https://corevisualsnyc.com/blog/YOUR-POST-SLUG.html&text=YOUR%20ENCODED%20TITLE" target="_blank" rel="noopener" class="share-button twitter">
      <span>𝕏</span> Share on Twitter
    </a>
    <a href="https://www.linkedin.com/sharing/share-offsite/?url=https://corevisualsnyc.com/blog/YOUR-POST-SLUG.html" target="_blank" rel="noopener" class="share-button linkedin">
      <span>in</span> Share on LinkedIn
    </a>
    <a href="mailto:?subject=YOUR%20TITLE&body=I%20thought%20you%27d%20find%20this%20article%20interesting%3A%20https://corevisualsnyc.com/blog/YOUR-POST-SLUG.html" class="share-button email">
      <span>✉</span> Share via Email
    </a>
  </div>
</div>
```

**URL Encoding:** Use an online URL encoder for title/text parameters (spaces → %20, special chars → encoded equivalents)

---

### 3. Related Posts Widget

**Location:** After social share buttons, before article-cta section

**CSS (add to `<style>` section):**
```css
/* Related Posts Widget */
.related-posts {
  margin: 60px 0;
  padding: 40px;
  background: #FFFFFF;
  border: 1px solid #E5E7EB;
  border-radius: 12px;
}

.related-posts h4 {
  font-size: 20px;
  font-weight: 700;
  color: #0A0A0A;
  margin: 0 0 24px;
}

.related-posts-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 20px;
}

.related-post-item {
  display: flex;
  gap: 16px;
  padding: 16px;
  background: #F9FAFB;
  border-radius: 8px;
  text-decoration: none;
  color: inherit;
  transition: all 0.3s ease;
}

.related-post-item:hover {
  background: #F3F4F6;
  transform: translateX(4px);
}

.related-post-image {
  width: 80px;
  height: 80px;
  object-fit: cover;
  border-radius: 6px;
  flex-shrink: 0;
}

.related-post-content h5 {
  font-size: 16px;
  font-weight: 600;
  color: #0A0A0A;
  margin: 0 0 8px;
  line-height: 1.4;
}

.related-post-meta {
  font-size: 13px;
  color: #6B7280;
}

@media (max-width: 768px) {
  .related-posts {
    padding: 24px;
  }

  .related-post-item {
    flex-direction: column;
  }

  .related-post-image {
    width: 100%;
    height: 120px;
  }
}
```

**HTML (add 2-3 related posts):**
```html
<!-- Related Posts -->
<div class="related-posts">
  <h4>Related Articles</h4>
  <div class="related-posts-grid">
    <a href="related-post-slug.html" class="related-post-item">
      <img src="CLOUDINARY_IMAGE_URL" alt="Related Post Title" class="related-post-image">
      <div class="related-post-content">
        <h5>Related Post Title</h5>
        <p class="related-post-meta">Category • X min read</p>
      </div>
    </a>
    <a href="another-related-post.html" class="related-post-item">
      <img src="CLOUDINARY_IMAGE_URL" alt="Another Post Title" class="related-post-image">
      <div class="related-post-content">
        <h5>Another Post Title</h5>
        <p class="related-post-meta">Category • X min read</p>
      </div>
    </a>
  </div>
</div>
```

**Choosing Related Posts:**
- Same category (Corporate Photography, Event Photography, etc.)
- Similar topics (if about headshots, link to headshot ROI or office photography)
- Complementary content (if pricing guide, link to ROI or preparation guide)
- Mix of short and long reads for variety

---

**Questions or Suggestions?**
This is a living document. As we learn what works (and what doesn't), we'll continue refining these guidelines.
