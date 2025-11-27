import { Metadata } from "next"
import Link from "next/link"
import { Button } from "@/components/ui/Button"
import { CheckCircle2, ArrowRight, Brain, Code2, Bot, Network, Cpu, Lock, Database, Globe2 } from "lucide-react"

export const metadata: Metadata = {
    title: "AI Engineer | Custom LLM Agents & RAG Systems",
    description: "Hire an AI Engineer to build custom agents, RAG pipelines, and automation systems. We specialize in OpenAI, Anthropic, and open-source models.",
    alternates: {
        canonical: "https://zenrev.org/ai-engineer",
    },
    openGraph: {
        title: "AI Engineer | Custom LLM Agents & RAG Systems",
        description: "Build autonomous AI workforces. We engineer custom agents that research, write, and execute tasks.",
        url: "https://zenrev.org/ai-engineer",
    },
}

const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "AI Engineering",
    "provider": {
        "@type": "Organization",
        "name": "zenrev",
        "url": "https://zenrev.org"
    },
    "description": "Development of custom AI agents, RAG systems, and LLM-powered applications for business automation.",
    "areaServed": ["United States", "United Arab Emirates", "India", "Europe"],
    "hasOfferCatalog": {
        "@type": "OfferCatalog",
        "name": "AI Engineering Services",
        "itemListElement": [
            {
                "@type": "Offer",
                "itemOffered": {
                    "@type": "Service",
                    "name": "Custom Agent Development"
                }
            },
            {
                "@type": "Offer",
                "itemOffered": {
                    "@type": "Service",
                    "name": "RAG Implementation"
                }
            },
            {
                "@type": "Offer",
                "itemOffered": {
                    "@type": "Service",
                    "name": "LLM Fine-tuning"
                }
            }
        ]
    }
}

export default function AIEngineerPage() {
    return (
        <div className="bg-white">
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />

            {/* Hero Section */}
            <section className="relative overflow-hidden bg-gradient-to-b from-purple-50 to-white pt-24 pb-16 sm:pt-32 sm:pb-24">
                <div className="mx-auto max-w-7xl px-6 lg:px-8">
                    <div className="mx-auto max-w-3xl text-center">
                        <h1 className="text-4xl font-bold tracking-tight text-brand-dark sm:text-6xl font-heading">
                            AI Engineer
                        </h1>
                        <p className="mt-6 text-xl leading-8 text-gray-600">
                            An AI Engineer builds the brain of your business. We design, deploy, and orchestrate custom Large Language Model (LLM) agents that automate complex cognitive tasks.
                        </p>
                        <div className="mt-10 flex items-center justify-center gap-x-6">
                            <Button size="lg" asChild>
                                <Link href="https://cal.com/jayanand-j-ywq8ls/30min" target="_blank">
                                    Hire an AI Engineer <ArrowRight className="ml-2 h-4 w-4" />
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
                            <h2 className="text-3xl font-bold tracking-tight text-gray-900">What is an AI Engineer?</h2>
                            <p className="mt-6 text-lg leading-7 text-gray-600">
                                AI Engineering is not just about writing prompts. It's about building robust software systems around LLMs. It involves vector databases, RAG (Retrieval-Augmented Generation), tool calling, and memory management.
                            </p>
                            <p className="mt-4 text-lg leading-7 text-gray-600">
                                We bridge the gap between a raw model (like GPT-4) and a reliable business application that can execute workflows without hallucinating.
                            </p>
                        </div>
                        <div className="rounded-2xl bg-gray-50 p-8 ring-1 ring-gray-200">
                            <h3 className="text-2xl font-bold tracking-tight text-gray-900">Why choose zenrev?</h3>
                            <ul className="mt-6 space-y-4 text-gray-600">
                                <li className="flex gap-3">
                                    <CheckCircle2 className="h-6 w-6 flex-none text-brand-blue" />
                                    <span><strong>Production-Grade Systems:</strong> We build agents that are reliable, observable, and secure—not just demos.</span>
                                </li>
                                <li className="flex gap-3">
                                    <CheckCircle2 className="h-6 w-6 flex-none text-brand-blue" />
                                    <span><strong>Model Agnostic:</strong> We use the best model for the job, whether it's OpenAI, Anthropic, or open-source Llama.</span>
                                </li>
                                <li className="flex gap-3">
                                    <CheckCircle2 className="h-6 w-6 flex-none text-brand-blue" />
                                    <span><strong>Business Focus:</strong> We engineer AI specifically for ROI-driven use cases like sales, support, and operations.</span>
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
                        <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Who Needs an AI Engineer?</h2>
                        <p className="mt-4 text-lg text-gray-300">Companies ready to move beyond ChatGPT and build custom IP.</p>
                    </div>
                    <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-4">
                        {[
                            "SaaS Startups",
                            "Enterprise Innovation Teams",
                            "Customer Support Leads",
                            "Data-Driven Agencies"
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
                            { icon: Bot, title: "Custom Agents", items: ["Build autonomous agents", "Implement tool calling (Function Calling)", "Design multi-agent swarms"] },
                            { icon: Database, title: "RAG Systems", items: ["Vector database setup (Pinecone/Weaviate)", "Semantic search implementation", "Knowledge base ingestion"] },
                            { icon: Brain, title: "Prompt Engineering", items: ["Advanced chain-of-thought prompting", "System prompt optimization", "Few-shot learning techniques"] },
                            { icon: Code2, title: "LLM Integration", items: ["OpenAI API / Anthropic API", "LangChain / LlamaIndex", "Vercel AI SDK implementation"] },
                            { icon: Cpu, title: "Fine-Tuning", items: ["Fine-tune models on your data", "Reduce latency and cost", "Improve domain-specific accuracy"] },
                            { icon: Lock, title: "AI Security", items: ["Prompt injection defense", "PII redaction", "Enterprise-grade governance"] },
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
                    <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl text-center mb-16">How We Build AI</h2>
                    <div className="mx-auto max-w-4xl">
                        <div className="space-y-12">
                            {[
                                { step: "01", title: "Use Case Definition", desc: "We identify high-value tasks that are suitable for AI automation vs. deterministic code." },
                                { step: "02", title: "Data Preparation", desc: "We clean, chunk, and embed your proprietary data to give the AI context." },
                                { step: "03", title: "Agent Architecture", desc: "We design the cognitive flow: planning, reasoning, tool execution, and critique." },
                                { step: "04", title: "Evaluation (Evals)", desc: "We build automated test suites to measure accuracy and prevent regression." },
                                { step: "05", title: "Deployment & Monitoring", desc: "We deploy to production with tracing (LangSmith) to monitor costs and quality." },
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
                        <h2 className="text-3xl font-bold tracking-tight text-gray-900">Example Agent Config</h2>
                        <p className="mt-4 text-lg text-gray-600">A simplified configuration for a Research Agent.</p>
                    </div>
                    <div className="rounded-xl bg-slate-900 p-6 shadow-2xl overflow-x-auto">
                        <pre className="text-sm text-blue-300 font-mono">
                            {`// Agent Definition: Market Researcher
const researcher = new Agent({
  model: "gpt-4-turbo",
  systemPrompt: \`You are an expert market researcher.
    Your goal is to find specific buying signals for B2B SaaS.
    Always cite your sources.\`,
  tools: [
    new WebSearchTool(),
    new ScraperTool(),
    new LinkedInLookupTool()
  ],
  memory: new VectorMemory({ index: "market-data" }),
  maxSteps: 10
});

// Execution
const report = await researcher.run(
  "Find 50 SaaS companies in Dubai hiring for Sales roles."
);`}
                        </pre>
                        <p className="mt-4 text-xs text-gray-500 italic">
                            Alt: TypeScript code defining an AI agent for market research, created by zenrev using the Vercel AI SDK.
                        </p>
                    </div>
                </div>
            </section>

            {/* Industries */}
            <section className="bg-brand-blue/5 py-16">
                <div className="mx-auto max-w-7xl px-6 lg:px-8 text-center">
                    <h2 className="text-2xl font-bold text-gray-900 mb-8">Global AI Deployment</h2>
                    <div className="flex flex-wrap justify-center gap-4 md:gap-8">
                        {["United States", "United Arab Emirates", "India", "United Kingdom"].map((loc) => (
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
                            { q: "What does an AI engineer do?", a: "An AI Engineer designs and builds applications powered by Large Language Models. We handle the prompt engineering, context management, tool integration, and infrastructure required to make AI useful." },
                            { q: "What is RAG (Retrieval-Augmented Generation)?", a: "RAG is a technique where we connect an LLM to your private data (PDFs, databases, Notion). This allows the AI to answer questions based on your specific business knowledge without hallucinating." },
                            { q: "Do you build custom models or use APIs?", a: "We mostly use frontier model APIs (OpenAI, Anthropic) because they offer the best performance-to-cost ratio. However, we can fine-tune open-source models (Llama 3, Mistral) for specific enterprise use cases." },
                            { q: "How do you handle data privacy?", a: "We design systems where your data is either processed ephemerally or stored in your own private cloud (AWS/GCP). We can also implement PII redaction layers before data is sent to any model provider." },
                            { q: "Can AI replace my support team?", a: "AI can resolve 40-80% of routine queries instantly, allowing your support team to focus on complex, high-value issues. We build 'human-in-the-loop' systems where the AI hands off to a human when unsure." },
                            { q: "What is the difference between a Chatbot and an Agent?", a: "A chatbot just talks. An Agent can DO things. Agents have access to tools (email, calendar, CRM) and can execute multi-step workflows to complete a goal." },
                            { q: "How much does custom AI development cost?", a: "Simple RAG chatbots start at $5k. Complex multi-agent systems with custom infrastructure typically range from $15k to $50k depending on scope." },
                            { q: "Do you use LangChain?", a: "Yes, we use LangChain and LlamaIndex for orchestration, but we also write lightweight custom implementations when performance and control are critical." },
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
                    <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Build your AI workforce.</h2>
                    <p className="mx-auto mt-6 max-w-xl text-lg text-gray-300">
                        Chat with our AI assistant to discuss your use case, or book a consultation with a Lead AI Engineer.
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
