# OrchestrateXR Design System

The canonical, version-controlled source of truth for the **OrchestrateXR** visual identity — brand tokens, type system, components, and UI-kit recreations of the real product surfaces.

> **Brand in one breath:** Warm, confident, human. An immersive-learning company that feels approachable and editorial — light-first, generous whitespace, **one** energetic orange accent against warm neutrals.

---

## The company

**OrchestrateXR** (formerly **AccessVR**, rebranded December 2025) is *"simulation training for everyone."* The platform makes it easy to use **XR and AI** to create effective, scalable training content. Mission: *"change the way the world learns."* Built for **healthcare & education** — where learners must practice before they perform.

**The product line (one platform, all devices — VR, desktop, tablet, mobile):**
- **Practice Conversations** — authentic, emotion-aware AI conversations ("Replicas") that prepare learners for the moments that matter.
- **Extend Reality (XR Experiences)** — active learning, VR optional; immersive mission-critical environments.
- **Instant Video Training** *(coming soon)* — upload any video, AI drafts the training.
- **Stream Your Lab** *(coming soon)* — affordable 360° streaming from inexpensive cameras to headsets and the web.

Supporting capabilities: unlimited cloud storage, browser-based builders, SCORM export to any LMS, analytics & reports, AI-automated debriefing, and a creator marketplace.

**Customers** include Sutter Health, GW Nursing, UVA Health, Temple University, and the Arkansas College of Osteopathic Medicine.

### Surfaces / products represented here
1. **Marketing website** — `orchestratexr.com` (the brand source of truth; WordPress / Ollie block theme).
2. **Web app** — `app.orchestratexr.com` (the browser-based builder + learner delivery platform). The marketing site is the agreed brand standard; the app is being nudged to **converge toward it**, so the app kit here is designed to that target rather than to today's app.

---

## Sources used to build this system

This design system was reverse-engineered from material the user provided. Explore these further to build higher-fidelity OrchestrateXR designs:

- **Design tokens repo:** `github.com/AccessVR/OrchestrateDesignSystem` — `DESIGN_SYSTEM.md`, `tokens/tokens.css`, `tokens/tailwind.config.js`. The canonical color/type/spacing canon. **Start here.**
- **Marketing site (brand source of truth):** [orchestratexr.com](https://orchestratexr.com) — all product copy, tone, hero/feature imagery, customer logos.
- **Web app:** [app.orchestratexr.com](https://app.orchestratexr.com) (login-gated).
- **Typeface:** [Mona Sans](https://github.com/github/mona-sans) — the variable font (width + weight + optical-size axes), imported into `assets/fonts/`.
- Related AccessVR repos worth exploring for product context: `AccessVR/SuperBotMan` (chat-widget framework), `AccessVR/OrchestrateUnityPublicSDK`, `AccessVR/abxrlib-for-webxr`.

> ⚠️ **Imagery caveat:** the official **logo + mark are bundled** (`assets/brand/`), but the marketing site's *product photography*, customer logos, and hero illustrations, and the app's Pins *conversation stills*, are served cross-origin and could **not** be downloaded into this repo. UI kits use brand-colored placeholders where real photography belongs. **Please drop the real stills/photos into** `assets/imagery/` to reach full fidelity. See the BOLD ASK at the end.

---

## Content fundamentals — how OrchestrateXR writes

**Voice:** warm, confident, plainspoken, human. Editorial, not corporate or techy. Benefit-first; the learner and the educator are the heroes, not the technology.

- **Person & address:** Speaks to **"you"** and **"your learners."** Uses **"we"** for the company. Direct and inclusive — *"We make it easy for **you**…"*, *"…training **your learners** will love."*
- **Casing:** Sentence case for headlines and most body — *"Simulation training for everyone."*, *"Where learners practice before they perform."* **ALL-CAPS** is used for (a) **every button label — strict rule, buttons are always uppercase** (`GET STARTED FOR FREE`, `SEE PRICING`, `SIGN IN`), and (b) short eyebrows / kickers above a section (`BUILT FOR HEALTHCARE & EDUCATION`, `COMING SOON`).GET STARTED FOR FREE`, `SEE PRICING`, `SIGN IN` — and (b) short eyebrows / kickers above a section — `BUILT FOR HEALTHCARE & EDUCATION`, `COMING SOON`, `CONVERSATIONS`.
- **Headlines:** short, declarative, often a promise or an outcome. Frequently a two-part rhythm with a soft lead-in bolded — *"**Learn to** **talk it out, virtually.**"*, *"**Active learning,** VR optional."*, *"**Video training,** instantly."*
- **Body:** one or two tight sentences. Concrete outcomes over features. *"Immerse learners in mission-critical experiences, and let practice be their teacher."*
- **Proof:** confident, specific, sourced numbers — `2x` learning gains, `4x` faster training, `275%` more confident, `219%` ROI. Big number + short label + linked citation.
- **Tone markers:** "it's that easy," "the moments that matter," "practice before they perform." Aspirational but grounded; never hype-y or jargon-heavy.
- **Emoji:** **not used** in marketing copy. Keep interfaces emoji-free.
- **Naming:** product features are Title Case proper nouns — *Practice Conversations, Extend Reality, Instant Video Training, Stream Your Lab, Replicas, the Round Table*.

**Don't:** be cold/clinical, lead with technology, stack multiple exclamation points, use emoji, or write dense paragraphs. One idea per block, lots of air.

---

## Visual foundations

**Palette.** Light-first. Warm neutrals (cream `#F2ECE9`, stone `#F8F7F7`, hairline `#E3DDD9`) carry the page; **orange `#FF6600` is the primary accent** — CTAs, links, focus rings, key highlights — used **sparingly**. **Purple (`#8A1FE0`, gradient `#5B0B9E → #9A1EEE`) is a valid secondary accent** — it appears in the product (e.g. the app's home welcome banner) and is fair game for feature moments; keep orange primary and don't let purple bleed into everyday body UI. Ink is a warm near-black `#231B15` (**never** pure `#000`). Deep brown `#452F21` anchors dark sections / footers. Secondary text is a warm muted brown `#6D4F3B`. Accent gradients (heat / blue / pink / purple) are for hero & feature moments — never body UI.

**Type.** [Mona Sans](https://github.com/github/mona-sans), variable, four width axes. **Headlines use Mona Sans at _normal_ width (100%), weight 800 (extra-bold), line-height ~1.2, with slight negative tracking (~−1px)** — this is the live site's treatment; headlines are **not** expanded-width or weight-900 (that reads too heavy). The homepage hero renders at **56px** (the `h1` / x-large step). Body weight is `425` (Mona's "regular"), subheads `600`. Expanded/Condensed/Narrow widths exist for special display moments and dense UI, not everyday headings. Fluid `clamp()` scale from `caption` → `display`. Uppercase eyebrows open up (`0.12em`). Line height `1.5` body.

**Spacing & layout.** Fluid rhythm that breathes with the viewport (`clamp()`): `block-gap`, `section`, `section-lg`, `hero`. Generous whitespace is a brand value. Reading column **740px**, wide content **1260px**, centered. A static 4→64px step scale handles component-level spacing.

**Backgrounds.** Flat warm color — white, cream wash, or stone tint — to alternate sections; no busy textures or patterns. Full-bleed product photography/illustration appears in hero & feature blocks (warm, brightly lit, real people & real environments — healthcare/education contexts). Gradients are reserved, directional (135°), and used as feature spotlights, not page chrome.

**Shape & radius.** `5px` is the universal default — buttons, cards, inputs, code. Imagery rounds to `10px`. Pills & avatars are fully round (`9999px`). Nothing sharp-cornered; nothing bubbly/pill-everywhere.

**Elevation / shadows.** Soft and layered, never harsh — cards rest on a subtle three-stop shadow (`--oxr-shadow-card`); popovers/modals get a deeper three-stop (`--oxr-shadow-popover`). A **signature crisp offset** shadow (`6px 6px 0` ink) exists for rare playful / featured elements — use deliberately, sparingly. No glows, no neon.

**Borders.** Thin `1px` hairlines in `#E3DDD9`; on warm fills, emphasis borders use brown `#664E3D`. Inputs and quiet cards use the hairline; the brand rarely relies on heavy borders — it prefers shadow + whitespace.

**Cards.** White surface on a tint section, `5px` radius, generous `clamp(2rem,5vw,3rem)` padding, soft layered shadow, optional `1px` hairline. Calm and roomy — not dense.

**Buttons.** Primary = solid orange, white text, `5px` radius, weight `500`, ~`0.6em 1em` padding. **Button labels are ALWAYS uppercase** (strict brand rule — the `Button` component enforces it for every variant except `link`). Secondary = transparent with ink text + thin border, or a quiet ghost. Lead withh the primary.

**Motion.** Restrained and functional. Short fades / eases (`~180ms`, standard ease) on hover and reveal; no bounces, no infinite decorative loops. Respect `prefers-reduced-motion`.

**Hover & press.** Hover: subtle darken (orange → `#E65C00`) or an underline on links; quiet surfaces lift slightly or warm to cream. Press: a touch more darken; avoid aggressive scale. Focus: a soft orange ring (`0 0 0 3px rgba(255,102,0,.35)`).

**Transparency & blur.** Used sparingly — light scrims over hero imagery for text legibility, occasional translucent sticky header. Not a glassmorphism brand.

**Imagery vibe.** Warm, natural light, real people in real healthcare/education settings; full color (not b&w), gentle warmth, no heavy grain. Rounded `10px` corners.

---

## Iconography

OrchestrateXR's site is icon-light — it leans on **photography, large type, and whitespace** rather than a dense icon language. Where small UI glyphs are needed (nav, feature bullets, app chrome), this system standardizes on **[Lucide](https://lucide.dev)** — clean, consistent `~1.75–2px` stroke, rounded line caps, `24px` grid — which matches the brand's warm, rounded, unfussy character. Lucide is linked from CDN in components and kits (no icon binaries shipped here).

- **Style:** outline / line icons, never filled-heavy or duotone; stroke color follows text (`currentColor`), accent only when interactive.
- **Emoji:** **not used.** Don't introduce emoji into OrchestrateXR interfaces.
- **Unicode glyphs:** avoid as icons; use Lucide.
- **Logo:** the **official OrchestrateXR logo** is bundled — the figure-with-raised-arms mark inside the ring + the "rchestrateXR™" wordmark. `Logo` (`components/brand/Logo.jsx`) renders the full wordmark; `LogoMark` (`components/brand/LogoMark.jsx`) renders the icon-only mark for tight spots (cards, list rows, the app rail). Both are inlined as data URIs (`components/brand/logo-data.js`) so they travel with the bundle, and both invert cleanly for dark surfaces via `onDark`. Source artwork lives in `assets/brand/` (`orchestratexr-logo.png`, `orchestratexr-mark.png`). On the live site the header logo renders at **34px** tall.

> If you have the real Lucide-or-other icon set, the official logo files, or product photography, add them under `assets/` and update the components/kits to reference them.

---

## Index — what's in this repo

| Path | What it is |
|---|---|
| `styles.css` | Global entry point — `@import`s every token + font file. Consumers link this. |
| `tokens/colors.css` | Color roles + base palette + accent gradients. |
| `tokens/typography.css` | `@font-face` (Mona Sans) + families, widths, weights, fluid type scale. |
| `tokens/spacing.css` | Static step scale + fluid section rhythm + container widths. |
| `tokens/shape.css` | Radius, borders, layered shadows, focus ring, motion. |
| `assets/fonts/` | Mona Sans + Mona Sans Mono variable webfonts (woff2). |
| `components/` | Reusable React primitives (see below). |
| `ui_kits/marketing/` | Recreation of the orchestratexr.com marketing site. |
| `ui_kits/app/` | The builder/dashboard, designed to the brand standard (the convergence target). |
| `templates/landing-page/` | Copy-to-start Landing Page template (DC). |
| `guidelines/` & `*.card.html` | Foundation specimen cards (Design System tab). |
| `SKILL.md` | Agent-Skill manifest for using this system in Claude Code. |

**Components:** `Button`, `IconButton`, `Badge`, `Tag`, `Stat`, `Input`, `Textarea`, `Select`, `Checkbox`, `Switch`, `Card`, `FeatureCard`, `Avatar`, `Tabs`, `Logo`, `LogoMark`, `Eyebrow`.

---

## Using it

- **Plain CSS / HTML:** link `styles.css`, reference `var(--oxr-*)` tokens.
- **Components:** load the compiled bundle (`_ds_bundle.js`) and read primitives from `window.OrchestrateXRDesignSystem_878eaf`.
- **Feeding a tool:** paste this README + `DESIGN_SYSTEM.md` from the tokens repo.
