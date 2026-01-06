"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const features = [
    {
        image: "/icons/smart-dashboard.png",
        title: "Smart Dashboard",
        description: "See all your calls, recordings, and transcripts in one clean view. Know exactly what's happening.",
    },
    {
        image: "/icons/instant-sms.png",
        title: "Instant SMS",
        description: "Get notified the moment a call is handled. Full details delivered straight to your phone.",
    },
    {
        image: "/icons/mobile-app.png",
        title: "Mobile App",
        description: "Smart tagging, maps, and everything you need to convert leads—right from your pocket.",
    },
];

export function FeaturesPreview() {
    return (
        <section className="py-24 lg:py-32 bg-background-light dark:bg-[#0f0e0c]">
            <div className="container mx-auto px-4">
                <div className="text-center max-w-3xl mx-auto mb-20">
                    <h2 className="text-4xl md:text-5xl font-extrabold mb-6 tracking-tight text-white">Power Features for Serious Pros</h2>
                </div>

                <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
                    {features.map((feature, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="p-8 rounded-3xl bg-white dark:bg-card border border-border flex flex-col items-center text-center hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
                        >
                            <div className="w-16 h-16 bg-primary/10 rounded-2xl flex items-center justify-center text-primary mb-6 transition-colors">
                                <Image
                                    src={feature.image}
                                    alt={feature.title}
                                    width={40}
                                    height={40}
                                    className="object-contain"
                                />
                            </div>
                            <h3 className="text-lg font-semibold mb-3">{feature.title}</h3>
                            <p className="text-muted text-sm font-normal leading-relaxed">
                                {feature.description}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
