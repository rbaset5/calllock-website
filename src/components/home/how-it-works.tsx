"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const steps = [
    {
        number: "01",
        image: "/icons/call-comes-in.png",
        title: "Call Comes In",
        description: "Customer calls your number. You're on a job, after hours, or just busy. After a few rings, CallLock takes over the live call.",
    },
    {
        number: "02",
        image: "/icons/ai-takes-over.png",
        title: "AI Takes Over",
        description: "Your AI receptionist qualifies the caller. What do you need? Where are you located? How urgent? Then books them directly onto your calendar.",
    },
    {
        number: "03",
        image: "/icons/you-get-notified.png",
        title: "You Get Notified",
        description: "You receive an instant text with all the details. The job is on your calendar. The customer is waiting for you—not calling your competitor.",
    },
];

export function HowItWorks() {
    return (
        <section className="py-24 lg:py-32 bg-foreground text-white relative overflow-hidden">
            {/* Subtle background pattern */}
            <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: 'radial-gradient(#fff 1px, transparent 1px)', backgroundSize: '40px 40px' }} />

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
                            <div className="w-20 h-20 bg-background rounded-2xl flex items-center justify-center mb-8 border border-white/10 group-hover:border-primary/50 group-hover:scale-110 transition-all duration-500 relative">
                                <div className="p-4">
                                    <Image
                                        src={step.image}
                                        alt={step.title}
                                        width={48}
                                        height={48}
                                        className="object-contain"
                                    />
                                </div>
                                <span className="absolute -top-3 -right-3 w-8 h-8 bg-primary text-primary-foreground rounded-full flex items-center justify-center font-semibold text-sm">
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
        </section>
    );
}
