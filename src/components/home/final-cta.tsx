"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { CheckCircle2, ArrowRight } from "lucide-react";

export function FinalCTA() {
    return (
        <section className="py-24 lg:py-40 container mx-auto px-4">
            <motion.div
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                className="bg-foreground text-white rounded-[3rem] p-12 lg:p-24 text-center relative overflow-hidden"
            >
                {/* Dynamic Background */}
                <div className="absolute top-0 left-0 w-full h-full opacity-10 pointer-events-none" style={{ backgroundImage: 'radial-gradient(circle at 2px 2px, #E0CD67 1px, transparent 0)', backgroundSize: '40px 40px' }} />

                <div className="relative z-10 max-w-4xl mx-auto">
                    <h2 className="text-4xl md:text-6xl lg:text-7xl font-extrabold mb-8 tracking-tight">
                        Stop losing jobs to voicemail.
                    </h2>
                    <p className="text-xl md:text-2xl text-white/70 mb-12 font-normal">
                        Call comes in. AI answers. Customer booked. That&apos;s it.
                    </p>

                    <div className="flex flex-wrap justify-center gap-8 mb-16">
                        {["Live in under 30 minutes", "No contracts, cancel anytime", "One job pays for itself"].map((item, i) => (
                            <div key={i} className="flex items-center gap-2 text-primary font-medium">
                                <CheckCircle2 size={24} /> {item}
                            </div>
                        ))}
                    </div>

                    <Link href="/book">
                        <Button size="lg" className="h-20 px-12 text-2xl group">
                            Book Your Intro Call <ArrowRight size={24} className="ml-3 group-hover:translate-x-2 transition-transform" />
                        </Button>
                    </Link>
                </div>
            </motion.div>
        </section>
    );
}
