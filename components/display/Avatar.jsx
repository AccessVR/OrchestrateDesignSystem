import React from 'react';

/** Round avatar — image, or initials on a warm tint fallback. */
export function Avatar({ src, name = '', size = 40, style, ...rest }) {
  const initials = name.split(' ').map((p) => p[0]).filter(Boolean).slice(0, 2).join('').toUpperCase();
  return (
    <span style={{
      display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
      width: size, height: size, borderRadius: 'var(--oxr-radius-pill)',
      background: 'var(--oxr-brand-wash)', color: 'var(--oxr-brown-600)',
      fontFamily: 'var(--oxr-font-sans)', fontWeight: 'var(--oxr-weight-semibold)',
      fontSize: size * 0.38, overflow: 'hidden', flexShrink: 0, userSelect: 'none',
      ...style,
    }} {...rest}>
      {src
        ? <img src={src} alt={name} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
        : (initials || '?')}
    </span>
  );
}
