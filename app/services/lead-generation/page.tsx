import { Button } from "@/components/ui/Button";
import Link from "next/link";
import { Metadata } from "next";
import { Target, Users, Zap, TrendingUp, Mail, Linkedin, Database, ArrowRight } from "lucide-react";

export const metadata: Metadata = {
    title: "B2B Lead Generation Services UAE & India | AI-Powered Outbound Automation",
    description: "Dubai-based lead generation agency specializing in AI-powered outbound automation, multi-channel prospecting, and intent-based targeting for B2B SaaS across UAE, India, and GCC markets.",
    keywords: ["b2b lead generation services india", "b2b lead generation services uae", "outbound automation agency", "cold email automation agency", "linkedin outreach automation service", "ai powered lead generation", "intent based lead generation india", "multi channel outbound agency", "b2b appointment setting automation", "lead gen dubai", "lead gen uae"],
};

const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "B2B Lead Generation Services",
    "description": "AI-powered B2B lead generation and outbound automation services for SaaS companies across UAE, India, and global markets.",
    "provider": {
        "@type": "Organization",
        "name": "zenrev",
        "address": {
            "@type": "PostalAddress",
            "addressLocality": "Dubai",
            "addressCountry": "AE"
        }
    },
    "areaServed": ["AE", "IN", "SA", "QA", "BH", "KW", "OM", "US"],
    "serviceType": "Lead Generation"
};

export default function LeadGenerationPage() {
    return (
        <div className="bg-white py-16 sm:py-20">
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />

            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                {/* Hero */}
                <div className="mx-auto max-w-2xl text-center">
                    <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-brand-blue/10 px-4 py-1.5 text-sm font-medium text-brand-blue">
                        <Target className="h-4 w-4" />
                        Lead Generation Services
                    </div>
                    <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl mb-6">
                        B2B Lead Generation Services for UAE, India & GCC Markets
                    </h1>
                    <p className="text-lg leading-8 text-gray-600 mb-8">
                        AI-powered outbound automation that generates qualified leads on autopilot. Multi-channel prospecting across email, LinkedIn, and intent signals for B2B SaaS companies.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Button size="lg" asChild>
                            <Link href="https://cal.com/jayanand-j-ywq8ls/30min" target="_blank">
                                Book Strategy Call
                            </Link>
                        </Button>
                        <Button size="lg" variant="outline" asChild>
                            <Link href="/case-studies">View Case Studies</Link>
                        </Button>
                    </div>
                </div>

                {/* Services Grid */}
                <div className="mt-16 grid grid-cols-1 gap-8 lg:grid-cols-3">
                    <div className="rounded-2xl bg-white p-8 shadow-lg ring-1 ring-gray-200">
                        <Mail className="h-10 w-10 text-brand-blue mb-4" />
                        <h3 className="text-xl font-bold text-gray-900 mb-3">Cold Email Automation</h3>
                        <p className="text-gray-600 mb-4">
                            AI-personalized cold email campaigns with 15%+ reply rates. Automated follow-ups, A/B testing, and deliverability optimization.
                        </p>
                        <ul className="space-y-2 text-sm text-gray-600">
                            <li>• AI-powered personalization at scale</li>
                            <li>• Multi-step sequence automation</li>
                            <li>• Deliverability monitoring & warm-up</li>
                            <li>• Reply detection & CRM sync</li>
                        </ul>
                    </div>

                    <div className="rounded-2xl bg-white p-8 shadow-lg ring-1 ring-gray-200">
                        <Linkedin className="h-10 w-10 text-brand-blue mb-4" />
                        <h3 className="text-xl font-bold text-gray-900 mb-3">LinkedIn Outreach Automation</h3>
                        <p className="text-gray-600 mb-4">
                            Automated LinkedIn prospecting with personalized connection requests, follow-ups, and InMail campaigns.
                        </p>
                        <ul className="space-y-2 text-sm text-gray-600">
                            <li>• Automated connection requests</li>
                            <li>• Personalized message sequences</li>
                            <li>• Profile enrichment & tracking</li>
                            <li>• Safe automation (no bans)</li>
                        </ul>
                    </div>

                    <div className="rounded-2xl bg-white p-8 shadow-lg ring-1 ring-gray-200">
                        <Database className="h-10 w-10 text-brand-blue mb-4" />
                        <h3 className="text-xl font-bold text-gray-900 mb-3">Intent-Based Lead Generation</h3>
                        <p className="text-gray-600 mb-4">
                            Monitor buying signals (funding, hiring, tech changes) and automatically engage high-intent prospects.
                        </p>
                        <ul className="space-y-2 text-sm text-gray-600">
                            <li>• Real-time signal detection</li>
                            <li>• Automated prospect enrichment</li>
                            <li>• ICP scoring & prioritization</li>
                            <li>• Trigger-based outreach</li>
                        </ul>
                    </div>
                </div>

                {/* Multi-Channel Section */}
                <div className="mt-16 rounded-2xl bg-gradient-to-br from-brand-dark via-brand-blue to-brand-dark p-12 text-white">
                    <div className="mx-auto max-w-3xl text-center">
                        <h2 className="text-3xl font-bold mb-4">Multi-Channel Outbound Automation</h2>
                        <p className="text-lg text-blue-100 mb-8">
                            Coordinate email, LinkedIn, and phone outreach in one automated workflow. Increase response rates by 3x with multi-touch campaigns.
                        </p>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
                            <div>
                                <div className="text-4xl font-bold text-white">15%+</div>
                                <div className="text-sm text-blue-200 mt-1">Reply Rate</div>
                            </div>
                            <div>
                                <div className="text-4xl font-bold text-white">40%+</div>
                                <div className="text-sm text-blue-200 mt-1">Meetings Booked</div>
                            </div>
                            <div>
                                <div className="text-4xl font-bold text-white">95%</div>
                                <div className="text-sm text-blue-200 mt-1">Automation Rate</div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* How It Works */}
                <div className="mt-16">
                    <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">How Our Lead Generation Works</h2>
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                        <div className="text-center">
                            <div className="mx-auto w-12 h-12 rounded-full bg-brand-blue/10 flex items-center justify-center text-brand-blue font-bold text-xl mb-4">1</div>
                            <h3 className="font-bold text-gray-900 mb-2">Signal Detection</h3>
                            <p className="text-sm text-gray-600">Monitor funding, hiring, tech changes, and intent signals across your ICP</p>
                        </div>
                        <div className="text-center">
                            <div className="mx-auto w-12 h-12 rounded-full bg-brand-blue/10 flex items-center justify-center text-brand-blue font-bold text-xl mb-4">2</div>
                            <h3 className="font-bold text-gray-900 mb-2">Enrichment & Scoring</h3>
                            <p className="text-sm text-gray-600">Automatically enrich prospects and score based on ICP fit</p>
                        </div>
                        <div className="text-center">
                            <div className="mx-auto w-12 h-12 rounded-full bg-brand-blue/10 flex items-center justify-center text-brand-blue font-bold text-xl mb-4">3</div>
                            <h3 className="font-bold text-gray-900 mb-2">Personalized Outreach</h3>
                            <p className="text-sm text-gray-600">AI generates personalized emails and LinkedIn messages at scale</p>
                        </div>
                        <div className="text-center">
                            <div className="mx-auto w-12 h-12 rounded-full bg-brand-blue/10 flex items-center justify-center text-brand-blue font-bold text-xl mb-4">4</div>
                            <h3 className="font-bold text-gray-900 mb-2">Meeting Booked</h3>
                            <p className="text-sm text-gray-600">Qualified leads automatically synced to CRM with full attribution</p>
                        </div>
                    </div>
                </div>

                {/* CTA */}
                <div className="mt-16 text-center border-t border-gray-100 pt-12">
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">
                        Ready to Scale Your Lead Generation?
                    </h3>
                    <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
                        Book a free strategy call and we'll show you how to automate your outbound and generate qualified leads on autopilot.
                    </p>
                    <Button size="lg" asChild>
                        <Link href="https://cal.com/jayanand-j-ywq8ls/30min" target="_blank">
                            Book Free Strategy Call
                            <ArrowRight className="ml-2 h-4 w-4" />
                        </Link>
                    </Button>
                </div>
            </div>
        </div>
    );
}
