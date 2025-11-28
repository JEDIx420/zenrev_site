"use client"

import { motion } from "framer-motion"
import { Button } from "@/components/ui/Button"
import Link from "next/link"
import { ArrowRight, CheckCircle2, Zap, Layers, GitBranch, BarChart, RefreshCw, Globe, TrendingUp } from "lucide-react"

export default function GTMAutomationPage() {
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
                            Full-Stack Engineering
                        </motion.div>
                        <motion.h1
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.1 }}
                            className="text-4xl font-bold tracking-tight sm:text-6xl"
                        >
                            Complete GTM Automation
                        </motion.h1>
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                            className="mt-6 text-lg leading-8 text-blue-100"
                        >
                            We build the invisible machine that powers your revenue.
                            From Clay table architecture to multi-channel orchestration.
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

            {/* Architecture Grid */}
            <section className="py-24 sm:py-32 bg-white">
                <div className="mx-auto max-w-7xl px-6 lg:px-8">
                    <div className="mx-auto max-w-2xl text-center mb-16">
                        <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">The Stack</h2>
                        <p className="mt-4 text-lg text-gray-600">We engineer every layer of your Go-To-Market infrastructure.</p>
                    </div>
                    <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
                        {[
                            {
                                title: "Clay Architecture",
                                description: "Advanced Clay table setup for waterfall enrichment, scoring, and data normalization.",
                                icon: Layers
                            },
                            {
                                title: "Multi-Channel Sync",
                                description: "Unified orchestration across Email, LinkedIn, and X (Twitter) to reach prospects where they are.",
                                icon: Globe
                            },
                            {
                                title: "Smart Cadences",
                                description: "Intelligent throttling and spacing logic to maximize deliverability and avoid spam filters.",
                                icon: RefreshCw
                            },
                            {
                                title: "Multimodal Content",
                                description: "AI-generated personalized images, videos, and text tailored to each prospect.",
                                icon: Zap
                            },
                            {
                                title: "Bi-Directional Sync",
                                description: "Real-time synchronization with your CRM to keep your data clean and actionable.",
                                icon: GitBranch
                            },
                            {
                                title: "Revenue Analytics",
                                description: "Deep reporting on funnel metrics, attribution, and conversion rates.",
                                icon: BarChart
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

            {/* Pricing & Terms */}
            <section className="bg-white py-24 sm:py-32">
                <div className="mx-auto max-w-7xl px-6 lg:px-8">
                    <div className="mx-auto max-w-2xl rounded-3xl bg-brand-dark p-8 ring-1 ring-white/10 sm:p-10 lg:mx-0 lg:flex lg:max-w-none lg:items-center">
                        <div className="p-8 sm:p-10 lg:flex-auto">
                            <h3 className="text-2xl font-bold tracking-tight text-white">Project Scope</h3>
                            <p className="mt-6 text-base leading-7 text-gray-300">
                                A comprehensive build-out followed by ongoing optimization and maintenance.
                            </p>
                            <div className="mt-10 flex items-center gap-x-4">
                                <h4 className="flex-none text-sm font-semibold leading-6 text-blue-400">What's included</h4>
                                <div className="h-px flex-auto bg-gray-100/10" />
                            </div>
                            <ul role="list" className="mt-8 grid grid-cols-1 gap-4 text-sm leading-6 text-gray-300 sm:grid-cols-2 sm:gap-6">
                                {[
                                    "6-month initial project",
                                    "Ongoing maintenance retainer",
                                    "Full stack implementation",
                                    "Custom workflow development"
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
                                    <p className="text-base font-semibold text-gray-400">Starts at</p>
                                    <p className="mt-6 flex items-baseline justify-center gap-x-2">
                                        <span className="text-5xl font-bold tracking-tight text-white">$3,000</span>
                                        <span className="text-sm font-semibold leading-6 tracking-wide text-gray-400">/mo</span>
                                    </p>
                                    <Button size="lg" className="mt-10 w-full bg-brand-blue hover:bg-blue-600" asChild>
                                        <Link href="https://cal.com/jayanand-j-ywq8ls/30min" target="_blank">
                                            Book Consultation
                                        </Link>
                                    </Button>
                                    <p className="mt-6 text-xs leading-5 text-gray-400">
                                        + Add-ons for additional workflows/channels.
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
