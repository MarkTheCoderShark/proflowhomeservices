# ProFlow Home Services — FULL MASTER PROJECT DOCUMENT
---
# TABLE OF CONTENTS
1. Phase 1 — Branding Foundation  
2. Phase 2 — Website Architecture  
3. Phase 3 — Page Layouts & Templates  
4. Phase 4 — SEO Strategy  
5. Phase 5 — UI/UX Component Library  
6. Step Additions  
   - Project Summary  
   - Developer Implementation Guide  
   - Content & Copywriting Guidelines  
   - Deployment & Launch Checklist  
   - Master Index

📘 PHASE 1 — BRANDING FOUNDATION (Full Markdown Document)
ProFlow Home Services — Brand Identity, Brand Kit, Voice, Logo System, and Visual Principles
# PHASE 1 — BRANDING FOUNDATION
## ProFlow Home Services  
### Brand Identity • Positioning • Brand Kit • Typography • Voice • Logo System • Visual Principles

---

# 1. BRAND IDENTITY OVERVIEW

## 1.1 Mission Statement
ProFlow Home Services exists to deliver **high-quality home services, repairs, and remodeling**, elevated by a professional, organized, tech-enabled experience powered by ProFlow360™.  
We combine craftsmanship, technology, and reliable service to become the long-term home improvement partner for every homeowner.

---

## 1.2 Vision Statement
To become the leading home services and remodeling brand in Northern California — and eventually the entire West Coast — with a unified ecosystem of service divisions, local branches, and tech-enabled workflows.

---

## 1.3 Brand Promise
“Professional results. Pro-level service. Every time.”

We promise:
- Clear communication  
- Fast scheduling  
- Fair, transparent pricing  
- High-quality workmanship  
- A reliable team backed by ProFlow360™

---

## 1.4 Brand Personality
ProFlow Home Services’ personality is:

- **Professional** — dependable, skilled, consistent  
- **Local** — grounded, family-owned, community-focused  
- **Modern** — tech-forward, organized, efficient  
- **Trustworthy** — licensed, insured, proven  
- **Friendly** — warm, approachable, homeowner-first  
- **Premium** — high standards, clean aesthetics, quality-driven

---

# 2. BRAND POSITIONING

## 2.1 The Market Gap We're Filling
Homeowners struggle with:
- Unreliable contractors  
- Poor communication  
- Messy job execution  
- Scheduling chaos  
- Inconsistent quality  
- No single provider for multiple services  

ProFlow solves these issues with:
- Unified services under one brand  
- Tech-enabled scheduling (ProFlow360)  
- Local technicians  
- Professional organization  
- Multi-service capability (gutters → painting → handyman → remodels)

---

## 2.2 Unique Value Proposition
ProFlow Home Services is the **only** home services brand in the region offering:

- Full-service home improvement  
- Backed by proprietary CRM (ProFlow360)  
- Consistent standards across divisions  
- Premium branding + real professionalism  
- Ability to scale city-by-city  
- Remodeling AND seasonal home services under one umbrella  

---

## 2.3 Market Position
We position ourselves as:

**“The professional, tech-enabled home services company that homeowners can trust for every stage of home improvement.”**

Position relative to competitors:

| Company Type | Positioning Relative to ProFlow |
|--------------|--------------------------------|
| Solo contractors | Less professional, more inconsistent |
| Generalist handyman companies | Limited scope, no remodeling |
| Remodel-only contractors | Too expensive for small jobs |
| Painting-only or gutter-only companies | Narrow service offering |
| Franchises (Mr. Handyman, etc.) | Good branding, no tech, overpriced, often impersonal |

---

# 3. BRAND KIT (COLORS, TYPOGRAPHY, SPACING)

## 3.1 Color Palette

**CURRENT IMPLEMENTATION (Accurate as of 2025-11-13)**

The ProFlow Home Services website uses a comprehensive Tailwind v4-based color system defined in `/web/app/globals.css`. This system provides 6 major color families with 9 shades each (50-900) for maximum flexibility and consistency.

---

### **PRIMARY COLOR FAMILIES**

#### 1. Viridian (Primary Brand Green)
**Purpose:** Primary buttons, headings, brand elements, dark sections
**Base Shade:** #6b9080 (viridian-500)

| Shade | Hex Code | Usage |
|-------|----------|-------|
| viridian-50 | #f0f7f4 | Very light backgrounds |
| viridian-100 | #d9ebe4 | Light hover states |
| viridian-200 | #b3d7c9 | Subtle backgrounds |
| viridian-300 | #8ec3ae | Medium accents |
| viridian-400 | #6b9080 | Medium buttons/accents |
| viridian-500 | #6b9080 | Base brand color |
| viridian-600 | #4a7566 | **Primary buttons, links** (Most used) |
| viridian-700 | #39594c | Dark accents |
| viridian-800 | #324d42 | **Header/Navbar background** |
| viridian-900 | #2e463c | **Dark hero sections, headings** (Most used) |

**Most Common Usage:**
- `bg-viridian-900` - Dark hero/CTA sections (~45 instances)
- `text-viridian-900` - Primary headings on light backgrounds
- `bg-viridian-600` + `hover:bg-viridian-500` - Primary buttons
- `bg-viridian-800` - Header/navbar background

---

#### 2. Cambridge Blue (Complementary Blue-Green)
**Purpose:** Accents, dark bands, CTA backgrounds
**Base Shade:** #a4c3b2 (cambridge_blue-500)

| Shade | Hex Code | Usage |
|-------|----------|-------|
| cambridge_blue-50 | #f2f8f5 | Very light backgrounds |
| cambridge_blue-100 | #d6ebe1 | Light backgrounds |
| cambridge_blue-200 | #aed7c3 | Medium-light accents |
| cambridge_blue-300 | #527866 | **CTA backgrounds, accents** |
| cambridge_blue-400 | #7fb09e | Medium buttons |
| cambridge_blue-500 | #a4c3b2 | Base complementary |
| cambridge_blue-600 | #789a8a | Darker accents |
| cambridge_blue-700 | #688274 | Dark elements |
| cambridge_blue-800 | #5c715e | Very dark accents |
| cambridge_blue-900 | #567968 | Darkest shade |

**Most Common Usage:**
- `bg-cambridge_blue-300` - CTA backgrounds
- Various shades for complementary accents

---

#### 3. Mint Green (Subtle Light Backgrounds)
**Purpose:** Light section backgrounds, cards, borders
**Base Shade:** #cce3de (mint_green-500)

| Shade | Hex Code | Usage |
|-------|----------|-------|
| mint_green-50 | #fbfdfc | **Very light section backgrounds** (~30 instances) |
| mint_green-100 | #f5faf9 | Light card backgrounds |
| mint_green-200 | #e0ede9 | **Standard borders** (~25 instances) |
| mint_green-300 | #cce3de | **Stronger borders** (~10 instances) |
| mint_green-400 | #b8d9d2 | Medium backgrounds |
| mint_green-500 | #cce3de | Base mint |
| mint_green-600 | #a1cfc7 | Darker mint accents |
| mint_green-700 | #76b3a8 | **Dark borders (neighborhoods)** |
| mint_green-800 | #62a89a | Darker accents |
| mint_green-900 | #7bbaae | Darkest mint |

**Most Common Usage:**
- `bg-mint_green-50` - Alternating section backgrounds
- `border-mint_green-200` - Standard card/input borders
- `border-mint_green-300` - Service card borders
- `bg-mint_green-100` - Hover states for FAQ accordions

---

#### 4. Azure Web (Light Aqua Tints)
**Purpose:** Light backgrounds, aqua accents
**Base Shade:** #eaf4f4 (azure_web-500)

| Shade | Hex Code | Usage |
|-------|----------|-------|
| azure_web-50 | #fdfdfe | Nearly white |
| azure_web-100 | #f6fafa | Very light backgrounds |
| azure_web-200 | #8fd9d9 | Light aqua accents |
| azure_web-300 | #66cccc | Aqua accents |
| azure_web-400 | #b9e6e6 | Medium-light aqua |
| azure_web-500 | #eaf4f4 | Base azure |
| azure_web-600 | #d2ecec | Light backgrounds |
| azure_web-700 | #c4e7e7 | Subtle backgrounds |
| azure_web-800 | #b6e3e3 | Medium backgrounds |
| azure_web-900 | #aee0e0 | Darker azure |

**Usage:**
- Light accent colors
- Subtle background variations

---

#### 5. Mint Cream (Near-White/Off-White)
**Purpose:** Text on dark backgrounds, very light accents
**Base Shade:** #f6fff8 (mint_cream-500)

| Shade | Hex Code | Usage |
|-------|----------|-------|
| mint_cream-50 | #ffffff | Pure white text |
| mint_cream-100 | #feffff | **Text on dark backgrounds** |
| mint_cream-200 | #fdfffd | **Footer links** |
| mint_cream-300 | #fbfefc | Light text variations |
| mint_cream-400 | #fafff9 | Very light text |
| mint_cream-500 | #f6fff8 | Base cream |
| mint_cream-600 | #cedcd2 | Medium tone |
| mint_cream-700 | #9fb7a5 | Darker tone |
| mint_cream-800 | #668b74 | Dark green |
| mint_cream-900 | #1e3a26 | **Dark text/headings** |

**Most Common Usage:**
- `text-mint_cream-100` - Text on dark viridian backgrounds
- `text-mint_cream-200` - Footer link text
- `text-mint_cream-900` - Alternative dark headings

---

#### 6. Slate (Neutral Text Colors)
**Purpose:** Body text, headings on light backgrounds
**Base Shade:** #6b7774 (slate-500)

| Shade | Hex Code | Usage |
|-------|----------|-------|
| slate-50 | #f8f9f9 | Nearly white backgrounds |
| slate-100 | #ebeeed | Very light gray |
| slate-200 | #d6d9d8 | Light gray borders |
| slate-300 | #c2c6c4 | Medium-light gray |
| slate-400 | #adb2af | Medium gray |
| slate-500 | #6b7774 | Base slate |
| slate-600 | #545c59 | **Secondary text** (~10 instances) |
| slate-700 | #3d4a42 | **Primary body text** (~20 instances) |
| slate-800 | #2e3a33 | **Darker body text** (~15 instances) |
| slate-900 | #1e2621 | **Dark headings** (~15 instances) |

**Most Common Usage:**
- `text-slate-700` - Primary body text color
- `text-slate-800` - Darker body text for emphasis
- `text-slate-900` - Dark headings on light backgrounds
- `text-slate-600` - Secondary/muted text

---

### **PROFLOW CTA GREEN (Primary Call-to-Action Color)**

#### ProFlow CTA Green - #1B5C58
**Purpose:** Primary call-to-action buttons, important conversions
**Usage:** All primary CTA buttons across the site

| Color | Hex Code | Usage |
|-------|----------|-------|
| cta | #1B5C58 | **Primary CTA buttons** (Get Estimate, Call Now, etc.) |
| cta-hover | #154A47 | Hover state for CTA buttons (darker) |
| cta-light | #2A706B | Light variant for special uses |

---

### **TOPBAR COLORS (Premium Trust Bar)**

#### Topbar System - Trust-Building Top Bar
**Purpose:** Premium trust bar with warm, professional color scheme
**Usage:** Secondary navigation bar above main header featuring trust indicators

| Color | Hex Code | Usage |
|-------|----------|-------|
| topbar | #E9E0D1 | **Background** (light warm sand/beige) |
| topbar-text | #4D5E57 | **Text color** (sage/dark charcoal for premium look) |

**Content:** "Licensed & Insured • 1,000+ Happy Customers • ★★★★★ Google Rating"

**Typography Specs:**
- Font size: 14px
- Font weight: 500 (medium)
- Letter spacing: +0.2px
- Vertical padding: 8px (py-2)
- Alignment: Centered
- Responsive: Hides "1,000+ Happy Customers" on mobile

**Implementation:**
- Primary buttons (all backgrounds): `bg-cta text-white hover:bg-cta-hover`
- Secondary buttons (light bg): `border-2 border-cta text-cta hover:bg-cta hover:text-white`
- Secondary buttons (dark bg): `border-2 border-white text-white hover:bg-white hover:text-cta`

**Visual Characteristics:**
- Rich, deep green that conveys trust and professionalism
- Excellent contrast against both light and dark backgrounds
- More saturated than viridian for better CTA visibility
- Creates clear visual hierarchy for conversion actions

---

### **SEMANTIC COLOR USAGE**

#### Standard Tailwind Colors (For Specific Functions)
These standard colors are used for messaging and special states:

- **Success Messages:** `text-emerald-600` (#059669)
- **Error Messages:** `text-red-600` (#dc2626)
- **Form Borders (To Be Standardized):**
  - `border-zinc-300`, `border-zinc-200` - 6 instances ⚠️

**Note:** Items marked with ⚠️ should be replaced with brand colors for consistency.

---

### **OPACITY MODIFIERS**

The color system uses Tailwind opacity modifiers for layering and depth:

**Common Opacity Values:**
- `/10` - Very subtle (10% opacity)
- `/20` - Subtle (20% opacity)
- `/50` - Semi-transparent (50% opacity)
- `/60` - Focus rings, overlays (60% opacity)
- `/80` - Strong overlays (80% opacity)
- `/90` - Nearly opaque (90% opacity)

**Examples:**
- `bg-viridian-900/80` - Dark overlay on hero images
- `text-white/90` - Slightly transparent white text
- `bg-white/10` - Glassmorphism effects
- `focus:ring-viridian-500/60` - Focus rings
- `from-black/65 via-black/50 to-black/10` - Gradient overlays

---

## 3.2 Color Usage by Purpose

### Backgrounds

**Primary Section Backgrounds:**
- `bg-white` - Default content sections (70%)
- `bg-mint_green-50` - Alternating light sections (15%)
- `bg-viridian-900` - Dark hero/CTA sections (10%)
- `bg-viridian-800` - Header/navbar (5%)

**Card/Component Backgrounds:**
- `bg-white` - Cards, forms, content boxes
- `bg-mint_green-50` - FAQ accordions, service cards
- `bg-mint_green-100` - Hover states

**Dark Overlays:**
- `bg-viridian-900/80` - Image overlays for text readability
- `bg-gradient-to-b from-black/65 via-black/50 to-black/10` - Hero gradient overlays

---

### Text Colors

**Headings:**
- `text-viridian-900` - Primary headings on light backgrounds (Most common)
- `text-white` - Headings on dark backgrounds
- `text-slate-900` - Alternative dark headings
- `text-mint_cream-900` - Dark green headings

**Body Text:**
- `text-slate-700` - Primary body text (Most common)
- `text-slate-800` - Darker body text for emphasis
- `text-slate-600` - Secondary/muted text
- `text-mint_cream-100` - Text on dark backgrounds
- `text-mint_cream-200` - Footer link text

**Interactive Text:**
- `text-viridian-600` - Links, CTAs
- `text-viridian-700` - Link hover states
- `hover:text-white` - Dark background link hovers

---

### Borders

**Standard Borders:**
- `border-mint_green-200` - Most common (cards, inputs)
- `border-mint_green-300` - Stronger borders (service cards)
- `border-mint_green-700` - Dark borders (neighborhoods)

**Accent Borders:**
- `border-viridian-500` - Hover state borders
- `border-viridian-600` - Button borders
- `border-viridian-700` - Navbar border
- `border-viridian-800` - Footer borders

**To Be Replaced:**
- `border-zinc-300` - Form inputs (6 instances) → Replace with `border-mint_green-300`
- `border-zinc-200` - Cards (6 instances) → Replace with `border-mint_green-200`

---

### Buttons

**Primary Buttons (All Backgrounds):**
- Default: `bg-cta text-white` (#1B5C58)
- Hover: `hover:bg-cta-hover` (#154A47)
- Used for: "Get Estimate", "Call Now", "Schedule Service", etc.
- **NEW:** Unified CTA color for maximum consistency and conversion optimization

**Secondary Buttons (Light Backgrounds):**
- Default: `border-2 border-cta text-cta` (transparent background)
- Hover: `bg-mint_green-50` (ultra-light teal tint)
- Used for: "Learn More", "View Services", "View Projects"

**Secondary Buttons (Dark Backgrounds - Hero Sections):**
- Default: `bg-white border-2 border-cta text-cta`
- Border: **#1B5C58** (CTA Green, 2px solid)
- Text: **#1B5C58** (CTA Green)
- Background: **White** (solid)
- Hover: `bg-mint_green-50` (ultra-light teal tint)
- Used for: Phone number button, secondary actions in hero sections
- **NEW:** White background provides maximum contrast and visibility on dark hero backgrounds

---

### Interactive States

**Focus Rings:**
- `focus:ring-viridian-500/60` - Standard focus state
- `focus-visible:ring-2 focus-visible:ring-viridian-500/60` - Keyboard navigation

**Hover States:**
- Borders: `hover:border-viridian-500`
- Backgrounds: Lighter/darker shades within same family
- Text: `hover:text-white`, `hover:text-viridian-700`

---

## 3.3 Color Usage Statistics

**Top 10 Most Used Colors:**
1. `white` - ~150+ instances (backgrounds, text, borders)
2. `viridian-900` - ~45 instances (headings, dark backgrounds)
3. `mint_green-50` - ~30 instances (section backgrounds)
4. `mint_green-200` - ~25 instances (borders)
5. `slate-700` - ~20 instances (body text)
6. `viridian-600` - ~18 instances (buttons, links)
7. `slate-900` - ~15 instances (dark headings)
8. `viridian-500` - ~12 instances (buttons, focus rings)
9. `mint_green-300` - ~10 instances (borders)
10. `slate-600` - ~10 instances (secondary text)

**Color Family Distribution:**
- Viridian: 35%
- Slate: 25%
- Mint Green: 20%
- White/Black: 10%
- Mint Cream: 5%
- Cambridge Blue: 3%
- Azure Web: 1%
- Non-brand colors: 1% (to be standardized)

---

## 3.4 Implementation Details

**Technology:** Tailwind CSS v4 with custom color tokens
**Configuration File:** `/web/app/globals.css`
**Total Custom Colors:** 54 shades across 6 families (plus white/black)

**Naming Convention:**
- Color families use underscores: `mint_green`, `cambridge_blue`, `azure_web`, `mint_cream`
- Shades use numeric scale: 50 (lightest) to 900 (darkest)
- Tailwind utility classes: `bg-{color}-{shade}`, `text-{color}-{shade}`, `border-{color}-{shade}`

---

## 3.5 Recent Updates & Remaining Issues

### ✅ Recently Updated (Nov 13, 2025):

1. **NEW: ProFlow CTA Green (#1B5C58)**
   - Added dedicated CTA color to globals.css
   - Updated Button.tsx component to use new CTA color
   - Provides unified, professional green for all call-to-action buttons
   - Better conversion optimization with consistent, high-contrast CTAs

2. **NEW: Premium Trust Bar (Top Bar)**
   - Added above main navigation for trust-building
   - Background: #E9E0D1 (light warm sand)
   - Text: #4D5E57 (sage/dark charcoal)
   - Content: "Licensed & Insured • 1,000+ Happy Customers • ★★★★★ Google Rating"
   - Typography: 14px, weight 500, +0.2px letter spacing
   - Layout: Centered text, 8px vertical padding
   - Border: slate-300 bottom border
   - Responsive: Hides "1,000+ Happy Customers" on mobile
   - Creates premium, trustworthy first impression

### Remaining Issues to Fix:

1. **Undefined "aqua" Class**
   - Location: `/web/components/forms/ContactForm.tsx:38`
   - Current: `focus:ring-aqua/60`
   - Fix: Replace with `focus:ring-viridian-500/60`

2. **Zinc Color Usage (6 instances)**
   - Locations: ContactForm, contact/page, reviews/page, financing/page, blog/page, services/page
   - Current: `border-zinc-300`, `border-zinc-200`
   - Fix: Replace with `border-mint_green-300` and `border-mint_green-200`

### Future Enhancements:

4. **Consider Brand-Specific Naming**
   - Rename `viridian-*` to `proflow-evergreen-*`
   - Rename `cambridge_blue-*` to `proflow-accent-*`
   - Makes brand connection clearer in code

5. **Add Missing Accent Colors**
   - Current system lacks gold/clay tones
   - Consider adding if premium remodeling accents are needed

---

## 3.6 Color Accessibility

**Contrast Ratios:**
- All body text (slate-700 on white) meets WCAG AA standards (4.5:1+)
- Headings (viridian-900 on white) meet WCAG AA standards (3:1+ for large text)
- Interactive elements have sufficient contrast
- Focus indicators are clearly visible (2px rings with 60% opacity)

**Colorblind Considerations:**
- Primary color system uses green-based palette
- Success/error states use standard green/red
- Consider adding icons to success/error messages for colorblind accessibility

---

**Last Updated:** November 13, 2025
**Audit Performed:** Full codebase color usage analysis (329 files)

---

## 3.7 Quick Reference: Key Brand Colors

For quick reference, here are the most important colors in the ProFlow palette:

| Purpose | Color Name | Hex Code | Tailwind Class |
|---------|-----------|----------|----------------|
| **Primary CTA Buttons** | ProFlow CTA Green | #1B5C58 | `bg-cta` |
| CTA Hover State | CTA Hover | #154A47 | `bg-cta-hover` |
| Dark Hero Sections | Viridian 900 | #2e463c | `bg-viridian-900` |
| Header/Navbar | Viridian 800 | #324d42 | `bg-viridian-800` |
| Primary Buttons (alt) | Viridian 600 | #4a7566 | `bg-viridian-600` |
| Primary Headings | Viridian 900 | #2e463c | `text-viridian-900` |
| Body Text | Slate 700 | #3d4a42 | `text-slate-700` |
| White Background | White | #ffffff | `bg-white` |
| Light Sections | Mint Green 50 | #fbfdfc | `bg-mint_green-50` |
| Standard Borders | Mint Green 200 | #e0ede9 | `border-mint_green-200` |
| Text on Dark BG | Mint Cream 100 | #feffff | `text-mint_cream-100` |

**Color Hierarchy for Conversion:**
1. **CTA Green (#1B5C58)** - Highest priority actions (Get Estimate, Call Now)
2. **Viridian 600-900** - Brand identity, headings, secondary actions
3. **Slate 700-900** - Content, readability
4. **Mint Green 50-300** - Subtle backgrounds, borders, visual rhythm

---

# 4. TYPOGRAPHY SYSTEM

## 4.1 Headings  
**Montserrat** (Bold / SemiBold)  
Reasons:
- Modern  
- Strong presence  
- Perfect for home services + SaaS hybrid brand  
- Easy to read in UI layouts  

H1: 48–64px
H2: 36–48px
H3: 28–32px
H4: 22–26px

---

## 4.2 Body Font  
**Inter** (Regular / Medium)  
Reasons:
- Super readable  
- Excellent for long paragraphs  
- Clean and modern  
- Matches ProFlow360 aesthetic  

Body text: 16–18px
Small text: 14px

---

## 4.3 Button Text  
**Montserrat Semibold — 17px**  
Clear, punchy buttons.

---

# 5. BRAND VOICE & MESSAGING

## 5.1 Tone of Voice
The tone should be:

- **Clear** (no fluff)  
- **Professional** (no cheap sales talk)  
- **Local** (geographically grounded)  
- **Confident** (authority + trust)  
- **Warm** (approachable, community feel)  
- **Organized** (reflecting ProFlow360 tech advantage)  

---

## 5.2 Messaging Pillars
1. **Professionalism**  
   “Skilled technicians, clean results, clear communication.”

2. **Comprehensive Services**  
   “One company for everything your home needs.”

3. **Technology-Enhanced**  
   “Scheduling, updates, and communication powered by ProFlow360.”

4. **Local Expertise**  
   “Serving Sacramento, Roseville, Rocklin & surrounding cities.”

5. **Quality & Longevity**  
   “Craftsmanship built to last.”

---

## 5.3 Brand Taglines
### Primary Tagline  
**“Professional home services. ProFlow results.”**

### Secondary Taglines  
- “Your complete home improvement partner.”  
- “One brand for everything your home needs.”  
- “Where craftsmanship meets technology.”  
- “Powered by ProFlow360™.”  

---

# 6. IMAGE & PHOTOGRAPHY GUIDELINES

## 6.1 Hero Images
- Well-lit home exteriors  
- Real job sites  
- Clean, aspirational aesthetic  
- Avoid stock images of fake work crews  

---

## 6.2 Service Images
- Consistent lighting  
- Horizontal orientation preferred  
- Crisp before/after shots  
- No clutter or messy backgrounds  

---

## 6.3 Remodeling Images
- High-end modern interiors  
- White, neutral, wood tones  
- No overly trendy designs  

---

## 6.4 Branding Imagery Tone
Images should feel:
- Professional  
- Aspirational  
- Clean  
- Modern  
- Trustworthy  

---

# 7. LOGO SYSTEM & BRAND HIERARCHY

## 7.1 Parent Brand Logo
**ProFlow Home Services™**

### Logo Style:
- Bold sans-serif logotype  
- Evergreen primary color  
- Aqua accent  
- Simple geometric home-icon or flowline  

---

## 7.2 Sub-Brand System

### Sacramento Gutter Guard  
“A Division of ProFlow Home Services”

### Rocklin Gutter Guard  
“A Division of ProFlow Home Services”

### ProFlow Painting  
“Powered by ProFlow Home Services”

### ProFlow360  
“Technology by ProFlow”  

---

## 7.3 Logo Usage Rules
- Minimum spacing: logo height × 0.5  
- Do not warp, rotate, stretch  
- Always appear on white or Mist background  
- Use Evergreen or Midnight versions depending on background  

---

# 8. SPACING, GRIDS & LAYOUT PRINCIPLES

## 8.1 Spacing Scale
Use an 8-based scale:

- 8px  
- 16px  
- 24px  
- 32px  
- 48px  
- 64px  
- 96px  

---

## 8.2 Layout Grid
- 12-column grid  
- Maximum width: **1280px**  
- Section padding: **48–64px**  

---

## 8.3 Corners & Radius
Rounds:
- Buttons: 6–8px  
- Cards: 6px  
- Inputs/forms: 6px  

Matches your existing brand family.

---

## 8.4 Shadow & Elevation
Use **soft drop shadows** only for:
- Cards  
- Modals  
- Photo grids  
- Testimonial blocks  

Avoid heavy shadowing.

---

# 9. ICONOGRAPHY SYSTEM

## 9.1 Icon Style
Choose **Lucide Icons** or **Phosphor Icons** (consistent line weight).

---

## 9.2 Usage
Icons used for:
- Service features  
- Process steps  
- Footer  
- City pages  
- Benefits sections  

Avoid overly playful icons.

---

# 10. BRAND CONSISTENCY RULES

## 10.1 Consistent Across All ProFlow Brands
- Same fonts  
- Same spacing  
- Same button styles  
- Same card design  
- Same CTA structure  
- Same testimonial layout  

---

## 10.2 Microsites Must Match Parent Brand Edge
Gutter sites and painting sites should:
- Use same color accents  
- Include “A Division of ProFlow Home Services”  
- Share fonts  
- Share spacing rules  

---

# END OF PHASE 1

📘 PHASE 2 — WEBSITE ARCHITECTURE (Full Markdown Document)
ProFlow Home Services — Complete Information Architecture, URL Structure, Hierarchy, and Integration Plan
# PHASE 2 — WEBSITE ARCHITECTURE
## ProFlow Home Services  
### Full Information Architecture • URL Structure • Sitemaps • Navigation • Interlinking • Microsite Integration • ProFlow360 Integration

---

# 1. HIGH-LEVEL SITE PURPOSE

ProFlowHomeServices.com serves as:
- The **parent brand website**
- The **authority hub** for all service verticals
- The **central SEO asset**
- The **cross-linking nexus** for gutter + painting microsites
- The **hub for expansion** into remodeling, handyman, pressure washing, etc.
- The **single point of truth** for service areas and brand identity
- The **front-end interface** for ProFlow360-powered scheduling

The entire ecosystem forms a **hub & spoke** architecture, with ProFlowHomeServices.com at the center.

---

# 2. TOP-LEVEL SITE STRUCTURE (Information Architecture)

/
├── Home
├── Services
│ ├── Gutter Cleaning
│ ├── Gutter Guards
│ ├── Gutter Repair & Replacement
│ ├── Interior Painting
│ ├── Exterior Painting
│ ├── Handyman Services
│ ├── Pressure Washing
│ ├── Roof & Solar Cleaning
│ └── Maintenance Plans (optional)
├── Remodeling
│ ├── Bathroom Remodeling
│ ├── Kitchen Remodeling
│ ├── Garage Conversions
│ ├── Flooring
│ ├── Drywall & Framing
│ └── ADUs
├── Service Areas
│ ├── Citrus Heights
│ ├── Roseville
│ ├── Rocklin
│ ├── Loomis
│ ├── Auburn
│ ├── Folsom
│ ├── Granite Bay
│ ├── Lincoln
│ └── Sacramento
├── Projects / Gallery
├── Reviews
├── Blog
├── Contact / Estimate
└── Financing

---

# 3. URL STRUCTURE (VERY IMPORTANT FOR SEO)

## 3.1 Services

/services
/services/gutter-cleaning
/services/gutter-guards
/services/gutter-repair-replacement
/services/interior-painting
/services/exterior-painting
/services/handyman
/services/pressure-washing
/services/roof-solar-cleaning
/services/maintenance-plans

---

## 3.2 Remodeling

/remodeling
/remodeling/bathroom
/remodeling/kitchen
/remodeling/garage-conversions
/remodeling/flooring
/remodeling/drywall-framing
/remodeling/adu

---

## 3.3 Service Areas (City Pages)

/service-areas
/service-areas/citrus-heights
/service-areas/roseville
/service-areas/rocklin
/service-areas/loomis
/service-areas/auburn
/service-areas/folsom
/service-areas/granite-bay
/service-areas/lincoln
/service-areas/sacramento

---

## 3.4 Support Pages

/about
/projects
/reviews
/contact
/blog
/financing

---

# 4. NAVIGATION (FULL TOP NAV STRUCTURE)

**Top Navigation Bar**
- Home
- Services ▾
- Remodeling ▾
- Service Areas ▾
- Projects
- Reviews
- About
- Contact
- **Get Estimate** (highlighted button)

**Mobile Navigation**
- Collapsible accordion menu  
- Same structure as desktop  
- CTA button pinned at bottom  

---

# 5. PAGE HIERARCHY & HOW THEY CONNECT

## Hierarchy Overview
Home
│
├── Services Page (Parent)
│ ├── Individual Services
│
├── Remodeling Page (Parent)
│ ├── Individual Remodel Services
│
├── Service Areas (Parent)
│ ├── City Pages
│
├── Projects
├── Reviews
├── Blog
└── Contact

---

# 6. INTERNAL LINKING (THE AUTHORITY ENGINE)

Internal linking is critical for SEO.  
Here is the full blueprint:

## 6.1 Homepage → links to:
- All service pages  
- All remodeling pages  
- All city pages  
- Microsites (gutter + painting)  
- ProFlow360 (footer only)  

---

## 6.2 Service Pages → link to:
- Related service pages  
- City pages (dynamic)  
- Remodeling parent page  
- Contact page  
- Projects  

Example from “Gutter Cleaning” page:
Internal Links:
/services/gutter-guards
/services/gutter-repair-replacement
/service-areas/roseville
/service-areas/rocklin
/contact
/projects

---

## 6.3 Remodeling Pages → link to:
- Kitchen ↔ Bathroom ↔ Flooring ↔ Garage conversions  
- City pages  
- Projects (show remodel gallery)  
- Financing  
- Contact  

---

## 6.4 City Pages → link to:
- All services offered in that city  
- Remodeling services in that city  
- Contact  
- Projects (filtered city gallery if possible)  

---

## 6.5 Footer → link to:
- Every service  
- Every city  
- Contact  
- Projects  
- Reviews  
- ProFlow360 (technology provider)  

---

# 7. INTEGRATION WITH EXISTING MICROSITES

Your microsites become *lead funnels* connected to the parent brand.

## Microsites
- SacramentoGutterGuard.com  
- RocklinGutterGuard.com  
- ProFlowPainting.com  

---

## 7.1 Microsite → Parent Site Integration

### Each microsite must include:
- Header badge:  
  **“A Division of ProFlow Home Services”**
- Footer link:  
  **“Visit ProFlowHomeServices.com for full home services & remodeling.”**
- Matching fonts  
- Matching spacing scale  
- Matching accent colors  
- Cross-links to parent service pages  

---

## 7.2 Parent Site → Microsites Integration

On relevant pages:

### From Services → Gutters
For specialized gutter services, visit our microsites:
SacramentoGutterGuard.com
RocklinGutterGuard.com

### From Painting Pages
For detailed painting service information:
Visit ProFlowPainting.com

---

## 7.3 SEO Benefit of Hub ↔ Spoke Linking
This creates:
- Higher domain authority  
- Lower competitive difficulty  
- Stronger topical relevance  
- Higher rankings across regions  
- Better brand cohesion  

---

# 8. PROFLOW360 INTEGRATION POINTS

ProFlow360 should appear subtly but consistently.

## 8.1 Header
Small badge under hamburger menu:
Scheduling Powered by ProFlow360™

---

## 8.2 Forms
Submission confirmation:
Your request has been logged through ProFlow360.
Expect a text message within minutes.

---

## 8.3 Footer
ProFlow Home Services™ — Operations Powered by ProFlow360™

---

## 8.4 About Page
Dedicated “Technology That Supports You” section describing the CRM.

---

# 9. SITE SCALABILITY FRAMEWORK

This structure allows:

## 9.1 Adding new service verticals
Example:
/services/window-cleaning
/services/fencing
/services/landscaping

No structural changes needed.

---

## 9.2 City expansion
Example:
/service-areas/el-dorado-hills
/service-areas/wheatland
/service-areas/yuba-city

Again — no structural changes.

---

## 9.3 Future Franchise Model
Every franchise operator would receive:
- Their own city page  
- Their own microsite if needed  
- Their own ProFlow360 instance  
- Their own service-area cluster  

---

# 10. FUTURE-PROOFING RULES

## Rule 1 — No duplicate content  
City pages MUST be unique.

## Rule 2 — Keep structure shallow  
Never exceed `/folder/folder/folder/page`

## Rule 3 — Use consistent templates  
Service → City → Remodel pages should all follow standards.

## Rule 4 — Keep ProFlow360 integrated but subtle  
The parent brand is the focus, CRM is the engine.

## Rule 5 — Maintain the brand kit across all sites  
Never allow off-brand colors or fonts.

---

# END OF PHASE 2

📘 PHASE 3 — PAGE LAYOUTS & TEMPLATES (Full Massive Markdown Document)
ProFlow Home Services — Page Architecture, Layout Templates, Section Structures, UX Flow
# PHASE 3 — PAGE LAYOUTS & TEMPLATES
## ProFlow Home Services  
### Homepage Layout • Service Pages • Remodeling Pages • City Pages • Support Pages • CTA Placement • Form Structure • Layout Notes

---

# 1. INTRODUCTION TO LAYOUT SYSTEM

This phase defines the **visual & content structure** for every page on the website.

Each template includes:
- Page purpose  
- Section-by-section layout  
- Copywriting prompts  
- Component usage  
- Internal linking rules  
- CTA positioning  
- Mobile layout notes  

This standard ensures:
- Developer/design consistency  
- Brand cohesion  
- High conversion performance  
- SEO-optimized structure  
- Future scalability for new services and cities  

---

# 2. GLOBAL PAGE RULES

## 2.1 Section Padding
Every section must use:
Desktop: 64–96px vertical padding
Mobile: 48–64px vertical padding

---

## 2.2 Container Max-Width
Max-width: 1280px
Side padding: 24–32px

---

## 2.3 CTA Button Styles
Primary buttons:
- Background: ProFlow Aqua (#3BB7C8)
- Text: White
- Radius: 6–8px
- Hover: Darker aqua, 5% shadow

Secondary buttons:
- Outline style
- Border: Aqua
- Text: Aqua

---

## 2.4 Typography
Headings: Montserrat  
Body: Inter  

---

## 2.5 Image Ratios
- Hero images: 16:9  
- Galleries: 4:3 or square  
- Process icons: uniform 1:1  

---

# ============================================================
# ============================================================

# 3. HOMEPAGE — FULL LAYOUT (MASTER TEMPLATE)
### URL: `/`

---

## **SECTION 1 — HERO**

### Purpose:
Instantly establish brand, trust, services, and generate conversions.

### Layout:
- Full width background image  
- Dark gradient overlay  
- Large headline + subheadline  
- Two CTAs  
- Phone number visible  
- Small “Powered by ProFlow360™” tag under CTA  

### Content Example:
**Headline:**  
“Complete Home Services, Repairs & Remodeling You Can Trust.”

**Subheadline:**  
“Serving Sacramento, Roseville, Rocklin & surrounding cities with gutters, painting, handyman work, pressure washing, and premium remodeling services.”

**Buttons:**
- Primary: **Get Free Estimate**
- Secondary: **Call (###) ###-####**

---

## **SECTION 2 — SERVICE CATEGORY GRID**

### Purpose:
Show the breadth of services at a glance.

### Layout:
- 3×2 grid of cards  
- Icons or small photos  
- Each card links to service page  

### Cards:
- Gutter Cleaning & Guards  
- Painting (Interior & Exterior)  
- Handyman Services  
- Pressure Washing  
- Roof & Solar Cleaning  
- Remodeling  

---

## **SECTION 3 — WHY CHOOSE PROFLOW**

### Purpose:
Sell trust, authority, and professionalism.

### Layout:
4-column horizontal icons with text.

### Points:
- Local, family-owned
- Licensed & insured
- Over 1,000 happy customers
- Tech-enabled scheduling & communication

---

## **SECTION 4 — FEATURED PROJECTS**

### Purpose:
Visual proof + trust booster.

### Layout:
- Masonry grid or 3-column gallery  
- 6–12 images  

### CTA:
Button: **View All Projects**

---

## **SECTION 5 — REMODELING SPOTLIGHT**

### Purpose:
Highlight high-ticket services.

### Layout:
- 1–2 hero remodel photos  
- 3 service tiles (Bath, Kitchen, Conversions)  
- Copy block  

### CTA:
**Explore Remodeling**

---

## **SECTION 6 — SERVICE AREAS**

### Purpose:
Local SEO authority.

### Layout:
- Service area map graphic  
- Cities in 3 columns  
- Each city name links to its page  

---

## **SECTION 7 — REVIEWS**

### Purpose:
Build trust.

Layout:
- Grid of 3–6 testimonials  
- Include profile images or stars  

---

## **SECTION 8 — FINAL CTA**

Dark background.

**Headline:**  
“Ready to protect and upgrade your home?”

Buttons:
- Get Estimate  
- Call Now  

---

# ============================================================
# ============================================================

# 4. SERVICE PAGE TEMPLATES (MASTER FORMAT)

This template is used for:
- Gutter Cleaning
- Gutter Guards
- Gutter Repair/Replacement
- Interior Painting
- Exterior Painting
- Handyman
- Pressure Washing
- Roof/Solar Cleaning

---

# SERVICE PAGE TEMPLATE

### URL Structure:
`/services/{service-name}`

---

## **SECTION 1 — HERO**

### Elements:
- Headline (Service + Region)
- Supporting statement  
- 2 CTAs  
- Image or illustration  

**Example:**
“Professional Gutter Cleaning in Sacramento & Surrounding Cities”

---

## **SECTION 2 — PROBLEM + VALUE PROPOSITION**

Explain:
- Why the service matters  
- Risks of ignoring issue  
- Benefits of professional work  

Use a layout similar to Sacramento Gutter Guard’s text block.

---

## **SECTION 3 — BEFORE / AFTER (Optional)**

- Two images  
- Slider component or side-by-side  

---

## **SECTION 4 — OUR 3-STEP PROCESS**

Reusable process component:
1. **Inspection**
2. **Service Execution**
3. **Cleanup & Final Check**

---

## **SECTION 5 — WHAT YOU GET WITH PROFLOW**

Bullet list of benefits:
- Licensed & insured
- Fast scheduling
- Transparent pricing
- Local technicians
- ProFlow360-powered updates
- Satisfaction guarantee

---

## **SECTION 6 — PHOTO GALLERY**

- 6–12 images  
- Lightbox enabled  

---

## **SECTION 7 — RELATED SERVICES (Optional)**

Links to:
- Gutter guards  
- Gutter repair  
- Painting  
- Handyman  

---

## **SECTION 8 — SERVICE AREAS**

List:
- Citrus Heights  
- Roseville  
- Rocklin  
- Loomis  
- Auburn  
- Folsom  
- etc.

---

## **SECTION 9 — FAQ**

4–8 service-specific questions.

---

## **SECTION 10 — FINAL CTA**

Dark section with:
- Get Estimate  
- Call Now  

---

# ============================================================
# ============================================================

# 5. REMODELING PAGE SYSTEM

The remodeling division requires **premium-style pages**.

There are 6 main remodeling pages:
- Remodeling (parent)
- Bathroom
- Kitchen
- Garage Conversions
- Flooring
- Drywall & Framing
- ADUs (future)

---

# REMODELING PARENT PAGE

### URL:
`/remodeling`

---

## **SECTION 1 — HERO**
“Kitchens, Bathrooms, Conversions & Full Home Remodeling”

Buttons:
- Start Your Project
- Call

---

## **SECTION 2 — WHY CHOOSE PROFLOW FOR REMODELING**

- Licensed contractor  
- Local expertise  
- Tech-enabled communication  
- Clean job sites  
- Transparent proposals  

---

## **SECTION 3 — REMODELING SERVICE GRID**

Tiles:
- Bathroom Remodeling  
- Kitchen Remodeling  
- Flooring  
- Garage Conversions  
- Drywall/Framing  
- ADUs  

---

## **SECTION 4 — SIGNATURE PROJECTS**

Show 6–9 remodel photos.

---

## **SECTION 5 — PROCESS**

1. Consultation  
2. Scope & Estimate  
3. Design & Planning  
4. Construction  
5. Final Walkthrough  

---

## **SECTION 6 — CLIENT REVIEWS**

---

## **SECTION 7 — CTA**

Dark CTA:  
“Start Your Remodeling Consultation Today”

---

# INDIVIDUAL REMODEL PAGES

### URL examples:
/remodeling/bathroom
/remodeling/kitchen
/remodeling/flooring
/remodeling/garage-conversions
/remodeling/drywall-framing
/remodeling/adu

Each remodel page includes:

1. Hero  
2. What’s included  
3. Before/after  
4. Project gallery  
5. Cost ranges (optional)  
6. Process  
7. Reviews  
8. Service areas  
9. CTA  

---

# ============================================================
# ============================================================

# 6. CITY PAGE TEMPLATES

City pages are critical for local SEO.

### URL Structure:
`/service-areas/{city-name}`

---

## CITY PAGE LAYOUT

## **SECTION 1 — HERO**

Headline:
“{City} Home Services, Repairs & Remodeling”

---

## **SECTION 2 — SERVICES OFFERED IN {CITY}**

List all services with cards or links.

---

## **SECTION 3 — WHY {CITY} TRUSTS PROFLOW**

Use location-specific copy:
- “Near Blue Oaks”  
- “Close to Rocklin Crossing”  
- “Common home styles in Rocklin include X, Y, Z”  

---

## **SECTION 4 — PROJECT GALLERY (CITY-SPECIFIC)**

If available.

---

## **SECTION 5 — NEIGHBORHOODS WE SERVE**

List neighborhoods for SEO.

---

## **SECTION 6 — REVIEWS**

---

## **SECTION 7 — CTA**

---

# ============================================================
# ============================================================

# 7. SUPPORTING PAGES

These complete the site.

---

# ABOUT PAGE

Sections:
- Mission  
- Vision  
- Company story  
- Meet the team  
- Tech advantage (ProFlow360)  
- Service coverage  
- CTA  

---

# PROJECTS PAGE

Grid gallery  
Filters: Painting | Gutters | Remodeling | Handyman  

---

# REVIEWS PAGE

Pull from:
- Google  
- Yelp  
- Facebook  

Use card layout.  

---

# CONTACT PAGE

Form fields:
- Name  
- Phone  
- Email  
- Service needed  
- City  
- Project details  

Side panel:
- Phone number  
- Hours  
- Service areas  

---

# BLOG PAGE

List of articles  
Sidebar:
- Categories  
- Featured posts  

---

# FINANCING PAGE

Use remodeling-friendly structure:
- Financing options  
- Payment plans  
- How to qualify  
- CTA to apply  

---

# ============================================================
# ============================================================

# 8. CTA & FORM STRUCTURE

## CTA Locations
Every page must include:
- Hero CTA  
- Mid-page CTA  
- Bottom CTA  

---

## Form Fields
Minimum:
- Name  
- Phone  
- Email  
- City  
- Service needed  
- Message  

---

## Form Confirmation
“This request has been successfully logged into ProFlow360. Expect a message shortly.”

---

# ============================================================
# ============================================================

# 9. MOBILE LAYOUT NOTES

- Collapse nav into hamburger  
- Sticky bottom “Call Now” button on mobile  
- Stacked service cards  
- Gallery in 2-column grid  
- Section padding reduced from 64px → 48px  
- Hero text centered on mobile  

---

# END OF PHASE 3

📘 PHASE 4 — FULL SEO STRATEGY (Markdown Master Doc)
ProFlow Home Services — Local, Regional, Remodeling & Content SEO Strategy
# PHASE 4 — SEO STRATEGY
## ProFlow Home Services  
### Local SEO • Regional SEO • Remodeling SEO • Content Strategy • Interlinking • GBP • Technical SEO • Schema

---

# 1. SEO STRATEGY OVERVIEW

## 1.1 Core SEO Goals
1. Dominate local search for:
   - Gutter services
   - Painting
   - Handyman
   - Pressure washing
   - Roof & solar cleaning
2. Build **high-ticket traffic** for:
   - Bathroom remodeling
   - Kitchen remodeling
   - Garage conversions
   - ADUs
3. Own “home services” searches in:
   - Citrus Heights (home base)
   - Surrounding cities (Roseville, Rocklin, Loomis, etc.)
4. Create a scalable system that:
   - Supports expansion into new cities
   - Supports new services
   - Supports eventual franchises or licensees

---

## 1.2 Core Principles

- **Hub & Spoke Architecture**  
  ProFlowHomeServices.com = hub  
  Service pages, city pages, microsites = spokes.

- **Topical Authority**  
  Detailed service pages, city pages, blogs, and remodel content cluster.

- **User Intent Priority**  
  Every key URL must match a clear search intent:
  - “gutter cleaning near me”
  - “bathroom remodel rocklin”
  - “home services roseville”

- **Consistency**  
  All NAP (Name, Address, Phone) consistent across:
  - Website
  - Google Business Profile
  - Directories
  - Microsites

---

# 2. KEYWORD STRATEGY

## 2.1 Core Keyword Themes

1. **Service + City**
   - “gutter cleaning sacramento”
   - “exterior painting roseville”
   - “handyman rocklin”
   - “pressure washing citrus heights”

2. **Home Services + City**
   - “home services citrus heights”
   - “home repair roseville”
   - “home improvement rocklin”

3. **Remodel + City**
   - “bathroom remodel sacramento”
   - “kitchen remodeling roseville”
   - “garage conversion rocklin”
   - “adu builder sacramento”

4. **Near Me Variants**
   - “gutter cleaning near me”
   - “house painter near me”
   - “bathroom contractor near me”

5. **Problem / Solution Searches**
   - “water overflowing from gutters”
   - “peeling exterior paint”
   - “bathroom remodel cost sacramento”
   - “can I convert my garage to a bedroom in california”

---

## 2.2 Keyword Mapping (High-Level)

### Homepage
Targets:
- “home services [region]”
- “home repair [region]”
- “remodeling contractors [region]”
- Brand: “ProFlow Home Services”

---

### Service Pages
**Examples:**

`/services/gutter-cleaning`  
- “gutter cleaning sacramento”
- “gutter cleaning near me”
- “gutter cleaners [cities]”

`/services/exterior-painting`  
- “exterior house painter sacramento”
- “house painting [city]”

`/services/handyman`  
- “handyman [city]”
- “home repair [city]”

`/services/pressure-washing`  
- “pressure washing [city]”
- “house washing [city]”

`/services/roof-solar-cleaning`  
- “roof cleaning [city]”
- “solar panel cleaning [city]”

---

### Remodeling Pages

`/remodeling/bathroom`  
- “bathroom remodel [city]”
- “bathroom remodeling contractor [city]”

`/remodeling/kitchen`  
- “kitchen remodel [city]”
- “kitchen remodeling sacramento”

`/remodeling/garage-conversions`  
- “garage conversion [city]”
- “convert garage to bedroom [city]”

`/remodeling/adu`  
- “adu builder sacramento”
- “adu contractor near me”

---

### City Pages

`/service-areas/roseville`  
Targets:
- “home services roseville”
- “home repair roseville”
- “remodeling roseville”
- “gutter cleaning roseville”
- “painter roseville”

Each city page acts as a **local authority hub** linking into:

- Service pages
- Remodeling pages
- Contact page

---

# 3. ON-PAGE SEO GUIDELINES

## 3.1 Title Tags

Format:
- Homepage:  
  `ProFlow Home Services | Gutters, Painting, Handyman & Remodeling in Sacramento Area`

- Service Pages:  
  `Gutter Cleaning in Sacramento & Nearby Cities | ProFlow Home Services`  
  `Bathroom Remodeling in Sacramento | ProFlow Home Services`

- City Pages:  
  `Home Services in Roseville, CA | ProFlow Home Services`  
  `Handyman & Remodeling in Rocklin, CA | ProFlow Home Services`

---

## 3.2 Meta Descriptions

Structure:
- 140–160 characters  
- Include city + service + CTA  

Example:
“Professional gutter cleaning and guards for homes in Sacramento, Roseville, and Rocklin. Local team, fast service, fair pricing. Get a free estimate today.”

---

## 3.3 Headings (H1–H3)

- One **H1** per page, always containing:
  - Service + area or
  - City + “home services” or
  - Remodel + area

Examples:
- H1: “Gutter Cleaning in Sacramento & Surrounding Cities”
- H1: “Bathroom Remodeling for Sacramento-Area Homes”
- H1: “Home Services & Remodeling in Roseville, CA”

---

## 3.4 Image Alt Text

Describe:
- The service
- The city, if relevant

Example:
- `alt="Freshly painted two-story home in Roseville"`
- `alt="New gutter guards installed on a Citrus Heights home"`

---

## 3.5 URL Best Practices

- Lowercase  
- Hyphens as separators  
- No stop-words unless needed  

Examples:
- `/services/handyman`
- `/remodeling/bathroom`
- `/service-areas/roseville`

---

# 4. CONTENT STRATEGY (BLOG + SUPPORTING CONTENT)

## 4.1 Content Goals

1. Support main service pages with long-tail content  
2. Build remodeling authority  
3. Help city pages rank with localized content  
4. Capture informational queries that can convert later  

---

## 4.2 Blog Topic Categories

### Category 1 — Gutter & Exterior Care
- “How often should you clean your gutters in Sacramento?”
- “Gutter guards vs gutter screens: What actually works?”
- “The real cost of ignoring clogged gutters”

---

### Category 2 — Painting & Home Aesthetics
- “Best time of year to paint your home exterior in Northern California”
- “Interior paint color ideas for small Sacramento homes”
- “How long does exterior paint last in California’s climate?”

---

### Category 3 — Handyman & Home Maintenance
- “Top 10 common home repairs in older Sacramento homes”
- “ Seasonal home maintenance checklist for Sacramento homeowners”

---

### Category 4 — Remodeling & Construction
- “Bathroom remodel cost breakdown for Sacramento homeowners”
- “Can I convert my garage into a bedroom in California?”
- “What to know before starting a kitchen remodel in Roseville”
- “ADU regulations overview for Sacramento County”

---

### Category 5 — City-Specific Resouces
- “Homeowner guide to living in Roseville: Maintenance, upgrades & tips”
- “Rocklin home styles & common repair needs”

---

## 4.3 Internal Linking From Blog Posts

Every blog post should:
- Link to related service pages  
- Link to at least 1 city page  
- Link to the contact page or estimate page  

---

# 5. LOCAL SEO STRATEGY

## 5.1 Google Business Profiles (GBP)

You should maintain at least:

1. **Primary GBP**  
   Name: ProFlow Home Services  
   Category: General Contractor OR Home Services / Remodeling (depending on focus)

2. **Support GBPs** (optional but powerful)
   - For painting (ProFlow Painting)
   - For gutters (Sacramento Gutter Guard, Rocklin Gutter Guard)
   - For remodeling once GC license is active

---

## 5.2 GBP Optimization

Each GBP must have:
- Correct NAP (Name, Address, Phone)  
- Website URL (either main site or microsite)  
- Service area configured (50–100 miles radius)  
- Categories:
  - “Gutter cleaning service”
  - “Painting”
  - “Remodeler”
  - “Handyman”
  - etc. depending on profile  

---

## 5.3 GBP Posts

Post 1–2 times a week:
- Highlight recent jobs  
- Seasonal offers  
- Link back to specific service pages  
- Use city names in copy  

---

## 5.4 Reviews Strategy

Ask for reviews:
- After each job (via ProFlow360 automation)  
- Request mention of:
  - Service type
  - City
  - Experience  

Example ask:
“If you don’t mind, mention the service we did and your city — it helps local homeowners find us.”

---

# 6. REGIONAL & EXPANSION SEO STRATEGY

## 6.1 Primary Cluster (Next 12–18 Months)

Core cities:
- Citrus Heights
- Roseville
- Rocklin
- Loomis
- Auburn
- Folsom
- Granite Bay
- Lincoln
- Sacramento

Each gets:
- A city page  
- References in service pages  
- Local content where possible  

---

## 6.2 Secondary Expansion (After Core Dominance)

Target:
- Elk Grove  
- Davis  
- Vacaville  
- Bay Area (select cities with strategic value)  

Add:
- More city pages  
- Google Business locations (if/when you have real presence)  

---

# 7. REMODELING SEO STRATEGY

## 7.1 High-Value Keywords

Focus on:
- “bathroom remodel [city]”
- “kitchen remodel [city]”
- “garage conversion [city]”
- “general contractor [city]”
- “adu builder sacramento”

---

## 7.2 Content to Support Remodel Pages

Examples:
- “What to expect during a bathroom remodel in Sacramento”
- “How long does a kitchen remodel take?”
- “Garage conversion vs. ADU: What’s better for your property?”

---

## 7.3 Visual Assets

For remodel SEO, visuals matter more:
- Before/after images  
- 3D mockups if available  
- Detailed scope descriptions  

---

# 8. INTERNAL LINKING SYSTEM (SEO FOCUSED VIEW)

## 8.1 Key Rules

- Every important URL should receive links from:
  - Homepage
  - Related service/city pages
  - Relevant blog posts

- Service pages ↔ City pages  
- Remodeling pages ↔ Service + City pages  
- Blog ↔ Everything

---

## 8.2 Link Anchor Text Examples

- “gutter cleaning in Roseville” → `/services/gutter-cleaning` + `/service-areas/roseville`  
- “our bathroom remodeling services” → `/remodeling/bathroom`  
- “home services in Rocklin” → `/service-areas/rocklin`

---

# 9. TECHNICAL SEO

## 9.1 Core Web Vitals

- Fast load time  
- Optimized images (WebP)  
- Minimize unused JS/CSS  
- Use caching & CDN when possible  

---

## 9.2 Mobile-First

- Responsive layout  
- Tap-friendly buttons  
- Visible phone CTA  

---

## 9.3 Sitemap & Robots

- `sitemap.xml` must include:
  - All service pages  
  - All city pages  
  - All remodel pages  
  - Blog index  
- `robots.txt` must allow crawling of all public pages.

---

## 9.4 Canonicals

Use `<link rel="canonical">` to:
- Avoid duplicates between city pages with similar content  
- Ensure only main URL for a service is set as canonical  

---

## 9.5 301 Redirect Strategy

In case of:
- Page renames  
- URL structure changes  
- Domain consolidation in the future

Always:
- 301 old URL → new URL  
- Never leave important old URLs returning 404  

---

# 10. SCHEMA MARKUP STRATEGY

## 10.1 LocalBusiness Schema

Add JSON-LD on:
- Homepage
- Contact page
- City pages

Include:
- Name  
- Address  
- Phone  
- Website  
- Opening hours  
- Service area  

---

## 10.2 Service Schema

On service pages:
- Use `Service` schema with:
  - serviceType  
  - areaServed  

---

## 10.3 Review Schema

Where possible:
- Mark up aggregate ratings  
- Show average rating & count  

---

# 11. TRACKING & MEASUREMENT

## 11.1 Core KPIs

Track:
- Organic traffic by:
  - Service pages  
  - City pages  
  - Remodel pages  
- Phone calls from website  
- Form submissions  
- Conversion rate per page type  

---

## 11.2 Tools

- Google Analytics  
- Google Search Console  
- GBP insights  

---

# 12. EXECUTION PRIORITIES (90–180 DAYS)

## Phase 1 (0–60 days)
1. Launch main site with:
   - Homepage  
   - Service pages  
   - Remodel parent + 1–2 remodel services  
   - Contact, About, Projects  
2. Set up GBP for ProFlow Home Services.  
3. Start collecting reviews under new brand.

---

## Phase 2 (60–120 days)
1. Add all city pages  
2. Optimize internal linking  
3. Launch 1–2 blog posts/month  
4. Start remodeling-focused blog content

---

## Phase 3 (120–180 days)
1. Expand content volume  
2. Add more remodel case studies  
3. Add secondary city pages if needed  
4. Test targeted Google Ads to support SEO  

---

# END OF PHASE 4

📘 PHASE 5 — UI/UX COMPONENT LIBRARY (Full Markdown Document)
ProFlow Home Services — Components, Layout Patterns, Reuse Rules, and UX Guidelines
# PHASE 5 — UI/UX COMPONENT LIBRARY
## ProFlow Home Services  
### Components • Layout Patterns • Responsiveness • Interaction Rules • Reusability

---

# 1. INTRODUCTION

This document defines the full **UI/UX system** for ProFlow Home Services and all connected brands.

Goals:
- Create a **consistent design language** across all sites  
- Ensure **high usability and conversion**  
- Allow **rapid development** with reusable components  
- Maintain **brand authority & premium feel**

This system should be used as the default for:
- ProFlowHomeServices.com  
- Gutter microsites  
- ProFlow Painting  
- New satellite or franchise sites  

---

# 2. GLOBAL LAYOUT PRINCIPLES

## 2.1 Grid System

- **12-column grid**  
- **Max width:** 1280px  
- **Gutters (between columns):** 24px  
- **Side padding:** 24–32px on desktop, 16–24px on mobile  

---

## 2.2 Section Spacing

Vertical spacing between sections:

- Desktop: **64–96px**  
- Mobile: **48–64px**

Consistent spacing gives the site a **premium, breathable feel**.

---

## 2.3 Corner Radius

Use consistent corner radii:

- Buttons: **6–8px**  
- Cards: **6px**  
- Input fields: **6px**  
- Photo thumbnails: **6px**

---

## 2.4 Shadows & Elevation

Use **soft, subtle shadows**:

- Very light shadows for:
  - Cards  
  - Modals  
  - Hover states  

Avoid heavy, harsh shadows to keep the aesthetic clean.

---

## 2.5 Typography Rules

Headings: **Montserrat**  
Body: **Inter**

Body text size:
- Desktop: 16–18px  
- Mobile: 15–16px  

Line height:
- 1.4–1.6 for readability.

---

# 3. CORE COMPONENTS

## 3.1 Buttons

### Primary Button
- Background: ProFlow Aqua (#3BB7C8)  
- Text: White (#FFFFFF)  
- Radius: 6–8px  
- Padding: 12–16px vertical, 24px horizontal  
- Font: Montserrat Semibold, 16–18px  

**Examples:**
- “Get Free Estimate”
- “Call Now”
- “Schedule Consultation”

Hover:
- Slightly darker aqua tone
- Add subtle shadow

Disabled:
- Lighter aqua
- Reduced opacity

---

### Secondary Button (Outline)
- Border: 2px ProFlow Aqua  
- Text: ProFlow Aqua  
- Background: Transparent  
- Radius: 6–8px  

Used for:
- “Learn More”
- “View Services”
- “View Projects”

---

### Text Link Style
- Underline on hover  
- Color: ProFlow Aqua or Slate  
- Must be visually distinct from body text  

---

## 3.2 Forms

### Form Fields
- Background: White or Mist  
- Border: 1px #D1D5DB (light gray)  
- Focus state: Border color changes to Aqua  
- Radius: 6px  
- Height: 42–48px  

**Standard Fields:**
- Name  
- Email  
- Phone  
- City (dropdown or text)  
- Service(s) requested (multi-select or dropdown)  
- Preferred contact method  
- Message / Project Details (textarea)  

---

### Form Layout

#### Desktop:
- Two columns where logical (e.g., Name + Phone)  
- Full width for message field  

#### Mobile:
- Single column layout  
- Stack fields vertically  

---

### Submit Button
- Use primary button style  
- Full width on mobile  
- Right-aligned or centered on desktop  

---

### Inline Form Component

Used in:
- Hero sections  
- Contact blocks  

Mini layout:
- 2–3 fields (Name, Phone, Service)  
- Inline submit button  

---

## 3.3 Cards

### Service Cards

Used on:
- Homepage service grid  
- Service index pages  

Structure:
- Icon or small image at top  
- Title (H3 or H4)  
- 2–3 lines of descriptive text  
- “Learn more” link or arrow  

Style:
- Background: White or Mist  
- Border: 1px #E5E7EB or subtle shadow  
- Radius: 6px  
- Padding: 20–24px  

---

### Project Cards

Used in Projects / Gallery pages.

Structure:
- Image thumbnail  
- Title (optional)  
- City / Service subtitle  

Interactions:
- On hover: Slight zoom on image or subtle shadow  

---

### Testimonial Cards

Layout:
- Quotation text  
- Name, city  
- Star rating  
- Optional tag: “Gutter client”, “Remodel client”, etc.  

Style:
- Light background  
- Small accent border or left accent strip in Aqua or Evergreen  
- Radius: 6px  

---

## 3.4 Section Types

### Hero Section

Components:
- Background image or gradient  
- Headline (H1)  
- Subheadline  
- 1–2 primary CTAs  
- Optional: Small photo or illustration  

On mobile:
- Stack text above buttons  
- Optionally remove background image for performance  

---

### Split Section (Text + Image)

Used for:
- Service breakdowns  
- Process explanations  
- About content  

Layout:
- Left: Image  
- Right: Text  
(or reversed)

Mobile:
- Image on top  
- Text below  

---

### Feature Grid

3–4 features in a row (or 2x2 grid on mobile).

Use for:
- “Why Choose Us”  
- “What You Get”  
- “Service benefits”

---

### Process Timeline

Icons in a horizontal or vertical layout.

Steps:
1. Step title  
2. Short description  

---

### FAQ Section

Accordion component:
- Question row (clickable)  
- Answer expands with simple animation  

Design:
- Minimal borders  
- Use dividing lines to separate entries  

---

## 3.5 Navigation Components

### Desktop Navigation

Structure:
- Left: Logo  
- Center: Main nav items  
- Right: CTA button + phone number  

Hover:
- Underline or subtle background highlight  

Dropdowns:
- White background  
- Shadow  
- Radius: 8px  

---

### Mobile Navigation

- Hamburger icon  
- Slide-down or side drawer  
- Full nav items with collapsible submenus for Services, Remodeling, Service Areas  
- “Get Estimate” button fixed near top or bottom  

---

## 3.6 Footer Component

Sections:
- Logo & short description  
- Quick links (Services, About, Contact)  
- Service Areas list  
- Contact info (phone, email, address)  
- “Powered by ProFlow360™” tag  

Background:
- ProFlow Midnight  
- Text: White  
- Links: Aqua  

---

# 4. PAGE-SPECIFIC COMPONENT USAGE

## 4.1 Homepage

Use components:
- Hero  
- Service Cards  
- Why Choose Us (feature grid)  
- Project Grid  
- Remodeling Spotlight section  
- Service Areas links  
- Testimonials  
- Final CTA  

---

## 4.2 Service Pages

Use components:
- Hero  
- Problem/benefit split sections  
- Process timeline  
- Service gallery cards  
- Testimonials  
- FAQ accordion  
- Final CTA  

---

## 4.3 Remodeling Pages

Use components:
- Premium-style hero (larger imagery)  
- Before/after sliders  
- Project portfolio grid  
- Process breakdown  
- Cost range boxes (optional)  
- Testimonials  
- Financing CTA section  

---

## 4.4 City Pages

Use components:
- Simple hero  
- Service cards for that city  
- City-specific project grid  
- Location-based testimonials  
- Neighborhood list  
- Local CTA  

---

## 4.5 Blog

Use components:
- Post cards (title, excerpt, date)  
- Sidebar: recent posts, categories  
- Article layout:  
  - Large title  
  - Cover image  
  - Content  
  - Inline CTAs → services + city pages  

---

# 5. INTERACTIONS / UX RULES

## 5.1 Hover States

- Buttons: darker background + soft shadow  
- Cards: slight elevation + shadow  
- Links: underline  

---

## 5.2 Focus States (Accessibility)

- Form fields: border color → Aqua, 2px  
- Buttons: visible outline when focused (keyboard navigation)  

---

## 5.3 Error States

Form error messages:
- Red text  
- Concise and specific  
- Example: “Please enter a valid email address.”  

---

## 5.4 Success Messages

After form submit:
- Show confirmation message:
  “Thanks! Your request has been received and logged in ProFlow360. We’ll contact you shortly.”  

---

# 6. RESPONSIVE BEHAVIOR

## 6.1 Breakpoints (Recommended)

- Mobile: < 640px  
- Tablet: 641px–1024px  
- Desktop: > 1024px  

---

## 6.2 Mobile Adjustments

- Navigation collapses  
- Service grids → 1 column  
- Section padding reduced  
- Center-aligned hero text  
- Forms full width  

---

## 6.3 Tablet Adjustments

- Grids: 2 columns  
- Navigation: can still be in mobile menu or a simple top bar  
- CTA button remains visible  

---

# 7. MICROCOPY AND UX TEXT

## 7.1 Form Labels

Use direct, simple labels:
- “Full Name”
- “Phone Number”
- “How can we help?”  

---

## 7.2 Button Microcopy

Use action words:
- “Get Free Estimate”
- “Start My Project”
- “Schedule My Service”
- “Call Now”

Avoid vague:
- “Submit”
- “Click Here”

---

## 7.3 Helper Text

Under fields:
- “We’ll never share your information.”  
- “Include any details that will help us quote your project accurately.”  

---

# 8. COMPONENT REUSE ACROSS MICROSITES

## 8.1 Shared Component Set

All ProFlow brand sites should share:
- Button styles  
- Form styles  
- Card layouts  
- Navigation structure (with brand-specific tweaks)  
- Typography  
- Section spacing  

---

## 8.2 Gutter Sites (Sacramento & Rocklin)

Apply:
- Same button styles  
- Same fonts  
- Same spacing  
- Same testimonial cards  
- Same process layout  

Include:
- “A Division of ProFlow Home Services” text element in header or hero.

---

## 8.3 ProFlow Painting

Apply:
- Same component set, using more of the Aqua accent  
- Include “Powered by ProFlow Home Services” small text in footer  

---

## 8.4 ProFlow360

Can keep a slightly more “SaaS-like” layout, but:
- Reuse typography  
- Reuse buttons  
- Reuse form styles  

---

# 9. ACCESSIBILITY

## 9.1 Color Contrast

Ensure:
- Text vs background contrast ratio is at least 4.5:1 for body text  
- Large headings at least 3:1  

---

## 9.2 Keyboard Navigation

- All interactive elements reachable via Tab  
- Visible focus indicators  

---

## 9.3 ARIA / Semantic HTML

- Use `<nav>`, `<main>`, `<section>`, `<footer>` appropriately  
- Use ARIA tags for accordions and modals  

---

# 10. COMPONENT LIBRARY IMPLEMENTATION NOTES

## 10.1 Suggested Implementation

If using a modern frontend stack (React, Next.js, etc.):

Component list:
- `<Button />`
- `<Card />`
- `<Hero />`
- `<ServiceGrid />`
- `<TestimonialList />`
- `<Gallery />`
- `<CityList />`
- `<FAQAccordion />`
- `<Form />`
- `<Navbar />`
- `<Footer />`

Each with props to customize:
- Text  
- Links  
- Layout variations  

---

## 10.2 Design Handoff

Designs should be created in:
- Figma or similar tool  
- With:
  - Components  
  - Styles  
  - Auto-layout for responsiveness  

---

# END OF PHASE 5

# ================================
# STEP ADDITIONS
# ================================

# STEP 1 — MASTER INDEX
(Developers/designers should use this index to navigate the document.)

- Branding  
- Website Architecture  
- Layout Templates  
- SEO Strategy  
- UI/UX Components  
- Developer Guidelines  
- Content Guidelines  
- Deployment Checks  

---

# STEP 2 — EXECUTIVE PROJECT SUMMARY
ProFlow Home Services is the unified parent brand bringing together gutter services, painting, handyman, pressure washing, roof/solar cleaning, and full-service remodeling. This document outlines the entire architecture, branding, SEO, UI/UX, and development system needed to build a scalable, franchise-ready home services ecosystem powered by ProFlow360.

---

# STEP 3 — DEVELOPER IMPLEMENTATION GUIDELINES
## Recommended Stack
- Frontend: Next.js / React  
- CMS: Headless ( Strapi ) 
- Hosting: Vercel / Netlify  
- Styling: TailwindCSS 
- Component Structure:
  /components  
    /ui  
    /layout  
    /sections  
    /cards  
    /forms  

## Routing Rules
Use clean, SEO-friendly URLs exactly as defined in Phase 2.

## Image Optimization
Use WebP, lazy loading, modern formats.

## Reusability
ALL components must be built as reusable modules to be shared across microsites.

---

# STEP 4 — CONTENT & COPYWRITING GUIDELINES
## Voice
Professional, local, modern, warm, trustworthy.

## Structure for Service Pages
- Problem  
- Solution  
- Process  
- Benefits  
- Service Areas  
- FAQ  
- CTA  

## SEO Rules
- Use keywords naturally  
- Add internal links every 150–200 words  
- Keep sentences readable (Grade 7–8)  

---

# STEP 5 — DEPLOYMENT & LAUNCH CHECKLIST
## Prelaunch
- Test all forms  
- Install analytics & tracking  
- Submit sitemap  
- Optimize images  
- Test mobile  

## Post-launch
- Verify indexing  
- Monitor Search Console  
- Add Google Business Profile links  
- Begin content publishing  

---

# END OF DOCUMENT