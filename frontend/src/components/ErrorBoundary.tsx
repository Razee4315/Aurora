import React from 'react';
import { useRouteError } from 'react-router-dom';

export function ErrorBoundary() {
  const error = useRouteError() as Error;

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-aurora-blue to-aurora-cyan/20">
      <div className="max-w-md w-full bg-white rounded-lg shadow-xl p-8 m-4">
        <h1 className="text-2xl font-bold text-aurora-blue mb-4">Oops! Something went wrong</h1>
        <p className="text-gray-600 mb-4">
          {error?.message || 'An unexpected error occurred. Please try again later.'}
        </p>
        <button
          onClick={() => window.location.href = '/'}
          className="bg-aurora-blue text-white px-4 py-2 rounded hover:bg-aurora-blue/90 transition-colors"
        >
          Return Home
        </button>
      </div>
    </div>
  );
}
