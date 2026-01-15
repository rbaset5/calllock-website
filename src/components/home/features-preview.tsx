"use client";

import { motion } from "framer-motion";
import {
    LayoutDashboard,
    MessageSquare,
    Smartphone
} from "lucide-react";

const features = [
    {
        icon: LayoutDashboard,
        title: "Smart Dashboard",
        description: "See all your calls, recordings, and transcripts in one clean view. Know exactly what's happening.",
    },
    {
        icon: MessageSquare,
        title: "Instant SMS",
        description: "Get notified the moment a call is handled and booked. Full details delivered straight to your phone.",
    },
    {
        icon: Smartphone,
        title: "Mobile App",
        description: "Smart tagging, maps, and everything you need to convert leads—right from your pocket.",
    },
];

export function FeaturesPreview() {
    return (
        <section className="py-24 lg:py-32 bg-background-light">
            <div className="container mx-auto px-4">
                <div className="text-center max-w-3xl mx-auto mb-20">
                    <h2 className="text-4xl md:text-5xl font-extrabold mb-6 tracking-tight text-black">Power Features for Serious Pros</h2>
                </div>

                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {features.map((feature, index) => {
                        const Icon = feature.icon;
                        return (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className="group p-10 rounded-[2.5rem] bg-white dark:bg-card border border-border flex flex-col items-center text-center hover:shadow-2xl hover:shadow-primary/5 hover:-translate-y-1 transition-all duration-500 relative overflow-hidden"
                            >
                                {/* Icon Container - Gold Lock Style */}
                                <div className="relative w-20 h-20 mb-8 group-hover:rotate-3 transition-transform duration-500">
                                    {/* Lock Shackle */}
                                    <div className="absolute -top-4 left-1/2 -translate-x-1/2 w-12 h-10 border-[3.5px] border-[#C5A520]/60 rounded-t-full -z-10" />

                                    {/* Lock Body */}
                                    <div className="absolute inset-0 bg-linear-to-br from-[#E0CD67] via-[#C5A520] to-[#8E7618] rounded-[1.5rem] shadow-xl shadow-primary/20 flex items-center justify-center overflow-hidden">
                                        {/* Metallic Shine */}
                                        <div className="absolute inset-0 bg-linear-to-tr from-white/30 via-transparent to-transparent opacity-50" />

                                        <Icon
                                            size={36}
                                            className="text-white drop-shadow-xl relative z-10"
                                            strokeWidth={1.5}
                                        />

                                        {/* Animated Shine Streak */}
                                        <motion.div
                                            animate={{
                                                x: ["-100%", "100%"]
                                            }}
                                            transition={{
                                                duration: 4,
                                                repeat: Infinity,
                                                ease: "linear",
                                                repeatDelay: 2
                                            }}
                                            className="absolute inset-0 w-1/2 h-full bg-linear-to-r from-transparent via-white/20 to-transparent -skew-x-12"
                                        />
                                    </div>

                                    {/* Keyhole Detail */}
                                    <div className="absolute bottom-1.5 right-1.5 w-5 h-5 bg-black/20 rounded-full flex items-center justify-center backdrop-blur-sm">
                                        <div className="w-1.5 h-2.5 bg-white/40 rounded-full" />
                                    </div>
                                </div>

                                <h3 className="text-2xl font-bold mb-4 tracking-tight group-hover:text-primary transition-colors duration-300">
                                    {feature.title}
                                </h3>

                                <p className="text-muted leading-relaxed font-normal text-base max-w-xs">
                                    {feature.description}
                                </p>

                                {/* Decoration */}
                                <div className="absolute top-0 right-0 w-32 h-32 bg-primary/5 rounded-full blur-3xl -mr-16 -mt-16 group-hover:bg-primary/10 transition-colors duration-500" />
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
