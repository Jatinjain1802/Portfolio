"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Code, Palette, Zap, Heart } from "lucide-react";

export function About() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });

    const skills = [
        { icon: Code, label: "Web Development", color: "text-primary" },
        { icon: Palette, label: "UI/UX Design", color: "text-accent" },
        { icon: Zap, label: "Performance", color: "text-primary-dark" },
        { icon: Heart, label: "User Experience", color: "text-accent" },
    ];

    return (
        <section id="about" className="min-h-screen flex items-center py-20 px-6">
            <div className="max-w-6xl mx-auto w-full" ref={ref}>
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl md:text-5xl font-bold mb-4">
                        About <span className="gradient-text">Me</span>
                    </h2>
                    <div className="w-20 h-1 bg-gradient-to-r from-primary to-primary-dark mx-auto rounded-full" />
                </motion.div>

                <div className="grid md:grid-cols-2 gap-12 items-center">
                    {/* Profile Image */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        animate={isInView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.6, delay: 0.2 }}
                        className="relative"
                    >
                        <div className="relative w-full aspect-square max-w-md mx-auto">
                            <div className="absolute inset-0 bg-gradient-to-br from-primary to-primary-dark rounded-3xl transform rotate-6" />
                            <div className="relative bg-card rounded-3xl overflow-hidden border-4 border-border shadow-2xl">
                                <div className="w-full h-full bg-gradient-to-br from-primary/20 to-primary-dark/20 flex items-center justify-center">
                                    <div className="text-center p-8">
                                        <div className="w-32 h-32 mx-auto mb-4 rounded-full bg-gradient-to-br from-primary to-primary-dark flex items-center justify-center">
                                            <span className="text-6xl">👋</span>
                                        </div>
                                        <p className="text-muted text-sm">Your Photo Here</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </motion.div>

                    {/* Bio Content */}
                    <motion.div
                        initial={{ opacity: 0, x: 50 }}
                        animate={isInView ? { opacity: 1, x: 0 } : {}}
                        transition={{ duration: 0.6, delay: 0.4 }}
                    >
                        <h3 className="text-3xl font-bold mb-6">
                            Passionate about creating exceptional digital experiences
                        </h3>
                        <p className="text-lg text-muted mb-6 leading-relaxed">
                            I'm a creative professional with a passion for crafting beautiful,
                            functional, and user-centered digital products. With years of
                            experience in design and development, I bring ideas to life through
                            clean code and thoughtful design.
                        </p>
                        <p className="text-lg text-muted mb-8 leading-relaxed">
                            My approach combines technical expertise with creative thinking,
                            always focusing on delivering solutions that not only look great
                            but also solve real problems and create value.
                        </p>

                        {/* Skills Grid */}
                        <div className="grid grid-cols-2 gap-4">
                            {skills.map((skill, index) => (
                                <motion.div
                                    key={skill.label}
                                    initial={{ opacity: 0, y: 20 }}
                                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                                    transition={{ duration: 0.4, delay: 0.6 + index * 0.1 }}
                                    className="flex items-center gap-3 p-4 bg-card border border-border rounded-xl hover:border-primary transition-colors"
                                >
                                    <skill.icon className={`w-6 h-6 ${skill.color}`} />
                                    <span className="font-semibold">{skill.label}</span>
                                </motion.div>
                            ))}
                        </div>
                    </motion.div>
                </div>
            </div>
        </section>
    );
}
