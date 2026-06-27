import React from 'react';

/** Toggle switch — pill track, fills brand orange when on. */
export function Switch({ label, checked, defaultChecked, onChange, disabled, id, ...rest }) {
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
        width: 40, height: 24, flexShrink: 0, borderRadius: 'var(--oxr-radius-pill)',
        background: on ? 'var(--oxr-brand)' : 'var(--oxr-stone-200)',
        position: 'relative', transition: 'background var(--oxr-duration) var(--oxr-ease)',
      }}>
        <span style={{
          position: 'absolute', top: 2, left: on ? 18 : 2, width: 20, height: 20,
          borderRadius: 'var(--oxr-radius-pill)', background: 'var(--oxr-white)',
          boxShadow: '0 1px 2px rgba(0,0,0,0.2)', transition: 'left var(--oxr-duration) var(--oxr-ease)',
        }} />
      </span>
      {label}
    </label>
  );
}
