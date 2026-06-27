import React from 'react';

export interface LogoMarkProps extends React.ImgHTMLAttributes<HTMLImageElement> {
  /** Square size in px. @default 28 */
  size?: number;
  /** Use the white mark (for dark surfaces). Default is the black mark for light. @default false */
  onDark?: boolean;
  /** Alt text. @default 'OrchestrateXR' */
  alt?: string;
}

export function LogoMark(props: LogoMarkProps): JSX.Element;
