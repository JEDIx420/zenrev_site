"use client"

import { useRef } from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import { ClipboardCheck, FileText, Database, Workflow, RefreshCw, Megaphone, CheckCircle2, BarChart3, Search, Filter, Mail, Phone, Share2, Layers, GitBranch, Zap } from "lucide-react"

const steps = [
    {
        id: 1,
        title: "GTM Audit",
        description: "We deep-dive into your current revenue engine to find the leaks.",
        icon: ClipboardCheck,
        color: "blue",
        points: [
            "Tech stack analysis & integration check",
            "Funnel leakage identification",
            "Customer touchpoint mapping"
        ],
        visual: (
            <div className="relative flex h-full w-full items-center justify-center">
                <div className="absolute inset-0 bg-blue-500/5 blur-3xl"></div>
                <div className="relative grid grid-cols-2 gap-4">
                    <motion.div
                        className="flex h-16 w-16 items-center justify-center rounded-2xl bg-white shadow-lg ring-1 ring-blue-100"
                        whileHover={{ scale: 1.1, rotate: 5 }}
                        transition={{ type: "spring", stiffness: 300 }}
                    >
                        <Database className="h-8 w-8 text-blue-500" />
                    </motion.div>
                    <motion.div
                        className="flex h-16 w-16 items-center justify-center rounded-2xl bg-white shadow-lg ring-1 ring-blue-100"
                        whileHover={{ scale: 1.1, rotate: -5 }}
                        transition={{ type: "spring", stiffness: 300 }}
                    >
                        <Layers className="h-8 w-8 text-blue-400" />
                    </motion.div>
                    <motion.div
                        className="col-span-2 flex h-16 w-full items-center justify-center rounded-2xl bg-gradient-to-r from-blue-500 to-cyan-500 shadow-lg"
                        whileHover={{ scale: 1.05 }}
                        transition={{ type: "spring", stiffness: 300 }}
                    >
                        <motion.div
                            animate={{ scale: [1, 1.2, 1] }}
                            transition={{ duration: 2, repeat: Infinity }}
                        >
                            <Search className="h-8 w-8 text-white" />
                        </motion.div>
                    </motion.div>
                </div>
            </div>
        )
    },
    {
        id: 2,
        title: "ICP Document",
        description: "We define exactly who you should be talking to and what to say.",
        icon: FileText,
        color: "purple",
        points: [
            "Firmographic & technographic triggers",
            "Persona-specific pain points",
            "Signal-based messaging frameworks"
        ],
        visual: (
            <div className="relative flex h-full w-full items-center justify-center">
                <div className="absolute inset-0 bg-purple-500/5 blur-3xl"></div>
                <motion.div
                    className="relative w-48 rounded-xl bg-white p-4 shadow-xl ring-1 ring-purple-100"
                    whileHover={{ y: -5 }}
                    transition={{ type: "spring", stiffness: 300 }}
                >
                    <motion.div
                        className="mb-3 h-2 w-1/3 rounded-full bg-purple-200"
                        initial={{ width: "33%" }}
                        whileHover={{ width: "50%" }}
                    ></motion.div>
                    <div className="space-y-2">
                        <motion.div
                            className="h-2 w-full rounded-full bg-gray-100"
                            whileHover={{ backgroundColor: "#e9d5ff" }}
                        ></motion.div>
                        <motion.div
                            className="h-2 w-5/6 rounded-full bg-gray-100"
                            whileHover={{ backgroundColor: "#e9d5ff" }}
                        ></motion.div>
                        <motion.div
                            className="h-2 w-4/6 rounded-full bg-gray-100"
                            whileHover={{ backgroundColor: "#e9d5ff" }}
                        ></motion.div>
                    </div>
                    <motion.div
                        className="absolute -right-4 -top-4 flex h-12 w-12 items-center justify-center rounded-full bg-purple-500 shadow-lg"
                        animate={{ rotate: [0, 10, -10, 0] }}
                        transition={{ duration: 3, repeat: Infinity }}
                    >
                        <CheckCircle2 className="h-6 w-6 text-white" />
                    </motion.div>
                </motion.div>
            </div>
        )
    },
    {
        id: 3,
        title: "CRM Cleanup",
        description: "We scrub your data so your agents have a clean place to work.",
        icon: Database,
        color: "cyan",
        points: [
            "Deduplication & merging",
            "Real-time data enrichment",
            "Field standardization"
        ],
        visual: (
            <div className="relative flex h-full w-full items-center justify-center">
                <div className="absolute inset-0 bg-cyan-500/5 blur-3xl"></div>
                <div className="flex items-center gap-4">
                    <motion.div
                        className="flex flex-col gap-2"
                        initial={{ opacity: 0.5 }}
                        whileHover={{ opacity: 0.3, x: -10 }}
                    >
                        <div className="h-10 w-24 rounded-lg bg-red-100"></div>
                        <div className="h-10 w-24 rounded-lg bg-red-100"></div>
                    </motion.div>
                    <motion.div
                        className="flex h-12 w-12 items-center justify-center rounded-full bg-cyan-100 text-cyan-600"
                        animate={{ rotate: 360 }}
                        transition={{ duration: 4, repeat: Infinity, ease: "linear" }}
                    >
                        <Filter className="h-6 w-6" />
                    </motion.div>
                    <motion.div
                        className="flex flex-col gap-2"
                        initial={{ opacity: 1 }}
                        whileHover={{ opacity: 1, x: 10 }}
                    >
                        <motion.div
                            className="h-10 w-24 rounded-lg bg-green-100 ring-1 ring-green-200"
                            whileHover={{ scale: 1.05 }}
                        ></motion.div>
                        <motion.div
                            className="h-10 w-24 rounded-lg bg-green-100 ring-1 ring-green-200"
                            whileHover={{ scale: 1.05 }}
                        ></motion.div>
                    </motion.div>
                </div>
            </div>
        )
    },
    {
        id: 4,
        title: "Workflow Optimization",
        description: "We architect the invisible pipes that move data into revenue.",
        icon: Workflow,
        color: "pink",
        points: [
            "n8n workflow architecture",
            "Intelligent lead routing",
            "Cross-platform synchronization"
        ],
        visual: (
            <div className="relative flex h-full w-full items-center justify-center">
                <div className="absolute inset-0 bg-pink-500/5 blur-3xl"></div>
                <div className="relative">
                    <svg className="h-48 w-48" viewBox="0 0 200 200">
                        {/* Connecting lines with animation */}
                        <motion.path
                            d="M50,100 L100,50"
                            stroke="#ec4899"
                            strokeWidth="2"
                            fill="none"
                            initial={{ pathLength: 0 }}
                            animate={{ pathLength: 1 }}
                            transition={{ duration: 2, repeat: Infinity }}
                        />
                        <motion.path
                            d="M100,50 L150,100"
                            stroke="#ec4899"
                            strokeWidth="2"
                            fill="none"
                            initial={{ pathLength: 0 }}
                            animate={{ pathLength: 1 }}
                            transition={{ duration: 2, repeat: Infinity, delay: 0.3 }}
                        />
                        <motion.path
                            d="M150,100 L100,150"
                            stroke="#ec4899"
                            strokeWidth="2"
                            fill="none"
                            initial={{ pathLength: 0 }}
                            animate={{ pathLength: 1 }}
                            transition={{ duration: 2, repeat: Infinity, delay: 0.6 }}
                        />
                        <motion.path
                            d="M100,150 L50,100"
                            stroke="#ec4899"
                            strokeWidth="2"
                            fill="none"
                            initial={{ pathLength: 0 }}
                            animate={{ pathLength: 1 }}
                            transition={{ duration: 2, repeat: Infinity, delay: 0.9 }}
                        />

                        {/* Nodes */}
                        <motion.circle
                            cx="50"
                            cy="100"
                            r="12"
                            fill="white"
                            stroke="#ec4899"
                            strokeWidth="2"
                            whileHover={{ scale: 1.3 }}
                        />
                        <motion.circle
                            cx="100"
                            cy="50"
                            r="12"
                            fill="white"
                            stroke="#ec4899"
                            strokeWidth="2"
                            whileHover={{ scale: 1.3 }}
                        />
                        <motion.circle
                            cx="150"
                            cy="100"
                            r="12"
                            fill="white"
                            stroke="#ec4899"
                            strokeWidth="2"
                            whileHover={{ scale: 1.3 }}
                        />
                        <motion.circle
                            cx="100"
                            cy="150"
                            r="12"
                            fill="white"
                            stroke="#ec4899"
                            strokeWidth="2"
                            whileHover={{ scale: 1.3 }}
                        />

                        {/* Center node with icon */}
                        <motion.circle
                            cx="100"
                            cy="100"
                            r="20"
                            fill="#ec4899"
                            animate={{ scale: [1, 1.1, 1] }}
                            transition={{ duration: 2, repeat: Infinity }}
                        />
                        <foreignObject x="85" y="85" width="30" height="30">
                            <Zap className="h-7 w-7 text-white" />
                        </foreignObject>
                    </svg>
                </div>
            </div>
        )
    },
    {
        id: 5,
        title: "Old Leads Reactivation",
        description: "We turn your dead database into a goldmine of opportunities.",
        icon: RefreshCw,
        color: "orange",
        points: [
            "Smart segmentation",
            "Re-engagement sequences",
            "Contact validity checks"
        ],
        visual: (
            <div className="relative flex h-full w-full items-center justify-center">
                <div className="absolute inset-0 bg-orange-500/5 blur-3xl"></div>
                <div className="relative">
                    <motion.div
                        className="absolute -left-8 top-0 h-16 w-16 rounded-full bg-gray-200"
                        initial={{ opacity: 0.5 }}
                        animate={{ opacity: [0.5, 0.8, 0.5] }}
                        transition={{ duration: 2, repeat: Infinity }}
                    ></motion.div>
                    <motion.div
                        className="absolute -right-8 top-0 h-16 w-16 rounded-full bg-gray-200"
                        initial={{ opacity: 0.5 }}
                        animate={{ opacity: [0.5, 0.8, 0.5] }}
                        transition={{ duration: 2, repeat: Infinity, delay: 0.5 }}
                    ></motion.div>
                    <motion.div
                        className="relative z-10 flex h-24 w-24 items-center justify-center rounded-full bg-gradient-to-br from-orange-400 to-red-500 shadow-xl"
                        whileHover={{ scale: 1.1 }}
                    >
                        <motion.div
                            animate={{ rotate: 360 }}
                            transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                        >
                            <RefreshCw className="h-10 w-10 text-white" />
                        </motion.div>
                    </motion.div>
                </div>
            </div>
        )
    },
    {
        id: 6,
        title: "Multi-Channel Outreach",
        description: "We scale your message across every channel your prospects use.",
        icon: Megaphone,
        color: "violet",
        points: [
            "Automated LinkedIn flows",
            "Cold email scaling infrastructure",
            "Bi-directional CRM sync"
        ],
        visual: (
            <div className="relative flex h-full w-full items-center justify-center">
                <div className="absolute inset-0 bg-violet-500/5 blur-3xl"></div>
                <div className="grid grid-cols-2 gap-4">
                    <motion.div
                        className="flex h-14 w-14 items-center justify-center rounded-xl bg-blue-600 text-white shadow-lg"
                        whileHover={{ scale: 1.15, rotate: 5 }}
                        transition={{ type: "spring", stiffness: 300 }}
                    >
                        <Share2 className="h-6 w-6" />
                    </motion.div>
                    <motion.div
                        className="flex h-14 w-14 items-center justify-center rounded-xl bg-sky-500 text-white shadow-lg"
                        whileHover={{ scale: 1.15, rotate: -5 }}
                        transition={{ type: "spring", stiffness: 300 }}
                    >
                        <Mail className="h-6 w-6" />
                    </motion.div>
                    <motion.div
                        className="flex h-14 w-14 items-center justify-center rounded-xl bg-green-500 text-white shadow-lg"
                        whileHover={{ scale: 1.15, rotate: 5 }}
                        transition={{ type: "spring", stiffness: 300 }}
                    >
                        <Phone className="h-6 w-6" />
                    </motion.div>
                    <motion.div
                        className="flex h-14 w-14 items-center justify-center rounded-xl bg-violet-500 text-white shadow-lg"
                        whileHover={{ scale: 1.15, rotate: -5 }}
                        transition={{ type: "spring", stiffness: 300 }}
                    >
                        <Megaphone className="h-6 w-6" />
                    </motion.div>
                </div>
            </div>
        )
    },
]

export function ProcessScroll() {
    return (
        <section className="relative bg-white py-24 sm:py-32">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="mx-auto max-w-2xl text-center mb-16">
                    <h2 className="text-base font-semibold leading-7 text-brand-blue">Our Process</h2>
                    <p className="mt-2 text-3xl font-bold tracking-tight text-brand-dark sm:text-4xl font-heading">
                        How We Build Your Revenue Engine
                    </p>
                </div>

                <div className="relative space-y-24">
                    <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-gradient-to-b from-brand-blue/0 via-brand-blue/20 to-brand-blue/0 md:left-1/2 md:-ml-px"></div>

                    {steps.map((step, index) => (
                        <motion.div
                            key={step.id}
                            initial={{ opacity: 0, y: 50 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-100px" }}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            className={`relative flex flex-col gap-8 md:flex-row ${index % 2 === 0 ? "md:flex-row-reverse" : ""
                                }`}
                        >
                            {/* Timeline Dot */}
                            <motion.div
                                className="absolute left-8 top-0 -ml-[9px] flex h-5 w-5 items-center justify-center rounded-full border-4 border-white bg-brand-blue md:left-1/2"
                                whileInView={{ scale: [1, 1.3, 1] }}
                                transition={{ duration: 0.5 }}
                            ></motion.div>

                            {/* Content Card */}
                            <div className="ml-16 flex-1 md:ml-0 md:w-1/2 md:px-12">
                                <div className="group relative overflow-hidden rounded-3xl bg-white p-8 shadow-lg ring-1 ring-gray-200 transition-all hover:shadow-xl hover:ring-brand-blue/30">
                                    <div className={`absolute right-0 top-0 h-32 w-32 -translate-y-1/2 translate-x-1/2 rounded-full bg-${step.color}-50 opacity-50 blur-2xl group-hover:opacity-100 transition-opacity`}></div>

                                    <div className="relative">
                                        <div className="flex items-center gap-4 mb-6">
                                            <div className={`flex h-12 w-12 items-center justify-center rounded-xl bg-${step.color}-100 text-${step.color}-600`}>
                                                <step.icon className="h-6 w-6" />
                                            </div>
                                            <span className="text-sm font-bold uppercase tracking-wider text-gray-400">Step 0{step.id}</span>
                                        </div>

                                        <h3 className="text-2xl font-bold text-gray-900 mb-3">{step.title}</h3>
                                        <p className="text-gray-600 mb-6">{step.description}</p>

                                        <ul className="space-y-3">
                                            {step.points.map((point, i) => (
                                                <li key={i} className="flex items-start gap-3 text-sm text-gray-600">
                                                    <CheckCircle2 className={`h-5 w-5 flex-shrink-0 text-${step.color}-500`} />
                                                    {point}
                                                </li>
                                            ))}
                                        </ul>
                                    </div>
                                </div>
                            </div>

                            {/* Visual Card */}
                            <div className="ml-16 flex-1 md:ml-0 md:w-1/2 md:px-12">
                                <motion.div
                                    className="aspect-square w-full max-w-sm mx-auto overflow-hidden rounded-3xl bg-gray-50 p-8 ring-1 ring-gray-100 flex items-center justify-center"
                                    whileHover={{ scale: 1.02 }}
                                    transition={{ type: "spring", stiffness: 300 }}
                                >
                                    {step.visual}
                                </motion.div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    )
}
