"use client";

import { Heart } from "lucide-react";

export function Footer() {
    const currentYear = new Date().getFullYear();

    const quickLinks = [
        { label: "Home", href: "#" },
        { label: "About", href: "#about" },
        { label: "Projects", href: "#projects" },
        { label: "Services", href: "#services" },
        { label: "Contact", href: "#contact" },
    ];

    return (
        <footer className="bg-card/50 border-t border-border py-12 px-6">
            <div className="max-w-7xl mx-auto">
                <div className="grid md:grid-cols-3 gap-8 mb-8">
                    {/* Brand */}
                    <div>
                        <h3 className="text-2xl font-bold gradient-text mb-3">
                            Your Name
                        </h3>
                        <p className="text-muted">
                            Building exceptional digital experiences with passion and precision.
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="font-semibold mb-4">Quick Links</h4>
                        <ul className="space-y-2">
                            {quickLinks.map((link) => (
                                <li key={link.label}>
                                    <a
                                        href={link.href}
                                        className="text-muted hover:text-primary transition-colors"
                                    >
                                        {link.label}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Contact Info */}
                    <div>
                        <h4 className="font-semibold mb-4">Get In Touch</h4>
                        <ul className="space-y-2 text-muted">
                            <li>
                                <a
                                    href="mailto:hello@example.com"
                                    className="hover:text-primary transition-colors"
                                >
                                    hello@example.com
                                </a>
                            </li>
                            <li>
                                <a
                                    href="tel:+1234567890"
                                    className="hover:text-primary transition-colors"
                                >
                                    +1 (234) 567-890
                                </a>
                            </li>
                            <li className="text-muted">Location, Country</li>
                        </ul>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="pt-8 border-t border-border flex flex-col md:flex-row justify-between items-center gap-4">
                    <p className="text-muted text-sm">
                        © {currentYear} Your Name. All rights reserved.
                    </p>
                    <p className="text-muted text-sm flex items-center gap-2">
                        Designed & Built with{" "}
                        <Heart className="w-4 h-4 text-accent fill-accent" /> by Your Name
                    </p>
                </div>
            </div>
        </footer>
    );
}
