# OrchestrateXR Design System

The canonical, version-controlled source of truth for the **OrchestrateXR** visual identity.

> **Source of truth:** the marketing website, [orchestratexr.com](https://orchestratexr.com). Everything here is derived from the live site's brand. The web app ([app.orchestratexr.com](https://app.orchestratexr.com)) and other surfaces converge toward this system over time — when they disagree with this repo, **this repo wins.**

## The brand in one breath

Warm, confident, human. An immersive-learning company that feels approachable and editorial — light-first, generous whitespace, one energetic orange accent against warm neutrals.

| | |
|---|---|
| **Anchor color** | `#FF6600` — OrchestrateXR orange |
| **Ink** | `#231B15` — warm near-black (never pure `#000`) |
| **Typeface** | [Mona Sans](https://github.com/github/mona-sans) (variable; Expanded / Condensed / Narrow widths) |
| **Shape** | `5px` default radius, fully-round pills, soft layered shadows |
| **Sizing** | fluid `clamp()` type & spacing scales |

## What's here

| File | What it is |
|---|---|
| [`DESIGN_SYSTEM.md`](./DESIGN_SYSTEM.md) | The human-readable canon — color roles, type, spacing, shape, components, do/don't. **Start here.** |
| [`tokens/tailwind.config.js`](./tokens/tailwind.config.js) | The system as a Tailwind theme (drop-in `theme.extend`). |
| [`tokens/tokens.css`](./tokens/tokens.css) | The same tokens as framework-agnostic CSS custom properties (`:root`). |

## Using it

- **Feeding a tool (e.g. Claude Design):** paste [`DESIGN_SYSTEM.md`](./DESIGN_SYSTEM.md). It's written to be ingested as a single coherent spec.
- **Building web UI:** lift [`tokens/tailwind.config.js`](./tokens/tailwind.config.js) into your Tailwind config, or import [`tokens/tokens.css`](./tokens/tokens.css) for plain CSS.
- **Converging an existing surface:** treat the tokens here as the target and track drift against them.

## Status & provenance

- **v0.1** — initial capture, reverse-engineered from the live storefront (Ollie block theme, `wp_global_styles`) on 2026-06-25.
- ⚠️ The live brand currently lives in the WordPress production database, not in the storefront repo's theme files (the Ollie `theme.json` there still ships Ollie's stock purple). This repo is the first place the real brand is captured under version control. A clean export of the live global styles into the storefront repo is a follow-up.
