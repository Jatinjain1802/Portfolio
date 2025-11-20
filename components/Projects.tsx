"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef, useState, useEffect } from "react";
import { ExternalLink, Github } from "lucide-react";

export function Projects() {
    const containerRef = useRef<HTMLDivElement>(null);
    const [currentProject, setCurrentProject] = useState(0);
    const [isScrolling, setIsScrolling] = useState(false);

    const projects = [
        {
            title: "E-Commerce Platform",
            description: "A modern e-commerce platform built with React and Node.js, featuring real-time inventory management, secure payment processing, and an intuitive admin dashboard.",
            tags: ["React", "Node.js", "MongoDB", "Stripe"],
            image: "/api/placeholder/600/400",
            github: "#",
            demo: "#"
        },
        {
            title: "AI-Powered Analytics Dashboard",
            description: "An intelligent analytics dashboard that uses machine learning to provide predictive insights and automated reporting for business metrics.",
            tags: ["React", "Python", "TensorFlow", "D3.js"],
            image: "/api/placeholder/600/400",
            github: "#",
            demo: "#"
        },
        {
            title: "Mobile Fitness App",
            description: "A comprehensive fitness tracking application with workout plans, nutrition tracking, and social features to keep users motivated.",
            tags: ["React Native", "Firebase", "Redux"],
            image: "/api/placeholder/600/400",
            github: "#",
            demo: "#"
        },
        {
            title: "Real-Time Chat Application",
            description: "A scalable real-time messaging platform with end-to-end encryption, file sharing, and video call capabilities.",
            tags: ["React", "Socket.io", "WebRTC", "Express"],
            image: "/api/placeholder/600/400",
            github: "#",
            demo: "#"
        }
    ];

    useEffect(() => {
        const handleWheel = (e: WheelEvent) => {
            if (isScrolling) return;

            e.preventDefault();

            if (e.deltaY > 0 && currentProject < projects.length - 1) {
                // Scroll down - next project
                setIsScrolling(true);
                setCurrentProject(prev => prev + 1);
                setTimeout(() => setIsScrolling(false), 800);
            } else if (e.deltaY < 0 && currentProject > 0) {
                // Scroll up - previous project
                setIsScrolling(true);
                setCurrentProject(prev => prev - 1);
                setTimeout(() => setIsScrolling(false), 800);
            } else if (e.deltaY > 0 && currentProject === projects.length - 1) {
                // At last project, allow normal scroll to next section
                const container = containerRef.current;
                if (container) {
                    container.style.position = 'relative';
                    setTimeout(() => {
                        if (container) container.style.position = 'sticky';
                    }, 100);
                }
            }
        };

        const container = containerRef.current;
        if (container) {
            container.addEventListener('wheel', handleWheel, { passive: false });
        }

        return () => {
            if (container) {
                container.removeEventListener('wheel', handleWheel);
            }
        };
    }, [currentProject, isScrolling, projects.length]);

    return (
        <section
            id="projects"
            ref={containerRef}
            className="min-h-screen sticky top-0 flex items-center py-20 px-6 bg-background overflow-hidden"
        >
            <div className="max-w-7xl mx-auto w-full">
                {/* Header */}
                <motion.div
                    initial={{ opacity: 0, y: -20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-center mb-12"
                >
                    <h2 className="text-4xl md:text-5xl font-bold mb-4">
                        Featured <span className="gradient-text">Projects</span>
                    </h2>
                    <div className="w-20 h-1 bg-gradient-to-r from-primary to-primary-dark mx-auto rounded-full mb-4" />
                    <p className="text-muted text-sm">
                        Project {currentProject + 1} of {projects.length}
                    </p>
                </motion.div>

                {/* Project Display */}
                <div className="grid md:grid-cols-2 gap-12 items-center">
                    {/* Left side - Description */}
                    <motion.div
                        key={`desc-${currentProject}`}
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -50 }}
                        transition={{ duration: 0.6 }}
                        className="space-y-6"
                    >
                        <motion.h3
                            className="text-4xl md:text-5xl font-bold"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2 }}
                        >
                            {projects[currentProject].title}
                        </motion.h3>

                        <motion.p
                            className="text-lg text-muted leading-relaxed"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.3 }}
                        >
                            {projects[currentProject].description}
                        </motion.p>

                        <motion.div
                            className="flex flex-wrap gap-2"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.4 }}
                        >
                            {projects[currentProject].tags.map((tag, index) => (
                                <span
                                    key={tag}
                                    className="px-4 py-2 bg-primary/10 border border-primary/30 rounded-full text-sm font-medium"
                                >
                                    {tag}
                                </span>
                            ))}
                        </motion.div>

                        <motion.div
                            className="flex gap-4"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.5 }}
                        >
                            <a
                                href={projects[currentProject].github}
                                className="flex items-center gap-2 px-6 py-3 bg-card border-2 border-border rounded-full hover:border-primary transition-colors"
                            >
                                <Github className="w-5 h-5" />
                                <span className="font-semibold">Code</span>
                            </a>
                            <a
                                href={projects[currentProject].demo}
                                className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-primary to-primary-dark text-white rounded-full hover:shadow-xl transition-shadow"
                            >
                                <ExternalLink className="w-5 h-5" />
                                <span className="font-semibold">Live Demo</span>
                            </a>
                        </motion.div>
                    </motion.div>

                    {/* Right side - Image */}
                    <motion.div
                        key={`img-${currentProject}`}
                        initial={{ opacity: 0, x: 50 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: 50 }}
                        transition={{ duration: 0.6 }}
                        className="relative"
                    >
                        <div className="relative rounded-2xl overflow-hidden shadow-2xl border-4 border-border group">
                            <div className="aspect-video bg-gradient-to-br from-primary/20 to-primary-dark/20 flex items-center justify-center">
                                <div className="text-center p-8">
                                    <div className="w-32 h-32 mx-auto mb-4 rounded-2xl bg-gradient-to-br from-primary to-primary-dark flex items-center justify-center">
                                        <span className="text-6xl">🚀</span>
                                    </div>
                                    <p className="text-muted text-sm">Project Screenshot</p>
                                </div>
                            </div>
                            {/* Overlay on hover */}
                            <div className="absolute inset-0 bg-gradient-to-t from-primary/50 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                        </div>

                        {/* Decorative elements */}
                        <div className="absolute -top-4 -right-4 w-24 h-24 bg-primary/20 rounded-full blur-2xl -z-10" />
                        <div className="absolute -bottom-4 -left-4 w-32 h-32 bg-accent/20 rounded-full blur-2xl -z-10" />
                    </motion.div>
                </div>

                {/* Navigation dots */}
                <motion.div
                    className="flex justify-center gap-2 mt-12"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.6 }}
                >
                    {projects.map((_, index) => (
                        <button
                            key={index}
                            onClick={() => setCurrentProject(index)}
                            className={`w-3 h-3 rounded-full transition-all ${index === currentProject
                                    ? 'bg-primary w-8'
                                    : 'bg-border hover:bg-primary/50'
                                }`}
                            aria-label={`Go to project ${index + 1}`}
                        />
                    ))}
                </motion.div>

                {/* Scroll hint */}
                <motion.div
                    className="text-center mt-8"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ delay: 0.8 }}
                >
                    <p className="text-muted text-sm">
                        {currentProject < projects.length - 1
                            ? "Scroll to see next project"
                            : "Scroll to continue"}
                    </p>
                </motion.div>
            </div>
        </section>
    );
}
