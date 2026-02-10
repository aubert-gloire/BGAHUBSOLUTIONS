import { Inter } from 'next/font/google'
import './globals.css'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'BGA HUB SOLUTIONS | Centralizing Intelligence. Engineering Growth.',
  description: 'Premier technology firm specializing in Software Development, AI & Machine Learning, and Digital Marketing. Built by Bihibindi. Powered by Aubert. Destined for Gloire.',
  keywords: 'software development, AI, machine learning, digital marketing, web development, cloud infrastructure',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={inter.className}>{children}</body>
    </html>
  )
}
