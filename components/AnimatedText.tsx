"use client";

import { useEffect, useState } from "react";
import { motion } from "framer-motion";

interface AnimatedTextProps {
    text: string;
    className?: string;
    delay?: number;
}

export function AnimatedText({ text, className = "", delay = 0 }: AnimatedTextProps) {
    const [displayedText, setDisplayedText] = useState("");
    const [currentIndex, setCurrentIndex] = useState(0);

    useEffect(() => {
        if (currentIndex < text.length) {
            const timeout = setTimeout(() => {
                setDisplayedText((prev) => prev + text[currentIndex]);
                setCurrentIndex((prev) => prev + 1);
            }, 50 + delay);

            return () => clearTimeout(timeout);
        }
    }, [currentIndex, text, delay]);

    return (
        <span className={className}>
            {displayedText}
            {currentIndex < text.length && (
                <motion.span
                    animate={{ opacity: [1, 0] }}
                    transition={{ duration: 0.5, repeat: Infinity }}
                    className="inline-block w-0.5 h-[1em] bg-current ml-1 align-middle"
                />
            )}
        </span>
    );
}

interface GradientTextProps {
    children: React.ReactNode;
    className?: string;
}

export function GradientAnimatedText({ children, className = "" }: GradientTextProps) {
    return (
        <motion.span
            className={`gradient-text ${className}`}
            animate={{
                backgroundPosition: ["0% 50%", "100% 50%", "0% 50%"],
            }}
            transition={{
                duration: 5,
                repeat: Infinity,
                ease: "linear",
            }}
            style={{
                backgroundSize: "200% 200%",
            }}
        >
            {children}
        </motion.span>
    );
}

interface WaveTextProps {
    text: string;
    className?: string;
    delay?: number;
}

export function WaveText({ text, className = "", delay = 0 }: WaveTextProps) {
    const letters = text.split("");

    return (
        <span className={className}>
            {letters.map((letter, index) => (
                <motion.span
                    key={index}
                    initial={{ y: 0 }}
                    animate={{ y: [0, -10, 0] }}
                    transition={{
                        duration: 2,
                        repeat: Infinity,
                        delay: delay + index * 0.1,
                        ease: "easeInOut",
                    }}
                    className="inline-block"
                >
                    {letter === " " ? "\u00A0" : letter}
                </motion.span>
            ))}
        </span>
    );
}
