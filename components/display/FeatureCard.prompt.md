**FeatureCard** — the marketing site's product/feature tile: a media block on top, then an orange eyebrow, title, and one tight line of body. Lifts slightly on hover when `href` is set.

```jsx
<FeatureCard
  eyebrow="Practice Conversations"
  title="Learn to talk it out, virtually."
  body="Authentic conversations with AI that prepare learners for the moments that matter."
  badge="Coming soon"
  media={<img src="…" style={{width:'100%',height:'100%',objectFit:'cover'}} />}
/>
```

Drop real product imagery into `media`; without it, a warm color block (`mediaBg`) stands in.
