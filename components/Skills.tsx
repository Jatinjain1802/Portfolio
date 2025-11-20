"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Globe, Server, MessageSquare, Sparkles } from "lucide-react";

export function Skills() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });

    const skillCategories = [
        {
            category: "Frontend",
            icon: Globe,
            skills: ["HTML", "CSS", "JavaScript", "React"],
            color: "from-blue-500 to-cyan-500"
        },
        {
            category: "Backend",
            icon: Server,
            skills: ["Express.js", "MongoDB"],
            color: "from-green-500 to-emerald-500"
        },
        {
            category: "APIs & Integration",
            icon: MessageSquare,
            skills: ["WhatsApp Meta API", "Groq API"],
            color: "from-purple-500 to-pink-500"
        },
        {
            category: "AI & Automation",
            icon: Sparkles,
            skills: ["Prompt Engineering"],
            color: "from-orange-500 to-red-500"
        }
    ];

    return (
        <section id="skills" className="min-h-screen flex items-center py-20 px-6 relative overflow-hidden">
            {/* Animated background gradient */}
            <div className="absolute inset-0 bg-gradient-to-b from-background via-card/20 to-background" />

            {/* Decorative blobs */}
            <motion.div
                className="absolute top-20 left-10 w-72 h-72 bg-primary/10 rounded-full blur-3xl"
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
                className="absolute bottom-20 right-10 w-96 h-96 bg-accent/10 rounded-full blur-3xl"
                animate={{
                    scale: [1.2, 1, 1.2],
                    opacity: [0.4, 0.6, 0.4],
                }}
                transition={{
                    duration: 10,
                    repeat: Infinity,
                    ease: "easeInOut",
                }}
            />

            <div className="max-w-6xl mx-auto w-full relative z-10" ref={ref}>
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl md:text-5xl font-bold mb-4">
                        Technical <span className="gradient-text">Skills</span>
                    </h2>
                    <div className="w-20 h-1 bg-gradient-to-r from-primary to-primary-dark mx-auto rounded-full mb-6" />
                    <p className="text-muted text-lg max-w-2xl mx-auto">
                        Technologies and tools I use to build modern, scalable web applications
                    </p>
                </motion.div>

                <div className="grid md:grid-cols-2 gap-8">
                    {skillCategories.map((category, categoryIndex) => (
                        <motion.div
                            key={category.category}
                            initial={{ opacity: 0, y: 50 }}
                            animate={isInView ? { opacity: 1, y: 0 } : {}}
                            transition={{ duration: 0.6, delay: categoryIndex * 0.15 }}
                            className="group"
                        >
                            <div className="relative p-6 bg-card border border-border rounded-2xl hover:border-primary/50 transition-all duration-300 hover:shadow-2xl hover:shadow-primary/10">
                                {/* Category header */}
                                <div className="flex items-center gap-3 mb-6">
                                    <div className={`p-3 rounded-xl bg-gradient-to-br ${category.color} shadow-lg`}>
                                        <category.icon className="w-6 h-6 text-white" />
                                    </div>
                                    <h3 className="text-2xl font-bold text-foreground">{category.category}</h3>
                                </div>

                                {/* Skills */}
                                <div className="flex flex-wrap gap-3">
                                    {category.skills.map((skill, skillIndex) => (
                                        <motion.div
                                            key={skill}
                                            initial={{ opacity: 0, scale: 0.8 }}
                                            animate={isInView ? { opacity: 1, scale: 1 } : {}}
                                            transition={{
                                                duration: 0.4,
                                                delay: categoryIndex * 0.15 + skillIndex * 0.1,
                                                type: "spring",
                                                stiffness: 200
                                            }}
                                            whileHover={{
                                                scale: 1.05,
                                                y: -2,
                                            }}
                                        >
                                            <div className="px-5 py-2.5 rounded-lg bg-card border-2 border-primary/30 hover:border-primary hover:shadow-lg transition-all cursor-pointer">
                                                <span className="font-semibold text-foreground">
                                                    {skill}
                                                </span>
                                            </div>
                                        </motion.div>
                                    ))}
                                </div>

                                {/* Hover glow effect */}
                                <div className={`absolute inset-0 rounded-2xl bg-gradient-to-r ${category.color} opacity-0 group-hover:opacity-5 transition-opacity duration-300 pointer-events-none`} />
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
