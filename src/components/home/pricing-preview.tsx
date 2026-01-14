"use client";

import { motion } from "framer-motion";
import { Check, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

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
        <section className="py-24 lg:py-32 bg-background">
            <div className="container mx-auto px-4">
                <div className="text-center max-w-3xl mx-auto mb-16">
                    <h2 className="text-4xl md:text-5xl font-extrabold mb-6 tracking-tight">One Simple Price</h2>
                    <p className="text-xl text-muted font-normal">Everything you need. No tiers. No hidden fees.</p>
                </div>

                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    className="max-w-xl mx-auto p-10 md:p-12 rounded-[2.5rem] border bg-foreground text-white border-primary shadow-2xl"
                >
                    <div className="text-center mb-8">
                        <div className="flex items-baseline justify-center gap-1 mb-3">
                            <span className="text-4xl font-extrabold">$</span>
                            <span className="text-7xl font-extrabold tracking-tight">199</span>
                            <span className="text-white/60 font-medium text-lg">/mo</span>
                        </div>
                        <p className="text-white/70 font-normal">
                            Cancel anytime. One job pays for itself.
                        </p>
                    </div>

                    <div className="grid grid-cols-2 gap-3 mb-10">
                        {features.map((feature, i) => (
                            <div key={i} className="flex items-center gap-2 text-sm font-medium">
                                <Check size={16} className="text-primary shrink-0" />
                                {feature}
                            </div>
                        ))}
                    </div>

                    <Button
                        variant="primary"
                        className="w-full h-14 text-lg"
                    >
                        Book Your Call <ArrowRight size={20} className="ml-2" />
                    </Button>
                </motion.div>
            </div>
        </section>
    );
}
