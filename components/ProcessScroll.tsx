"use client"

import { useRef } from "react"
import { motion, useScroll, useTransform } from "framer-motion"
import { ClipboardCheck, FileText, Database, Workflow, RefreshCw, Megaphone, CheckCircle2, Search, Filter, Mail, Phone, Share2, Layers, Zap, UserCheck, BarChart } from "lucide-react"

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
            <div className="relative flex h-full w-full items-center justify-center py-8">
                <div className="absolute inset-0 bg-blue-500/5 blur-3xl"></div>
                <div className="relative w-full max-w-[280px]">
                    {/* Stack Layers */}
                    <div className="relative grid gap-4">
                        {[1, 2, 3].map((i) => (
                            <motion.div
                                key={i}
                                className="relative h-16 w-full overflow-hidden rounded-xl bg-white shadow-md ring-1 ring-blue-100"
                                initial={{ x: -20, opacity: 0 }}
                                whileInView={{ x: 0, opacity: 1 }}
                                transition={{ delay: i * 0.1 }}
                            >
                                <div className="absolute top-4 left-4 h-2 w-1/2 rounded-full bg-gray-100"></div>
                                <div className="absolute top-8 left-4 h-2 w-1/3 rounded-full bg-gray-100"></div>
                            </motion.div>
                        ))}

                        {/* Scanning Beam */}
                        <motion.div
                            className="absolute -inset-4 z-10 border-t-2 border-blue-500 bg-gradient-to-b from-blue-500/20 to-transparent"
                            initial={{ top: "0%", opacity: 0 }}
                            whileInView={{ top: ["0%", "100%", "0%"], opacity: 1 }}
                            transition={{ duration: 3, repeat: Infinity, ease: "linear" }}
                            style={{ height: "40px" }}
                        />
                    </div>

                    {/* Magnifying Glass */}
                    <motion.div
                        className="absolute -right-4 top-1/2 flex h-16 w-16 -translate-y-1/2 items-center justify-center rounded-full bg-gradient-to-br from-blue-500 to-cyan-500 shadow-xl"
                        initial={{ scale: 0 }}
                        whileInView={{ scale: 1 }}
                        whileHover={{ scale: 1.1, rotate: 15 }}
                        transition={{ type: "spring", stiffness: 200, delay: 0.3 }}
                    >
                        <Search className="h-8 w-8 text-white" />
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
            <div className="relative flex h-full w-full items-center justify-center py-8">
                <div className="absolute inset-0 bg-purple-500/5 blur-3xl"></div>
                <motion.div
                    className="relative w-64 rounded-2xl bg-white p-6 shadow-xl ring-1 ring-purple-100"
                    whileHover={{ y: -5 }}
                >
                    {/* Header */}
                    <div className="mb-6 flex items-center gap-3">
                        <div className="h-10 w-10 rounded-full bg-purple-100 flex items-center justify-center">
                            <UserCheck className="h-5 w-5 text-purple-600" />
                        </div>
                        <div className="space-y-1.5">
                            <div className="h-2.5 w-24 rounded-full bg-gray-200"></div>
                            <div className="h-2 w-16 rounded-full bg-gray-100"></div>
                        </div>
                    </div>

                    {/* Checklist Items */}
                    <div className="space-y-3">
                        {[1, 2, 3].map((i) => (
                            <motion.div
                                key={i}
                                className="flex items-center gap-3 rounded-lg bg-gray-50 p-2"
                                initial={{ opacity: 0, x: -10 }}
                                whileInView={{ opacity: 1, x: 0 }}
                                transition={{ delay: i * 0.2 }}
                            >
                                <motion.div
                                    initial={{ scale: 0 }}
                                    whileInView={{ scale: 1 }}
                                    transition={{ delay: i * 0.2 + 0.2, type: "spring" }}
                                >
                                    <CheckCircle2 className="h-5 w-5 text-purple-500" />
                                </motion.div>
                                <div className="h-2 w-full rounded-full bg-purple-100/50"></div>
                            </motion.div>
                        ))}
                    </div>

                    {/* Floating Badge */}
                    <motion.div
                        className="absolute -right-3 -top-3 rounded-full bg-purple-600 px-3 py-1 text-xs font-bold text-white shadow-lg"
                        initial={{ scale: 0 }}
                        whileInView={{ scale: 1 }}
                        transition={{ delay: 0.8, type: "spring" }}
                    >
                        MATCH
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
            <div className="relative flex h-full w-full items-center justify-center py-8">
                <div className="absolute inset-0 bg-cyan-500/5 blur-3xl"></div>
                <div className="flex items-center gap-6">
                    {/* Dirty Data */}
                    <motion.div
                        className="flex flex-col gap-3"
                        initial={{ opacity: 1, x: 0 }}
                        whileInView={{ opacity: 0.4, x: -20 }}
                        transition={{ delay: 1, duration: 0.5 }}
                    >
                        {[1, 2].map((i) => (
                            <div key={i} className="flex h-12 w-32 items-center gap-2 rounded-lg border border-red-100 bg-red-50 px-3 opacity-70">
                                <div className="h-2 w-2 rounded-full bg-red-400"></div>
                                <div className="h-2 w-16 rounded-full bg-red-200"></div>
                            </div>
                        ))}
                    </motion.div>

                    {/* Filter Process */}
                    <div className="relative z-10">
                        <motion.div
                            className="flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-cyan-400 to-blue-500 shadow-lg text-white"
                            animate={{ rotate: 360 }}
                            transition={{ duration: 8, repeat: Infinity, ease: "linear" }}
                        >
                            <Filter className="h-8 w-8" />
                        </motion.div>
                    </div>

                    {/* Clean Data */}
                    <motion.div
                        className="flex flex-col gap-3"
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        transition={{ delay: 1, duration: 0.5 }}
                    >
                        {[1, 2].map((i) => (
                            <motion.div
                                key={i}
                                className="flex h-12 w-32 items-center gap-2 rounded-lg border border-green-100 bg-white px-3 shadow-sm"
                                whileHover={{ scale: 1.05 }}
                            >
                                <div className="h-2 w-2 rounded-full bg-green-500"></div>
                                <div className="h-2 w-20 rounded-full bg-gray-200"></div>
                            </motion.div>
                        ))}
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
            <div className="relative flex h-full w-full items-center justify-center py-8">
                <div className="absolute inset-0 bg-pink-500/5 blur-3xl"></div>
                <div className="relative h-64 w-full max-w-[280px]">
                    {/* Background Grid */}
                    <div className="absolute inset-0 grid grid-cols-4 grid-rows-4 gap-4 opacity-20">
                        {Array.from({ length: 16 }).map((_, i) => (
                            <div key={i} className="rounded-full bg-pink-200 h-1 w-1 mx-auto my-auto"></div>
                        ))}
                    </div>

                    {/* Nodes */}
                    {[
                        { x: "20%", y: "20%" }, { x: "80%", y: "20%" },
                        { x: "50%", y: "50%" },
                        { x: "20%", y: "80%" }, { x: "80%", y: "80%" }
                    ].map((pos, i) => (
                        <motion.div
                            key={i}
                            className="absolute h-3 w-3 -ml-1.5 -mt-1.5 rounded-full bg-white ring-2 ring-pink-400 shadow-lg z-10"
                            style={{ left: pos.x, top: pos.y }}
                            initial={{ scale: 0 }}
                            whileInView={{ scale: 1 }}
                            transition={{ delay: i * 0.1 }}
                        >
                            <motion.div
                                className="absolute inset-0 rounded-full bg-pink-400 opacity-50"
                                animate={{ scale: [1, 2, 1], opacity: [0.5, 0, 0.5] }}
                                transition={{ duration: 2, repeat: Infinity, delay: i * 0.2 }}
                            />
                        </motion.div>
                    ))}

                    {/* Connecting Lines */}
                    <svg className="absolute inset-0 h-full w-full overflow-visible">
                        <motion.path
                            d="M56,51 L140,128 M224,51 L140,128 M56,205 L140,128 M224,205 L140,128"
                            stroke="#fce7f3"
                            strokeWidth="2"
                            fill="none"
                        />
                        {/* Data Packets */}
                        {[0, 1, 2, 3].map((i) => (
                            <motion.circle
                                key={i}
                                r="4"
                                fill="#ec4899"
                                filter="url(#glow)"
                            >
                                <animateMotion
                                    dur="3s"
                                    repeatCount="indefinite"
                                    path={
                                        i === 0 ? "M56,51 L140,128" :
                                            i === 1 ? "M224,51 L140,128" :
                                                i === 2 ? "M56,205 L140,128" :
                                                    "M224,205 L140,128"
                                    }
                                    begin={`${i * 0.75}s`}
                                />
                            </motion.circle>
                        ))}
                        <defs>
                            <filter id="glow">
                                <feGaussianBlur stdDeviation="2" result="coloredBlur" />
                                <feMerge>
                                    <feMergeNode in="coloredBlur" />
                                    <feMergeNode in="SourceGraphic" />
                                </feMerge>
                            </filter>
                        </defs>
                    </svg>

                    {/* Central Hub */}
                    <motion.div
                        className="absolute left-1/2 top-1/2 -ml-8 -mt-8 flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-pink-500 to-rose-500 text-white shadow-xl z-20"
                        initial={{ scale: 0 }}
                        whileInView={{ scale: 1 }}
                        whileHover={{ scale: 1.1 }}
                        transition={{ type: "spring" }}
                    >
                        <Zap className="h-8 w-8" />
                    </motion.div>
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
            <div className="relative flex h-full w-full items-center justify-center py-8">
                <div className="absolute inset-0 bg-orange-500/5 blur-3xl"></div>
                <div className="relative w-full max-w-[280px] flex items-center justify-between">
                    {/* Input: Dead Leads */}
                    <div className="flex flex-col gap-2">
                        {[1, 2, 3].map((i) => (
                            <motion.div
                                key={i}
                                className="h-2 w-12 rounded-full bg-gray-200"
                                initial={{ x: -20, opacity: 0 }}
                                whileInView={{ x: 0, opacity: 1 }}
                                animate={{ x: [0, 20, 0] }}
                                transition={{ duration: 3, repeat: Infinity, delay: i * 0.2 }}
                            />
                        ))}
                    </div>

                    {/* Processor */}
                    <div className="relative z-10">
                        <motion.div
                            className="absolute inset-0 rounded-full bg-orange-400 blur-xl opacity-20"
                            animate={{ scale: [1, 1.2, 1] }}
                            transition={{ duration: 2, repeat: Infinity }}
                        />
                        <motion.div
                            className="relative flex h-20 w-20 items-center justify-center rounded-2xl bg-white shadow-xl ring-1 ring-orange-100"
                            whileHover={{ rotate: 180 }}
                            transition={{ duration: 0.6 }}
                        >
                            <RefreshCw className="h-10 w-10 text-orange-500" />

                            {/* Orbiting particles */}
                            <motion.div
                                className="absolute inset-0 rounded-2xl border-2 border-orange-200 border-dashed"
                                animate={{ rotate: 360 }}
                                transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                            />
                        </motion.div>
                    </div>

                    {/* Output: Gold */}
                    <div className="relative h-24 w-12">
                        {[1, 2, 3, 4, 5].map((i) => (
                            <motion.div
                                key={i}
                                className="absolute h-3 w-3 rounded-full bg-gradient-to-br from-yellow-300 to-yellow-500 shadow-sm"
                                initial={{ scale: 0, opacity: 0 }}
                                whileInView={{
                                    scale: [0, 1, 0],
                                    opacity: [0, 1, 0],
                                    x: [0, 20 + Math.random() * 20],
                                    y: [(Math.random() - 0.5) * 40]
                                }}
                                transition={{
                                    duration: 2,
                                    repeat: Infinity,
                                    delay: i * 0.4,
                                    ease: "easeOut"
                                }}
                                style={{ left: 0, top: "50%" }}
                            />
                        ))}
                    </div>
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
            <div className="relative flex h-full w-full items-center justify-center py-8">
                <div className="absolute inset-0 bg-violet-500/5 blur-3xl"></div>
                <div className="relative h-64 w-64">
                    {/* Orbits */}
                    <div className="absolute inset-0 flex items-center justify-center">
                        <div className="h-48 w-48 rounded-full border border-violet-100"></div>
                    </div>
                    <div className="absolute inset-0 flex items-center justify-center">
                        <div className="h-32 w-32 rounded-full border border-violet-100"></div>
                    </div>

                    {/* Central Hub */}
                    <div className="absolute inset-0 flex items-center justify-center">
                        <motion.div
                            className="flex h-16 w-16 items-center justify-center rounded-2xl bg-violet-600 text-white shadow-lg"
                            animate={{ scale: [1, 1.05, 1] }}
                            transition={{ duration: 2, repeat: Infinity }}
                        >
                            <Megaphone className="h-8 w-8" />
                        </motion.div>
                    </div>

                    {/* Orbiting Icons */}
                    {[
                        { icon: Mail, color: "bg-blue-500", delay: 0 },
                        { icon: Share2, color: "bg-sky-500", delay: 1.3 },
                        { icon: Phone, color: "bg-green-500", delay: 2.6 }
                    ].map((item, i) => (
                        <motion.div
                            key={i}
                            className="absolute inset-0"
                            animate={{ rotate: 360 }}
                            transition={{ duration: 8, repeat: Infinity, ease: "linear", delay: -item.delay }}
                        >
                            <motion.div
                                className={`absolute -top-6 left-1/2 -ml-6 flex h-12 w-12 items-center justify-center rounded-xl ${item.color} text-white shadow-lg`}
                                style={{ top: i === 1 ? "15%" : i === 2 ? "15%" : "-24px" }} // Adjust orbit radius visually
                                animate={{ rotate: -360 }} // Counter-rotate to keep icon upright
                                transition={{ duration: 8, repeat: Infinity, ease: "linear", delay: -item.delay }}
                            >
                                <item.icon className="h-6 w-6" />
                            </motion.div>
                        </motion.div>
                    ))}
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
                                <div className="group relative overflow-hidden rounded-3xl bg-white p-8 shadow-lg ring-1 ring-gray-200 transition-all hover:shadow-xl hover:ring-brand-blue/30 h-full">
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
                                    className="w-full h-full min-h-[320px] overflow-hidden rounded-3xl bg-gray-50 ring-1 ring-gray-100 flex items-center justify-center"
                                    whileHover={{ scale: 1.02, boxShadow: "0 20px 25px -5px rgb(0 0 0 / 0.1)" }}
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
