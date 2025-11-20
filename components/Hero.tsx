"use client";

import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { ParticleBackground } from "./ParticleBackground";

export function Hero() {
    const scrollToNext = () => {
        const aboutSection = document.getElementById("about");
        aboutSection?.scrollIntoView({ behavior: "smooth" });
    };

    return (
        <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
            {/* Particle Background */}
            <ParticleBackground />

            {/* Gradient background */}
            <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-background to-primary-dark/10" />

            {/* Enhanced animated gradient orbs */}
            <motion.div
                className="absolute top-20 left-20 w-96 h-96 bg-gradient-to-br from-primary/30 to-primary-dark/20 rounded-full blur-3xl"
                animate={{
                    scale: [1, 1.3, 1],
                    opacity: [0.4, 0.6, 0.4],
                    x: [0, 50, 0],
                    y: [0, 30, 0],
                }}
                transition={{
                    duration: 8,
                    repeat: Infinity,
                    ease: "easeInOut",
                }}
            />
            <motion.div
                className="absolute bottom-20 right-20 w-[500px] h-[500px] bg-gradient-to-tl from-primary-dark/30 to-accent/20 rounded-full blur-3xl"
                animate={{
                    scale: [1.2, 1, 1.2],
                    opacity: [0.5, 0.3, 0.5],
                    x: [0, -40, 0],
                    y: [0, -50, 0],
                }}
                transition={{
                    duration: 10,
                    repeat: Infinity,
                    ease: "easeInOut",
                }}
            />
            <motion.div
                className="absolute top-1/2 left-1/2 w-80 h-80 bg-gradient-to-r from-accent/20 to-primary/25 rounded-full blur-3xl"
                animate={{
                    scale: [1, 1.4, 1],
                    opacity: [0.3, 0.5, 0.3],
                    x: [-100, 100, -100],
                    y: [-50, 50, -50],
                    rotate: [0, 180, 360],
                }}
                transition={{
                    duration: 15,
                    repeat: Infinity,
                    ease: "easeInOut",
                }}
            />
            <motion.div
                className="absolute top-1/3 right-1/4 w-64 h-64 bg-gradient-to-bl from-primary/20 to-primary-dark/30 rounded-full blur-2xl"
                animate={{
                    scale: [1.1, 0.9, 1.1],
                    opacity: [0.4, 0.6, 0.4],
                    x: [0, -30, 0],
                    y: [0, 40, 0],
                }}
                transition={{
                    duration: 12,
                    repeat: Infinity,
                    ease: "easeInOut",
                }}
            />
            <motion.div
                className="absolute bottom-1/3 left-1/3 w-72 h-72 bg-gradient-to-tr from-accent/15 to-primary-dark/25 rounded-full blur-3xl"
                animate={{
                    scale: [0.9, 1.2, 0.9],
                    opacity: [0.3, 0.5, 0.3],
                    x: [0, 60, 0],
                    y: [0, -40, 0],
                }}
                transition={{
                    duration: 14,
                    repeat: Infinity,
                    ease: "easeInOut",
                }}
            />

            {/* Content */}
            <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.8, delay: 0.2 }}
                >
                    {/* Animated heading */}
                    <motion.h1
                        className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 leading-tight"
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                    >
                        {"Hi, I'm ".split("").map((char, index) => (
                            <motion.span
                                key={`hi-${index}`}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                transition={{
                                    duration: 0.5,
                                    delay: 0.5 + index * 0.05,
                                }}
                            >
                                {char === " " ? "\u00A0" : char}
                            </motion.span>
                        ))}
                        <motion.span
                            className="gradient-text inline-block"
                            initial={{ opacity: 0, scale: 0.5 }}
                            animate={{ opacity: 1, scale: 1 }}
                            transition={{ delay: 1, duration: 0.6, type: "spring", stiffness: 150 }}
                        >
                            Jatin Jain
                        </motion.span>
                    </motion.h1>

                    {/* Second line */}
                    <motion.h2
                        className="text-5xl md:text-6xl lg:text-7xl font-bold mb-8"
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 1.5 }}
                    >
                        <motion.span
                            initial={{ opacity: 0, x: -20 }}
                            animate={{ opacity: 1, x: 0 }}
                            transition={{ delay: 1.6, duration: 0.6 }}
                        >
                            I build things that{" "}
                        </motion.span>
                        <span className="gradient-text inline-block">
                            {"matter".split("").map((char, index) => (
                                <motion.span
                                    key={`matter-${index}`}
                                    className="inline-block"
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={{
                                        opacity: 1,
                                        y: [20, 0],
                                    }}
                                    transition={{
                                        opacity: { delay: 2 + index * 0.1, duration: 0.3 },
                                        y: {
                                            delay: 2 + index * 0.1,
                                            duration: 0.5,
                                        }
                                    }}
                                >
                                    {char}
                                </motion.span>
                            ))}
                        </span>
                    </motion.h2>

                    <motion.p
                        className="text-xl md:text-2xl text-muted mb-12 max-w-3xl mx-auto"
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 2.5 }}
                    >
                        A creative professional crafting exceptional digital experiences
                        through design, development, and innovation.
                    </motion.p>

                    <motion.div
                        className="flex flex-col sm:flex-row gap-4 justify-center items-center"
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 3 }}
                    >
                        <motion.a
                            href="#projects"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="px-8 py-4 bg-gradient-to-r from-primary to-primary-dark text-white rounded-full font-semibold shadow-lg hover:shadow-xl transition-shadow"
                        >
                            View My Work
                        </motion.a>
                        <motion.a
                            href="#contact"
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.95 }}
                            className="px-8 py-4 bg-card border-2 border-border text-foreground rounded-full font-semibold hover:border-primary transition-colors"
                        >
                            Get In Touch
                        </motion.a>
                    </motion.div>
                </motion.div>
            </div>

            {/* Scroll indicator */}
            <motion.button
                onClick={scrollToNext}
                className="absolute bottom-8 left-1/2 transform -translate-x-1/2 cursor-pointer z-10"
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 2, repeat: Infinity }}
                aria-label="Scroll to next section"
            >
                <ChevronDown className="w-8 h-8 text-muted" />
            </motion.button>
        </section>
    );
}
