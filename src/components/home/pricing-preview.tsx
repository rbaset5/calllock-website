"use client";

import { Check, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { RadialGlowBackground } from "@/components/ui/radial-glow-background";

const features = [
    "AI call answering 24/7",
    "Lead capture & qualification",
    "SMS notifications",
    "Local number included",
    "Direct calendar booking",
    "CRM integration",
];

export function PricingPreview() {
    return (
        <RadialGlowBackground
            className="py-16 md:py-32"
            backgroundColor="#0a0a0a"
            glowColor="rgba(197, 165, 32, 0.25)"
            glowSize="600px"
            glowPosition="50% 50%"
        >
            <div className="mx-auto max-w-5xl px-6">
                <div className="mx-auto max-w-2xl text-center">
                    <h2 className="text-balance text-3xl font-bold md:text-4xl lg:text-5xl text-white">
                        One Simple Price
                    </h2>
                    <p className="mt-4 text-lg text-white/70">
                        Everything you need. No tiers. No hidden fees.
                    </p>
                </div>

                <div className="mt-8 md:mt-20">
                    <div className="relative rounded-3xl border border-white/10 bg-zinc-900 shadow-2xl shadow-zinc-950/50">
                        <div className="grid items-center gap-12 divide-y divide-white/10 p-12 md:grid-cols-2 md:divide-x md:divide-y-0">
                            {/* Left Column: Price and CTA */}
                            <div className="pb-12 text-center md:pb-0 md:pr-12">
                                <h3 className="text-2xl font-semibold text-white">CallLock Pro</h3>

                                <span className="mb-6 mt-12 inline-block text-6xl font-bold text-white">
                                    <span className="text-4xl">$</span>297
                                    <span className="text-xl font-normal text-white/60">/mo</span>
                                </span>

                                <div className="flex justify-center">
                                    <Button
                                        variant="primary"
                                        size="lg"
                                        className="w-full max-w-xs"
                                    >
                                        Book Your Call <ArrowRight size={20} className="ml-2" />
                                    </Button>
                                </div>

                                <p className="text-muted-foreground mt-8 text-sm">
                                    Cancel anytime. One job pays for itself.
                                </p>
                            </div>

                            {/* Right Column: Features */}
                            <div className="relative pt-12 md:pt-0 md:pl-12">
                                <ul role="list" className="space-y-4">
                                    {features.map((feature, index) => (
                                        <li
                                            key={index}
                                            className="flex items-center gap-3"
                                        >
                                            <Check className="size-4 text-primary shrink-0" />
                                            <span className="text-white">{feature}</span>
                                        </li>
                                    ))}
                                </ul>

                                <p className="text-muted-foreground mt-8 text-sm">
                                    Everything included to capture leads, qualify callers, and book appointments automatically. No setup fees, no contracts.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </RadialGlowBackground>
    );
}
