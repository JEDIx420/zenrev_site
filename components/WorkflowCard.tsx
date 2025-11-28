"use client"

import * as React from "react"
import { Download, FileJson, Activity } from "lucide-react"
import { Button } from "@/components/ui/Button"
import { motion } from "framer-motion"

interface WorkflowCardProps {
    title: string
    description: string
    jsonPath: string
    nodeCount: number
    tags: string[]
    index?: number
}

export function WorkflowCard({ title, description, jsonPath, nodeCount, tags, index = 0 }: WorkflowCardProps) {
    const [downloading, setDownloading] = React.useState(false)

    const handleDownload = async () => {
        try {
            setDownloading(true)
            const response = await fetch(jsonPath)
            const blob = await response.blob()
            const url = window.URL.createObjectURL(blob)
            const a = document.createElement("a")
            a.href = url
            a.download = `${title.replace(/\s+/g, "-").toLowerCase()}.json`
            document.body.appendChild(a)
            a.click()
            window.URL.revokeObjectURL(url)
            document.body.removeChild(a)
        } catch (err) {
            console.error("Failed to download workflow:", err)
        } finally {
            setDownloading(false)
        }
    }

    return (
        <motion.div
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1, duration: 0.5 }}
            className="group relative flex flex-col justify-between overflow-hidden rounded-2xl bg-white p-6 shadow-lg ring-1 ring-gray-200 transition-all hover:shadow-xl hover:ring-brand-blue/30"
        >
            <div>
                <div className="flex items-center justify-between">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-brand-blue/10 text-brand-blue">
                        <FileJson className="h-6 w-6" />
                    </div>
                    <div className="flex items-center gap-2 rounded-full bg-gray-50 px-3 py-1 text-xs font-medium text-gray-600 ring-1 ring-gray-200">
                        <Activity className="h-3 w-3" />
                        {nodeCount} nodes
                    </div>
                </div>

                <h3 className="mt-6 text-xl font-bold text-gray-900 group-hover:text-brand-blue transition-colors">
                    {title}
                </h3>
                <p className="mt-4 text-sm leading-6 text-gray-600">
                    {description}
                </p>

                <div className="mt-4 flex flex-wrap gap-2">
                    {tags.map((tag) => (
                        <span key={tag} className="inline-flex items-center rounded-md bg-blue-50 px-2 py-1 text-xs font-medium text-blue-700 ring-1 ring-inset ring-blue-700/10">
                            {tag}
                        </span>
                    ))}
                </div>
            </div>

            <div className="mt-8 flex gap-3">
                <Button
                    className="flex-1 gap-2 bg-gradient-to-r from-brand-blue to-blue-600 text-white shadow-md hover:shadow-2xl hover:shadow-brand-blue/40 hover:scale-[1.02] transition-all duration-500 ease-out"
                    asChild
                >
                    <a href="https://cal.com/jayanand-j-ywq8ls/30min" target="_blank" rel="noopener noreferrer">
                        <Activity className="h-4 w-4" />
                        Implement
                    </a>
                </Button>
                <Button
                    className="flex-1 gap-2"
                    onClick={handleDownload}
                    disabled={downloading}
                >
                    <Download className="h-4 w-4" />
                    Download
                </Button>
            </div>
        </motion.div>
    )
}
