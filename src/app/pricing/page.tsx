"use client";

import { motion } from "framer-motion";
import { Check, X, ArrowRight, Calculator } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Footer } from "@/components/layout/footer";

const tiers = [
    {
        name: "Basic",
        price: "297",
        description: "Lead capture for solo operators.",
        features: [
            { name: "AI call answering 24/7", included: true },
            { name: "Lead capture & qualification", included: true },
            { name: "SMS notifications", included: true },
            { name: "Local number included", included: true },
            { name: "Call recordings", included: true },
            { name: "Calendar booking", included: false },
            { name: "CRM integration", included: false },
        ],
    },
    {
        name: "Standard",
        price: "499",
        featured: true,
        description: "Full automation for growing businesses.",
        features: [
            { name: "Everything in Basic", included: true },
            { name: "Direct calendar booking", included: true },
            { name: "CRM integration", included: true },
            { name: "Call transcripts", included: true },
            { name: "Customer confirmations", included: true },
            { name: "Live Call Takeover", included: true },
        ],
    },
    {
        name: "Premium",
        price: "797",
        description: "Advanced features for established companies.",
        features: [
            { name: "Everything in Standard", included: true },
            { name: "Review request campaigns", included: true },
            { name: "Win-back for unbooked leads", included: true },
            { name: "Custom workflows", included: true },
            { name: "Priority support", included: true },
            { name: "Dedicated onboarding", included: true },
        ],
    },
];

export default function PricingPage() {
    return (
        <div className="flex flex-col w-full">
            {/* Hero Section */}
            <section className="pt-24 pb-20 lg:pt-32 lg:pb-40 bg-background relative overflow-hidden">
                <div className="container mx-auto px-4 text-center relative z-10">
                    <h1 className="text-5xl md:text-7xl font-extrabold mb-8 tracking-tight">
                        Simple, Transparent <span className="text-primary">Pricing</span>
                    </h1>
                    <p className="text-xl text-muted font-normal max-w-2xl mx-auto">
                        No contracts. Cancel anytime. One job pays for itself.
                    </p>
                </div>
            </section>

            {/* Pricing Grid */}
            <section className="pb-24 lg:pb-32">
                <div className="container mx-auto px-4">
                    <div className="grid lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
                        {tiers.map((tier, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 30 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{ delay: index * 0.1 }}
                                className={`p-10 rounded-[2.5rem] border ${tier.featured
                                        ? "bg-foreground text-white border-primary shadow-2xl relative scale-105"
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
                                <p className={`${tier.featured ? "text-white/80" : "text-muted"} mb-8 font-normal h-12`}>
                                    {tier.description}
                                </p>

                                <Button
                                    variant={tier.featured ? "primary" : "secondary"}
                                    className="w-full h-14 text-lg mb-10"
                                >
                                    Book Your Intro Call
                                </Button>

                                <div className="space-y-4 mb-2">
                                    <h4 className={`text-sm font-semibold uppercase tracking-widest ${tier.featured ? 'text-white/20' : 'text-muted/40'} mb-6`}>Features</h4>
                                    {tier.features.map((f, i) => (
                                        <div key={i} className={`flex items-center gap-3 font-medium text-sm ${!f.included ? 'opacity-30' : ''}`}>
                                            {f.included ? (
                                                <Check size={18} className="text-primary shrink-0" />
                                            ) : (
                                                <X size={18} className="shrink-0" />
                                            )}
                                            {f.name}
                                        </div>
                                    ))}
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ROI Calculator Section (The Math Moment) */}
            <section className="py-24 lg:py-40 bg-foreground text-background">
                <div className="container mx-auto px-4">
                    <div className="grid lg:grid-cols-2 gap-16 items-center max-w-6xl mx-auto">
                        <div>
                            <span className="text-primary font-semibold uppercase tracking-widest text-sm mb-6 block">THE MATH</span>
                            <h2 className="text-4xl md:text-6xl font-extrabold mb-8 tracking-tight">One Job <br />Pays for Itself.</h2>
                            <div className="space-y-6 text-xl font-normal leading-relaxed opacity-90">
                                <p>Your average HVAC job is $500.</p>
                                <p>If CallLock books even one job a month that would&apos;ve gone to voicemail, you&apos;ve covered the cost.</p>
                                <p className="text-3xl font-bold text-white">Get one job and you&apos;ve made it back. Everything after that is profit.</p>
                            </div>
                        </div>

                        <div className="bg-white/5 p-12 rounded-[3.5rem] border border-white/10 shadow-3xl text-white">
                            <div className="flex items-center gap-4 mb-10">
                                <div className="w-12 h-12 bg-primary rounded-xl flex items-center justify-center text-primary-foreground">
                                    <Calculator size={24} />
                                </div>
                                <span className="text-xl font-bold tracking-tight uppercase">Break-even Analysis</span>
                            </div>
                            <div className="space-y-8">
                                <div className="flex justify-between items-center border-b border-white/10 pb-6">
                                    <span className="text-white/60 font-medium uppercase tracking-wider text-xs">Monthly Cost (Standard)</span>
                                    <span className="text-2xl font-bold tracking-tight">$499</span>
                                </div>
                                <div className="flex justify-between items-center border-b border-white/10 pb-6">
                                    <span className="text-white/60 font-medium uppercase tracking-wider text-xs">Average Job Value</span>
                                    <span className="text-2xl font-bold tracking-tight">$500</span>
                                </div>
                                <div className="flex justify-between items-center pt-4">
                                    <span className="text-primary font-semibold uppercase tracking-wider text-sm">Jobs to Break Even</span>
                                    <span className="text-6xl font-extrabold tracking-tighter text-primary">1</span>
                                </div>
                            </div>
                            <Button size="lg" className="w-full mt-12 h-16 text-xl rounded-2xl group">
                                Ready to Start Booking? <ArrowRight size={20} className="ml-2 group-hover:translate-x-1" />
                            </Button>
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    );
}
