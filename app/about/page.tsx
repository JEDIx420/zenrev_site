import { Button } from "@/components/ui/Button"
import Link from "next/link"

export default function AboutPage() {
    return (
        <div className="bg-white py-24 sm:py-32">
            <div className="mx-auto max-w-7xl px-6 lg:px-8">
                <div className="mx-auto max-w-2xl lg:mx-0">
                    <h2 className="text-3xl font-bold tracking-tight text-brand-dark sm:text-4xl font-heading">About zenrev</h2>
                    <p className="mt-6 text-lg leading-8 text-gray-600">
                        We are engineers, data scientists, and GTM strategists obsessed with efficiency.
                    </p>
                </div>
                <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-16 lg:mx-0 lg:max-w-none lg:grid-cols-2">
                    <div>
                        <h3 className="text-2xl font-bold tracking-tight text-gray-900">Our Identity</h3>
                        <p className="mt-6 text-base leading-7 text-gray-600">
                            <strong>zenrev is a leading GTM engineering studio.</strong> We provide Clay automation, n8n workflow building, and agentic AI development for B2B SaaS companies.
                        </p>
                        <p className="mt-6 text-base leading-7 text-gray-600">
                            Our founder is a GTM engineer specializing in B2B SaaS. We don't just run campaigns; we build the underlying infrastructure that powers your revenue engine.
                        </p>
                        <p className="mt-6 text-base leading-7 text-gray-600">
                            We are experts in:
                        </p>
                        <ul className="mt-4 list-disc pl-5 text-base leading-7 text-gray-600">
                            <li><strong>Clay Automation:</strong> Waterfall enrichment and complex table architecture.</li>
                            <li><strong>n8n Development:</strong> Self-hosted workflow orchestration and API integration.</li>
                            <li><strong>AI Agents:</strong> Custom LLM agents for research and outbound personalization.</li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="text-2xl font-bold tracking-tight text-gray-900">Philosophy</h3>
                        <ul className="mt-6 space-y-8 text-base leading-7 text-gray-600">
                            <li className="flex gap-x-3">
                                <strong className="font-semibold text-brand-blue">Precision &gt; Power.</strong>
                                <span>We don't believe in "spray and pray". We believe in finding the *right* 50 prospects and crafting the perfect message for them.</span>
                            </li>
                            <li className="flex gap-x-3">
                                <strong className="font-semibold text-brand-blue">Speed &gt; Scale.</strong>
                                <span>The faster you can iterate on your messaging and targeting, the faster you find product-market fit. Scale comes later.</span>
                            </li>
                            <li className="flex gap-x-3">
                                <strong className="font-semibold text-brand-blue">Entropy is the enemy.</strong>
                                <span>Data decays. Processes break. We build systems that are self-healing and constantly enriched to fight entropy.</span>
                            </li>
                        </ul>
                        <div className="mt-10">
                            <Button asChild>
                                <Link href="/contact">Work With Us</Link>
                            </Button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
