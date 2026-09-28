import InitColorSchemeScript from '@mui/material/InitColorSchemeScript';
import { AppRouterCacheProvider } from '@mui/material-nextjs/v15-appRouter';
import type { Metadata, Viewport } from 'next';
import '@fontsource-variable/inter';
import '@fontsource/poppins/500.css';
import '@fontsource/poppins/600.css';
import '@fontsource/poppins/700.css';
import '@fontsource/poppins/800.css';
import { Providers } from '@/components/Providers';
import { site } from '@/config/site';
import { messages } from '@/content/messages';
import './globals.css';

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: messages.es.meta.title,
  description: messages.es.meta.description,
  applicationName: site.shortName,
  keywords: [
    'William Fuentes',
    'William Fuentes Ossa',
    'Portafolio William Fuentes',
    'portafolio william fuentes ossa',
    'Desarrollador Full Stack',
    'Full Stack Developer Colombia',
    'Ingeniero Electrónico desarrollador',
    'Node.js',
    'NestJS',
    'Next.js',
    'React developer Bogotá',
  ],
  authors: [{ name: site.name, url: site.url }],
  creator: site.name,
  alternates: { canonical: '/' },
  robots: { index: true, follow: true, googleBot: { index: true, follow: true } },
  openGraph: {
    title: messages.es.meta.title,
    description: messages.es.meta.description,
    type: 'profile',
    url: site.url,
    siteName: site.shortName,
    locale: 'es_CO',
    alternateLocale: 'en_US',
    images: [{ url: 'images/profile.jpg', width: 1000, height: 1000, alt: site.name }],
  },
  twitter: {
    card: 'summary',
    title: messages.es.meta.title,
    description: messages.es.meta.description,
    images: ['images/profile.jpg'],
  },
};

export const viewport: Viewport = { width: 'device-width', initialScale: 1 };

const personJsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: site.name,
  alternateName: site.shortName,
  jobTitle: 'Desarrollador Full Stack',
  description: messages.es.meta.description,
  url: site.url,
  image: `${site.url}images/profile.jpg`,
  address: { '@type': 'PostalAddress', addressLocality: 'Bogotá', addressCountry: 'CO' },
  sameAs: [site.linkedin, site.fiverr, site.github].filter(Boolean),
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es" suppressHydrationWarning className="scroll-smooth">
      <body>
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(personJsonLd) }} />
        <InitColorSchemeScript attribute="class" defaultMode="dark" />
        <AppRouterCacheProvider options={{ enableCssLayer: true }}>
          <Providers>{children}</Providers>
        </AppRouterCacheProvider>
      </body>
    </html>
  );
}
