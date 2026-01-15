"use client";

import Link from "next/link";
import { Lock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { useState, useEffect } from "react";

export function Navigation() {
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 10);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <nav
            className={cn(
                "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
                isScrolled ? "py-3 glass shadow-sm" : "py-6 bg-transparent"
            )}
        >
            <div className="container mx-auto px-4 flex items-center justify-between">
                <Link href="/" className="flex items-center gap-2 group">
                    <div className="w-10 h-10 bg-linear-to-br from-[#E0CD67] via-[#C5A520] to-[#8E7618] rounded-xl flex items-center justify-center text-white shadow-lg shadow-primary/20 group-hover:rotate-12 transition-all duration-300">
                        <Lock size={20} fill="currentColor" />
                    </div>
                    <span className="text-xl font-semibold tracking-tight text-foreground">
                        CallLock
                    </span>
                </Link>

                <div className="hidden md:flex items-center gap-8">
                    <Link href="/" className="text-sm font-medium text-foreground hover:text-primary transition-colors">
                        Home
                    </Link>
                    <Link href="/how-it-works" className="text-sm font-medium text-foreground hover:text-primary transition-colors">
                        How It Works
                    </Link>
                    <Link href="/features" className="text-sm font-medium text-foreground hover:text-primary transition-colors">
                        Features
                    </Link>
                    <Link href="/pricing" className="text-sm font-medium text-foreground hover:text-primary transition-colors">
                        Pricing
                    </Link>
                </div>

                <div className="flex items-center gap-4">
                    <Link href="https://app.calllock.co/login">
                        <Button variant="ghost" className="hidden sm:inline-flex">
                            Login
                        </Button>
                    </Link>
                    <Link href="/book">
                        <Button>Book Your Intro Call</Button>
                    </Link>
                </div>
            </div>
        </nav>
    );
}
