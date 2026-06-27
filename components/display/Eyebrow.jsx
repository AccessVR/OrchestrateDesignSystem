import React from 'react';

/** Uppercase kicker/eyebrow above a heading. Brand orange by default. */
export function Eyebrow({ tone = 'brand', children, style, ...rest }) {
  const colors = {
    brand: 'var(--oxr-brand)',
    muted: 'var(--oxr-text-muted)',
    onDark: 'rgba(255,255,255,0.7)',
  };
  return (
    <span style={{
      display: 'inline-block',
      fontSize: 'var(--oxr-text-caption)', fontWeight: 'var(--oxr-weight-semibold)',
      letterSpacing: 'var(--oxr-tracking-eyebrow)', textTransform: 'uppercase',
      color: colors[tone], ...style,
    }} {...rest}>{children}</span>
  );
}
