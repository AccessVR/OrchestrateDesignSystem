import React from 'react';

export interface TabItem { value: string; label: React.ReactNode; }

export interface TabsProps extends Omit<React.HTMLAttributes<HTMLDivElement>, 'onChange'> {
  items: TabItem[];
  /** Controlled active value. */
  value?: string;
  defaultValue?: string;
  onChange?: (value: string) => void;
}

export function Tabs(props: TabsProps): JSX.Element;
