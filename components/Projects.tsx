"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { ExternalLink, Github } from "lucide-react";

export function Projects() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });

    const projects = [
        {
            title: "E-Commerce Platform",
            description: "A modern, scalable e-commerce solution with advanced features and seamless user experience.",
            tags: ["Next.js", "TypeScript", "Stripe"],
            gradient: "from-blue-500 to-purple-600",
        },
        {
            title: "AI-Powered Dashboard",
            description: "Analytics dashboard with AI-driven insights and real-time data visualization.",
            tags: ["React", "Python", "TensorFlow"],
            gradient: "from-purple-500 to-pink-600",
        },
        {
            title: "Mobile Fitness App",
            description: "Cross-platform fitness tracking app with personalized workout plans and progress tracking.",
            tags: ["React Native", "Firebase", "Redux"],
            gradient: "from-green-500 to-teal-600",
        },
        {
            title: "Design System",
            description: "Comprehensive design system with reusable components and documentation.",
            tags: ["Figma", "Storybook", "React"],
            gradient: "from-orange-500 to-red-600",
        },
        {
            title: "Real-Time Chat App",
            description: "Secure messaging platform with end-to-end encryption and group chat features.",
            tags: ["WebSocket", "Node.js", "MongoDB"],
            gradient: "from-cyan-500 to-blue-600",
        },
        {
            title: "Portfolio Generator",
            description: "SaaS platform for creating beautiful portfolio websites with no coding required.",
            tags: ["Next.js", "Tailwind", "Prisma"],
            gradient: "from-pink-500 to-rose-600",
        },
    ];

    return (
        <section id="projects" className="min-h-screen py-20 px-6 bg-card/30">
            <div className="max-w-7xl mx-auto" ref={ref}>
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl md:text-5xl font-bold mb-4">
                        Featured <span className="gradient-text">Projects</span>
                    </h2>
                    <div className="w-20 h-1 bg-gradient-to-r from-primary to-primary-dark mx-auto rounded-full mb-6" />
                    <p className="text-lg text-muted max-w-2xl mx-auto">
                        A selection of projects that showcase my skills and passion for creating
                        exceptional digital experiences.
                    </p>
                </motion.div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project, index) => (
                        <motion.div
                            key={project.title}
                            initial={{ opacity: 0, y: 50 }}
                            animate={isInView ? { opacity: 1, y: 0 } : {}}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            whileHover={{ y: -8 }}
                            className="group relative bg-card border border-border rounded-2xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-300"
                        >
                            {/* Project Image Placeholder */}
                            <div className={`relative h-48 bg-gradient-to-br ${project.gradient} overflow-hidden`}>
                                <div className="absolute inset-0 bg-black/20 group-hover:bg-black/10 transition-colors" />
                                <div className="absolute inset-0 flex items-center justify-center">
                                    <div className="text-white text-6xl opacity-50">🚀</div>
                                </div>

                                {/* Hover overlay */}
                                <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity flex items-end justify-center pb-6 gap-4">
                                    <motion.a
                                        href="#"
                                        whileHover={{ scale: 1.1 }}
                                        whileTap={{ scale: 0.95 }}
                                        className="p-3 bg-white/20 backdrop-blur-sm rounded-full hover:bg-white/30 transition-colors"
                                        aria-label="View project"
                                    >
                                        <ExternalLink className="w-5 h-5 text-white" />
                                    </motion.a>
                                    <motion.a
                                        href="#"
                                        whileHover={{ scale: 1.1 }}
                                        whileTap={{ scale: 0.95 }}
                                        className="p-3 bg-white/20 backdrop-blur-sm rounded-full hover:bg-white/30 transition-colors"
                                        aria-label="View code"
                                    >
                                        <Github className="w-5 h-5 text-white" />
                                    </motion.a>
                                </div>
                            </div>

                            {/* Project Info */}
                            <div className="p-6">
                                <h3 className="text-xl font-bold mb-2 group-hover:text-primary transition-colors">
                                    {project.title}
                                </h3>
                                <p className="text-muted mb-4 line-clamp-2">
                                    {project.description}
                                </p>

                                {/* Tags */}
                                <div className="flex flex-wrap gap-2">
                                    {project.tags.map((tag) => (
                                        <span
                                            key={tag}
                                            className="px-3 py-1 text-xs font-medium bg-primary/10 text-primary rounded-full"
                                        >
                                            {tag}
                                        </span>
                                    ))}
                                </div>
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
