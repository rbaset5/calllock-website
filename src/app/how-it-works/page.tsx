"use client";

import { motion } from "framer-motion";
import { PhoneCall, Cpu, CalendarCheck, CheckCircle2, XCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Footer } from "@/components/layout/footer";
import Image from "next/image";

const steps = [
    {
        number: 1,
        icon: PhoneCall,
        title: "The Call Comes In",
        description: "Whether it's 2 PM while you're under a house, or 2 AM while you're asleep, CallLock answers instantly. No holds, no \"press 1 for service,\" no voicemail.",
        checks: ["Answers within 2 seconds", "Friendly, professional voice", "24/7/365 availability"],
        image: "/icons/step-1-visual.png",
    },
    {
        number: 2,
        icon: Cpu,
        title: "AI Handles the Conversation",
        description: "Your AI receptionist isn't a script reader. It qualifies the lead, checks your schedule, and handles the details naturally.",
        checks: ["Qualifies: Residential vs Commercial", "Checks your calendar for open slots", "Collects address & issue details", "Books the appointment on the spot"],
        image: "/icons/step-2-visual.png",
    },
    {
        number: 3,
        icon: CalendarCheck,
        title: "You Get Notified. Job Booked.",
        description: "Done. You receive an SMS summary immediately—customer name, issue, address, appointment time. The job is on your calendar.",
        checks: ["Instant SMS notification", "Full call recording available", "Syncs to your calendar", "Customer confirmation sent"],
        image: "/icons/step-3-visual.jpg",
    },
];

export default function ProcessPage() {
    return (
        <div className="flex flex-col w-full">
            {/* Hero Section */}
            <section className="pt-24 pb-20 lg:pt-32 lg:pb-40 bg-background-light dark:bg-[#1c1a12] relative overflow-hidden">
                <div className="container mx-auto px-4 text-center relative z-10">
                    <span className="text-primary font-semibold uppercase tracking-widest text-sm mb-6 block">The Process</span>
                    <h1 className="text-5xl md:text-7xl font-extrabold mb-8 tracking-tight">
                        From Ringing Phone to <br /><span className="text-primary">Booked Job—Autopilot.</span>
                    </h1>
                    <p className="text-xl text-muted font-normal max-w-2xl mx-auto">
                        See exactly how CallLock transforms missed calls into revenue without you lifting a finger.
                    </p>
                </div>
            </section>

            {/* Steps Flow */}
            <section id="process" className="py-24 lg:py-32">
                <div className="container mx-auto px-4">
                    <div className="space-y-32 lg:space-y-48">
                        {steps.map((step, index) => (
                            <div key={index} className={`flex flex-col lg:flex-row items-center gap-16 lg:gap-32 ${index % 2 !== 0 ? 'lg:flex-row-reverse' : ''}`}>
                                <motion.div
                                    initial={{ opacity: 0, x: index % 2 === 0 ? -30 : 30 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true }}
                                    className="flex-1"
                                >
                                    <div className="flex items-center gap-4 mb-6">
                                        <div className="w-14 h-14 bg-primary text-primary-foreground rounded-2xl flex items-center justify-center font-bold text-2xl shadow-lg shadow-primary/20">
                                            {step.number}
                                        </div>
                                        <step.icon size={40} className="text-primary opacity-50" />
                                    </div>
                                    <h2 className="text-4xl lg:text-5xl font-extrabold mb-8 tracking-tight">{step.title}</h2>
                                    <p className="text-xl text-muted font-normal leading-relaxed mb-10">
                                        {step.description}
                                    </p>
                                    <ul className="grid sm:grid-cols-2 gap-4">
                                        {step.checks.map((check, i) => (
                                            <li key={i} className="flex items-center gap-3 font-medium text-sm">
                                                <CheckCircle2 size={18} className="text-primary" />
                                                {check}
                                            </li>
                                        ))}
                                    </ul>
                                </motion.div>
                                <motion.div
                                    initial={{ opacity: 0, scale: 0.9 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    viewport={{ once: true }}
                                    className="flex-1 w-full flex items-center justify-center"
                                >
                                    <Image
                                        src={step.image}
                                        alt={step.title}
                                        width={1024}
                                        height={700}
                                        className="object-contain w-full h-auto max-w-2xl rounded-[2rem]"
                                    />
                                </motion.div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Final Summary Component */}
            <section className="py-24 bg-foreground text-white">
                <div className="container mx-auto px-4">
                    <div className="grid lg:grid-cols-2 gap-8 max-w-6xl mx-auto">
                        <div className="p-10 rounded-3xl bg-white/5 border border-white/10">
                            <h3 className="text-2xl font-bold mb-8 text-red-500 flex items-center gap-2">
                                <XCircle size={24} /> Manual Reception
                            </h3>
                            <ul className="space-y-6">
                                <li className="font-normal text-white/70">"Missed Calls = Lost Revenue"</li>
                                <li className="font-normal text-white/70">"The Voicemail Trap"</li>
                                <li className="font-normal text-white/70">"Gaps in After-Hours Coverage"</li>
                            </ul>
                        </div>
                        <div className="p-10 rounded-3xl bg-primary/10 border border-primary/20">
                            <h3 className="text-2xl font-bold mb-8 text-primary flex items-center gap-2">
                                <CheckCircle2 size={24} /> CallLock AI
                            </h3>
                            <ul className="space-y-6">
                                <li className="font-bold text-xl">100% Answer Rate</li>
                                <li className="font-bold text-xl">Instant Direct Booking</li>
                                <li className="font-bold text-xl">Always On (24/7/365)</li>
                            </ul>
                        </div>
                    </div>
                    <div className="text-center mt-20">
                        <Button size="lg" className="h-20 px-12 text-2xl group">
                            Ready to stop missing jobs?
                        </Button>
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    );
}
