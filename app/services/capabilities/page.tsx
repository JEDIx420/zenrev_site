import { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, Code, Database, Bot, Zap, Mail, GitBranch, Link as LinkIcon, Workflow } from "lucide-react";
import { Button } from "@/components/ui/Button";

export const metadata: Metadata = {
    title: "Service Capabilities | zenrev GTM Engineering",
    description: "Complete list of zenrev's GTM engineering capabilities: n8n workflows, Clay enrichment, signal detection, AI agents, outbound automation, RevOps pipelines, CRM integration, and custom APIs.",
    keywords: ["n8n development", "Clay automation", "AI agents", "signal detection", "outbound automation", "RevOps", "CRM integration", "API development"],
};

const capabilities = [
    {
        icon: Workflow,
        title: "n8n Workflow Development",
        description: "Production-grade workflow automation with custom JavaScript nodes, error handling, and high-volume processing.",
        capabilities: [
            "Custom node development with JavaScript/TypeScript",
            "Complex multi-step orchestrations",
            "Error handling and retry logic",
            "High-volume data processing (10K+ records/day)",
            "Self-hosted deployment and management"
        ],
        techStack: ["n8n", "JavaScript", "PostgreSQL", "Docker"],
        useCases: [
            "Lead enrichment pipelines",
            "Multi-channel outreach orchestration",
            "Data synchronization between tools",
            "Automated reporting and alerts"
        ]
    },
    {
        icon: Database,
        title: "Clay Enrichment & Scraping",
        description: "Advanced Clay.com implementation with waterfall enrichment, Claygent scraping, and complex table architecture.",
        capabilities: [
            "Waterfall enrichment logic (multiple providers)",
            "Claygent AI scraping and research",
            "Complex formula and conditional logic",
            "CRM bidirectional sync",
            "Custom API integrations"
        ],
        techStack: ["Clay", "Clearbit", "Apollo", "LinkedIn", "Custom APIs"],
        useCases: [
            "Company and contact enrichment",
            "Technographic data collection",
            "Job change monitoring",
            "Competitive intelligence gathering"
        ]
    },
    {
        icon: Zap,
        title: "Signal Detection Systems",
        description: "Real-time monitoring of buying signals across the web to identify high-intent prospects automatically.",
        capabilities: [
            "Funding announcement tracking",
            "Job change detection",
            "Technology adoption monitoring",
            "Company milestone tracking",
            "Intent data aggregation"
        ],
        techStack: ["Exa AI", "Firecrawl", "Apify", "RSS feeds", "Webhooks"],
        useCases: [
            "Series B funding triggers",
            "New VP of Sales outreach",
            "Tech stack changes",
            "Product launch monitoring"
        ]
    },
    {
        icon: Bot,
        title: "Agentic AI Development",
        description: "Custom LLM agents for autonomous research, personalization, and decision-making in GTM workflows.",
        capabilities: [
            "Research agents for market intelligence",
            "Personalization agents for outreach",
            "Scoring agents for lead qualification",
            "RAG systems with vector databases",
            "Multi-agent orchestration"
        ],
        techStack: ["OpenAI", "Anthropic", "Gemini", "LangChain", "Pinecone"],
        useCases: [
            "Autonomous prospect research",
            "AI-powered email personalization",
            "Competitive analysis automation",
            "Lead scoring and routing"
        ]
    },
    {
        icon: Mail,
        title: "Outbound Automation",
        description: "End-to-end automated outbound systems across email, LinkedIn, and other channels with full personalization.",
        capabilities: [
            "Multi-channel sequence orchestration",
            "AI-powered personalization at scale",
            "A/B testing and optimization",
            "Deliverability management",
            "Reply detection and categorization"
        ],
        techStack: ["SendGrid", "Instantly", "Phantombuster", "Expandi", "Lemlist"],
        useCases: [
            "Cold email campaigns",
            "LinkedIn automation",
            "Multi-touch sequences",
            "Event-triggered outreach"
        ]
    },
    {
        icon: GitBranch,
        title: "RevOps Data Pipelines",
        description: "Robust data infrastructure for revenue operations including ETL, data warehousing, and reporting.",
        capabilities: [
            "ETL pipeline development",
            "Data warehouse architecture",
            "Real-time data synchronization",
            "Custom reporting dashboards",
            "Data quality and validation"
        ],
        techStack: ["PostgreSQL", "BigQuery", "Airbyte", "dbt", "Metabase"],
        useCases: [
            "CRM data consolidation",
            "Revenue attribution modeling",
            "Sales forecasting pipelines",
            "Marketing analytics infrastructure"
        ]
    },
    {
        icon: LinkIcon,
        title: "CRM Integration & Sync",
        description: "Seamless bidirectional integration with all major CRMs ensuring data consistency across your stack.",
        capabilities: [
            "Bidirectional data synchronization",
            "Custom field mapping",
            "Deduplication logic",
            "Historical data migration",
            "Real-time webhook integration"
        ],
        techStack: ["HubSpot", "Salesforce", "Pipedrive", "Close", "Custom CRMs"],
        useCases: [
            "Clay to HubSpot sync",
            "Multi-CRM consolidation",
            "Enrichment data backfill",
            "Activity logging automation"
        ]
    },
    {
        icon: Code,
        title: "Custom API Development",
        description: "Bespoke API development and integration for unique GTM workflows and proprietary systems.",
        capabilities: [
            "RESTful API development",
            "Webhook endpoint creation",
            "API wrapper development",
            "Rate limiting and caching",
            "Authentication and security"
        ],
        techStack: ["Node.js", "Python", "FastAPI", "Express", "PostgreSQL"],
        useCases: [
            "Custom data provider integration",
            "Internal tool API development",
            "Third-party API orchestration",
            "Proprietary system integration"
        ]
    }
];

export default function ServiceCapabilitiesPage() {
    return (
        <div className="min-h-screen bg-white pt-24 pb-16">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="mb-8">
                    <Link
                        href="/services"
                        className="inline-flex items-center text-sm font-medium text-gray-500 hover:text-brand-blue transition-colors"
                    >
                        <ArrowLeft className="mr-2 h-4 w-4" />
                        Back to Services
                    </Link>
                </div>

                <div className="mx-auto max-w-2xl text-center mb-16">
                    <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl mb-6">
                        Service Capabilities
                    </h1>
                    <p className="text-lg leading-8 text-gray-600">
                        Complete breakdown of zenrev's GTM engineering capabilities. Each service can be delivered standalone or as part of a comprehensive GTM automation package.
                    </p>
                </div>

                <div className="space-y-12">
                    {capabilities.map((capability, index) => (
                        <div
                            key={capability.title}
                            className="rounded-3xl bg-white p-8 shadow-lg ring-1 ring-gray-200 transition-all hover:shadow-xl"
                        >
                            <div className="flex items-start gap-6">
                                <div className="flex-shrink-0">
                                    <div className="rounded-xl bg-gradient-to-br from-brand-blue to-brand-dark p-4 shadow-lg">
                                        <capability.icon className="h-8 w-8 text-white" />
                                    </div>
                                </div>

                                <div className="flex-1">
                                    <h2 className="text-2xl font-bold text-gray-900 mb-3">
                                        {capability.title}
                                    </h2>
                                    <p className="text-base text-gray-600 mb-6">
                                        {capability.description}
                                    </p>

                                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                        <div>
                                            <h3 className="text-sm font-bold text-gray-900 uppercase tracking-wide mb-3">
                                                Key Capabilities
                                            </h3>
                                            <ul className="space-y-2">
                                                {capability.capabilities.map((cap) => (
                                                    <li key={cap} className="flex items-start gap-2 text-sm text-gray-600">
                                                        <span className="flex-shrink-0 w-1.5 h-1.5 rounded-full bg-brand-blue mt-1.5"></span>
                                                        {cap}
                                                    </li>
                                                ))}
                                            </ul>
                                        </div>

                                        <div>
                                            <h3 className="text-sm font-bold text-gray-900 uppercase tracking-wide mb-3">
                                                Typical Use Cases
                                            </h3>
                                            <ul className="space-y-2 mb-6">
                                                {capability.useCases.map((useCase) => (
                                                    <li key={useCase} className="flex items-start gap-2 text-sm text-gray-600">
                                                        <span className="flex-shrink-0 w-1.5 h-1.5 rounded-full bg-brand-blue mt-1.5"></span>
                                                        {useCase}
                                                    </li>
                                                ))}
                                            </ul>

                                            <h3 className="text-sm font-bold text-gray-900 uppercase tracking-wide mb-3">
                                                Technology Stack
                                            </h3>
                                            <div className="flex flex-wrap gap-2">
                                                {capability.techStack.map((tech) => (
                                                    <span
                                                        key={tech}
                                                        className="rounded-full bg-gray-100 px-3 py-1 text-xs font-medium text-gray-700"
                                                    >
                                                        {tech}
                                                    </span>
                                                ))}
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                <div className="mt-16 border-t border-gray-100 pt-12">
                    <div className="rounded-3xl bg-gradient-to-br from-brand-blue to-brand-dark p-12 text-white text-center">
                        <h2 className="text-3xl font-bold mb-4">Need a Custom Solution?</h2>
                        <p className="text-lg text-blue-100 mb-8 max-w-2xl mx-auto">
                            We can combine any of these capabilities into a tailored GTM automation package for your specific needs.
                        </p>
                        <div className="flex flex-col sm:flex-row gap-4 justify-center">
                            <Button size="lg" variant="secondary" className="bg-white text-brand-blue hover:bg-gray-100" asChild>
                                <Link href="https://cal.com/jayanand-j-ywq8ls/30min" target="_blank">
                                    Book Consultation
                                </Link>
                            </Button>
                            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10" asChild>
                                <Link href="/services">
                                    View Packages
                                </Link>
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
