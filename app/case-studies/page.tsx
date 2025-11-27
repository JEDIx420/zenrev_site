import { Button } from "@/components/ui/Button"
import Link from "next/link"
import { caseStudies } from "@/lib/case-studies"

export default function CaseStudiesPage() {
    return (
        <div className="relative min-h-screen pt-12 pb-16 sm:pt-16 sm:pb-24">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="mx-auto max-w-2xl text-center">
                    <p className="mt-2 text-3xl font-bold tracking-tight text-brand-dark sm:text-4xl font-heading">
                        Real Results, Real Revenue
                    </p>
                    <p className="mt-6 text-lg leading-8 text-gray-600">
                        See how B2B SaaS teams are scaling their GTM with zenrev.
                    </p>
                </div>
                <div className="mx-auto mt-12 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-12 lg:mx-0 lg:max-w-none lg:grid-cols-3">
                    {caseStudies.map((study) => (
                        <article key={study.slug} className="flex flex-col items-start justify-between rounded-2xl bg-white/60 p-8 shadow-sm ring-1 ring-gray-200 backdrop-blur-sm transition-all hover:bg-white/80 hover:shadow-md">
                            <div className="w-full">
                                <div className="flex items-center gap-x-4 text-xs">
                                    <span className="text-gray-500">{study.industry}</span>
                                </div>
                                <h3 className="mt-3 text-lg font-semibold leading-6 text-gray-900">
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
                                    <Link href={`/case-studies/${study.slug}`}>Read Full Story</Link>
                                </Button>
                            </div>
                        </article>
                    ))}
                </div>
            </div>
        </div>
    )
}
