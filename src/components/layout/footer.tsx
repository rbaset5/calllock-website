import Link from "next/link";
import { Lock } from "lucide-react";

export function Footer() {
    return (
        <footer className="bg-background border-t border-border pt-24 pb-12">
            <div className="container mx-auto px-4">
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-20">
                    <div className="lg:col-span-1">
                        <Link href="/" className="flex items-center gap-2 mb-6 group">
                            <div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center text-primary-foreground group-hover:rotate-12 transition-transform">
                                <Lock size={20} />
                            </div>
                            <span className="text-xl font-semibold tracking-tight">
                                CallLock
                            </span>
                        </Link>
                        <p className="text-muted font-normal leading-relaxed max-w-xs">
                            Your AI receptionist answers when you can&apos;t. Designed specifically for modern HVAC, plumbing, and electrical contractors.
                        </p>
                    </div>

                    <div>
                        <h4 className="font-semibold uppercase tracking-widest text-sm mb-6">Product</h4>
                        <ul className="space-y-4">
                            <li><Link href="/how-it-works" className="text-muted hover:text-primary font-normal transition-colors">How It Works</Link></li>
                            <li><Link href="/features" className="text-muted hover:text-primary font-normal transition-colors">Features</Link></li>
                            <li><Link href="/pricing" className="text-muted hover:text-primary font-normal transition-colors">Pricing</Link></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="font-semibold uppercase tracking-widest text-sm mb-6">Company</h4>
                        <ul className="space-y-4">
                            <li><Link href="/about" className="text-muted hover:text-primary font-normal transition-colors">About Us</Link></li>
                            <li><Link href="/contact" className="text-muted hover:text-primary font-normal transition-colors">Contact</Link></li>
                        </ul>
                    </div>

                    <div>
                        <h4 className="font-semibold uppercase tracking-widest text-sm mb-6">Legal</h4>
                        <ul className="space-y-4">
                            <li><Link href="/privacy" className="text-muted hover:text-primary font-normal transition-colors">Privacy Policy</Link></li>
                            <li><Link href="/terms" className="text-muted hover:text-primary font-normal transition-colors">Terms of Service</Link></li>
                        </ul>
                    </div>
                </div>

                <div className="border-t border-border pt-12 flex flex-col md:flex-row justify-between items-center gap-6">
                    <p className="text-muted font-medium text-sm">
                        © 2026 CallLock. All rights reserved.
                    </p>
                    <div className="flex gap-8">
                        <span className="text-muted text-xs font-semibold uppercase tracking-widest">Live in <span className="text-primary">30 minutes</span></span>
                    </div>
                </div>
            </div>
        </footer>
    );
}
