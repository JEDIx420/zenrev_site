import type { Metadata } from "next";
import Script from "next/script";
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
    images: [
      {
        url: "https://zenrev.org/zrlogo.png",
        width: 800,
        height: 600,
        alt: "zenrev logo",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "zenrev | from signals to revenue",
    description: "AI-powered GTM engineering for B2B SaaS. Automate revenue with agentic AI, n8n workflows, and custom automation infrastructure.",
    images: ["https://zenrev.org/zrlogo.png"],
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
  "logo": "https://zenrev.org/zrlogo.png",
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
        <Script id="factors-sdk" strategy="beforeInteractive">
          {`
            window.faitracker=window.faitracker||function(){this.q=[];var t=new CustomEvent("FAITRACKER_QUEUED_EVENT");return this.init=function(t,e,a){this.TOKEN=t,this.INIT_PARAMS=e,this.INIT_CALLBACK=a,window.dispatchEvent(new CustomEvent("FAITRACKER_INIT_EVENT"))},this.call=function(){var e={k:"",a:[]};if(arguments&&arguments.length>=1){for(var a=1;a<arguments.length;a++)e.a.push(arguments[a]);e.k=arguments[0]}this.q.push(e),window.dispatchEvent(t)},this.message=function(){window.addEventListener("message",function(t){"faitracker"===t.data.origin&&this.call("message",t.data.type,t.data.message)})},this.message(),this.init("z7rzvvnjeaig2uhmoiiispfy2ybq3lwm",{host:"https://api.factors.ai"}),this}(),function(){var t=document.createElement("script");t.type="text/javascript",t.src="https://app.factors.ai/assets/factors.js",t.async=!0,(d=document.getElementsByTagName("script")[0]).parentNode.insertBefore(t,d)}();
          `}
        </Script>
      </body>
    </html>
  );
}
