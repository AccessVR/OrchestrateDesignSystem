import React from 'react';

export interface BadgeProps extends React.HTMLAttributes<HTMLSpanElement> {
  /** @default 'neutral' */
  tone?: 'neutral' | 'brand' | 'soft' | 'ink' | 'success' | 'warning';
  children?: React.ReactNode;
}

export function Badge(props: BadgeProps): JSX.Element;
