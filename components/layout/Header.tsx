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
    { name: "Contact", href: "/contact" },
]

export function Header() {
    const pathname = usePathname()
    const [mobileMenuOpen, setMobileMenuOpen] = React.useState(false)

    // Close menu when pathname changes
    React.useEffect(() => {
        setMobileMenuOpen(false)
    }, [pathname])

    return (
        <header className="sticky top-0 z-50 w-full border-b border-gray-200/50 bg-white/80 backdrop-blur-md shadow-sm">
            <nav className="mx-auto max-w-7xl px-4 h-16 flex items-center justify-between lg:px-8" aria-label="Global">
                {/* Logo */}
                <div className="flex lg:flex-1">
                    <Link href="/" className="-m-1.5 p-1.5 group">
                        <span className="text-2xl font-bold bg-gradient-to-r from-brand-dark to-brand-blue bg-clip-text text-transparent transition-all group-hover:from-brand-blue group-hover:to-brand-dark">
                            zenrev
                        </span>
                    </Link>
                </div>

                {/* Mobile Menu Button */}
                <div className="flex lg:hidden">
                    <button
                        type="button"
                        className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-gray-700 hover:text-brand-blue transition-colors focus:outline-none"
                        onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                    >
                        <span className="sr-only">Open main menu</span>
                        {mobileMenuOpen ? (
                            <X className="h-6 w-6" aria-hidden="true" />
                        ) : (
                            <Menu className="h-6 w-6" aria-hidden="true" />
                        )}
                    </button>
                </div>

                {/* Desktop Navigation Links */}
                <div className="hidden lg:flex lg:gap-x-8">
                    {navigation.map((item) => (
                        <Link
                            key={item.name}
                            href={item.href}
                            className={cn(
                                "relative text-sm font-semibold leading-6 transition-all hover:text-brand-blue whitespace-nowrap py-1.5",
                                pathname === item.href ? "text-brand-blue" : "text-gray-700"
                            )}
                        >
                            {item.name}
                            {pathname === item.href && (
                                <span className="absolute bottom-0 left-0 right-0 h-0.5 bg-gradient-to-r from-brand-blue to-brand-dark rounded-full"></span>
                            )}
                        </Link>
                    ))}
                </div>

                {/* Desktop Call to Action */}
                <div className="hidden lg:flex lg:flex-1 lg:justify-end">
                    <Button variant="outline" size="sm" asChild>
                        <Link href="/contact">Get in Touch</Link>
                    </Button>
                </div>
            </nav>

            {/* Mobile Navigation Drawer */}
            <div
                className={cn(
                    "lg:hidden fixed inset-x-0 top-16 bottom-0 z-40 bg-white/95 backdrop-blur-lg border-t border-gray-100 transition-all duration-300 ease-in-out transform origin-top",
                    mobileMenuOpen ? "opacity-100 translate-y-0 scale-y-100" : "opacity-0 -translate-y-4 scale-y-0 pointer-events-none"
                )}
            >
                <div className="px-6 py-6 space-y-6 flex flex-col h-[calc(100vh-4rem)] justify-between pb-24 overflow-y-auto">
                    <div className="space-y-4 flex flex-col">
                        {navigation.map((item) => (
                            <Link
                                key={item.name}
                                href={item.href}
                                className={cn(
                                    "text-lg font-semibold py-3 border-b border-gray-100 transition-colors whitespace-nowrap",
                                    pathname === item.href ? "text-brand-blue" : "text-gray-800 hover:text-brand-blue"
                                )}
                            >
                                {item.name}
                            </Link>
                        ))}
                    </div>
                    <div className="mt-8">
                        <Button className="w-full" asChild>
                            <Link href="/contact">Get in Touch</Link>
                        </Button>
                    </div>
                </div>
            </div>
        </header>
    )
}
