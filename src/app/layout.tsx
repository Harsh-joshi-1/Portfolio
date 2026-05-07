import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/ThemeProvider";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { ScrollObserver } from "@/components/ScrollObserver";

const poppins = Poppins({
  weight: ["400", "500", "600", "700", "800", "900"],
  subsets: ["latin"],
  variable: "--font-poppins",
});

export const metadata: Metadata = {
  title: "Harsh Joshi | Portfolio",
  description: "ECE student at NIT Jalandhar building full stack and AI-powered applications.",
  icons: {
    icon: "https://res.cloudinary.com/dp4xt0bve/image/upload/f_auto,q_auto/v1778147241/favicon.webp",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning className="scroll-smooth">
      <head>
        <link
          rel="preload"
          fetchPriority="high"
          as="image"
          href="https://res.cloudinary.com/dp4xt0bve/image/upload/f_auto,q_auto,w_1200,c_limit/v1778146871/harsh.webp"
          type="image/webp"
        />
      </head>
      <body className={`${poppins.variable} font-sans bg-gray-50 dark:bg-neutral-950 text-gray-800 dark:text-neutral-100 transition-colors duration-300 antialiased`}>
        <ThemeProvider>
          <ScrollObserver />
          <Navbar />
          <div className="min-h-screen flex flex-col">
            <main className="flex-1 max-w-6xl mx-auto px-6 pt-32 pb-16 w-full">
              {children}
            </main>
            <Footer />
          </div>
        </ThemeProvider>
      </body>
    </html>
  );
}
