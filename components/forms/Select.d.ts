import React from 'react';

export interface SelectProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
  label?: string;
  hint?: string;
  error?: string;
  /** <option> elements. */
  children?: React.ReactNode;
}

export function Select(props: SelectProps): JSX.Element;
