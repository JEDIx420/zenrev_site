"use client"

import { Button } from "@/components/ui/Button"
import Link from "next/link"
import { CheckCircle2, ArrowRight } from "lucide-react"

const services = [
    {
        title: "LinkedIn Automation",
        description: "A complete, done-for-you system to turn LinkedIn into your primary revenue channel. Includes ICP definition, messaging, and CRM sync.",
        price: "$1,500/mo",
        link: "/services/linkedin-automation",
        features: ["90-day pilot program", "1-1 personalized messaging", "Full CRM integration"]
    },
    {
        title: "Complete GTM Automation",
        description: "End-to-end automation of your entire Go-To-Market stack. We connect Email, LinkedIn, and X into a unified revenue engine.",
        price: "Starts at $3,000/mo",
        link: "/services/gtm-automation",
        features: ["Clay & n8n architecture", "Multimodal content generation", "6-month project scope"]
    },
    {
        title: "Local AI Infrastructure",
        description: "Deploy custom AI agents on private VPS or local hardware. Secure, sovereign automation for sensitive business data.",
        price: "Custom Pricing",
        link: "/services/local-ai-infrastructure",
        features: ["Private cloud deployment", "Data sovereignty focus", "Custom agent development"]
    },
]

export default function ServicesPage() {
    return (
        <div className="relative min-h-screen pt-12 pb-16 sm:pt-16 sm:pb-24">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="mx-auto max-w-2xl text-center">
                    <p className="mt-2 text-3xl font-bold tracking-tight text-brand-dark sm:text-4xl font-heading">
                        GTM Engineering Services
                    </p>
                    <p className="mt-6 text-lg leading-8 text-gray-600">
                        We build the infrastructure that powers your revenue engine. Choose the level of automation that fits your scale.
                    </p>
                </div>
                <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-12 lg:mx-0 lg:max-w-none lg:grid-cols-3">
                    {services.map((service) => (
                        <article key={service.title} className="flex flex-col items-start justify-between rounded-3xl bg-white p-8 shadow-lg ring-1 ring-gray-200 transition-all hover:shadow-xl hover:ring-brand-blue/30">
                            <div className="w-full">
                                <h3 className="text-xl font-bold leading-6 text-gray-900">
                                    {service.title}
                                </h3>
                                <p className="mt-4 text-sm leading-6 text-gray-600 min-h-[80px]">
                                    {service.description}
                                </p>
                                <ul className="mt-6 space-y-3 mb-8">
                                    {service.features.map((feature) => (
                                        <li key={feature} className="flex gap-x-3 text-sm leading-6 text-gray-600">
                                            <CheckCircle2 className="h-5 w-5 flex-none text-brand-blue" aria-hidden="true" />
                                            {feature}
                                        </li>
                                    ))}
                                </ul>
                                <div className="mt-4 flex items-baseline gap-x-2">
                                    <span className="text-2xl font-bold tracking-tight text-gray-900">{service.price}</span>
                                </div>
                            </div>
                            <div className="mt-8 w-full space-y-3">
                                <Button className="w-full" asChild>
                                    <Link href="https://cal.com/jayanand-j-ywq8ls/30min" target="_blank">
                                        Book Consultation
                                    </Link>
                                </Button>
                                <Button className="w-full" variant="outline" asChild>
                                    <Link href={service.link}>
                                        View Details <ArrowRight className="ml-2 h-4 w-4" />
                                    </Link>
                                </Button>
                            </div>
                        </article>
                    ))}
                </div>
            </div>
        </div>
    )
}
