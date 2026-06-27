import React from 'react';

/**
 * Underline tabs. Controlled (value+onChange) or uncontrolled (defaultValue).
 * items: [{ value, label }]. Active tab gets an orange underline.
 */
export function Tabs({ items = [], value, defaultValue, onChange, style, ...rest }) {
  const [internal, setInternal] = React.useState(defaultValue ?? items[0]?.value);
  const active = value !== undefined ? value : internal;
  const select = (v) => { if (value === undefined) setInternal(v); onChange?.(v); };

  return (
    <div role="tablist" style={{
      display: 'flex', gap: '0.25rem', borderBottom: '1px solid var(--oxr-border)', ...style,
    }} {...rest}>
      {items.map((it) => {
        const on = it.value === active;
        return (
          <button
            key={it.value} role="tab" aria-selected={on}
            onClick={() => select(it.value)}
            style={{
              appearance: 'none', background: 'none', cursor: 'pointer',
              fontFamily: 'var(--oxr-font-sans)', fontSize: 'var(--oxr-text-body)',
              fontWeight: on ? 'var(--oxr-weight-semibold)' : 'var(--oxr-weight-medium)',
              color: on ? 'var(--oxr-text)' : 'var(--oxr-text-muted)',
              padding: '0.65em 0.9em', border: 'none',
              borderBottom: `2px solid ${on ? 'var(--oxr-brand)' : 'transparent'}`,
              marginBottom: '-1px',
              transition: 'color var(--oxr-duration) var(--oxr-ease), border-color var(--oxr-duration) var(--oxr-ease)',
            }}
          >
            {it.label}
          </button>
        );
      })}
    </div>
  );
}
