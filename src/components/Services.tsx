"use client";

import { useState, useRef, useEffect } from "react";
import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { ChevronRight, ChevronLeft } from "lucide-react";

export default function Services() {
    return (
        <div className="flex flex-col">
            <GelManicures />
            <GelXExtensions />
            <CustomPressOns />
        </div>
    );
}

function GelManicures() {
    const [tilt, setTilt] = useState({ x: 0, y: 0 });

    useEffect(() => {
        const handleMouseMove = (e: MouseEvent) => {
            const x = (e.clientX / window.innerWidth - 0.5) * 20;
            const y = (e.clientY / window.innerHeight - 0.5) * 20;
            setTilt({ x, y });
        };

        window.addEventListener("mousemove", handleMouseMove);
        return () => window.removeEventListener("mousemove", handleMouseMove);
    }, []);

    return (
        <section className="h-screen sticky top-0 flex items-center justify-center overflow-hidden bg-cream">
            <motion.div
                animate={{
                    background: `radial-gradient(circle at ${50 + tilt.x}% ${50 + tilt.y}%, var(--blush), var(--cream))`
                }}
                className="absolute inset-0 z-0"
            />

            <div className="z-10 container mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                <div className="text-left">
                    <span className="text-gold tracking-[0.2em] font-sans font-medium uppercase text-sm mb-4 block">
                        💎 Gel Manicures
                    </span>
                    <h2 className="text-5xl md:text-7xl font-serif mb-6 leading-tight">
                        Gloss that speaks before you do.
                    </h2>
                    <p className="text-xl text-muted mb-8 max-w-md">
                        Clean cuticles. Mirror shine. No shortcuts.
                    </p>
                    <button className="bg-foreground text-background px-8 py-4 rounded-full font-serif text-lg">
                        Book Your Glow
                    </button>
                </div>

                <motion.div
                    style={{
                        rotateX: -tilt.y,
                        rotateY: tilt.x,
                        perspective: 1000
                    }}
                    className="relative flex justify-center items-center"
                >
                    <div className="absolute w-64 h-64 bg-white/20 blur-3xl rounded-full" />
                    <Image
                        src="/assets/Gel bottle.png"
                        alt="Gel bottle"
                        width={300}
                        height={500}
                        className="relative z-10 object-contain drop-shadow-2xl"
                    />
                </motion.div>
            </div>
        </section>
    );
}

function GelXExtensions() {
    const [length, setLength] = useState(50);

    const getNailLength = () => {
        if (length < 20) return "Short";
        if (length < 40) return "Medium";
        if (length < 60) return "Long";
        if (length < 80) return "Stiletto";
        return "Extra";
    };

    return (
        <section className="h-screen sticky top-0 bg-white flex items-center justify-center overflow-hidden border-t border-cream/50">
            <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                <div className="order-2 md:order-1 flex flex-col items-center">
                    <div className="relative h-[400px] w-full flex items-end justify-center">
                        <motion.div
                            style={{
                                height: `${100 + length * 2}px`,
                                filter: `drop-shadow(0 ${length / 4}px ${length / 8}px rgba(0,0,0,0.1))`
                            }}
                            className="relative w-32 transition-all duration-300 ease-out"
                        >
                            <Image
                                src="/assets/Gel X extensions.png"
                                alt="Gel-X extension"
                                fill
                                className="object-contain object-bottom"
                            />
                        </motion.div>

                        <div className="absolute bottom-0 text-gold font-serif text-2xl tracking-widest uppercase opacity-30 select-none">
                            {getNailLength()}
                        </div>
                    </div>

                    <div className="w-full max-w-sm mt-12 space-y-4">
                        <input
                            type="range"
                            min="10"
                            max="100"
                            value={length}
                            onChange={(e) => {
                                setLength(parseInt(e.target.value));
                                if (window.navigator?.vibrate) window.navigator.vibrate(5);
                            }}
                            className="w-full accent-gold h-2 bg-cream rounded-lg appearance-none cursor-pointer"
                        />
                        <div className="flex justify-between text-xs font-sans tracking-widest text-muted uppercase">
                            <span>Short</span>
                            <span>Extra</span>
                        </div>
                    </div>
                </div>

                <div className="order-1 md:order-2 text-left">
                    <span className="text-gold tracking-[0.2em] font-sans font-medium uppercase text-sm mb-4 block">
                        💎 Gel-X Extensions
                    </span>
                    <h2 className="text-5xl md:text-7xl font-serif mb-6 leading-tight">
                        Length, but make it elegant.
                    </h2>
                    <p className="text-xl text-muted mb-8 max-w-md">
                        Lightweight. Balanced. Built to last.
                    </p>
                    <button className="bg-foreground text-background px-8 py-4 rounded-full font-serif text-lg">
                        Extend Your Style
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

function CustomPressOns() {
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
        <section className="h-screen sticky top-0 bg-blush flex items-center justify-center overflow-hidden">
            <div className="container mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
                <div className="text-left">
                    <span className="text-gold tracking-[0.2em] font-sans font-medium uppercase text-sm mb-4 block">
                        💎 Custom Press-Ons
                    </span>
                    <h2 className="text-5xl md:text-7xl font-serif mb-6 leading-tight">
                        Your idea. My execution.
                    </h2>
                    <p className="text-xl text-muted mb-8 max-w-md">
                        Designed once. Worn anytime.
                    </p>
                    <button className="bg-foreground text-background px-8 py-4 rounded-full font-serif text-lg">
                        Order Custom Set
                    </button>
                </div>

                <div className="relative flex items-center justify-center">
                    <div className="relative w-full aspect-square max-w-md flex items-center justify-center">
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={index}
                                initial={{ x: 100, opacity: 0, rotate: 10 }}
                                animate={{ x: 0, opacity: 1, rotate: 0 }}
                                exit={{ x: -100, opacity: 0, rotate: -10 }}
                                transition={{ type: "spring", stiffness: 300, damping: 30 }}
                                className="absolute"
                            >
                                <div className="relative">
                                    <Image
                                        src={DESIGNS[index].src}
                                        alt={DESIGNS[index].title}
                                        width={280}
                                        height={400}
                                        className="object-contain drop-shadow-2xl"
                                    />
                                    <div className="absolute -bottom-10 left-1/2 -translate-x-1/2 text-2xl font-serif text-foreground">
                                        {DESIGNS[index].title}
                                    </div>
                                </div>
                            </motion.div>
                        </AnimatePresence>

                        <button
                            onClick={prev}
                            className="absolute left-0 z-10 p-4 rounded-full bg-white/50 backdrop-blur-md border border-white/20 active:scale-90 transition-transform"
                        >
                            <ChevronLeft size={24} />
                        </button>
                        <button
                            onClick={next}
                            className="absolute right-0 z-10 p-4 rounded-full bg-white/50 backdrop-blur-md border border-white/20 active:scale-90 transition-transform"
                        >
                            <ChevronRight size={24} />
                        </button>
                    </div>
                </div>
            </div>
        </section>
    );
}
