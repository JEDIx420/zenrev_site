import { Button } from "@/components/ui/Button"
import Link from "next/link"
import { Metadata } from "next"
import { MapPin, Users, Zap, Target } from "lucide-react"

export const metadata: Metadata = {
    title: "About zenrev | GTM Engineering Studio Dubai | UAE, India & Global",
    description: "zenrev is Dubai's premier GTM engineering studio specializing in Clay automation, n8n workflows, and AI agents for B2B SaaS. Serving UAE, India, GCC, and global markets.",
    keywords: ["zenrev", "GTM engineering Dubai", "GTM automation UAE", "Clay expert Dubai", "n8n developer UAE", "AI agents Dubai", "B2B automation UAE", "sales automation Dubai", "lead generation UAE"],
};

const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "zenrev",
    "url": "https://zenrev.org",
    "description": "Dubai-based GTM engineering studio specializing in Clay automation, n8n workflows, and agentic AI systems for B2B SaaS companies across UAE, India, and global markets.",
    "logo": "https://zenrev.org/zrlogo.png",
    "foundingDate": "2024",
    "address": {
        "@type": "PostalAddress",
        "streetAddress": "Dubai Internet City",
        "addressLocality": "Dubai",
        "addressRegion": "Dubai",
        "addressCountry": "AE"
    },
    "geo": {
        "@type": "GeoCoordinates",
        "latitude": "25.0930",
        "longitude": "55.1562"
    },
    "areaServed": [
        { "@type": "Country", "name": "United Arab Emirates" },
        { "@type": "Country", "name": "India" },
        { "@type": "Country", "name": "United States" },
        { "@type": "Country", "name": "Saudi Arabia" },
        { "@type": "Country", "name": "Qatar" },
        { "@type": "Country", "name": "Bahrain" },
        { "@type": "Country", "name": "Kuwait" },
        { "@type": "Country", "name": "Oman" }
    ],
    "serviceType": ["GTM Engineering", "Clay Automation", "n8n Development", "AI Agent Development", "Lead Generation", "Sales Automation", "RevOps Automation"],
    "sameAs": [
        "https://twitter.com/zenrev",
        "https://linkedin.com/company/zenrev"
    ],
    "founder": {
        "@type": "Person",
        "name": "Jayanand",
        "jobTitle": "GTM Engineer",
        "description": "GTM engineer specializing in B2B SaaS automation, Clay, n8n, and agentic AI systems."
    }
};

export default function AboutPage() {
    return (
        <div className="bg-white py-14 sm:py-18">
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />

            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                {/* Hero Section */}
                <div className="mx-auto max-w-2xl lg:mx-0">
                    <h1 className="text-4xl font-bold tracking-tight text-brand-dark sm:text-5xl font-heading">About zenrev</h1>
                    <p className="mt-4 text-xl leading-8 text-gray-600">
                        Dubai's premier <strong className="text-brand-blue">GTM engineering studio</strong> building agentic workflows that turn signals into revenue across UAE, India, GCC, and global markets.
                    </p>
                    <div className="mt-6 flex items-center gap-2 text-sm text-gray-500">
                        <MapPin className="h-4 w-4 text-brand-blue" />
                        <span>Headquartered in Dubai, UAE • Serving Global Markets</span>
                    </div>
                </div>

                {/* What We Do */}
                <div className="mx-auto mt-12 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-12 lg:mx-0 lg:max-w-none lg:grid-cols-2">
                    <div>
                        <h2 className="text-3xl font-bold tracking-tight text-gray-900 mb-4">What zenrev Does</h2>
                        <p className="text-base leading-7 text-gray-600 mb-4">
                            <strong>zenrev is a GTM (Go-to-Market) engineering studio</strong> specializing in B2B SaaS automation. We replace manual sales and operations tasks with intelligent automation, custom code, and AI agents.
                        </p>
                        <p className="text-base leading-7 text-gray-600 mb-4">
                            We help companies scale their outbound and revenue operations without scaling headcount. Instead of hiring more SDRs, our clients deploy automated systems that handle signal detection, data enrichment, lead scoring, and personalized outreach.
                        </p>
                        <p className="text-base leading-7 text-gray-600">
                            We treat revenue generation as an <strong>engineering problem</strong>, not a headcount problem.
                        </p>
                    </div>

                    <div>
                        <h2 className="text-3xl font-bold tracking-tight text-gray-900 mb-4">Our Core Niche</h2>
                        <div className="space-y-4">
                            <div className="flex gap-3">
                                <Zap className="h-6 w-6 text-brand-blue flex-shrink-0 mt-1" />
                                <div>
                                    <h3 className="font-bold text-gray-900">GTM Automation</h3>
                                    <p className="text-sm text-gray-600">End-to-end automation of sales and marketing workflows using modern tools and custom code.</p>
                                </div>
                            </div>
                            <div className="flex gap-3">
                                <Target className="h-6 w-6 text-brand-blue flex-shrink-0 mt-1" />
                                <div>
                                    <h3 className="font-bold text-gray-900">Clay + n8n Expertise</h3>
                                    <p className="text-sm text-gray-600">Advanced Clay enrichment tables and production-grade n8n workflow orchestration.</p>
                                </div>
                            </div>
                            <div className="flex gap-3">
                                <Users className="h-6 w-6 text-brand-blue flex-shrink-0 mt-1" />
                                <div>
                                    <h3 className="font-bold text-gray-900">Agentic AI Systems</h3>
                                    <p className="text-sm text-gray-600">Custom LLM agents for research, personalization, and autonomous decision-making.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Who We Serve */}
                <div className="mt-16 border-t border-gray-200 pt-16">
                    <h2 className="text-3xl font-bold tracking-tight text-gray-900 mb-6">Who We Serve</h2>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                        <div className="rounded-2xl bg-gray-50 p-6 ring-1 ring-gray-200">
                            <h3 className="font-bold text-gray-900 mb-2">Company Stage</h3>
                            <p className="text-sm text-gray-600">B2B SaaS companies from Seed to Series C, with a focus on Series A/B looking to scale efficiently.</p>
                        </div>
                        <div className="rounded-2xl bg-gray-50 p-6 ring-1 ring-gray-200">
                            <h3 className="font-bold text-gray-900 mb-2">Geography</h3>
                            <p className="text-sm text-gray-600">Based in Bangalore, India. Serving clients in the US, India, GCC (Dubai, UAE), and globally.</p>
                        </div>
                        <div className="rounded-2xl bg-gray-50 p-6 ring-1 ring-gray-200">
                            <h3 className="font-bold text-gray-900 mb-2">Use Cases</h3>
                            <p className="text-sm text-gray-600">Outbound automation, lead enrichment, signal-based prospecting, RevOps data pipelines, and AI-powered research.</p>
                        </div>
                    </div>
                </div>

                {/* All Services */}
                <div className="mt-16 border-t border-gray-200 pt-16">
                    <h2 className="text-3xl font-bold tracking-tight text-gray-900 mb-6">Our Services</h2>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <Link href="/gtm-engineer" className="group rounded-2xl bg-white p-5 ring-1 ring-gray-200 transition-all hover:shadow-lg hover:ring-brand-blue/50">
                            <h3 className="text-xl font-bold text-gray-900 group-hover:text-brand-blue transition-colors">GTM Engineering</h3>
                            <p className="mt-2 text-sm text-gray-600">End-to-end architecture of sales and marketing stacks with API integration and custom scripting.</p>
                        </Link>
                        <Link href="/ai-engineer" className="group rounded-2xl bg-white p-5 ring-1 ring-gray-200 transition-all hover:shadow-lg hover:ring-brand-blue/50">
                            <h3 className="text-xl font-bold text-gray-900 group-hover:text-brand-blue transition-colors">AI Engineering</h3>
                            <p className="mt-2 text-sm text-gray-600">Custom LLM agents, RAG systems, autonomous research agents, and prompt engineering.</p>
                        </Link>
                        <Link href="/clay-expert" className="group rounded-2xl bg-white p-5 ring-1 ring-gray-200 transition-all hover:shadow-lg hover:ring-brand-blue/50">
                            <h3 className="text-xl font-bold text-gray-900 group-hover:text-brand-blue transition-colors">Clay Expert Services</h3>
                            <p className="mt-2 text-sm text-gray-600">Advanced Clay.com implementation with waterfall enrichment, Claygent scraping, and CRM sync.</p>
                        </Link>
                        <Link href="/n8n-developer" className="group rounded-2xl bg-white p-5 ring-1 ring-gray-200 transition-all hover:shadow-lg hover:ring-brand-blue/50">
                            <h3 className="text-xl font-bold text-gray-900 group-hover:text-brand-blue transition-colors">n8n Development</h3>
                            <p className="mt-2 text-sm text-gray-600">Production-grade workflow automation with custom nodes, error handling, and API connectivity.</p>
                        </Link>
                    </div>
                    <div className="mt-6 text-center">
                        <Link href="/services/capabilities" className="text-brand-blue hover:text-brand-dark font-medium">
                            View all capabilities →
                        </Link>
                    </div>
                </div>

                {/* Philosophy */}
                <div className="mt-12 border-t border-gray-200 pt-12">
                    <h2 className="text-3xl font-bold tracking-tight text-gray-900 mb-6">Our Philosophy</h2>
                    <div className="space-y-5">
                        <div className="flex gap-4">
                            <div className="flex-shrink-0 w-12 h-12 rounded-full bg-brand-blue/10 flex items-center justify-center">
                                <span className="text-brand-blue font-bold">1</span>
                            </div>
                            <div>
                                <h3 className="font-bold text-gray-900 mb-2">Precision &gt; Power</h3>
                                <p className="text-gray-600">We don't believe in "spray and pray". We believe in finding the *right* 50 prospects and crafting the perfect message for them.</p>
                            </div>
                        </div>
                        <div className="flex gap-4">
                            <div className="flex-shrink-0 w-12 h-12 rounded-full bg-brand-blue/10 flex items-center justify-center">
                                <span className="text-brand-blue font-bold">2</span>
                            </div>
                            <div>
                                <h3 className="font-bold text-gray-900 mb-2">Speed &gt; Scale</h3>
                                <p className="text-gray-600">The faster you can iterate on your messaging and targeting, the faster you find product-market fit. Scale comes later.</p>
                            </div>
                        </div>
                        <div className="flex gap-4">
                            <div className="flex-shrink-0 w-12 h-12 rounded-full bg-brand-blue/10 flex items-center justify-center">
                                <span className="text-brand-blue font-bold">3</span>
                            </div>
                            <div>
                                <h3 className="font-bold text-gray-900 mb-2">Entropy is the enemy</h3>
                                <p className="text-gray-600">Data decays. Processes break. We build systems that are self-healing and constantly enriched to fight entropy.</p>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Team */}
                <div className="mt-16 border-t border-gray-200 pt-16">
                    <h2 className="text-3xl font-bold tracking-tight text-gray-900 mb-4">Who We Are</h2>
                    <p className="text-base leading-7 text-gray-600 mb-6">
                        We are engineers, data scientists, and GTM strategists obsessed with efficiency. Our founder is a <strong>GTM engineer</strong> specializing in B2B SaaS automation, with deep expertise in:
                    </p>
                    <ul className="list-disc pl-5 space-y-1.5 text-base leading-7 text-gray-600 mb-4">
                        <li><strong>Clay Automation:</strong> Waterfall enrichment and complex table architecture</li>
                        <li><strong>n8n Development:</strong> Self-hosted workflow orchestration and API integration</li>
                        <li><strong>AI Agents:</strong> Custom LLM agents for research and outbound personalization</li>
                        <li><strong>RevOps Engineering:</strong> Data pipelines, CRM architecture, and automation infrastructure</li>
                    </ul>
                    <p className="text-base leading-7 text-gray-600">
                        We don't just run campaigns; we build the underlying infrastructure that powers your revenue engine.
                    </p>
                </div>

                {/* Location */}
                <div className="mt-16 border-t border-gray-200 pt-16">
                    <div className="flex items-start gap-4">
                        <MapPin className="h-6 w-6 text-brand-blue flex-shrink-0 mt-1" />
                        <div>
                            <h2 className="text-2xl font-bold tracking-tight text-gray-900 mb-2">Location & Markets</h2>
                            <p className="text-base leading-7 text-gray-600 mb-4">
                                <strong>Based in Bangalore, India</strong>, we serve B2B SaaS companies globally with a focus on:
                            </p>
                            <ul className="list-disc pl-5 space-y-1 text-base leading-7 text-gray-600">
                                <li><strong>United States:</strong> SMB and mid-market B2B SaaS</li>
                                <li><strong>India:</strong> High-growth SaaS startups in Bangalore, Hyderabad, and Mumbai</li>
                                <li><strong>GCC Markets:</strong> Dubai, UAE, and Middle East expansion</li>
                                <li><strong>Global:</strong> Remote-first, working across all time zones</li>
                            </ul>
                        </div>
                    </div>
                </div>

                {/* CTA */}
                <div className="mt-12 border-t border-gray-200 pt-12 text-center">
                    <h2 className="text-3xl font-bold text-gray-900 mb-6">Ready to Engineer Your Revenue?</h2>
                    <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
                        Book a 30-minute consultation and we'll show you exactly how to deploy agentic systems in your GTM stack.
                    </p>
                    <Button size="lg" asChild>
                        <Link href="https://cal.com/jayanand-j-ywq8ls/30min" target="_blank">Work With Us</Link>
                    </Button>
                </div>
            </div>
        </div>
    )
}
