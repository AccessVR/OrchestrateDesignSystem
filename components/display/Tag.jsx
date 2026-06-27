import React from 'react';

/** Lowercase content tag/chip (e.g. blog category, filter). Removable when onRemove set. */
export function Tag({ children, onRemove, active = false, style, ...rest }) {
  const [hover, setHover] = React.useState(false);
  return (
    <span style={{
      display: 'inline-flex', alignItems: 'center', gap: '0.4em',
      fontSize: '0.85rem', fontWeight: 'var(--oxr-weight-medium)',
      padding: '0.35em 0.75em', borderRadius: 'var(--oxr-radius-pill)',
      background: active ? 'var(--oxr-brand-wash)' : (hover ? 'var(--oxr-surface-tint)' : 'var(--oxr-surface)'),
      color: active ? 'var(--oxr-brown-600)' : 'var(--oxr-text)',
      border: `1px solid ${active ? 'transparent' : 'var(--oxr-border)'}`,
      cursor: rest.onClick ? 'pointer' : 'default', lineHeight: 1,
      transition: 'background var(--oxr-duration) var(--oxr-ease)',
      ...style,
    }}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      {...rest}>
      {children}
      {onRemove && (
        <button onClick={(e) => { e.stopPropagation(); onRemove(); }} aria-label="Remove"
          style={{ background: 'none', border: 'none', cursor: 'pointer', color: 'var(--oxr-text-muted)', padding: 0, fontSize: '1.1em', lineHeight: 1, display: 'inline-flex' }}>×</button>
      )}
    </span>
  );
}
