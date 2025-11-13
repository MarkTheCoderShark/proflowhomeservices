import type { Metadata } from "next";
import { Inter, Montserrat } from "next/font/google";
import "./globals.css";
import Script from "next/script";
import Navbar from "@/components/layout/Navbar";
import Footer from "@/components/layout/Footer";
import { WebSiteJsonLd } from "@/components/seo/JsonLd";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  display: "swap",
});

const montserrat = Montserrat({
  variable: "--font-montserrat",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  display: "swap",
});

export const metadata: Metadata = {
  title: {
    default: "ProFlow Home Services — Gutters, Painting, Handyman & Remodeling",
    template: "%s | ProFlow Home Services",
  },
  description:
    "Professional home services, repairs, and remodeling across the Sacramento area. Tech-enabled scheduling powered by ProFlow360.",
  icons: { icon: "/favicon.ico" },
  openGraph: {
    siteName: "ProFlow Home Services",
    type: "website",
    url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://proflowhomeservices.com",
    images: [
      {
        url: `${process.env.NEXT_PUBLIC_SITE_URL ?? "https://proflowhomeservices.com"}/og/default.svg`,
        width: 1200,
        height: 630,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      {process.env.NEXT_PUBLIC_GSC_VERIFICATION ? (
        <head>
          <meta
            name="google-site-verification"
            content={process.env.NEXT_PUBLIC_GSC_VERIFICATION}
          />
        </head>
      ) : null}
      <body className={`${inter.variable} ${montserrat.variable} antialiased`}>
        <WebSiteJsonLd />
        {process.env.NEXT_PUBLIC_GA_ID ? (
          <>
            <Script
              src={`https://www.googletagmanager.com/gtag/js?id=${process.env.NEXT_PUBLIC_GA_ID}`}
              strategy="afterInteractive"
            />
            <Script id="ga-init" strategy="afterInteractive">
              {`
                window.dataLayer = window.dataLayer || [];
                function gtag(){dataLayer.push(arguments);} 
                gtag('js', new Date());
                gtag('config', '${process.env.NEXT_PUBLIC_GA_ID}');
              `}
            </Script>
          </>
        ) : null}
        <Script id="ld-localbusiness" type="application/ld+json">
          {JSON.stringify({
            "@context": "https://schema.org",
            "@type": "LocalBusiness",
            name: "ProFlow Home Services",
            url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://proflowhomeservices.com",
            areaServed: [
              "Sacramento",
              "Roseville",
              "Rocklin",
              "Loomis",
              "Auburn",
              "Folsom",
              "Granite Bay",
              "Lincoln",
            ],
            telephone: "(916) 740-7249",
            brand: {
              "@type": "Brand",
              name: "ProFlow Home Services",
            },
          })}
        </Script>
        <Navbar />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}
