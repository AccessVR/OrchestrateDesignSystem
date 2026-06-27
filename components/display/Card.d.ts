import React from 'react';

export interface CardProps extends React.HTMLAttributes<HTMLElement> {
  /** Shadow depth. `crisp` = signature 6px offset (rare/featured). @default 'card' */
  elevation?: 'none' | 'card' | 'popover' | 'crisp';
  /** Add a 1px hairline border. @default false */
  bordered?: boolean;
  /** Apply the standard fluid card padding. @default true */
  padded?: boolean;
  as?: any;
  children?: React.ReactNode;
}

export function Card(props: CardProps): JSX.Element;
