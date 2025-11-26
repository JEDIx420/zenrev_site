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
                        <h3 className="text-2xl font-bold tracking-tight text-gray-900">Our Story</h3>
                        <p className="mt-6 text-base leading-7 text-gray-600">
                            zenrev was born from a simple observation: B2B sales is broken. Founders and sales teams spend countless hours on manual tasks—researching prospects, copy-pasting data, and writing generic emails—instead of building relationships.
                        </p>
                        <p className="mt-6 text-base leading-7 text-gray-600">
                            We realized that with the rise of LLMs and agentic workflows, 90% of this work could be automated. Not just "automated" in the sense of a mail merge, but truly intelligent automation that thinks, researches, and adapts.
                        </p>
                        <p className="mt-6 text-base leading-7 text-gray-600">
                            Today, we help B2B SaaS companies build their own "GTM Engineering" stacks, turning outbound from a guessing game into a predictable revenue machine.
                        </p>
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
