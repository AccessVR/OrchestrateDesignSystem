import React from 'react';

export interface AvatarProps extends React.HTMLAttributes<HTMLSpanElement> {
  src?: string;
  /** Used for initials fallback + alt text. */
  name?: string;
  /** Pixel diameter. @default 40 */
  size?: number;
}

export function Avatar(props: AvatarProps): JSX.Element;
