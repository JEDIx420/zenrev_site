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
            {/* Mobile menu */}
            {mobileMenuOpen && (
                <div className="lg:hidden border-t border-gray-200/50 bg-white/95 backdrop-blur-xl">
                    <div className="space-y-1 px-6 pb-4 pt-2">
                        {navigation.map((item) => (
                            <Link
                                key={item.name}
                                href={item.href}
                                className={cn(
                                    "block rounded-lg px-4 py-3 text-base font-medium transition-all hover:bg-brand-blue/5 hover:text-brand-blue",
                                    pathname === item.href ? "bg-brand-blue/10 text-brand-blue" : "text-gray-700"
                                )}
                                onClick={() => setMobileMenuOpen(false)}
                            >
                                {item.name}
                            </Link>
                        ))}
                        <div className="mt-4 pt-4 border-t border-gray-200">
                        </div>
                    </div>
                </div>
            )}
        </header>
    )
}
