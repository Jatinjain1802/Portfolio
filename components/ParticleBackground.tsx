"use client";

import { useEffect, useRef } from "react";

interface Particle {
    x: number;
    y: number;
    targetX: number;
    targetY: number;
    size: number;
    opacity: number;
}

export function ParticleBackground() {
    const canvasRef = useRef<HTMLCanvasElement>(null);
    const particlesRef = useRef<Particle[]>([]);
    const mouseRef = useRef({ x: 0, y: 0 });
    const animationFrameRef = useRef<number>();

    useEffect(() => {
        const canvas = canvasRef.current;
        if (!canvas) return;

        const ctx = canvas.getContext("2d", { alpha: true });
        if (!ctx) return;

        // Set canvas size
        const resizeCanvas = () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
        };
        resizeCanvas();
        window.addEventListener("resize", resizeCanvas);

        // Create particles
        const particleCount = 80;
        particlesRef.current = Array.from({ length: particleCount }, () => ({
            x: Math.random() * canvas.width,
            y: Math.random() * canvas.height,
            targetX: Math.random() * canvas.width,
            targetY: Math.random() * canvas.height,
            size: Math.random() * 3 + 1,
            opacity: Math.random() * 0.5 + 0.2,
        }));

        // Mouse move handler
        const handleMouseMove = (e: MouseEvent) => {
            mouseRef.current = { x: e.clientX, y: e.clientY };
        };
        window.addEventListener("mousemove", handleMouseMove);

        // Animation loop
        const animate = () => {
            if (!ctx || !canvas) return;

            ctx.clearRect(0, 0, canvas.width, canvas.height);

            particlesRef.current.forEach((particle) => {
                // Calculate distance from mouse
                const dx = mouseRef.current.x - particle.x;
                const dy = mouseRef.current.y - particle.y;
                const distance = Math.sqrt(dx * dx + dy * dy);
                const maxDistance = 20;

                // Move particle towards mouse if close
                if (distance < maxDistance) {
                    const force = (maxDistance - distance) / maxDistance;
                    particle.targetX = particle.x + dx * force * 0.1;
                    particle.targetY = particle.y + dy * force * 0.1;
                } else {
                    // Random drift when far from mouse
                    particle.targetX += (Math.random() - 0.5) * 2;
                    particle.targetY += (Math.random() - 0.5) * 2;
                }

                // Smooth movement
                particle.x += (particle.targetX - particle.x) * 0.05;
                particle.y += (particle.targetY - particle.y) * 0.05;

                // Keep particles in bounds
                if (particle.x < 0) particle.targetX = canvas.width;
                if (particle.x > canvas.width) particle.targetX = 0;
                if (particle.y < 0) particle.targetY = canvas.height;
                if (particle.y > canvas.height) particle.targetY = 0;

                // Draw particle
                ctx.beginPath();
                ctx.arc(particle.x, particle.y, particle.size, 0, Math.PI * 2);

                // Use theme-aware color
                const isDark = document.documentElement.getAttribute("data-theme") === "dark";
                ctx.fillStyle = isDark
                    ? `rgba(129, 140, 248, ${particle.opacity})`
                    : `rgba(102, 126, 234, ${particle.opacity})`;
                ctx.fill();

                // Draw connections to nearby particles
                particlesRef.current.forEach((otherParticle) => {
                    const dx = particle.x - otherParticle.x;
                    const dy = particle.y - otherParticle.y;
                    const distance = Math.sqrt(dx * dx + dy * dy);

                    if (distance < 100) {
                        ctx.beginPath();
                        ctx.moveTo(particle.x, particle.y);
                        ctx.lineTo(otherParticle.x, otherParticle.y);
                        ctx.strokeStyle = isDark
                            ? `rgba(129, 140, 248, ${0.1 * (1 - distance / 100)})`
                            : `rgba(102, 126, 234, ${0.1 * (1 - distance / 100)})`;
                        ctx.lineWidth = 1;
                        ctx.stroke();
                    }
                });
            });

            animationFrameRef.current = requestAnimationFrame(animate);
        };

        animate();

        // Cleanup
        return () => {
            window.removeEventListener("resize", resizeCanvas);
            window.removeEventListener("mousemove", handleMouseMove);
            if (animationFrameRef.current) {
                cancelAnimationFrame(animationFrameRef.current);
            }
        };
    }, []);

    return (
        <canvas
            ref={canvasRef}
            className="fixed inset-0 pointer-events-none z-0"
            style={{ opacity: 0.6 }}
        />
    );
}
