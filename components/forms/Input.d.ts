import React from 'react';

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  /** Helper text below the field. */
  hint?: string;
  /** Error text (also turns the border red). */
  error?: string;
  leftIcon?: React.ReactNode;
}

export function Input(props: InputProps): JSX.Element;
