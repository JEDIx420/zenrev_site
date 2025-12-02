import { caseStudies } from "@/lib/case-studies";
import { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, TrendingUp } from "lucide-react";
import { Button } from "@/components/ui/Button";

export const metadata: Metadata = {
    title: "Case Studies | zenrev GTM Engineering Success Stories",
    description: "Real-world examples of GTM engineering, Clay automation, and n8n workflows that transformed revenue operations for B2B SaaS companies.",
    keywords: ["GTM engineering case studies", "Clay automation examples", "n8n workflows", "B2B SaaS automation", "revenue operations"],
};

export default function CaseStudiesPage() {
    return (
        <div className="min-h-screen bg-white pt-24 pb-16">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="mx-auto max-w-2xl text-center">
                    <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-brand-blue/10 px-4 py-1.5 text-sm font-medium text-brand-blue">
                        <TrendingUp className="h-4 w-4" />
                        Proven Results
                    </div>
                    <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl mb-6">
                        Case Studies
                    </h1>
                    <p className="text-lg leading-8 text-gray-600">
                        Real-world examples of how GTM engineering transforms revenue operations for B2B SaaS companies.
                    </p>
                </div>

                <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-8 lg:mx-0 lg:max-w-none lg:grid-cols-3">
                    {caseStudies.map((study) => (
                        <article
                            key={study.slug}
                            className="flex flex-col items-start justify-between rounded-2xl bg-white p-8 shadow-lg ring-1 ring-gray-200 transition-all hover:shadow-xl hover:ring-brand-blue/50"
                        >
                            <div className="flex items-center gap-x-2 text-xs mb-4">
                                <span className="rounded-full bg-brand-blue/10 px-3 py-1 font-medium text-brand-blue">
                                    {study.client}
                                </span>
                                <span className="text-gray-500">{study.industry}</span>
                            </div>

                            <div className="group relative flex-1">
                                <h3 className="text-xl font-bold leading-6 text-gray-900 group-hover:text-brand-blue transition-colors">
                                    <Link href={`/case-studies/${study.slug}`}>
                                        <span className="absolute inset-0" />
                                        {study.title}
                                    </Link>
                                </h3>
                                <p className="mt-4 text-sm leading-6 text-gray-600 line-clamp-3">
                                    {study.description}
                                </p>
                            </div>

                            {study.metrics && study.metrics.length > 0 && (
                                <div className="mt-6 flex w-full gap-4 border-t border-gray-100 pt-6">
                                    {study.metrics.slice(0, 2).map((metric) => (
                                        <div key={metric.label} className="flex-1">
                                            <div className="text-2xl font-bold text-brand-blue">
                                                {metric.value}
                                            </div>
                                            <div className="text-xs text-gray-500 uppercase tracking-wide">
                                                {metric.label}
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            )}

                            <div className="mt-6 w-full">
                                <Link
                                    href={`/case-studies/${study.slug}`}
                                    className="inline-flex items-center text-sm font-medium text-brand-blue hover:text-brand-dark transition-colors"
                                >
                                    Read case study
                                    <ArrowRight className="ml-2 h-4 w-4" />
                                </Link>
                            </div>
                        </article>
                    ))}
                </div>

                <div className="mt-16 border-t border-gray-100 pt-12 text-center">
                    <h3 className="text-2xl font-bold text-gray-900 mb-6">
                        Ready for similar results?
                    </h3>
                    <p className="text-base text-gray-600 mb-8 max-w-2xl mx-auto">
                        Book a consultation and we'll show you how to implement GTM engineering in your stack.
                    </p>
                    <Button size="lg" asChild>
                        <Link href="https://cal.com/jayanand-j-ywq8ls/30min" target="_blank">
                            Book Free Consultation
                        </Link>
                    </Button>
                </div>
            </div>
        </div>
    );
}
