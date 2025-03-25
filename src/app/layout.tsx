import type { Metadata } from "next";
import "./globals.css";
import Script from "next/script";
import React from "react";

export const metadata: Metadata = {
    title: "Novel TechWorks",
    description: "Powerful digital solutions for your business",
};

const GA_MEASUREMENT_ID = 'G-8M29M4ZPXX';

export default function RootLayout({ children }: { children: React.ReactNode }) {
    return (
        <html lang="en">
        <head>
            {/* Other head elements if needed */}
        </head>
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
