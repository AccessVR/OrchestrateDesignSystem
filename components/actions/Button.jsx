import React from 'react';

/**
 * OrchestrateXR primary call-to-action button.
 * Solid orange is the brand's main CTA — lead with it; use secondary/ghost for the rest.
 * BRAND RULE: button labels are ALWAYS uppercase (every variant except `link`).
 */
export function Button({
  variant = 'primary',
  size = 'md',
  fullWidth = false,
  disabled = false,
  uppercase,
  leftIcon = null,
  rightIcon = null,
  as,
  href,
  children,
  style,
  ...rest
}) {
  const [hover, setHover] = React.useState(false);
  const [active, setActive] = React.useState(false);

  // Strict brand rule: buttons are uppercase by default. `link` reads as inline
  // text (sentence case). An explicit `uppercase` prop can still override.
  const upper = uppercase ?? (variant !== 'link');

  const sizes = {
    sm: { padding: '0.45em 0.9em', fontSize: '0.9rem', gap: '0.4em' },
    md: { padding: '0.6em 1.1em', fontSize: '1rem', gap: '0.5em' },
    lg: { padding: '0.8em 1.5em', fontSize: '1.1rem', gap: '0.6em' },
  };

  const base = {
    display: 'inline-flex',
    alignItems: 'center',
    justifyContent: 'center',
    gap: sizes[size].gap,
    fontFamily: 'var(--oxr-font-sans)',
    fontWeight: 'var(--oxr-weight-medium)',
    fontSize: sizes[size].fontSize,
    lineHeight: 1.1,
    padding: sizes[size].padding,
    width: fullWidth ? '100%' : 'auto',
    borderRadius: 'var(--oxr-radius)',
    border: '1px solid transparent',
    cursor: disabled ? 'not-allowed' : 'pointer',
    opacity: disabled ? 0.5 : 1,
    textDecoration: 'none',
    letterSpacing: upper ? '0.04em' : 'normal',
    textTransform: upper ? 'uppercase' : 'none',
    transition: 'background var(--oxr-duration) var(--oxr-ease), color var(--oxr-duration) var(--oxr-ease), border-color var(--oxr-duration) var(--oxr-ease), transform var(--oxr-duration) var(--oxr-ease)',
    transform: active && !disabled ? 'translateY(1px)' : 'none',
    ...style,
  };

  const variants = {
    primary: {
      background: hover && !disabled ? 'var(--oxr-brand-hover)' : 'var(--oxr-brand)',
      color: 'var(--oxr-text-on-brand)',
    },
    secondary: {
      background: hover && !disabled ? 'var(--oxr-surface-tint)' : 'transparent',
      color: 'var(--oxr-text)',
      borderColor: 'var(--oxr-border)',
    },
    ghost: {
      background: hover && !disabled ? 'var(--oxr-surface-tint)' : 'transparent',
      color: 'var(--oxr-text)',
    },
    onDark: {
      background: hover && !disabled ? 'rgba(255,255,255,0.12)' : 'transparent',
      color: 'var(--oxr-text-on-dark)',
      borderColor: 'rgba(255,255,255,0.4)',
    },
    link: {
      background: 'transparent',
      color: 'var(--oxr-link)',
      padding: 0,
      textDecoration: hover ? 'underline' : 'none',
    },
  };

  const Tag = as || (href ? 'a' : 'button');
  const handlers = disabled ? {} : {
    onMouseEnter: () => setHover(true),
    onMouseLeave: () => { setHover(false); setActive(false); },
    onMouseDown: () => setActive(true),
    onMouseUp: () => setActive(false),
  };

  return (
    <Tag
      href={href}
      disabled={Tag === 'button' ? disabled : undefined}
      style={{ ...base, ...variants[variant] }}
      {...handlers}
      {...rest}
    >
      {leftIcon}
      {children}
      {rightIcon}
    </Tag>
  );
}
