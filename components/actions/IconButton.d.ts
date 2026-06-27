import React from 'react';

export interface IconButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  /** @default 'ghost' */
  variant?: 'ghost' | 'outline' | 'primary';
  /** @default 'md' */
  size?: 'sm' | 'md' | 'lg';
  /** Fully-round (pill) instead of 5px radius. @default false */
  round?: boolean;
  disabled?: boolean;
  /** Accessible label (aria-label) — required since there's no text. */
  label?: string;
  /** The icon element. */
  children?: React.ReactNode;
}

export function IconButton(props: IconButtonProps): JSX.Element;
