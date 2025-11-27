import { Button } from "@/components/ui/Button"
import Link from "next/link"
import { ArrowRight, Database, FileText, Mail, Search, UserCheck, Zap } from "lucide-react"

const agents = [
    {
        name: "MRDetective",
        description: "Finds decision makers and validates emails with 99% accuracy.",
        input: "Company Domain / LinkedIn URL",
        process: "Waterfall Enrichment (Apollo, Clay, Prospeo) -> Validation",
        output: "Verified Email + Phone + LinkedIn",
        icon: Search,
    },
    {
        name: "Signal Agent",
        description: "Monitors job boards, news, and funding to detect buying intent.",
        input: "Target Criteria (Industry, Size)",
        process: "Scan Sources -> Filter by Relevance -> Score Intent",
        output: "High-Intent Company List",
        icon: Zap,
    },
    {
        name: "Research Agent",
        description: "Deep dives into company reports, 10Ks, and news to find hooks.",
        input: "Company Domain",
        process: "Read Website -> Analyze News -> Extract Key Initiatives",
        output: "Research Summary + Personalization Hooks",
        icon: Database,
    },
    {
        name: "Prospecting Agent",
        description: "Identifies ICP matches from intent data and builds lists.",
        input: "Intent Signals",
        process: "Match to ICP -> Find People -> Filter Seniority",
        output: "Prospect List",
        icon: UserCheck,
    },
    {
        name: "Mailer Agent",
        description: "Drafts and sends hyper-personalized emails based on research.",
        input: "Prospect + Research Data",
        process: "LLM Drafting -> Review Logic -> Send via SmartLead/Instantly",
        output: "Sent Email",
        icon: Mail,
    },
    {
        name: "Orchestrator Agent",
        description: "Manages the flow between other agents and handles errors.",
        input: "Campaign Goal",
        process: "Delegate Tasks -> Monitor Progress -> Retry/Alert",
        output: "Completed Campaign",
        icon: FileText,
    },
]

export default function AgentsPage() {
    return (
        <div className="relative min-h-screen pt-12 pb-16 sm:pt-16 sm:pb-24">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="mx-auto max-w-2xl text-center">
                    <p className="mt-2 text-3xl font-bold tracking-tight text-brand-dark sm:text-4xl font-heading">
                        Your Digital GTM Workforce
                    </p>
                    <p className="mt-6 text-lg leading-8 text-gray-600">
                        Deploy autonomous agents to handle the repetitive parts of your sales process.
                    </p>
                </div>
                <div className="mx-auto mt-12 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-8 lg:mx-0 lg:max-w-none lg:grid-cols-2">
                    {agents.map((agent) => (
                        <div key={agent.name} className="flex flex-col overflow-hidden rounded-2xl bg-white/60 shadow-sm ring-1 ring-gray-200 backdrop-blur-sm transition-all hover:bg-white/80 hover:shadow-md">
                            <div className="p-8">
                                <div className="flex items-center gap-x-3">
                                    <div className="rounded-md bg-brand-blue/10 p-2">
                                        <agent.icon className="h-6 w-6 text-brand-blue" />
                                    </div>
                                    <h3 className="text-xl font-semibold leading-8 text-gray-900">{agent.name}</h3>
                                </div>
                                <p className="mt-4 text-base leading-7 text-gray-600">{agent.description}</p>

                                <div className="mt-6 rounded-lg bg-white/50 p-4 text-sm ring-1 ring-gray-100">
                                    <div className="grid grid-cols-[1fr,auto,1fr] items-center gap-2 text-center">
                                        <div className="rounded bg-white p-2 shadow-sm ring-1 ring-gray-200">
                                            <span className="block text-xs font-medium text-gray-500">Input</span>
                                            <span className="block font-medium text-gray-900">{agent.input}</span>
                                        </div>
                                        <ArrowRight className="h-4 w-4 text-gray-400" />
                                        <div className="rounded bg-white p-2 shadow-sm ring-1 ring-gray-200">
                                            <span className="block text-xs font-medium text-gray-500">Output</span>
                                            <span className="block font-medium text-gray-900">{agent.output}</span>
                                        </div>
                                    </div>
                                    <div className="mt-3 text-center text-xs text-gray-500">
                                        Process: {agent.process}
                                    </div>
                                </div>
                            </div>
                            <div className="mt-auto border-t border-gray-100 bg-white/40 p-6">
                                <Button className="w-full" asChild>
                                    <Link href="https://cal.com/jayanand-j-ywq8ls/30min" target="_blank">Request Access</Link>
                                </Button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}
