import React from 'react';

export type ButtonVariant = 'primary' | 'secondary' | 'ghost' | 'onDark' | 'link';
export type ButtonSize = 'sm' | 'md' | 'lg';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  /** Visual style. `primary` = solid orange CTA (lead with it). @default 'primary' */
  variant?: ButtonVariant;
  /** @default 'md' */
  size?: ButtonSize;
  /** Stretch to fill container width. @default false */
  fullWidth?: boolean;
  disabled?: boolean;
  /** Override the uppercase default. Buttons are UPPERCASE by default (brand rule); `link` is sentence case. Pass `false` only for rare exceptions. */
  uppercase?: boolean;
  leftIcon?: React.ReactNode;
  rightIcon?: React.ReactNode;
  /** Render as a different element/component. */
  as?: any;
  /** When set, renders an anchor. */
  href?: string;
  children?: React.ReactNode;
}

/**
 * OrchestrateXR call-to-action button.
 */
export function Button(props: ButtonProps): JSX.Element;
