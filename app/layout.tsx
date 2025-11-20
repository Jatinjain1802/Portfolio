import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
});

export const metadata: Metadata = {
  title: "Portfolio | Creative Professional",
  description: "A modern portfolio showcasing creative work, projects, and professional services.",
  keywords: ["portfolio", "web development", "design", "creative"],
  authors: [{ name: "Your Name" }],
  openGraph: {
    title: "Portfolio | Creative Professional",
    description: "A modern portfolio showcasing creative work, projects, and professional services.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={`${inter.variable} antialiased`}>
        <ThemeProvider attribute="data-theme" defaultTheme="light" enableSystem>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
