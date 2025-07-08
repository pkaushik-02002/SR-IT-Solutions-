import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { Navbar } from "@/components/navbar"
import { Footer7 } from "@/components/ui/footer-7"
import { Toaster } from "@/components/ui/toaster"
import type React from "react"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "SR IT Support Services",
  description: "Professional IT Support Services including SAS Programming, Cloud Solutions, and Technical Consulting",
  generator: 'v0.dev'
}

const footerLogo = {
  url: "/",
  src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/SR%20IT%20Support%20Services%20Logo-zl5k6e2PQmrpS6kHrg090kx2BfRF8m.png", // Use your real logo path
  alt: "SR IT Support Services Logo",
  title: "SR IT Support Services",
};

const footerSections = [
  {
    title: "Services",
    links: [
      { name: "SAS Programming", href: "/services" },
      { name: "Cloud Solutions", href: "/services" },
      { name: "Database Management", href: "/services" },
      { name: "Cybersecurity", href: "/services" },
      { name: "IT Infrastructure", href: "/services" },
      { name: "Technical Support", href: "/services" },
    ],
  },
  {
    title: "Company",
    links: [
      { name: "About Us", href: "/about" },
      { name: "FAQ", href: "/faq" },
      { name: "Contact", href: "/contact" },
    ],
  },
  {
    title: "Legal",
    links: [
      { name: "Privacy Policy", href: "/privacy" },
      { name: "Terms of Service", href: "/terms" },
      { name: "Cookie Policy", href: "/cookies" },
    ],
  },
];

const footerSocialLinks = [
  { icon: <i className="fa-brands fa-facebook size-5" />, href: "https://facebook.com", label: "Facebook" },
  { icon: <i className="fa-brands fa-linkedin size-5" />, href: "https://linkedin.com", label: "LinkedIn" },
  { icon: <i className="fa-brands fa-twitter size-5" />, href: "https://twitter.com", label: "Twitter" },
  { icon: <i className="fa-brands fa-instagram size-5" />, href: "https://instagram.com", label: "Instagram" },
];

const footerLegalLinks = [
  { name: "Terms and Conditions", href: "/terms" },
  { name: "Privacy Policy", href: "/privacy" },
];

const footerDescription = "SR IT Support Services provides comprehensive IT solutions for businesses, including SAS programming, cloud solutions, cybersecurity, and 24/7 support.";
const footerCopyright = "© 2024 SR IT Support Services. All rights reserved.";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem disableTransitionOnChange>
          <div className="flex min-h-screen flex-col">
            <Navbar />
            <main className="flex-1">{children}</main>
            <Footer7
              logo={footerLogo}
              sections={footerSections}
              description={footerDescription}
              socialLinks={footerSocialLinks}
              copyright={footerCopyright}
              legalLinks={footerLegalLinks}
            />
          </div>
          <Toaster />
        </ThemeProvider>
      </body>
    </html>
  )
}