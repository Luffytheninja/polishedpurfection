"use client";

import { motion } from "framer-motion";

export default function Pricing() {
    return (
        <section className="py-32 px-6 bg-background relative overflow-hidden flex flex-col items-center">
            {/* Background Ambience */}
            <div className="absolute left-[-10%] top-[20%] w-[30%] h-[30%] bg-white/5 rounded-full blur-[100px] pointer-events-none opacity-20" />

            <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                className="text-center mb-24 max-w-2xl mx-auto"
            >
                <h2 className="text-4xl md:text-5xl font-serif text-white mb-6">Services & Investment</h2>
                <p className="text-muted font-serif italic text-lg">
                    Pricing reflects time, precision, and quality. Luxury is calm and confident.
                </p>
            </motion.div>

            <div className="w-full max-w-4xl mx-auto space-y-24">
                <PricingItem
                    title="Classic Gel-X"
                    price="₦15,000"
                    description="Clean structure. Timeless finish."
                />
                <PricingItem
                    title="Signature Set"
                    price="₦25,000"
                    description="Custom details. Elevated look."
                />
                <PricingItem
                    title="Luxury Custom"
                    price="₦35,000"
                    description="Designed from scratch. No repeats."
                />
            </div>

            <div className="mt-24 text-center">
                <p className="text-muted text-sm tracking-widest uppercase opacity-60">
                    Custom designs, charms, and extras are priced separately.
                </p>
            </div>
        </section>
    );
}

function PricingItem({ title, price, description }: { title: string, price: string, description: string }) {
    return (
        <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="flex flex-col md:flex-row justify-between items-baseline border-b border-white/10 pb-8 hover:border-gold/30 transition-colors group"
        >
            <div className="mb-4 md:mb-0">
                <h3 className="text-3xl font-serif text-white group-hover:text-gold transition-colors duration-500">{title}</h3>
                <p className="text-muted mt-2 font-sans text-sm tracking-wide">{description}</p>
            </div>
            <div className="text-2xl font-serif text-gold/80 group-hover:text-gold transition-colors duration-500">
                From {price}
            </div>
        </motion.div>
    )
}
