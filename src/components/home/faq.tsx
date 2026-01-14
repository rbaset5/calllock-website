"use client";

import { motion } from "framer-motion";
import { Plus, Minus } from "lucide-react";
import { useState } from "react";

const faqs = [
    {
        q: "Will customers know it's AI?",
        a: "Most don't notice. And honestly? This AI is more polite than most receptionists you've encountered. No bad days, no attitude—friendly and professional, every single time.",
    },
    {
        q: "How is this different from an answering service?",
        a: "Answering services take messages. You call back hours later. By then, the customer hired someone else. CallLock is different: the caller stays on the line and books right there. No message, no callback, no delay.",
    },
    {
        q: "How fast can I get set up?",
        a: "Live in under 30 minutes. Forward your missed/busy calls to your CallLock number, and the AI handles everything from there.",
    },
    {
        q: "What happens during peak volume?",
        a: "That's the beauty of AI. We handle 5, 50, or 500 calls simultaneously. You never get a busy signal. Your customers never wait on hold.",
    },

];

export function FAQ() {
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    return (
        <section className="py-24 lg:py-32 bg-background-light dark:bg-[#0f0e0c]">
            <div className="container mx-auto px-4">
                <div className="max-w-3xl mx-auto">
                    <h2 className="text-4xl md:text-5xl font-extrabold mb-16 text-center tracking-tight text-foreground">Questions? Answered.</h2>
                    <div className="space-y-4">
                        {faqs.map((faq, index) => (
                            <div
                                key={index}
                                className="bg-white dark:bg-card border border-border rounded-2xl overflow-hidden active:scale-[0.99] transition-transform"
                            >
                                <button
                                    onClick={() => setOpenIndex(openIndex === index ? null : index)}
                                    className="w-full px-8 py-6 flex items-center justify-between text-left"
                                >
                                    <span className="text-lg font-semibold tracking-tight">{faq.q}</span>
                                    {openIndex === index ? <Minus size={20} className="text-primary" /> : <Plus size={20} />}
                                </button>
                                {openIndex === index && (
                                    <motion.div
                                        initial={{ height: 0, opacity: 0 }}
                                        animate={{ height: "auto", opacity: 1 }}
                                        className="px-8 pb-6 text-muted font-normal leading-relaxed"
                                    >
                                        {faq.a}
                                    </motion.div>
                                )}
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
