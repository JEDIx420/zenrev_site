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
    const pathname = usePathname()

    return (
        <header className="sticky top-0 z-50 w-full border-b border-gray-200/50 bg-white/90 backdrop-blur-xl shadow-sm">
            <nav className="mx-auto max-w-7xl px-4 py-3 lg:px-8 lg:py-4" aria-label="Global">
                {/* Mobile: Centered layout */}
                <div className="flex items-center justify-center gap-x-6 lg:hidden">
                    <Link href="/" className="-m-1.5 p-1.5 group">
                        <span className="text-xl font-bold bg-gradient-to-r from-brand-dark to-brand-blue bg-clip-text text-transparent transition-all group-hover:from-brand-blue group-hover:to-brand-dark">
                            zenrev
                        </span>
                    </Link>
                    <div className="flex gap-x-4">
                        {navigation.map((item) => (
                            <Link
                                key={item.name}
                                href={item.href}
                                className={cn(
                                    "relative text-xs font-semibold leading-6 transition-all hover:text-brand-blue",
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
                </div>

                {/* Desktop: Logo left, nav center, empty right */}
                <div className="hidden lg:grid lg:grid-cols-3 lg:items-center">
                    <div className="flex justify-start">
                        <Link href="/" className="-m-1.5 p-1.5 group">
                            <span className="text-2xl font-bold bg-gradient-to-r from-brand-dark to-brand-blue bg-clip-text text-transparent transition-all group-hover:from-brand-blue group-hover:to-brand-dark">
                                zenrev
                            </span>
                        </Link>
                    </div>
                    <div className="flex justify-center gap-x-10">
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
                    <div className="flex justify-end">
                        {/* Empty space for balance */}
                    </div>
                </div>
            </nav>
        </header>
    )
}
