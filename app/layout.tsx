import type { Metadata, Viewport } from 'next'
import '../src/index.css'

export const metadata: Metadata = {
  title: 'FRWRD — Dress for what’s next.',
  description: 'Kemeja modern dengan detail yang dipikirkan. Temukan koleksi FRWRD dan pesan langsung melalui WhatsApp.',
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
