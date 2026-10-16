import type { Metadata, Viewport } from "next";
import { calSans, boldonse, dmSans, manrope } from "./fonts";
import { siteConfig } from "@/lib/site-config";
import SmoothScroll from "@/components/SmoothScroll";
import "./globals.css";

export const metadata: Metadata = {
  metadataBase: new URL(siteConfig.siteUrl),
  title: {
    default: siteConfig.title,
    template: siteConfig.titleTemplate,
  },
  description: siteConfig.description,
  keywords: siteConfig.keywords,
  authors: [{ name: siteConfig.name, url: siteConfig.siteUrl }],
  creator: siteConfig.name,
  alternates: {
    canonical: "/",
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  openGraph: {
    type: "website",
    url: siteConfig.siteUrl,
    title: siteConfig.title,
    description: siteConfig.description,
    siteName: siteConfig.name,
    images: [{ url: "/opengraph-image", width: 1200, height: 630, alt: siteConfig.title }],
  },
  twitter: {
    card: "summary_large_image",
    title: siteConfig.title,
    description: siteConfig.description,
    images: ["/opengraph-image"],
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  themeColor: siteConfig.themeColor,
  colorScheme: "dark",
};

const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Person",
      name: siteConfig.name,
      jobTitle: siteConfig.jobTitle,
      url: siteConfig.siteUrl,
      email: `mailto:${siteConfig.email}`,
      image: `${siteConfig.siteUrl}/images/profile/hero.png`,
      sameAs: [siteConfig.social.github, siteConfig.social.linkedin],
    },
    {
      "@type": "WebSite",
      name: siteConfig.name,
      url: siteConfig.siteUrl,
    },
  ],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html
      lang="en"
      className={`${calSans.variable} ${boldonse.variable} ${dmSans.variable} ${manrope.variable}`}
    >
      <body className="font-sans antialiased">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <a href="#main-content" className="skip-link">
          Skip to content
        </a>
        <SmoothScroll />
        {children}
      </body>
    </html>
  );
}
