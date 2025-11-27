import { Metadata } from "next"
import Link from "next/link"
import { Button } from "@/components/ui/Button"
import { CheckCircle2, ArrowRight, Terminal, Workflow, Database, Bot, Globe2 } from "lucide-react"

export const metadata: Metadata = {
    title: "GTM Engineer | AI-Powered Sales Automation & RevOps",
    description: "Hire a GTM Engineer to automate your outbound sales. We build agentic workflows using Clay, n8n, and AI to turn signals into revenue.",
    alternates: {
        canonical: "https://zenrev.org/gtm-engineer",
    },
    openGraph: {
        title: "GTM Engineer | AI-Powered Sales Automation",
        description: "Replace manual SDR work with intelligent GTM engineering. Automate research, enrichment, and outreach.",
        url: "https://zenrev.org/gtm-engineer",
    },
}

const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "GTM Engineering",
    "provider": {
        "@type": "Organization",
        "name": "zenrev",
        "url": "https://zenrev.org"
    },
    "description": "End-to-end Go-to-Market engineering services including Clay automation, n8n workflows, and AI agent development.",
    "areaServed": ["United States", "United Arab Emirates", "India", "Europe"],
    "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": "GTM Engineering Services",
        "itemListElement": [
            {
                "@type": "Offer",
                "itemOffered": {
                    "@type": "Service",
                    "name": "Outbound Automation"
                }
            },
            {
                "@type": "Offer",
                "itemOffered": {
                    "@type": "Service",
                    "name": "Lead Enrichment"
                }
            },
            {
                "@type": "Offer",
                "itemOffered": {
                    "@type": "Service",
                    "name": "AI Agent Development"
                }
            }
        ]
    }
}

export default function GTMEngineerPage() {
    return (
        <div className="bg-white">
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />

            {/* Hero Section */}
            <section className="relative overflow-hidden bg-gradient-to-b from-blue-50 to-white pt-24 pb-16 sm:pt-32 sm:pb-24">
                <div className="mx-auto max-w-7xl px-6 lg:px-8">
                    <div className="mx-auto max-w-3xl text-center">
                        <h1 className="text-4xl font-bold tracking-tight text-brand-dark sm:text-6xl font-heading">
                            GTM Engineer
                        </h1>
                        <p className="mt-6 text-xl leading-8 text-gray-600">
                            A GTM (Go-to-Market) Engineer combines technical expertise in APIs, automation, and data with sales strategy. We build the infrastructure that scales your revenue without scaling headcount.
                        </p>
                        <div className="mt-10 flex items-center justify-center gap-x-6">
                            <Button size="lg" asChild>
                                <Link href="https://cal.com/jayanand-j-ywq8ls/30min" target="_blank">
                                    Hire a GTM Engineer <ArrowRight className="ml-2 h-4 w-4" />
                                </Link>
                            </Button>
                            <Button variant="outline" size="lg" asChild>
                                <Link href="#capabilities">View Capabilities</Link>
                            </Button>
                        </div>
                    </div>
                </div>
            </section>

            {/* Definition & Why Us */}
            <section className="py-16 sm:py-24">
                <div className="mx-auto max-w-7xl px-6 lg:px-8">
                    <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
                        <div>
                            <h2 className="text-3xl font-bold tracking-tight text-gray-900">What is a GTM Engineer?</h2>
                            <p className="mt-6 text-lg leading-7 text-gray-600">
                                Traditional sales teams rely on manual labor: SDRs researching leads, copy-pasting data, and sending generic emails. A GTM Engineer replaces this with code and AI.
                            </p>
                            <p className="mt-4 text-lg leading-7 text-gray-600">
                                We treat your sales process as a software application. We architect data pipelines, program decision logic, and deploy autonomous agents to execute tasks 24/7 with superhuman precision.
                            </p>
                        </div>
                        <div className="rounded-2xl bg-gray-50 p-8 ring-1 ring-gray-200">
                            <h3 className="text-2xl font-bold tracking-tight text-gray-900">Why choose zenrev?</h3>
                            <ul className="mt-6 space-y-4 text-gray-600">
                                <li className="flex gap-3">
                                    <CheckCircle2 className="h-6 w-6 flex-none text-brand-blue" />
                                    <span><strong>Full-Stack Expertise:</strong> We don't just use tools; we write custom code, build APIs, and deploy infrastructure.</span>
                                </li>
                                <li className="flex gap-3">
                                    <CheckCircle2 className="h-6 w-6 flex-none text-brand-blue" />
                                    <span><strong>Signal-First Approach:</strong> We focus on finding the 5% of buyers who are ready now, not spamming the 95% who aren't.</span>
                                </li>
                                <li className="flex gap-3">
                                    <CheckCircle2 className="h-6 w-6 flex-none text-brand-blue" />
                                    <span><strong>Proven Results:</strong> Our workflows have generated millions in pipeline for B2B SaaS companies.</span>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </section>

            {/* Who is this for? */}
            <section className="bg-brand-dark py-16 sm:py-24 text-white">
                <div className="mx-auto max-w-7xl px-6 lg:px-8">
                    <div className="mx-auto max-w-2xl text-center">
                        <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Who Needs a GTM Engineer?</h2>
                        <p className="mt-4 text-lg text-gray-300">We specialize in helping technical teams scale outbound.</p>
                    </div>
                    <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-4">
                        {[
                            "B2B SaaS Founders",
                            "Early SDR Teams",
                            "RevOps Teams",
                            "Growth Marketing Teams"
                        ].map((persona) => (
                            <div key={persona} className="flex flex-col items-center rounded-xl bg-white/10 p-6 text-center backdrop-blur-sm">
                                <h3 className="text-xl font-semibold">{persona}</h3>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Capabilities */}
            <section id="capabilities" className="py-16 sm:py-24">
                <div className="mx-auto max-w-7xl px-6 lg:px-8">
                    <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl text-center mb-16">Core Capabilities</h2>
                    <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
                        {[
                            { icon: Workflow, title: "Workflow Automation", items: ["Build end-to-end n8n automations", "Integrate disparate APIs", "Error handling & retries"] },
                            { icon: Database, title: "Data Enrichment", items: ["Waterfall enrichment (Clay)", "Scrape custom signals", "Clean & normalize data"] },
                            { icon: Bot, title: "AI Agent Orchestration", items: ["Deploy autonomous research agents", "Personalize email copy at scale", "Handle inbound replies"] },
                            { icon: Terminal, title: "Custom Development", items: ["Write Python/TypeScript scripts", "Deploy on Docker/Cloudflare", "Build custom internal tools"] },
                            { icon: Globe2, title: "Market Intelligence", items: ["Map Total Addressable Market", "Track job changes & news", "Monitor competitor activity"] },
                            { icon: CheckCircle2, title: "System Health", items: ["Monitor API usage & costs", "Optimize workflow latency", "Ensure data compliance"] },
                        ].map((cap) => (
                            <div key={cap.title} className="rounded-2xl border border-gray-200 p-8 hover:border-brand-blue/50 transition-colors">
                                <cap.icon className="h-8 w-8 text-brand-blue mb-4" />
                                <h3 className="text-xl font-bold text-gray-900 mb-4">{cap.title}</h3>
                                <ul className="space-y-2">
                                    {cap.items.map((item) => (
                                        <li key={item} className="flex items-start gap-2 text-gray-600 text-sm">
                                            <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-brand-blue flex-none" />
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Process */}
            <section className="bg-gray-50 py-16 sm:py-24">
                <div className="mx-auto max-w-7xl px-6 lg:px-8">
                    <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl text-center mb-16">How We Work</h2>
                    <div className="mx-auto max-w-4xl">
                        <div className="space-y-12">
                            {[
                                { step: "01", title: "ICP & Signal Mapping", desc: "We define exactly who buys from you and what signals indicate they are ready." },
                                { step: "02", title: "Workflow Architecture", desc: "We design the logic flow in Clay and n8n to automate the manual steps." },
                                { step: "03", title: "Data Infrastructure", desc: "We set up Supabase or Postgres to store and track every interaction." },
                                { step: "04", title: "Agent Integration", desc: "We plug in LLM agents to handle qualitative tasks like research and writing." },
                                { step: "05", title: "Launch & Iterate", desc: "We go live, monitor performance, and continuously optimize for conversion." },
                            ].map((item) => (
                                <div key={item.step} className="flex gap-6 md:gap-10">
                                    <div className="flex-none">
                                        <span className="flex h-12 w-12 items-center justify-center rounded-full bg-brand-blue text-white font-bold text-lg">
                                            {item.step}
                                        </span>
                                    </div>
                                    <div>
                                        <h3 className="text-xl font-bold text-gray-900">{item.title}</h3>
                                        <p className="mt-2 text-gray-600 leading-7">{item.desc}</p>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </section>

            {/* Example Workflow */}
            <section className="py-16 sm:py-24">
                <div className="mx-auto max-w-7xl px-6 lg:px-8">
                    <div className="mx-auto max-w-3xl text-center mb-12">
                        <h2 className="text-3xl font-bold tracking-tight text-gray-900">Example Workflow</h2>
                        <p className="mt-4 text-lg text-gray-600">A typical enrichment flow built by a GTM Engineer.</p>
                    </div>
                    <div className="rounded-xl bg-slate-900 p-6 shadow-2xl overflow-x-auto">
                        <pre className="text-sm text-blue-300 font-mono">
                            {`// n8n Workflow: Enrich & Qualify
{
  "nodes": [
    {
      "name": "Webhook Trigger",
      "type": "n8n-nodes-base.webhook",
      "notes": "Receives new signups"
    },
    {
      "name": "Clay Enrichment",
      "type": "n8n-nodes-base.httpRequest",
      "notes": "Fetches revenue, headcount, tech stack"
    },
    {
      "name": "OpenAI Qualifier",
      "type": "n8n-nodes-base.openAi",
      "notes": "Scores lead based on ICP match (1-10)"
    },
    {
      "name": "Slack Alert",
      "type": "n8n-nodes-base.slack",
      "notes": "Notifies sales team of high-intent leads"
    }
  ]
}`}
                        </pre>
                        <p className="mt-4 text-xs text-gray-500 italic">
                            Alt: JSON representation of an n8n workflow created by zenrev to enrich leads using Clay and OpenAI.
                        </p>
                    </div>
                </div>
            </section>

            {/* Industries */}
            <section className="bg-brand-blue/5 py-16">
                <div className="mx-auto max-w-7xl px-6 lg:px-8 text-center">
                    <h2 className="text-2xl font-bold text-gray-900 mb-8">Serving Global Markets</h2>
                    <div className="flex flex-wrap justify-center gap-4 md:gap-8">
                        {["United States", "United Arab Emirates (Dubai, Abu Dhabi)", "India (Bangalore, Delhi)", "Europe (UK, Germany)"].map((loc) => (
                            <span key={loc} className="inline-flex items-center rounded-full bg-white px-4 py-2 text-sm font-medium text-gray-700 shadow-sm">
                                <Globe2 className="mr-2 h-4 w-4 text-brand-blue" />
                                {loc}
                            </span>
                        ))}
                    </div>
                </div>
            </section>

            {/* FAQ */}
            <section className="py-16 sm:py-24">
                <div className="mx-auto max-w-4xl px-6 lg:px-8">
                    <h2 className="text-3xl font-bold tracking-tight text-gray-900 text-center mb-12">Frequently Asked Questions</h2>
                    <div className="space-y-8">
                        {[
                            { q: "What does a GTM engineer do?", a: "A GTM Engineer automates the sales and marketing stack. We build workflows to find leads, enrich data, and send personalized messages at scale, replacing manual SDR work." },
                            { q: "How is Clay used for outbound?", a: "Clay is our primary data orchestration tool. We use it to waterfall enrich leads from 50+ data sources (like LinkedIn, Apollo, BuiltWith) to get the highest quality data coverage." },
                            { q: "Can you connect n8n to Google Sheets, Supabase, and HubSpot?", a: "Yes. We specialize in building custom integrations between any tools with an API. We often use Google Sheets as a UI, Supabase as a database, and HubSpot as the CRM." },
                            { q: "How much does a GTM engineer cost?", a: "Hiring a full-time GTM engineer costs $150k+. zenrev offers fractional GTM engineering services starting at a fraction of that cost, delivering immediate value." },
                            { q: "What is the difference between a GTM engineer and an SDR?", a: "An SDR manually executes tasks (calls, emails). A GTM Engineer builds systems that execute those tasks automatically. One engineer can do the work of 10 SDRs." },
                            { q: "Do you build AI agents?", a: "Yes. We build autonomous agents using OpenAI and Anthropic models to perform complex qualitative research, write hyper-personalized copy, and even handle initial replies." },
                            { q: "What industries do you serve?", a: "We primarily serve B2B SaaS companies, agencies, and high-ticket service providers who need to scale their outbound prospecting efficiently." },
                            { q: "How quickly can we see results?", a: "Our systems typically go live within 2-4 weeks. Once live, signal-based outbound often generates qualified meetings within the first week of operation." },
                        ].map((faq, i) => (
                            <div key={i} className="border-b border-gray-200 pb-8">
                                <h3 className="text-lg font-semibold text-gray-900">{faq.q}</h3>
                                <p className="mt-4 text-base leading-7 text-gray-600">{faq.a}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* CTA */}
            <section className="bg-brand-dark py-24 text-center text-white">
                <div className="mx-auto max-w-7xl px-6 lg:px-8">
                    <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Ready to automate your revenue?</h2>
                    <p className="mx-auto mt-6 max-w-xl text-lg text-gray-300">
                        Chat with our AI assistant to learn more about GTM engineering, or book a consultation to get started.
                    </p>
                    <div className="mt-10 flex items-center justify-center gap-x-6">
                        <Button size="lg" className="bg-white text-brand-dark hover:bg-gray-100" asChild>
                            <Link href="https://cal.com/jayanand-j-ywq8ls/30min" target="_blank">Book Consultation</Link>
                        </Button>
                    </div>
                </div>
            </section>
        </div>
    )
}
