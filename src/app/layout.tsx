import type { Metadata } from "next";
import "./globals.css";
import Script from "next/script";
import React from "react";

export const metadata: Metadata = {
  metadataBase: new URL("https://noveltechworks.ca"),
  title: "Novel TechWorks — Thoughtful Design. Dependable Engineering.",
  description:
    "A Canadian digital studio building thoughtful websites, custom web applications, Shopify stores, and SEO foundations for ambitious businesses.",
  alternates: { canonical: "/" },
  openGraph: {
    title: "Novel TechWorks",
    description: "Great ideas. Extraordinary digital experiences.",
    url: "https://noveltechworks.ca",
    siteName: "Novel TechWorks",
    locale: "en_CA",
    type: "website",
  },
};

const GA_MEASUREMENT_ID = "G-8M29M4ZPXX";

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>{/* Other head elements if needed */}</head>
      <body>
        <Script
          src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}
          strategy="afterInteractive"
        />
        <Script id="gtag-init" strategy="afterInteractive">
          {`
            window.dataLayer = window.dataLayer || [];
            function gtag(){dataLayer.push(arguments);}
            gtag('js', new Date());
            gtag('config', '${GA_MEASUREMENT_ID}', {
              page_path: window.location.pathname,
            });
          `}
        </Script>
        {children}
      </body>
    </html>
  );
}
