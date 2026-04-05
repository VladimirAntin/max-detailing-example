import {ReactNode} from 'react';
import './globals.css';
import Navigation from '@/components/layout/Navigation';
import Footer from '@/components/layout/Footer';
import type {Metadata} from 'next';
import '@i18n/localeConfig';

const BASE_URL = 'https://max-detailing.hok.rs';

export const metadata: Metadata = {
  metadataBase: new URL(BASE_URL),
  title: {
    default: 'Max Detailing — Premium Car Detailing Beograd',
    template: '%s | Max Detailing',
  },
  description:
    'Premium car detailing u Beogradu. Poliranje, keramička zaštita, PPF folija, dubinsko čišćenje enterijera. Vaš automobil zaslužuje savršenu negu.',
  keywords: [
    'car detailing Beograd',
    'poliranje auta Beograd',
    'keramička zaštita Beograd',
    'PPF folija Beograd',
    'pranje auta Beograd',
    'enterijer detailing',
    'paint correction Beograd',
    'auto detailing Serbia',
  ],
  authors: [{name: 'Max Detailing', url: BASE_URL}],
  creator: 'Max Detailing',
  publisher: 'Max Detailing',
  robots: {
    index: true,
    follow: true,
    googleBot: {index: true, follow: true, 'max-image-preview': 'large', 'max-snippet': -1},
  },
  openGraph: {
    type: 'website',
    locale: 'sr_RS',
    url: BASE_URL,
    siteName: 'Max Detailing',
    title: 'Max Detailing — Premium Car Detailing Beograd',
    description: 'Poliranje, keramička zaštita, PPF i enterijer detailing u Beogradu.',
    images: [{url: '/og-image.jpg', width: 1200, height: 630, alt: 'Max Detailing Beograd'}],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Max Detailing — Premium Car Detailing Beograd',
    description: 'Poliranje, keramička zaštita i enterijer detailing u Beogradu.',
    images: ['/og-image.jpg'],
  },
  alternates: {canonical: BASE_URL},
  icons: {icon: '/favicon.png', apple: '/favicon.png'},
};

export default function RootLayout({children}: Readonly<{children: ReactNode}>) {
  return (
    <html
      lang={'sr'}
      className={'scroll-smooth'}
      suppressHydrationWarning>
      <head>
        <script
          type={'application/ld+json'}
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'AutoWash',
              name: 'Max Detailing',
              url: BASE_URL,
              description:
                'Premium car detailing u Beogradu — poliranje, keramička zaštita, PPF i enterijer detailing.',
              email: 'info@max-detailing.rs',
              telephone: '+381653580793',
              address: {
                '@type': 'PostalAddress',
                addressLocality: 'Beograd',
                addressCountry: 'RS',
              },
              areaServed: {
                '@type': 'City',
                name: 'Beograd',
              },
              sameAs: ['https://www.instagram.com/tijanadespic.hok.rs'],
            }),
          }}
        />
      </head>
      <body
        suppressHydrationWarning
        className={'flex min-h-full flex-col bg-white'}>
        <Navigation />
        {children}
        <Footer />
      </body>
    </html>
  );
}
