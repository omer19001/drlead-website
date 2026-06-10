---
name: DrLead
description: AI-powered CRM and omnichannel platform for Gulf businesses
colors:
  navy-base: "#0F172A"
  navy-deep: "#0A0F1E"
  surface-elevated: "#1E293B"
  blue-primary: "#2563EB"
  cyan-accent: "#06B6D4"
  sky-highlight: "#38BDF8"
  muted-slate: "#64748B"
  offwhite: "#F8FAFC"
  white-text: "#FFFFFF"
  border-subtle: "rgba(255,255,255,0.05)"
  border-low: "rgba(255,255,255,0.08)"
  border-mid: "rgba(255,255,255,0.10)"
typography:
  display:
    fontFamily: "Plus Jakarta Sans, system-ui, sans-serif"
    fontSize: "clamp(3rem, 8vw, 5rem)"
    fontWeight: 800
    lineHeight: 1.05
    letterSpacing: "-0.02em"
  headline:
    fontFamily: "Plus Jakarta Sans, system-ui, sans-serif"
    fontSize: "clamp(1.875rem, 4vw, 3rem)"
    fontWeight: 700
    lineHeight: 1.1
    letterSpacing: "-0.02em"
  title:
    fontFamily: "Plus Jakarta Sans, system-ui, sans-serif"
    fontSize: "1.25rem"
    fontWeight: 700
    lineHeight: 1.3
    letterSpacing: "-0.01em"
  body:
    fontFamily: "DM Sans, system-ui, sans-serif"
    fontSize: "1rem"
    fontWeight: 400
    lineHeight: 1.7
  label:
    fontFamily: "DM Sans, system-ui, sans-serif"
    fontSize: "0.75rem"
    fontWeight: 500
    letterSpacing: "0.12em"
rounded:
  full: "9999px"
  xl: "0.75rem"
  2xl: "1rem"
  3xl: "1.5rem"
spacing:
  xs: "4px"
  sm: "8px"
  md: "16px"
  lg: "24px"
  xl: "32px"
  2xl: "48px"
  section: "96px"
components:
  button-primary:
    backgroundColor: "{colors.blue-primary}"
    textColor: "{colors.white-text}"
    rounded: "{rounded.xl}"
    padding: "14px 28px"
  button-primary-hover:
    backgroundColor: "#3B82F6"
    textColor: "{colors.white-text}"
    rounded: "{rounded.xl}"
  button-ghost:
    backgroundColor: "transparent"
    textColor: "{colors.offwhite}"
    rounded: "{rounded.xl}"
    padding: "14px 28px"
  button-ghost-hover:
    backgroundColor: "rgba(255,255,255,0.05)"
    textColor: "{colors.white-text}"
    rounded: "{rounded.xl}"
  badge-default:
    backgroundColor: "rgba(37,99,235,0.10)"
    textColor: "{colors.sky-highlight}"
    rounded: "{rounded.full}"
    padding: "6px 14px"
  card-surface:
    backgroundColor: "{colors.surface-elevated}"
    textColor: "{colors.offwhite}"
    rounded: "{rounded.2xl}"
    padding: "24px"
  card-glass:
    backgroundColor: "rgba(255,255,255,0.05)"
    textColor: "{colors.offwhite}"
    rounded: "{rounded.2xl}"
    padding: "24px"
---

# Design System: DrLead

## 1. Overview

**Creative North Star: "The Gulf Control Room"**

DrLead's design language is built around a single image: a serious decision-maker in Riyadh or Dubai, glancing at a dashboard at 9am before their first client call. The interface should feel like it was made for that person — not a startup founder in San Francisco. Everything is dark, information-dense, and precise. No decoration earns its place unless it communicates something. Confidence comes from clarity, not from animation.

The system rejects three specific failure modes that the brand has explicitly called out: generic SaaS cream (white backgrounds, blue buttons, every product looking the same), aggressive sales-funnel tactics (countdown timers, manufactured urgency, wall-to-wall CTAs), and corporate enterprise cold (navy + gold, stock photography, IBM-circa-2010 stiffness). The Gulf Control Room is none of those things. It is purposeful darkness — the kind you find in Bloomberg terminals and Stripe dashboards, not in crypto projects or AI-hype landing pages.

Color is restrained but committed. Two accent colors work as a gradient pair (blue → cyan) and almost never appear separately. The dark surface hierarchy does the structural work. Motion is orchestrated but never decorative — every animation reveals information or guides attention.

**Key Characteristics:**
- Dark-first, always. Light backgrounds exist only as deliberate contrast breaks, not as a default
- Two-color accent system (blue + cyan) used exclusively as a gradient pair on primary actions and hero text
- Tonal elevation: depth comes from layered dark surfaces, not shadows
- Typography is the loudest design element — large, tight, high-contrast headings carry the brand
- Gulf-aware through content and structure, never through decorative motifs

## 2. Colors: The Midnight Gulf Palette

A single-gradient accent system over a layered dark foundation. The palette reads as premium and serious without the coldness of enterprise navy or the aggression of neon-dark.

### Primary
- **Gulf Blue** (`#2563EB`): The primary action color. Used on CTA buttons, active states, and progress indicators. Never used as a background at full opacity on large surfaces.
- **Cyan Reach** (`#06B6D4`): The gradient endpoint. Never used alone — always paired with Gulf Blue as `from-[#2563EB] to-[#06B6D4]`. On text, this gradient only appears on the most important phrase per section.
- **Sky Pulse** (`#38BDF8`): Tertiary accent used for links, badge text, AI status indicators, and hover states on ghost elements. Lighter than Cyan Reach; feels like a glow.

### Neutral
- **Navy Base** (`#0F172A`): Primary page background. The canonical dark surface. Most sections live here.
- **Navy Deep** (`#0A0F1E`): Alternating section background, footer. Slightly darker than Base to create rhythm without borders.
- **Surface Elevated** (`#1E293B`): Card backgrounds, form fields, module containers. The only "raised" surface in the system.
- **Muted Slate** (`#64748B`): Body text on dark backgrounds, meta information, placeholder text. Never used for interactive text.
- **Offwhite** (`#F8FAFC`): Primary text color on dark surfaces. Not pure white — tinted toward blue.
- **Border Subtle** (`rgba(255,255,255,0.05)`): Default card borders, section dividers. Almost invisible; structural only.
- **Border Mid** (`rgba(255,255,255,0.10)`): Hover states, focused inputs, emphasized containers.

### Named Rules

**The One Gradient Rule.** The blue→cyan gradient is the brand's single visual signature. It appears on: primary CTA buttons (background), hero headlines (text clip on the most important phrase), and gradient text spans. It never appears as a background on large surfaces, it is never used with a third color, and cyan is never used without blue. Rarity is the point — one gradient, everywhere it lands, carries the full weight of the brand.

**The Surface Staircase Rule.** Depth is expressed through four surfaces only: `#0A0F1E` (deepest) → `#0F172A` (base) → `#1E293B` (elevated card) → `rgba(255,255,255,0.05)` (glass overlay). No other background values are permitted. If a surface isn't on the staircase, it doesn't belong.

## 3. Typography

**Display Font:** Plus Jakarta Sans (600, 700, 800 weights)
**Body Font:** DM Sans (400, 500, 600 weights)

**Character:** Jakarta Sans at heavy weights is aggressive and geometric — tight letter-spacing amplifies that into something that feels like a headline from a premium financial publication. DM Sans as the body companion is warm enough to soften it without undermining the authority. Together they read as "capable and clear," not "clever and decorative."

### Hierarchy

- **Display** (800 weight, `clamp(3rem, 8vw, 5rem)`, leading `1.05`, tracking `-0.02em`): Hero headlines only. One per page. The phrase that appears in gradient text is always Display size.
- **Headline** (700, `clamp(1.875rem, 4vw, 3rem)`, leading `1.1`, tracking `-0.02em`): Section titles (H2). Every major section has exactly one Headline. Never more than two lines.
- **Title** (700, `1.25rem`, leading `1.3`, tracking `-0.01em`): Card headings (H3), feature names. The workhorse of the page.
- **Body** (400, `1rem`, leading `1.7`): All descriptive copy. Color is always Muted Slate (`#64748B`) on dark backgrounds — never Offwhite, which is reserved for headings. Max line length: 65ch.
- **Label** (500, `0.75rem`, tracking `0.12em`, uppercase): Category badges, stat labels, navigation text, section eyebrow tags. Uppercase + tight tracking signals "metadata," not "content."

### Named Rules

**The Tight Heading Rule.** Every heading gets `letter-spacing: -0.02em`. This is not negotiable. Loose-tracked headings at large sizes feel amateurish. The tracking comes off only at `label` size, where it reverses to wide.

**The Muted Body Rule.** Body text on dark backgrounds is always `#64748B`, not white. White body text at full opacity creates no hierarchy — everything screams at equal volume. Reserve Offwhite for headings and short UI labels only.

## 4. Elevation

DrLead uses **tonal layering, not shadows**. Depth is entirely expressed through the Surface Staircase — four background values that create perceived depth without any `box-shadow`. This is deliberate: shadows on dark backgrounds require precise tuning to avoid muddiness, and the layered-surface approach is more maintainable and more consistent across display types.

The sole exception is **accent glow** — a diffuse blue glow (`box-shadow: 0 0 40px rgba(37, 99, 235, 0.10)`) applied to cards on hover when the intent is to signal interactivity, not depth. This is a state indicator, not a structural shadow.

### Shadow Vocabulary

- **Accent Glow** (`box-shadow: 0 0 40px rgba(37,99,235,0.10)`): Applied on card `:hover` when a card is interactive. Communicates "this responds to you." Never applied at rest.
- **Hero Shadow** (`box-shadow: 0 25px 50px rgba(0,0,0,0.25)`): Dashboard mockups and phone frames only. Creates the illusion of a physical object floating above the page.

### Named Rules

**The Flat-By-Default Rule.** All surfaces are flat at rest. Glow appears only on hover for interactive cards. Shadow appears only on device mockups. If you're adding a shadow to a card at rest, remove it — use a brighter background instead.

## 5. Components

### Buttons

Tactile and confident. Buttons are the only component that uses the gradient in a non-text context.

- **Shape:** Rounded xl (12px radius). No sharp corners, no pill shape.
- **Primary:** Gulf Blue background (`#2563EB`), Offwhite text, `padding: 14px 28px`. On hover: lightens to `#3B82F6`. Subtle scale `1.02` on hover via Framer Motion.
- **Primary Large (Hero CTAs):** Same color, padding `14px 28px`, but larger context means they sit at 16px font-size. Always paired with an arrow icon (`ArrowRight`, 16px).
- **Ghost:** Transparent background, `border: 1px solid rgba(255,255,255,0.10)`, Offwhite text. On hover: `background: rgba(255,255,255,0.05)`. Used as the secondary action alongside a primary button.
- **WhatsApp:** `#16A34A` (emerald-600) background. Reserved exclusively for WhatsApp channel actions. Never reused for other purposes.
- **Focus:** All buttons must have a visible focus ring: `outline: 2px solid #2563EB; outline-offset: 2px`.

### Badges / Chips

- **Default:** `bg: rgba(37,99,235,0.10)`, `border: 1px solid rgba(37,99,235,0.20)`, `text: #38BDF8`. Used for category labels and section eyebrows.
- **Green variant:** Same structure with emerald values. Used for positive status ("Official Partner", "Free Consultation").
- **Amber variant:** Same structure with amber values. Used for warnings or callout states.
- **Shape:** Always `border-radius: 9999px` (pill). `padding: 6px 14px`. `font-size: 0.75rem`, 500 weight, uppercase optional.

### Cards / Containers

Two card types — never mix them on the same page section.

- **Surface Card:** `background: #1E293B`, `border: 1px solid rgba(255,255,255,0.05)`, `border-radius: 1rem (16px)`, `padding: 24px–32px`. Default card for feature grids, testimonials, pricing.
- **Glass Card:** `background: rgba(255,255,255,0.05)`, `backdrop-filter: blur(12px)`, `border: 1px solid rgba(255,255,255,0.10)`, same radius and padding. Used sparingly — consultation forms, overlay content, AI status panels.
- **Interactive cards:** Add `transition: border-color 300ms, box-shadow 300ms`. On hover: border shifts to `rgba(37,99,235,0.30)`, accent glow applies.
- **No nested cards.** A card inside a card is always wrong.

### Inputs / Fields

- **Style:** `background: rgba(255,255,255,0.05)`, `border: 1px solid rgba(255,255,255,0.10)`, `border-radius: 0.75rem (12px)`, `padding: 10px 16px`, `color: #F8FAFC`.
- **Placeholder:** `color: #64748B`.
- **Focus:** `border-color: rgba(37,99,235,0.50)`. No glow, no scale — just the border shift.
- **Select elements:** Same style but `background: #0F172A` (Navy Base) to avoid OS default appearance conflicts.
- **Error:** `border-color: rgba(239,68,68,0.50)`, error text in `#F87171`.

### Navigation

- **Desktop header:** Transparent at top → `background: rgba(15,23,42,0.95) + backdrop-filter: blur(12px)` on scroll. Height `64px`. Logo left, nav center, CTAs right.
- **Nav links:** `color: #64748B`, on hover `color: #F8FAFC`, on active `color: #F8FAFC + background: rgba(255,255,255,0.10)`. `border-radius: 0.5rem`. `font-size: 0.875rem`, 500 weight.
- **Mobile menu:** Full-screen overlay `#0A0F1E`. Nav links stagger in at 60ms intervals via Framer Motion. Ghost "Login" + primary "Start Free Trial" at the bottom.

### Gradient Text (Signature Component)

The only legitimate use of `background-clip: text` in the system — the impeccable skill's "gradient text" ban applies to decorative use. Here it is structural: one phrase per section receives gradient text to signal hierarchy, not as decoration.

- **Rule:** One phrase per section hero. Never more than one heading on a page.
- **Implementation:** `background: linear-gradient(135deg, #2563EB, #06B6D4); -webkit-background-clip: text; -webkit-text-fill-color: transparent`.
- **Never on body text.** Never on buttons. Never on more than one line.

## 6. Do's and Don'ts

### Do:
- **Do** use the two-step dark background alternation (`#0A0F1E` ↔ `#0F172A`) to create visual rhythm between sections — no dividers needed.
- **Do** use Muted Slate (`#64748B`) for all body text on dark backgrounds. Reserve Offwhite for headings, labels, and interactive elements.
- **Do** apply `letter-spacing: -0.02em` to every heading at Title size and above.
- **Do** use the blue→cyan gradient exclusively as a pair. If cyan appears without blue, it's a bug.
- **Do** keep CTAs paired: one primary (blue-filled) + one ghost (bordered) side by side. Never more than two primary buttons in the same visual group.
- **Do** respect `prefers-reduced-motion` — all Framer Motion animations must have a `useReducedMotion()` fallback that disables or snaps transitions.
- **Do** cap body copy at 65ch per line. Long lines on wide screens break readability; constrain with `max-w-2xl` or `max-w-3xl` on prose blocks.
- **Do** maintain WCAG AA contrast ratios. Muted Slate (`#64748B`) on Navy Base (`#0F172A`) passes at 4.6:1. Do not go lower.

### Don't:
- **Don't** use white or light-gray backgrounds as a default. The site is dark by design. Light sections are a deliberate contrast break, not a fallback.
- **Don't** use `border-left` or `border-right` greater than 1px as a colored accent stripe on cards, callouts, or list items. This is the side-stripe anti-pattern. Use full borders or background tints instead.
- **Don't** make the site look like generic SaaS cream — white backgrounds, generic blue buttons, every startup looking the same. The dark confidence of the design is the differentiation.
- **Don't** use aggressive sales-funnel patterns: countdown timers, fake scarcity, more than two CTAs in the same visual group. Trust is the conversion lever, not pressure.
- **Don't** use corporate enterprise cold aesthetics — stock photography, navy + gold, IBM-circa-2010 stiffness. Gulf professionals recognize and reject this immediately.
- **Don't** add glassmorphism as a default card style. Glass cards (`bg-white/5 backdrop-blur`) are reserved for overlays, consultation forms, and AI status panels — maximum two instances per page.
- **Don't** apply the gradient to body text, button labels, or any text shorter than a full headline phrase. Gradient text is a hierarchy signal, not a style.
- **Don't** use more than four identical cards in a grid with the same icon + heading + text structure. Vary the layout or collapse into a table before repeating the pattern a fifth time.
- **Don't** animate layout properties (`width`, `height`, `margin`, `padding`). Framer Motion transitions on `opacity`, `transform`, and `scale` only.
- **Don't** add shadows to cards at rest. The Surface Staircase creates depth. Shadow at rest signals elevation without interaction, which is structurally false here.
