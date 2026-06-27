'use client';

import React from 'react';
import Spinner from './Spinner';

interface ButtonSpinnerProps {
  loading: boolean;
  children: React.ReactNode;
  className?: string;
  onClick?: () => void;
  type?: 'button' | 'submit' | 'reset';
  disabled?: boolean;
}

export default function ButtonSpinner({
  loading,
  children,
  className = '',
  onClick,
  type = 'button',
  disabled = false,
}: ButtonSpinnerProps) {
  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled || loading}
      className={`inline-flex items-center justify-center gap-2 transition-opacity ${
        loading ? 'opacity-75 cursor-not-allowed' : ''
      } ${className}`}
      aria-busy={loading}
    >
      {loading && <Spinner size="sm" />}
      {children}
    </button>
  );
}