# Core Visuals NYC - Blog Writing Guide

Last Updated: January 15, 2025

## Table of Contents
1. [Website Overview](#website-overview)
2. [Blog Post Writing Guidelines](#blog-post-writing-guidelines)
3. [SEO Optimization Checklist](#seo-optimization-checklist)
4. [Technical Specifications](#technical-specifications)
5. [Content Strategy](#content-strategy)

---

## Website Overview

### Domain & Hosting
- **Primary Domain**: corevisualsnyc.com
- **GitHub Repository**: vladlevine/ok.website
- **Branch**: `claude/branch-4-01RnBi2WecBgc3KmFy16PVU9`
- **Image CDN**: Cloudinary (dtuxu64zp account)

### Site Structure
```
corevisualsnyc.com/
├── index.html (Homepage)
├── about.html
├── contact.html
├── portfolio.html
├── blog.html (Blog index)
├── blog/
│   └── aerial-commercial-photography-nyc.html (Example post)
├── service-event-coverage.html
├── service-corporate-content.html
├── service-custom-projects.html
├── case-study-tech-expo.html
├── case-study-nonprofit-golf.html
├── case-study-law-firm-photography.html
├── sitemap.xml
└── robots.txt
```

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

## Blog Post Writing Guidelines

### Voice & Tone

**DO:**
- Write conversationally, like you're talking to a peer
- Be direct and honest about pricing, challenges, and trade-offs
- Use "I" and "we" - speak from experience
- Call out industry BS when you see it
- Give actionable, specific advice
- Use short paragraphs (2-3 sentences max)
- Break up text with subheadings every 2-3 paragraphs

**DON'T:**
- Use corporate jargon or marketing speak
- Make vague promises or use superlatives ("the best," "amazing")
- Hide pricing or important details
- Write in passive voice
- Use long paragraphs or walls of text
- Over-explain obvious things

**Example Opening (Good):**
```
Look, I get it. You see those sweeping aerial shots of Manhattan skylines and think
"we need that for our marketing." And sometimes, you're right. But after shooting
hundreds of commercial projects in NYC—both aerial and ground-level—I can tell you
that drone photography is oversold about 60% of the time.
```

**Example Opening (Bad):**
```
Aerial photography has become increasingly popular in recent years, offering unique
perspectives for businesses. This comprehensive guide will explore the various
applications and benefits of drone photography services.
```

### Structure Template

Every blog post should follow this structure:

```html
<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">

  <!-- SEO Meta Tags -->
  <title>[Topic]: [Specific Benefit/Angle] | Core Visuals NYC</title>
  <meta name="description" content="[150-160 character compelling description with key benefit]">
  <meta name="keywords" content="[primary keyword NYC, secondary keyword, tertiary keyword]">

  <!-- Open Graph -->
  <meta property="og:type" content="article">
  <meta property="og:title" content="[Post Title]">
  <meta property="og:description" content="[Social media description]">
  <meta property="og:url" content="https://corevisualsnyc.com/blog/[slug].html">
  <meta property="og:image" content="[Hero image URL from Cloudinary]">

  <!-- Canonical URL -->
  <link rel="canonical" href="https://corevisualsnyc.com/blog/[slug].html">

  <!-- Article Schema -->
  <script type="application/ld+json">
  {
    "@context": "https://schema.org",
    "@type": "Article",
    "headline": "[Full Post Title]",
    "description": "[Post description]",
    "image": "[Hero image URL]",
    "author": {
      "@type": "Organization",
      "name": "Core Visuals NYC"
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
  </script>

  <!-- Breadcrumb Schema -->
  <script type="application/ld+json">
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
      "name": "[Post Title]",
      "item": "https://corevisualsnyc.com/blog/[slug].html"
    }]
  }
  </script>

  <!-- FAQ Schema (if applicable) -->
  <script type="application/ld+json">
  {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [{
      "@type": "Question",
      "name": "[Question text]",
      "acceptedAnswer": {
        "@type": "Answer",
        "text": "[Answer text]"
      }
    }]
  }
  </script>

  <!-- Fonts -->
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap" rel="stylesheet">

  <!-- Styles -->
  <link rel="stylesheet" href="../styles.css">

  <!-- Favicon -->
  <link rel="icon" type="image/svg+xml" href="data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><text y='.9em' font-size='90'>📸</text></svg>">

  <style>
    /* Article-specific styles */
    .article-header {
      background: linear-gradient(180deg, #0a0a0a 0%, #1a1a2e 100%);
      padding: 180px 40px 80px;
      text-align: center;
      color: #FFFFFF;
    }

    .article-meta {
      font-size: 13px;
      color: #D4AF37;
      font-weight: 700;
      text-transform: uppercase;
      letter-spacing: 0.1em;
      margin-bottom: 24px;
    }

    .article-header h1 {
      font-size: clamp(36px, 6vw, 56px);
      font-weight: 800;
      line-height: 1.2;
      margin: 0 0 24px;
      max-width: 50%;
      margin-left: auto;
      margin-right: auto;
      color: #FFFFFF;
    }

    @media (max-width: 1400px) {
      .article-header h1 {
        max-width: 70%;
      }
    }

    @media (max-width: 768px) {
      .article-header h1 {
        max-width: 100%;
        padding: 0 12px;
      }
    }

    .article-excerpt {
      font-size: 20px;
      color: #a3a3a3;
      max-width: 50%;
      margin: 0 auto 32px;
      line-height: 1.6;
    }

    @media (max-width: 1400px) {
      .article-excerpt {
        max-width: 70%;
      }
    }

    @media (max-width: 768px) {
      .article-excerpt {
        max-width: 100%;
        padding: 0 12px;
      }
    }

    .article-date {
      font-size: 15px;
      color: #6B7280;
    }

    .article-content {
      max-width: 50%;
      margin: 80px auto;
      padding: 0 40px;
    }

    @media (max-width: 1400px) {
      .article-content {
        max-width: 70%;
      }
    }

    .breadcrumb-nav {
      max-width: 50%;
      margin: 0 auto 40px;
      padding: 0 40px;
      font-size: 14px;
    }

    @media (max-width: 1400px) {
      .breadcrumb-nav {
        max-width: 70%;
      }
    }

    @media (max-width: 768px) {
      .article-content {
        max-width: 100%;
        padding: 0 12px;
        margin: 60px auto;
      }

      .breadcrumb-nav {
        max-width: 100%;
        padding: 0 12px;
      }
    }

    .article-content h2 {
      font-size: 36px;
      font-weight: 700;
      color: #0A0A0A;
      margin: 64px 0 24px;
      line-height: 1.2;
    }

    .article-content h3 {
      font-size: 28px;
      font-weight: 700;
      color: #0A0A0A;
      margin: 48px 0 20px;
    }

    .article-content p {
      font-size: 19px;
      line-height: 1.8;
      color: #1F2937;
      margin-bottom: 24px;
    }

    .article-content strong {
      color: #0A0A0A;
      font-weight: 700;
    }

    .article-content ul, .article-content ol {
      margin: 24px 0;
      padding-left: 32px;
    }

    .article-content li {
      font-size: 19px;
      line-height: 1.8;
      color: #1F2937;
      margin-bottom: 12px;
    }

    .article-image {
      width: 100%;
      border-radius: 12px;
      margin: 40px 0;
      box-shadow: 0 8px 32px rgba(0,0,0,0.1);
    }

    .article-callout {
      background: linear-gradient(135deg, rgba(212, 175, 55, 0.08) 0%, rgba(236, 72, 153, 0.08) 100%);
      border-left: 4px solid #D4AF37;
      padding: 32px;
      margin: 40px 0;
      border-radius: 8px;
    }

    .article-cta {
      background: linear-gradient(135deg, rgba(6, 182, 212, 0.08) 0%, rgba(212, 175, 55, 0.08) 100%);
      border: 2px solid #D4AF37;
      padding: 48px;
      border-radius: 12px;
      text-align: center;
      margin: 60px 0;
    }

    .article-cta h3 {
      font-size: 28px;
      font-weight: 700;
      margin-bottom: 16px;
      color: #0A0A0A;
    }

    .article-cta p {
      font-size: 18px;
      color: #1F2937;
      margin-bottom: 24px;
    }

    .btn-white {
      display: inline-block;
      padding: 18px 40px;
      font-size: 18px;
      font-weight: 700;
      background: #D4AF37;
      color: #FFFFFF;
      text-decoration: none;
      border-radius: 6px;
      transition: all 0.3s ease;
      box-shadow: 0 8px 24px rgba(212, 175, 55, 0.3);
    }

    .btn-white:hover {
      background: #c19b2e;
      transform: translateY(-2px);
      box-shadow: 0 12px 32px rgba(212, 175, 55, 0.4);
    }

    @media (max-width: 768px) {
      .article-header {
        padding: 140px 24px 60px;
      }
    }
  </style>
</head>
<body>

  <!-- Header & Navigation (copy from existing pages) -->

  <!-- Main Content -->
  <main id="main-content">

    <!-- Article Header -->
    <header class="article-header">
      <div class="article-meta">[Category: Photography/Video/Business]</div>
      <h1>[Post Title]<br>[Optional Second Line]</h1>
      <p class="article-excerpt">[2-sentence compelling summary]</p>
      <div class="article-date">Published [Month Day, Year]</div>
    </header>

    <!-- Breadcrumb -->
    <nav class="breadcrumb-nav">
      <a href="../index.html" style="color: #6B7280; text-decoration: none;">Home</a>
      <span style="color: #6B7280; margin: 0 8px;">/</span>
      <a href="../blog.html" style="color: #6B7280; text-decoration: none;">Blog</a>
      <span style="color: #6B7280; margin: 0 8px;">/</span>
      <span style="color: #0A0A0A;">[Post Title Short]</span>
    </nav>

    <!-- Article Content -->
    <article class="article-content">

      <!-- Opening Hook (2-3 paragraphs) -->
      <p>[Conversational opening that acknowledges reader's situation]</p>

      <p>[Direct statement of value/what you'll learn]</p>

      <!-- Table of Contents -->
      <div style="background: #F9FAFB; border-left: 4px solid #D4AF37; padding: 32px; margin: 40px 0; border-radius: 8px;">
        <h3 style="font-size: 18px; font-weight: 700; margin: 0 0 20px; color: #0A0A0A;">Table of Contents</h3>
        <ul style="list-style: none; padding: 0; margin: 0;">
          <li style="margin-bottom: 12px;"><a href="#section-1" style="color: #D4AF37; font-weight: 600; text-decoration: none;">[Section 1 Title]</a></li>
          <li style="margin-bottom: 12px;"><a href="#section-2" style="color: #D4AF37; font-weight: 600; text-decoration: none;">[Section 2 Title]</a></li>
          <li style="margin-bottom: 12px;"><a href="#section-3" style="color: #D4AF37; font-weight: 600; text-decoration: none;">[Section 3 Title]</a></li>
          <li style="margin-bottom: 0;"><a href="#faq" style="color: #D4AF37; font-weight: 600; text-decoration: none;">Frequently Asked Questions</a></li>
        </ul>
      </div>

      <!-- Hero Image (if applicable) -->
      <img src="[Cloudinary URL]" alt="[Descriptive alt text with keywords]" class="article-image" loading="lazy">

      <!-- Main Content Sections -->
      <h2 id="section-1">[Section Title]</h2>

      <p>[Content paragraphs...]</p>

      <h3>[Subsection Title]</h3>

      <p>[Content...]</p>

      <!-- Include images every 2-3 sections -->
      <img src="[Cloudinary URL]" alt="[Descriptive alt text]" class="article-image" loading="lazy">

      <!-- Callout boxes for important points -->
      <div class="article-callout">
        <p><strong>[Important point or direct advice]</strong></p>
      </div>

      <!-- More sections... -->

      <!-- CTA Section (before FAQ) -->
      <div class="article-cta">
        <h3>[CTA Headline]</h3>
        <p>[1-2 sentences about how you can help]</p>
        <a href="../contact.html" class="btn btn-white">[CTA Button Text]</a>
      </div>

      <!-- FAQ Section -->
      <div id="faq" style="margin-top: 80px;">
        <h2 style="margin-bottom: 40px;">Frequently Asked Questions</h2>

        <div style="margin-bottom: 32px;">
          <h3 style="font-size: 20px; font-weight: 700; margin-bottom: 12px; color: #0A0A0A;">[Question]</h3>
          <p>[Answer with <strong>bold pricing</strong> if applicable. Include <a href="[authority site]" target="_blank" rel="noopener" style="color: #D4AF37; font-weight: 600;">external links</a> where relevant.]</p>
        </div>

        <!-- 3-4 FAQ items total -->

      </div>

      <!-- Related Services -->
      <div style="margin-top: 80px; padding-top: 40px; border-top: 2px solid #E5E7EB;">
        <h3 style="font-size: 20px; font-weight: 700; margin-bottom: 24px; color: #0A0A0A;">Related Services</h3>
        <div style="display: grid; grid-template-columns: repeat(auto-fit, minmax(250px, 1fr)); gap: 20px;">
          <div style="background: #F9FAFB; padding: 24px; border-radius: 8px;">
            <h4 style="font-size: 16px; font-weight: 700; margin-bottom: 8px;"><a href="../[service-page].html" style="color: #D4AF37; text-decoration: none;">[Service Name]</a></h4>
            <p style="font-size: 14px; color: #6B7280; margin: 0;">[Brief service description]</p>
          </div>
          <!-- 2-3 related service cards -->
        </div>
      </div>

    </article>

    <!-- Back to Blog -->
    <div style="text-align: center; margin: 60px 0;">
      <a href="../blog.html" style="color: #D4AF37; font-weight: 600; font-size: 16px;">← Back to Blog</a>
    </div>

  </main>

  <!-- Footer (copy from existing pages) -->

  <!-- JavaScript (copy from existing pages) -->

</body>
</html>
```

---

## SEO Optimization Checklist

### Required Elements

- [ ] **Title Tag**: 50-60 characters, includes primary keyword and "NYC" or location
- [ ] **Meta Description**: 150-160 characters, compelling with benefit statement
- [ ] **Keywords**: 3-5 relevant keywords, primary keyword appears naturally in first paragraph
- [ ] **Canonical URL**: Points to correct blog post URL
- [ ] **Open Graph Tags**: title, description, url, image, type=article
- [ ] **Article Schema**: Complete JSON-LD with headline, description, author, publisher, dates
- [ ] **Breadcrumb Schema**: Home > Blog > Post
- [ ] **FAQ Schema**: If post has FAQ section (recommended)
- [ ] **H1 Tag**: Only one H1 (the post title in article-header)
- [ ] **H2 Tags**: Section headings with id attributes for anchor links
- [ ] **H3 Tags**: Subsection headings
- [ ] **Table of Contents**: With jump links to H2 sections
- [ ] **Internal Links**: 3-5 links to service pages (in gold color #D4AF37)
- [ ] **External Links**: 1-2 links to authority sites (FAA, government, industry associations) with rel="noopener"
- [ ] **Image Alt Text**: Descriptive, includes relevant keywords
- [ ] **Image Optimization**: All images via Cloudinary with lazy loading
- [ ] **FAQ Section**: 3-4 questions with structured markup
- [ ] **Related Services**: 2-3 internal link cards at bottom
- [ ] **Breadcrumb Navigation**: Visible at top of content
- [ ] **Mobile Responsive**: Test on mobile (100% width, 12px padding)
- [ ] **sitemap.xml**: Add new blog post entry with priority 0.6, changefreq monthly
- [ ] **blog.html**: Add blog card to index page

### Keyword Placement

1. **Primary keyword must appear in:**
   - Title tag
   - H1
   - First paragraph
   - At least one H2
   - Meta description
   - URL slug
   - Image alt text
   - FAQ questions

2. **Secondary keywords should appear in:**
   - H2 and H3 tags
   - Body paragraphs (naturally)
   - Internal link anchor text

### Link Guidelines

**Internal Links (3-5 per post):**
- Link to relevant service pages
- Link to related blog posts (when available)
- Use descriptive anchor text with keywords
- Style: `<a href="../service-page.html" style="color: #D4AF37; font-weight: 600;">[anchor text]</a>`

**External Links (1-2 per post):**
- Government sites (FAA.gov, SBA.gov)
- Industry associations
- Academic sources
- News outlets
- Use rel="noopener" for security
- Open in new tab with target="_blank"

---

## Technical Specifications

### File Naming
- Format: `[primary-keyword]-[location].html`
- Example: `aerial-commercial-photography-nyc.html`
- All lowercase, hyphens for spaces
- Keep under 60 characters

### Image Requirements

**Cloudinary Upload:**
```
Base URL: https://res.cloudinary.com/dtuxu64zp/image/upload/
Transformations: f_auto,q_auto,w_[width]
Format: Auto (Cloudinary chooses best format)
```

**Image Specs:**
- Hero images: 1200px width minimum
- In-content images: 800px width minimum
- File size: < 500KB after Cloudinary optimization
- Alt text: Descriptive, 10-15 words, includes keywords
- Loading: `loading="lazy"` on all images except hero

**Alt Text Formula:**
```
[Subject] [action/context] [location if relevant] [industry/category]

Example:
"Aerial drone photography of NYC construction site showing project scale and progress"
```

### Responsive Width Breakpoints

```css
/* Large screens (>1400px) */
.article-content { max-width: 50%; }

/* Medium screens (768-1400px) */
@media (max-width: 1400px) {
  .article-content { max-width: 70%; }
}

/* Mobile (<768px) */
@media (max-width: 768px) {
  .article-content {
    max-width: 100%;
    padding: 0 12px;
  }
}
```

### Schema Markup

Always include three schema types:

1. **Article Schema** - Basic post metadata
2. **Breadcrumb Schema** - Navigation structure
3. **FAQPage Schema** - If post has FAQ section

### Performance

- [ ] All CSS inlined in `<style>` tag (no external CSS for blog posts)
- [ ] Cloudinary handles image optimization
- [ ] Lazy loading on all images
- [ ] Fonts preconnected
- [ ] Minimal JavaScript (only header/nav)

---

## Content Strategy

### 100 Blog Post Topics

Organized by category for maximum SEO impact:

#### Event Photography & Video (20 posts)
1. Conference Photography NYC: What Actually Matters (2025 Pricing Guide)
2. How to Prepare Your Team for Event Photography Day
3. Networking Event Photography: Candid vs. Posed Shots (What Works)
4. Product Launch Photography Checklist: 15 Shots You Can't Miss
5. Gala Event Photography: Timeline Breakdown (Reception to Awards)
6. Corporate Event Video: 3-Minute Highlight Reel vs. Full Coverage
7. Trade Show Photography Strategy: Booth + Attendee Coverage
8. Investor Conference Photography: What VCs Actually Want to See
9. Annual Meeting Photography: Board-Approved Event Documentation
10. Award Ceremony Photography: Capturing the Moment Without Disruption
11. Panel Discussion Photography: Lighting Challenges Nobody Mentions
12. Corporate Retreat Photography: Team-Building Moments That Matter
13. Industry Summit Photography: Multi-Day Event Coverage Planning
14. Cocktail Reception Photography: Low-Light Corporate Events
15. Ribbon Cutting Ceremony Photography: Traditional Business Milestones
16. Groundbreaking Event Photography: Construction & Real Estate Projects
17. Partnership Announcement Photography: Press-Ready Business Moments
18. Corporate Holiday Party Photography: Professional Event Documentation
19. Client Appreciation Event Photography: Relationship Marketing Content
20. Executive Speaker Event Photography: Thought Leadership Moments

#### Corporate Headshots & Team Photography (15 posts)
21. NYC Corporate Headshots Pricing: Why $250/Person is the Real Starting Point
22. Law Firm Headshots: Traditional vs. Modern (What Actually Works in 2025)
23. Tech Startup Team Photos: Authentic Culture Over Stock Photography
24. LinkedIn Headshots NYC: Professional Standards That Actually Get Engagement
25. On-Location vs. Studio Headshots: What Makes Sense for Your Office
26. Executive Headshots: C-Suite Photography That Commands Authority
27. Remote Team Photography: Coordinating Headshots Across Multiple Cities
28. Seasonal Headshot Updates: When Your Team Should Refresh Photos
29. Department Team Photos: Beyond the Boring Group Shot
30. New Hire Headshot Process: Onboarding Photography Logistics
31. Headshot Retouching: Professional Standards vs. Over-Editing
32. What to Wear for Corporate Headshots: Practical Wardrobe Guide
33. Multi-Location Headshots: Fortune 500 Team Photography Coordination
34. Diversity in Corporate Photography: Authentic Team Representation
35. Professional Headshots ROI: LinkedIn, Website, and Recruiting Impact

#### Brand Video & Corporate Content (15 posts)
36. Corporate Brand Video Pricing NYC: $5,500 to $25,000+ (What You Get)
37. Company Culture Video: Recruiting Content That Actually Works
38. Customer Testimonial Videos: 5-Question Framework That Gets Results
39. Founder Story Videos: Personal Branding for C-Suite Executives
40. Office Tour Videos: Workspace Content for Recruiting & Real Estate
41. Product Demo Videos: Technical Content Without the Confusion
42. Team Introduction Videos: New Hire Onboarding Content
43. Video Business Cards: 60-Second Professional Introductions
44. Behind-the-Scenes Company Videos: Authenticity in Corporate Content
45. Explainer Videos for B2B Services: Making Complex Simple
46. LinkedIn Video Content: Professional Standards for Social Media
47. Annual Report Videos: Shareholder Communication Beyond PDFs
48. Corporate Documentary: Long-Form Company Storytelling
49. Interview-Style Corporate Videos: Executive Communication Format
50. B-Roll Library Creation: Stockpiling Corporate Video Assets

#### Office & Lifestyle Photography (10 posts)
51. NYC Office Photography: Workspace Content That Attracts Talent
52. Architectural Office Photography: Interior Design for Corporate Spaces
53. Day-in-the-Life Office Photography: Authentic Team Documentation
54. Coworking Space Photography: Flexible Office Environment Content
55. Office Renovation Photography: Before, During, After Documentation
56. Manufacturing Floor Photography: Industrial Corporate Environments
57. Restaurant Corporate Photography: Hospitality Business Content
58. Retail Store Photography: Commercial Space Documentation
59. Lab & Research Facility Photography: Scientific Corporate Environments
60. Corporate Campus Photography: Multi-Building Business Complexes

#### Industry-Specific Guides (10 posts)
61. Law Firm Photography Guide: Headshots, Office, and Case Study Content
62. Tech Startup Photography: Authentic Content Without the Clichés
63. Financial Services Photography: Corporate Compliance & Professional Standards
64. Nonprofit Photography: Event + Mission-Driven Storytelling on Budget
65. Healthcare Corporate Photography: HIPAA-Compliant Professional Content
66. Real Estate Development Photography: Project Documentation & Marketing
67. Consulting Firm Photography: Thought Leadership Visual Content
68. Accounting Firm Photography: Professional Service Provider Standards
69. Architecture Firm Photography: Showcasing Design + Team Expertise
70. Advertising Agency Photography: Creative Team + Office Culture Content

#### Pricing, ROI & Business Strategy (10 posts)
71. Corporate Photography Pricing NYC: Hourly vs. Package (What Works)
72. Event Photography ROI: How One Client Paid for 5 Years of Content
73. Photography Budget Planning: What Corporate Marketing Teams Get Wrong
74. In-House Photographer vs. Professional Service: The Real Cost Comparison
75. Commercial Usage Rights Explained: What You're Actually Paying For
76. Corporate Photography Contracts: What to Look For (And Red Flags)
77. Video Production Timeline: Why Good Corporate Video Takes 3-4 Weeks
78. Photography Retainer Packages: Monthly Content for Growing Companies
79. Event Photography Rush Delivery: When (and Why) to Pay for Speed
80. Corporate Content Calendar: Planning Photography Needs 12 Months Ahead

#### Technical & Educational (10 posts)
81. Corporate Photography Lighting: Why Professional Gear Actually Matters
82. 4K vs. 1080p Corporate Video: What Your Business Actually Needs
83. Photo Editing Turnaround: Why Professional Delivery Takes 5-10 Days
84. Corporate Photography File Formats: JPG, PNG, RAW Explained
85. Backup & Delivery: How Professional Photographers Protect Your Content
86. Corporate Photography Insurance: Why It Matters for Your Business
87. FAA Part 107: NYC Drone Photography Regulations Explained
88. NYC Photography Permits: When You Need Them (And When You Don't)
89. Corporate Photography Equipment: What Professionals Actually Use
90. Color Correction for Corporate Branding: Matching Your Style Guide

#### NYC-Specific & Local (5 posts)
91. Best NYC Event Venues for Photography: Lighting & Space Considerations
92. Manhattan Office Photography: Working in High-Rise Corporate Spaces
93. Brooklyn Corporate Event Venues: Alternative Spaces for Brand Events
94. NYC Corporate Photography Challenges: Permits, Logistics, and Solutions
95. Seasonal NYC Corporate Photography: Weather & Timing Considerations

#### Comparison & Decision-Making (5 posts)
96. Photographer vs. Videographer vs. Both: What Your Event Needs
97. Professional vs. iPhone Corporate Content: When to Invest
98. Event Photographer vs. Marketing Agency: What Makes Sense
99. Freelance Photographer vs. Production Company: Key Differences
100. DIY Corporate Photography: When It Works (And When It Doesn't)

### Content Interlinking Strategy

**Each post should link to:**
- 2-3 related blog posts (as they're published)
- 1-2 service pages
- 1 case study (if relevant)

**Cluster Structure:**
- Topic clusters around Event, Headshots, Video, Industry guides
- Pillar posts (#1, #21, #36, #61) that link to related sub-topic posts
- Each sub-topic post links back to its pillar post

### Publishing Schedule

**Recommended cadence:**
- Week 1-4: 2 posts per week (establish presence)
- Month 2-3: 1 post per week (steady growth)
- Month 4+: 2 posts per month (maintenance)

**Priority order:**
1. High-traffic keywords (headshots, event photography, pricing)
2. Industry-specific guides (law firms, tech startups)
3. Educational content (technical, how-to)
4. Comparison posts (decision-making)

---

## Image Sourcing

### Primary Sources (in priority order):

1. **Your Own Photography** (70% of images)
   - Use client work (with permission/anonymized)
   - Behind-the-scenes shots
   - iPhone photos of NYC locations, equipment
   - Most authentic, builds brand trust

2. **Free Stock Photography** (25% of images)
   - **Unsplash**: https://unsplash.com (search: office, business, NYC)
   - **Pexels**: https://pexels.com (search: corporate, team, event)
   - **Pixabay**: https://pixabay.com (backup option)
   - All free for commercial use, no attribution required

3. **AI Generation** (5% of images)
   - For specific concepts you can't photograph
   - **Midjourney** ($10/month): Best quality
   - **DALL-E 3** via ChatGPT Plus ($20/month): Good alternative
   - **Leonardo.ai** (free tier): Budget option

### Photo Attribution Guidelines

**IMPORTANT**: Clearly distinguish between your own photography and stock photography.

**For blog posts with YOUR photos:**
- Add attribution section at bottom of article (before "Back to Blog" link)
- Credit your work while acknowledging stock photos used
- Link to stock photo sources (Unsplash, Pexels, Pixabay)

**Photo Attribution HTML Template:**
```html
<!-- Photo Attribution -->
<div class="photo-attribution">
  <p><strong>Photo Credits:</strong> Professional [headshot/event/corporate] images in this article photographed by Core Visuals NYC. Select stock photography sourced from <a href="https://unsplash.com" target="_blank" rel="noopener">Unsplash</a>, <a href="https://pexels.com" target="_blank" rel="noopener">Pexels</a>, and <a href="https://pixabay.com" target="_blank" rel="noopener">Pixabay</a> for illustrative purposes.</p>
</div>
```

**CSS for Photo Attribution** (already in blog post template):
```css
.photo-attribution {
  margin-top: 80px;
  padding-top: 24px;
  border-top: 1px solid #E5E7EB;
  font-size: 12px;
  color: #9CA3AF;
  line-height: 1.6;
}

.photo-attribution a {
  color: #6B7280;
  text-decoration: underline;
}
```

**Placement**: Insert photo attribution section after "Related Services" section, before "Back to Blog" link.

**Why this matters**:
- Maintains credibility (don't take credit for stock photos)
- Gives proper attribution to free stock sources
- Highlights your actual photography work
- Builds trust with readers

### Cloudinary Upload Process

1. Upload image to Cloudinary dashboard
2. Use automatic quality/format optimization
3. Generate responsive URLs:
   ```
   https://res.cloudinary.com/dtuxu64zp/image/upload/f_auto,q_auto,w_1200/[image-name].jpg
   ```
4. Use in blog post with descriptive alt text

---

## Checklist: Publishing a New Blog Post

### Pre-Writing
- [ ] Choose topic from 100-post strategy
- [ ] Research keyword volume (target 100-1000 monthly searches)
- [ ] Outline 4-6 main sections
- [ ] Source 3-5 images (own photos or stock)
- [ ] Upload images to Cloudinary

### Writing
- [ ] Write in conversational, honest voice
- [ ] Include specific pricing examples
- [ ] Add Table of Contents with 4-6 jump links
- [ ] Include 1-2 callout boxes
- [ ] Write 3-4 FAQ items
- [ ] Add 3-5 internal links to service pages
- [ ] Add 1-2 external authority links
- [ ] Target 1,200-1,800 words total

### Technical Setup
- [ ] Create HTML file in `/blog/` directory
- [ ] Copy template structure
- [ ] Add Article schema with correct dates
- [ ] Add Breadcrumb schema
- [ ] Add FAQ schema (if applicable)
- [ ] Set responsive CSS (50%/70%/100%)
- [ ] Add all meta tags (title, description, OG)
- [ ] Add canonical URL
- [ ] Add anchor IDs to all H2 sections
- [ ] Add Related Services section (3 cards)
- [ ] Test mobile responsiveness

### SEO
- [ ] Primary keyword in title, H1, first paragraph
- [ ] Alt text on all images
- [ ] Internal links styled with gold color (#D4AF37)
- [ ] External links have rel="noopener"
- [ ] FAQ section properly formatted
- [ ] Breadcrumb navigation visible

### Publishing
- [ ] Add post to `sitemap.xml` (priority: 0.6, changefreq: monthly)
- [ ] Add blog card to `blog.html` with thumbnail
- [ ] Test all links (internal and external)
- [ ] Test on mobile device
- [ ] Commit to git with descriptive message
- [ ] Push to branch: `claude/branch-4-01RnBi2WecBgc3KmFy16PVU9`

### Post-Publishing
- [ ] Submit sitemap to Google Search Console
- [ ] Check for indexing after 3-7 days
- [ ] Monitor Google Search Console for impressions/clicks
- [ ] Add internal links from future posts

---

## Example Blog Post

See `/blog/aerial-commercial-photography-nyc.html` for complete reference implementation.

**Key features demonstrated:**
- Conversational, honest voice
- Table of Contents with jump links
- FAQ section with schema
- External links to FAA.gov
- Internal links to service pages
- Related Services section
- Responsive width (50%/70%/100%)
- All required schema markup
- Cloudinary-optimized images

---

## Questions?

Refer to this guide when writing new blog posts. All posts should follow this structure for consistency and SEO performance.

**Last updated:** January 15, 2025
**Version:** 1.0
