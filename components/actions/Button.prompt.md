**Button** — OrchestrateXR's call-to-action. Use the solid-orange `primary` as the main action on a screen and lead with it; everything else is `secondary`, `ghost`, or `link`.

> **Brand rule (strict):** button labels are **always UPPERCASE**. This is the default for every variant except `link` (which reads as inline sentence-case text) — you don't need to pass `uppercase`. Write labels in normal case; the component uppercases them.

```jsx
<Button variant="primary">Get started for free</Button>   {/* renders: GET STARTED FOR FREE */}
<Button variant="secondary">See pricing</Button>
<Button variant="link" href="/blog">Read the blog</Button>  {/* sentence case */}
```

Variants: `primary` (solid orange), `secondary` (ghost + hairline border), `ghost` (no border), `onDark` (translucent, for dark sections), `link` (inline orange underline). Sizes: `sm` / `md` / `lg`. Props: `fullWidth`, `leftIcon`/`rightIcon`, `href`/`as`, `disabled`, `uppercase` (override — rarely needed).
