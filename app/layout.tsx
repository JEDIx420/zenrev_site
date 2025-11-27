import type { Metadata } from "next";
import { Inter, Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { Chatbot } from "@/components/Chatbot";
import { ParticleBackground } from "@/components/ParticleBackground";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const plusJakartaSans = Plus_Jakarta_Sans({
  variable: "--font-plus-jakarta",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "zenrev | from signals to revenue",
    template: "zenrev | %s",
  },
  description: "AI-powered GTM engineering for B2B SaaS. Automate revenue with agentic AI, n8n workflows, and custom automation infrastructure.",
  keywords: ["GTM engineering", "agentic AI", "automation", "B2B SaaS", "n8n", "Clay", "AI agents", "revenue operations", "sales automation"],
  openGraph: {
    title: "zenrev | from signals to revenue",
    description: "AI-powered GTM engineering for B2B SaaS. Automate revenue with agentic AI, n8n workflows, and custom automation infrastructure.",
    url: "https://zenrev.org",
    siteName: "zenrev",
    locale: "en_US",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "zenrev | from signals to revenue",
    description: "AI-powered GTM engineering for B2B SaaS. Automate revenue with agentic AI, n8n workflows, and custom automation infrastructure.",
  },
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: "https://zenrev.org",
  },
  verification: {
    google: "wiXoC7FHkT39p84dLITiXmYnXUtOdT7Mp-NCB3sGv3s",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "name": "zenrev",
  "url": "https://zenrev.org",
  "description": "AI-powered GTM engineering for B2B SaaS teams.",
  "sameAs": [
    "https://twitter.com/zenrev",
    "https://linkedin.com/company/zenrev"
  ]
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${inter.variable} ${plusJakartaSans.variable} antialiased font-sans flex min-h-screen flex-col bg-background text-foreground transition-colors`}
      >
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        <ParticleBackground />
        <Header />
        <main className="relative z-10 flex-1">{children}</main>
        <Footer />
        <Chatbot />
      </body>
    </html>
  );
}
