import React from 'react';

/** Small status / category pill. Quiet warm tints; `brand` for emphasis. */
export function Badge({ tone = 'neutral', children, style, ...rest }) {
  const tones = {
    neutral: { background: 'var(--oxr-surface-tint)', color: 'var(--oxr-text-muted)', border: '1px solid var(--oxr-border)' },
    brand: { background: 'var(--oxr-brand)', color: 'var(--oxr-text-on-brand)', border: '1px solid transparent' },
    soft: { background: 'var(--oxr-brand-wash)', color: 'var(--oxr-brown-600)', border: '1px solid transparent' },
    ink: { background: 'var(--oxr-ink-900)', color: 'var(--oxr-white)', border: '1px solid transparent' },
    success: { background: 'rgba(31,138,76,0.12)', color: 'var(--oxr-success)', border: '1px solid transparent' },
    warning: { background: 'rgba(199,119,0,0.14)', color: 'var(--oxr-warning)', border: '1px solid transparent' },
  };
  return (
    <span style={{
      display: 'inline-flex', alignItems: 'center', gap: '0.35em',
      fontSize: '0.72rem', fontWeight: 'var(--oxr-weight-semibold)',
      letterSpacing: 'var(--oxr-tracking-eyebrow)', textTransform: 'uppercase',
      padding: '0.3em 0.65em', borderRadius: 'var(--oxr-radius-pill)',
      lineHeight: 1, whiteSpace: 'nowrap', ...tones[tone], ...style,
    }} {...rest}>{children}</span>
  );
}
