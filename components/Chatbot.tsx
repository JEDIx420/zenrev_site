"use client"

import * as React from "react"
import { MessageSquare, X, Send, Sparkles, Bot } from "lucide-react"
import { Button } from "@/components/ui/Button"
import { cn } from "@/lib/utils"
import { AnimatePresence, motion } from "framer-motion"
import { marked } from "marked"

type Message = {
    id: string
    role: "user" | "assistant"
    content: string
}

export function Chatbot() {
    const [isOpen, setIsOpen] = React.useState(false)
    const [input, setInput] = React.useState("")
    const [messages, setMessages] = React.useState<Message[]>([])
    const [isLoading, setIsLoading] = React.useState(false)
    const messagesEndRef = React.useRef<HTMLDivElement>(null)

    React.useEffect(() => {
        if (messagesEndRef.current) {
            messagesEndRef.current.scrollIntoView({ behavior: "smooth" })
        }
    }, [messages])

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setInput(e.target.value)
    }

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        if (!input.trim() || isLoading) return

        const userMessage: Message = {
            id: Date.now().toString(),
            role: "user",
            content: input,
        }

        setMessages((prev) => [...prev, userMessage])
        setInput("")
        setIsLoading(true)

        try {
            const response = await fetch("/api/chat", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    messages: [...messages, userMessage].map((m) => ({
                        role: m.role,
                        content: m.content,
                    })),
                }),
            })

            if (!response.ok) {
                throw new Error("Failed to get response")
            }

            const reader = response.body?.getReader()
            const decoder = new TextDecoder()
            let assistantMessage = ""

            const assistantId = (Date.now() + 1).toString()
            setMessages((prev) => [
                ...prev,
                { id: assistantId, role: "assistant", content: "" },
            ])

            if (reader) {
                while (true) {
                    const { done, value } = await reader.read()
                    if (done) break

                    const chunk = decoder.decode(value)
                    assistantMessage += chunk

                    setMessages((prev) =>
                        prev.map((m) =>
                            m.id === assistantId ? { ...m, content: assistantMessage } : m
                        )
                    )
                }
            }
        } catch (error) {
            console.error("Chat error:", error)
            setMessages((prev) => [
                ...prev,
                {
                    id: Date.now().toString(),
                    role: "assistant",
                    content:
                        "Sorry, I'm having trouble connecting. Please try again or visit https://cal.com/jayanand-j-ywq8ls/30min to book a consultation.",
                },
            ])
        } finally {
            setIsLoading(false)
        }
    }

    return (
        <>
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: 20, scale: 0.95 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 20, scale: 0.95 }}
                        transition={{ duration: 0.2 }}
                        className="fixed bottom-24 right-4 z-50 w-[calc(100vw-2rem)] max-w-[350px] overflow-hidden rounded-3xl border border-gray-200 bg-white shadow-2xl sm:right-8 sm:w-[420px] sm:max-w-none"
                    >
                        {/* Header */}
                        <div className="relative overflow-hidden border-b border-gray-100 bg-gradient-to-br from-brand-blue to-brand-dark p-6">
                            <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10"></div>
                            <div className="relative flex items-center justify-between">
                                <div className="flex items-center gap-3">
                                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/20 backdrop-blur-sm">
                                        <Sparkles className="h-5 w-5 text-white" />
                                    </div>
                                    <div>
                                        <h3 className="font-semibold text-white">zenrev assistant</h3>
                                        <p className="text-xs text-blue-100">Powered by Gemini</p>
                                    </div>
                                </div>
                                <button
                                    onClick={() => setIsOpen(false)}
                                    className="rounded-lg p-2 text-white/80 transition-colors hover:bg-white/20 hover:text-white"
                                >
                                    <X className="h-5 w-5" />
                                </button>
                            </div>
                        </div>

                        {/* Messages */}
                        <div className="h-[400px] overflow-y-auto bg-gradient-to-b from-gray-50/50 to-white p-6 scrollbar-thin scrollbar-thumb-gray-200 scrollbar-track-transparent">
                            <div className="space-y-4">
                                {messages.length === 0 && (
                                    <div className="flex h-full flex-col items-center justify-center text-center">
                                        <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-brand-blue to-brand-dark shadow-lg">
                                            <MessageSquare className="h-8 w-8 text-white" />
                                        </div>
                                        <h4 className="text-lg font-semibold text-gray-900">Hi there! 👋</h4>
                                        <p className="mt-2 max-w-xs text-sm text-gray-600">
                                            Ask me about GTM automation, our agents, or how zenrev can help scale your outbound.
                                        </p>
                                        <div className="mt-6 flex flex-wrap justify-center gap-2">
                                            {["What is zenrev?", "Tell me about your agents", "How does pricing work?"].map((q) => (
                                                <button
                                                    key={q}
                                                    onClick={() => {
                                                        setInput(q)
                                                        setTimeout(() => {
                                                            const form = document.querySelector("form")
                                                            if (form) {
                                                                const event = new Event("submit", { bubbles: true, cancelable: true })
                                                                form.dispatchEvent(event)
                                                            }
                                                        }, 100)
                                                    }}
                                                    className="rounded-full bg-white px-4 py-2 text-xs font-medium text-gray-700 shadow-sm ring-1 ring-gray-200 transition-all hover:bg-brand-blue/5 hover:ring-brand-blue/50"
                                                >
                                                    {q}
                                                </button>
                                            ))}
                                        </div>
                                    </div>
                                )}
                                {messages.map((m) => (
                                    <motion.div
                                        key={m.id}
                                        initial={{ opacity: 0, y: 10 }}
                                        animate={{ opacity: 1, y: 0 }}
                                        className={cn(
                                            "mb-4 flex",
                                            m.role === "user" ? "justify-end" : "justify-start"
                                        )}
                                    >
                                        <div
                                            className={cn(
                                                "max-w-[85%] rounded-2xl px-4 py-3 text-sm shadow-sm",
                                                m.role === "user"
                                                    ? "bg-gradient-to-br from-brand-blue to-brand-dark text-white"
                                                    : "bg-white text-gray-900 ring-1 ring-gray-200"
                                            )}
                                        >
                                            {m.role === "assistant" ? (
                                                <div className="prose prose-sm max-w-none dark:prose-invert" dangerouslySetInnerHTML={{ __html: marked(m.content) }} />
                                            ) : (
                                                m.content
                                            )}
                                        </div>
                                    </motion.div>
                                ))}
                                {isLoading && messages[messages.length - 1]?.role !== "assistant" && (
                                    <motion.div
                                        initial={{ opacity: 0 }}
                                        animate={{ opacity: 1 }}
                                        className="mb-4 flex justify-start"
                                    >
                                        <div className="max-w-[85%] rounded-2xl bg-white px-4 py-3 text-sm text-gray-900 shadow-sm ring-1 ring-gray-200">
                                            <div className="flex items-center gap-1">
                                                <div className="h-2 w-2 animate-bounce rounded-full bg-brand-blue" style={{ animationDelay: "0ms" }}></div>
                                                <div className="h-2 w-2 animate-bounce rounded-full bg-brand-blue" style={{ animationDelay: "150ms" }}></div>
                                                <div className="h-2 w-2 animate-bounce rounded-full bg-brand-blue" style={{ animationDelay: "300ms" }}></div>
                                            </div>
                                        </div>
                                    </motion.div>
                                )}
                                <div ref={messagesEndRef} />
                            </div>
                        </div>

                        {/* Input */}
                        <form onSubmit={handleSubmit} className="border-t border-gray-200 bg-white p-4">
                            <div className="flex gap-2">
                                <input
                                    className="flex-1 rounded-xl border border-gray-200 bg-gray-50 px-4 py-3 text-sm placeholder:text-gray-400 focus:border-brand-blue focus:bg-white focus:outline-none focus:ring-2 focus:ring-brand-blue/20"
                                    value={input}
                                    onChange={handleInputChange}
                                    placeholder="Ask me anything..."
                                    disabled={isLoading}
                                />
                                <Button
                                    type="submit"
                                    size="sm"
                                    disabled={isLoading || !input.trim()}
                                    className="h-12 w-12 rounded-xl p-0 shadow-md hover:shadow-lg"
                                >
                                    <Send className="h-4 w-4" />
                                </Button>
                            </div>
                            <p className="mt-2 text-center text-xs text-gray-500">
                                Powered by Gemini • <a href="https://cal.com/jayanand-j-ywq8ls/30min" target="_blank" className="text-brand-blue hover:underline">Book a call</a>
                            </p>
                        </form>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* Floating Button */}
            <motion.button
                onClick={() => setIsOpen(!isOpen)}
                className="fixed bottom-6 right-6 z-50 flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-brand-blue to-brand-dark text-white shadow-2xl transition-all hover:scale-105 hover:shadow-brand-blue/50 sm:bottom-8 sm:right-8"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
            >
                <AnimatePresence mode="wait">
                    {isOpen ? (
                        <motion.div
                            key="close"
                            initial={{ rotate: -90, opacity: 0 }}
                            animate={{ rotate: 0, opacity: 1 }}
                            exit={{ rotate: 90, opacity: 0 }}
                            transition={{ duration: 0.2 }}
                        >
                            <X className="h-6 w-6" />
                        </motion.div>
                    ) : (
                        <motion.div
                            key="open"
                            initial={{ rotate: 90, opacity: 0 }}
                            animate={{ rotate: 0, opacity: 1 }}
                            exit={{ rotate: -90, opacity: 0 }}
                            transition={{ duration: 0.2 }}
                            className="relative"
                        >
                            <MessageSquare className="h-6 w-6" />
                            <span className="absolute -right-1 -top-1 flex h-3 w-3">
                                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-white opacity-75"></span>
                                <span className="relative inline-flex h-3 w-3 rounded-full bg-white"></span>
                            </span>
                        </motion.div>
                    )}
                </AnimatePresence>
            </motion.button>
        </>
    )
}
