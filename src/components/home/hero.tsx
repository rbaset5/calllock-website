"use client";

import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { ArrowRight, Play, CheckCircle, Phone, Bot } from "lucide-react";

export function Hero() {
    return (
        <section className="relative pt-20 pb-20 lg:pt-32 lg:pb-40 overflow-hidden">
            {/* Background Decorative Elements */}
            <div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full max-w-[1440px] pointer-events-none -z-10">
                <div className="absolute top-0 right-[-10%] w-[500px] h-[500px] bg-primary/20 rounded-full blur-[120px] opacity-50" />
                <div className="absolute bottom-[-10%] left-[-10%] w-[400px] h-[400px] bg-primary/10 rounded-full blur-[100px] opacity-30" />
            </div>

            <div className="container mx-auto px-4 py-8 relative z-10">
                <div className="grid lg:grid-cols-2 gap-16 items-center">
                    <motion.div
                        initial={{ opacity: 0, x: -20 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.6 }}
                        className="max-w-2xl"
                    >
                        <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold leading-[1.05] tracking-tight mb-8">
                            Your AI Receptionist <span className="text-primary">Answers</span> When You Can&apos;t
                        </h1>
                        <p className="text-xl text-muted font-normal mb-10 leading-relaxed max-w-xl">
                            Call comes in. You can&apos;t answer. AI takes over the live call.
                            Customer gets qualified and booked. You get notified.
                        </p>

                        <div className="flex flex-col sm:flex-row gap-4 mb-8">
                            <Link href="/book">
                                <Button size="lg" className="gap-2 w-full sm:w-auto">
                                    Book Your Intro Call <ArrowRight size={20} />
                                </Button>
                            </Link>
                            <Link href="/how-it-works#process">
                                <Button size="lg" variant="secondary" className="gap-2 w-full sm:w-auto">
                                    <Play size={20} fill="currentColor" /> See How It Works
                                </Button>
                            </Link>
                        </div>

                        <div className="flex items-center gap-2 text-sm text-muted font-medium uppercase tracking-wider">
                            <CheckCircle size={18} className="text-primary" />
                            Live in under 30 minutes • No credit card required
                        </div>
                    </motion.div>

                    {/* HVAC Technician Image with Notification */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.95 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.8, delay: 0.2 }}
                        className="relative flex justify-center lg:justify-end"
                    >
                        <div className="relative w-full max-w-md lg:max-w-sm rounded-[2rem] overflow-hidden shadow-2xl border-4 border-card group">
                            {/* HVAC Technician Image */}
                            <img
                                alt="HVAC Technician working on unit"
                                className="w-full h-[600px] object-cover"
                                src="https://lh3.googleusercontent.com/aida-public/AB6AXuB8BXpSlrIhHLxwmB8mVkKW7LYQS_ihW7USSVFsaMFkJeo7B3tOIxDez2lNIPcCWDUfahw_LaNfk_lYdNqLbV3sav48dDYosVVFFEDWQgBNfDNTqXChAhhzHMgpuIXR91G8KNubCV2ttnS9roNtst8huOONpPhmilA6X_s3lWYeLbQbYwVS_0Ry9GDhHczmrIjDeZoD4rVFl2HK7ggk2vgBxZy9M7-lhvDFbtP4REP4W7kLSzkCrNn516bDDPQ2vEWmRNYAeYNKLr3s"
                            />

                            {/* Gradient Overlay */}
                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>

                            {/* Notification Bar at Bottom */}
                            <div className="absolute bottom-0 left-0 right-0 p-6">
                                <motion.div
                                    initial={{ y: 20, opacity: 0 }}
                                    animate={{ y: 0, opacity: 1 }}
                                    transition={{ delay: 0.8, duration: 0.5 }}
                                    className="bg-white/10 backdrop-blur-md border border-white/20 rounded-xl p-4 shadow-lg"
                                >
                                    <div className="flex items-center gap-4 mb-4">
                                        <div className="w-12 h-12 bg-primary rounded-full flex items-center justify-center shadow-lg relative">
                                            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75"></span>
                                            <Phone className="text-primary-foreground relative" size={24} />
                                        </div>
                                        <div>
                                            <div className="text-white font-bold">Incoming Call</div>
                                            <div className="text-gray-300 text-xs flex items-center gap-1">
                                                <Bot size={12} /> AI Receptionist Active
                                            </div>
                                        </div>
                                    </div>
                                    <div className="space-y-3">
                                        <div className="bg-white/10 rounded-lg p-3 border-l-2 border-primary">
                                            <p className="text-white text-xs leading-relaxed opacity-90">&quot;Thank you for calling. I can help schedule a repair while our technician is finishing a job.&quot;</p>
                                        </div>
                                        <div className="flex items-center justify-between text-[10px] text-gray-400 font-medium px-1">
                                            <span>Technician Status: <span className="text-red-400">Busy</span></span>
                                            <span>Call Status: <span className="text-green-400">Handled</span></span>
                                        </div>
                                    </div>
                                </motion.div>
                            </div>
                        </div>

                        {/* Decorative background glow */}
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-primary/20 rounded-full blur-3xl -z-10"></div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
