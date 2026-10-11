import type { Metadata, Viewport } from 'next'
import '../src/index.css'

export const metadata: Metadata = {
  title: 'FRWRD — Kemeja Pria Simpel, Modern & Nyaman',
  description: 'FRWRD adalah brand kemeja pria dengan desain simpel, modern, dan nyaman untuk aktivitas sehari-hari, formal, maupun kasual.',
}

export const viewport: Viewport = {
  colorScheme: 'light',
  themeColor: '#f8f7f4',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="id">
      <body>{children}</body>
    </html>
  )
}
