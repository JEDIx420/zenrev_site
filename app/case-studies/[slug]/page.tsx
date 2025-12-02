import resources from "@/data/resources.json";
import { Metadata } from "next";
import { notFound } from "next/navigation";
import Link from "next/link";
import { ArrowLeft, CheckCircle2 } from "lucide-react";
import { Button } from "@/components/ui/Button";

interface Props {
    params: Promise<{ slug: string }>;
}

export async function generateStaticParams() {
    return resources.map((resource) => ({
        slug: resource.slug,
    }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
    const { slug } = await params;
    const resource = resources.find((s) => s.slug === slug);

    if (!resource) {
        return {
            title: "Case Study Not Found",
        };
    }

    return {
        title: resource.metadata.title,
        description: resource.metadata.description,
        keywords: resource.metadata.keywords,
        openGraph: {
            title: resource.metadata.title,
            description: resource.metadata.description,
            type: "article",
        },
    };
}

export default async function CaseStudyPage({ params }: Props) {
    const { slug } = await params;
    const resource = resources.find((s) => s.slug === slug);

    if (!resource) {
        notFound();
    }

    const jsonLd = {
        "@context": "https://schema.org",
        "@type": "Article",
        "headline": resource.title,
        "description": resource.description,
        "author": {
            "@type": "Person",
            "name": resource.author
        },
        "publisher": {
            "@type": "Organization",
            "name": "zenrev",
            "logo": {
                "@type": "ImageObject",
                "url": "https://zenrev.org/zrlogo.png"
            }
        },
        "datePublished": "2024-12-02",
    };

    return (
        <div className="min-h-screen bg-white pt-24 pb-16">
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />
            <article className="mx-auto max-w-3xl px-6 lg:px-8">
                <div className="mb-8">
                    <Link
                        href="/case-studies"
                        className="inline-flex items-center text-sm font-medium text-gray-500 hover:text-brand-blue transition-colors"
                    >
                        <ArrowLeft className="mr-2 h-4 w-4" />
                        Back to Case Studies
                    </Link>
                </div>

                <header className="mb-12 text-center">
                    <div className="mb-4 flex items-center justify-center gap-2">
                        <span className="rounded-full bg-brand-blue/10 px-3 py-1 text-xs font-medium text-brand-blue">
                            {resource.client || resource.category || 'Case Study'}
                        </span>
                        <span className="text-gray-300">•</span>
                        <span className="text-xs font-medium text-gray-500">
                            {resource.industry || resource.date || ''}
                        </span>
                    </div>
                    <h1 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-5xl mb-6">
                        {resource.title}
                    </h1>
                    <p className="text-lg leading-8 text-gray-600">
                        {resource.description}
                    </p>
                </header>

                {/* Outcome Snapshot */}
                <div className="mb-12 rounded-2xl bg-brand-blue/5 p-8 ring-1 ring-brand-blue/10">
                    <h3 className="flex items-center gap-2 text-lg font-bold text-brand-blue mb-4">
                        <CheckCircle2 className="h-5 w-5" />
                        Outcome Snapshot
                    </h3>
                    <p className="text-gray-700 leading-relaxed font-medium">
                        {resource.outcomeSnapshot}
                    </p>
                </div>

                {resource.metrics && resource.metrics.length > 0 && (
                    <div className="my-12 grid grid-cols-3 gap-4 border-y border-gray-100 py-8">
                        {resource.metrics.map((metric) => (
                            <div key={metric.label} className="text-center">
                                <div className="text-2xl font-bold text-brand-blue sm:text-3xl">
                                    {metric.value}
                                </div>
                                <div className="mt-1 text-xs font-medium text-gray-500 uppercase tracking-wide">
                                    {metric.label}
                                </div>
                            </div>
                        ))}
                    </div>
                )}

                <div
                    className="prose prose-lg prose-blue mx-auto prose-headings:font-bold prose-headings:text-gray-900 prose-p:text-gray-600 prose-blockquote:border-l-brand-blue prose-blockquote:text-gray-700 prose-blockquote:font-medium prose-blockquote:not-italic"
                    dangerouslySetInnerHTML={{ __html: resource.content || '' }}
                />

                <div className="mt-16 border-t border-gray-100 pt-12 text-center">
                    <h3 className="text-2xl font-bold text-gray-900 mb-6">
                        Ready to achieve similar results?
                    </h3>
                    <Button size="lg" asChild>
                        <Link href="https://cal.com/jayanand-j-ywq8ls/30min" target="_blank">Book Your Consultation</Link>
                    </Button>
                </div>
            </article>
        </div>
    );
}
