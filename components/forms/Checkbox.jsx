import React from 'react';

/** Checkbox with label — 5px-ish square, fills brand orange when checked. */
export function Checkbox({ label, checked, defaultChecked, onChange, disabled, id, ...rest }) {
  const inputId = id || React.useId();
  const [internal, setInternal] = React.useState(defaultChecked || false);
  const isControlled = checked !== undefined;
  const on = isControlled ? checked : internal;

  return (
    <label htmlFor={inputId} style={{
      display: 'inline-flex', alignItems: 'center', gap: '0.6em',
      cursor: disabled ? 'not-allowed' : 'pointer', opacity: disabled ? 0.5 : 1,
      fontSize: 'var(--oxr-text-body)', color: 'var(--oxr-text)',
    }}>
      <input
        id={inputId} type="checkbox" checked={on} disabled={disabled}
        onChange={(e) => { if (!isControlled) setInternal(e.target.checked); onChange?.(e); }}
        style={{ position: 'absolute', opacity: 0, width: 0, height: 0 }}
        {...rest}
      />
      <span style={{
        width: 20, height: 20, flexShrink: 0, borderRadius: 'var(--oxr-radius-sm)',
        background: on ? 'var(--oxr-brand)' : 'var(--oxr-surface)',
        border: `1px solid ${on ? 'var(--oxr-brand)' : 'var(--oxr-border)'}`,
        display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
        transition: 'background var(--oxr-duration) var(--oxr-ease), border-color var(--oxr-duration) var(--oxr-ease)',
      }}>
        {on && (
          <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round"><polyline points="20 6 9 17 4 12" /></svg>
        )}
      </span>
      {label}
    </label>
  );
}
