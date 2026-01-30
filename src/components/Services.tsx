"use client";

import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { ChevronRight, ChevronLeft } from "lucide-react";

export default function Services() {
    return (
        <div id="services" className="flex flex-col bg-background text-foreground scroll-smooth">
            <ClassicGelX />
            <SignatureSet />
            <LuxuryCustom />
        </div>
    );
}

function ClassicGelX() {
    const [tilt, setTilt] = useState({ x: 0, y: 0 });

    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            const x = (e.clientX / window.innerWidth - 0.5) * 10; // Subtle tilt
            const y = (e.clientY / window.innerHeight - 0.5) * 10;
            setTilt({ x, y });
        };

        window.addEventListener("mousemove", handleMouseMove);
        return () => window.removeEventListener("mousemove", handleMouseMove);
    }, []);

    return (
        <section className="min-h-screen flex items-center justify-center overflow-hidden border-b border-white/5 relative group">
            <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/50 z-0 pointer-events-none" />

            <div className="z-10 container mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                <div className="text-left order-2 md:order-1">
                    <span className="text-gold tracking-[0.2em] font-sans font-medium uppercase text-xs mb-4 block opacity-70">
                        01 — The Essentials
                    </span>
                    <h3 className="text-5xl md:text-7xl font-serif mb-6 leading-tight text-white">
                        Classic Gel-X
                    </h3>
                    <p className="text-xl text-muted mb-4 font-serif italic">
                        Clean. Strong. Addictive.
                    </p>
                    <p className="text-md text-foreground/60 mb-8 max-w-md font-sans leading-relaxed">
                        A timeless Gel-X set with flawless structure and a polished finish. Perfect for everyday wear with elevated quality.
                    </p>
                    <button className="text-gold border-b border-gold/30 pb-1 hover:border-gold transition-colors font-serif italic">
                        From ₦15,000
                    </button>
                </div>

                <motion.div
                    style={{
                        rotateX: -tilt.y,
                        rotateY: tilt.x,
                        perspective: 1000
                    }}
                    className="relative flex justify-center items-center order-1 md:order-2 group-hover:scale-105 transition-transform duration-700 ease-out"
                >
                    <div className="absolute w-64 h-64 bg-white/5 blur-[100px] rounded-full" />
                    <Image
                        src="/assets/Gel bottle.png"
                        alt="Gel bottle"
                        width={300}
                        height={500}
                        className="relative z-10 object-contain drop-shadow-[0_20px_50px_rgba(0,0,0,0.5)] opacity-90 group-hover:opacity-100 transition-opacity duration-500"
                    />
                </motion.div>
            </div>
        </section>
    );
}

function SignatureSet() {
    const [length, setLength] = useState(50);

    const getNailLength = () => {
        if (length < 20) return "Short";
        if (length < 40) return "Medium";
        if (length < 60) return "Long";
        if (length < 80) return "Stiletto";
        return "Extra";
    };

    return (
        <section className="min-h-screen bg-[#080808] flex items-center justify-center overflow-hidden border-b border-white/5 relative">
            <div className="absolute top-0 right-0 p-4 bg-gold/10 text-gold text-xs tracking-widest uppercase rounded-bl-2xl backdrop-blur-md border-l border-b border-gold/20">
                Most Booked
            </div>

            <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                <div className="flex flex-col items-center">
                    <div className="relative h-[400px] w-full flex items-end justify-center">
                        <motion.div
                            style={{
                                height: `${120 + length * 2.5}px`, // Adjusted scale
                            }}
                            className="relative w-40 transition-all duration-300 ease-out grayscale-[0.3] hover:grayscale-0"
                        >
                            <Image
                                src="/assets/Gel X extensions.png"
                                alt="Signature Set"
                                fill
                                className="object-contain object-bottom drop-shadow-[0_0_30px_rgba(255,255,255,0.05)]"
                            />
                        </motion.div>

                        <div className="absolute bottom-10 text-gold/10 font-serif text-6xl tracking-widest uppercase select-none pointer-events-none">
                            {getNailLength()}
                        </div>
                    </div>

                    <div className="w-full max-w-sm mt-12 space-y-6">
                        <input
                            type="range"
                            min="10"
                            max="100"
                            value={length}
                            onChange={(e) => {
                                setLength(parseInt(e.target.value));
                                if (window.navigator?.vibrate) window.navigator.vibrate(5);
                            }}
                            className="w-full accent-gold h-1 bg-white/10 rounded-lg appearance-none cursor-pointer hover:bg-white/20 transition-colors"
                        />
                    </div>
                </div>

                <div className="text-left">
                    <span className="text-gold tracking-[0.2em] font-sans font-medium uppercase text-xs mb-4 block opacity-70">
                        02 — The Featured
                    </span>
                    <h3 className="text-5xl md:text-7xl font-serif mb-6 leading-tight text-white">
                        Signature Set
                    </h3>
                    <p className="text-xl text-muted mb-4 font-serif italic">
                        The one they ask about.
                    </p>
                    <p className="text-md text-foreground/60 mb-8 max-w-md font-sans leading-relaxed">
                        Custom details, refined finishes, and main-character energy. Designed to stand out without trying too hard.
                    </p>
                    <button className="text-gold border-b border-gold/30 pb-1 hover:border-gold transition-colors font-serif italic">
                        From ₦25,000
                    </button>
                </div>
            </div>
        </section>
    );
}

const DESIGNS = [
    { id: 1, src: "/assets/Press on 1.png", title: "French" },
    { id: 2, src: "/assets/Press on 2.png", title: "Chrome" },
    { id: 3, src: "/assets/Press on 3.png", title: "3D" },
    { id: 4, src: "/assets/Press on 4.png", title: "Minimal" },
    { id: 5, src: "/assets/Press on 5.png", title: "Statement" },
];

function LuxuryCustom() {
    const [index, setIndex] = useState(0);

    const next = () => {
        setIndex((prev) => (prev + 1) % DESIGNS.length);
        if (window.navigator?.vibrate) window.navigator.vibrate(10);
    };

    const prev = () => {
        setIndex((prev) => (prev - 1 + DESIGNS.length) % DESIGNS.length);
        if (window.navigator?.vibrate) window.navigator.vibrate(10);
    };

    return (
        <section className="min-h-screen flex items-center justify-center overflow-hidden relative">
            {/* Background Ambience */}
            <div className="absolute right-[-10%] bottom-[-10%] w-[40%] h-[40%] bg-white/5 rounded-full blur-[150px] pointer-events-none" />

            <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                <div className="text-left order-2 md:order-1">
                    <span className="text-gold tracking-[0.2em] font-sans font-medium uppercase text-xs mb-4 block opacity-70">
                        03 — The Bespoke
                    </span>
                    <h3 className="text-5xl md:text-7xl font-serif mb-6 leading-tight text-white">
                        Luxury Custom
                    </h3>
                    <p className="text-xl text-muted mb-4 font-serif italic">
                        Designed, not rushed.
                    </p>
                    <p className="text-md text-foreground/60 mb-8 max-w-md font-sans leading-relaxed">
                        A fully customized set built from scratch. For clients who want something unique and intentional.
                    </p>
                    <button className="text-gold border-b border-gold/30 pb-1 hover:border-gold transition-colors font-serif italic">
                        From ₦35,000
                    </button>
                </div>

                <div className="relative flex items-center justify-center order-1 md:order-2">
                    <div className="relative w-full aspect-[3/4] max-w-md flex items-center justify-center">
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={index}
                                initial={{ x: 50, opacity: 0, scale: 0.9 }}
                                animate={{ x: 0, opacity: 1, scale: 1 }}
                                exit={{ x: -50, opacity: 0, scale: 0.9 }}
                                transition={{ duration: 0.5, ease: "easeInOut" }}
                                className="absolute inset-0 flex items-center justify-center"
                            >
                                <div className="relative w-full h-full p-8 glossy rounded-2xl flex items-center justify-center group overflow-hidden">
                                    <div className="absolute inset-0 bg-black/40 z-0" />
                                    <Image
                                        src={DESIGNS[index].src}
                                        alt={DESIGNS[index].title}
                                        fill
                                        className="object-contain drop-shadow-[0_20px_40px_rgba(0,0,0,0.8)] z-10 group-hover:scale-105 transition-transform duration-700"
                                    />
                                    <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-xl font-serif text-white tracking-widest uppercase z-20">
                                        {DESIGNS[index].title}
                                    </div>
                                </div>
                            </motion.div>
                        </AnimatePresence>

                        {/* Minimal Navigation Controls */}
                        <div className="absolute -bottom-16 flex gap-8">
                            <button onClick={prev} className="p-4 text-white/50 hover:text-gold transition-colors">
                                <ChevronLeft size={24} />
                            </button>
                            <button onClick={next} className="p-4 text-white/50 hover:text-gold transition-colors">
                                <ChevronRight size={24} />
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
