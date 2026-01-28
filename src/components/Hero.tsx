"use client";

import { useState, useRef } from "react";
import { motion, useMotionValue, useTransform, useSpring } from "framer-motion";
import Image from "next/image";

const NAILS = [
    { id: 1, src: "/assets/Hero 1.png" },
    { id: 2, src: "/assets/Hero 2.png" },
    { id: 3, src: "/assets/Hero 3.png" },
    { id: 4, src: "/assets/Hero 4.png" },
    { id: 5, src: "/assets/Hero 5.png" },
];

export default function Hero() {
    return (
        <section className="relative min-h-[90vh] flex flex-col items-center justify-center pt-20 px-6 overflow-hidden bg-blush/30">
            <div className="z-10 text-center mb-12">
                <h1 className="text-5xl md:text-7xl font-serif mb-4 leading-tight">
                    Pick your poison.
                </h1>
                <p className="text-lg md:text-xl text-muted font-sans tracking-wide">
                    Try the vibe. Drag to play.
                </p>
            </div>

            <div className="relative w-full max-w-2xl aspect-square flex items-center justify-center">
                {/* Hand Silhouette */}
                <div className="absolute inset-0 flex items-center justify-center opacity-40 pointer-events-none">
                    <Image
                        src="/assets/hand_silhouette.png"
                        alt="Hand silhouette"
                        width={600}
                        height={600}
                        className="object-contain"
                    />
                </div>

                {/* Draggable Nails */}
                <div className="absolute inset-0 flex flex-wrap items-center justify-center gap-8 p-12">
                    {NAILS.map((nail, index) => (
                        <DraggableNail key={nail.id} src={nail.src} index={index} />
                    ))}
                </div>
            </div>

            <motion.button
                initial={{ y: 50, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ delay: 0.5 }}
                className="fixed bottom-10 z-50 bg-foreground text-background px-10 py-5 rounded-full font-serif text-xl shadow-2xl glossy border border-white/20 active:scale-95 transition-transform"
                onClick={() => window.open('https://instagram.com', '_blank')}
            >
                Grab Your Set
            </motion.button>
        </section>
    );
}

function DraggableNail({ src, index }: { src: string; index: number }) {
    const x = useMotionValue(0);
    const y = useMotionValue(0);

    // Spring for smooth tilt
    const springX = useSpring(x);
    const springY = useSpring(y);

    // Rotate based on drag distance
    const rotateX = useTransform(springY, [-100, 100], [20, -20]);
    const rotateY = useTransform(springX, [-100, 100], [-20, 20]);

    const handleDragStart = () => {
        if (window.navigator?.vibrate) {
            window.navigator.vibrate(10);
        }
    };

    return (
        <motion.div
            drag
            dragConstraints={{ left: -500, right: 500, top: -500, bottom: 500 }}
            dragElastic={0.1}
            whileDrag={{
                scale: 1.2,
                zIndex: 50,
                filter: "drop-shadow(0 20px 30px rgba(0,0,0,0.2))"
            }}
            initial={{
                scale: 0.8,
                opacity: 0,
                x: (index - 2) * 20,
                y: index * 10
            }}
            animate={{
                scale: 1,
                opacity: 1,
                transition: { delay: 0.1 * index, type: "spring", stiffness: 100 }
            }}
            style={{
                x,
                y,
                rotateX,
                rotateY,
                perspective: 1000
            }}
            onDragStart={handleDragStart}
            className="cursor-grab active:cursor-grabbing relative"
        >
            <Image
                src={src}
                alt="Nail kit item"
                width={100}
                height={180}
                className="object-contain drop-shadow-lg"
                draggable={false}
            />
        </motion.div>
    );
}
