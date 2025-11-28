"use client"

import { Button } from "@/components/ui/Button"
import Link from "next/link"
import { caseStudies } from "@/lib/case-studies"
import { motion } from "framer-motion"
import { ArrowRight } from "lucide-react"

export default function ResourcesPage() {
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
                            Success Stories
                        </motion.div>
                        <motion.h1
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.1 }}
                            className="text-4xl font-bold tracking-tight sm:text-6xl"
                        >
                            Real Results, Real Revenue
                        </motion.h1>
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                            className="mt-6 text-lg leading-8 text-blue-100"
                        >
                            See how B2B SaaS teams are scaling their GTM with zenrev.
                        </motion.p>
                    </div>
                </div>
            </section>

            {/* Resources Grid */}
            <section className="py-24 sm:py-32 bg-white">
                <div className="mx-auto max-w-7xl px-6 lg:px-8">
                    <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-12 lg:mx-0 lg:max-w-none lg:grid-cols-3">
                        {caseStudies.map((study, index) => (
                            <motion.article
                                key={study.slug}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: index * 0.1, duration: 0.5 }}
                                className="flex flex-col items-start justify-between rounded-3xl bg-white p-8 shadow-lg ring-1 ring-gray-200 transition-all hover:shadow-xl hover:ring-brand-blue/30"
                            >
                                <div className="w-full">
                                    <div className="flex items-center gap-x-4 text-xs">
                                        <span className="inline-flex items-center rounded-full bg-blue-50 px-2 py-1 text-xs font-medium text-brand-blue ring-1 ring-inset ring-blue-700/10">
                                            {study.industry}
                                        </span>
                                    </div>
                                    <h3 className="mt-3 text-lg font-bold leading-6 text-gray-900">
                                        {study.client}
                                    </h3>
                                    <div className="mt-5 space-y-4 text-sm leading-6 text-gray-600">
                                        <p className="line-clamp-3">{study.description}</p>
                                    </div>
                                    <div className="mt-6 grid grid-cols-3 gap-4 border-y border-gray-100 py-4">
                                        {study.metrics.map((metric) => (
                                            <div key={metric.label} className="text-center">
                                                <div className="text-lg font-bold text-brand-blue">{metric.value}</div>
                                                <div className="text-xs text-gray-500 truncate">{metric.label}</div>
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
                                        <Link href={`/resources/${study.slug}`}>
                                            Read Full Story <ArrowRight className="ml-2 h-4 w-4" />
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
