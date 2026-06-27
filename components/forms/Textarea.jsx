import React from 'react';

/** Multi-line text field — matches Input styling. */
export function Textarea({ label, hint, error, id, rows = 4, style, ...rest }) {
  const [focus, setFocus] = React.useState(false);
  const inputId = id || React.useId();
  return (
    <div style={{ display: 'flex', flexDirection: 'column', gap: '0.4rem', width: '100%' }}>
      {label && (
        <label htmlFor={inputId} style={{ fontSize: 'var(--oxr-text-small)', fontWeight: 'var(--oxr-weight-medium)', color: 'var(--oxr-text)' }}>{label}</label>
      )}
      <textarea
        id={inputId}
        rows={rows}
        onFocus={(e) => { setFocus(true); rest.onFocus?.(e); }}
        onBlur={(e) => { setFocus(false); rest.onBlur?.(e); }}
        style={{
          width: '100%', boxSizing: 'border-box', resize: 'vertical',
          fontFamily: 'var(--oxr-font-sans)', fontSize: 'var(--oxr-text-body)', color: 'var(--oxr-text)',
          lineHeight: 'var(--oxr-leading-body)', background: 'var(--oxr-surface)', padding: '0.55em 0.9em',
          border: `1px solid ${error ? 'var(--oxr-danger)' : (focus ? 'var(--oxr-brand)' : 'var(--oxr-border)')}`,
          borderRadius: 'var(--oxr-radius)',
          boxShadow: focus && !error ? 'var(--oxr-focus-ring)' : 'none',
          outline: 'none',
          transition: 'border-color var(--oxr-duration) var(--oxr-ease), box-shadow var(--oxr-duration) var(--oxr-ease)',
          ...style,
        }}
        {...rest}
      />
      {(hint || error) && (
        <span style={{ fontSize: 'var(--oxr-text-caption)', color: error ? 'var(--oxr-danger)' : 'var(--oxr-text-muted)' }}>{error || hint}</span>
      )}
    </div>
  );
}
