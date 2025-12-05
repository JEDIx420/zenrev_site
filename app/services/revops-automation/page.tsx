import { Button } from "@/components/ui/Button";
import Link from "next/link";
import { Metadata } from "next";
import { BarChart, Zap, Database, TrendingUp, Users, ArrowRight, Settings } from "lucide-react";

export const metadata: Metadata = {
    title: "RevOps Automation Services Dubai | CRM & Pipeline Automation for B2B SaaS",
    description: "Revenue operations automation services for B2B SaaS. HubSpot automation, Salesforce pipelines, CRM optimization, and data enrichment workflows for UAE, India, and global markets.",
    keywords: ["revops automation consultant", "revenue operations automation", "crm automation consultant", "hubspot automation specialist", "pipeline automation services", "b2b sales pipeline optimization", "data enrichment automation services", "revops workflow automation", "crm automation dubai", "hubspot automation uae"],
};

const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Service",
    "name": "Revenue Operations Automation",
    "description": "RevOps automation services including CRM optimization, pipeline automation, and data enrichment for B2B SaaS across UAE, India, and global markets.",
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
    "serviceType": "Revenue Operations Automation"
};

export default function RevOpsAutomationPage() {
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
                        <BarChart className="h-4 w-4" />
                        RevOps Automation
                    </div>
                    <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl mb-6">
                        Revenue Operations Automation for B2B SaaS
                    </h1>
                    <p className="text-lg leading-8 text-gray-600 mb-8">
                        Automate your entire revenue operations stack. From CRM optimization to pipeline automation and data enrichment workflows for UAE, India, and global B2B SaaS companies.
                    </p>
                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <Button size="lg" asChild>
                            <Link href="https://cal.com/jayanand-j-ywq8ls/30min" target="_blank">
                                Book RevOps Consultation
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
                        <Settings className="h-10 w-10 text-brand-blue mb-4" />
                        <h3 className="text-xl font-bold text-gray-900 mb-3">CRM Automation</h3>
                        <p className="text-gray-600 mb-4">
                            Automate HubSpot, Salesforce, and Pipedrive workflows. Perfect data hygiene, automated lead routing, and intelligent scoring.
                        </p>
                        <ul className="space-y-2 text-sm text-gray-600">
                            <li>• Automated lead routing & assignment</li>
                            <li>• Data enrichment & normalization</li>
                            <li>• Custom workflow automation</li>
                            <li>• Perfect CRM hygiene (zero manual entry)</li>
                        </ul>
                    </div>

                    <div className="rounded-2xl bg-white p-8 shadow-lg ring-1 ring-gray-200">
                        <TrendingUp className="h-10 w-10 text-brand-blue mb-4" />
                        <h3 className="text-xl font-bold text-gray-900 mb-3">Pipeline Automation</h3>
                        <p className="text-gray-600 mb-4">
                            Automate deal progression, stage transitions, and follow-ups. Increase pipeline velocity and close rates.
                        </p>
                        <ul className="space-y-2 text-sm text-gray-600">
                            <li>• Automated stage progression</li>
                            <li>• Smart follow-up sequences</li>
                            <li>• Deal health scoring</li>
                            <li>• Revenue forecasting automation</li>
                        </ul>
                    </div>

                    <div className="rounded-2xl bg-white p-8 shadow-lg ring-1 ring-gray-200">
                        <Database className="h-10 w-10 text-brand-blue mb-4" />
                        <h3 className="text-xl font-bold text-gray-900 mb-3">Data Enrichment Workflows</h3>
                        <p className="text-gray-600 mb-4">
                            Automatically enrich every lead with firmographics, technographics, and contact data from 50+ sources.
                        </p>
                        <ul className="space-y-2 text-sm text-gray-600">
                            <li>• Waterfall enrichment (Clay + APIs)</li>
                            <li>• Real-time data updates</li>
                            <li>• Technographic tracking</li>
                            <li>• Contact discovery & verification</li>
                        </ul>
                    </div>
                </div>

                {/* HubSpot Specialist Section */}
                <div className="mt-16 rounded-2xl bg-gradient-to-br from-brand-dark via-brand-blue to-brand-dark p-12 text-white">
                    <div className="mx-auto max-w-3xl text-center">
                        <h2 className="text-3xl font-bold mb-4">HubSpot Automation Specialist</h2>
                        <p className="text-lg text-blue-100 mb-8">
                            Expert HubSpot automation for B2B SaaS. Custom workflows, integrations, and optimization that turns HubSpot into a revenue engine.
                        </p>
                        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
                            <div>
                                <div className="text-4xl font-bold text-white">100+</div>
                                <div className="text-sm text-blue-200 mt-1">Workflows Automated</div>
                            </div>
                            <div>
                                <div className="text-4xl font-bold text-white">0%</div>
                                <div className="text-sm text-blue-200 mt-1">Manual Data Entry</div>
                            </div>
                            <div>
                                <div className="text-4xl font-bold text-white">50%</div>
                                <div className="text-sm text-blue-200 mt-1">Faster Pipeline Velocity</div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* How It Works */}
                <div className="mt-16">
                    <h2 className="text-3xl font-bold text-gray-900 text-center mb-12">How RevOps Automation Works</h2>
                    <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
                        <div className="text-center">
                            <div className="mx-auto w-12 h-12 rounded-full bg-brand-blue/10 flex items-center justify-center text-brand-blue font-bold text-xl mb-4">1</div>
                            <h3 className="font-bold text-gray-900 mb-2">Audit & Analysis</h3>
                            <p className="text-sm text-gray-600">We audit your current RevOps stack and identify automation opportunities</p>
                        </div>
                        <div className="text-center">
                            <div className="mx-auto w-12 h-12 rounded-full bg-brand-blue/10 flex items-center justify-center text-brand-blue font-bold text-xl mb-4">2</div>
                            <h3 className="font-bold text-gray-900 mb-2">Workflow Design</h3>
                            <p className="text-sm text-gray-600">Design custom automation workflows tailored to your GTM motion</p>
                        </div>
                        <div className="text-center">
                            <div className="mx-auto w-12 h-12 rounded-full bg-brand-blue/10 flex items-center justify-center text-brand-blue font-bold text-xl mb-4">3</div>
                            <h3 className="font-bold text-gray-900 mb-2">Implementation</h3>
                            <p className="text-sm text-gray-600">Build and deploy automation across your CRM, enrichment, and outreach tools</p>
                        </div>
                        <div className="text-center">
                            <div className="mx-auto w-12 h-12 rounded-full bg-brand-blue/10 flex items-center justify-center text-brand-blue font-bold text-xl mb-4">4</div>
                            <h3 className="font-bold text-gray-900 mb-2">Optimization</h3>
                            <p className="text-sm text-gray-600">Continuous monitoring and optimization to improve conversion rates</p>
                        </div>
                    </div>
                </div>

                {/* CRM Platforms */}
                <div className="mt-16 border-t border-gray-100 pt-12">
                    <h2 className="text-2xl font-bold text-gray-900 text-center mb-8">CRM Platforms We Specialize In</h2>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
                        <div className="p-4">
                            <div className="font-bold text-gray-900 mb-1">HubSpot</div>
                            <div className="text-sm text-gray-600">Full automation & optimization</div>
                        </div>
                        <div className="p-4">
                            <div className="font-bold text-gray-900 mb-1">Salesforce</div>
                            <div className="text-sm text-gray-600">Pipeline & workflow automation</div>
                        </div>
                        <div className="p-4">
                            <div className="font-bold text-gray-900 mb-1">Pipedrive</div>
                            <div className="text-sm text-gray-600">Deal automation & tracking</div>
                        </div>
                        <div className="p-4">
                            <div className="font-bold text-gray-900 mb-1">Custom CRMs</div>
                            <div className="text-sm text-gray-600">API integrations & workflows</div>
                        </div>
                    </div>
                </div>

                {/* CTA */}
                <div className="mt-16 text-center border-t border-gray-100 pt-12">
                    <h3 className="text-2xl font-bold text-gray-900 mb-4">
                        Ready to Automate Your RevOps?
                    </h3>
                    <p className="text-gray-600 mb-8 max-w-2xl mx-auto">
                        Book a free RevOps audit and we'll show you exactly how to automate your revenue operations and increase pipeline velocity.
                    </p>
                    <Button size="lg" asChild>
                        <Link href="https://cal.com/jayanand-j-ywq8ls/30min" target="_blank">
                            Book Free RevOps Audit
                            <ArrowRight className="ml-2 h-4 w-4" />
                        </Link>
                    </Button>
                </div>
            </div>
        </div>
    );
}
