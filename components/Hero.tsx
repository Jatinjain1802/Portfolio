"use client";

import { motion } from "framer-motion";
import { ChevronDown } from "lucide-react";
import { ParticleBackground } from "./ParticleBackground";
import { AnimatedText, GradientAnimatedText, WaveText } from "./AnimatedText";

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

            {/* Animated circles */}
            <motion.div
                className="absolute top-20 left-20 w-72 h-72 bg-primary/20 rounded-full blur-3xl"
                animate={{
                    scale: [1, 1.2, 1],
                    opacity: [0.3, 0.5, 0.3],
                }}
                transition={{
                    duration: 8,
                    repeat: Infinity,
                    ease: "easeInOut",
                }}
            />
            <motion.div
                className="absolute bottom-20 right-20 w-96 h-96 bg-primary-dark/20 rounded-full blur-3xl"
                animate={{
                    scale: [1.2, 1, 1.2],
                    opacity: [0.5, 0.3, 0.5],
                }}
                transition={{
                    duration: 10,
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
                    <motion.h1
                        className="text-5xl md:text-7xl lg:text-8xl font-bold mb-6 leading-tight"
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.4 }}
                    >
                        <AnimatedText text="Hi, I'm " className="text-foreground" delay={0} />
                        <GradientAnimatedText>
                            <AnimatedText text="Your Name" delay={400} />
                        </GradientAnimatedText>
                    </motion.h1>

                    <motion.h2
                        className="text-5xl md:text-6xl lg:text-7xl font-bold mb-8"
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.6 }}
                    >
                        <AnimatedText text="I build things that " delay={1200} />
                        <GradientAnimatedText>
                            <WaveText text="matter" delay={2.5} />
                        </GradientAnimatedText>
                    </motion.h2>

                    <motion.p
                        className="text-xl md:text-2xl text-muted mb-12 max-w-3xl mx-auto"
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 3 }}
                    >
                        A creative professional crafting exceptional digital experiences
                        through design, development, and innovation.
                    </motion.p>

                    <motion.div
                        className="flex flex-col sm:flex-row gap-4 justify-center items-center"
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 3.5 }}
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
