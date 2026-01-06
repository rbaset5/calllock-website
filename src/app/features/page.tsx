"use client";

import { motion } from "framer-motion";
import { Headset, LayoutDashboard, MessageSquareText, Smartphone, Infinity, CalendarCheck, Zap, Lock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Footer } from "@/components/layout/footer";
import Image from "next/image";

const mainFeatures = [
    {
        label: "ZERO MISSED CALLS",
        title: "24/7 Coverage & Unlimited Capacity",
        description: "Your phones are answered instantly—2 AM emergencies, Monday morning rushes, whenever your customers call. And unlike answering services with limited staff, CallLock handles unlimited concurrent calls. 50 people call at the exact same second? Every single one gets answered.",
        icon: Infinity,
        image: "/features/coverage-illustration.png",
        checks: ["Calls answered on the first ring", "Emergency calls flagged instantly", "Handle 1 or 100 calls simultaneously", "No shared staff, no waiting in line"]
    },
    {
        label: "JOBS BOOKED",
        title: "Instant Booking",
        description: "The caller stays on the line and books directly onto your calendar. No message. No callback. No delay. The AI checks your schedule, confirms the slot, and the job is booked before they hang up.",
        icon: CalendarCheck,
        image: "/features/booking-illustration.png",
        checks: ["Real-time calendar sync", "Appointment booked on the call", "Customer confirmation sent automatically", "You're notified instantly via SMS"]
    },
    {
        label: "FULL VISIBILITY",
        title: "Smart Dashboard & Live Takeover",
        description: "See every call, recording, and transcript in one clean view. Know exactly what's happening with your leads. And with Live Call Takeover, you can jump into any active AI call seamlessly if you need to.",
        icon: LayoutDashboard,
        image: null,
        checks: ["Full call recordings", "AI-generated transcripts", "Call summaries", "Live Call Takeover—jump in anytime"]
    }
];

export default function FeaturesPage() {
    return (
        <div className="flex flex-col w-full">
            {/* Hero Section */}
            <section className="pt-24 pb-20 lg:pt-32 lg:pb-40 bg-foreground text-white relative overflow-hidden">
                <div className="container mx-auto px-4 text-center relative z-10">
                    <h1 className="text-5xl md:text-7xl font-extrabold mb-8 tracking-tight">
                        Everything You Need <br /><span className="text-primary">to Capture Every Call</span>
                    </h1>
                    <p className="text-xl text-white/70 font-normal max-w-2xl mx-auto">
                        Your AI receptionist handles calls, books jobs, and keeps you informed—24/7, without the overhead.
                    </p>
                    <div className="flex justify-center gap-4 mt-12">
                        <Button size="lg" className="h-16 px-10">Book Your Intro Call</Button>
                        <Button size="lg" variant="secondary" className="h-16 px-10">See How It Works</Button>
                    </div>
                </div>
            </section>

            {/* Main Feature Sections */}
            {mainFeatures.map((f, i) => (
                <section key={i} className={`py-24 lg:py-32 ${i % 2 !== 0 ? 'bg-foreground' : ''}`}>
                    <div className="container mx-auto px-4">
                        <div className={`flex flex-col lg:flex-row items-center gap-16 lg:gap-32 ${i % 2 !== 0 ? 'lg:flex-row-reverse' : ''}`}>
                            <div className="flex-1">
                                <span className="text-primary font-semibold uppercase tracking-widest text-sm mb-6 block">{f.label}</span>
                                <h2 className={`text-4xl lg:text-5xl font-extrabold mb-8 tracking-tight ${i % 2 !== 0 ? 'text-white' : ''}`}>{f.title}</h2>
                                <p className={`text-xl font-normal leading-relaxed mb-10 ${i % 2 !== 0 ? 'text-white/70' : 'text-muted'}`}>
                                    {f.description}
                                </p>
                                <ul className="space-y-4">
                                    {f.checks.map((check, idx) => (
                                        <li key={idx} className={`flex items-center gap-4 font-medium ${i % 2 !== 0 ? 'text-white' : ''}`}>
                                            <div className="w-6 h-6 bg-primary rounded-full flex items-center justify-center text-primary-foreground">
                                                <Zap size={14} />
                                            </div>
                                            {check}
                                        </li>
                                    ))}
                                </ul>
                            </div>
                            <div className="flex-1 w-full">
                                <div className="bg-card rounded-[3rem] border border-border aspect-video shadow-2xl flex items-center justify-center relative overflow-hidden group">
                                    {f.image ? (
                                        <Image 
                                            src={f.image} 
                                            alt={f.title}
                                            fill
                                            className="object-contain p-8"
                                        />
                                    ) : (
                                        <>
                                            <div className="absolute inset-0 bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity" />
                                            <f.icon size={120} className="text-primary opacity-20 group-hover:scale-110 transition-transform duration-500" />
                                        </>
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>
                </section>
            ))}

            {/* Comparison Table Section */}
            <section className="py-24 lg:py-40">
                <div className="container mx-auto px-4">
                    <div className="text-center mb-20">
                        <h2 className="text-4xl md:text-5xl font-extrabold mb-6 tracking-tight">Why HVAC Pros Switch</h2>
                    </div>

                    <div className="max-w-5xl mx-auto overflow-hidden rounded-3xl border border-border shadow-2xl">
                        <table className="w-full text-left border-collapse">
                            <thead>
                                <tr className="bg-foreground text-white">
                                    <th className="p-8 font-semibold uppercase tracking-widest text-sm">Feature</th>
                                    <th className="p-8 font-semibold uppercase tracking-widest text-sm text-primary">CallLock AI</th>
                                    <th className="p-8 font-semibold uppercase tracking-widest text-sm">Human Rep</th>
                                    <th className="p-8 font-semibold uppercase tracking-widest text-sm">Voicemail</th>
                                </tr>
                            </thead>
                            <tbody className="font-normal">
                                <tr className="border-b border-border">
                                    <td className="p-8">Availability</td>
                                    <td className="p-8 text-primary font-semibold">24/7/365</td>
                                    <td className="p-8">9am - 5pm</td>
                                    <td className="p-8">24/7 (passive)</td>
                                </tr>
                                <tr className="border-b border-border bg-background-light dark:bg-primary/5">
                                    <td className="p-8">Response Time</td>
                                    <td className="p-8 text-primary font-semibold">Instant</td>
                                    <td className="p-8">Varies</td>
                                    <td className="p-8">Hours/Days</td>
                                </tr>
                                <tr className="border-b border-border">
                                    <td className="p-8">Concurrent Calls</td>
                                    <td className="p-8 text-primary font-semibold">Unlimited</td>
                                    <td className="p-8">1 per person</td>
                                    <td className="p-8">Unlimited</td>
                                </tr>
                                <tr className="border-b border-border bg-background-light dark:bg-primary/5">
                                    <td className="p-8">Booking Capability</td>
                                    <td className="p-8 text-primary font-semibold">Direct to calendar</td>
                                    <td className="p-8">Variable</td>
                                    <td className="p-8">None</td>
                                </tr>
                                <tr className="border-b border-border">
                                    <td className="p-8">Cost per Month</td>
                                    <td className="p-8 text-primary font-semibold">$297 - $797</td>
                                    <td className="p-8">$3,500+</td>
                                    <td className="p-8">Free (But costly)</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    );
}
