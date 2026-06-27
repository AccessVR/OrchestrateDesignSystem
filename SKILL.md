---
name: orchestratexr-design
description: Use this skill to generate well-branded interfaces and assets for OrchestrateXR (immersive XR + AI simulation-training platform; formerly AccessVR), either for production or throwaway prototypes/mocks/decks. Contains essential design guidelines, color & type tokens, the Mona Sans webfont, reusable React components, and UI-kit recreations of the marketing site and web app.
user-invocable: true
---

# OrchestrateXR Design System

Read **`README.md`** first — it is the full design guide: company/product context, content fundamentals (voice & tone), visual foundations, iconography, and a file index. Then explore the rest of the system as needed.

## What's here
- **`styles.css`** — the single entry point. Link it; everything (`tokens/*.css` + Mona Sans `@font-face`) is `@import`ed from it. Reference `var(--oxr-*)` tokens.
- **`tokens/`** — `colors.css`, `typography.css`, `spacing.css`, `shape.css`.
- **`assets/fonts/`** — Mona Sans + Mona Sans Mono variable webfonts.
- **`components/`** — reusable React primitives (`Button`, `IconButton`, `Card`, `FeatureCard`, `Badge`, `Tag`, `Avatar`, `Stat`, `Eyebrow`, `Input`, `Textarea`, `Select`, `Checkbox`, `Switch`, `Tabs`, `Logo`, `LogoMark`). Each has a `.prompt.md` with usage.
- **`ui_kits/marketing/`** — faithful recreation of orchestratexr.com.
- **`ui_kits/app/`** — faithful recreation of the web-app home dashboard (dark theme; see its README).
- **`guidelines/`** — foundation specimen cards.

## The brand in one breath
Warm, confident, human. Light-first, generous whitespace, **orange `#FF6600`** as the primary accent on warm neutrals (**purple is a valid secondary accent**); warm near-black ink (`#231B15`, never pure `#000`). Mona Sans variable type — **headlines at normal width, weight 800, line-height ~1.2, slight negative tracking** (not expanded/900). `5px` radius, soft layered shadows. Sentence-case headlines; **button labels are ALWAYS uppercase** (strict); ALL-CAPS also for short eyebrows. No emoji. Use the bundled `Logo`/`LogoMark` (`onDark` on dark surfaces).

## How to work
- **Visual artifacts (slides, mocks, throwaway prototypes):** copy the assets and tokens you need into a standalone HTML file the user can open. Use the `Media`/placeholder pattern where real product photography is needed (it isn't bundled — see the imagery caveat in README).
- **Production code:** copy the tokens/components and follow the rules here to design natively in the brand.
- **No guidance given?** Ask the user what they want to build, ask a few focused questions, then act as an expert OrchestrateXR designer — output an HTML artifact *or* production code as the need dictates.

## Mounting components (in plain HTML)
Link `styles.css`, load React + Babel + `_ds_bundle.js`, then:
```js
const { Button, Card, FeatureCard } = window.OrchestrateXRDesignSystem_878eaf;
```
(See any `components/**/*.card.html` for the full pattern.)
