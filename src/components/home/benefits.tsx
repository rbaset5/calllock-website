"use client";

import { motion } from "framer-motion";
import {
    PhoneOff,
    CalendarCheck,
    Calculator,
    Infinity as InfinityIcon,
    Bot,
    Bell,
    Check
} from "lucide-react";
import { LockIcon } from "@/components/ui/lock-icon";

const benefits = [
    {
        icon: PhoneOff,
        title: "Zero Missed Calls",
        description: "Every call is answered instantly—2 AM emergencies, Monday morning rushes, whenever. The customer stays on the line and gets booked.",
        bullets: [
            "24/7/365 availability",
            "Emergency & rush hour support",
            "No more hang-ups"
        ],
    },
    {
        icon: CalendarCheck,
        title: "Jobs Booked, Not Messages Taken",
        description: "No voicemail. No callback. No phone tag. The caller stays on the line and books directly onto your calendar while you finish your current job.",
        bullets: [
            "Live calendar integration",
            "Qualified lead capture",
            "Zero manual follow-up"
        ],
    },
    {
        icon: Calculator,
        title: "Math That Works",
        description: "Your average job is $500. Get one job that would've gone to voicemail, and you've covered the cost. Everything after that is profit.",
        bullets: [
            "ROI with one single job",
            "Covers its own cost monthly",
            "Pure profit after one lead"
        ],
    },
    {
        icon: InfinityIcon,
        title: "Unlimited Capacity",
        description: "Monday morning rush? Storm hits? Handle 50 calls at the exact same second. Every single one gets answered. No hold, no queue.",
        bullets: [
            "Handle 50+ simultaneous calls",
            "No holds or wait times",
            "Scale instantly during surges"
        ],
    },
    {
        icon: Bot,
        title: "AI That Won't Raise Eyebrows",
        description: "More polite than reps you've encountered, consistently. Friendly, professional, every single time. No bad days, no attitude.",
        bullets: [
            "Consistently polite tone",
            "Expert trade knowledge",
            "No training or management"
        ],
    },
    {
        icon: Bell,
        title: "Instant Notifications",
        description: "Get an SMS summary the moment a call is handled. Customer name, issue, address, appointment time—everything you need, zero effort.",
        bullets: [
            "Detailed SMS summaries",
            "Complete caller context",
            "Real-time notifications"
        ],
    },
];

export function Benefits() {
    return (
        <section className="py-24 lg:py-32 bg-background relative overflow-hidden">
            {/* Background Accent */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-primary/5 rounded-full blur-[120px] -z-10" aria-hidden="true" />

            <div className="container mx-auto px-4">
                <div className="text-center max-w-3xl mx-auto mb-20">
                    <motion.h2
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        className="text-4xl md:text-5xl font-extrabold mb-6 tracking-tight"
                    >
                        Why Home Services Trades That Run Jobs In The Field <br /> Choose <span className="text-primary">CallLock</span>
                    </motion.h2>
                    <motion.p
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="text-xl text-muted font-normal"
                    >
                        Stop playing phone tag and losing jobs to voicemail. Let AI capture every opportunity while you focus on the job.
                    </motion.p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {benefits.map((benefit, index) => {
                        const Icon = benefit.icon;
                        return (
                            <motion.div
                                key={index}
                                initial={{ opacity: 0, y: 20 }}
                                whileInView={{ opacity: 1, y: 0 }}
                                viewport={{ once: true }}
                                transition={{ delay: index * 0.1 }}
                                className="group p-8 rounded-[2rem] bg-card border border-border hover:border-primary/30 transition-all duration-500 hover:shadow-2xl hover:shadow-primary/5 relative overflow-hidden flex flex-col items-start text-left"
                            >
                                <LockIcon icon={Icon} size="md" className="mb-8 group-hover:scale-110" />

                                <h3 className="text-2xl font-bold mb-4 tracking-tight group-hover:text-primary transition-colors duration-300">
                                    {benefit.title}
                                </h3>

                                <p className="text-muted leading-relaxed font-normal mb-6 text-sm">
                                    {benefit.description}
                                </p>

                                <ul className="space-y-3 mt-auto w-full">
                                    {benefit.bullets.map((bullet, i) => (
                                        <li key={i} className="flex items-start gap-3 text-muted-foreground group/li">
                                            <div className="mt-1 bg-green-500/10 rounded-full p-0.5 group-hover/li:bg-green-500 transition-colors duration-300">
                                                <Check size={12} className="text-green-500 group-hover/li:text-white" />
                                            </div>
                                            <span className="text-sm font-medium leading-tight">{bullet}</span>
                                        </li>
                                    ))}
                                </ul>

                                {/* Subtle background decoration */}
                                <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-primary/5 rounded-full blur-2xl group-hover:bg-primary/10 transition-colors duration-500" aria-hidden="true" />
                            </motion.div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
}
