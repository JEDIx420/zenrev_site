"use client"

import * as React from "react"
import { Search, Loader2, ArrowRight } from "lucide-react"
import { motion, AnimatePresence } from "framer-motion"
import Link from "next/link"
import { Button } from "@/components/ui/Button"

interface Resource {
    slug: string
    title: string
    description: string
    client: string
    industry: string
    metrics: { label: string; value: string }[]
    quote: string
    author: string
    outcomeSnapshot: string
    metadata: {
        title: string
        description: string
        keywords: string[]
    }
    embedding?: number[]
}

interface SearchIndex {
    model: string
    generatedAt: string
    items: Resource[]
}

export function ResourceSearch() {
    const [query, setQuery] = React.useState("")
    const [results, setResults] = React.useState<Resource[]>([])
    const [isSearching, setIsSearching] = React.useState(false)
    const [isLoadingModel, setIsLoadingModel] = React.useState(false)
    const [searchIndex, setSearchIndex] = React.useState<SearchIndex | null>(null)
    const [extractor, setExtractor] = React.useState<any>(null)
    const [progress, setProgress] = React.useState(0)
    const [loadingStatus, setLoadingStatus] = React.useState("")

    // Load search index on mount
    React.useEffect(() => {
        fetch("/resources-index.json")
            .then((res) => res.json())
            .then((data) => {
                setSearchIndex(data)
                setResults(data.items)
            })
            .catch((err) => console.error("Failed to load search index:", err))
    }, [])

    // Initialize model when user focuses search or starts typing
    const initModel = async () => {
        if (extractor || isLoadingModel) return
        setIsLoadingModel(true)
        try {
            // Use new Function to bypass Turbopack's static analysis of dynamic imports
            const Transformers = await new Function('return import("https://cdn.jsdelivr.net/npm/@xenova/transformers@2.17.2")')()
            const { pipeline, env } = Transformers

            // Configure environment for browser
            env.allowLocalModels = false
            env.useBrowserCache = true

            const pipe = await pipeline("feature-extraction", "Xenova/all-MiniLM-L6-v2", {
                progress_callback: (data: any) => {
                    if (data.status === 'progress') {
                        setProgress(data.progress)
                        setLoadingStatus(`Loading model... ${Math.round(data.progress)}%`)
                    } else if (data.status === 'initiate') {
                        setLoadingStatus("Downloading model...")
                        setProgress(0)
                    } else if (data.status === 'done') {
                        setLoadingStatus("Model ready!")
                        setProgress(100)
                    }
                }
            })
            setExtractor(() => pipe)
        } catch (err) {
            console.error("Failed to load model:", err)
            setLoadingStatus("Failed to load model")
        } finally {
            setIsLoadingModel(false)
            setTimeout(() => setProgress(0), 1000) // Reset progress after delay
        }
    }

    // Perform semantic search
    const handleSearch = async (searchQuery: string) => {
        setQuery(searchQuery)

        if (!searchQuery.trim()) {
            if (searchIndex) setResults(searchIndex.items)
            return
        }

        if (!extractor) {
            await initModel()
        }

        if (!extractor || !searchIndex) return

        setIsSearching(true)
        try {
            // Generate embedding for query
            const output = await extractor(searchQuery, { pooling: "mean", normalize: true })
            const queryEmbedding = Array.from(output.data) as number[]

            // Calculate cosine similarity
            const scoredResults = searchIndex.items.map((item) => {
                if (!item.embedding) return { ...item, score: 0 }

                // Cosine similarity
                const score = item.embedding.reduce((acc, val, i) => acc + val * queryEmbedding[i], 0)
                return { ...item, score }
            })

            // Sort by score and filter
            const filtered = scoredResults
                .sort((a, b) => b.score - a.score)
                .filter((item) => item.score > 0.25) // Threshold

            setResults(filtered)
        } catch (err) {
            console.error("Search failed:", err)
        } finally {
            setIsSearching(false)
        }
    }

    return (
        <div className="w-full">
            {/* Search Bar */}
            <div className="mx-auto mb-12 max-w-2xl">
                <div className="relative flex gap-2">
                    <div className="relative flex-1">
                        <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-4">
                            {isSearching || isLoadingModel ? (
                                <Loader2 className="h-5 w-5 animate-spin text-gray-400" />
                            ) : (
                                <Search className="h-5 w-5 text-gray-400" />
                            )}
                        </div>
                        <input
                            type="text"
                            className="block w-full rounded-2xl border-0 py-4 pl-12 pr-4 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-brand-blue sm:text-sm sm:leading-6 disabled:bg-gray-50 disabled:text-gray-400"
                            placeholder={isLoadingModel ? "Initializing AI model..." : "Search resources (e.g., 'efficiency', 'AI sales', 'outreach')..."}
                            value={query}
                            onChange={(e) => setQuery(e.target.value)}
                            onKeyDown={(e) => e.key === "Enter" && !isLoadingModel && handleSearch(query)}
                            onFocus={initModel}
                            disabled={isLoadingModel}
                        />
                    </div>
                    <button
                        onClick={() => handleSearch(query)}
                        className="rounded-2xl bg-brand-blue px-6 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-blue-600 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-brand-blue"
                    >
                        Search
                    </button>
                </div>
                <div className="mt-2 flex flex-col items-center gap-2 text-xs text-gray-500">
                    <div className="flex items-center gap-2">
                        <span>Powered by semantic search</span>
                        {isLoadingModel && (
                            <span className="animate-pulse text-brand-blue font-medium">• {loadingStatus}</span>
                        )}
                    </div>
                    {isLoadingModel && (
                        <div className="h-1 w-full max-w-[200px] overflow-hidden rounded-full bg-gray-100">
                            <motion.div
                                className="h-full bg-brand-blue"
                                initial={{ width: 0 }}
                                animate={{ width: `${progress}%` }}
                                transition={{ duration: 0.2 }}
                            />
                        </div>
                    )}
                </div>
            </div>

            {/* Results Grid */}
            <div className="mx-auto grid max-w-2xl grid-cols-1 gap-x-8 gap-y-12 lg:mx-0 lg:max-w-none lg:grid-cols-3">
                <AnimatePresence mode="popLayout">
                    {results.map((study, index) => (
                        <motion.article
                            key={study.slug}
                            layout
                            initial={{ opacity: 0, scale: 0.9 }}
                            animate={{ opacity: 1, scale: 1 }}
                            exit={{ opacity: 0, scale: 0.9 }}
                            transition={{ duration: 0.3 }}
                            className="flex flex-col items-start justify-between rounded-3xl bg-white p-8 shadow-lg ring-1 ring-gray-200 transition-all hover:shadow-xl hover:ring-brand-blue/30"
                        >
                            <div className="w-full">
                                <div className="flex items-center gap-x-4 text-xs">
                                    <span className="inline-flex items-center rounded-full bg-blue-50 px-2 py-1 text-xs font-medium text-brand-blue ring-1 ring-inset ring-blue-700/10">
                                        {study.industry}
                                    </span>
                                </div>
                                <h3 className="mt-3 text-lg font-bold leading-6 text-gray-900">
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
                                    <Link href={`/resources/${study.slug}`}>
                                        Read Full Story <ArrowRight className="ml-2 h-4 w-4" />
                                    </Link>
                                </Button>
                            </div>
                        </motion.article>
                    ))}
                </AnimatePresence>
            </div>

            {results.length === 0 && (
                <div className="text-center py-12">
                    <p className="text-gray-500">No resources found matching your query.</p>
                </div>
            )}
        </div>
    )
}
