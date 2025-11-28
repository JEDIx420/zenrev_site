"use client"

import * as React from "react"
// import { pipeline } from "@xenova/transformers" // Removed static import
import { Search, Loader2 } from "lucide-react"
import { WorkflowCard } from "@/components/WorkflowCard"
import { motion, AnimatePresence } from "framer-motion"

interface Workflow {
    title: string
    description: string
    jsonPath: string
    nodeCount: number
    tags: string[]
    embedding?: number[]
}

interface SearchIndex {
    model: string
    generatedAt: string
    items: Workflow[]
}

export function AgentSearch() {
    const [query, setQuery] = React.useState("")
    const [results, setResults] = React.useState<Workflow[]>([])
    const [isSearching, setIsSearching] = React.useState(false)
    const [isLoadingModel, setIsLoadingModel] = React.useState(false)
    const [searchIndex, setSearchIndex] = React.useState<SearchIndex | null>(null)
    const [extractor, setExtractor] = React.useState<any>(null)

    // Load search index on mount
    React.useEffect(() => {
        fetch("/search-index.json")
            .then((res) => res.json())
            .then((data) => {
                setSearchIndex(data)
                setResults(data.items)
            })
            .catch((err) => console.error("Failed to load search index:", err))
    }, [])

    const [progress, setProgress] = React.useState(0)
    const [loadingStatus, setLoadingStatus] = React.useState("")

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

    // Cosine similarity helper
    function cosineSimilarity(a: number[], b: number[]) {
        return a.reduce((acc, val, i) => acc + val * b[i], 0)
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
                            placeholder={isLoadingModel ? "Initializing AI model..." : "Search agents (e.g., 'linkedin automation' or 'crypto bot')..."}
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
            <div className="grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">
                <AnimatePresence mode="popLayout">
                    {results.map((workflow, index) => (
                        <WorkflowCard
                            key={`${workflow.title}-${index}`}
                            {...workflow}
                            index={index}
                        />
                    ))}
                </AnimatePresence>
            </div>

            {results.length === 0 && (
                <div className="text-center py-12">
                    <p className="text-gray-500">No agents found matching your query.</p>
                </div>
            )}
        </div>
    )
}
