import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ 
  subsets: ['latin'],
  variable: '--font-inter',
})

export const metadata: Metadata = {
  title: 'Yogesh Gaur | Senior Data Analyst',
  description: 'Senior Data Analyst with 8+ years of experience in SQL, Python, Power BI, and AWS. Transforming complex data into actionable business insights.',
  keywords: ['Data Analyst', 'SQL', 'Python', 'Power BI', 'AWS', 'Business Intelligence', 'ETL', 'Data Warehousing'],
  authors: [{ name: 'Yogesh Gaur' }],
  openGraph: {
    title: 'Yogesh Gaur | Senior Data Analyst',
    description: 'Transforming complex data into actionable business insights.',
    type: 'website',
  },
}

export const viewport: Viewport = {
  themeColor: '#0a0a1a',
  width: 'device-width',
  initialScale: 1,
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" className={`${inter.variable} bg-background`}>
      <body className="font-sans antialiased">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
