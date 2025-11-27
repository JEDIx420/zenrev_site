import { Metadata } from "next"
import Link from "next/link"
import { Button } from "@/components/ui/Button"
import { CheckCircle2, ArrowRight, Workflow, Server, Code2, Database, Zap, Lock } from "lucide-react"

export const metadata: Metadata = {
    title: "n8n Developer | Hire Expert n8n Automation Consultants",
    description: "Hire an n8n Developer to build custom workflow automations. We specialize in self-hosted n8n, complex API integrations, and AI agent orchestration.",
    alternates: {
        canonical: "https://zenrev.org/n8n-developer",
    },
    openGraph: {
        title: "n8n Developer | Hire Expert n8n Automation Consultants",
        description: "Automate anything with n8n. We build robust, self-hosted workflows for B2B SaaS operations.",
        url: "https://zenrev.org/n8n-developer",
    },
}

const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "n8n Development Services",
    "provider": {
        "@type": "Organization",
        "name": "zenrev",
        "url": "https://zenrev.org"
    },
    "description": "Expert n8n workflow development, self-hosting setup, and custom node creation.",
    "areaServed": ["United States", "United Arab Emirates", "India", "Europe"],
    "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": "n8n Services",
        "itemListElement": [
            {
                "@type": "Offer",
                "itemOffered": {
                    "@type": "Service",
                    "name": "Workflow Automation"
                }
            },
            {
                "@type": "Offer",
                "itemOffered": {
                    "@type": "Service",
                    "name": "Self-Hosted n8n Setup"
                }
            },
            {
                "@type": "Offer",
                "itemOffered": {
                    "@type": "Service",
                    "name": "Custom Node Development"
                }
            }
        ]
    }
}

export default function N8nDeveloperPage() {
    return (
        <div className="bg-white">
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />

            {/* Hero Section */}
            <section className="relative overflow-hidden bg-gradient-to-b from-orange-50 to-white pt-24 pb-16 sm:pt-32 sm:pb-24">
                <div className="mx-auto max-w-7xl px-6 lg:px-8">
                    <div className="mx-auto max-w-3xl text-center">
                        <h1 className="text-4xl font-bold tracking-tight text-brand-dark sm:text-6xl font-heading">
                            n8n Developer
                        </h1>
                        <p className="mt-6 text-xl leading-8 text-gray-600">
                            Build powerful, self-hosted automations without the Zapier tax. We are n8n Developers who architect complex workflows, integrate custom APIs, and deploy scalable infrastructure.
                        </p>
                        <div className="mt-10 flex items-center justify-center gap-x-6">
                            <Button size="lg" asChild>
                                <Link href="/contact">
                                    Hire an n8n Developer <ArrowRight className="ml-2 h-4 w-4" />
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
                            <h2 className="text-3xl font-bold tracking-tight text-gray-900">What is an n8n Developer?</h2>
                            <p className="mt-6 text-lg leading-7 text-gray-600">
                                n8n is a fair-code workflow automation tool that is far more powerful than Zapier or Make. An n8n Developer writes JavaScript/TypeScript within nodes, manages self-hosted servers, and builds complex logic loops.
                            </p>
                            <p className="mt-4 text-lg leading-7 text-gray-600">
                                We don't just drag and drop. We treat automation as code. We use Git for version control, implement error handling, and optimize for high-throughput data processing.
                            </p>
                        </div>
                        <div className="rounded-2xl bg-gray-50 p-8 ring-1 ring-gray-200">
                            <h3 className="text-2xl font-bold tracking-tight text-gray-900">Why choose zenrev?</h3>
                            <ul className="mt-6 space-y-4 text-gray-600">
                                <li className="flex gap-3">
                                    <CheckCircle2 className="h-6 w-6 flex-none text-brand-blue" />
                                    <span><strong>Self-Hosting Experts:</strong> We deploy n8n on your own cloud (AWS/DigitalOcean) to keep data secure and costs low.</span>
                                </li>
                                <li className="flex gap-3">
                                    <CheckCircle2 className="h-6 w-6 flex-none text-brand-blue" />
                                    <span><strong>Custom Code:</strong> We write custom Function nodes to handle complex data transformation that standard nodes can't do.</span>
                                </li>
                                <li className="flex gap-3">
                                    <CheckCircle2 className="h-6 w-6 flex-none text-brand-blue" />
                                    <span><strong>AI Integration:</strong> We are experts at chaining LangChain and OpenAI nodes within n8n to build agentic workflows.</span>
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
                        <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Who Needs an n8n Developer?</h2>
                        <p className="mt-4 text-lg text-gray-300">Businesses that have outgrown Zapier.</p>
                    </div>
                    <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-4">
                        {[
                            "CTOs & Tech Leads",
                            "Operations Managers",
                            "SaaS Product Teams",
                            "High-Volume Agencies"
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
                            { icon: Workflow, title: "End-to-End Automation", items: ["Connect any API to any API", "Handle complex branching logic", "Manage state across executions"] },
                            { icon: Server, title: "Infrastructure Setup", items: ["Deploy n8n on Docker/Kubernetes", "Configure reverse proxies (Traefik/Nginx)", "Scale workers for load"] },
                            { icon: Code2, title: "Custom Functions", items: ["Write JavaScript/TypeScript nodes", "Transform complex JSON structures", "Implement custom crypto/auth"] },
                            { icon: Database, title: "Database Sync", items: ["Bi-directional sync (Postgres/Supabase)", "ETL pipelines", "Data migration workflows"] },
                            { icon: Zap, title: "Migration from Zapier", items: ["Audit existing Zaps", "Re-architect for n8n", "Reduce monthly automation costs by 90%"] },
                            { icon: Lock, title: "Secure Webhooks", items: ["Validate webhook signatures", "Implement rate limiting", "Secure internal endpoints"] },
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
                    <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl text-center mb-16">How We Automate</h2>
                    <div className="mx-auto max-w-4xl">
                        <div className="space-y-12">
                            {[
                                { step: "01", title: "Workflow Mapping", desc: "We diagram your current manual process and identify the API endpoints needed." },
                                { step: "02", title: "Infrastructure Config", desc: "We set up a dedicated n8n instance on your cloud or ours to ensure privacy." },
                                { step: "03", title: "Development", desc: "We build the workflow, writing custom code blocks for logic that standard nodes can't handle." },
                                { step: "04", title: "Error Handling", desc: "We implement robust error catching and notification systems (Slack/Email alerts)." },
                                { step: "05", title: "Handoff & Training", desc: "We document the workflow and train your team on how to monitor and maintain it." },
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
                        <h2 className="text-3xl font-bold tracking-tight text-gray-900">Example n8n Code</h2>
                        <p className="mt-4 text-lg text-gray-600">Custom JavaScript node for data transformation.</p>
                    </div>
                    <div className="rounded-xl bg-slate-900 p-6 shadow-2xl overflow-x-auto">
                        <pre className="text-sm text-blue-300 font-mono">
                            {`// Code Node: Transform API Response
const results = [];

for (const item of items) {
  const rawData = item.json.api_response;
  
  // Custom logic to normalize data
  const normalized = {
    email: rawData.contact_email.toLowerCase(),
    company: rawData.org_name.trim(),
    score: rawData.intent_score > 80 ? 'High' : 'Low',
    timestamp: new Date().toISOString()
  };

  results.push({ json: normalized });
}

return results;`}
                        </pre>
                        <p className="mt-4 text-xs text-gray-500 italic">
                            Alt: JavaScript code snippet from an n8n Function node written by zenrev to normalize API data.
                        </p>
                    </div>
                </div>
            </section>

            {/* Industries */}
            <section className="bg-brand-blue/5 py-16">
                <div className="mx-auto max-w-7xl px-6 lg:px-8 text-center">
                    <h2 className="text-2xl font-bold text-gray-900 mb-8">Global Infrastructure Support</h2>
                    <div className="flex flex-wrap justify-center gap-4 md:gap-8">
                        {["AWS", "DigitalOcean", "Hetzner", "Google Cloud"].map((loc) => (
                            <span key={loc} className="inline-flex items-center rounded-full bg-white px-4 py-2 text-sm font-medium text-gray-700 shadow-sm">
                                <Server className="mr-2 h-4 w-4 text-brand-blue" />
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
                            { q: "What is n8n?", a: "n8n is a workflow automation tool similar to Zapier but 'fair-code'. It allows for much more complex logic, custom code execution, and can be self-hosted to keep your data private." },
                            { q: "Why should I use n8n over Zapier?", a: "Cost and Complexity. Zapier gets incredibly expensive at scale. n8n is free if self-hosted. Also, n8n handles loops, complex branching, and custom code much better than Zapier." },
                            { q: "Do you host n8n for us?", a: "We can. We typically recommend setting up a private instance on your own cloud (AWS/DigitalOcean) so you own the data, but we manage the setup and maintenance." },
                            { q: "Can n8n connect to my internal API?", a: "Yes. n8n has a generic HTTP Request node that can connect to any REST or GraphQL API, including internal tools behind a VPN (if configured correctly)." },
                            { q: "Is n8n secure?", a: "Yes, especially when self-hosted. Your data never leaves your server. We also implement best practices like securing webhooks and using environment variables for secrets." },
                            { q: "Can n8n handle high volume?", a: "Yes. n8n can be scaled with 'workers' to handle thousands of executions per minute. It is much more performant than cloud-only tools like Zapier." },
                            { q: "Do you offer support after building the workflow?", a: "Yes. We offer retainer packages to monitor, fix, and optimize your workflows as your business processes change." },
                            { q: "Can n8n use AI?", a: "Absolutely. n8n has native integrations with OpenAI and LangChain. It is one of the best platforms for building AI agents and RAG pipelines." },
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
                    <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Automate without limits.</h2>
                    <p className="mx-auto mt-6 max-w-xl text-lg text-gray-300">
                        Chat with our AI assistant to discuss your automation needs, or book a consultation with an n8n Architect.
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
