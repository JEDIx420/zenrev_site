import { Button } from "@/components/ui/Button"
import Link from "next/link"

const caseStudies = [
    {
        client: "TechFlow",
        industry: "SaaS / DevOps",
        problem: "SDRs were spending 80% of their time researching and only 20% selling. Meeting volume was low.",
        solution: "Deployed Research Agent + Mailer Agent. Automated list building from GitHub activity.",
        metrics: [
            { label: "Meetings/Month", value: "2 -> 15" },
            { label: "SDR Efficiency", value: "5x" },
            { label: "CAC Reduction", value: "40%" },
        ],
        quote: "zenrev transformed our outbound. We went from booking 2 meetings a week to 15, completely on autopilot.",
        author: "Sarah J., Founder",
    },
    {
        client: "CloudScale",
        industry: "Cloud Infrastructure",
        problem: "Needed to target specific CTOs at Series B companies but data was always outdated.",
        solution: "Implemented Signal Agent to monitor funding news and hiring spikes. Real-time enrichment.",
        metrics: [
            { label: "Data Accuracy", value: "99%" },
            { label: "Response Rate", value: "12%" },
            { label: "Pipeline Added", value: "$1.2M" },
        ],
        quote: "The depth of research their agents do is incredible. It feels like we hired a team of 10 SDRs overnight.",
        author: "Mike T., VP Sales",
    },
    {
        client: "DataSync",
        industry: "Data Integration",
        problem: "Manual CRM entry was killing productivity. Leads were slipping through cracks.",
        solution: "Full CRM Automation + Orchestrator Agent. Bi-directional sync with HubSpot.",
        metrics: [
            { label: "Manual Work", value: "0 hrs" },
            { label: "Lead Velocity", value: "Instant" },
            { label: "Conversion", value: "+25%" },
        ],
        quote: "Finally, our CRM is a source of truth, not a graveyard. The automation is seamless.",
        author: "David L., RevOps Lead",
    },
]

export default function CaseStudiesPage() {
    return (
        <div className="bg-white py-24 sm:py-32">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="mx-auto max-w-2xl text-center">
                    <h2 className="text-base font-semibold leading-7 text-brand-blue">Case Studies</h2>
                    <p className="mt-2 text-3xl font-bold tracking-tight text-brand-dark sm:text-4xl font-heading">
                        Real Results, Real Revenue
                    </p>
                    <p className="mt-6 text-lg leading-8 text-gray-600">
                        See how B2B SaaS teams are scaling their GTM with zenrev.
                    </p>
                </div>
                <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-3">
                    {caseStudies.map((study) => (
                        <article key={study.client} className="flex flex-col items-start justify-between rounded-2xl bg-white p-8 shadow-sm ring-1 ring-gray-200">
                            <div className="w-full">
                                <div className="flex items-center gap-x-4 text-xs">
                                    <span className="text-gray-500">{study.industry}</span>
                                </div>
                                <h3 className="mt-3 text-lg font-semibold leading-6 text-gray-900">
                                    {study.client}
                                </h3>
                                <div className="mt-5 space-y-4 text-sm leading-6 text-gray-600">
                                    <div>
                                        <strong className="font-semibold text-gray-900">Problem:</strong> {study.problem}
                                    </div>
                                    <div>
                                        <strong className="font-semibold text-gray-900">Solution:</strong> {study.solution}
                                    </div>
                                </div>
                                <div className="mt-6 grid grid-cols-3 gap-4 border-y border-gray-100 py-4">
                                    {study.metrics.map((metric) => (
                                        <div key={metric.label} className="text-center">
                                            <div className="text-lg font-bold text-brand-blue">{metric.value}</div>
                                            <div className="text-xs text-gray-500">{metric.label}</div>
                                        </div>
                                    ))}
                                </div>
                                <blockquote className="mt-6 border-l-2 border-brand-blue pl-4 italic text-gray-600">
                                    "{study.quote}"
                                    <footer className="mt-2 text-xs font-semibold not-italic text-gray-900">- {study.author}</footer>
                                </blockquote>
                            </div>
                            <div className="mt-8 w-full">
                                <Button className="w-full" variant="outline" asChild>
                                    <Link href="/contact">Read Full Story</Link>
                                </Button>
                            </div>
                        </article>
                    ))}
                </div>
            </div>
        </div>
    )
}
