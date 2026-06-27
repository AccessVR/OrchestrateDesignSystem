**Tabs** — underline tab bar; active tab carries a `2px` orange underline. Controlled or uncontrolled.

```jsx
<Tabs
  defaultValue="conversations"
  items={[
    { value: 'conversations', label: 'Conversations' },
    { value: 'experiences', label: 'Experiences' },
    { value: 'video', label: 'Video' },
  ]}
  onChange={setTab}
/>
```
