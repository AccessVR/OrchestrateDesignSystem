# Web App UI Kit — OrchestrateXR Home

A faithful recreation of the OrchestrateXR web-app home screen (`app.orchestratexr.com/dashboards/main`), built on the design-system tokens, type, and the real logo.

**Open `index.html`** for the interactive dashboard: the dark left **icon rail** (orange create button + home / library / messages / people / marketplace / settings + notifications), the top bar with **Search Everything** (⌘K), **Ask AI** and **Guides**, the **welcome banner**, the **quick-action grid** (Have a code?, My Devices, Create an Asset / Experience / Character, Invite a User), and the **Pins** row of recent content. The create button and quick-action cards open a working **Create new** modal; an orange chat FAB sits bottom-right.

## Palette note
The app is **dark-themed** (warm near-black surfaces) and the welcome banner uses **purple** — a valid OrchestrateXR accent alongside the primary orange. Both are honored here as the live product uses them.

## Files
- `index.html` — orchestrator: app frame + Create modal + chat FAB.
- `app-shell.jsx` — `Rail`, `TopBar`, `Home` (welcome + quick actions + pins), `Placeholder`, icon set, and the app-local dark palette.
- `_ref-home.png` — the reference screenshot this kit was built from.

## Fidelity notes
- **Pins photography** (real conversation stills) is served cross-origin and could not be bundled — warm placeholder tiles stand in. Drop real stills into `assets/imagery/` to finish them.
- Composes design-system components (`Logo`, dark-inverted) and references brand tokens; the dense dark chrome is built with app-local inline styles for fidelity.
