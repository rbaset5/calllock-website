"use client";

import { motion } from "framer-motion";
import { RadialGlowBackground } from "@/components/ui/radial-glow-background";
import { PhoneIncoming, Cpu, MessageSquare } from "lucide-react";

const steps = [
    {
        number: "01",
        icon: <PhoneIncoming className="w-8 h-8 text-primary" />,
        title: "Call Comes In",
        description: "Customer calls your number. You're on a job, after hours, or just busy. After a few rings, CallLock takes over the live call.",
    },
    {
        number: "02",
        icon: <Cpu className="w-8 h-8 text-primary" />,
        title: "AI Takes Over",
        description: "Your AI receptionist qualifies the caller. What do you need? Where are you located? How urgent? Then books them directly onto your calendar.",
    },
    {
        number: "03",
        icon: <MessageSquare className="w-8 h-8 text-primary" />,
        title: "You Get Notified",
        description: "You receive an instant text with all the details. The job is on your calendar. The customer is waiting for you—not calling your competitor.",
    },
];

export function HowItWorks() {
    return (
        <section className="text-white relative overflow-hidden bg-black">
            <RadialGlowBackground
                backgroundColor="#000"
                glowColor="rgba(197, 165, 32, 0.25)" // Using brand primary with low opacity
                glowSize="800px"
                glowPosition="50% 200px"
                className="py-24 lg:py-32"
            >
                <div className="container mx-auto px-4 relative z-10">
                    <div className="text-center max-w-3xl mx-auto mb-20">
                        <span className="text-primary font-semibold uppercase tracking-widest text-sm mb-4 block">The Workflow</span>
                        <h2 className="text-4xl md:text-5xl font-extrabold mb-6 tracking-tight">How It Works</h2>
                    </div>

                    <div className="grid lg:grid-cols-3 gap-12 relative">
                        {/* Connector Line (Desktop) */}
                        <div className="hidden lg:block absolute top-[2.75rem] left-[15%] right-[15%] h-px bg-white/10 -z-10" />

                        {steps.map((step, index) => (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.2 }}
                                className="flex flex-col items-center text-center group"
                            >
                                <div className="w-20 h-20 bg-white/5 backdrop-blur-sm rounded-2xl flex items-center justify-center mb-8 border border-white/10 group-hover:border-primary/50 group-hover:scale-110 transition-all duration-500 relative">
                                    <div className="p-4">
                                        {step.icon}
                                    </div>
                                    <span className="absolute -top-3 -right-3 w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-semibold text-sm shadow-lg">
                                        {step.number}
                                    </span>
                                </div>
                                <h3 className="text-2xl font-semibold mb-4 tracking-tight">{step.title}</h3>
                                <p className="text-white/60 leading-relaxed font-normal max-w-xs">
                                    {step.description}
                                </p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </RadialGlowBackground>
        </section>
    );
}
