import React from 'react';

/**
 * Feature/marketing card: media block on top (image, gradient, or color),
 * optional eyebrow/badge, title and one-line body. Used across the marketing site.
 */
export function FeatureCard({
  eyebrow,
  title,
  body,
  media,
  mediaBg = 'var(--oxr-surface-wash)',
  badge,
  href,
  children,
  style,
  ...rest
}) {
  const [hover, setHover] = React.useState(false);
  return (
    <div
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      style={{
        display: 'flex',
        flexDirection: 'column',
        background: 'var(--oxr-surface)',
        borderRadius: 'var(--oxr-radius)',
        boxShadow: 'var(--oxr-shadow-card)',
        overflow: 'hidden',
        transition: 'transform var(--oxr-duration) var(--oxr-ease)',
        transform: hover && href ? 'translateY(-3px)' : 'none',
        ...style,
      }}
      {...rest}
    >
      <div style={{
        position: 'relative',
        aspectRatio: '16 / 11',
        background: media ? undefined : mediaBg,
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        overflow: 'hidden',
      }}>
        {media}
        {badge && (
          <span style={{
            position: 'absolute', top: 12, left: 12,
            fontSize: '0.7rem', fontWeight: 'var(--oxr-weight-semibold)',
            letterSpacing: 'var(--oxr-tracking-eyebrow)', textTransform: 'uppercase',
            background: 'var(--oxr-ink-900)', color: 'var(--oxr-white)',
            padding: '0.35em 0.7em', borderRadius: 'var(--oxr-radius-pill)',
          }}>{badge}</span>
        )}
      </div>
      <div style={{ padding: 'clamp(1.25rem, 3vw, 1.75rem)', display: 'flex', flexDirection: 'column', gap: '0.5rem' }}>
        {eyebrow && (
          <span style={{
            fontSize: '0.72rem', fontWeight: 'var(--oxr-weight-semibold)',
            letterSpacing: 'var(--oxr-tracking-eyebrow)', textTransform: 'uppercase',
            color: 'var(--oxr-brand)',
          }}>{eyebrow}</span>
        )}
        {title && (
          <h3 style={{
            margin: 0, fontFamily: 'var(--oxr-font-sans)', fontWeight: 'var(--oxr-weight-semibold)',
            fontSize: 'var(--oxr-text-h3)', lineHeight: 'var(--oxr-leading-snug)',
            letterSpacing: 'var(--oxr-tracking-tight)', color: 'var(--oxr-text)',
          }}>{title}</h3>
        )}
        {body && (
          <p style={{ margin: 0, fontSize: 'var(--oxr-text-body)', lineHeight: 'var(--oxr-leading-body)', color: 'var(--oxr-text-muted)' }}>{body}</p>
        )}
        {children}
      </div>
    </div>
  );
}
