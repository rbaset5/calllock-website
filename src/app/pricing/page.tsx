"use client";

import { motion } from "framer-motion";
import { Check, ArrowRight, Calculator } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Footer } from "@/components/layout/footer";
import { BackgroundGradient } from "@/components/ui/background-gradient";

const features = [
    "AI call answering 24/7",
    "Lead capture & qualification",
    "SMS notifications",
    "Local number included",
    "Call recordings",
    "Direct calendar booking",
    "CRM integration",
    "Call transcripts",
    "Customer confirmations",
    "Live Call Takeover",
];

export default function PricingPage() {
    return (
        <div className="flex flex-col w-full">
            {/* Hero Section */}
            <section className="pt-24 pb-20 lg:pt-32 lg:pb-28 bg-background relative overflow-hidden">
                <div className="container mx-auto px-4 text-center relative z-10">
                    <h1 className="text-5xl md:text-7xl font-extrabold mb-8 tracking-tight">
                        One Simple <span className="text-primary">Price</span>
                    </h1>
                    <p className="text-xl text-muted font-normal max-w-2xl mx-auto">
                        Everything you need. No tiers. No hidden fees. No contracts.
                    </p>
                </div>
            </section>

            {/* Single Pricing Card */}
            <section className="pb-24 lg:pb-32">
                <div className="container mx-auto px-4">
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.5 }}
                    >
                        <BackgroundGradient className="p-10 md:p-14 rounded-[2.5rem] bg-foreground text-white" containerClassName="max-w-2xl mx-auto">
                            <div className="text-center mb-10">
                                <p className="text-white/60 font-medium uppercase tracking-widest text-sm mb-4">Full access to everything</p>
                                <div className="flex items-baseline justify-center gap-1 mb-4">
                                    <span className="text-5xl font-extrabold">$</span>
                                    <span className="text-8xl font-extrabold tracking-tight">199</span>
                                    <span className="text-white/60 font-medium text-xl">/mo</span>
                                </div>
                                <p className="text-white/80 font-normal text-lg">
                                    Cancel anytime. One job pays for itself.
                                </p>
                            </div>

                            <Button
                                variant="primary"
                                className="w-full h-16 text-xl mb-12"
                            >
                                Book Your Intro Call <ArrowRight size={22} className="ml-2" />
                            </Button>

                            <div>
                                <h4 className="text-sm font-semibold uppercase tracking-widest text-white/40 mb-8 text-center">Everything included</h4>
                                <div className="grid md:grid-cols-2 gap-4">
                                    {features.map((feature, i) => (
                                        <div key={i} className="flex items-center gap-3 font-medium text-sm">
                                            <Check size={18} className="text-primary shrink-0" />
                                            {feature}
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </BackgroundGradient>
                    </motion.div>
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
                                <p>Your average HVAC, plumbing, or electrical job is $500.</p>
                                <p>At $199/month, CallLock pays for itself before you even finish one job.</p>
                                <p className="text-3xl font-bold text-white">Less than half a job covers your cost. Everything else is pure profit.</p>
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
                                    <span className="text-white/60 font-medium uppercase tracking-wider text-xs">Monthly Cost</span>
                                    <span className="text-2xl font-bold tracking-tight">$199</span>
                                </div>
                                <div className="flex justify-between items-center border-b border-white/10 pb-6">
                                    <span className="text-white/60 font-medium uppercase tracking-wider text-xs">Average Job Value</span>
                                    <span className="text-2xl font-bold tracking-tight">$500</span>
                                </div>
                                <div className="flex justify-between items-center pt-4">
                                    <span className="text-primary font-semibold uppercase tracking-wider text-sm">Jobs to Break Even</span>
                                    <span className="text-5xl font-extrabold tracking-tighter text-primary">&lt;1</span>
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
