'use client';
import React from 'react';

export function FloatingOrbs() {
  return (
    <div className="fixed inset-0">
      <div className="absolute top-1/4 left-1/4 w-32 h-32 bg-amber-900/10 rounded-full blur-xl animate-float" />
      <div className="absolute top-1/2 left-2/3 w-48 h-48 bg-stone-800/10 rounded-full blur-xl animate-float-delayed" />
      <div className="absolute top-3/4 left-1/3 w-40 h-40 bg-amber-950/10 rounded-full blur-xl animate-float-slow" />
    </div>
  );
}