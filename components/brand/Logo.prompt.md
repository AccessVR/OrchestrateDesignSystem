**Logo** — the official OrchestrateXR logo (figure-with-raised-arms mark + "rchestrateXR™" wordmark), inlined as a data URI so it ships with the bundle. Monochrome black artwork.

```jsx
<Logo />            {/* on light surfaces */}
<Logo size={22} />
<Logo onDark />     {/* footer / dark hero / the app — inverts to white */}
```

`size` sets the height (px); width scales to the ~5.4:1 artwork. `onDark` inverts the black artwork to white.
