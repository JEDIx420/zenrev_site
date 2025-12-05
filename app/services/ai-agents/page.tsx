import { Button } from "@/components/ui/Button";
import Link from "next/link";
import { Metadata } from "next";
import { Bot, Sparkles, Zap, TrendingUp, Search, Database, ArrowRight, Brain } from "lucide-react";

export const metadata: Metadata = {
    title: "AI Sales Agents & Agentic Workflows Dubai | Custom AI Agents for B2B Lead Generation",
    description: "Build custom AI sales agents and agentic workflows for B2B prospecting, research automation, and lead generation. Dubai-based AI engineering for UAE, India, and global markets.",
    keywords: ["ai sales agents for b2b", "agentic workflows for lead generation", "ai agents for prospecting", "custom research agent for sales teams", "market research automation tools", "exa firecrawl automation agency", "ai data enrichment workflows", "ai agents dubai", "ai automation uae"],
};

const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "AI Sales Agents & Agentic Workflows",
    "description": "Custom AI agents and agentic workflows for B2B sales automation, prospecting, and research across UAE, India, and global markets.",
    "provider": {
        "@type": "Organization",
        "name": "zenrev",
        "address": {
            "@type": "PostalAddress",
            "addressLocality": "Dubai",
            "addressCountry": "AE"
        }
    },
    "areaServed": ["AE", "IN", "SA", "QA", "BH", "KW", "OM", "US"],
    "serviceType": "AI Agent Development"
};

export default function AIAgentsPage() {
    return (
        <div className="bg-white py-16 sm:py-20">
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />

            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                {/* Hero */}
                <div className="mx-auto max-w-2xl text-center">
                    <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-brand-blue/10 px-4 py-1.5 text-sm font-medium text-brand-blue">
                        <Bot className="h-4 w-4" />
                        AI Agents & Agentic Workflows
                    </div>
                    <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl mb-6">
                        AI Sales Agents & Agentic Workflows for B2B
                    </h1>
                    <p className="text-lg leading-8 text-gray-600 mb-8">
                        Build custom AI agents that automate prospecting, research, and lead generation. Agentic workflows that run 24/7, finding and engaging your best-fit prospects while you sleep.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Button size="lg" asChild>
                            <Link href="https://cal.com/jayanand-j-ywq8ls/30min" target="_blank">
                                Book AI Agent Consultation
                            </Link>
                        </Button>
                        <Button size="lg" variant="outline" asChild>
                            <Link href="/case-studies">View AI Agent Case Studies</Link>
                        </Button>
                    </div>
                </div>

                {/* Services Grid */}
                <div className="mt-16 grid grid-cols-1 gap-8 lg:grid-cols-3">
                    <div className="rounded-2xl bg-white p-8 shadow-lg ring-1 ring-gray-200">
                        <Brain className="h-10 w-10 text-brand-blue mb-4" />
                        <h3 className="text-xl font-bold text-gray-900 mb-3">Custom Research Agents</h3>
                        <p className="text-gray-600 mb-4">
                            AI agents that continuously monitor markets, analyze competitors, and identify opportunities. Like having a research team that never sleeps.
                        </p>
                        <ul className="space-y-2 text-sm text-gray-600">
                            <li>• Market intelligence automation</li>
                            <li>• Competitive analysis & tracking</li>
                            <li>• Signal detection (funding, hiring, etc.)</li>
                            <li>• Daily insights delivered to Slack</li>
                        </ul>
                    </div>

                    <div className="rounded-2xl bg-white p-8 shadow-lg ring-1 ring-gray-200">
                        <Search className="h-10 w-10 text-brand-blue mb-4" />
                        <h3 className="text-xl font-bold text-gray-900 mb-3">AI Prospecting Agents</h3>
                        <p className="text-gray-600 mb-4">
                            Autonomous agents that find, qualify, and engage prospects. From signal detection to personalized outreach, fully automated.
                        </p>
                        <ul className="space-y-2 text-sm text-gray-600">
                            <li>• Automated prospect discovery</li>
                            <li>• ICP scoring & qualification</li>
                            <li>• Personalized outreach generation</li>
                            <li>• Multi-channel engagement</li>
                        </ul>
                    </div>

                    <div className="rounded-2xl bg-white p-8 shadow-lg ring-1 ring-gray-200">
                        <Database className="h-10 w-10 text-brand-blue mb-4" />
                        <h3 className="text-xl font-bold text-gray-900 mb-3">Data Enrichment Workflows</h3>
                        <p className="text-gray-600 mb-4">
                            AI-powered data enrichment using Exa, Firecrawl, and 50+ data sources. Turn domains into complete company profiles automatically.
                        </p>
                        <ul className="space-y-2 text-sm text-gray-600">
                            <li>• Waterfall enrichment (50+ sources)</li>
                            <li>• Web scraping & data extraction</li>
                            <li>• Technographic & firmographic data</li>
                            <li>• Real-time updates & monitoring</li>
                        </ul>
                    </div>
                </div>

                {/* Agentic Workflows Section */}
                <div className="mt-16 rounded-2xl bg-gradient-to-br from-brand-dark via-brand-blue to-brand-dark p-12 text-white">
                    <div className="mx-auto max-w-3xl text-center">
                        <h2 className="text-3xl font-bold mb-4">Agentic Workflows for Lead Generation</h2>
                        <p className="text-lg text-blue-100 mb-8">
                            Multi-agent systems that coordinate research, enrichment, scoring, and outreach. One workflow replaces 5-10 SDRs.
                        </p>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
                            <div>
                                <div className="text-4xl font-bold text-white">24/7</div>
                                <div className="text-sm text-blue-200 mt-1">Always Running</div>
                            </div>
                            <div>
                                <div className="text-4xl font-bold text-white">10x</div>
                                <div className="text-sm text-blue-200 mt-1">SDR Productivity</div>
                            </div>
                            <div>
                                <div className="text-4xl font-bold text-white">90%</div>
                                <div className="text-sm text-blue-200 mt-1">Time Saved</div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* How It Works */}
                <div className="mt-16">
                    <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">How AI Agents Work</h2>
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                        <div className="text-center">
                            <div className="mx-auto w-12 h-12 rounded-full bg-brand-blue/10 flex items-center justify-center text-brand-blue font-bold text-xl mb-4">1</div>
                            <h3 className="font-bold text-gray-900 mb-2">Signal Monitoring</h3>
                            <p className="text-sm text-gray-600">Agents continuously monitor funding, hiring, tech changes, and buying signals</p>
                        </div>
                        <div className="text-center">
                            <div className="mx-auto w-12 h-12 rounded-full bg-brand-blue/10 flex items-center justify-center text-brand-blue font-bold text-xl mb-4">2</div>
                            <h3 className="font-bold text-gray-900 mb-2">Research & Enrichment</h3>
                            <p className="text-sm text-gray-600">AI scrapes websites, enriches data, and builds complete company profiles</p>
                        </div>
                        <div className="text-center">
                            <div className="mx-auto w-12 h-12 rounded-full bg-brand-blue/10 flex items-center justify-center text-brand-blue font-bold text-xl mb-4">3</div>
                            <h3 className="font-bold text-gray-900 mb-2">Scoring & Qualification</h3>
                            <p className="text-sm text-gray-600">Agents score leads based on ICP fit and prioritize high-value prospects</p>
                        </div>
                        <div className="text-center">
                            <div className="mx-auto w-12 h-12 rounded-full bg-brand-blue/10 flex items-center justify-center text-brand-blue font-bold text-xl mb-4">4</div>
                            <h3 className="font-bold text-gray-900 mb-2">Automated Outreach</h3>
                            <p className="text-sm text-gray-600">Personalized emails and LinkedIn messages sent automatically</p>
                        </div>
                    </div>
                </div>

                {/* Tech Stack */}
                <div className="mt-16 border-t border-gray-100 pt-12">
                    <h2 className="text-2xl font-bold text-gray-900 text-center mb-8">Our AI Agent Tech Stack</h2>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
                        <div className="p-4">
                            <div className="font-bold text-gray-900 mb-1">Exa AI</div>
                            <div className="text-sm text-gray-600">Semantic search & discovery</div>
                        </div>
                        <div className="p-4">
                            <div className="font-bold text-gray-900 mb-1">Firecrawl</div>
                            <div className="text-sm text-gray-600">Web scraping & extraction</div>
                        </div>
                        <div className="p-4">
                            <div className="font-bold text-gray-900 mb-1">n8n + MCP</div>
                            <div className="text-sm text-gray-600">Agent orchestration</div>
                        </div>
                        <div className="p-4">
                            <div className="font-bold text-gray-900 mb-1">GPT-4 / Claude</div>
                            <div className="text-sm text-gray-600">AI reasoning & generation</div>
                        </div>
                    </div>
                </div>

                {/* CTA */}
                <div className="mt-16 text-center border-t border-gray-100 pt-12">
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">
                        Ready to Deploy AI Agents?
                    </h3>
                    <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
                        Book a consultation and we'll show you how AI agents can automate your prospecting and research workflows.
                    </p>
                    <Button size="lg" asChild>
                        <Link href="https://cal.com/jayanand-j-ywq8ls/30min" target="_blank">
                            Book AI Agent Consultation
                            <ArrowRight className="ml-2 h-4 w-4" />
                        </Link>
                    </Button>
                </div>
            </div>
        </div>
    );
}
