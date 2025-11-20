"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { Moon, Sun } from "lucide-react";
import { motion } from "framer-motion";

export function ThemeToggle() {
    const [mounted, setMounted] = useState(false);
    const { theme, setTheme } = useTheme();

    useEffect(() => {
        setMounted(true);
    }, []);

    if (!mounted) {
        return null;
    }

    return (
        <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            className="fixed top-8 right-8 z-50 p-3 rounded-full bg-card border border-border shadow-lg hover:shadow-xl transition-shadow"
            aria-label="Toggle theme"
        >
            <motion.div
                initial={false}
                animate={{ rotate: theme === "dark" ? 180 : 0 }}
                transition={{ duration: 0.3 }}
            >
                {theme === "dark" ? (
                    <Sun className="w-5 h-5 text-foreground" />
                ) : (
                    <Moon className="w-5 h-5 text-foreground" />
                )}
            </motion.div>
        </motion.button>
    );
}
