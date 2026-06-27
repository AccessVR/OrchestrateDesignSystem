**Tag** — rounded content chip for categories and filters (e.g. blog topics). Lower-key than Badge; sentence case, not caps.

```jsx
<Tag onClick={() => filter('vr')}>Virtual Reality</Tag>
<Tag active>Conversations</Tag>
<Tag onRemove={() => drop('scorm')}>SCORM</Tag>
```

`active` for selected state; `onRemove` adds a × dismiss.
