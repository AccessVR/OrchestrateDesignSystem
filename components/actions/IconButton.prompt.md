**IconButton** — square (or round) icon-only button for toolbars and app chrome. Always pass `label` for accessibility.

```jsx
<IconButton label="Settings" variant="outline"><Settings size={20} /></IconButton>
<IconButton label="Add" variant="primary" round><Plus size={20} /></IconButton>
```

Variants: `ghost` (default), `outline` (hairline + white), `primary` (solid orange). Sizes `sm`/`md`/`lg`; `round` for a circular button.
