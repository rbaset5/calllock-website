"use client";

import { motion } from "framer-motion";
import { Zap, Waves } from "lucide-react";
import { BackgroundBeamsWithCollision } from "@/components/ui/background-beams-with-collision";

export function SurgeCapture() {
    return (
        <BackgroundBeamsWithCollision className="!h-auto py-24 lg:py-32 bg-primary text-primary-foreground">
            {/* Dynamic Background Elements */}
            <motion.div
                animate={{
                    x: [0, 50, 0],
                    y: [0, -30, 0]
                }}
                transition={{ duration: 10, repeat: Infinity, ease: "linear" }}
                className="absolute top-[-20%] right-[-10%] w-[600px] h-[600px] bg-white/10 rounded-full blur-[100px] pointer-events-none"
            />

            <div className="container mx-auto px-4 relative z-10">
                <div className="grid lg:grid-cols-2 gap-16 items-center">
                    <div>
                        <span className="font-semibold uppercase tracking-widest text-sm mb-6 block opacity-80 flex items-center gap-2">
                            <Zap size={18} /> The Surge Capture Advantage
                        </span>
                        <h2 className="text-4xl md:text-5xl lg:text-6xl font-extrabold mb-8 tracking-tight">
                            When Everyone Calls at Once
                        </h2>
                        <div className="space-y-6 text-xl font-normal leading-relaxed opacity-90 max-w-xl">
                            <p>
                                Monday morning rush. First cold snap. Summer heatwave.
                            </p>
                            <p>
                                Here&apos;s the dirty secret of answering services: you aren&apos;t their only client. When a storm hits, all their HVAC clients get busy at the same time. Their staff gets overwhelmed, and your customers end up waiting in line behind another HVAC company&apos;s customers.
                            </p>
                            <p className="font-bold text-2xl lg:text-3xl mt-12 bg-foreground text-background inline-block px-4 py-2 rounded-lg">
                                With CallLock, you have your own infinite lane.
                            </p>
                        </div>

                        <p className="mt-10 text-lg font-medium border-l-4 border-foreground pl-6">
                            You capture the entire surge while competitors are stuck in a queue.
                        </p>
                    </div>

                    <div className="relative h-[400px] flex items-center justify-center">
                        {/* Infinite Lane Visualizer */}
                        <div className="relative w-full h-full bg-foreground/10 rounded-3xl border border-white/20 overflow-hidden flex items-center justify-center">
                            <div className="absolute inset-0 flex flex-col justify-around py-8">
                                {[1, 2, 3, 4, 5].map((i) => (
                                    <motion.div
                                        key={i}
                                        initial={{ x: "-100%" }}
                                        animate={{ x: "150%" }}
                                        transition={{
                                            duration: 2 + Math.random() * 2,
                                            repeat: Infinity,
                                            delay: Math.random() * 2,
                                            ease: "linear"
                                        }}
                                        className="h-2 bg-primary/40 w-32 rounded-full mx-4"
                                    />
                                ))}
                            </div>
                            <div className="relative z-10 text-center">
                                <div className="w-20 h-20 bg-foreground text-primary rounded-full flex items-center justify-center mx-auto mb-4 shadow-2xl">
                                    <Waves size={40} />
                                </div>
                                <span className="text-4xl font-bold">50+ Calls</span>
                                <p className="font-medium opacity-60">Handled Simultaneously</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </BackgroundBeamsWithCollision>
    );
}
