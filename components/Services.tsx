"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Code2, Palette, Megaphone, Sparkles } from "lucide-react";

export function Services() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });

    const services = [
        {
            icon: Code2,
            title: "Web Development",
            description: "Building fast, scalable, and modern web applications using the latest technologies and best practices.",
            gradient: "from-blue-500 to-cyan-500",
        },
        {
            icon: Palette,
            title: "UI/UX Design",
            description: "Creating beautiful, intuitive interfaces that provide exceptional user experiences and drive engagement.",
            gradient: "from-purple-500 to-pink-500",
        },
        {
            icon: Megaphone,
            title: "Brand Strategy",
            description: "Developing cohesive brand identities that resonate with your audience and stand out in the market.",
            gradient: "from-orange-500 to-red-500",
        },
        {
            icon: Sparkles,
            title: "Creative Consulting",
            description: "Providing expert guidance on digital strategy, product development, and creative direction.",
            gradient: "from-green-500 to-emerald-500",
        },
    ];

    return (
        <section id="services" className="min-h-screen py-20 px-6">
            <div className="max-w-7xl mx-auto" ref={ref}>
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl md:text-5xl font-bold mb-4">
                        What I <span className="gradient-text">Offer</span>
                    </h2>
                    <div className="w-20 h-1 bg-gradient-to-r from-primary to-primary-dark mx-auto rounded-full mb-6" />
                    <p className="text-lg text-muted max-w-2xl mx-auto">
                        Comprehensive services to bring your digital vision to life with
                        expertise and creativity.
                    </p>
                </motion.div>

                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
                    {services.map((service, index) => (
                        <motion.div
                            key={service.title}
                            initial={{ opacity: 0, y: 50 }}
                            animate={isInView ? { opacity: 1, y: 0 } : {}}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            whileHover={{ y: -8, scale: 1.02 }}
                            className="relative group"
                        >
                            {/* Glassmorphism card */}
                            <div className="relative p-8 bg-card border border-border rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 h-full">
                                {/* Gradient background on hover */}
                                <div className={`absolute inset-0 bg-gradient-to-br ${service.gradient} opacity-0 group-hover:opacity-5 rounded-2xl transition-opacity duration-300`} />

                                {/* Icon */}
                                <div className="relative mb-6">
                                    <div className={`inline-flex p-4 bg-gradient-to-br ${service.gradient} rounded-2xl shadow-lg`}>
                                        <service.icon className="w-8 h-8 text-white" />
                                    </div>
                                </div>

                                {/* Content */}
                                <div className="relative">
                                    <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors">
                                        {service.title}
                                    </h3>
                                    <p className="text-muted leading-relaxed">
                                        {service.description}
                                    </p>
                                </div>

                                {/* Decorative element */}
                                <div className={`absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r ${service.gradient} transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 rounded-b-2xl`} />
                            </div>
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
