import React from 'react';

export interface EyebrowProps extends React.HTMLAttributes<HTMLSpanElement> {
  /** @default 'brand' */
  tone?: 'brand' | 'muted' | 'onDark';
  children?: React.ReactNode;
}

export function Eyebrow(props: EyebrowProps): JSX.Element;
