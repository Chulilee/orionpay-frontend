'use client';

import React from 'react';
import Spinner from './Spinner';

interface FullPageLoaderProps {
  isLoading: boolean;
  message?: string;
}

export default function FullPageLoader({ isLoading, message = 'Loading...' }: FullPageLoaderProps) {
  if (!isLoading) return null;

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm">
      <div className="bg-white dark:bg-gray-800 rounded-xl p-8 flex flex-col items-center gap-4 shadow-2xl">
        <Spinner size="lg" className="text-blue-500" />
        <p className="text-gray-700 dark:text-gray-200 text-lg font-medium">{message}</p>
      </div>
    </div>
  );
}