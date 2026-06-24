import type { Metadata } from 'next';
import { GeistSans } from 'geist/font/sans';
import { GeistMono } from 'geist/font/mono';
import './globals.css';

export const metadata: Metadata = {
  metadataBase: new URL('https://longman-max.github.io'),

  title: {
    default: 'Obasi Agbai — AI Engineer & Systems Builder',
    template: '%s | Obasi Agbai',
  },

  description:
    'CS student at FUTO. I build and research across ML, NLP, and systems — ' +
    'currently deep in MLOps infrastructure, autonomous security, and edge inference.',

  keywords: [
    'Obasi Agbai',
    'AI engineer Nigeria',
    'ML engineer',
    'MLOps',
    'NLP researcher',
    'FUTO computer science',
    'machine learning portfolio',
    'systems builder',
  ],

  authors: [{ name: 'Obasi Agbai', url: 'https://github.com/longman-max' }],
  creator: 'Obasi Agbai',

  verification: {
    google: 'yONcnrlP4QHlZrkhQNEbVmC6Euk5d4ksniZNioDRq3M',
  },

  alternates: {
    canonical: 'https://longman-max.github.io',
  },

  openGraph: {
    type: 'website',
    locale: 'en_US',
    url: 'https://longman-max.github.io',
    siteName: 'Obasi Agbai',
    title: 'Obasi Agbai — AI Engineer & Systems Builder',
    description:
      'Building systems that think. ML, NLP, MLOps, and autonomous security — ' +
      'from Lagos, Nigeria.',
    images: [
      {
        url: '/og.png',
        width: 1200,
        height: 630,
        alt: 'Obasi Agbai — AI Engineer & Systems Builder',
      },
    ],
  },

  twitter: {
    card: 'summary_large_image',
    title: 'Obasi Agbai — AI Engineer & Systems Builder',
    description:
      'Building systems that think. ML, NLP, MLOps, and autonomous security.',
    images: ['/og.png'],
    creator: '@obasi_agbai',
  },

  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },

  icons: {
    icon: '/favicon.ico',
    shortcut: '/favicon-16x16.png',
    apple: '/apple-touch-icon.png',
  },
};

const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'Person',
  name: 'Obasi Agbai',
  url: 'https://longman-max.github.io',
  jobTitle: 'AI Engineer & ML Researcher',
  alumniOf: {
    '@type': 'CollegeOrUniversity',
    name: 'Federal University of Technology Owerri',
    alternateName: 'FUTO',
  },
  address: {
    '@type': 'PostalAddress',
    addressLocality: 'Lagos',
    addressCountry: 'NG',
  },
  sameAs: [
    'https://github.com/longman-max',
    'https://www.linkedin.com/in/obasi-agbai',
    'https://x.com/obasi_agbai',
    'https://medium.com/@obasiagbai94',
  ],
  knowsAbout: [
    'Machine Learning',
    'MLOps',
    'Natural Language Processing',
    'Reinforcement Learning',
    'Edge Inference',
    'Autonomous Systems',
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      className={`${GeistSans.variable} ${GeistMono.variable}`}
      suppressHydrationWarning
    >
      <head>
        {/* Inline theme init — runs before first paint to prevent FOUC */}
        <script
          dangerouslySetInnerHTML={{
            __html: `(function(){try{var t=localStorage.getItem('theme');if(t==='dark'||t==='light'){document.documentElement.setAttribute('data-theme',t)}else if(window.matchMedia('(prefers-color-scheme:dark)').matches){document.documentElement.setAttribute('data-theme','dark')}else{document.documentElement.setAttribute('data-theme','light')}}catch(e){document.documentElement.setAttribute('data-theme','light')}})()`,
          }}
        />
      </head>
      <body>
        {children}
        {/* JSON-LD structured data for Google rich results */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </body>
    </html>
  );
}
