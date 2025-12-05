import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'BuzzWorthy Studio - Turn Vision into Value',
  description: 'Web design and digital marketing agency specializing in creative digital experiences',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
