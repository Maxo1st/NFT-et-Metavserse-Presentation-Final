import "./globals.css"
import { Inter } from "next/font/google"
import type React from "react"

const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "Passeport Digital",
  description: "Plateforme éducative pour les étudiants de Paris Dauphine",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="fr">
      <head>
        <link rel="stylesheet" href="/passeport-digital/globals.css" />
      </head>
      <body className={inter.className}>{children}</body>
    </html>
  )
}

