import { Button } from "@/components/ui/Button"
import Link from "next/link"
import { Metadata } from "next"
import { MapPin, Users, Zap, Target, Sparkles, TrendingUp, Globe2, ArrowRight } from "lucide-react"

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
        <div className="bg-white">
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />

            {/* Hero Section with Gradient Background */}
            <section className="relative overflow-hidden bg-gradient-to-br from-brand-dark via-brand-blue to-brand-dark py-20 sm:py-28">
                <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10"></div>
                <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
                    <div className="mx-auto max-w-3xl text-center">
                        <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-sm font-medium text-white backdrop-blur-sm">
                            <Sparkles className="h-4 w-4" />
                            About zenrev
                        </div>
                        <h1 className="text-4xl font-bold tracking-tight text-white sm:text-6xl font-heading mb-6">
                            The premier GTM engineering studio
                        </h1>
                        <p className="text-xl leading-8 text-blue-100 mb-4">
                            Building agentic workflows that turn signals into revenue for B2B SaaS companies.
                        </p>
                        <p className="text-base text-blue-200">
                            Trusted by companies across UAE, KSA, USA, and India
                        </p>
                        <div className="mt-8 flex items-center justify-center gap-2 text-sm text-blue-200">
                            <MapPin className="h-4 w-4" />
                            <span>Headquartered in Dubai, UAE • Serving Global Markets</span>
                        </div>
                    </div>
                </div>
            </section>

            {/* Mission Statement */}
            <section className="py-16 sm:py-20 bg-gray-50">
                <div className="mx-auto max-w-7xl px-6 lg:px-8">
                    <div className="mx-auto max-w-3xl text-center">
                        <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl mb-6">
                            We treat revenue generation as an <span className="text-brand-blue">engineering problem</span>, not a headcount problem
                        </h2>
                        <p className="text-lg leading-8 text-gray-600">
                            Instead of hiring more SDRs, our clients deploy automated systems that handle signal detection, data enrichment, lead scoring, and personalized outreach. We help companies scale their outbound and revenue operations without scaling headcount.
                        </p>
                    </div>
                </div>
            </section>

            {/* What We Do - 3 Column Cards */}
            <section className="py-16 sm:py-20">
                <div className="mx-auto max-w-7xl px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl mb-4">
                            What We Do
                        </h2>
                        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                            We specialize in three core areas that power modern B2B SaaS revenue engines
                        </p>
                    </div>
                    <div className="grid grid-cols-1 gap-8 lg:grid-cols-3">
                        <div className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-blue-50 to-white p-8 shadow-lg ring-1 ring-gray-200 transition-all hover:shadow-2xl hover:ring-brand-blue/50">
                            <div className="absolute top-0 right-0 -mt-4 -mr-4 h-24 w-24 rounded-full bg-brand-blue/10 blur-2xl"></div>
                            <Zap className="h-12 w-12 text-brand-blue mb-4" />
                            <h3 className="text-2xl font-bold text-gray-900 mb-3">GTM Automation</h3>
                            <p className="text-gray-600 leading-relaxed">
                                Automated outbound systems that find, enrich, score, and engage prospects. From signal detection to meeting booked, fully automated.
                            </p>
                        </div>
                        <div className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-purple-50 to-white p-8 shadow-lg ring-1 ring-gray-200 transition-all hover:shadow-2xl hover:ring-brand-blue/50">
                            <div className="absolute top-0 right-0 -mt-4 -mr-4 h-24 w-24 rounded-full bg-purple-500/10 blur-2xl"></div>
                            <Sparkles className="h-12 w-12 text-brand-blue mb-4" />
                            <h3 className="text-2xl font-bold text-gray-900 mb-3">AI Agents</h3>
                            <p className="text-gray-600 leading-relaxed">
                                Custom AI agents for research, prospecting, and personalization. Autonomous systems that run 24/7, finding and engaging your best-fit prospects.
                            </p>
                        </div>
                        <div className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-amber-50 to-white p-8 shadow-lg ring-1 ring-gray-200 transition-all hover:shadow-2xl hover:ring-brand-blue/50">
                            <div className="absolute top-0 right-0 -mt-4 -mr-4 h-24 w-24 rounded-full bg-amber-500/10 blur-2xl"></div>
                            <TrendingUp className="h-12 w-12 text-brand-blue mb-4" />
                            <h3 className="text-2xl font-bold text-gray-900 mb-3">RevOps Engineering</h3>
                            <p className="text-gray-600 leading-relaxed">
                                CRM automation, pipeline optimization, and data enrichment workflows. Perfect data hygiene with zero manual entry.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Our Philosophy - Modern Timeline */}
            <section className="py-16 sm:py-20 bg-gray-50">
                <div className="mx-auto max-w-7xl px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl mb-4">
                            Our Philosophy
                        </h2>
                        <p className="text-lg text-gray-600">
                            Three principles that guide everything we build
                        </p>
                    </div>
                    <div className="mx-auto max-w-3xl">
                        <div className="space-y-8">
                            <div className="flex gap-6">
                                <div className="flex-shrink-0">
                                    <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-brand-blue text-white shadow-lg">
                                        <Target className="h-8 w-8" />
                                    </div>
                                </div>
                                <div>
                                    <h3 className="text-2xl font-bold text-gray-900 mb-2">Precision &gt; Power</h3>
                                    <p className="text-gray-600 leading-relaxed">
                                        We don't believe in "spray and pray". We believe in finding the <em>right</em> 50 prospects and crafting the perfect message for them. Quality over quantity, always.
                                    </p>
                                </div>
                            </div>
                            <div className="flex gap-6">
                                <div className="flex-shrink-0">
                                    <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-brand-blue text-white shadow-lg">
                                        <Zap className="h-8 w-8" />
                                    </div>
                                </div>
                                <div>
                                    <h3 className="text-2xl font-bold text-gray-900 mb-2">Speed &gt; Scale</h3>
                                    <p className="text-gray-600 leading-relaxed">
                                        The faster you can iterate on your messaging and targeting, the faster you find product-market fit. Scale comes later. Speed of iteration is everything.
                                    </p>
                                </div>
                            </div>
                            <div className="flex gap-6">
                                <div className="flex-shrink-0">
                                    <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-brand-blue text-white shadow-lg">
                                        <TrendingUp className="h-8 w-8" />
                                    </div>
                                </div>
                                <div>
                                    <h3 className="text-2xl font-bold text-gray-900 mb-2">Entropy is the enemy</h3>
                                    <p className="text-gray-600 leading-relaxed">
                                        Data decays. Processes break. We build systems that are self-healing and constantly enriched to fight entropy. Your revenue engine should get better over time, not worse.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Expertise Grid */}
            <section className="py-16 sm:py-20">
                <div className="mx-auto max-w-7xl px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl mb-4">
                            Core Expertise
                        </h2>
                        <p className="text-lg text-gray-600">
                            Deep technical expertise across the modern GTM stack
                        </p>
                    </div>
                    <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
                        <Link href="/clay-expert" className="group rounded-2xl bg-white p-6 shadow-lg ring-1 ring-gray-200 transition-all hover:shadow-xl hover:ring-brand-blue/50">
                            <h3 className="text-lg font-bold text-gray-900 group-hover:text-brand-blue transition-colors mb-2">Clay Automation</h3>
                            <p className="text-sm text-gray-600">Waterfall enrichment, Claygent scraping, CRM sync</p>
                        </Link>
                        <Link href="/n8n-developer" className="group rounded-2xl bg-white p-6 shadow-lg ring-1 ring-gray-200 transition-all hover:shadow-xl hover:ring-brand-blue/50">
                            <h3 className="text-lg font-bold text-gray-900 group-hover:text-brand-blue transition-colors mb-2">n8n Development</h3>
                            <p className="text-sm text-gray-600">Workflow orchestration, custom nodes, API integration</p>
                        </Link>
                        <Link href="/ai-engineer" className="group rounded-2xl bg-white p-6 shadow-lg ring-1 ring-gray-200 transition-all hover:shadow-xl hover:ring-brand-blue/50">
                            <h3 className="text-lg font-bold text-gray-900 group-hover:text-brand-blue transition-colors mb-2">AI Engineering</h3>
                            <p className="text-sm text-gray-600">Custom LLM agents, RAG systems, prompt engineering</p>
                        </Link>
                        <Link href="/services/revops-automation" className="group rounded-2xl bg-white p-6 shadow-lg ring-1 ring-gray-200 transition-all hover:shadow-xl hover:ring-brand-blue/50">
                            <h3 className="text-lg font-bold text-gray-900 group-hover:text-brand-blue transition-colors mb-2">RevOps Engineering</h3>
                            <p className="text-sm text-gray-600">CRM automation, pipeline optimization, data enrichment</p>
                        </Link>
                    </div>
                    <div className="mt-8 text-center">
                        <Link href="/services/capabilities" className="inline-flex items-center gap-2 text-brand-blue hover:text-brand-dark font-medium">
                            View all capabilities
                            <ArrowRight className="h-4 w-4" />
                        </Link>
                    </div>
                </div>
            </section>

            {/* Global Reach */}
            <section className="py-16 sm:py-20 bg-gradient-to-br from-brand-dark via-brand-blue to-brand-dark text-white">
                <div className="mx-auto max-w-7xl px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <Globe2 className="h-12 w-12 text-blue-200 mx-auto mb-4" />
                        <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">
                            Global Reach, Local Expertise
                        </h2>
                        <p className="text-lg text-blue-100 max-w-2xl mx-auto">
                            Headquartered in Dubai, serving B2B SaaS companies worldwide
                        </p>
                    </div>
                    <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4 max-w-5xl mx-auto">
                        <div className="text-center">
                            <div className="text-4xl font-bold mb-2">UAE</div>
                            <div className="text-sm text-blue-200">Dubai, Abu Dhabi, Sharjah</div>
                        </div>
                        <div className="text-center">
                            <div className="text-4xl font-bold mb-2">KSA</div>
                            <div className="text-sm text-blue-200">Riyadh, Jeddah, Dammam</div>
                        </div>
                        <div className="text-center">
                            <div className="text-4xl font-bold mb-2">USA</div>
                            <div className="text-sm text-blue-200">SMB & Mid-Market SaaS</div>
                        </div>
                        <div className="text-center">
                            <div className="text-4xl font-bold mb-2">India</div>
                            <div className="text-sm text-blue-200">Bangalore, Hyderabad, Mumbai</div>
                        </div>
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="py-20 sm:py-28">
                <div className="mx-auto max-w-7xl px-6 lg:px-8 text-center">
                    <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl mb-6">
                        Ready to Engineer Your Revenue?
                    </h2>
                    <p className="text-lg text-gray-600 mb-8 max-w-2xl mx-auto">
                        Book a 30-minute consultation and we'll show you exactly how to deploy agentic systems in your GTM stack.
                    </p>
                    <Button size="lg" asChild>
                        <Link href="https://cal.com/jayanand-j-ywq8ls/30min" target="_blank">
                            Book Free Consultation
                            <ArrowRight className="ml-2 h-4 w-4" />
                        </Link>
                    </Button>
                </div>
            </section>
        </div>
    )
}
