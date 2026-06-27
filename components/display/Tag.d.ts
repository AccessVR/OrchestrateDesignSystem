import React from 'react';

export interface TagProps extends React.HTMLAttributes<HTMLSpanElement> {
  /** Selected/filtered state — warm wash fill. @default false */
  active?: boolean;
  /** Show a × and call this when clicked. */
  onRemove?: () => void;
  children?: React.ReactNode;
}

export function Tag(props: TagProps): JSX.Element;
