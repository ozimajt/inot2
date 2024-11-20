import React from 'react';
import { WelcomeLayoutProps } from './types';

export const WelcomeLayout: React.FC<WelcomeLayoutProps> = ({ children }) => {
  return (
    <main className="flex flex-col h-screen min-h-screen max-h-screen bg-white overflow-hidden font-sans px-10 pt-8
      max-md:px-8 max-md:pt-6
      max-sm:px-4 max-sm:pt-4">
      {children}
    </main>
  );
};