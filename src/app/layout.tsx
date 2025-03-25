// app/layout.tsx
import type {Metadata} from "next";
import "./globals.css";
import Head from "next/head";
import React from "react";

export const metadata: Metadata = {
    title: "Novel TechWorks",
    description: "Powerful digital solutions for your business"
};

const GA_MEASUREMENT_ID = 'G-8M29M4ZPXX';

export default function RootLayout({children}: { children: React.ReactNode }) {
    return (
        <html lang="en">
        <Head>
            {/* Global Site Tag (gtag.js) - Google Analytics */}
            <script async src={`https://www.googletagmanager.com/gtag/js?id=${GA_MEASUREMENT_ID}`}></script>
            <script
                // Using dangerouslySetInnerHTML to insert raw JS
                dangerouslySetInnerHTML={{
                    __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', '${GA_MEASUREMENT_ID}', {
                page_path: window.location.pathname,
              });
            `,
                }}
            ></script>
        </Head>
        <body>{children}</body>
        </html>
    );
}