"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { ArrowRight, Bot, Database, Zap, Search, Mail, Users, BarChart, Sparkles, TrendingUp, Target } from "lucide-react"
import { Button } from "@/components/ui/Button"

import { ProcessScroll } from "@/components/ProcessScroll"

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
      <section className="relative flex min-h-screen items-center justify-center overflow-hidden bg-gradient-to-br from-white via-blue-50/30 to-white px-6 py-20 lg:px-8">
        {/* Animated background elements */}
        <div className="absolute inset-0 overflow-hidden">
          <div className="absolute -top-40 -right-40 h-80 w-80 rounded-full bg-brand-blue/10 blur-3xl animate-float"></div>
          <div className="absolute -bottom-40 -left-40 h-80 w-80 rounded-full bg-brand-dark/10 blur-3xl animate-float" style={{ animationDelay: '2s' }}></div>
        </div>

        <div className="relative mx-auto max-w-4xl text-center">


          <motion.h1
            className="bg-gradient-to-br from-brand-dark via-brand-blue to-brand-dark bg-clip-text text-4xl font-bold tracking-tight text-transparent sm:text-7xl lg:text-8xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            style={{ backgroundSize: '200% 200%' }}
          >
            from signals to revenue.
          </motion.h1>

          <motion.p
            className="mt-8 text-lg leading-relaxed text-gray-600 sm:text-2xl"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            The premier <span className="font-semibold text-brand-blue">GTM Engineering</span> firm. We build agentic workflows that turn signals into revenue.
            <br />
            <span className="text-base sm:text-lg text-gray-500">Clay • n8n • Custom AI Agents</span>
          </motion.p>

          <motion.div
            className="mt-12 flex flex-col items-center justify-center gap-4 sm:flex-row sm:gap-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <Button size="lg" className="group relative overflow-hidden shadow-lg shadow-brand-blue/25 hover:shadow-xl hover:shadow-brand-blue/40 transition-all w-full sm:w-auto" asChild>
              <Link href="https://cal.com/jayanand-j-ywq8ls/30min" target="_blank">
                <span className="relative z-10 flex items-center justify-center gap-2">
                  Book 30-min Consultation
                  <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                </span>
              </Link>
            </Button>
            <Button variant="outline" size="lg" className="border-2 hover:bg-brand-blue/5 w-full sm:w-auto" asChild>
              <Link href="/agents">View Our Agents</Link>
            </Button>
          </motion.div>
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
                title: "Local AI Infrastructure",
                description: "We build custom agent systems deployed on private cloud infrastructure for Sales, Marketing, HR, and Finance automation.",
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

      {/* Our Process - Horizontal Scroll */}
      <ProcessScroll />

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
            className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-brand-blue to-brand-dark px-6 py-12 shadow-2xl sm:px-16 sm:py-16"
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
                <Button size="lg" variant="secondary" className="bg-white text-brand-blue hover:bg-gray-100 w-full sm:w-auto" asChild>
                  <Link href="https://cal.com/jayanand-j-ywq8ls/30min" target="_blank">
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
