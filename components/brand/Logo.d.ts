import React from 'react';

export interface LogoProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  /** Rendered logo height in px (width scales to the ~5.4:1 artwork). @default 28 */
  size?: number;
  /** Invert the black artwork to white for dark surfaces. @default false */
  onDark?: boolean;
  /** Alt text. @default 'OrchestrateXR' */
  alt?: string;
}

export function Logo(props: LogoProps): JSX.Element;
