import React from 'react';

/**
 * Surface container — white card on a tint section, 5px radius, soft layered shadow.
 * Calm and roomy. Use `crisp` for the rare signature offset-shadow featured card.
 */
export function Card({
  elevation = 'card',
  bordered = false,
  padded = true,
  as = 'div',
  children,
  style,
  ...rest
}) {
  const shadows = {
    none: 'none',
    card: 'var(--oxr-shadow-card)',
    popover: 'var(--oxr-shadow-popover)',
    crisp: 'var(--oxr-shadow-crisp)',
  };
  const Tag = as;
  return (
    <Tag
      style={{
        background: 'var(--oxr-surface)',
        borderRadius: 'var(--oxr-radius)',
        boxShadow: shadows[elevation],
        border: bordered || elevation === 'crisp'
          ? `1px solid ${elevation === 'crisp' ? 'var(--oxr-ink-900)' : 'var(--oxr-border)'}`
          : 'none',
        padding: padded ? 'clamp(1.5rem, 4vw, 2rem)' : 0,
        color: 'var(--oxr-text)',
        ...style,
      }}
      {...rest}
    >
      {children}
    </Tag>
  );
}
