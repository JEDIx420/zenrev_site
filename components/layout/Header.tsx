"use client"

import * as React from "react"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { Menu, X } from "lucide-react"
import { Button } from "@/components/ui/Button"
import { cn } from "@/lib/utils"

const navigation = [
    { name: "Home", href: "/" },
    { name: "Services", href: "/services" },
    { name: "Agents", href: "/agents" },
    { name: "Case Studies", href: "/case-studies" },
]

export function Header() {
    const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false)
    const pathname = usePathname()

    return (
        <header className="sticky top-0 z-50 w-full border-b border-gray-200/50 bg-white/90 backdrop-blur-xl shadow-sm">
            <nav className="mx-auto flex max-w-7xl items-center justify-between px-6 py-4 lg:px-8" aria-label="Global">
                <div className="flex lg:flex-1">
                    <Link href="/" className="-m-1.5 p-1.5 group">
                        <span className="text-2xl font-bold bg-gradient-to-r from-brand-dark to-brand-blue bg-clip-text text-transparent transition-all group-hover:from-brand-blue group-hover:to-brand-dark">
                            zenrev
                        </span>
                    </Link>
                </div>
                <div className="flex lg:hidden">
                    <button
                        type="button"
                        className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700 hover:bg-gray-100 transition-colors"
                        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                    >
                        <span className="sr-only">Open main menu</span>
                        {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                    </button>
                </div>
                <div className="hidden lg:flex lg:gap-x-10">
                    {navigation.map((item) => (
                        <Link
                            key={item.name}
                            href={item.href}
                            className={cn(
                                "relative text-sm font-semibold leading-6 transition-all hover:text-brand-blue",
                                pathname === item.href ? "text-brand-blue" : "text-gray-700"
                            )}
                        >
                            {item.name}
                            {pathname === item.href && (
                                <span className="absolute -bottom-1 left-0 right-0 h-0.5 bg-gradient-to-r from-brand-blue to-brand-dark rounded-full"></span>
                            )}
                        </Link>
                    ))}
                </div>
                <div className="hidden lg:flex lg:flex-1 lg:items-center lg:justify-end lg:gap-4">
                </div>
            </nav>
            {/* Mobile menu overlay */}
            {mobileMenuOpen && (
                <div className="fixed inset-0 z-50 lg:hidden">
                    {/* Backdrop */}
                    <div
                        className="fixed inset-0 bg-black/20 backdrop-blur-sm"
                        onClick={() => setMobileMenuOpen(false)}
                    />

                    {/* Menu Panel */}
                    <div className="fixed inset-y-0 right-0 w-full max-w-sm bg-white p-6 shadow-xl ring-1 ring-gray-900/10 sm:max-w-sm sm:ring-1 sm:ring-gray-900/10">
                        <div className="flex items-center justify-between">
                            <Link href="/" className="-m-1.5 p-1.5" onClick={() => setMobileMenuOpen(false)}>
                                <span className="text-2xl font-bold bg-gradient-to-r from-brand-dark to-brand-blue bg-clip-text text-transparent">
                                    zenrev
                                </span>
                            </Link>
                            <button
                                type="button"
                                className="-m-2.5 rounded-md p-2.5 text-gray-700 hover:bg-gray-100"
                                onClick={() => setMobileMenuOpen(false)}
                            >
                                <span className="sr-only">Close menu</span>
                                <X className="h-6 w-6" />
                            </button>
                        </div>
                        <div className="mt-6 flow-root">
                            <div className="-my-6 divide-y divide-gray-500/10">
                                <div className="space-y-2 py-6">
                                    {navigation.map((item) => (
                                        <Link
                                            key={item.name}
                                            href={item.href}
                                            className={cn(
                                                "-mx-3 block rounded-lg px-3 py-4 text-base font-semibold leading-7 hover:bg-gray-50",
                                                pathname === item.href ? "text-brand-blue bg-blue-50" : "text-gray-900"
                                            )}
                                            onClick={() => setMobileMenuOpen(false)}
                                        >
                                            {item.name}
                                        </Link>
                                    ))}
                                </div>
                                <div className="py-6">
                                    <Button className="w-full justify-center" asChild>
                                        <Link href="https://cal.com/jayanand-j-ywq8ls/30min" target="_blank" onClick={() => setMobileMenuOpen(false)}>
                                            Book Consultation
                                        </Link>
                                    </Button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </header>
    )
}
