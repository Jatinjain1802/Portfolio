"use client";

import { motion } from "framer-motion";
import { useInView } from "framer-motion";
import { useRef } from "react";
import { Quote } from "lucide-react";

export function Testimonials() {
    const ref = useRef(null);
    const isInView = useInView(ref, { once: true, margin: "-100px" });

    const testimonials = [
        {
            name: "Sarah Johnson",
            role: "CEO, TechStart Inc.",
            content: "Working with this professional was an absolute pleasure. The attention to detail and creative solutions exceeded our expectations. Our project was delivered on time and beyond what we imagined.",
            avatar: "👩‍💼",
        },
        {
            name: "Michael Chen",
            role: "Product Manager, InnovateCo",
            content: "Exceptional work! The combination of technical expertise and design sensibility resulted in a product that our users love. Communication was clear and the process was smooth from start to finish.",
            avatar: "👨‍💻",
        },
        {
            name: "Emily Rodriguez",
            role: "Founder, Creative Studio",
            content: "A true professional who brings both creativity and technical excellence to every project. The final result not only met our requirements but also brought fresh ideas that elevated our brand.",
            avatar: "👩‍🎨",
        },
    ];

    return (
        <section id="testimonials" className="min-h-screen py-20 px-6 bg-card/30">
            <div className="max-w-7xl mx-auto" ref={ref}>
                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    animate={isInView ? { opacity: 1, y: 0 } : {}}
                    transition={{ duration: 0.6 }}
                    className="text-center mb-16"
                >
                    <h2 className="text-4xl md:text-5xl font-bold mb-4">
                        Client <span className="gradient-text">Testimonials</span>
                    </h2>
                    <div className="w-20 h-1 bg-gradient-to-r from-primary to-primary-dark mx-auto rounded-full mb-6" />
                    <p className="text-lg text-muted max-w-2xl mx-auto">
                        Don't just take my word for it - hear what clients have to say about
                        working together.
                    </p>
                </motion.div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {testimonials.map((testimonial, index) => (
                        <motion.div
                            key={testimonial.name}
                            initial={{ opacity: 0, y: 50 }}
                            animate={isInView ? { opacity: 1, y: 0 } : {}}
                            transition={{ duration: 0.5, delay: index * 0.1 }}
                            whileHover={{ y: -8 }}
                            className="relative bg-card border border-border rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300"
                        >
                            {/* Quote icon */}
                            <div className="absolute top-6 right-6 opacity-10">
                                <Quote className="w-16 h-16 text-primary" />
                            </div>

                            {/* Content */}
                            <div className="relative">
                                <p className="text-muted mb-6 leading-relaxed italic">
                                    "{testimonial.content}"
                                </p>

                                {/* Author */}
                                <div className="flex items-center gap-4">
                                    <div className="w-12 h-12 rounded-full bg-gradient-to-br from-primary to-primary-dark flex items-center justify-center text-2xl">
                                        {testimonial.avatar}
                                    </div>
                                    <div>
                                        <h4 className="font-bold text-foreground">
                                            {testimonial.name}
                                        </h4>
                                        <p className="text-sm text-muted">{testimonial.role}</p>
                                    </div>
                                </div>
                            </div>

                            {/* Decorative gradient */}
                            <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-primary to-primary-dark rounded-b-2xl" />
                        </motion.div>
                    ))}
                </div>
            </div>
        </section>
    );
}
