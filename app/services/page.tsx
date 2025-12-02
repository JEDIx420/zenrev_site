"use client"

import { Button } from "@/components/ui/Button"
import Link from "next/link"
import { CheckCircle2, ArrowRight } from "lucide-react"
import { motion } from "framer-motion"

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
        <div className="flex min-h-screen flex-col">
            {/* Hero Section */}
            <section className="relative overflow-hidden bg-gradient-to-br from-brand-dark via-brand-blue to-brand-dark py-16 text-white sm:py-20">
                <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10"></div>
                <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
                    <div className="mx-auto max-w-2xl text-center">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5 }}
                            className="mb-6 inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-1.5 text-sm font-medium backdrop-blur-sm border border-white/20"
                        >
                            <span className="flex h-2 w-2 rounded-full bg-blue-400"></span>
                            Engineering-First Approach
                        </motion.div>
                        <motion.h1
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.1 }}
                            className="text-4xl font-bold tracking-tight sm:text-6xl"
                        >
                            GTM Engineering Services
                        </motion.h1>
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                            className="mt-6 text-lg leading-8 text-blue-100"
                        >
                            We build the infrastructure that powers your revenue engine. Choose the level of automation that fits your scale.
                        </motion.p>
                    </div>
                </div>
            </section>

            {/* Services Grid */}
            <section className="bg-white py-14 sm:py-18">
                <div className="mx-auto max-w-7xl px-6 lg:px-8">
                    <div className="mx-auto grid max-w-7xl grid-cols-1 gap-6 px-6 lg:grid-cols-3 lg:px-8">
                        {services.map((service, index) => (
                            <motion.article
                                key={service.title}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: index * 0.1, duration: 0.5 }}
                                className="flex flex-col justify-between rounded-3xl bg-white p-6 shadow-xl ring-1 ring-gray-200 transition-all hover:shadow-2xl hover:ring-brand-blue/50"
                            >
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
                            </motion.article>
                        ))}
                    </div>
                </div>
            </section>
        </div>
    )
}
