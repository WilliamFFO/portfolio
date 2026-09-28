'use client';

import CssBaseline from '@mui/material/CssBaseline';
import { ThemeProvider } from '@mui/material/styles';
import { I18nProvider } from '@/lib/i18n';
import { theme } from '@/lib/theme';

export function Providers({ children }: { children: React.ReactNode }) {
  return (
    <ThemeProvider theme={theme} defaultMode="dark" disableTransitionOnChange>
      <CssBaseline enableColorScheme />
      <I18nProvider>{children}</I18nProvider>
    </ThemeProvider>
  );
}
