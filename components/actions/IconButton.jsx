import React from 'react';

/**
 * Square icon-only button. Pass a Lucide (or any) icon as children.
 * Quiet by default; use variant="primary" for a solid-orange round action.
 */
export function IconButton({
  variant = 'ghost',
  size = 'md',
  round = false,
  disabled = false,
  label,
  children,
  style,
  ...rest
}) {
  const [hover, setHover] = React.useState(false);
  const dims = { sm: 32, md: 40, lg: 48 }[size];

  const variants = {
    ghost: {
      background: hover && !disabled ? 'var(--oxr-surface-tint)' : 'transparent',
      color: 'var(--oxr-text)',
      border: '1px solid transparent',
    },
    outline: {
      background: hover && !disabled ? 'var(--oxr-surface-tint)' : 'var(--oxr-surface)',
      color: 'var(--oxr-text)',
      border: '1px solid var(--oxr-border)',
    },
    primary: {
      background: hover && !disabled ? 'var(--oxr-brand-hover)' : 'var(--oxr-brand)',
      color: 'var(--oxr-text-on-brand)',
      border: '1px solid transparent',
    },
  };

  return (
    <button
      aria-label={label}
      disabled={disabled}
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      style={{
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center',
        width: dims,
        height: dims,
        borderRadius: round ? 'var(--oxr-radius-pill)' : 'var(--oxr-radius)',
        cursor: disabled ? 'not-allowed' : 'pointer',
        opacity: disabled ? 0.5 : 1,
        transition: 'background var(--oxr-duration) var(--oxr-ease)',
        ...variants[variant],
        ...style,
      }}
      {...rest}
    >
      {children}
    </button>
  );
}
