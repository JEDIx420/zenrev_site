import { Metadata } from "next"
import Link from "next/link"
import { Button } from "@/components/ui/Button"
import { CheckCircle2, ArrowRight, Table, Database, Filter, Zap, Globe2, Search } from "lucide-react"

export const metadata: Metadata = {
    title: "Clay Expert | Hire Top Clay.com Developers & Consultants",
    description: "Hire a Clay Expert to automate your outbound prospecting. We build advanced waterfall enrichment tables, custom scrapers, and AI personalization workflows.",
    alternates: {
        canonical: "https://zenrev.org/clay-expert",
    },
    openGraph: {
        title: "Clay Expert | Hire Top Clay.com Developers",
        description: "Master Clay.com with expert help. We build waterfall enrichment, AI scoring, and automated outbound tables.",
        url: "https://zenrev.org/clay-expert",
    },
}

const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Clay Expert Services",
    "provider": {
        "@type": "Organization",
        "name": "zenrev",
        "url": "https://zenrev.org"
    },
    "description": "Expert consulting and development for Clay.com, specializing in waterfall enrichment and outbound automation.",
    "areaServed": ["United States", "United Arab Emirates", "India", "Europe"],
    "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": "Clay Services",
        "itemListElement": [
            {
                "@type": "Offer",
                "itemOffered": {
                    "@type": "Service",
                    "name": "Clay Table Architecture"
                }
            },
            {
                "@type": "Offer",
                "itemOffered": {
                    "@type": "Service",
                    "name": "Waterfall Enrichment"
                }
            },
            {
                "@type": "Offer",
                "itemOffered": {
                    "@type": "Service",
                    "name": "Claygent Implementation"
                }
            }
        ]
    }
}

export default function ClayExpertPage() {
    return (
        <div className="bg-white">
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />

            {/* Hero Section */}
            <section className="relative overflow-hidden bg-gradient-to-b from-amber-50 to-white pt-24 pb-16 sm:pt-32 sm:pb-24">
                <div className="mx-auto max-w-7xl px-6 lg:px-8">
                    <div className="mx-auto max-w-3xl text-center">
                        <h1 className="text-4xl font-bold tracking-tight text-brand-dark sm:text-6xl font-heading">
                            Clay Expert
                        </h1>
                        <p className="mt-6 text-xl leading-8 text-gray-600">
                            Scale your outbound with the world's most powerful data enrichment tool. We are Clay Experts who build complex waterfall enrichments and AI-scored lead lists.
                        </p>
                        <div className="mt-10 flex items-center justify-center gap-x-6">
                            <Button size="lg" asChild>
                                <Link href="/contact">
                                    Hire a Clay Expert <ArrowRight className="ml-2 h-4 w-4" />
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
                            <h2 className="text-3xl font-bold tracking-tight text-gray-900">What is a Clay Expert?</h2>
                            <p className="mt-6 text-lg leading-7 text-gray-600">
                                Clay is a spreadsheet that fills itself. A Clay Expert knows how to architect these spreadsheets to pull data from 50+ providers (LinkedIn, Apollo, BuiltWith, Google Maps) to build the perfect lead list.
                            </p>
                            <p className="mt-4 text-lg leading-7 text-gray-600">
                                We go beyond basic templates. We use "Claygent" (AI web scraper) to find data that isn't in any database, and we write custom Javascript to format that data for your CRM.
                            </p>
                        </div>
                        <div className="rounded-2xl bg-gray-50 p-8 ring-1 ring-gray-200">
                            <h3 className="text-2xl font-bold tracking-tight text-gray-900">Why choose zenrev?</h3>
                            <ul className="mt-6 space-y-4 text-gray-600">
                                <li className="flex gap-3">
                                    <CheckCircle2 className="h-6 w-6 flex-none text-brand-blue" />
                                    <span><strong>Waterfall Enrichment:</strong> We save you money by checking cheaper data sources first before querying expensive ones.</span>
                                </li>
                                <li className="flex gap-3">
                                    <CheckCircle2 className="h-6 w-6 flex-none text-brand-blue" />
                                    <span><strong>Custom Scrapers:</strong> We build custom Claygents to scrape specific signals like "hiring for X role" or "uses Y software".</span>
                                </li>
                                <li className="flex gap-3">
                                    <CheckCircle2 className="h-6 w-6 flex-none text-brand-blue" />
                                    <span><strong>CRM Sync:</strong> We ensure your Clay data flows perfectly into HubSpot, Salesforce, or Pipedrive.</span>
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
                        <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Who Needs a Clay Expert?</h2>
                        <p className="mt-4 text-lg text-gray-300">Teams that need high-quality data at scale.</p>
                    </div>
                    <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-4">
                        {[
                            "Growth Hackers",
                            "Outbound Agencies",
                            "SDR Leaders",
                            "Recruiters"
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
                            { icon: Database, title: "Waterfall Enrichment", items: ["Maximize coverage (90%+)", "Minimize cost per lead", "Combine 10+ data providers"] },
                            { icon: Search, title: "Claygent Scraping", items: ["Scrape unstructured web data", "Find decision makers not in DBs", "Verify emails in real-time"] },
                            { icon: Zap, title: "AI Personalization", items: ["Generate personalized first lines", "Analyze company reports", "Categorize leads by intent"] },
                            { icon: Table, title: "Table Architecture", items: ["Design scalable Clay tables", "Handle 100k+ rows", "Optimize run usage"] },
                            { icon: Filter, title: "Lead Scoring", items: ["Build algorithmic scoring models", "Filter out bad fits automatically", "Prioritize high-intent leads"] },
                            { icon: Globe2, title: "Local Enrichment", items: ["Enrich data for specific regions", "Find local phone numbers", "Map territory coverage"] },
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
                    <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl text-center mb-16">How We Use Clay</h2>
                    <div className="mx-auto max-w-4xl">
                        <div className="space-y-12">
                            {[
                                { step: "01", title: "Source Aggregation", desc: "We pull raw domains from Apollo, LinkedIn, or Google Maps into Clay." },
                                { step: "02", title: "Waterfall Enrichment", desc: "We run the list through multiple providers (Prospeo, Datagma, Findymail) to find valid emails." },
                                { step: "03", title: "AI Qualification", desc: "We use Claygent to visit each website and answer: 'Do they fit the ICP?'" },
                                { step: "04", title: "Personalization", desc: "We use GPT-4 inside Clay to write a unique sentence based on their recent news." },
                                { step: "05", title: "Sync to Sender", desc: "We push the clean, enriched, personalized list to Smartlead or Instantly." },
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
                        <h2 className="text-3xl font-bold tracking-tight text-gray-900">Example Clay Table</h2>
                        <p className="mt-4 text-lg text-gray-600">Structure of a high-converting enrichment table.</p>
                    </div>
                    <div className="rounded-xl bg-slate-900 p-6 shadow-2xl overflow-x-auto">
                        <pre className="text-sm text-blue-300 font-mono">
                            {`// Column Structure: Clay Enrichment Table
[
  { "col": "Domain", "value": "example.com" },
  { "col": "Enrich: LinkedIn", "value": "linkedin.com/company/example" },
  { "col": "Enrich: Tech Stack", "value": ["HubSpot", "Next.js", "Stripe"] },
  { "col": "AI: Is B2B SaaS?", "value": "TRUE" },
  { "col": "AI: Decision Maker", "value": "Jane Doe (CTO)" },
  { "col": "Waterfall: Email", "value": "jane@example.com (Verified)" },
  { "col": "AI: Icebreaker", "value": "Saw you use Next.js..." }
]`}
                        </pre>
                        <p className="mt-4 text-xs text-gray-500 italic">
                            Alt: JSON representation of a Clay.com table structure designed by zenrev for B2B SaaS enrichment.
                        </p>
                    </div>
                </div>
            </section>

            {/* Industries */}
            <section className="bg-brand-blue/5 py-16">
                <div className="mx-auto max-w-7xl px-6 lg:px-8 text-center">
                    <h2 className="text-2xl font-bold text-gray-900 mb-8">Global Data Coverage</h2>
                    <div className="flex flex-wrap justify-center gap-4 md:gap-8">
                        {["North America", "EMEA", "APAC", "LATAM"].map((loc) => (
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
                            { q: "What is Clay?", a: "Clay is a data enrichment platform that acts like a spreadsheet but connects to 50+ data providers. It allows you to build complex 'waterfalls' to find data that single tools like Apollo miss." },
                            { q: "Why do I need a Clay Expert?", a: "Clay is powerful but complex. Setting up waterfalls, Claygents, and API integrations requires technical knowledge. We help you avoid wasting credits and build tables that actually deliver results." },
                            { q: "What is a 'Waterfall Enrichment'?", a: "It's a method of checking multiple data providers in sequence. For example, check Provider A (cheap) -> if no email -> check Provider B (expensive). This maximizes find rate while minimizing cost." },
                            { q: "Can Clay scrape websites?", a: "Yes, using 'Claygent', an AI agent inside Clay. We use it to visit company websites and answer specific questions like 'Do they have a pricing page?' or 'Who is their VP of Sales?'." },
                            { q: "How much does Clay cost?", a: "Clay has its own subscription (starting ~$149/mo). Our service fee is separate and covers the architecture and setup of your Clay tables." },
                            { q: "Does Clay integrate with HubSpot?", a: "Yes, Clay has a native HubSpot integration. We can set it up to automatically push new leads to your CRM or update existing contacts with new data." },
                            { q: "Is Clay better than Apollo?", a: "They are different. Apollo is a database. Clay is an aggregator. Clay can pull data FROM Apollo, but also from LinkedIn, Google, and 50 other sources simultaneously. Clay is superior for coverage and custom signals." },
                            { q: "Can you build a system to find local businesses?", a: "Yes. We use Clay's Google Maps integration to find local businesses (e.g., 'Plumbers in Austin') and then enrich them with emails and phone numbers." },
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
                    <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Supercharge your data.</h2>
                    <p className="mx-auto mt-6 max-w-xl text-lg text-gray-300">
                        Chat with our AI assistant to see if Clay is right for you, or book a consultation to build your first table.
                    </p>
                    <div className="mt-10 flex items-center justify-center gap-x-6">
                        <Button size="lg" className="bg-white text-brand-dark hover:bg-gray-100" asChild>
                            <Link href="/contact">Book Consultation</Link>
                        </Button>
                    </div>
                </div>
            </section>
        </div>
    )
}
