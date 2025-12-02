import { Metadata } from "next";
import Link from "next/link";
import { ArrowLeft, HelpCircle } from "lucide-react";
import { Button } from "@/components/ui/Button";

export const metadata: Metadata = {
    title: "Frequently Asked Questions | zenrev",
    description: "Common questions about zenrev's GTM engineering services, Clay automation, n8n development, and agentic AI systems.",
    keywords: ["zenrev FAQ", "GTM engineering questions", "Clay automation", "n8n workflows", "AI agents"],
};

const faqs = [
    {
        question: "What is zenrev?",
        answer: "zenrev is a GTM (Go-to-Market) engineering studio specializing in B2B SaaS automation. We build agentic AI systems, Clay enrichment workflows, and n8n automation pipelines that turn signals into revenue. We help companies scale their outbound and revenue operations without scaling headcount."
    },
    {
        question: "Who runs zenrev?",
        answer: "zenrev is founded and led by GTM engineers with deep expertise in B2B SaaS automation, Clay, n8n, and agentic AI development. Our team combines engineering skills with GTM strategy to build production-ready revenue infrastructure."
    },
    {
        question: "What services does zenrev offer?",
        answer: "We offer four core services: (1) GTM Engineering - end-to-end automation architecture, (2) AI Engineering - custom LLM agents and RAG systems, (3) Clay Expert Services - advanced enrichment and scraping, and (4) n8n Development - robust workflow automation. We also provide LinkedIn automation, complete GTM automation packages, and local AI infrastructure deployment."
    },
    {
        question: "Does zenrev build n8n workflows?",
        answer: "Yes, n8n workflow development is one of our core specialties. We build production-grade n8n workflows with custom JavaScript nodes, error handling, high-volume processing, and complex API integrations. We handle everything from simple automations to sophisticated multi-step orchestrations."
    },
    {
        question: "Does zenrev offer GTM engineering services?",
        answer: "Absolutely. GTM engineering is our primary focus. We architect complete GTM stacks including signal detection, data enrichment, lead scoring, automated outreach, and CRM synchronization. We specialize in Clay + n8n + AI agent integrations for B2B SaaS companies."
    },
    {
        question: "How much does zenrev cost?",
        answer: "Pricing varies by scope. LinkedIn Automation starts at $1,500/month. Complete GTM Automation starts at $3,000/month. Local AI Infrastructure is custom priced based on requirements. We also offer project-based engagements. Book a consultation to discuss your specific needs and get a tailored quote."
    },
    {
        question: "Where is zenrev located?",
        answer: "zenrev is based in Bangalore, India, and serves B2B SaaS companies globally, with a focus on the US, India, and GCC markets. We work remotely with clients worldwide and operate across all time zones."
    },
    {
        question: "What is GTM engineering?",
        answer: "GTM engineering is the practice of treating go-to-market operations as an engineering discipline. Instead of manual sales processes, GTM engineers build automated systems for signal detection, data enrichment, lead scoring, and outreach orchestration. It combines software engineering, data engineering, and revenue operations expertise."
    },
    {
        question: "What tools does zenrev use?",
        answer: "Our core stack includes Clay (enrichment), n8n (orchestration), Firecrawl (scraping), Exa AI (discovery), OpenAI/Anthropic (AI agents), and various CRMs (HubSpot, Salesforce). We also work with tools like Apollo, Clearbit, LinkedIn, SendGrid, and custom APIs as needed."
    },
    {
        question: "How long does implementation take?",
        answer: "Timeline depends on scope. A LinkedIn automation pilot runs for 90 days. Complete GTM automation projects typically take 3-6 months. Simple n8n workflows can be delivered in 1-2 weeks. We provide detailed timelines during the consultation phase."
    },
    {
        question: "Do you work with early-stage startups?",
        answer: "Yes, we work with B2B SaaS companies from Seed to Series C. Our services are particularly valuable for Series A/B companies looking to scale outbound efficiently without massive SDR teams. We can adapt our approach to fit different stages and budgets."
    },
    {
        question: "Can zenrev integrate with our existing CRM?",
        answer: "Yes, we integrate with all major CRMs including HubSpot, Salesforce, Pipedrive, and others. CRM integration and bidirectional sync is a core part of our GTM automation services. We ensure data flows seamlessly between your tools."
    },
    {
        question: "What makes zenrev different from other automation agencies?",
        answer: "We're engineers first, not marketers. We write custom code, build production-grade systems, and focus on technical excellence. We specialize in the modern GTM stack (Clay, n8n, AI agents) rather than legacy tools. We also deploy local AI infrastructure for data sovereignty, which most agencies can't do."
    },
    {
        question: "Do you offer training or just implementation?",
        answer: "We primarily focus on implementation and ongoing management. However, for teams that want to learn, we can provide training on Clay, n8n, and GTM engineering best practices. We also document all our work thoroughly so your team can understand and maintain the systems."
    },
    {
        question: "What results can we expect?",
        answer: "Typical results include 60-80% reduction in manual work, 3-10x increase in outbound volume, 15%+ reply rates on cold outreach, and 50-70% reduction in CAC. Specific outcomes depend on your ICP, market, and existing processes. We provide detailed projections during the consultation."
    }
];

const jsonLd = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": faqs.map(faq => ({
        "@type": "Question",
        "name": faq.question,
        "acceptedAnswer": {
            "@type": "Answer",
            "text": faq.answer
        }
    }))
};

export default function FAQPage() {
    return (
        <div className="min-h-screen bg-white pt-20 pb-12">
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />

            <div className="mx-auto max-w-4xl px-6 lg:px-8">
                <div className="mb-8">
                    <Link
                        href="/"
                        className="inline-flex items-center text-sm font-medium text-gray-500 hover:text-brand-blue transition-colors"
                    >
                        <ArrowLeft className="mr-2 h-4 w-4" />
                        Back to Home
                    </Link>
                </div>

                <header className="mb-10 text-center">
                    <div className="mb-4 flex items-center justify-center">
                        <div className="rounded-full bg-brand-blue/10 p-3">
                            <HelpCircle className="h-8 w-8 text-brand-blue" />
                        </div>
                    </div>
                    <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl mb-6">
                        Frequently Asked Questions
                    </h1>
                    <p className="text-lg leading-8 text-gray-600">
                        Everything you need to know about zenrev's GTM engineering services
                    </p>
                </header>

                <div className="space-y-6">
                    {faqs.map((faq, index) => (
                        <div
                            key={index}
                            className="rounded-2xl bg-gray-50 p-6 ring-1 ring-gray-200 transition-all hover:shadow-md"
                        >
                            <h2 className="text-xl font-bold text-gray-900 mb-4 flex items-start gap-3">
                                <span className="flex-shrink-0 flex h-8 w-8 items-center justify-center rounded-full bg-brand-blue text-white text-sm font-bold">
                                    {index + 1}
                                </span>
                                {faq.question}
                            </h2>
                            <p className="text-base leading-7 text-gray-600 ml-11">
                                {faq.answer}
                            </p>
                        </div>
                    ))}
                </div>

                <div className="mt-12 border-t border-gray-100 pt-10 text-center">
                    <h3 className="text-2xl font-bold text-gray-900 mb-6">
                        Still have questions?
                    </h3>
                    <p className="text-base text-gray-600 mb-6">
                        Book a 30-minute consultation and we'll answer all your questions about GTM automation.
                    </p>
                    <Button size="lg" asChild>
                        <Link href="https://cal.com/jayanand-j-ywq8ls/30min" target="_blank">
                            Book Free Consultation
                        </Link>
                    </Button>
                </div>
            </div>
        </div>
    );
}
