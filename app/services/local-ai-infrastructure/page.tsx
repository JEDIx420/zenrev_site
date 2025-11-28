"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/Button"
import Link from "next/link"
import { ArrowRight, CheckCircle2, Server, Lock, Cpu, Network, HardDrive, Shield, TrendingUp, DollarSign, Clock, Briefcase, Users } from "lucide-react"

export default function LocalAIInfrastructurePage() {
    return (
        <div className="flex min-h-screen flex-col">
            {/* Hero Section */}
            <section className="relative overflow-hidden bg-gradient-to-br from-brand-dark via-brand-blue to-brand-dark py-24 text-white sm:py-32">
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
                            Secure & Private
                        </motion.div>
                        <motion.h1
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.1 }}
                            className="text-4xl font-bold tracking-tight sm:text-6xl"
                        >
                            Local AI Infrastructure
                        </motion.h1>
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                            className="mt-6 text-lg leading-8 text-blue-100"
                        >
                            Deploy custom AI agents on your own hardware or private VPS.
                            Complete data sovereignty for sensitive business operations.
                        </motion.p>
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.3 }}
                            className="mt-10 flex items-center justify-center gap-x-6"
                        >
                            <Button size="lg" className="bg-white text-brand-blue hover:bg-blue-50" asChild>
                                <Link href="https://cal.com/jayanand-j-ywq8ls/30min" target="_blank">
                                    Book Consultation <ArrowRight className="ml-2 h-4 w-4" />
                                </Link>
                            </Button>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* Capabilities Grid */}
            <section className="py-24 sm:py-32 bg-white">
                <div className="mx-auto max-w-7xl px-6 lg:px-8">
                    <div className="mx-auto max-w-2xl text-center mb-16">
                        <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Sovereign AI Stack</h2>
                        <p className="mt-4 text-lg text-gray-600">Enterprise-grade automation running entirely under your control.</p>
                    </div>
                    <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
                        {[
                            {
                                title: "Private Cloud Deployment",
                                description: "We provision and configure private VPS environments dedicated solely to your agents.",
                                icon: Server
                            },
                            {
                                title: "Local Hardware Setup",
                                description: "On-premise setup on your own servers for maximum physical security and zero latency.",
                                icon: HardDrive
                            },
                            {
                                title: "Data Sovereignty",
                                description: "Your data never leaves your infrastructure. Perfect for finance, healthcare, and legal use cases.",
                                icon: Lock
                            },
                            {
                                title: "Custom n8n Instances",
                                description: "Self-hosted n8n workflows tailored to your specific business logic and requirements.",
                                icon: Network
                            },
                            {
                                title: "Local LLM Inference",
                                description: "Run open-source models (Llama 3, Mistral) locally to avoid API costs and data leakage.",
                                icon: Cpu
                            },
                            {
                                title: "Enterprise Security",
                                description: "Hardened configurations, firewalls, and access controls built-in from day one.",
                                icon: Shield
                            }
                        ].map((feature, index) => (
                            <motion.div
                                key={feature.title}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className="relative overflow-hidden rounded-2xl bg-gray-50 p-8 transition-all hover:bg-white hover:shadow-lg ring-1 ring-gray-200"
                            >
                                <div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-lg bg-brand-blue text-white">
                                    <feature.icon className="h-6 w-6" />
                                </div>
                                <h3 className="text-lg font-semibold text-gray-900">{feature.title}</h3>
                                <p className="mt-2 text-gray-600">{feature.description}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ROI & Use Cases */}
            <section className="py-24 sm:py-32 bg-gray-50">
                <div className="mx-auto max-w-7xl px-6 lg:px-8">
                    <div className="mx-auto max-w-2xl text-center mb-16">
                        <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Why Go Local?</h2>
                        <p className="mt-4 text-lg text-gray-600">Maximize efficiency while minimizing risk and cost.</p>
                    </div>

                    <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
                        {/* ROI Stats */}
                        <div className="space-y-8">
                            <h3 className="text-2xl font-bold text-gray-900">Return on Investment</h3>
                            <div className="grid gap-6">
                                <div className="flex items-start gap-4 rounded-xl bg-white p-6 shadow-sm">
                                    <div className="rounded-lg bg-green-100 p-3 text-green-600">
                                        <DollarSign className="h-6 w-6" />
                                    </div>
                                    <div>
                                        <h4 className="font-semibold text-gray-900">Zero API Costs</h4>
                                        <p className="mt-1 text-sm text-gray-600">Running local LLMs eliminates per-token pricing, saving thousands at scale.</p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-4 rounded-xl bg-white p-6 shadow-sm">
                                    <div className="rounded-lg bg-blue-100 p-3 text-blue-600">
                                        <Clock className="h-6 w-6" />
                                    </div>
                                    <div>
                                        <h4 className="font-semibold text-gray-900">Latency Reduction</h4>
                                        <p className="mt-1 text-sm text-gray-600">Local inference is often faster than cloud APIs, enabling real-time agent interactions.</p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-4 rounded-xl bg-white p-6 shadow-sm">
                                    <div className="rounded-lg bg-purple-100 p-3 text-purple-600">
                                        <Shield className="h-6 w-6" />
                                    </div>
                                    <div>
                                        <h4 className="font-semibold text-gray-900">Risk Mitigation</h4>
                                        <p className="mt-1 text-sm text-gray-600">Complete control over data means zero risk of third-party data breaches or training usage.</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Use Cases */}
                        <div className="space-y-8">
                            <h3 className="text-2xl font-bold text-gray-900">Common Use Cases</h3>
                            <div className="grid gap-6">
                                <div className="flex items-start gap-4 rounded-xl bg-white p-6 shadow-sm">
                                    <div className="rounded-lg bg-orange-100 p-3 text-orange-600">
                                        <Briefcase className="h-6 w-6" />
                                    </div>
                                    <div>
                                        <h4 className="font-semibold text-gray-900">Financial Analysis</h4>
                                        <p className="mt-1 text-sm text-gray-600">Process sensitive P&L statements and bank records without uploading to the cloud.</p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-4 rounded-xl bg-white p-6 shadow-sm">
                                    <div className="rounded-lg bg-red-100 p-3 text-red-600">
                                        <Lock className="h-6 w-6" />
                                    </div>
                                    <div>
                                        <h4 className="font-semibold text-gray-900">Legal Document Review</h4>
                                        <p className="mt-1 text-sm text-gray-600">Analyze contracts and NDAs securely within your own firewall.</p>
                                    </div>
                                </div>
                                <div className="flex items-start gap-4 rounded-xl bg-white p-6 shadow-sm">
                                    <div className="rounded-lg bg-indigo-100 p-3 text-indigo-600">
                                        <Users className="h-6 w-6" />
                                    </div>
                                    <div>
                                        <h4 className="font-semibold text-gray-900">Internal HR Automation</h4>
                                        <p className="mt-1 text-sm text-gray-600">Handle employee data and performance reviews with absolute privacy.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Testimonials */}
            <section className="relative overflow-hidden bg-gradient-to-br from-brand-dark via-brand-blue to-brand-dark py-24 text-white sm:py-32">
                <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10"></div>
                <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
                    <div className="mx-auto max-w-2xl text-center">
                        <motion.div
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            className="mb-4 inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-1.5 text-sm font-medium backdrop-blur-sm"
                        >
                            <TrendingUp className="h-4 w-4" />
                            Results That Speak
                        </motion.div>
                        <h2 className="text-4xl font-bold tracking-tight sm:text-5xl">
                            Real Teams, Real Growth
                        </h2>
                    </div>

                    <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 lg:mx-0 lg:max-w-none lg:grid-cols-2">
                        {[
                            {
                                quote: "zenrev transformed our outbound. We went from booking 2 meetings a week to 15, completely on autopilot.",
                                author: "Sarah J.",
                                role: "Founder @ TechFlow",
                                metric: "7.5x meetings",
                            },
                            {
                                quote: "The depth of research their agents do is incredible. It feels like we hired a team of 10 SDRs overnight.",
                                author: "Mike T.",
                                role: "VP Sales @ CloudScale",
                                metric: "$1.2M pipeline",
                            },
                        ].map((testimonial, i) => (
                            <motion.figure
                                key={i}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1 }}
                                className="relative rounded-2xl bg-white/10 p-8 backdrop-blur-sm ring-1 ring-white/20 transition-all hover:bg-white/15"
                            >
                                <div className="absolute -top-4 -left-4 text-6xl font-bold text-white/10">"</div>
                                <blockquote className="relative text-lg font-medium leading-8">
                                    <p>{testimonial.quote}</p>
                                </blockquote>
                                <figcaption className="mt-6 flex items-center gap-4 border-t border-white/10 pt-6">
                                    <div className="flex h-12 w-12 items-center justify-center rounded-full bg-gradient-to-br from-brand-blue to-cyan-500 font-bold">
                                        {testimonial.author[0]}
                                    </div>
                                    <div className="flex-1">
                                        <div className="font-semibold">{testimonial.author}</div>
                                        <div className="text-sm text-gray-300">{testimonial.role}</div>
                                    </div>
                                    <div className="rounded-full bg-white/20 px-3 py-1 text-sm font-semibold">
                                        {testimonial.metric}
                                    </div>
                                </figcaption>
                            </motion.figure>
                        ))}
                    </div>
                </div>
            </section>

            {/* Custom Pricing */}
            <section className="bg-white py-24 sm:py-32">
                <div className="mx-auto max-w-7xl px-6 lg:px-8">
                    <div className="mx-auto max-w-2xl rounded-3xl bg-brand-dark p-8 ring-1 ring-white/10 sm:p-10 lg:mx-0 lg:flex lg:max-w-none lg:items-center">
                        <div className="p-8 sm:p-10 lg:flex-auto">
                            <h3 className="text-2xl font-bold tracking-tight text-white">Custom Implementation</h3>
                            <p className="mt-6 text-base leading-7 text-gray-300">
                                Every infrastructure project is unique. We scope based on your hardware needs and complexity.
                            </p>
                            <div className="mt-10 flex items-center gap-x-4">
                                <h4 className="flex-none text-sm font-semibold leading-6 text-blue-400">Use Cases</h4>
                                <div className="h-px flex-auto bg-gray-100/10" />
                            </div>
                            <ul role="list" className="mt-8 grid grid-cols-1 gap-4 text-sm leading-6 text-gray-300 sm:grid-cols-2 sm:gap-6">
                                {[
                                    "Financial Data Processing",
                                    "Internal HR Automation",
                                    "Proprietary Research",
                                    "Legal Document Analysis"
                                ].map((item) => (
                                    <li key={item} className="flex gap-x-3">
                                        <CheckCircle2 className="h-6 w-5 flex-none text-blue-400" aria-hidden="true" />
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </div>
                        <div className="-mt-2 p-2 lg:mt-0 lg:w-full lg:max-w-md lg:flex-shrink-0">
                            <div className="rounded-2xl bg-white/5 py-10 text-center ring-1 ring-inset ring-white/10 lg:flex lg:flex-col lg:justify-center lg:py-16">
                                <div className="mx-auto max-w-xs px-8">
                                    <p className="text-base font-semibold text-gray-400">Project Based</p>
                                    <p className="mt-6 flex items-baseline justify-center gap-x-2">
                                        <span className="text-4xl font-bold tracking-tight text-white">Custom Quote</span>
                                    </p>
                                    <Button size="lg" className="mt-10 w-full bg-brand-blue hover:bg-blue-600" asChild>
                                        <Link href="https://cal.com/jayanand-j-ywq8ls/30min" target="_blank">
                                            Book Consultation
                                        </Link>
                                    </Button>
                                    <p className="mt-6 text-xs leading-5 text-gray-400">
                                        Includes hardware procurement & setup support.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    )
}
