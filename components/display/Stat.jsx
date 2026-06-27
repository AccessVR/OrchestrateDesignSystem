import React from 'react';

/**
 * Big-number proof stat — "By the numbers" pattern.
 * Eyebrow label (often a linked source) + oversized figure + supporting line.
 */
export function Stat({ value, label, children, align = 'left', style, ...rest }) {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '0.5rem', textAlign: align, ...style }} {...rest}>
      {label && (
        <span style={{
          fontSize: '0.72rem', fontWeight: 'var(--oxr-weight-semibold)',
          letterSpacing: 'var(--oxr-tracking-eyebrow)', textTransform: 'uppercase',
          color: 'var(--oxr-text-muted)',
        }}>{label}</span>
      )}
      <span style={{
        fontFamily: 'var(--oxr-font-sans)',
        fontWeight: 800, fontSize: 'var(--oxr-text-display)',
        lineHeight: 1, letterSpacing: 'var(--oxr-tracking-tight)', color: 'var(--oxr-brand)',
      }}>{value}</span>
      {children && (
        <p style={{ margin: 0, fontSize: 'var(--oxr-text-body)', lineHeight: 'var(--oxr-leading-body)', color: 'var(--oxr-text)' }}>{children}</p>
      )}
    </div>
  );
}
