'use client';

import { ThemeProvider } from 'next-themes';

export interface ProvidersProps {
  children: React.ReactNode
}

const Providers = ({ children }: ProvidersProps) => (
  <ThemeProvider
    attribute="class"
    defaultTheme="light"
    forcedTheme="light"
    disableTransitionOnChange
  >
    {children}
  </ThemeProvider>
);

export default Providers;
