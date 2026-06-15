"use client"

import * as React from "react"
import { useState } from "react"
import { motion, AnimatePresence } from "framer-motion"
import { Send, CheckCircle2, ArrowRight, Sparkles, Building2, User, Mail, MessageSquare } from "lucide-react"
import { Button } from "@/components/ui/Button"

export function ContactForm() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        company: "",
        enquiryType: "gtm-automation",
        message: "",
    })
    const [status, setStatus] = useState<"idle" | "submitting" | "success">("idle")

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        setStatus("submitting")
        
        // Simulate API request delay
        await new Promise((resolve) => setTimeout(resolve, 1200))
        
        setStatus("success")
    }

    return (
        <div className="w-full max-w-xl mx-auto">
            <AnimatePresence mode="wait">
                {status !== "success" ? (
                    <motion.form
                        key="contact-form"
                        onSubmit={handleSubmit}
                        initial={{ opacity: 0, y: 10 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -10 }}
                        className="space-y-6 bg-white p-8 rounded-3xl shadow-xl ring-1 ring-gray-200/50 relative overflow-hidden"
                    >
                        {/* Decorative subtle gradient top accent */}
                        <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-brand-blue to-blue-500" />
                        
                        <div>
                            <h2 className="text-2xl font-bold text-gray-900 flex items-center gap-2">
                                <Sparkles className="h-5 w-5 text-brand-blue" />
                                Send an Enquiry
                            </h2>
                            <p className="mt-1.5 text-sm text-gray-500">
                                Let us know what you're building and how we can help.
                            </p>
                        </div>

                        {/* Full Name */}
                        <div className="space-y-2">
                            <label htmlFor="name" className="text-sm font-semibold text-gray-700 block">
                                Full Name
                            </label>
                            <div className="relative rounded-lg shadow-sm">
                                <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                                    <User className="h-4 w-4 text-gray-400" aria-hidden="true" />
                                </div>
                                <input
                                    type="text"
                                    name="name"
                                    id="name"
                                    required
                                    autoComplete="name"
                                    value={formData.name}
                                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                                    className="block w-full rounded-lg border border-gray-300 py-3 pl-10 pr-4 text-gray-900 placeholder-gray-400 focus:border-brand-blue focus:ring-1 focus:ring-brand-blue sm:text-sm transition-all focus:outline-none"
                                    placeholder="Jane Doe"
                                    disabled={status === "submitting"}
                                />
                            </div>
                        </div>

                        {/* Email */}
                        <div className="space-y-2">
                            <label htmlFor="email" className="text-sm font-semibold text-gray-700 block">
                                Work Email
                            </label>
                            <div className="relative rounded-lg shadow-sm">
                                <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                                    <Mail className="h-4 w-4 text-gray-400" aria-hidden="true" />
                                </div>
                                <input
                                    type="email"
                                    name="email"
                                    id="email"
                                    required
                                    autoComplete="email"
                                    value={formData.email}
                                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                                    className="block w-full rounded-lg border border-gray-300 py-3 pl-10 pr-4 text-gray-900 placeholder-gray-400 focus:border-brand-blue focus:ring-1 focus:ring-brand-blue sm:text-sm transition-all focus:outline-none"
                                    placeholder="jane@company.com"
                                    disabled={status === "submitting"}
                                />
                            </div>
                        </div>

                        {/* Company Name */}
                        <div className="space-y-2">
                            <label htmlFor="company" className="text-sm font-semibold text-gray-700 block">
                                Company Name
                            </label>
                            <div className="relative rounded-lg shadow-sm">
                                <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3">
                                    <Building2 className="h-4 w-4 text-gray-400" aria-hidden="true" />
                                </div>
                                <input
                                    type="text"
                                    name="company"
                                    id="company"
                                    required
                                    autoComplete="organization"
                                    value={formData.company}
                                    onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                                    className="block w-full rounded-lg border border-gray-300 py-3 pl-10 pr-4 text-gray-900 placeholder-gray-400 focus:border-brand-blue focus:ring-1 focus:ring-brand-blue sm:text-sm transition-all focus:outline-none"
                                    placeholder="Acme Corp"
                                    disabled={status === "submitting"}
                                />
                            </div>
                        </div>

                        {/* Enquiry Type */}
                        <div className="space-y-2">
                            <label htmlFor="enquiryType" className="text-sm font-semibold text-gray-700 block">
                                I need help with
                            </label>
                            <select
                                id="enquiryType"
                                name="enquiryType"
                                value={formData.enquiryType}
                                onChange={(e) => setFormData({ ...formData, enquiryType: e.target.value })}
                                className="block w-full rounded-lg border border-gray-300 py-3 px-4 text-gray-900 focus:border-brand-blue focus:ring-1 focus:ring-brand-blue sm:text-sm transition-all focus:outline-none bg-white"
                                disabled={status === "submitting"}
                            >
                                <option value="gtm-automation">GTM Automation / Outbound</option>
                                <option value="clay-expert">Clay Automation & Enrichment</option>
                                <option value="ai-agents">Custom AI Agents & Workflows</option>
                                <option value="revops-automation">RevOps & CRM Engineering</option>
                                <option value="other">Other Business Automation</option>
                            </select>
                        </div>

                        {/* Message */}
                        <div className="space-y-2">
                            <label htmlFor="message" className="text-sm font-semibold text-gray-700 block">
                                Project Details / Message
                            </label>
                            <div className="relative rounded-lg shadow-sm">
                                <div className="pointer-events-none absolute top-3 left-0 flex items-center pl-3">
                                    <MessageSquare className="h-4 w-4 text-gray-400" aria-hidden="true" />
                                </div>
                                <textarea
                                    name="message"
                                    id="message"
                                    required
                                    rows={4}
                                    value={formData.message}
                                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                                    className="block w-full rounded-lg border border-gray-300 py-3 pl-10 pr-4 text-gray-900 placeholder-gray-400 focus:border-brand-blue focus:ring-1 focus:ring-brand-blue sm:text-sm transition-all focus:outline-none"
                                    placeholder="Tell us about your pipeline bottlenecks..."
                                    disabled={status === "submitting"}
                                />
                            </div>
                        </div>

                        {/* Submit Button */}
                        <Button
                            type="submit"
                            size="lg"
                            className="w-full rounded-xl bg-brand-blue text-white shadow-lg hover:bg-blue-600 transition-all font-semibold"
                            disabled={status === "submitting"}
                        >
                            {status === "submitting" ? (
                                <span className="flex items-center justify-center gap-2">
                                    <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" fill="none" viewBox="0 0 24 24">
                                        <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" />
                                        <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z" />
                                    </svg>
                                    Submitting Enquiry...
                                </span>
                            ) : (
                                <span className="flex items-center justify-center gap-2">
                                    Submit Enquiry
                                    <Send className="h-4 w-4" />
                                </span>
                            )}
                        </Button>
                    </motion.form>
                ) : (
                    <motion.div
                        key="success-card"
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        exit={{ opacity: 0, scale: 0.95 }}
                        transition={{ type: "spring", stiffness: 300, damping: 20 }}
                        className="bg-white p-10 rounded-3xl shadow-xl ring-1 ring-gray-200/50 text-center relative overflow-hidden space-y-6"
                    >
                        <div className="absolute top-0 left-0 right-0 h-1.5 bg-gradient-to-r from-emerald-500 to-teal-400" />
                        
                        <div className="flex justify-center">
                            <div className="rounded-full bg-emerald-50 p-4 ring-8 ring-emerald-50/50">
                                <CheckCircle2 className="h-12 w-12 text-emerald-500" />
                            </div>
                        </div>

                        <div className="space-y-2">
                            <h3 className="text-2xl font-bold text-gray-900">Enquiry Submitted!</h3>
                            <p className="text-gray-600 max-w-sm mx-auto">
                                Thank you, <span className="font-semibold text-gray-800">{formData.name}</span>. Your details have been successfully captured.
                            </p>
                        </div>

                        <div className="border-t border-gray-100 pt-6 text-left max-w-sm mx-auto space-y-3">
                            <div className="text-xs font-semibold text-gray-400 uppercase tracking-wider">Submitted Details</div>
                            <div className="text-sm text-gray-600 flex justify-between">
                                <span className="font-medium">Company:</span>
                                <span>{formData.company}</span>
                            </div>
                            <div className="text-sm text-gray-600 flex justify-between">
                                <span className="font-medium">Enquiry:</span>
                                <span className="capitalize">{formData.enquiryType.replace("-", " ")}</span>
                            </div>
                            <div className="text-sm text-gray-600 flex justify-between">
                                <span className="font-medium">Email:</span>
                                <span>{formData.email}</span>
                            </div>
                        </div>

                        <div className="pt-2">
                            <p className="text-xs text-gray-400">
                                We usually respond within 12 business hours.
                            </p>
                        </div>

                        <div className="pt-2">
                            <Button
                                onClick={() => setStatus("idle")}
                                variant="outline"
                                className="rounded-xl border-gray-200 text-gray-600 hover:bg-gray-50 text-sm py-2 px-6"
                            >
                                Submit Another Enquiry
                            </Button>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    )
}
