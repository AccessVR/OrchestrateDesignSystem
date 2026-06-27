**LogoMark** — the icon-only OrchestrateXR mark (figure-with-raised-arms in the ring) for tight spots where the wordmark won't fit: content cards, list rows, the app rail, avatars. Inlined as a data URI.

```jsx
<LogoMark size={26} />          {/* black, on light */}
<LogoMark size={26} onDark />   {/* white, on dark (app, footer) */}
```

`size` is the square px size. Real black + white artwork is bundled — black renders on light surfaces, `onDark` switches to the white mark (no CSS filters).
