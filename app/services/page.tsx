import { Button } from "@/components/ui/Button"
import Link from "next/link"
import { CheckCircle2 } from "lucide-react"

const services = [
    {
        title: "Signals & Intelligence Setup",
        description: "We identify the exact buying signals that indicate a prospect is ready to purchase your solution.",
        deliverables: ["Custom signal scrapers", "Intent data integration", "Total Addressable Market (TAM) analysis"],
        price: "Starting at $2,500",
    },
    {
        title: "Full-Stack GTM Automation",
        description: "End-to-end automation using Clay and n8n to enrich leads and orchestrate campaigns.",
        deliverables: ["Clay table architecture", "n8n workflow development", "Data enrichment pipelines"],
        price: "Starting at $5,000",
    },
    {
        title: "Agentic Workflow Design",
        description: "Custom AI agents that perform complex research and decision-making tasks.",
        deliverables: ["Custom agent development", "Prompt engineering", "Multi-agent orchestration"],
        price: "Custom Quote",
    },
    {
        title: "Outbound Messaging AI Systems",
        description: "AI that writes hyper-personalized emails based on deep research.",
        deliverables: ["Copywriting AI agents", "A/B testing framework", "Personalization logic"],
        price: "Starting at $3,000",
    },
    {
        title: "CRM Automation & Integrations",
        description: "Seamless sync between your outreach tools and your CRM of choice.",
        deliverables: ["HubSpot/Salesforce integration", "Bi-directional sync", "Activity logging"],
        price: "Starting at $2,000",
    },
    {
        title: "Founder Outbound Engine Setup",
        description: "A complete 'done-for-you' system for founders to run outbound on autopilot.",
        deliverables: ["Full system setup", "Playbook documentation", "1-hour training session"],
        price: "Flat fee $8,000",
    },
]

export default function ServicesPage() {
    return (
        <div className="relative min-h-screen pt-12 pb-16 sm:pt-16 sm:pb-24">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="mx-auto max-w-2xl text-center">
                    <p className="mt-2 text-3xl font-bold tracking-tight text-brand-dark sm:text-4xl font-heading">
                        GTM Engineering for Scale
                    </p>
                    <p className="mt-6 text-lg leading-8 text-gray-600">
                        We don't just run campaigns. We build the infrastructure that powers your revenue engine.
                    </p>
                </div>
                <div className="mx-auto mt-12 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-12 lg:mx-0 lg:max-w-none lg:grid-cols-3">
                    {services.map((service) => (
                        <article key={service.title} className="flex flex-col items-start justify-between rounded-2xl bg-white/60 p-8 shadow-sm ring-1 ring-gray-200 backdrop-blur-sm transition-all hover:bg-white/80 hover:shadow-md">
                            <div className="w-full">
                                <h3 className="text-xl font-semibold leading-6 text-gray-900 group-hover:text-gray-600">
                                    {service.title}
                                </h3>
                                <p className="mt-4 line-clamp-3 text-sm leading-6 text-gray-600">{service.description}</p>
                                <ul className="mt-6 space-y-3">
                                    {service.deliverables.map((item) => (
                                        <li key={item} className="flex gap-x-3 text-sm leading-6 text-gray-600">
                                            <CheckCircle2 className="h-5 w-5 flex-none text-brand-blue" aria-hidden="true" />
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                                <p className="mt-6 text-sm font-semibold text-gray-900">{service.price}</p>
                            </div>
                            <div className="mt-8 w-full">
                                <Button className="w-full" variant="outline" asChild>
                                    <Link href="https://cal.com/jayanand-j-ywq8ls/30min" target="_blank">Book Consultation</Link>
                                </Button>
                            </div>
                        </article>
                    ))}
                </div>
            </div>
        </div>
    )
}
