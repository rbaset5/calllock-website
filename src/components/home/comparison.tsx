"use client";

import { motion } from "framer-motion";
import { XCircle, CheckCircle2, Lock } from "lucide-react";

const withoutList = [
    "Missed calls go to voicemail—customers hang up and call someone who answers",
    "Phone tag delays booking by hours or days",
    "Monday morning rush? Someone's always waiting on hold",
    "After-hours calls go straight to your competitor",
];

const withList = [
    "Every call answered instantly—customer stays on the line",
    "Jobs booked on first contact, no callback needed",
    "Handle 50 calls simultaneously, no one waits",
    "24/7 coverage—capture jobs while you sleep",
];

export function Comparison() {
    return (
        <section className="py-24 lg:py-32 bg-background-light dark:bg-background">
            <div className="container mx-auto px-4">
                <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
                    {/* Without CallLock */}
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="p-10 lg:p-14 rounded-[2rem] bg-white dark:bg-card border-b-8 border-red-500/50 shadow-xl"
                    >
                        <h3 className="text-3xl font-bold mb-10 text-red-500 flex items-center gap-3">
                            <XCircle size={32} /> Without CallLock
                        </h3>
                        <ul className="space-y-6">
                            {withoutList.map((item, i) => (
                                <li key={i} className="flex gap-4 text-muted font-normal leading-relaxed">
                                    <div className="w-1.5 h-1.5 bg-red-400 rounded-full mt-2.5 shrink-0" />
                                    {item}
                                </li>
                            ))}
                        </ul>
                    </motion.div>

                    {/* With CallLock */}
                    <motion.div
                        initial={{ opacity: 0, x: 20 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        className="p-10 lg:p-14 rounded-[2rem] bg-foreground text-white border-b-8 border-primary/50 shadow-2xl relative overflow-hidden"
                    >
                        {/* Background branding */}
                        <div className="absolute top-0 right-0 p-8 opacity-10">
                            <Lock size={120} />
                        </div>

                        <h3 className="text-3xl font-bold mb-10 text-primary flex items-center gap-3 relative z-10">
                            <CheckCircle2 size={32} /> With CallLock
                        </h3>
                        <ul className="space-y-6 relative z-10">
                            {withList.map((item, i) => (
                                <li key={i} className="flex gap-4 text-white/80 font-normal leading-relaxed">
                                    <CheckCircle2 size={20} className="text-primary shrink-0 mt-1" />
                                    {item}
                                </li>
                            ))}
                        </ul>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
