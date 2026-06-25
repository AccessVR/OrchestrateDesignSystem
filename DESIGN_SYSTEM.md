# OrchestrateXR — Design System

**Brand essence:** Warm, confident, human. An immersive-learning company that feels approachable and editorial, not cold or techy. Light-first, generous whitespace, one energetic orange accent against warm neutrals.

Derived from the source of truth: [orchestratexr.com](https://orchestratexr.com).

---

## Color

Reason in **roles**, not raw hex. One energetic accent (orange) on warm neutrals.

| Role | Hex | Use |
|---|---|---|
| **Brand / Primary** | `#FF6600` | CTAs, links, accents, focus rings. The single energetic color — use sparingly. |
| Primary tint | `#E9B796` | Soft peach fills, highlights |
| Primary wash | `#F2ECE9` | Warm cream section backgrounds |
| **Ink / Text** | `#231B15` | Body text and headings — warm near-black, **never** pure `#000000` |
| Muted text | `#6D4F3B` | Secondary text, captions, metadata |
| **Surface** | `#FFFFFF` | Page background, cards |
| Tint surface | `#F8F7F7` | Alternating sections, code blocks, inset panels |
| Border light | `#E3DDD9` | Hairlines, input borders |
| Border dark | `#664E3D` | Emphasis borders on warm fills |
| Deep brown | `#452F21` | Dark sections, footer |

**Accent gradients** — reserve for hero / feature moments, never body UI:

- Heat: `linear-gradient(135deg, #F32758, #FFC581)`
- Blue: `linear-gradient(135deg, #0057FF, #31B5FF)`
- Pink: `linear-gradient(135deg, #FF007A, #FF81BD)`

---

## Typography

- **Family:** [Mona Sans](https://github.com/github/mona-sans), sans-serif. A variable font with four width axes — use **Mona Sans Expanded** for large display headings, the default width for body and UI, and Condensed / Narrow for dense or space-constrained UI.
- **Weights:** body `425` (Mona Sans's "regular"), medium `500`, headings `600`, display `700`–`900`.
- **Line height:** body `1.5`; headings `1.1`–`1.2`; relaxed reading `1.625`.

**Fluid type scale** (responsive `clamp`, min → max):

| Token | Min → Max | Use |
|---|---|---|
| `caption` | `0.825rem` → `0.95rem` | fine print, labels |
| `small` | `0.9rem` → `1.05rem` | meta, secondary |
| `body` | `1rem` → `1.165rem` | default text |
| `h3` | `1.2rem` → `1.65rem` | subheads |
| `h2` | `1.5rem` → `2.75rem` | section heads |
| `h1` | `1.875rem` → `3.5rem` | page titles |
| `display` | `2.25rem` → `4.39rem` | hero |

---

## Spacing & layout

Fluid rhythm — spacing breathes with the viewport.

| Token | Value | Use |
|---|---|---|
| `block-gap` | `clamp(1.5rem, 4vw, 2rem)` | gaps between blocks |
| `section` | `clamp(2rem, 5vw, 3rem)` | card / section padding |
| `section-lg` | `clamp(3rem, 7vw, 5rem)` | major section padding |
| `hero` | `clamp(4rem, 9vw, 7rem)` | hero vertical space |

**Containers:** content column **740px**, wide content **1260px**, centered.

---

## Shape & elevation

- **Radius:** `5px` is the system default — buttons, cards, inputs, code. Pills and avatars are fully round (`9999px`); images use `10px`. Nothing sharp-cornered, nothing bubbly.
- **Shadows:** soft and layered, never harsh.
  - Cards rest on a subtle multi-stop shadow.
  - Reserve a heavier shadow for popovers / modals.
  - A signature **crisp offset** shadow (`6px 6px 0 #000`) exists for playful / featured elements — use rarely and deliberately.

---

## Components

**Primary button** — orange `#FF6600` background, white text, `5px` radius, `~0.6em 1em` padding, weight `500`. Hover: subtle darken or underline. This is the brand's main call to action; lead with it.

**Secondary button** — transparent with `#231B15` text and a thin border, or a quiet ghost style.

**Cards** — white surface on a tint section, `5px` radius, `clamp(2rem, 5vw, 3rem)` padding, soft shadow; optional `1px #E3DDD9` border.

**Inputs** — white background, `1px #E3DDD9` border, `5px` radius, `~0.5em 1em` padding; focus ring in brand orange.

**Links** — orange, underlined.

---

## Voice — do & don't

**Do**
- Warm neutrals with a single orange accent
- Lots of air; generous whitespace
- Large fluid headings in Mona Sans Expanded
- Soft, layered shadows

**Don't**
- Pure black (`#000`) or pure-white-on-pure-black contrast
- Neon or multi-accent palettes
- Multiple competing accent colors
- Hard sharp corners or dense, cramped layouts
