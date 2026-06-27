import React from 'react';

export interface FeatureCardProps extends React.HTMLAttributes<HTMLDivElement> {
  /** Small uppercase kicker above the title, rendered in brand orange. */
  eyebrow?: string;
  title?: string;
  body?: string;
  /** Media node (img / illustration). Falls back to a warm color block. */
  media?: React.ReactNode;
  /** Background for the media block when no `media`. @default cream wash */
  mediaBg?: string;
  /** Corner badge, e.g. "Coming soon". */
  badge?: string;
  href?: string;
  children?: React.ReactNode;
}

export function FeatureCard(props: FeatureCardProps): JSX.Element;
