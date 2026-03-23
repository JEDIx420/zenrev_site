"use client"

import Link from "next/link"
import { motion } from "framer-motion"
import { ArrowRight, Bot, Database, Zap, Search, Mail, Users, BarChart, Sparkles, TrendingUp, Target } from "lucide-react"
import { Button } from "@/components/ui/Button"

import { ProcessScroll } from "@/components/ProcessScroll"
import { FlickeringGrid } from "@/components/ui/flickering-grid"

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
      {/* Hero Section - Upgraded Pattern */}
      <section className="min-h-[80vh] w-full bg-white relative flex items-center justify-center overflow-hidden px-6 lg:px-8">
        
        {/* Background Layer with Grid Mask */}
        <div className="absolute inset-0 z-0 [mask-image:radial-gradient(ellipse_at_center,black_30%,transparent_80%)]">
          <FlickeringGrid
            color="rgb(37, 99, 235)"
            maxOpacity={0.08}
            flickerChance={0.2}
            squareSize={4}
            gridGap={6}
          />
        </div>

        {/* Foreground Content */}
        <motion.div
          className="relative z-10 mx-auto max-w-4xl text-center flex flex-col items-center"
          variants={stagger}
          initial="initial"
          animate="animate"
        >
          <motion.h1
            variants={fadeIn}
            className="text-5xl sm:text-7xl font-bold lowercase tracking-tight text-blue-600 pb-2"
          >
            from signals to revenue.
          </motion.h1>

          <motion.p
            variants={fadeIn}
            className="mt-6 text-lg sm:text-xl leading-relaxed text-zinc-600 max-w-2xl"
          >
            The premier <span className="font-bold text-blue-600">GTM Engineering</span> firm. We build agentic workflows that turn signals into revenue.
          </motion.p>

          <motion.div variants={fadeIn} className="mt-4">
            <span className="text-sm font-medium tracking-wide text-zinc-400">
              Clay • n8n • Custom AI Agents
            </span>
          </motion.div>

          <motion.div
            variants={fadeIn}
            className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row sm:gap-6 w-full"
          >
            <Button size="lg" className="rounded-full bg-blue-600 text-white shadow-lg shadow-blue-500/25 hover:bg-blue-700 hover:shadow-blue-500/40 transition-all w-full sm:w-auto px-8" asChild>
              <Link href="https://cal.com/jayanand-j-ywq8ls/30min" target="_blank">
                Book 30-min Consultation &rarr;
              </Link>
            </Button>
            <Button variant="outline" size="lg" className="rounded-full bg-white border border-blue-600 text-blue-600 hover:bg-blue-50 transition-all w-full sm:w-auto px-8" asChild>
              <Link href="/agents">View Our Agents</Link>
            </Button>
          </motion.div>
        </motion.div>
      </section>



      {/* Three Pillars - Premium Cards */}
      <section className="relative overflow-hidden bg-gray-50 py-12 sm:py-16">
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
            <p className="mt-4 text-lg leading-8 text-gray-600">
              From data acquisition to automated outreach, we engineer every layer.
            </p>
          </div>

          <motion.div
            className="mx-auto mt-12 grid max-w-2xl grid-cols-1 gap-6 lg:mx-0 lg:max-w-none lg:grid-cols-3"
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
                className="group relative overflow-hidden rounded-2xl bg-white p-6 shadow-lg ring-1 ring-gray-200 transition-all hover:shadow-2xl hover:ring-brand-blue/50"
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
      <section className="relative overflow-hidden bg-gradient-to-br from-brand-dark via-brand-blue to-brand-dark py-16 text-white sm:py-20">
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

          <div className="mx-auto mt-12 grid max-w-2xl grid-cols-1 gap-6 lg:mx-0 lg:max-w-none lg:grid-cols-2">
            {[
              {
                quote: "Working with zenrev helped us to build our new site fast and get leads for our company with their chatbot",
                author: "Swaroop Reddy",
                role: "CEO @ Unizol",
                metric: "Fast Delivery",
              },
              {
                quote: "The zenrev team helped us to make custom agents for our business that automated our reiew system and helped us be more visible online",
                author: "Jayakumar J",
                role: "CEO @ Anandam Buildings",
                metric: "Automated Reviews",
              },
            ].map((testimonial, i) => (
              <motion.figure
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="relative rounded-2xl bg-white/10 p-6 backdrop-blur-sm ring-1 ring-white/20 transition-all hover:bg-white/15"
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
      <section className="bg-white py-16 sm:py-20">
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
              <p className="mt-4 text-lg leading-8 text-blue-100">
                Book a 30-minute consultation and we'll show you exactly how to deploy agents in your stack.
              </p>
              <div className="mt-8">
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
