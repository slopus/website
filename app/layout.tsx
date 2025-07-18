import type { Metadata } from 'next'
import { IBM_Plex_Mono } from 'next/font/google'
import './globals.css'

const ibmPlexMono = IBM_Plex_Mono({
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: '--font-ibm-plex-mono',
})

export const metadata: Metadata = {
  title: 'Happy - Claude Code in your pocket',
  description: 'Free, open-source mobile app for Claude Code. Control Claude AI from your phone with end-to-end encryption, voice-to-code, and seamless workflow. Get started with npm install -g happy-coder.',
  keywords: ['Claude', 'AI', 'mobile', 'coding', 'voice-to-code', 'open source', 'npm', 'development', 'programming'],
  authors: [{ name: 'Happy Team' }],
  creator: 'Happy Team',
  publisher: 'Happy Team',
  robots: 'index, follow',
  openGraph: {
    title: 'Happy - Claude Code in your pocket',
    description: 'Free, open-source mobile app for Claude Code. Control Claude AI from your phone with end-to-end encryption, voice-to-code, and seamless workflow.',
    url: 'https://happy-coder.com',
    siteName: 'Happy',
    images: [
      {
        url: '/og-image.png',
        width: 1200,
        height: 630,
        alt: 'Happy - Claude Code in your pocket',
      },
    ],
    locale: 'en_US',
    type: 'website',
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Happy - Claude Code in your pocket',
    description: 'Free, open-source mobile app for Claude Code. Control Claude AI from your phone with end-to-end encryption, voice-to-code, and seamless workflow.',
    images: ['/twitter-image.png'],
    creator: '@happyteam',
    site: '@happyteam',
  },
  icons: {
    icon: [
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
    ],
    apple: [
      { url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' },
    ],
  },
  manifest: '/site.webmanifest',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={`${ibmPlexMono.variable} font-mono`}>
        {children}
      </body>
    </html>
  )
} 