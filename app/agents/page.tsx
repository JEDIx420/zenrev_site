"use client"

import { motion } from "framer-motion"
import { WorkflowCard } from "@/components/WorkflowCard"
import { Bot, Sparkles } from "lucide-react"

export default function AgentsPage() {
    const workflows = [
        {
            title: "LinkedIn Content Automation",
            description: "Automated LinkedIn content generation pipeline. Fetches news from RSS feeds, filters for relevance, generates high-signal posts using AI, and manages an approval workflow via Telegram before posting.",
            jsonPath: "/LinkedIn Content Automation.json",
            nodeCount: 15,
            tags: ["Content Marketing", "LinkedIn", "AI Agent", "Approval Workflow"]
        },
        {
            title: "Community Messages",
            description: "Crypto community engagement bot. Monitors multiple crypto news sources, filters for high-impact updates, and broadcasts summaries to Telegram communities. Includes rate limiting and duplicate detection.",
            jsonPath: "/Community Messages.json",
            nodeCount: 18,
            tags: ["Community Management", "Telegram", "Crypto", "News Aggregation"]
        },
        {
            title: "X Content Automation - Crypto",
            description: "High-frequency X (Twitter) bot for crypto analysis. Ingests market news, uses AI to identify key narratives, and generates sharp, high-signal tweets. Features memory buffers to avoid repetition.",
            jsonPath: "/X Content Automation - Crypto.json",
            nodeCount: 18,
            tags: ["Social Media", "X/Twitter", "Crypto Analysis", "AI Persona"]
        }
    ]

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
                            className="mb-6 inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-1.5 text-sm font-medium backdrop-blur-sm"
                        >
                            <Sparkles className="h-4 w-4" />
                            Production-Ready Workflows
                        </motion.div>
                        <motion.h1
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.1 }}
                            className="text-4xl font-bold tracking-tight sm:text-6xl"
                        >
                            Deploy our agents directly into your stack.
                        </motion.h1>
                        <motion.p
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.5, delay: 0.2 }}
                            className="mt-6 text-lg leading-8 text-blue-100"
                        >
                            Download these n8n workflows and start automating your GTM operations today.
                            Open source and ready to customize.
                        </motion.p>
                    </div>
                </div>
            </section>

            {/* Workflows Grid */}
            <section className="bg-gray-50 py-24 sm:py-32">
                <div className="mx-auto max-w-7xl px-6 lg:px-8">
                    <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
                        {workflows.map((workflow, index) => (
                            <WorkflowCard
                                key={workflow.title}
                                {...workflow}
                            />
                        ))}
                    </div>
                </div>
            </section>
        </div>
    )
}
