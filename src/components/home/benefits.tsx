"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const benefits = [
    {
        image: "/icons/zero-missed-calls.png",
        title: "Zero Missed Calls",
        description: "Every call is answered instantly—2 AM emergencies, Monday morning rushes, whenever. The customer stays on the line and gets booked.",
    },
    {
        image: "/icons/jobs-booked.png",
        title: "Jobs Booked, Not Messages Taken",
        description: "No voicemail. No callback. No phone tag. The caller stays on the line and books directly onto your calendar while you finish your current job.",
    },
    {
        image: "/icons/math-works.png",
        title: "Math That Works",
        description: "Your average job is $500. Get one job that would've gone to voicemail, and you've covered the cost. Everything after that is profit.",
    },
    {
        image: "/icons/unlimited-capacity.png",
        title: "Unlimited Capacity",
        description: "Monday morning rush? Storm hits? Handle 50 calls at the exact same second. Every single one gets answered. No hold, no queue.",
    },
    {
        image: "/icons/ai-friendly.png",
        title: "AI That Won't Raise Eyebrows",
        description: "More polite than reps you've encountered, consistently. Friendly, professional, every single time. No bad days, no attitude.",
    },
    {
        image: "/icons/instant-notifications.png",
        title: "Instant Notifications",
        description: "Get an SMS summary the moment a call is handled. Customer name, issue, address, appointment time—everything you need, zero effort.",
    },
];

export function Benefits() {
    return (
        <section className="py-24 lg:py-32 bg-background relative overflow-hidden">
            <div className="container mx-auto px-4">
                <div className="text-center max-w-3xl mx-auto mb-20">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-4xl md:text-5xl font-extrabold mb-6 tracking-tight"
                    >
                        Why Trades Home Services Pros Choose CallLock
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-xl text-muted font-normal"
                    >
                        Stop playing phone tag. Let AI capture every opportunity while you focus on the job.
                    </motion.p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {benefits.map((benefit, index) => (
                        <motion.div
                            key={index}
                            initial={{ opacity: 0, y: 20 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.1 }}
                            className="group p-8 rounded-2xl bg-card border border-border hover:border-primary/30 transition-all duration-300 hover:shadow-xl hover:shadow-primary/5"
                        >
                            <div className="w-14 h-14 rounded-xl flex items-center justify-center mb-6 group-hover:scale-110 transition-all duration-500">
                                <Image
                                    src={benefit.image}
                                    alt={benefit.title}
                                    width={48}
                                    height={48}
                                    className="object-contain"
                                />
                            </div>
                            <h3 className="text-xl font-semibold mb-4 tracking-tight">{benefit.title}</h3>
                            <p className="text-muted leading-relaxed font-normal">
                                {benefit.description}
                            </p>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
