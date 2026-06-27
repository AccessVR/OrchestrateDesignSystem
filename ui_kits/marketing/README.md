# Marketing UI Kit — orchestratexr.com

A faithful recreation of the OrchestrateXR marketing homepage, built entirely from the design-system tokens and primitives.

**Open `index.html`** for the interactive page: sticky header with Resources dropdown + mobile menu, hero, the four product feature cards (Practice Conversations, Extend Reality, Instant Video Training, Stream Your Lab), customer strip, "Built for healthcare & education", the eight-capability grid, the dark "By the numbers" stats band, testimonial, blog strip, final CTA, and footer. The **Get started / Sign in** buttons open a working auth modal (demo only).

## Files
- `index.html` — orchestrator: responsive shell + auth modal, mounts the sections.
- `marketing-top.jsx` — `Header`, `Hero`, `FeatureGrid`, `CustomerStrip`, `BuiltFor`, plus the `Media` placeholder.
- `marketing-bottom.jsx` — `FeatureList`, `Stats`, `Testimonial`, `BlogStrip`, `FinalCTA`, `Footer`.

## Fidelity notes
- **Copy** is lifted verbatim from the live site.
- **Imagery** (hero photo, feature illustrations, customer logos) is served cross-origin and could **not** be downloaded — warm gradient/wash blocks labelled "imagery" stand in, and customer logos render as text wordmarks. Drop real assets into `assets/imagery/` and replace the `Media` blocks for full fidelity.
- Composes design-system components: `Button`, `Logo`, `Eyebrow`, `FeatureCard`, `Stat`, `Avatar`, `Input`.
