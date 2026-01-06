"use client";

import { motion } from "framer-motion";
import { Check, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";

const tiers = [
    {
        name: "Basic",
        price: "297",
        description: "Lead capture for solo operators.",
        features: ["AI call answering", "Lead capture & qualification", "SMS notifications", "Local number included"],
    },
    {
        name: "Standard",
        price: "499",
        featured: true,
        description: "Full automation for growing businesses.",
        features: ["Everything in Basic", "Direct calendar booking", "CRM sync", "Call recordings & transcripts"],
    },
    {
        name: "Premium",
        price: "797",
        description: "Advanced features for established companies.",
        features: ["Everything in Standard", "Review requests", "Win-back campaigns", "Custom workflows", "Priority support"],
    },
];

export function PricingPreview() {
    return (
        <section className="py-24 lg:py-32 bg-background">
            <div className="container mx-auto px-4">
                <div className="text-center max-w-3xl mx-auto mb-20">
                    <h2 className="text-4xl md:text-5xl font-extrabold mb-6 tracking-tight">Simple, Transparent Pricing</h2>
                    <p className="text-xl text-muted font-normal">No contracts. Cancel anytime.</p>
                </div>

                <div className="grid lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
                    {tiers.map((tier, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, scale: 0.95 }}
                            whileInView={{ opacity: 1, scale: 1 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className={`p-10 rounded-[2.5rem] border ${tier.featured
                                    ? "bg-foreground text-white border-primary shadow-2xl relative"
                                    : "bg-card border-border shadow-sm text-foreground"
                                }`}
                        >
                            {tier.featured && (
                                <div className="absolute top-0 right-10 -translate-y-1/2 bg-primary text-primary-foreground px-4 py-1.5 rounded-full text-xs font-semibold uppercase tracking-widest">
                                    Most Popular
                                </div>
                            )}
                            <h3 className="text-2xl font-bold mb-2">{tier.name}</h3>
                            <div className="flex items-baseline gap-1 mb-6">
                                <span className="text-4xl font-extrabold">$</span>
                                <span className="text-6xl font-extrabold tracking-tight">{tier.price}</span>
                                <span className={`${tier.featured ? "text-white/60" : "text-muted"} font-medium`}>/mo</span>
                            </div>
                            <p className={`${tier.featured ? "text-white/80" : "text-muted"} mb-8 font-normal`}>
                                {tier.description}
                            </p>

                            <ul className="space-y-4 mb-10">
                                {tier.features.map((feature, i) => (
                                    <li key={i} className="flex gap-3 text-sm font-medium">
                                        <Check size={18} className="text-primary shrink-0" />
                                        {feature}
                                    </li>
                                ))}
                            </ul>

                            <Button
                                variant={tier.featured ? "primary" : "secondary"}
                                className="w-full h-14 text-lg"
                            >
                                Book Your Call <ArrowRight size={20} className="ml-2" />
                            </Button>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
