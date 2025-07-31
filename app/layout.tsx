import type { Metadata } from "next"
import { Inter } from "next/font/google"
import "./globals.css"
import { ThemeProvider } from "@/components/theme-provider"
import { NavbarWrapper } from "@/components/navbar-wrapper"
import { Footer7 } from "@/components/ui/footer-7"
import { Toaster } from "@/components/ui/toaster"
import type React from "react"

const inter = Inter({ subsets: ["latin"] })

export const metadata: Metadata = {
  title: "SR IT SUPPORT SERVICES Private LTD - Professional IT Solutions & Website Development London",
  description: "Leading IT support services in London. Expert website development, mobile app development, cloud solutions, cybersecurity, and IT infrastructure. Call 02080588503 for free consultation.",
  keywords: [
    "IT Support London",
    "Website Development London",
    "Mobile App Development",
    "Cloud Solutions",
    "Cybersecurity Services",
    "IT Infrastructure",
    "React Development",
    "Next.js Development",
    "AWS Cloud Services",
    "Azure Cloud Solutions",
    "Database Management",
    "API Development",
    "DevOps Services",
    "IT Consulting London",
    "Web Development Company",
    "Software Development London",
    "Digital Transformation",
    "IT Services UK",
    "Technology Solutions",
    "IT Support Services"
  ],
  authors: [{ name: "SR IT SUPPORT SERVICES Private LTD" }],
  creator: "SR IT SUPPORT SERVICES Private LTD",
  publisher: "SR IT SUPPORT SERVICES Private LTD",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL('https://sritsupportservices.co.uk'),
  alternates: {
    canonical: '/',
  },
  openGraph: {
    type: 'website',
    locale: 'en_GB',
    url: 'https://sritsupportservices.co.uk',
    siteName: 'SR IT SUPPORT SERVICES Private LTD',
    title: 'SR IT SUPPORT SERVICES Private LTD - Professional IT Solutions & Website Development London',
    description: 'Leading IT support services in London. Expert website development, mobile app development, cloud solutions, cybersecurity, and IT infrastructure. Call 02080588503 for free consultation.',
    images: [
      {
        url: 'https://hebbkx1anhila5yf.public.blob.vercel-storage.com/SR%20IT%20Support%20Services%20Logo-zl5k6e2PQmrpS6kHrg090kx2BfRF8m.png',
        width: 1200,
        height: 630,
        alt: 'SR IT SUPPORT SERVICES Private LTD - Professional IT Solutions',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'SR IT SUPPORT SERVICES Private LTD - Professional IT Solutions & Website Development London',
    description: 'Leading IT support services in London. Expert website development, mobile app development, cloud solutions, cybersecurity, and IT infrastructure.',
    images: ['https://hebbkx1anhila5yf.public.blob.vercel-storage.com/SR%20IT%20Support%20Services%20Logo-zl5k6e2PQmrpS6kHrg090kx2BfRF8m.png'],
    creator: '@sritsupport',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: 'your-google-verification-code',
    yandex: 'your-yandex-verification-code',
    yahoo: 'your-yahoo-verification-code',
  },
  generator: 'sr-it-support-services',
  icons: {
    icon: [
      {
        url: '/favicon.ico',
        sizes: 'any',
      },
      {
        url: '/favicon-16x16.png',
        sizes: '16x16',
        type: 'image/png',
      },
      {
        url: '/favicon-32x32.png',
        sizes: '32x32',
        type: 'image/png',
      },
    ],
    apple: [
      {
        url: '/apple-touch-icon.png',
        sizes: '180x180',
        type: 'image/png',
      },
    ],
  },
  manifest: '/site.webmanifest',
}

const footerLogo = {
  url: "/",
  src: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/SR%20IT%20Support%20Services%20Logo-zl5k6e2PQmrpS6kHrg090kx2BfRF8m.png", // Use your real logo path
  alt: "SR IT SUPPORT SERVICES Private LTD Logo",
  title: "SR IT SUPPORT SERVICES Private LTD",
};

const footerSections = [
  {
    title: "Services",
    links: [
      { name: "Website Development", href: "/services" },
      { name: "Mobile App Development", href: "/services" },
      { name: "Cloud Solutions", href: "/services" },
      { name: "Cybersecurity", href: "/services" },
      { name: "IT Infrastructure", href: "/services" },
      { name: "API Development", href: "/services" },
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

const footerDescription = "SR IT SUPPORT SERVICES Private LTD provides comprehensive IT solutions for businesses, including website development, mobile app development, cloud solutions, cybersecurity, and 24/7 support.";
const footerCopyright = "© 2024 SR IT SUPPORT SERVICES Private LTD. All rights reserved.";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        {/* Structured Data for Organization */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              "name": "SR IT SUPPORT SERVICES Private LTD",
              "url": "https://sritsupportservices.co.uk",
              "logo": "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/SR%20IT%20Support%20Services%20Logo-zl5k6e2PQmrpS6kHrg090kx2BfRF8m.png",
              "description": "Leading IT support services in London. Expert website development, mobile app development, cloud solutions, cybersecurity, and IT infrastructure.",
              "address": {
                "@type": "PostalAddress",
                "addressCountry": "GB",
                "addressLocality": "London"
              },
              "contactPoint": {
                "@type": "ContactPoint",
                "telephone": "+44-20-8058-8503",
                "contactType": "customer service",
                "areaServed": "GB",
                "availableLanguage": "English"
              },
              "sameAs": [
                "https://facebook.com/sritsupport",
                "https://linkedin.com/company/sritsupport",
                "https://twitter.com/sritsupport"
              ]
            })
          }}
        />
        
        {/* Structured Data for Local Business */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              "name": "SR IT SUPPORT SERVICES Private LTD",
              "image": "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/SR%20IT%20Support%20Services%20Logo-zl5k6e2PQmrpS6kHrg090kx2BfRF8m.png",
              "description": "Professional IT support services in London",
              "address": {
                "@type": "PostalAddress",
                "addressCountry": "GB",
                "addressLocality": "London"
              },
              "telephone": "+44-20-8058-8503",
              "priceRange": "££",
              "openingHours": "Mo-Fr 09:00-18:00, Sa 10:00-16:00"
            })
          }}
        />
        
        {/* Structured Data for Service */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Service",
              "name": "IT Support Services",
              "description": "Professional IT support services including website development, mobile app development, cloud solutions, and cybersecurity",
              "provider": {
                "@type": "Organization",
                "name": "SR IT SUPPORT SERVICES Private LTD"
              },
              "areaServed": {
                "@type": "Country",
                "name": "United Kingdom"
              },
              "serviceType": [
                "Website Development",
                "Mobile App Development", 
                "Cloud Solutions",
                "Cybersecurity",
                "IT Infrastructure",
                "API Development"
              ]
            })
          }}
        />
      </head>
      <body className={inter.className}>
        <ThemeProvider attribute="class" defaultTheme="dark" enableSystem disableTransitionOnChange>
          <div className="flex min-h-screen flex-col">
            <NavbarWrapper />
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