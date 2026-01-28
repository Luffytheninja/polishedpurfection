"use client";

import { motion } from "framer-motion";

const PILLARS = [
    {
        title: "Longevity",
        description: "4+ weeks of wear. No lifting. No panic repairs.",
    },
    {
        title: "Precision",
        description: "Clean cuticles. Balanced shapes. Zero bulk.",
    },
    {
        title: "Customization",
        description: "If you can imagine it, I can design it.",
    },
];

export default function Trust() {
    return (
        <section className="min-h-screen bg-white py-32 px-6 flex flex-col items-center justify-center">
            <div className="container mx-auto">
                <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-20"
                >
                    <h2 className="text-4xl md:text-6xl font-serif mb-8 max-w-3xl mx-auto leading-tight">
                        Your hands are your greatest accessory. I just make sure they’re unforgettable.
                    </h2>
                    <div className="w-24 h-1 bg-gold mx-auto opacity-30" />
                </motion.div>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-12 max-w-6xl mx-auto">
                    {PILLARS.map((pillar, index) => (
                        <motion.div
                            key={pillar.title}
                            initial={{ opacity: 0, y: 30 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: index * 0.2 }}
                            className="p-10 rounded-[2rem] bg-cream/50 border border-cream hover:border-gold/20 transition-colors group"
                        >
                            <h3 className="text-2xl font-serif mb-4 group-hover:text-gold transition-colors">
                                {pillar.title}
                            </h3>
                            <p className="text-muted text-lg leading-relaxed">
                                {pillar.description}
                            </p>
                        </motion.div>
                    ))}
                </div>

                <motion.div
                    initial={{ opacity: 0, scale: 0.95 }}
                    whileInView={{ opacity: 1, scale: 1 }}
                    viewport={{ once: true }}
                    className="mt-32 text-center"
                >
                    <h2 className="text-5xl md:text-8xl font-serif mb-12 tracking-tighter">
                        SECURE YOUR SPOT
                    </h2>
                    <button
                        className="bg-foreground text-background text-2xl px-16 py-8 rounded-full font-serif shadow-2xl hover:scale-105 active:scale-95 transition-all"
                        onClick={() => window.open('https://instagram.com', '_blank')}
                    >
                        BOOK VIA DM
                    </button>
                </motion.div>
            </div>
        </section>
    );
}
