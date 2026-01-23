"use client";

import { motion } from "framer-motion";
import { Lock, Target, ShieldCheck, Users } from "lucide-react";
import { Footer } from "@/components/layout/footer";

const values = [
    {
        icon: Target,
        title: "Speed to Lead",
        description: "In Service, the first person to answer wins the job. We make sure that person is always you."
    },
    {
        icon: ShieldCheck,
        title: "Reliability",
        description: "Our AI doesn't have bad days, sick leave, or holidays. It's your most reliable employee."
    },
    {
        icon: Users,
        title: "Builder Focused",
        description: "Every feature we build is designed to make life easier for field service professionals."
    }
];

export default function AboutPage() {
    return (
        <div className="flex flex-col w-full">
            {/* Hero Section */}
            <section className="pt-24 pb-20 lg:pt-32 lg:pb-40 bg-background-light dark:bg-[#1c1a12] relative overflow-hidden">
                <div className="container mx-auto px-4 text-center relative z-10">
                    <span className="text-primary font-black uppercase tracking-[0.3em] text-sm mb-6 block">Our Mission</span>
                    <h1 className="text-5xl md:text-7xl font-black mb-8 tracking-tight">
                        We Help Pros in the Home Services Trades <br /><span className="text-primary italic">Capture Every Opportunity.</span>
                    </h1>
                    <p className="text-xl text-muted font-medium max-w-2xl mx-auto leading-relaxed">
                        CallLock was built with a single goal: to end the missed call graveyard for home services. We believe no job should be lost because you were busy doing the work.
                    </p>
                </div>
            </section>

            {/* Story Section */}
            <section className="py-24 lg:py-32">
                <div className="container mx-auto px-4">
                    <div className="grid lg:grid-cols-2 gap-16 items-center max-w-6xl mx-auto">
                        <div>
                            <h2 className="text-4xl font-black mb-8 tracking-tight">Why We Built CallLock</h2>
                            <div className="space-y-6 text-lg text-muted font-medium leading-relaxed">
                                <p>
                                    We saw a pattern in the Service industry: great technicians were losing thousands in revenue every month because they couldn&apos;t answer the phone while on a job.
                                </p>
                                <p>
                                    Existing solutions like answering services were slow, expensive, and often just took messages. Customers don&apos;t want to leave a message—they want to book a job.
                                </p>
                                <p>
                                    So we built CallLock. An AI that doesn&apos;t just take notes, but actually qualifies leads and books jobs directly into your calendar.
                                </p>
                            </div>
                        </div>
                        <div className="relative aspect-square bg-card rounded-[3rem] border border-border shadow-2xl flex items-center justify-center p-12">
                            <Lock size={180} className="text-primary" />
                        </div>
                    </div>
                </div>
            </section>

            {/* Values Section */}
            <section className="py-24 lg:py-32 bg-background-light dark:bg-[#0f0e0c]">
                <div className="container mx-auto px-4">
                    <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
                        {values.map((v, i) => (
                            <motion.div
                                key={i}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: i * 0.1 }}
                                className="p-10 rounded-3xl bg-white dark:bg-card border border-border"
                            >
                                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center text-primary mb-6">
                                    <v.icon size={24} />
                                </div>
                                <h3 className="text-xl font-bold mb-4">{v.title}</h3>
                                <p className="text-muted font-medium leading-relaxed">{v.description}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    );
}
