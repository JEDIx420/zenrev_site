"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { ArrowRight, Bot, Database, Zap, Search, Mail, Users, BarChart, Sparkles, TrendingUp, Target } from "lucide-react"
import { Button } from "@/components/ui/Button"

const fadeIn = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.5 }
}

const stagger = {
  animate: {
    transition: {
      staggerChildren: 0.1
    }
  }
}

export default function Home() {
  return (
    <div className="flex flex-col">
      {/* Hero Section - Premium Design */}
      <section className="relative flex min-h-screen items-center overflow-hidden bg-gradient-to-br from-white via-blue-50/30 to-white px-6 py-20 lg:px-8">
        {/* Animated background elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 h-80 w-80 rounded-full bg-brand-blue/10 blur-3xl animate-float"></div>
          <div className="absolute -bottom-40 -left-40 h-80 w-80 rounded-full bg-brand-dark/10 blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>
        </div>

        <div className="relative mx-auto max-w-4xl text-center">
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="mb-8 inline-flex items-center gap-2 rounded-full bg-brand-blue/10 px-4 py-2 text-sm font-medium text-brand-blue ring-1 ring-brand-blue/20"
          >
            <Sparkles className="h-4 w-4" />
            AI-Powered GTM Engineering
          </motion.div>

          <motion.h1
            className="bg-gradient-to-br from-brand-dark via-brand-blue to-brand-dark bg-clip-text text-5xl font-bold tracking-tight text-transparent sm:text-7xl lg:text-8xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            style={{ backgroundSize: '200% 200%' }}
          >
            from signals to revenue.
          </motion.h1>

          <motion.p
            className="mt-8 text-xl leading-relaxed text-gray-600 sm:text-2xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            We build <span className="font-semibold text-brand-blue">agentic workflows</span> that turn raw signals into qualified meetings.
            <br />
            <span className="text-lg text-gray-500">Clay • n8n • Custom AI Agents</span>
          </motion.p>

          <motion.div
            className="mt-12 flex flex-col items-center justify-center gap-4 sm:flex-row sm:gap-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 }}
          >
            <Button size="lg" className="group relative overflow-hidden shadow-lg shadow-brand-blue/25 hover:shadow-xl hover:shadow-brand-blue/40 transition-all" asChild>
              <Link href="/contact">
                <span className="relative z-10 flex items-center gap-2">
                  Book 30-min Consultation
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </span>
              </Link>
            </Button>
            <Button variant="outline" size="lg" className="border-2 hover:bg-brand-blue/5" asChild>
              <Link href="/agents">View Our Agents</Link>
            </Button>
          </motion.div>
        </div>
      </section>

      {/* Client Logos - Enhanced */}
      <section className="border-y border-gray-100 bg-white py-16 sm:py-20">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <h2 className="text-center text-sm font-semibold uppercase tracking-wider text-gray-500">
            Trusted by forward-thinking B2B teams
          </h2>
          <div className="mx-auto mt-10 grid max-w-lg grid-cols-4 items-center gap-x-8 gap-y-10 sm:max-w-xl sm:grid-cols-6 sm:gap-x-10 lg:mx-0 lg:max-w-none lg:grid-cols-5">
            {[1, 2, 3, 4, 5].map((i) => (
              <div key={i} className="col-span-2 flex h-16 w-full items-center justify-center rounded-lg bg-gradient-to-br from-gray-50 to-gray-100 font-bold text-gray-300 transition-all hover:from-brand-blue/5 hover:to-brand-blue/10 hover:text-brand-blue lg:col-span-1">
                CLIENT
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Three Pillars - Premium Cards */}
      <section className="relative overflow-hidden bg-gradient-to-b from-white to-gray-50 py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-4 inline-flex items-center gap-2 rounded-full bg-brand-blue/10 px-4 py-1.5 text-sm font-medium text-brand-blue"
            >
              <Target className="h-4 w-4" />
              What We Do
            </motion.div>
            <h2 className="text-4xl font-bold tracking-tight text-brand-dark sm:text-5xl">
              The Complete GTM Stack
            </h2>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              From data acquisition to automated outreach, we engineer every layer.
            </p>
          </div>

          <motion.div
            className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 lg:mx-0 lg:max-w-none lg:grid-cols-3"
            variants={stagger}
            initial="initial"
            whileInView="animate"
            viewport={{ once: true }}
          >
            {[
              {
                title: "Signal Discovery",
                description: "We identify high-intent signals using Clay, Exa, and custom scrapers to find companies ready to buy.",
                icon: Search,
                gradient: "from-blue-500 to-cyan-500",
              },
              {
                title: "GTM Automation",
                description: "We build robust n8n workflows to enrich data, score leads, and trigger personalized campaigns.",
                icon: Zap,
                gradient: "from-violet-500 to-purple-500",
              },
              {
                title: "Agentic Systems",
                description: "We deploy autonomous agents that research prospects, draft messages, and manage follow-ups.",
                icon: Bot,
                gradient: "from-pink-500 to-rose-500",
              },
            ].map((pillar, index) => (
              <motion.div
                key={pillar.title}
                variants={fadeIn}
                className="group relative overflow-hidden rounded-2xl bg-white p-8 shadow-lg ring-1 ring-gray-200 transition-all hover:shadow-2xl hover:ring-brand-blue/50"
              >
                <div className={`absolute inset-0 bg-gradient-to-br ${pillar.gradient} opacity-0 transition-opacity group-hover:opacity-5`}></div>
                <div className="relative">
                  <div className={`inline-flex rounded-xl bg-gradient-to-br ${pillar.gradient} p-3 shadow-lg`}>
                    <pillar.icon className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="mt-6 text-2xl font-bold text-gray-900">{pillar.title}</h3>
                  <p className="mt-4 text-base leading-7 text-gray-600">{pillar.description}</p>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </section>

      {/* Signature Agents - Premium Grid */}
      <section className="bg-white py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="mx-auto max-w-2xl text-center">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="mb-4 inline-flex items-center gap-2 rounded-full bg-brand-blue/10 px-4 py-1.5 text-sm font-medium text-brand-blue"
            >
              <Bot className="h-4 w-4" />
              Our Agents
            </motion.div>
            <h2 className="text-4xl font-bold tracking-tight text-brand-dark sm:text-5xl">
              Systems-in-a-Box
            </h2>
            <p className="mt-6 text-lg leading-8 text-gray-600">
              Pre-built agent systems for common GTM challenges. Deploy in days, not months.
            </p>
          </div>

          <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-6 sm:grid-cols-2 lg:mx-0 lg:max-w-none lg:grid-cols-3">
            {[
              { name: "MRDetective", desc: "Finds decision makers and validates emails with 99% accuracy.", icon: Search, color: "blue" },
              { name: "Signal Agent", desc: "Monitors job boards, news, and funding for buying intent.", icon: BarChart, color: "purple" },
              { name: "Research Agent", desc: "Deep dives into company reports and docs to find hooks.", icon: Database, color: "cyan" },
              { name: "Prospecting Agent", desc: "Identifies ICP matches from intent data and builds lists.", icon: Users, color: "pink" },
              { name: "Mailer Agent", desc: "Drafts and sends hyper-personalized emails at scale.", icon: Mail, color: "orange" },
              { name: "Orchestrator", desc: "Manages the flow between other agents and handles errors.", icon: Zap, color: "violet" },
            ].map((agent) => (
              <motion.div
                key={agent.name}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="group relative overflow-hidden rounded-2xl bg-gradient-to-br from-white to-gray-50 p-8 shadow-md ring-1 ring-gray-200 transition-all hover:shadow-xl hover:ring-brand-blue/50"
              >
                <div className="flex items-start justify-between">
                  <div className={`rounded-xl bg-gradient-to-br from-${agent.color}-500 to-${agent.color}-600 p-3 shadow-lg`}>
                    <agent.icon className="h-5 w-5 text-white" />
                  </div>
                  <div className="rounded-full bg-brand-blue/10 px-3 py-1 text-xs font-semibold text-brand-blue">
                    Ready
                  </div>
                </div>
                <h3 className="mt-6 text-xl font-bold text-gray-900">{agent.name}</h3>
                <p className="mt-3 text-sm leading-6 text-gray-600">{agent.desc}</p>
                <Link
                  href="/agents"
                  className="mt-6 inline-flex items-center gap-1 text-sm font-semibold text-brand-blue transition-all hover:gap-2"
                >
                  View Agent <ArrowRight className="h-4 w-4" />
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials - Dark Premium Section */}
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

      {/* CTA Section */}
      <section className="bg-gradient-to-br from-gray-50 to-white py-24 sm:py-32">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-brand-blue to-brand-dark px-8 py-16 shadow-2xl sm:px-16"
          >
            <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10"></div>
            <div className="relative mx-auto max-w-2xl text-center">
              <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
                Ready to automate your GTM?
              </h2>
              <p className="mt-6 text-lg leading-8 text-blue-100">
                Book a 30-minute consultation and we'll show you exactly how to deploy agents in your stack.
              </p>
              <div className="mt-10">
                <Button size="lg" variant="secondary" className="bg-white text-brand-blue hover:bg-gray-100" asChild>
                  <Link href="/contact">
                    Book Your Consultation
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Link>
                </Button>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </div>
  )
}
