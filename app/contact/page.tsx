import { Metadata } from "next"
import { ContactForm } from "./ContactForm"
import { Sparkles, MapPin, Mail, Phone, Calendar } from "lucide-react"

export const metadata: Metadata = {
    title: "Contact Us | zenrev | GTM Engineering Studio Dubai",
    description: "Get in touch with Dubai's premier GTM engineering studio. Submit your enquiry for Clay automation, n8n workflows, and custom AI agents.",
    keywords: ["contact zenrev", "GTM engineering Dubai", "B2B sales automation UAE", "n8n developer", "Clay expert Dubai"],
}

const jsonLd = {
    "@context": "https://schema.org",
    "@type": "ContactPage",
    "name": "Contact zenrev",
    "description": "Contact Dubai's premier GTM engineering studio for B2B sales automation, Clay, and n8n workflows.",
    "url": "https://zenrev.org/contact",
    "mainEntity": {
        "@type": "Organization",
        "name": "zenrev",
        "logo": "https://zenrev.org/zrlogo.png",
        "address": {
            "@type": "PostalAddress",
            "streetAddress": "Dubai Internet City",
            "addressLocality": "Dubai",
            "addressRegion": "Dubai",
            "addressCountry": "AE"
        }
    }
}

export default function ContactPage() {
    return (
        <div className="bg-slate-50 min-h-screen">
            <script
                type="application/ld+json"
                dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
            />

            {/* Hero Section */}
            <section className="relative overflow-hidden bg-gradient-to-br from-brand-dark via-brand-blue to-brand-dark py-20 sm:py-24 text-white">
                <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-10"></div>
                <div className="relative mx-auto max-w-7xl px-6 lg:px-8">
                    <div className="mx-auto max-w-3xl text-center">
                        <div className="mb-4 inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-1.5 text-sm font-medium text-white backdrop-blur-sm">
                            <Sparkles className="h-4 w-4 text-blue-300" />
                            Get in Touch
                        </div>
                        <h1 className="text-4xl font-bold tracking-tight sm:text-5xl font-heading mb-4 lowercase">
                            let's engineer your growth.
                        </h1>
                        <p className="text-lg leading-8 text-blue-100 max-w-xl mx-auto">
                            Stop scaling headcount. Let us build automated, high-precision revenue operations and agentic systems for your B2B SaaS stack.
                        </p>
                    </div>
                </div>
            </section>

            {/* Content Section */}
            <section className="py-16 px-6 lg:px-8 max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
                
                {/* Information Column */}
                <div className="lg:col-span-5 space-y-8 lg:sticky lg:top-24">
                    <div className="space-y-4">
                        <h2 className="text-3xl font-bold text-gray-900 tracking-tight">Contact Information</h2>
                        <p className="text-gray-600 leading-relaxed">
                            Have a project in mind? Fill out the form, or reach out to us directly. Our engineers are ready to analyze your existing stack and build your automation plan.
                        </p>
                    </div>

                    <div className="space-y-6">
                        {/* Address */}
                        <div className="flex gap-4 items-start">
                            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-blue-50 text-brand-blue">
                                <MapPin className="h-5 w-5" />
                            </div>
                            <div>
                                <h3 className="font-semibold text-gray-900">Headquarters</h3>
                                <p className="text-sm text-gray-600 mt-1">Dubai Internet City, Dubai, UAE</p>
                            </div>
                        </div>

                        {/* Email */}
                        <div className="flex gap-4 items-start">
                            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-blue-50 text-brand-blue">
                                <Mail className="h-5 w-5" />
                            </div>
                            <div>
                                <h3 className="font-semibold text-gray-900">Email Us</h3>
                                <p className="text-sm text-gray-600 mt-1">
                                    <a href="mailto:hello@zenrev.org" className="hover:text-brand-blue transition-colors">
                                        hello@zenrev.org
                                    </a>
                                </p>
                            </div>
                        </div>

                        {/* Availability */}
                        <div className="flex gap-4 items-start">
                            <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-blue-50 text-brand-blue">
                                <Calendar className="h-5 w-5" />
                            </div>
                            <div>
                                <h3 className="font-semibold text-gray-900">Response Time</h3>
                                <p className="text-sm text-gray-600 mt-1">Under 12 business hours, Monday to Friday.</p>
                            </div>
                        </div>
                    </div>

                    {/* Regional Footprint */}
                    <div className="border-t border-gray-200 pt-8">
                        <div className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-3">Serving Global Hubs</div>
                        <div className="flex flex-wrap gap-2">
                            {["Dubai", "Riyadh", "Bangalore", "San Francisco"].map((city) => (
                                <span key={city} className="inline-flex items-center rounded-md bg-gray-100 px-2.5 py-1 text-xs font-medium text-gray-600">
                                    {city}
                                </span>
                            ))}
                        </div>
                    </div>
                </div>

                {/* Form Column */}
                <div className="lg:col-span-7">
                    <ContactForm />
                </div>
            </section>
        </div>
    )
}
