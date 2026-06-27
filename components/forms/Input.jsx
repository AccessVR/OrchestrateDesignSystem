import React from 'react';

/** Text input — white, hairline border, 5px radius, orange focus ring. */
export function Input({ label, hint, error, leftIcon, id, style, ...rest }) {
  const [focus, setFocus] = React.useState(false);
  const inputId = id || React.useId();
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '0.4rem', width: '100%' }}>
      {label && (
        <label htmlFor={inputId} style={{ fontSize: 'var(--oxr-text-small)', fontWeight: 'var(--oxr-weight-medium)', color: 'var(--oxr-text)' }}>{label}</label>
      )}
      <div style={{ position: 'relative', display: 'flex', alignItems: 'center' }}>
        {leftIcon && (
          <span style={{ position: 'absolute', left: 12, display: 'inline-flex', color: 'var(--oxr-text-muted)', pointerEvents: 'none' }}>{leftIcon}</span>
        )}
        <input
          id={inputId}
          onFocus={(e) => { setFocus(true); rest.onFocus?.(e); }}
          onBlur={(e) => { setFocus(false); rest.onBlur?.(e); }}
          style={{
            width: '100%', boxSizing: 'border-box',
            fontFamily: 'var(--oxr-font-sans)', fontSize: 'var(--oxr-text-body)', color: 'var(--oxr-text)',
            background: 'var(--oxr-surface)',
            padding: leftIcon ? '0.55em 0.9em 0.55em 2.3em' : '0.55em 0.9em',
            border: `1px solid ${error ? 'var(--oxr-danger)' : (focus ? 'var(--oxr-brand)' : 'var(--oxr-border)')}`,
            borderRadius: 'var(--oxr-radius)',
            boxShadow: focus && !error ? 'var(--oxr-focus-ring)' : 'none',
            outline: 'none',
            transition: 'border-color var(--oxr-duration) var(--oxr-ease), box-shadow var(--oxr-duration) var(--oxr-ease)',
            ...style,
          }}
          {...rest}
        />
      </div>
      {(hint || error) && (
        <span style={{ fontSize: 'var(--oxr-text-caption)', color: error ? 'var(--oxr-danger)' : 'var(--oxr-text-muted)' }}>{error || hint}</span>
      )}
    </div>
  );
}
