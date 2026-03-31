import type React from "react"
import type { Metadata } from "next"
import { Space_Grotesk } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"

const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
  variable: "--font-space-grotesk",
})

export const metadata: Metadata = {
  metadataBase: new URL("https://ionutmaxim.com"),
  title: {
    default: "Ionut Maxim | Designer & Developer",
    template: "%s | Ionut Maxim",
  },
  description:
    "Strategic design and development to elevate your brand and drive results. Portfolio of Ionut Maxim — designer & developer.",
  openGraph: {
    title: "Ionut Maxim | Designer & Developer",
    description:
      "Strategic design and development to elevate your brand and drive results.",
    url: "https://ionutmaxim.com",
    siteName: "Ionut Maxim",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Ionut Maxim | Designer & Developer",
    description:
      "Strategic design and development to elevate your brand and drive results.",
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "https://ionutmaxim.com",
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${spaceGrotesk.variable} font-sans antialiased`}>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem disableTransitionOnChange>
          {children}
        </ThemeProvider>
      </body>
    </html>
  )
}
