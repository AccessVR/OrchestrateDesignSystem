import React from 'react';

export interface StatProps extends React.HTMLAttributes<HTMLDivElement> {
  /** The oversized figure, e.g. "275%", "4x". */
  value: React.ReactNode;
  /** Uppercase eyebrow label above (often a citation). */
  label?: string;
  /** Supporting sentence below. */
  children?: React.ReactNode;
  /** @default 'left' */
  align?: 'left' | 'center';
}

export function Stat(props: StatProps): JSX.Element;
