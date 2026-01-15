"use client";

import { motion } from "framer-motion";
import { Phone } from "lucide-react";

export function TryDemo() {
    return (
        <section className="py-24 lg:py-32">
            <div className="container mx-auto px-4">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="bg-foreground text-white rounded-[2.5rem] p-12 lg:p-20 text-center relative overflow-hidden max-w-4xl mx-auto"
                >
                    <motion.div
                        initial={{ scale: 0.8, opacity: 0 }}
                        whileInView={{ scale: 1, opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-primary/20 mb-8"
                    >
                        <Phone size={36} className="text-primary" />
                    </motion.div>

                    <h2 className="text-3xl md:text-5xl font-bold mb-4 tracking-tight">
                        Try CallLock Right Now
                    </h2>
                    <p className="text-lg md:text-xl text-white/60 mb-10 max-w-xl mx-auto">
                        Call our demo line and experience our AI receptionist firsthand. See exactly how your customers will be greeted.
                    </p>

                    <a
                        href="tel:+13126463816"
                        className="inline-block group"
                    >
                        <div className="bg-card/10 hover:bg-card/20 border border-primary/30 hover:border-primary/50 rounded-2xl px-10 py-6 transition-all duration-300 group-hover:scale-105">
                            <span className="text-3xl md:text-4xl lg:text-5xl font-bold text-primary tracking-wide">
                                (312) 646-3816
                            </span>
                        </div>
                    </a>

                    <p className="text-white/40 text-sm mt-6">
                        Tap to call on mobile
                    </p>
                </motion.div>
            </div>
        </section>
    );
}
