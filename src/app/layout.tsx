import InitColorSchemeScript from '@mui/material/InitColorSchemeScript';
import { AppRouterCacheProvider } from '@mui/material-nextjs/v15-appRouter';
import type { Metadata, Viewport } from 'next';
import '@fontsource-variable/inter';
import { Providers } from '@/components/Providers';
import { messages } from '@/content/messages';
import './globals.css';

export const metadata: Metadata = {
  title: messages.es.meta.title,
  description: messages.es.meta.description,
  openGraph: { title: messages.en.meta.title, description: messages.en.meta.description, type: 'website' },
};

export const viewport: Viewport = { width: 'device-width', initialScale: 1 };

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es" suppressHydrationWarning className="scroll-smooth">
      <body>
        <InitColorSchemeScript attribute="class" />
        <AppRouterCacheProvider options={{ enableCssLayer: true }}>
          <Providers>{children}</Providers>
        </AppRouterCacheProvider>
      </body>
    </html>
  );
}
